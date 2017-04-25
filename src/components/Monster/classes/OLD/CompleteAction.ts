// import { AbilityScore, IAbilityScore } from "./AbilityScore";
// import { Action, IAction } from "./Action";
// import { IMonster, Monster } from "./Monster";

// import { attackTypeDesc, modifierStr } from "./utilities";

// import { AbilityScoreAbbrev, AttackType, DamageType } from "./enums";

// export interface ICompleteAction {
//     name: string;
//     secondaryName: string;
//     desc: string;
//     hit: string;
// }

// export class CompleteAction implements ICompleteAction {
//     public name: string = "";
//     public secondaryName: string = "";

//     private _action: IAction;
//     private _desc: string;
//     private _hit: string;
//     private _monster: Monster;

//     constructor(action: Action, monster: Monster) {
//         this._action = action;
//         this._monster = monster;
//         this.processAction();
//     }

//     public processAction() {
//         this.name = this._action.name;
//         this.secondaryName = attackTypeDesc(this._action.attackType);

//         let d = "";
//         d += this.getToHit();
//         d += ", ";
//         d += this.getReach();
//         d += ", ";
//         d += this.getTargets();

//         this._desc = d;

//         let h = "";
//         const roll = this._action.baseDamageRoll;
//         roll.modifier += this.getBonusAbilityToUse().modifier;
//         h += roll.average + " (" + roll.desc + ") ";

//         h += DamageType[this._action.damageType].toLowerCase();
//         h += " damage";

//         if (this._action.versatile && this._action.versatileBaseDamageRoll !== null) {
//             h += ", or ";
//             const versRoll = this._action.versatileBaseDamageRoll;
//             versRoll.modifier += this.getBonusAbilityToUse().modifier;
//             h += versRoll.average + " (" + versRoll.desc + ") ";

//             h += DamageType[this._action.damageType].toLowerCase();
//             h += " damage if used with two hands to make a melee attack";
//         }

//         if (this._action.additional !== "") {
//             h += this._action.additional;
//         }

//         h += ".";

//         this._hit = h;
//     }

//     public getTargets(): string {
//         if (this._action.targets === 1) {
//             return "one target";
//         } else {
//             return this._action.targets + " targets";
//         }
//     }

//     public get desc(): string {
//         return this._desc;
//     }

//     public get hit(): string {
//         return this._hit;
//     }
//     private getToHit(): string {
//         const toHitAbility = this.getBonusAbilityToUse();
//         const toHitBonus: number = toHitAbility.modifier;
//         const profBonus: number = this._monster.expectedCR.profBonus;
//         const toHit = toHitBonus + profBonus;
//         return modifierStr(toHit) + " to hit";
//     }

//     private getBonusAbilityToUse(): AbilityScore {

//         const ability: AbilityScore = this._monster.abilityScores.STR;

//         if (this._action.attackType === AttackType.MeleeWeapon) { return this.getMeleeAbilityToUse(); }

//         if (this._action.attackType === AttackType.RangedWeapon) { return this.getRangedAbilityToUse(); }

//         return ability;

//     }

//     private getMeleeAbilityToUse(): AbilityScore {
//         let ability: AbilityScore = this._monster.abilityScores.STR;
//         if (this._action.finesse) {
//             if (this._monster.abilityScores.DEX.score > this._monster.abilityScores.STR.score) { ability = this._monster.abilityScores.DEX; }
//         }
//         return ability;
//     }

//     private getRangedAbilityToUse(): AbilityScore {
//         let ability: AbilityScore = this._monster.abilityScores.DEX;
//         if (this._action.thrown) { ability = this.getMeleeAbilityToUse(); }
//         return ability;
//     }

//     private getReach(): string {
//         if (this._action.attackType === AttackType.MeleeWeapon) {
//             return "reach " + this._action.reach + " ft.";
//         }

//         if (this._action.attackType === AttackType.RangedWeapon) {
//             return "range " + this._action.normalRange + "/" + this._action.maxRange + " ft.";
//         }

//         if (this._action.attackType === AttackType.MeleeOrRanged) {
//             return "reach " + this._action.reach + " ft. or range " + this._action.normalRange + "/" + this._action.maxRange + " ft.";
//         }

//         return "";
//     }

// }
