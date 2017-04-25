import { AbilityScore, IAbilityScore } from "./AbilityScore";
// import { DiceCollection, IDiceCollection } from "./DiceCollection";
import { Damage, IDamage } from "./Damage";
import { DamageCollection, IDamageCollection } from "./DamageCollection";
import { DiceCollection, IDiceCollection } from "./DiceCollection";
import { Feature, IFeature } from "./Feature";
import { IMonster, Monster } from "./Monster";

import { AbilityScoreAbbrev, AttackType, DamageType, FeatureType } from "./enums";

import { attackTypeDesc, modifierStr } from "./utilities";

export interface IAttack {
    attackType: AttackType;
    reach: number;
    targets: number;
    baseDamageRoll: IDamage;
    // damageType: DamageType;
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
    versatileBaseDamageRoll: IDamage;
    bonusDamageRoll: IDamageCollection;
    additional: string;
}

export class Attack extends Feature implements IAttack {
    public attackType: AttackType;
    public reach: number = 5;
    public targets: number = 1;
    public baseDamageRoll: IDamage = null;
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
    public versatileBaseDamageRoll: IDamage = null;
    public bonusDamageRoll: IDamageCollection = null;
    public additional: string = "";

    constructor(name: string, type: FeatureType, monster: Monster, attackType: AttackType, baseDamageRoll: IDamage) {
        super(name, type, monster);
        this.attackType = attackType;
        this.baseDamageRoll = baseDamageRoll;
        // this.damageType = damageType;
    }

    get desc(): string {

        let primaryDamage = new DamageCollection(this.baseDamageRoll);

        const secondaryName = attackTypeDesc(this.attackType);

        let d = "";
        d += this.getToHit();
        d += ", ";
        d += this.getReach();
        d += ", ";
        d += this.getTargets();

        const desc = d;

        let h = "";

        // Add ability modifier to damage roll. 
        let abilityModifer = this.getBonusAbilityToUse().modifier;
        if(abilityModifer !== 0) {
            let abilityDamageRoll = new DiceCollection(0, 0, abilityModifer);
            let abilityDamage = new Damage(abilityDamageRoll, this.baseDamageRoll.damageType);
            primaryDamage.addDamage(abilityDamage);
        }

        // const roll = this.baseDamageRoll;
        //roll.addDice(0, 0, this.getBonusAbilityToUse().modifier); // Ability modifier

        // Add bonus damage. 
         if (this.bonusDamageRoll !== null) {
            primaryDamage.addDamageCollection(this.bonusDamageRoll);
        }       

        // if (this.bonusDamageRoll !== null) {
        //     roll.addDiceCollection(this.bonusDamageRoll);
        // }

        h += primaryDamage.average + " (" + primaryDamage.desc + ") ";

        //h += DamageType[this.damageType].toLowerCase();
        h += " damage";

        // if (this.versatile && this.versatileBaseDamageRoll !== null) {
        //     h += ", or ";
        //     const versRoll = this.versatileBaseDamageRoll;
        //     versRoll.addDice(0, 0, this.getBonusAbilityToUse().modifier);

        //     if (this.bonusDamageRoll !== null) {
        //         versRoll.addDiceCollection(this.bonusDamageRoll);
        //     }

        //     h += versRoll.average + " (" + versRoll.desc + ") ";

        //     h += DamageType[this.damageType].toLowerCase();
        //     h += " damage if used with two hands to make a melee attack";
        // }

        if (this.additional !== "") {
            h += this.additional;
        }

        h += ".";

        return "<i>" + secondaryName + ":</i> " + desc + ". <i>Hit:</i> " + h;
    }

    private getTargets(): string {
        if (this.targets === 1) {
            return "one target";
        } else {
            return this.targets + " targets";
        }
    }

    private getToHit(): string {
        const toHitAbility = this.getBonusAbilityToUse();
        const toHitBonus: number = toHitAbility.modifier;
        const profBonus: number = this.monster.expectedCR.profBonus;
        const toHit = toHitBonus + profBonus;
        return modifierStr(toHit) + " to hit";
    }

    private getBonusAbilityToUse(): AbilityScore {

        const ability = this.monster.abilityScores.STR;

        if (this.attackType === AttackType.MeleeWeapon) { return this.getMeleeAbilityToUse(); }

        if (this.attackType === AttackType.RangedWeapon) { return this.getRangedAbilityToUse(); }

        return ability;
    }

    private getMeleeAbilityToUse(): AbilityScore {
        let ability: AbilityScore = this.monster.abilityScores.STR;
        if (this.finesse) {
            if (this.monster.abilityScores.DEX.score > this.monster.abilityScores.STR.score) { ability = this.monster.abilityScores.DEX; }
        }
        return ability;
    }

    private getRangedAbilityToUse(): AbilityScore {
        let ability: AbilityScore = this.monster.abilityScores.DEX;
        if (this.thrown) { ability = this.getMeleeAbilityToUse(); }
        return ability;
    }

    private getReach(): string {
        if (this.attackType === AttackType.MeleeWeapon) {
            return "reach " + this.reach + " ft.";
        }

        if (this.attackType === AttackType.RangedWeapon) {
            return "range " + this.normalRange + "/" + this.maxRange + " ft.";
        }

        if (this.attackType === AttackType.MeleeOrRanged) {
            return "reach " + this.reach + " ft. or range " + this.normalRange + "/" + this.maxRange + " ft.";
        }

        return "";
    }

}
