export interface ISpeed {
    name: string;
    rate: number;
}

export class Speed implements ISpeed {
    public name: string;
    public rate: number;

    constructor(name: string, rate: number) {
        this.name = name;
        this.rate = rate;
    }
};
