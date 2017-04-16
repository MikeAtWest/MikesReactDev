import { AbilityScores, IAbilityScores } from "./AbilityScores";
import { ActionList, IActionList } from "./ActionList";
import { ArmorList, IArmorList } from "./ArmorList";
import { CompleteAction, ICompleteAction } from "./CompleteAction";
import { CompleteSavingThrows, ICompleteSavingThrows } from "./CompleteSavingThrows";
import { CompleteSkill, ICompleteSkill } from "./CompleteSkill";
import { CREntry, ICREntry } from "./CREntry";
import { HitDice, IHitDice } from "./HitDice";
import { IImmunityList, ImmunityList } from "./ImmunityList";
import { IResistanceList, ResistanceList } from "./ResistanceList";
import { IRoll, Roll } from "./Roll";
import { ISavingThrows, SavingThrows } from "./SavingThrows";
import { ISkill, Skill } from "./Skill";
import { ISpeedList, SpeedList } from "./SpeedList";
import { IVulnerabilityList, VulnerabilityList } from "./VulnerabilityList";

import { Alignment, Size, Type } from "./enums";

export interface IMonster {
    name: string;
    size: Size;
    type: Type;
    tags: string[];
    alignment: Alignment;
    armorList: IArmorList;
    hp: number;
    hpRoll: IRoll;
    speeds: ISpeedList;
    abilityScores: IAbilityScores;
    savingThrows: ISavingThrows;
    skills: ISkill[];
    expectedCR: ICREntry;
    hitDice: IHitDice;
    ac: number;
    fullAC: string;
    resistances: IResistanceList;
    immunities: IImmunityList;
    vulnerabilities: IVulnerabilityList;
    actions: IActionList;
    hitPointMultiplier: number;
    hitPointMultiplierNote: string;
    effectiveHitPoints: number;
    effectiveHitPointsNote: string;
    completeActions: ICompleteAction[];
    completeSkills: ICompleteSkill[];
    completeSavingThrows: ICompleteSavingThrows;
    processCompleteActions(): void;
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
    public expectedCR: ICREntry = null;
    public hitDice: HitDice = null;
    public resistances: ResistanceList = new ResistanceList();
    public immunities: ImmunityList = new ImmunityList();
    public vulnerabilities: VulnerabilityList = new VulnerabilityList();
    public actions: ActionList = new ActionList();
    public hitPointMultiplier: number = 1;
    public hitPointMultiplierNote: string = "";
    public completeActions: CompleteAction[] = [];
    public completeSkills: CompleteSkill[] = [];
    public completeSavingThrows: ICompleteSavingThrows = null;

    public get hp(): number {
        return Math.floor(this.hitDice.hp + (this.abilityScores.CON.modifier * this.hitDice.numberDice));
    }

    public get hpRoll(): Roll {
        return new Roll(this.hitDice.numberDice, this.hitDice.dieSize, this.abilityScores.CON.modifier * this.hitDice.numberDice);
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

    public processCompleteActions(): void {
        this.completeActions = [];

        for (const action of this.actions.actions) {
            const completeAction = new CompleteAction(action, this);
            this.completeActions.push(completeAction);
        }
    }

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
