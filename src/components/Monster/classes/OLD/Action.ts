// import { AbilityScoreAbbrev, AttackType, DamageType } from "./enums";

// import { IDiceCollection, DiceCollection } from "./DiceCollection";

// import { ITrait } from "./Trait";

// export interface IAction extends ITrait {
//     attackType: AttackType;
//     reach: number;
//     targets: number;
//     baseDamageRoll: IDiceCollection;
//     damageType: DamageType;
//     normalRange: number;
//     maxRange: number;
//     twoHanded: boolean;
//     thrown: boolean;
//     ammunition: boolean;
//     finesse: boolean;
//     heavy: boolean;
//     light: boolean;
//     loading: boolean;
//     versatile: boolean;
//     versatileBaseDamageRoll: IDiceCollection;
//     additional: string;
// }

// export class Action implements IAction {
//     public name: string;
//     public desc: string;
//     public attackType: AttackType;
//     public reach: number = 5;
//     public targets: number = 1;
//     public baseDamageRoll: DiceCollection;
//     public damageType: DamageType;
//     public normalRange: number = 0;
//     public maxRange: number = 0;
//     public twoHanded: boolean = false;
//     public thrown: boolean = false;
//     public ammunition: boolean = false;
//     public finesse: boolean = false;
//     public heavy: boolean = false;
//     public light: boolean = false;
//     public loading: boolean = false;
//     public versatile: boolean = false;
//     public versatileBaseDamageRoll: DiceCollection = null;
//     public additional: string = "";

//     constructor(name: string, attackType: AttackType, baseDamageRoll: DiceCollection, damageType: DamageType) {
//         this.name = name;
//         this.attackType = attackType;
//         this.baseDamageRoll = baseDamageRoll;
//         this.damageType = damageType;
//     }
// }
