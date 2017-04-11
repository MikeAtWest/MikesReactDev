import { ISpeed, Speed } from "./Speed";

export interface ISpeedList {
    speedDesc: string;
    addSpeed(speed: Speed): void;
}

export class SpeedList {

    private _speeds: Speed[];
    private _speedsDesc: string = "";

    constructor() {
        this._speeds = [];
    };

    public get speedDesc(): string {
        return this._speedsDesc;
    }

    public addSpeed(speed: Speed) {
        // Need to exclude duplicates, then order.
        this._speeds.push(speed);
        this.updateSpeedDesc();
    };

    private updateSpeedDesc(): void {
        let result = "";
        this._speeds.forEach((spd) => {
            if (result !== "") { result += ", "; };
            if (spd.name !== "walk") {
                result += spd.name + " ";
            }
            result += spd.rate.toString() + " ft.";
        });
        this._speedsDesc = result;
    }
}
