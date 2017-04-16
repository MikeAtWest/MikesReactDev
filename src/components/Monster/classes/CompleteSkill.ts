import { AbilityScoreAbbrev, SkillName } from "./enums";

import { IMonster, Monster } from "./Monster";

export interface ICompleteSkill {
    skillName: SkillName;
    abilityScore: AbilityScoreAbbrev;
    doubleProficiency: boolean;
    level: number;
    name: string;
}

export class CompleteSkill {
    public skillName: SkillName = null;
    public doubleProficiency: boolean = false;

    private _monster: Monster;

    constructor(skillName: SkillName, monster: Monster) {
        this.skillName = skillName;
        this._monster = monster;
    }

    public get abilityScore(): AbilityScoreAbbrev {

        switch (this.skillName) {
            case SkillName.Athletics:
                return AbilityScoreAbbrev.STR;
            case SkillName.Acrobatics:
            case SkillName.SleigthOfHand:
            case SkillName.Stealth:
                return AbilityScoreAbbrev.DEX;
            case SkillName.Arcana:
            case SkillName.History:
            case SkillName.Investigation:
            case SkillName.Nature:
            case SkillName.Religion:
                return AbilityScoreAbbrev.INT;
            case SkillName.AnimalHandling:
            case SkillName.Insight:
            case SkillName.Medicine:
            case SkillName.Perception:
            case SkillName.Survival:
                return AbilityScoreAbbrev.WIS;
            case SkillName.Deception:
            case SkillName.Intimidation:
            case SkillName.Performance:
            case SkillName.Persuasion:
                return AbilityScoreAbbrev.CHA;
            default: return null;
        }
    }

    public get level(): number {
        const abilityAbb = this.abilityScore;
        const ability = this._monster.abilityScores.getAbilityScore(abilityAbb);

        let profBonus = this._monster.expectedCR.profBonus;
        if (this.doubleProficiency) { profBonus = profBonus * 2; }

        return ability.modifier + profBonus;
    }

    public get name(): string {
        if (this.skillName === SkillName.AnimalHandling) {
            return "Animal Handling";
        } else if (this.skillName === SkillName.SleigthOfHand) {
            return "Sleight of Hand";
        } else {
            return SkillName[this.skillName];
        }
    }
}
