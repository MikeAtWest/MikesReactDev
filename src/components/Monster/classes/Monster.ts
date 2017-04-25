import { AbilityScores, IAbilityScores } from "./AbilityScores";
import { ArmorList, IArmorList } from "./ArmorList";
import { CompleteSavingThrows, ICompleteSavingThrows } from "./CompleteSavingThrows";
import { CompleteSkill, ICompleteSkill } from "./CompleteSkill";
import { CREntry, ICREntry } from "./CREntry";
import { CRTable, ICRTable } from "./CRTable";
import { DiceCollection, IDiceCollection } from "./DiceCollection";
import { Feature, IFeature } from "./Feature";
import { HitDice, IHitDice } from "./HitDice";
import { IImmunityList, ImmunityList } from "./ImmunityList";
import { ILanguages, Languages } from "./Languages";
import { IResistanceList, ResistanceList } from "./ResistanceList";
import { ISavingThrows, SavingThrows } from "./SavingThrows";
import { ISkill, Skill } from "./Skill";
import { ISpeedList, SpeedList } from "./SpeedList";
import { IVulnerabilityList, VulnerabilityList } from "./VulnerabilityList";

import { Alignment, Size, Type } from "./enums";

import { modifierStr} from "./utilities";

export interface IMonster {
    name: string;
    shortName: string;
    size: Size;
    type: Type;
    tags: string[];
    alignment: Alignment;
    armorList: IArmorList;
    hp: number;
    hpRoll: IDiceCollection;
    speeds: ISpeedList;
    abilityScores: IAbilityScores;
    savingThrows: ISavingThrows;
    skills: ISkill[];
    languages: ILanguages;
    expectedCR: ICREntry;
    hitDice: IHitDice;
    ac: number;
    fullAC: string;
    resistances: IResistanceList;
    immunities: IImmunityList;
    vulnerabilities: IVulnerabilityList;
    features: IFeature[];
    legendaryActionsIntro: string;

    hitPointMultiplier: number;
    hitPointMultiplierNote: string;
    effectiveHitPoints: number;
    effectiveHitPointsNote: string;
    challengeRatingNote: string; 

    completeSkills: ICompleteSkill[];
    completeSavingThrows: ICompleteSavingThrows;
    processCompleteSkills(): void;
    processCompleteSavingThrows(): void;
}

export class Monster implements IMonster {
    public name: string = "Orc";
    public size: Size = Size.Medium;
    public type: Type = Type.Humanoid;
    public tags: string[] = ["orc"];
    public alignment: Alignment = Alignment.ChaoticEvil;
    public armorList = new ArmorList();
    public speeds = new SpeedList();
    public abilityScores = new AbilityScores(10, 10, 10, 10, 10, 10);
    public savingThrows = new SavingThrows(false, false, false, false, false, false);
    public skills: Skill[] = [];
    public languages: Languages = new Languages();
    public expectedCR: ICREntry = null;
    public hitDice: HitDice = null;
    public resistances: ResistanceList = new ResistanceList();
    public immunities: ImmunityList = new ImmunityList();
    public vulnerabilities: VulnerabilityList = new VulnerabilityList();
    public features: Feature[] = [];
    public legendaryActionsIntro = "";

    public hitPointMultiplier: number = 1;
    public hitPointMultiplierNote: string = "";
    public completeSkills: CompleteSkill[] = [];
    public completeSavingThrows: ICompleteSavingThrows = null;

    private privShortName: string = "";

    public get shortName(): string {
        if(this.privShortName !== "") { return this.privShortName; }
        return this.name;
    }

    public set shortName(name: string) {
        this.privShortName = name;
    }

    public get hp(): number {
        return Math.floor(this.hitDice.hp + (this.abilityScores.CON.modifier * this.hitDice.numberDice));
    }

    public get hpRoll(): DiceCollection {
        return new DiceCollection(this.hitDice.numberDice, this.hitDice.dieSize, this.abilityScores.CON.modifier * this.hitDice.numberDice);
    }

    public get ac(): number {
        const dexBonus = Math.min(this.abilityScores.DEX.modifier, this.armorList.maxDexBonus);
        return dexBonus + this.armorList.acBonus;
    }

    public get fullAC(): string {
        const dexBonus = Math.min(this.abilityScores.DEX.modifier, this.armorList.maxDexBonus);

        let armorsDescFull = "10";
        for (const armor of this.armorList.armors) {
            armorsDescFull += " + " + armor.acBonus + " (" + armor.name + ")";
        }
        if (dexBonus !== 0) {
            armorsDescFull += " + " + dexBonus.toString() + " (DEX modifier)";
        }
        armorsDescFull += " = " + this.ac;

        return armorsDescFull;
    }

