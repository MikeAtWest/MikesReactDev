import { AbilityScores, IAbilityScores } from "./AbilityScores";
import { ArmorList, IArmorList } from "./ArmorList";
import { IRoll, Roll } from "./Roll";
import { ISpeedList, SpeedList } from "./SpeedList";

import { Alignment, Size, Type } from "./enums";

export interface IMonster {
    name: string;
    size: Size;
    type: Type;
    tags: string[];
    alignment: Alignment;
    armorList: IArmorList;
    hp: number;
    hpRoll: IRoll;
    speeds: ISpeedList;
    abilityScores: IAbilityScores;
    ac: number;
    expectedCR: string;
}

export class Monster implements IMonster {
    public name: string = "Orc";
    public size: Size = Size.Medium;
    public type: Type = Type.Humanoid;
    public tags: string[] = ["orc"];
    public alignment: Alignment = Alignment.ChaoticEvil;
    public armorList = new ArmorList();
    public hp = 1;
    public hpRoll = new Roll(2, 8, 6);
    public speeds = new SpeedList();
    public abilityScores = new AbilityScores(10, 10, 10, 10, 10, 10);
    public expectedCR: string = "1";

    public get ac() {
        const dexBonus = Math.min(this.abilityScores.DEX.modifier, this.armorList.maxDexBonus);
        return dexBonus + this.armorList.acBonus;
    }
};
