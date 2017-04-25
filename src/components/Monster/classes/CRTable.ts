import { CREntry, ICREntry } from "./CREntry";

export interface ICRTable {
    entries: ICREntry[];
    getCREntry(cr: string);
    getDefensiveCRByHitPoints(hp: number): string;
    getExpectedACByHitPoints(hp: number): number;
}

export class CRTable implements ICRTable {
    public entries: CREntry[] = [];

    constructor() {
        this.addEntries();
    }

    public getCREntry(cr: string): CREntry {
        return this.entries.filter((c) => c.cr === cr)[0];
    }

    public getCREntryByRank(rank: number): CREntry {
        return this.entries.filter((c) => c.rank === rank)[0];
    }

    public getDefensiveCRByHitPoints(hp: number): string {
        if (this.entries.filter((c) => c.minHp <= hp && c.maxHp >= hp).length > 0) {
            return this.entries.filter((c) => c.minHp <= hp && c.maxHp >= hp)[0].cr;
        } else {
            return "missing CR table record";
        }
    }

    public getDefensiveCRRankByHitPoints(hp: number): number {
        if (this.entries.filter((c) => c.minHp <= hp && c.maxHp >= hp).length > 0) {
            return this.entries.filter((c) => c.minHp <= hp && c.maxHp >= hp)[0].rank;
        } else {
            return -100;
        }
    }

    public getExpectedACByHitPoints(hp: number): number {
        if (this.entries.filter((c) => c.minHp <= hp && c.maxHp >= hp).length > 0) {
            return this.entries.filter((c) => c.minHp <= hp && c.maxHp >= hp)[0].ac;
        } else {
            return 0;
        }
    }

    private addEntries() {
        this.addEntry(0, "0", 2, 13, 1, 6, 3, 0, 1, 13);
        this.addEntry(1, "1/8", 2, 13, 7, 35, 3, 2, 3, 13);
        this.addEntry(2, "1/4", 2, 13, 36, 49, 3, 4, 5, 13);
        this.addEntry(3, "1/2", 2, 13, 50, 70, 3, 6, 8, 13);
        this.addEntry(4, "1", 2, 13, 71, 85, 3, 9, 14, 13);
        this.addEntry(5, "2", 2, 13, 86, 100, 3, 15, 20, 13);
        this.addEntry(6, "3", 2, 13, 101, 115, 4, 21, 26, 13);
        this.addEntry(7, "4", 2, 14, 116, 130, 5, 27, 32, 14);
        this.addEntry(8, "5", 3, 15, 131, 145, 6, 33, 38, 15);
        this.addEntry(9, "6", 3, 15, 146, 160, 6, 39, 44, 15);
        this.addEntry(10, "7", 3, 15, 161, 175, 6, 45, 50, 15);
        this.addEntry(11, "8", 3, 16, 176, 190, 7, 51, 56, 16);
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );
        // this.addEntry(9, "6", );



        // this.addEntry(20, "16", 5, 18, 296, 310, 9, 99, 104, 18);
    }

    private addEntry(rank: number, cr: string, profBonus: number, ac: number, minHp: number, maxHp: number, attackBonus: number, minDPR: number, maxDPR: number, saveDC: number) {
        this.entries.push(new CREntry(rank, cr, profBonus, ac, minHp, maxHp, attackBonus, minDPR, maxDPR, saveDC));
    };



}
