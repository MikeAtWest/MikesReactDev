export interface IArmor {
    name: string;
    acBonus: number;
}

export class Armor {
    public name: string = "";
    public acBonus: number = 0;
    public maxDexBonus: number = 100;

    constructor(name: string, acBonus: number, maxDexBonus: number) {
        this.name = name;
        this.acBonus = acBonus;
        this.maxDexBonus = maxDexBonus;
    };
};
