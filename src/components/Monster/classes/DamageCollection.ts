import { Damage, IDamage } from "./Damage";
import { DiceCollection, IDiceCollection } from "./DiceCollection";

import { DamageType } from "./enums";

export interface IDamageCollection {
    damages: IDamage[];
    desc: string;
    average: number;
    addDamage(damage: IDamage): void;
    addDamageCollection(damageCollection: IDamageCollection);
}

export class DamageCollection {
    public damages: IDamage[] = [];

    constructor(damage: IDamage) {
        this.addDamage(damage);
    }

    public addDamage(damage: IDamage): void {
        this.damages.push(damage);
    }

    public addDamageCollection(damageCollection: IDamageCollection) {
        for (const d of damageCollection.damages) {
            this.damages.push(d);
        }
    }

    get average(): number {
        return this.damages.reduce((a,b) => a + b.diceCollection.average, 0);
    }

    get desc(): string {

        // Go through all damage types, consolidate damage rolls under each type.

        //Get all the damage types in the collection.
        let allDamageTypesInCollection:DamageType[] = [];
        for(let d of this.damages) {
            if(allDamageTypesInCollection.indexOf(d.damageType) === -1) {
                allDamageTypesInCollection.push(d.damageType);
            }
        }

        let collatedDamages:IDamageCollection= null; 
        for(let damType of allDamageTypesInCollection) {
            for(let thisDam of this.damages) {
                if(thisDam.damageType === damType) {
                    if(collatedDamages === null) {
                        collatedDamages = new DamageCollection(thisDam);
                    } else {
                        collatedDamages.addDamage(thisDam);
                    }
                }
            }
        }

        let damages = this.damages.map((d) => d.desc);
        return damages.join(" + ");
    }
}