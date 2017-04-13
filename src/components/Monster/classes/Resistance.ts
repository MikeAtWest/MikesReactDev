export interface IResistance {
    name: string;
    resistanceCount: number;
    isClause: boolean;
}

export class Resistance implements IResistance {
    public name: string;
    public resistanceCount: number;
    public isClause: boolean;

    constructor(name: string, resistanceCount: number = 1, isClause: boolean = false) {
        this.name = name;
        this.resistanceCount = resistanceCount;
        this.isClause = isClause;
    }
}
