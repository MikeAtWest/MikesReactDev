/*import * as React from "react";

import { ITrait, Trait } from "./classes/Trait";

export interface IReactionsProps extends React.Props<M_Reactions> {
  reactions: ITrait[];
}

export default class M_Reactions extends React.Component<IReactionsProps, {}> {

  public constructor(props: IReactionsProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.props.reactions.length > 0 &&
          <div>
            <div className="actionsTitle">Reactions</div>
            <div>
              <div className="attacks">
                {this.props.reactions.map((trait, i) => {
                  return <div className="line" key={i}><span>{trait.name}.</span> {trait.desc}</div>;
                })}
              </div>
            </div>
          </div>
        }
      </div >
    );
  }
}*/