    public get effectiveHitPoints(): number {
        const effHp = this.hp * this.getResistanceMultiplier() * this.getImmunityMultiplier() * this.getVulnerabilityMultiplier() * this.hitPointMultiplier;
        return Math.floor(effHp);
    }

    public get effectiveHitPointsNote(): string {
        const resistanceMultiplier = this.getResistanceMultiplier();
        const immunityMultiplier = this.getImmunityMultiplier();
        const vulnerabilityMultiplier = this.getVulnerabilityMultiplier();

        let desc = this.hp + " (hp)";
        if (resistanceMultiplier !== 1) {
            desc += " x " + resistanceMultiplier + " (" + this.resistances.resistanceCount + " resistances at expected CR " + this.expectedCR.cr + ")";
        }
        if (immunityMultiplier !== 1) {
            desc += " x " + immunityMultiplier + " (" + this.immunities.immunityCount + " immunities at expected CR " + this.expectedCR.cr + ")";
        }
        if (vulnerabilityMultiplier !== 1) {
            desc += " x " + vulnerabilityMultiplier + " (" + this.vulnerabilities.vulnerabilityCount + " vulnerabilities)";
        }
        if (this.hitPointMultiplier !== 1) {
            desc += " x " + this.hitPointMultiplier + " (" + this.hitPointMultiplierNote + ")";
        }
        return desc;
    }

    public get challengeRatingNote(): string {
        let crTable = new CRTable();
        
        let defensiveCRByHP = crTable.getDefensiveCRByHitPoints(this.effectiveHitPoints); 
        let defensiveCrRankByHP = crTable.getDefensiveCRRankByHitPoints(this.effectiveHitPoints);
        let expectedAC = crTable.getExpectedACByHitPoints(this.effectiveHitPoints); 
        let ac = this.ac;
        let acDiff = ac - expectedAC;
        let acRanksofDiff = Math.floor((ac - expectedAC)/2); 
        let finalDefensiveCr = crTable.getCREntryByRank(defensiveCrRankByHP + acRanksofDiff);

        let s = "";
        s += "Defensive CR by HP: " + defensiveCRByHP + "; ";
        s += "Defensive CR Rank by HP: " + defensiveCrRankByHP + "; ";
        s += "Expected AC by HP: " + expectedAC + "; "; 
        s += "Actual AC:" + ac +"; "
        s += "Actual AC - Expected AC: " + acDiff + "; "
        s += "AC degrees of diff: " + modifierStr(acRanksofDiff) + "; "
        s += "Final Defensive CR: " + finalDefensiveCr.cr +". "
        return s;
    }



    // public processCompleteActions(): void {
    //     this.completeActions = [];

    //     for (const action of this.actions.actions) {
    //         if (action instanceof Action) {
    //             const completeAction = new CompleteAction(action, this);
    //             this.completeActions.push(completeAction);
    //         }
    //     }
    // }

    public processCompleteSkills(): void {
        this.completeSkills = [];

        for (const skill of this.skills) {
            const completeSkill = new CompleteSkill(skill.skillName, this);
            this.completeSkills.push(completeSkill);
        }

        this.completeSkills.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            } else {
                return 1;
            }
        });
    }

    public processCompleteSavingThrows(): void {
        this.completeSavingThrows = new CompleteSavingThrows(this.savingThrows, this);
        this.completeSavingThrows.processSavingThrows();
    }

    private getResistanceMultiplier(): number {
        const cr = parseFloat(this.expectedCR.cr);
        const resistanceCount = this.resistances.resistanceCount;

        let resistanceMultiplier = 1;
        if (resistanceCount >= 3) {
            if (cr <= 4) {
                resistanceMultiplier = 2;
            } else if (cr <= 10) {
                resistanceMultiplier = 1.5;
            } else if (cr <= 16) {
                resistanceMultiplier = 1.25;
            } else {
                resistanceMultiplier = 1;
            }
        }

        return resistanceMultiplier;
    }

    private getImmunityMultiplier(): number {
        const cr = parseFloat(this.expectedCR.cr);
        const immunityCount = this.immunities.immunityCount;

        let immunityMultiplier = 1;
        if (immunityCount >= 3) {
            if (cr <= 10) {
                immunityMultiplier = 2;
            } else if (cr <= 16) {
                immunityMultiplier = 1.5;
            } else {
                immunityMultiplier = 1.25;
            }
        }

        return immunityMultiplier;
    }

    private getVulnerabilityMultiplier(): number {
        let vulnerabilityMultiplier = 1;
        if (this.vulnerabilities.vulnerabilityCount >= 3) {
            vulnerabilityMultiplier = 0.5;
        }
        return vulnerabilityMultiplier;
    }
};
