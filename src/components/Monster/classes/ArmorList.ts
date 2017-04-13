import { Armor, IArmor } from "./Armor";

export interface IArmorList {
    acBonus: number;
    maxDexBonus: number;
    armorsDesc: string;
    armors: Armor[];
    addArmor(armor: Armor): void;
}

export class ArmorList implements IArmorList {

    private _armors: Armor[];
    private _acBonus: number = 10;
    private _armorsDesc: string = "";

    constructor() {
        this._armors = [];
    };

    public get acBonus(): number {
        return this._acBonus;
    }

    public get armorsDesc(): string {
        return this._armorsDesc;
    }

    public addArmor(armor: Armor) {
        // Need to exclude duplicates, then order.
        this._armors.push(armor);
        this.updateArmorDesc();
        this.updateACBonus();
    };

    public get maxDexBonus(): number {
        let maxDexBonus = 1000;
        this._armors.forEach((a) => {
            if (a.maxDexBonus != null) {
                if (a.maxDexBonus < maxDexBonus) { maxDexBonus = a.maxDexBonus; }
            }
        });
        return maxDexBonus;
    }

    public get armors() {
        return this._armors;
    }

    private updateArmorDesc(): void {
        const names = this._armors.map((a) => a.name);
        this._armorsDesc = names.join(", ");
    }

    private updateACBonus(): void {
        this._acBonus = 10 + this._armors.reduce((a, b) => a + b.acBonus, 0);
    }

    private reduceArmor(total: number, armor: IArmor, index: number, armors: Armor[]): number {
        return total + armor.acBonus;
    }

};
