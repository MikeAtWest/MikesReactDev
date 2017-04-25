import { AbilityScoreAbbrev, Alignment, AttackType, Size } from "./enums";

export function alignmentDesc(alignment: Alignment): string {
    switch (alignment) {
        case Alignment.LawfulGood: return "Lawful good";
        case Alignment.LawfulNeutral: return "Lawful neutral";
        case Alignment.LawfulEvil: return "Lawful evil";
        case Alignment.NeutralGood: return "Neutral good";
        case Alignment.Neutral: return "Neutral";
        case Alignment.NeutralEvil: return "Neutral evil";
        case Alignment.ChaoticGood: return "Chaotic good";
        case Alignment.ChaoticNeutral: return "Chaotic neutral";
        case Alignment.ChaoticEvil: return "Chaotic evil";
        case Alignment.Unaligned: return "Unaligned";
        default: return "Unknown";
    }
};

export function attackTypeDesc(attackType: AttackType): string {
    switch (attackType) {
        case AttackType.MeleeWeapon: { return "Melee Weapon Attack"; }
        case AttackType.RangedWeapon: { return "Ranged Weapon Attack"; }
        case AttackType.MeleeOrRanged: { return "Melee or Ranged Weapon Attack"; }
        default: return "Unknown Attack Type";
    }
}

export function modifierStr(bonus: number): string {
    if (bonus < 0) {
        return "-" + Math.abs(bonus).toString();
    } else {
        return "+" + bonus.toString();
    }
}

export function abilityScoreName(abbrev: AbilityScoreAbbrev): string {
    switch (abbrev) {
        case AbilityScoreAbbrev.STR: { return "Strength"; }
        case AbilityScoreAbbrev.DEX: { return "Dexterity"; }
        case AbilityScoreAbbrev.CON: { return "Constitution"; }
        case AbilityScoreAbbrev.INT: { return "Intelligence"; }
        case AbilityScoreAbbrev.WIS: { return "Wisdom"; }
        case AbilityScoreAbbrev.CHA: { return "Charisma"; }
        default: return "?";
    }
}

export function numSuffix(num: number): string {
    const absNum = Math.abs(num);
    const lastNum = parseInt(absNum.toString().substring(-1));
    if (num === 1) { return num + "st"; }
    if (num === 2) { return num + "nd"; }
    if (num === 3) { return num + "rd"; }
    return num + "th"; 
}
