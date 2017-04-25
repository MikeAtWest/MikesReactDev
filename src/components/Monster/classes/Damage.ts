import { DiceCollection, IDiceCollection } from "./DiceCollection";

import { DamageType } from "./enums";

export interface IDamage {
    diceCollection: IDiceCollection;
    damageType: DamageType;
    desc: string;
}

export class Damage {
    public diceCollection: IDiceCollection;
    public damageType: DamageType;

    constructor(diceCollection: IDiceCollection, damageType: DamageType) {
        this.diceCollection = diceCollection;
        this.damageType = damageType;
    }

    get desc(): string {
        return this.diceCollection.desc + " " + DamageType[this.damageType].toLowerCase();
    }

}

