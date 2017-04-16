import * as React from "react";

import { CompleteSavingThrows, ICompleteSavingThrows } from "./classes/CompleteSavingThrows";

import { modifierStr } from "./classes/utilities";

export interface ISavingThrowsProps extends React.Props<M_SavingThrows> {
  savingThrows: ICompleteSavingThrows;
}

export default class M_SavingThrows extends React.Component<ISavingThrowsProps, {}> {

  public constructor(props: ISavingThrowsProps) {
    super(props);
  }

  public render() {

    const saves = [];
    if (this.props.savingThrows.STR) { saves.push("Str " + modifierStr(this.props.savingThrows.STR)); }
    if (this.props.savingThrows.DEX) { saves.push("Dex " + modifierStr(this.props.savingThrows.DEX)); }
    if (this.props.savingThrows.CON) { saves.push("Con " + modifierStr(this.props.savingThrows.CON)); }
    if (this.props.savingThrows.INT) { saves.push("Int " + modifierStr(this.props.savingThrows.INT)); }
    if (this.props.savingThrows.WIS) { saves.push("Wis " + modifierStr(this.props.savingThrows.WIS)); }
    if (this.props.savingThrows.CHA) { saves.push("Cha " + modifierStr(this.props.savingThrows.CHA)); }

    return (
      <div>
        {saves.length > 0 &&
          <div className="line">
            <span>Saving Throws</span>&nbsp;{saves.join(", ")}
          </div>
        }
      </div>
    );
  }
}
