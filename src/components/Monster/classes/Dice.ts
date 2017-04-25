export interface IDice {
    numberOfDice: number;
    dieSize: number;
    bonus: number;
    average: number;
    desc: string;
}

export class Dice implements IDice {
    public numberOfDice: number;
    public dieSize: number;
    public bonus: number;

    constructor(numberOfDice: number, dieSize: number, bonus: number = 0) {
        this.numberOfDice = numberOfDice;
        this.dieSize = dieSize;
        this.bonus = bonus;
    }

    public get average(): number {
        const avDieRoll = (this.dieSize * 0.5) + 0.5;
        return (avDieRoll * this.numberOfDice) + this.bonus;
    }

    public get desc(): string {
        let desc = "";
        desc = this.numberOfDice.toString() + "d" + this.dieSize.toString();
        if (this.bonus !== 0) {
            if (this.bonus > 0) { desc += " + " + this.bonus; }
            if (this.bonus < 0) { desc += " - " + Math.abs(this.bonus); }
        }
        return desc;
    }

}
