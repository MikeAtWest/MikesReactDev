import { Action, IAction } from "./Action";

export interface IActionList {
    actions: IAction[];
    addAction(action: IAction): void;
}

export class ActionList implements IActionList {
    public actions: IAction[] = [];

    public addAction(action: IAction): void {
        this.actions.push(action);
    }
}
