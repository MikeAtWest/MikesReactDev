import * as React from "react";

import { IAbilityScores } from "./classes/AbilityScores";
import { ActionList, IActionList } from "./classes/ActionList";

export interface IActionsProps extends React.Props<M_Actions> {
  actions: IActionList;
}

export default class M_Actions extends React.Component<IActionsProps, {}> {

  public constructor(props: IActionsProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.props.actions.actions.length > 0 &&
          <div>
            <div className="actionsTitle">Actions</div>
            <div className="attacks">
              {this.props.actions.actions.map((action, i) => {
                return <div className="line" key={i}><span>{action.name}.</span> <span>Melee Weapon Attack:</span> +5 to hit, reach {action.reach} ft., {action.targets} target. <span>Hit:</span> {action.baseDamageRoll.average} ({action.baseDamageRoll.desc}) slashing damage.</div>;
              })}
            </div>
          </div>
        }
      </div >
    );
  }
}
