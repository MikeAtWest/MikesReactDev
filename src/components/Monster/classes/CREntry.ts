export interface ICREntry {
    cr: string;
    profBonus: number;
    ac: number;
    minHp: number;
    maxHp: number;
    attackBonus: number;
    minDPR: number;
    maxDPR: number;
    saveDC: number;
}

export class CREntry implements ICREntry {
    public rank: number;
    public cr: string;
    public profBonus: number;
    public ac: number;
    public minHp: number;
    public maxHp: number;
    public attackBonus: number;
    public minDPR: number;
    public maxDPR: number;
    public saveDC: number;

    constructor(rank: number, cr: string, profBonus: number, ac: number, minHp: number, maxHp: number, attackBonus: number, minDPR: number, maxDPR: number, saveDC: number) {
        this.rank = rank;
        this.cr = cr;
        this.profBonus = profBonus;
        this.ac = ac;
        this.minHp = minHp;
        this.maxHp = maxHp;
        this.attackBonus = attackBonus;
        this.minDPR = minDPR;
        this.maxDPR = maxDPR;
        this.saveDC = saveDC;
    }
}
