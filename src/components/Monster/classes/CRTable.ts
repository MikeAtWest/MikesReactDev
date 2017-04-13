import { CREntry, ICREntry } from "./CREntry";

export interface ICRTable {
    entries: ICREntry[];
    getCREntry(cr: string);
}

export class CRTable {
    public entries: CREntry[] = [];

    constructor() {
        this.addEntries();
    }

    public getCREntry(cr: string): CREntry {
        return this.entries.filter((c) => c.cr === cr)[0];
    }

    private addEntries() {
        this.addEntry("0", 2, 13, 1, 6, 3, 0, 1, 13);
        this.addEntry("1/8", 2, 13, 7, 35, 3, 2, 3, 13);
        this.addEntry("1/2", 2, 13, 50, 70, 3, 6, 8, 13);

        this.addEntry("1", 2, 13, 71, 85, 3, 9, 14, 13);

        this.addEntry("5", 3, 15, 131, 145, 6, 33, 38, 15);

        this.addEntry("16", 5, 18, 296, 310, 9, 99, 104, 18);
    }

    private addEntry(cr: string, profBonus: number, ac: number, minHp: number, maxHp: number, attackBonus: number, minDPR: number, maxDPR: number, saveDC: number) {
        this.entries.push(new CREntry(cr, profBonus, ac, minHp, maxHp, attackBonus, minDPR, maxDPR, saveDC));
    };

}
