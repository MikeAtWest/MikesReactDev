import { AbilityScoreAbbrev, SkillName } from "./enums";

export interface ISkill {
    skillName: SkillName;
    abilityScore: AbilityScoreAbbrev;
    doubleProficiency: boolean;
    name: string;
}

export class Skill {
    public skillName: SkillName = null;
    public doubleProficiency: boolean = false;

    constructor(skillName: SkillName) {
        this.skillName = skillName;
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
