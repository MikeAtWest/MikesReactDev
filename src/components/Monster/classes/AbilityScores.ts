import { AbilityScore, IAbilityScore } from "./AbilityScore";

import { AbilityScoreAbbrev } from "./enums";

export interface IAbilityScores {
    STR: IAbilityScore;
    DEX: IAbilityScore;
    CON: IAbilityScore;
    INT: IAbilityScore;
    WIS: IAbilityScore;
    CHA: IAbilityScore;
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
}
