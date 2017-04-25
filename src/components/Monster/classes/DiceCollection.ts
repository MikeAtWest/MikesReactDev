import { Dice, IDice } from "./Dice";

export interface IDiceCollection {
    diceRolls: IDice[];
    desc: string;
    average: number;
    addDice(numberOfDice: number, dieSize: number, bonus: number): void;
    addDiceCollection(diceCollection: IDiceCollection): void;
}

export class DiceCollection implements IDiceCollection {
    public diceRolls: IDice[] = [];

    constructor(numberOfDice: number, dieSize: number, bonus: number = 0) {
        if (numberOfDice !== null) {
            this.addDice(numberOfDice, dieSize, bonus);
        }
    }

    public get desc(): string {
        // Reduce all dice plus bonuses to single entry.

        // Get the total bonuses on all rolls.
        const totalBonus: number = this.diceRolls.reduce((a, b) => a + b.bonus, 0);

        // Consolidate dice throws.
        interface IDiceRolls { [dieSize: number]: number; };
        const allDice: IDiceRolls = {};

        for (const d of this.diceRolls) {
            const dieSize = d.dieSize;
            if (allDice[dieSize]) {
                allDice[dieSize] = allDice[dieSize] + d.numberOfDice;
            } else {
                if (dieSize > 0) { allDice[dieSize] = d.numberOfDice; }
            }
        }

        let desc = "";
        const arDice: string[] = [];
        for (const d in allDice) {
            if (allDice[d] !== undefined) { arDice.push(allDice[d] + "d" + d); }
        }

        arDice.sort((a, b) => {
            if (a.substring(-1) > b.substring(-1)) { return -1; }
            if (a.substring(-1) < b.substring(-1)) { return 1; }
            return 0;
        });

        desc = arDice.join(" + ");

        if (totalBonus !== 0) {
            if (totalBonus > 0) { desc += " + " + totalBonus; }
            if (totalBonus < 0) { desc += " - " + Math.abs(totalBonus); }
        }

        return desc;
    }

    public get average(): number {
        return Math.floor(this.diceRolls.reduce((a, b) => a + b.average, 0));
    }

    public addDice(numberOfDice: number, dieSize: number, bonus: number = 0) {
        const dice = new Dice(numberOfDice, dieSize, bonus);
        this.diceRolls.push(dice);
    }

    public addDiceCollection(dc: DiceCollection): void {
        for (const d of dc.diceRolls) {
            this.diceRolls.push(d);
        }
    }
}
