export interface IImmunity {
    name: string;
    immunityCount: number;
    isClause: boolean;
}

export class Immunity implements IImmunity {
    public name: string;
    public immunityCount: number;
    public isClause: boolean;

    constructor(name: string, immunityCount: number = 1, isClause: boolean = false) {
        this.name = name;
        this.immunityCount = immunityCount;
        this.isClause = isClause;
    }
}
