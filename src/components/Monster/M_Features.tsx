import * as React from "react";

import { Attack, IAttack } from "./classes/Attack";
import { Feature, IFeature } from "./classes/Feature";

import { FeatureType } from "./classes/enums";

export interface IFeaturesProps extends React.Props<M_Features> {
  features: IFeature[];
  legendaryActionsIntro: string;
}

export default class M_Features extends React.Component<IFeaturesProps, {}> {

  public constructor(props: IFeaturesProps) {
    super(props);
  }

  public render() {

    // Special Traits:
    const specialTraits = this.props.features.filter((f) => f.type === FeatureType.SpecialTrait);
    const traitLines: JSX.Element[] = [];
    specialTraits.map((feature, i) => {
      const desc = { __html: feature.desc };
      traitLines.push(<div className="line" key={i}><span>{feature.name}.</span> <span dangerouslySetInnerHTML={desc} /></div>);
    });

    // Actions:
    const actions = this.props.features.filter((f) => f.type === FeatureType.Action);
    const actionLines: JSX.Element[] = [];
    actions.map((feature, i) => {
      const desc = { __html: feature.desc };
      actionLines.push(<div className="line" key={i}><span>{feature.name}.</span> <span dangerouslySetInnerHTML={desc} /></div>);
    });

    // Reactions:
    const reactions = this.props.features.filter((f) => f.type === FeatureType.Reaction);
    const reactionLines: JSX.Element[] = [];
    reactions.map((feature, i) => {
      const desc = { __html: feature.desc };
      reactionLines.push(<div className="line" key={i}><span>{feature.name}.</span> <span dangerouslySetInnerHTML={desc} /></div>);
    });

    // Legendary:
    const legendaries = this.props.features.filter((f) => f.type === FeatureType.Legendary);
    const legendaryLines: JSX.Element[] = [];
    legendaries.map((feature, i) => {
      const desc = { __html: feature.desc };
      legendaryLines.push(<div className="line" key={i}><span>{feature.name}.</span> <span dangerouslySetInnerHTML={desc} /></div>);
    });

    // const featureLines: JSX.Element[] = [];
    // this.props.features.map((feature, i) => {
    //   if (feature instanceof Attack) {
    //     const desc = { __html: feature.desc };
    //     featureLines.push(<div className="line" key={i}><span>{feature.name}.</span> <span dangerouslySetInnerHTML={desc} /></div>);
    //   }
    //   if (feature instanceof Feature) {
    //     featureLines.push(<div className="line" key={i}><span>{feature.name}.</span> {feature.desc}</div>);
    //   }
    // });

    return (
      <div>

        {traitLines.length > 0 &&
          <div className="features">
            {traitLines}
          </div>
        }

        {actionLines.length > 0 &&
          <div>
            <div className="featuresTitle">Actions</div>
            <div className="features">
              {actionLines}
            </div>
          </div>
        }

        {reactionLines.length > 0 &&
          <div>
            <div className="featuresTitle">Reactions</div>
            <div className="features">
              {reactionLines}
            </div>
          </div>
        }

        {legendaryLines.length > 0 &&
          <div>
            <div className="featuresTitle">Legendary Actions</div>
            {this.props.legendaryActionsIntro.length > 0 &&
              <div className="features">
                <div className="line">{this.props.legendaryActionsIntro}</div>
              </div>
            }
            <div className="features">
              {legendaryLines}
            </div>
          </div>
        }

      </div >
    );
  }
}
