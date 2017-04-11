import { Alignment } from "./enums";

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
