import { Alignment, AttackType, Size } from "./enums";

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
