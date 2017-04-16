export interface IRoll {
    numberOfDice: number;
    dieSize: number;
    modifier: number;
    desc: string;
    average: number;
}

export class Roll implements IRoll {
    public numberOfDice: number = 1;
    public dieSize: number = 6;
    public modifier: number = 0;

    constructor(numberOfDice: number, dieSize: number, modifier: number) {
        this.numberOfDice = numberOfDice;
        this.dieSize = dieSize;
        this.modifier = modifier;
    }

    public get desc(): string {
        let desc = "";
        desc = this.numberOfDice.toString() + "d" + this.dieSize.toString();
        if (this.modifier !== 0) {
            if (this.modifier > 0) { desc += " + " + this.modifier; }
            if (this.modifier < 0) { desc += " - " + Math.abs(this.modifier); }
        }
        return desc;
    }

    public get average(): number {
        const avDieRoll = (this.dieSize * 0.5) + 0.5;
        return Math.floor((avDieRoll * this.numberOfDice) + this.modifier);
    }
}
