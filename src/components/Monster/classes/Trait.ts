export interface ITrait {
    name: string;
    desc: string;
}

export class Trait implements ITrait {
    public name: string = "";
    public desc: string = "";

    constructor(name: string, desc: string) {
        this.name = name;
        this.desc = desc;
    }
}
