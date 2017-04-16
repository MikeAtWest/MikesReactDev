import { ISavingThrows, SavingThrows } from "./SavingThrows";

import { IMonster, Monster } from "./monster";

export interface ICompleteSavingThrows {
    STR: number;
    DEX: number;
    CON: number;
    INT: number;
    WIS: number;
    CHA: number;
    processSavingThrows(): void;
}

export class CompleteSavingThrows implements ICompleteSavingThrows {
    public STR: number = null;
    public DEX: number = null;
    public CON: number = null;
    public INT: number = null;
    public WIS: number = null;
    public CHA: number = null;

    private _savingThrows: ISavingThrows;
    private _monster: IMonster;

    constructor(savingThrows: ISavingThrows, monster: IMonster) {
        this._savingThrows = savingThrows;
        this._monster = monster;
        this.processSavingThrows();
    }

    public processSavingThrows(): void {
        if (this._savingThrows.STR) { this.STR = this._monster.abilityScores.STR.modifier + this._monster.expectedCR.profBonus; }
        if (this._savingThrows.DEX) { this.DEX = this._monster.abilityScores.DEX.modifier + this._monster.expectedCR.profBonus; }
        if (this._savingThrows.CON) { this.CON = this._monster.abilityScores.CON.modifier + this._monster.expectedCR.profBonus; }
        if (this._savingThrows.INT) { this.INT = this._monster.abilityScores.INT.modifier + this._monster.expectedCR.profBonus; }
        if (this._savingThrows.WIS) { this.WIS = this._monster.abilityScores.WIS.modifier + this._monster.expectedCR.profBonus; }
        if (this._savingThrows.CHA) { this.CHA = this._monster.abilityScores.CHA.modifier + this._monster.expectedCR.profBonus; }
    }
}
