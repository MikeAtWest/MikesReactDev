import { Armor, IArmor } from "../classes/Armor";

import { AbilityScoreAbbrev, Alignment, AttackType, ClassName, DamageType, FeatureType, Size, SkillName, Type } from "../classes/enums";

import { AbilityScores, IAbilityScores } from "../classes/AbilityScores";
import { Attack, IAttack } from "../classes/Attack";
import { CRTable, ICRTable } from "../classes/CRTable";

import { Damage, IDamage } from "../classes/Damage";
import { DamageCollection, IDamageCollection } from "../classes/DamageCollection";

import { DiceCollection, IDiceCollection } from "../classes/DiceCollection";

import { Feature, IFeature } from "../classes/Feature";
import { HitDice } from "../classes/HitDice";
import { IInnateSpellcaster, InnateSpellcaster } from "../classes/InnateSpellcaster";
import { IImmunity, Immunity } from "../classes/Immunity";
import { ILanguages, Languages } from "../classes/Languages";
import { IMonster, Monster } from "../classes/Monster";
import { IResistance, Resistance } from "../classes/Resistance";
import { ISavingThrows, SavingThrows } from "../classes/SavingThrows";
import { ISkill, Skill } from "../classes/Skill";
import { ISpeed, Speed } from "../classes/Speed";
import { ISpell, Spell } from "../classes/Spell";
import { ISpellcaster, Spellcaster } from "../classes/Spellcaster";
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
        monster.abilityScores = new AbilityScores(16, 12, 16, 7, 11, 10);
        monster.skills.push(new Skill(SkillName.Intimidation));
        monster.languages = new Languages(["Common", "Orc"]);
        monster.expectedCR = crTable.getCREntry("1/2");
        monster.hitDice = new HitDice(monster.size, 2);
        // monster.vulnerabilities.addMultipleVulnerabilities(["cold", "fire"]);
        // monster.hitPointMultiplier = 2;
        // monster.hitPointMultiplierNote = "tougher than average";

        const aggro = new Feature("Aggressive", FeatureType.SpecialTrait, monster);
        aggro.desc = "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.";
        monster.features.push(aggro);

        // const halberd = new Attack("Greataxe", FeatureType.Action, monster, AttackType.MeleeWeapon, new DiceCollection(1, 12, 0), DamageType.Slashing);
        // monster.features.push(halberd);

        // const javelin = new Attack("Javelin", FeatureType.Action, monster, AttackType.MeleeOrRanged, new DiceCollection(1, 6, 0), DamageType.Piercing);
        // javelin.normalRange = 30;
        // javelin.maxRange = 120;
        // javelin.thrown = true;
        // monster.features.push(javelin);

        const leg = new Feature("Legendary action", FeatureType.Legendary, monster);
        leg.desc = "This is an example of a legendary action.";
        monster.features.push(leg);

        monster.legendaryActionsIntro = "This is the the intro to the creature's Legendary actions.";
    }

    if (monsterID.toString() === "2") {
        monster.name = "Orc Eye of Gruumsh";
        monster.shortName = "Orc";
        monster.type = Type.Humanoid;
        monster.tags = ["orc"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.armorList.addArmor(new Armor("ring mail", 5, null));
        monster.armorList.addArmor(new Armor("shield", 2, null));
        monster.speeds.addSpeed(new Speed("walk", 30));
        monster.abilityScores = new AbilityScores(16, 12, 16, 9, 13, 12);
        monster.skills.push(new Skill(SkillName.Intimidation));
        monster.skills.push(new Skill(SkillName.Religion));
        monster.languages = new Languages(["Common", "Orc"]);
        monster.expectedCR = crTable.getCREntry("2");
        monster.hitDice = new HitDice(monster.size, 6);

        const sc = new InnateSpellcaster(FeatureType.SpecialTrait, monster, AbilityScoreAbbrev.CHA);
        sc.addAtWillSpell(new Spell("detect evil and good"));
        sc.addAtWillSpell(new Spell("invisibility"));
        sc.addDailySpell(new Spell("blade barrier"), 3);
        sc.addDailySpell(new Spell("dispel evil and good"), 3);
        sc.addDailySpell(new Spell("flame strike"), 3);
        sc.addDailySpell(new Spell("raise dead"), 3);
        sc.addDailySpell(new Spell("commune"), 1);
        sc.addDailySpell(new Spell("control weather"), 1);
        sc.addDailySpell(new Spell("insect plague"), 1);
        monster.features.push(sc);

        const sc2 = new Spellcaster(FeatureType.SpecialTrait, monster, AbilityScoreAbbrev.WIS, 3, ClassName.Cleric);
        sc2.addAtWillSpell(new Spell("guidance"));
        sc2.addAtWillSpell(new Spell("resistance"));
        sc2.addAtWillSpell(new Spell("thaumaturgy"));
        sc2.addSpell(new Spell("bless"), 1);
        sc2.addSpell(new Spell("command"), 1);
        sc2.addSpell(new Spell("augury"), 2);
        sc2.addSpell(new Spell("spiritual weapon"), 2);
        sc2.setSpellSlots([4,2]);
        sc2.additionalText = "The orc can cast <i>disguise self</i> at will.";
        monster.features.push(sc2);

        const aggro = new Feature("Aggressive", FeatureType.SpecialTrait, monster);
        aggro.desc = "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.";
        monster.features.push(aggro);

        const fury = new Feature("Gruumsh's Fury", FeatureType.SpecialTrait, monster);
        fury.desc = "The orc deals an extra 4 (1d8) damage when it hits with a weapon attack (included in the attack).";
        monster.features.push(fury);

        // const spear = new Attack("Spear", FeatureType.Action, monster, AttackType.MeleeOrRanged, new DiceCollection(1, 6, 0), DamageType.Piercing);
        // spear.versatile = true;
        // spear.versatileBaseDamageRoll = new DiceCollection(1, 8, 0);
        // spear.thrown = true;
        // spear.normalRange = 20;
        // spear.maxRange = 60;
        // const dc = new DiceCollection(1, 8, 0);
        // // dc.addDice(3, 4, 2);
        // spear.bonusDamageRoll = dc;
        // monster.features.push(spear);

        const spearDamage = new Damage(new DiceCollection(1, 6, 0), DamageType.Piercing);
        const spear = new Attack("Spear", FeatureType.Action, monster, AttackType.MeleeOrRanged, spearDamage);
        spear.versatile = true;
        spear.versatileBaseDamageRoll =new Damage(new DiceCollection(1, 8, 0), DamageType.Piercing);
        spear.thrown = true;
        spear.normalRange = 20;
        spear.maxRange = 60;
        // dc.addDice(3, 4, 2);
        

        const bonusDamage = new Damage(new DiceCollection(1, 8, 0), DamageType.Piercing);
        const moreBonusDamage = new Damage(new DiceCollection(2, 4, 0), DamageType.Acid);
        const bonusDamageCollection = new DamageCollection(bonusDamage);
        bonusDamageCollection.addDamage(moreBonusDamage);
        spear.bonusDamageRoll = bonusDamageCollection;
        monster.features.push(spear);

    }

    if (monsterID.toString() === "3") {
        monster.name = "Marilith";
        monster.type = Type.Fiend;
        monster.size = Size.Large;
        monster.tags = ["demon"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.armorList.addArmor(new Armor("natural armor", 3, null));
        monster.speeds.addSpeed(new Speed("walk", 40));
        monster.abilityScores = new AbilityScores(18, 20, 20, 18, 16, 20);
        monster.savingThrows = new SavingThrows(true, false, true, false, true, true);
        monster.languages = new Languages(["Abyssal"], true, 120);
        monster.expectedCR = crTable.getCREntry("16");
        monster.hitDice = new HitDice(monster.size, 18);
        monster.resistances.addMultipleResistances(["cold", "fire", "lightning"]);
        monster.resistances.addResistance(new Resistance("bludgeoning, piercing, and slashing from nonmagical weapons", 3, true));
        monster.immunities.addImmunity(new Immunity("poison"));

        const mr = new Feature("Magic Resistance", FeatureType.SpecialTrait, monster);
        mr.desc = "The marilith has advantage on saving throws against spells and other magical effects.";
        monster.features.push(mr);

        const mw = new Feature("Magic Weapons", FeatureType.SpecialTrait, monster);
        mw.desc = "The marilith's weapon attacks are magical.";
        monster.features.push(mw);

        const reac = new Feature("Reactive", FeatureType.SpecialTrait, monster);
        reac.desc = "The marilith can take one reaction on every turn in a combat.";
        monster.features.push(reac);

        // const sword = new Attack("Longsword", FeatureType.Action, monster, AttackType.MeleeWeapon, new DiceCollection(2, 8, 0), DamageType.Slashing);
        // monster.features.push(sword);

        // const tail = new Attack("Tail", FeatureType.Action, monster, AttackType.MeleeWeapon, new DiceCollection(2, 10, 0), DamageType.Bludgeoning);
        // tail.additional = ". If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets";
        // monster.features.push(tail);

        const parry = new Feature("Parry", FeatureType.Reaction, monster);
        parry.desc = "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be weilding a melee weapon.";
        monster.features.push(parry);
    }

    if (monsterID.toString() === "4") {
        monster.name = "Quasit";
        monster.type = Type.Fiend;
        monster.size = Size.Tiny;
        monster.tags = ["demon", "shapechanger"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.speeds.addSpeed(new Speed("walk", 40));
        monster.abilityScores = new AbilityScores(5, 17, 10, 7, 10, 10);
        monster.skills.push(new Skill(SkillName.Stealth));
        monster.languages = new Languages(["Abyssal", "Common"], false, 0, true);
        monster.expectedCR = crTable.getCREntry("1/2");
        monster.hitDice = new HitDice(monster.size, 3);
        monster.resistances.addMultipleResistances(["cold", "fire", "lightning"]);
        monster.resistances.addResistance(new Resistance("bludgeoning, piercing, and slashing from nonmagical weapons", 3, true));
        monster.immunities.addImmunity(new Immunity("poison"));

        const shapeChanger = new Feature("Shapechanger", FeatureType.SpecialTrait, monster);
        shapeChanger.desc = "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.) or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.";
        monster.features.push(shapeChanger);

        const mr = new Feature("Magic Resistance", FeatureType.SpecialTrait, monster);
        mr.desc = "The quasit has advantage on saving throws against spells and other magical effects.";
        monster.features.push(mr);

        // const claws = new Attack("Claws (Bite in Beast Form)", FeatureType.Action, monster, AttackType.MeleeWeapon, new DiceCollection(1, 4, 0), DamageType.Piercing);
        // claws.finesse = true;
        // claws.additional = " and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the affect on itself on a success";
        // monster.features.push(claws);

        const scare = new Feature("Scare (1/Day)", FeatureType.Action, monster);
        scare.desc = "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for one minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success.";
        monster.features.push(scare);

        const invis = new Feature("Invisibility", FeatureType.Action, monster);
        invis.desc = "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it.";
        monster.features.push(invis);
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
        monster.languages = new Languages(["Gnoll"]);
        monster.expectedCR = crTable.getCREntry("1/2");
        monster.hitDice = new HitDice(monster.size, 5);
        // monster.actions.addAction(new Action("Bite", AttackType.MeleeWeapon, new Roll(1, 4, 0), DamageType.Piercing));

        const rampage = new Feature("Rampage", FeatureType.SpecialTrait, monster);
        rampage.desc = "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack.";
        monster.features.push(rampage);

        // const bite = new Attack("Bite", FeatureType.Action, monster, AttackType.MeleeWeapon, new DiceCollection(1, 4, 0), DamageType.Piercing);
        // monster.features.push(bite);

        // const spear = new Attack("Spear", FeatureType.Action, monster, AttackType.MeleeOrRanged, new DiceCollection(1, 6, 0), DamageType.Piercing);
        // spear.versatile = true;
        // spear.versatileBaseDamageRoll = new DiceCollection(1, 8, 0);
        // spear.thrown = true;
        // spear.normalRange = 20;
        // spear.maxRange = 60;
        // monster.features.push(spear);

        // const bow = new Attack("Longbow", FeatureType.Action, monster, AttackType.RangedWeapon, new DiceCollection(1, 8, 0), DamageType.Piercing);
        // bow.normalRange = 150;
        // bow.maxRange = 600;
        // bow.heavy = true;
        // bow.twoHanded = true;
        // monster.features.push(bow);

    }

    if (monsterID.toString() === "10") {
        monster.name = "Flesh Golem";
        monster.type = Type.Construct;
        monster.size = Size.Medium;
        monster.tags = [];
        monster.alignment = Alignment.Neutral;
        monster.speeds.addSpeed(new Speed("walk", 30));
        monster.abilityScores = new AbilityScores(19, 9, 18, 6, 10, 5);
        monster.languages = new Languages(["languages of creator"], false, 0, true);
        monster.expectedCR = crTable.getCREntry("5");
        monster.hitDice = new HitDice(monster.size, 11);
        monster.immunities.addMultipleImmunities(["lightning", "poison"]);
        monster.immunities.addImmunity(new Immunity("bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine", 3, true));
        // monster.actions.addAction(new Action("Slam", AttackType.MeleeWeapon, new Roll(2, 8, 0), DamageType.Bludgeoning));
    }

    return monster;

};
