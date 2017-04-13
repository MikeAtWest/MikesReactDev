import { Armor, IArmor } from "../classes/Armor";

import { Alignment, Size, Type } from "../classes/enums";

import { AbilityScores, IAbilityScores } from "../classes/AbilityScores";
import { CRTable, ICRTable } from "../classes/CRTable";
import { HitDice } from "../classes/HitDice";
import { IImmunity, Immunity } from "../classes/Immunity";
import { IMonster, Monster } from "../classes/Monster";
import { IResistance, Resistance } from "../classes/Resistance";
import { IRoll, Roll } from "../classes/Roll";
import { ISpeed, Speed } from "../classes/Speed";
import { alignmentDesc } from "../classes/utilities";

export function api_getMonster(monsterID: number): IMonster {

    const monster = new Monster();

    const crTable = new CRTable();

    if (monsterID.toString() === "1") {
        monster.name = "Orc";
        monster.type = Type.Humanoid;
        monster.tags = ["orc"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.armorList.addArmor(new Armor("hide", 2, null));
        monster.armorList.addArmor(new Armor("shield", 2, null));
        monster.speeds.addSpeed(new Speed("walk", 30));
        monster.abilityScores = new AbilityScores(16, 8, 16, 7, 11, 10);
        monster.expectedCR = crTable.getCREntry("1/2");
        monster.hitDice = new HitDice(monster.size, 3);
        monster.vulnerabilities.addMultipleVulnerabilities(["cold", "fire"]);
        monster.hitPointMultiplier = 2;
        monster.hitPointMultiplierNote = "tougher than average";
    }

    if (monsterID.toString() === "2") {
        monster.name = "Marilith";
        monster.type = Type.Fiend;
        monster.size = Size.Large;
        monster.tags = ["demon"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.armorList.addArmor(new Armor("natural armor", 3, null));
        monster.speeds.addSpeed(new Speed("walk", 20));
        monster.speeds.addSpeed(new Speed("fly", 30));
        monster.speeds.addSpeed(new Speed("sashay", 325));
        monster.abilityScores = new AbilityScores(18, 20, 20, 18, 16, 20);
        monster.expectedCR = crTable.getCREntry("16");
        monster.hitDice = new HitDice(monster.size, 18);
        monster.resistances.addMultipleResistances(["cold", "fire", "lightning"]);
        monster.resistances.addResistance(new Resistance("bludgeoning, piercing, and slashing from nonmagical weapons", 3, true));
        monster.immunities.addImmunity(new Immunity("poison"));
        monster.immunities.addImmunity(new Immunity("clubs"));
        monster.immunities.addImmunity(new Immunity("water"));
        monster.immunities.addImmunity(new Immunity("fish"));        
        monster.vulnerabilities.addMultipleVulnerabilities(["cold", "fire", "bullets"]);
        monster.hitPointMultiplier = 2;
        monster.hitPointMultiplierNote = "tougher than average";
    }

    if (monsterID.toString() === "3") {
        monster.name = "Quasit";
        monster.type = Type.Fiend;
        monster.size = Size.Tiny;
        monster.tags = ["demon", "shapechanger"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.speeds.addSpeed(new Speed("walk", 40));
        monster.abilityScores = new AbilityScores(5, 17, 10, 7, 10, 10);
        monster.expectedCR = crTable.getCREntry("1");
        monster.hitDice = new HitDice(monster.size, 3);
        monster.resistances.addMultipleResistances(["cold", "fire", "lightning"]);
        monster.resistances.addResistance(new Resistance("bludgeoning, piercing, and slashing from nonmagical weapons", 3, true));
        monster.immunities.addImmunity(new Immunity("poison"));
    }

    if (monsterID.toString() === "4") {
        monster.name = "Flesh Golem";
        monster.type = Type.Construct;
        monster.size = Size.Medium;
        monster.tags = [];
        monster.alignment = Alignment.Neutral;
        monster.speeds.addSpeed(new Speed("walk", 30));
        monster.abilityScores = new AbilityScores(19, 9, 18, 6, 10, 5);
        monster.expectedCR = crTable.getCREntry("5");
        monster.hitDice = new HitDice(monster.size, 11);
        monster.immunities.addMultipleImmunities(["lightning", "poison"]);
        monster.immunities.addImmunity(new Immunity("bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine", 3, true));
    }

    return monster;

};
