export class CREntry {
    public cr: string;
    public profBonus: number;
    public ac: number;
    public minHp: number;
    public maxHp: number;
    public attackBonus: number;
    public minDPR: number;
    public maxDPR: number;
    public saveDC: number;

    constructor(cr: string, profBonus: number, ac: number, minHp: number, maxHp: number, attackBonus: number, minDPR: number, maxDPR: number, saveDC: number) {
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