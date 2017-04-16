import { AbilityScore, IAbilityScore } from "./AbilityScore";

import { AbilityScoreAbbrev } from "./enums";

export interface IAbilityScores {
    STR: IAbilityScore;
    DEX: IAbilityScore;
    CON: IAbilityScore;
    INT: IAbilityScore;
    WIS: IAbilityScore;
    CHA: IAbilityScore;
    getAbilityScore(AbilityScoreAbbrev): AbilityScore;
}

export class AbilityScores implements IAbilityScores {
    public STR: AbilityScore;
    public DEX: AbilityScore;
    public CON: AbilityScore;
    public INT: AbilityScore;
    public WIS: AbilityScore;
    public CHA: AbilityScore;

    constructor(str: number, dex: number, con: number, int: number, wis: number, cha: number) {
        this.STR = new AbilityScore(AbilityScoreAbbrev.STR, str);
        this.DEX = new AbilityScore(AbilityScoreAbbrev.DEX, dex);
        this.CON = new AbilityScore(AbilityScoreAbbrev.CON, con);
        this.INT = new AbilityScore(AbilityScoreAbbrev.INT, int);
        this.WIS = new AbilityScore(AbilityScoreAbbrev.WIS, wis);
        this.CHA = new AbilityScore(AbilityScoreAbbrev.CHA, cha);
    }

    public getAbilityScore(ability: AbilityScoreAbbrev): AbilityScore {
        switch (ability) {
            case AbilityScoreAbbrev.STR: { return this.STR; }
            case AbilityScoreAbbrev.DEX: { return this.DEX; }
            case AbilityScoreAbbrev.CON: { return this.CON; }
            case AbilityScoreAbbrev.INT: { return this.INT; }
            case AbilityScoreAbbrev.WIS: { return this.WIS; }
            case AbilityScoreAbbrev.CHA: { return this.CHA; }
            default: return null;
        }
    }
}
