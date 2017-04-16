import { Armor, IArmor } from "../classes/Armor";

import { AbilityScoreAbbrev, Alignment, AttackType, DamageType, Size, SkillName, Type } from "../classes/enums";

import { AbilityScores, IAbilityScores } from "../classes/AbilityScores";
import { Action, IAction } from "../classes/Action";
import { CRTable, ICRTable } from "../classes/CRTable";
import { HitDice } from "../classes/HitDice";
import { IImmunity, Immunity } from "../classes/Immunity";
import { IMonster, Monster } from "../classes/Monster";
import { IResistance, Resistance } from "../classes/Resistance";
import { IRoll, Roll } from "../classes/Roll";
import { ISavingThrows, SavingThrows } from "../classes/SavingThrows";
import { ISkill, Skill } from "../classes/Skill";
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
        monster.skills.push(new Skill(SkillName.Intimidation));
        monster.expectedCR = crTable.getCREntry("1/2");
        monster.hitDice = new HitDice(monster.size, 2);
        // monster.vulnerabilities.addMultipleVulnerabilities(["cold", "fire"]);
        // monster.hitPointMultiplier = 2;
        // monster.hitPointMultiplierNote = "tougher than average";
        monster.actions.addAction(new Action("Greataxe", AttackType.MeleeWeapon, new Roll(1, 12, 0), DamageType.Slashing));
        // monster.actions.addAction(new Action("Javelin", AttackType.MeleeWeapon, new Roll(1, 6, 0), DamageType.Piercing));

        const jav = new Action("Javelin", AttackType.MeleeOrRanged, new Roll(1, 6, 0), DamageType.Piercing);
        jav.normalRange = 30;
        jav.maxRange = 120;
        jav.thrown = true;

        monster.actions.addAction(jav);
    }

    if (monsterID.toString() === "2") {
        monster.name = "Marilith";
        monster.type = Type.Fiend;
        monster.size = Size.Large;
        monster.tags = ["demon"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.armorList.addArmor(new Armor("natural armor", 3, null));
        monster.speeds.addSpeed(new Speed("walk", 40));
        monster.abilityScores = new AbilityScores(18, 20, 20, 18, 16, 20);
        monster.savingThrows = new SavingThrows(true, false, true, false, true, true);
        monster.expectedCR = crTable.getCREntry("16");
        monster.hitDice = new HitDice(monster.size, 18);
        monster.resistances.addMultipleResistances(["cold", "fire", "lightning"]);
        monster.resistances.addResistance(new Resistance("bludgeoning, piercing, and slashing from nonmagical weapons", 3, true));
        monster.immunities.addImmunity(new Immunity("poison"));
        monster.actions.addAction(new Action("Longsword", AttackType.MeleeWeapon, new Roll(2, 8, 0), DamageType.Slashing));

        const tail = new Action("Tail", AttackType.MeleeWeapon, new Roll(2, 10, 0), DamageType.Bludgeoning);
        tail.additional = ". If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets";
        monster.actions.addAction(tail);
    }

    if (monsterID.toString() === "3") {
        monster.name = "Quasit";
        monster.type = Type.Fiend;
        monster.size = Size.Tiny;
        monster.tags = ["demon", "shapechanger"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.speeds.addSpeed(new Speed("walk", 40));
        monster.abilityScores = new AbilityScores(5, 17, 10, 7, 10, 10);
        monster.skills.push(new Skill(SkillName.Stealth));
        monster.expectedCR = crTable.getCREntry("1/2");
        monster.hitDice = new HitDice(monster.size, 3);
        monster.resistances.addMultipleResistances(["cold", "fire", "lightning"]);
        monster.resistances.addResistance(new Resistance("bludgeoning, piercing, and slashing from nonmagical weapons", 3, true));
        monster.immunities.addImmunity(new Immunity("poison"));

        const a = new Action("Claws (Bite in Beast Form)", AttackType.MeleeWeapon, new Roll(1, 4, 0), DamageType.Piercing);
        a.finesse = true;
        a.additional = " and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the affect on itself on a success";
        monster.actions.addAction(a);
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
        monster.actions.addAction(new Action("Slam", AttackType.MeleeWeapon, new Roll(2, 8, 0), DamageType.Bludgeoning));
    }

    if (monsterID.toString() === "5") {
        monster.name = "Gnoll";
        monster.type = Type.Humanoid;
        monster.size = Size.Medium;
        monster.tags = ["gnoll"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.armorList.addArmor(new Armor("hide armor", 2, null));
        monster.armorList.addArmor(new Armor("shield", 2, null));
        monster.speeds.addSpeed(new Speed("walk", 30));
        monster.abilityScores = new AbilityScores(14, 12, 11, 6, 10, 7);
        monster.expectedCR = crTable.getCREntry("1/2");
        monster.hitDice = new HitDice(monster.size, 5);
        monster.actions.addAction(new Action("Bite", AttackType.MeleeWeapon, new Roll(1, 4, 0), DamageType.Piercing));

        const spear = new Action("Spear", AttackType.MeleeOrRanged, new Roll(1, 6, 0), DamageType.Piercing);
        spear.versatile = true;
        spear.versatileBaseDamageRoll = new Roll(1, 8, 0);
        spear.thrown = true;
        spear.normalRange = 20;
        spear.maxRange = 60;
        monster.actions.addAction(spear);

        const bow = new Action("Longbow", AttackType.RangedWeapon, new Roll(1, 8, 0), DamageType.Piercing);
        bow.normalRange = 150;
        bow.maxRange = 600;
        bow.heavy = true;
        bow.twoHanded = true;
        monster.actions.addAction(bow);

    }

    return monster;

};
