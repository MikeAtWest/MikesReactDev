import { IImmunity, Immunity } from "./Immunity";

export interface IImmunityList {
    immunities: IImmunity[];
    immunityCount: number;
    names: string;
    addImmunity(immunity: IImmunity);
    addMultipleImmunities(immunityNames: string[]);
}

export class ImmunityList implements IImmunityList {
    public immunities: Immunity[] = [];

    public get immunityCount() {
        return this.immunities.reduce((a, b) => a + b.immunityCount, 0);
    }

    public get names(): string {
        let desc = "";
        let count = 0;
        for (const res of this.immunities) {
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

    public addImmunity(immunity: Immunity) {
        this.immunities.push(immunity);
    }

    public addMultipleImmunities(immunityNames: string[]) {
        for (const imm of immunityNames) {
            this.immunities.push(new Immunity(imm, 1));
        }
    }

}
