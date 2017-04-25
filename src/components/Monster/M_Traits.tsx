/*import * as React from "react";

import { ITrait, Trait } from "./classes/Trait";

export interface ITraitsProps extends React.Props<M_Traits> {
  traits: ITrait[];
}

export default class M_Traits extends React.Component<ITraitsProps, {}> {

  public constructor(props: ITraitsProps) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.props.traits.length > 0 &&
          <div>
             <div className="attacks">
              {this.props.traits.map((trait, i) => {
                return <div className="line" key={i}><span>{trait.name}.</span> {trait.desc}</div>;
              })}
            </div>
          </div>
        }
      </div >
    );
  }
}*/
