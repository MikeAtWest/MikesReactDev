import { Size } from "./enums";

export interface IHitDice {
    numberDice: number;
    dieSize: number;
    hp: number;
}

export class HitDice implements IHitDice {
    public numberDice: number;
    private _size: Size;

    constructor(size: Size, numberDice: number) {
        this._size = size;
        this.numberDice = numberDice;
    }

    public get dieSize(): number {
        switch (this._size) {
            case (Size.Tiny): return 4;
            case (Size.Small): return 6;
            case (Size.Medium): return 8;
            case (Size.Large): return 10;
            case (Size.Huge): return 12;
            case (Size.Gargantuan): return 20;
            default: return 0;
        }
    }

    public get hp(): number {
        const avDieRoll = (this.dieSize * 0.5) + 0.5;
        return avDieRoll * this.numberDice;
    }

}
