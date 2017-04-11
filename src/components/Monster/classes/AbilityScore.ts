import { AbilityScoreAbbrev } from "./enums";

export interface IAbilityScore {
    abbrev: AbilityScoreAbbrev;
    score: number;
    modifier: number;
    modifierStr: string;
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
}
