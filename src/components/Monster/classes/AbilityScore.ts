import { AbilityScoreAbbrev } from "./enums";

export interface IAbilityScore {
    abbrev: AbilityScoreAbbrev;
    score: number;
    modifier: number;
    modifierStr: string;
    fullName: string;
}

export class AbilityScore implements IAbilityScore {
    public abbrev: AbilityScoreAbbrev;
    public score: number;

    constructor(abbrev: AbilityScoreAbbrev, score: number) {
        this.abbrev = abbrev;
        this.score = score;
    }

    get modifier(): number {
        return Math.floor((this.score - 10) / 2);
    }

    get modifierStr(): string {
        if (this.modifier < 0) {
            return "-" + Math.abs(this.modifier).toString();
        } else {
            return "+" + this.modifier.toString();
        }
    }

    get fullName(): string {
        switch (this.abbrev) {
            case AbilityScoreAbbrev.STR: { return "Strength"; }
            case AbilityScoreAbbrev.DEX: { return "Dexterity"; }
            case AbilityScoreAbbrev.CON: { return "Constitution"; }
            case AbilityScoreAbbrev.INT: { return "Intelligence"; }
            case AbilityScoreAbbrev.WIS: { return "Wisdom"; }
            case AbilityScoreAbbrev.CHA: { return "Charisma"; }
            default: return "?";
        }
    }    
}
