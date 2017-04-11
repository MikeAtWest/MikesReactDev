import {CREntry} from "./CREntry";

export class CrTable {
    public entries: CREntry[];

    constructor() {
        this.addEntries();
    }

    private addEntries() {
        this.addEntry("0", 2, 13, 1, 6, 3, 0, 1, 13);
        this.addEntry("1/8", 2, 13, 7, 35, 3, 2, 3, 13);
        this.addEntry("1/2", 2, 13, 50, 70, 3, 6, 8, 13);
    }

    private addEntry(cr: string, profBonus: number, ac: number, minHp: number, maxHp: number, attackBonus: number, minDPR: number, maxDPR: number, saveDC: number) {
        this.entries.push(new CREntry(cr, profBonus, ac, minHp, maxHp, attackBonus, minDPR, maxDPR, saveDC));
    };

}