import { AbilityScore, IAbilityScore } from "./AbilityScore";
import { DiceCollection, IDiceCollection } from "./DiceCollection";
import { Feature, IFeature } from "./Feature";
import { IMonster, Monster } from "./Monster";
import { ISpell, Spell } from "./Spell";

import { AbilityScoreAbbrev, AttackType, DamageType, FeatureType } from "./enums";

import { abilityScoreName } from "./utilities";

export interface IInnateSpellcaster {
    spellcastingAbility: AbilityScoreAbbrev;
    atWillSpells: ISpell[];
    dailySpells: { [timesPerDay: number]: ISpell[] };
}

export class InnateSpellcaster extends Feature implements IInnateSpellcaster {
    public spellcastingAbility: AbilityScoreAbbrev;
    public atWillSpells: ISpell[] = [];
    public dailySpells: { [timesPerDay: number]: ISpell[] } = {};

    constructor(type: FeatureType, monster: Monster, spellcastingAbility: AbilityScoreAbbrev) {
        super("Innate Spellcasting", type, monster);
        this.spellcastingAbility = spellcastingAbility;
    }

    public addAtWillSpell(spell: Spell) {
        this.atWillSpells.push(spell);
        this.atWillSpells.sort((a, b) => {
            if (a.name > b.name) { return 1; }
            if (a.name < b.name) { return -1; }
            return 0;
        });
    }

    public addDailySpell(spell: Spell, timesPerDay: number) {
        if (this.dailySpells[timesPerDay] === undefined) {
            this.dailySpells[timesPerDay] = [];
        }
        this.dailySpells[timesPerDay].push(spell);
        this.dailySpells[timesPerDay].sort((a, b) => {
            if (a.name > b.name) { return 1; }
            if (a.name < b.name) { return -1; }
            return 0;
        });
    }

    get desc(): string {
        const spellDC: number = 8 + this.monster.expectedCR.profBonus + this.monster.abilityScores.getAbilityScore(this.spellcastingAbility).modifier;

        let intro = "The " + this.monster.shortName.toLowerCase() + "'s spellcasting ability is " + abilityScoreName(this.spellcastingAbility) + " ";
        intro += "(spell save DC " + spellDC + "). ";
        intro += "The " + this.monster.shortName.toLowerCase() + " can innately cast the following spells, requiring no material components:<br/>";

        let atWills = "<div class='spells'>At will: <i>";
        atWills += this.atWillSpells.map((s) => s.name).join(", ");
        atWills += "</i></div>";

        let dailies = "";
        for (const timesPerDay in this.dailySpells) {
            if (this.dailySpells[timesPerDay] !== undefined) {
                dailies += "<div class='spells'>" + timesPerDay + "/day: <i>";
                dailies += this.dailySpells[timesPerDay].map((s) => s.name).join(", ");
                dailies += "</i></div>";
            }
        }

        return intro + atWills + dailies;
    }

}
