import { IMonster, Monster } from "./Monster";

import { FeatureType } from "./enums";

export interface IFeature {
    name: string;
    type: FeatureType;
    desc?: string;
}

export class Feature implements IFeature {
    public name: string = "";
    public type: FeatureType = FeatureType.SpecialTrait;
    public _desc: string = "";

    protected monster: Monster = null;

    constructor(name: string, type: FeatureType, monster: Monster) {
        this.name = name;
        this.type = type;
        this.monster = monster;
    }

    get desc(): string {
        return this._desc;
    }

    set desc(d: string ) {
        this._desc = d;
    }
}
