import * as React from "react";

import { IAbilityScores } from "./classes/AbilityScores";

export interface IAbilityScoresProps extends React.Props<M_AbilityScores> {
  abilityScores: IAbilityScores;
}

export default class M_AbilityScores extends React.Component<IAbilityScoresProps, {}> {

  public constructor(props: IAbilityScoresProps) {
    super(props);
  }

  public render() {
    return (
      <div className="stats">
        <div>
          <div><span>STR</span><br />{this.props.abilityScores.STR.score} ({this.props.abilityScores.STR.modifierStr})</div>
          <div><span>DEX</span><br />{this.props.abilityScores.DEX.score} ({this.props.abilityScores.DEX.modifierStr})</div>
          <div><span>CON</span><br />{this.props.abilityScores.CON.score} ({this.props.abilityScores.CON.modifierStr})</div>
        </div>
        <div>
          <div><span>INT</span><br />{this.props.abilityScores.INT.score} ({this.props.abilityScores.INT.modifierStr})</div>
          <div><span>WIS</span><br />{this.props.abilityScores.WIS.score} ({this.props.abilityScores.WIS.modifierStr})</div>
          <div><span>CHA</span><br />{this.props.abilityScores.CHA.score} ({this.props.abilityScores.CHA.modifierStr})</div>
        </div>
      </div>
    );
  }
}
