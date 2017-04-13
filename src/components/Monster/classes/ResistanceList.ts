import { IResistance, Resistance } from "./Resistance";

export interface IResistanceList {
    resistances: IResistance[];
    resistanceCount: number;
    names: string;
    addResistance(resistance: IResistance);
    addMultipleResistances(resistanceNames: string[]);
}

export class ResistanceList implements IResistanceList {
    public resistances: Resistance[] = [];

    public get resistanceCount() {
        return this.resistances.reduce((a, b) => a + b.resistanceCount, 0);
    }

    public get names(): string {
        let desc = "";
        let count = 0;
        for (const res of this.resistances) {
            if (count > 0) {
                if (res.isClause) {
                    desc += ";";
                } else {
                    desc += ",";
                }
            }
            desc += " ";
            desc += res.name;
            count++;
        }

        return desc;
    }

    public addResistance(resistance: Resistance) {
        this.resistances.push(resistance);
    }

    public addMultipleResistances(resistanceNames: string[]) {
        for (const res of resistanceNames) {
            this.resistances.push(new Resistance(res, 1));
        }
    }

}
