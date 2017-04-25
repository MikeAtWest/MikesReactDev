export interface ISpell {
    name: string;
}

export class Spell implements ISpell {
    public name: string = "";

    constructor(name: string) {
        this.name = name;
    }
}