import { AbilityScores, IAbilityScores } from "./AbilityScores";
import { ArmorList, IArmorList } from "./ArmorList";
import { CREntry, ICREntry } from "./CREntry";
import { HitDice, IHitDice } from "./HitDice";
import { IImmunityList, ImmunityList } from "./ImmunityList";
import { IResistanceList, ResistanceList } from "./ResistanceList";
import { IRoll, Roll } from "./Roll";
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
    expectedCR: ICREntry;
    hitDice: IHitDice;
    ac: number;
    fullAC: string;
    resistances: IResistanceList;
    immunities: IImmunityList;
    vulnerabilities: IVulnerabilityList;
    hitPointMultiplier: number;
    hitPointMultiplierNote: string;
    effectiveHitPoints: number;
    effectiveHitPointsNote: string;
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
    public expectedCR: ICREntry = null;
    public hitDice: HitDice = null;
    public resistances: ResistanceList = new ResistanceList();
    public immunities: ImmunityList = new ImmunityList();
    public vulnerabilities: VulnerabilityList = new VulnerabilityList();
    public hitPointMultiplier: number = 1;
    public hitPointMultiplierNote: string = "";

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
};
