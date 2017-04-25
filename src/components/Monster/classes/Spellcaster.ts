import { AbilityScore, IAbilityScore } from "./AbilityScore";
import { DiceCollection, IDiceCollection } from "./DiceCollection";
import { Feature, IFeature } from "./Feature";
import { IMonster, Monster } from "./Monster";
import { ISpell, Spell } from "./Spell";

import { AbilityScoreAbbrev, AttackType, ClassName, DamageType, FeatureType } from "./enums";

import { abilityScoreName, modifierStr, numSuffix } from "./utilities";

export interface ISpellcaster {
    spellcastingAbility: AbilityScoreAbbrev;
    casterLevel: number;
    spellClass: ClassName;
    atWillSpells: ISpell[];
    spellsByLevel: { [level: number]: ISpell[] };
    spellSlotsByLevel: number[];
    additionalText: string;
}

export class Spellcaster extends Feature implements ISpellcaster {
    public spellcastingAbility: AbilityScoreAbbrev;
    public casterLevel: number = null;
    public spellClass: ClassName = null;
    public atWillSpells: ISpell[] = [];
    public spellsByLevel: { [level: number]: ISpell[] } = {};
    public spellSlotsByLevel: number[] = [];
    public additionalText: string = "";

    constructor(type: FeatureType, monster: Monster, spellcastingAbility: AbilityScoreAbbrev, casterLevel: number, spellsOfClass: ClassName) {
        super("Spellcasting", type, monster);
        this.spellcastingAbility = spellcastingAbility;
        this.casterLevel = casterLevel;
        this.spellClass = spellsOfClass;
    }

    public addAtWillSpell(spell: Spell) {
        this.atWillSpells.push(spell);
        this.atWillSpells.sort((a, b) => {
            if (a.name > b.name) { return 1; }
            if (a.name < b.name) { return -1; }
            return 0;
        });
    }

    public addSpell(spell: Spell, level: number) {
        if (this.spellsByLevel[level] === undefined) {
            this.spellsByLevel[level] = [];
        }
        this.spellsByLevel[level].push(spell);
        this.spellsByLevel[level].sort((a, b) => {
            if (a.name > b.name) { return 1; }
            if (a.name < b.name) { return -1; }
            return 0;
        });
    }

    public setSpellSlots(slots: number[]) {
        this.spellSlotsByLevel = slots;
    }


    get desc(): string {
        const spellDC: number = 8 + this.monster.expectedCR.profBonus + this.monster.abilityScores.getAbilityScore(this.spellcastingAbility).modifier;
        const toHit: number = this.monster.expectedCR.profBonus + this.monster.abilityScores.getAbilityScore(this.spellcastingAbility).modifier;

        let intro = "The " + this.monster.shortName.toLowerCase() + " is a " + numSuffix(this.casterLevel) + " level spellcaster. ";
        intro += "Its spellcasting ability is " + abilityScoreName(this.spellcastingAbility) + " ";
        intro += "(spell save DC " + spellDC + ", " + modifierStr(toHit) + " to hit with spell attacks). ";
        if (this.additionalText !== "") { intro += this.additionalText + " "; }
        intro += "The " + this.monster.shortName.toLowerCase() + " has the following " + ClassName[this.spellClass].toLowerCase() + " spells prepared:<br/>";

        let atWills = "<div class='spells'>Cantrips (at will): <i>";
        atWills += this.atWillSpells.map((s) => s.name).join(", ");
        atWills += "</i></div>";

        let spells = "";
        for (let level in this.spellsByLevel) {
            if (this.spellsByLevel[level] !== undefined) {
                const theLevel: number = parseInt(level, 10);
                let slots = "?";
                if (this.spellSlotsByLevel[theLevel - 1] !== undefined) { slots = this.spellSlotsByLevel[theLevel - 1].toString(); }
                spells += "<div class='spells'>" + numSuffix(theLevel) + " level (" + slots + " slots): <i>";
                spells += this.spellsByLevel[level].map((s) => s.name).join(", ");
                spells += "</i></div>";
            }
        }

        return intro + atWills + spells;
    }

}