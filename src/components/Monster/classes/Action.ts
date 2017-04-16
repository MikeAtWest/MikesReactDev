import { AbilityScoreAbbrev, AttackType, DamageType } from "./enums";

import { IRoll, Roll } from "./Roll";

export interface IAction {
    name: string;
    attackType: AttackType;
    // toHitAbility: AbilityScoreAbbrev;
    // damageAbility: AbilityScoreAbbrev;
    reach: number;
    targets: number;
    baseDamageRoll: IRoll;
    damageType: DamageType;
    normalRange: number;
    maxRange: number;
    twoHanded: boolean;
    thrown: boolean;
    ammunition: boolean;
    finesse: boolean;
    heavy: boolean;
    light: boolean;
    loading: boolean;
    versatile: boolean;
    versatileBaseDamageRoll: IRoll;
    additional: string;
}

export class Action implements IAction {
    public name: string;
    public attackType: AttackType;
    // public toHitAbility: AbilityScoreAbbrev;
    // public damageAbility: AbilityScoreAbbrev;
    public reach: number = 5;
    public targets: number = 1;
    public baseDamageRoll: IRoll;
    public damageType: DamageType;
    public normalRange: number = 0;
    public maxRange: number = 0;
    public twoHanded: boolean = false;
    public thrown: boolean = false;
    public ammunition: boolean = false;
    public finesse: boolean = false;
    public heavy: boolean = false;
    public light: boolean = false;
    public loading: boolean = false;
    public versatile: boolean = false;
    public versatileBaseDamageRoll = null;
    public additional: string = "";

    constructor(name: string, attackType: AttackType, baseDamageRoll: IRoll, damageType: DamageType) {
        this.name = name;
        this.attackType = attackType;
        // this.toHitAbility = toHitAbility;
        // this.damageAbility = damageAbility;
        this.baseDamageRoll = baseDamageRoll;
        this.damageType = damageType;
    }
}
