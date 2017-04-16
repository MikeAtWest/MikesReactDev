import * as React from "react";

import { IAbilityScores } from "./classes/AbilityScores";
import { CompleteAction, ICompleteAction } from "./classes/CompleteAction";

export interface ICompleteActionsProps extends React.Props<M_CompleteActions> {
  completeActions: ICompleteAction[];
}

export default class M_CompleteActions extends React.Component<ICompleteActionsProps, {}> {

  public constructor(props: ICompleteActionsProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.props.completeActions.length > 0 &&
          <div>
            <div className="actionsTitle">Actions</div>
            <div className="attacks">
              {this.props.completeActions.map((action, i) => {
                return (
                  <div className="line" key={i}>
                    <span>{action.name}.</span>&nbsp;
                <span>{action.secondaryName}:</span>&nbsp;
                {action.desc}.&nbsp;
                <i>Hit: </i>
                    {action.hit}
                  </div>
                );
              })}
            </div>
          </div>
        }
      </div >
    );
  }
}
