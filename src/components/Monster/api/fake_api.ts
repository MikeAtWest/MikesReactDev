import { Armor, IArmor } from "../classes/Armor";

import { Alignment, Size, Type } from "../classes/enums";

import { AbilityScores, IAbilityScores } from "../classes/AbilityScores";
import { IMonster, Monster } from "../classes/Monster";
import { IRoll, Roll } from "../classes/Roll";
import { ISpeed, Speed } from "../classes/Speed";
import { alignmentDesc } from "../classes/utilities";

export function api_getMonster(monsterID: number): IMonster {

    const monster = new Monster();

    if (monsterID.toString() === "1") {
        monster.name = "Hobgoblin";
        monster.type = Type.Humanoid;
        monster.tags = ["goblinoid"];
        monster.alignment = Alignment.LawfulEvil;
        monster.armorList.addArmor(new Armor("chain mail", 6, 0));
        monster.armorList.addArmor(new Armor("shield", 2, null));        
        monster.hp = 11;
        monster.hpRoll = new Roll(2, 8, 2);
        monster.speeds.addSpeed(new Speed("walk", 30));
        monster.abilityScores = new AbilityScores(13, 12, 12, 10, 10, 9);
        monster.expectedCR = "1/2";
    }

    if (monsterID.toString() === "2") {
        monster.name = "Marilith";
        monster.type = Type.Fiend;
        monster.tags = ["demon"];
        monster.alignment = Alignment.ChaoticEvil;
        monster.armorList.addArmor(new Armor("natural armor", 3, null));
        monster.hp = 189;
        monster.hpRoll = new Roll(18, 10, 90);
        monster.speeds.addSpeed(new Speed("walk", 20));
        monster.speeds.addSpeed(new Speed("fly", 30));
        monster.speeds.addSpeed(new Speed("sashay", 325));
        monster.abilityScores = new AbilityScores(18, 20, 20, 18, 16, 20);
        monster.expectedCR = "16";
    }

    return monster;

};
