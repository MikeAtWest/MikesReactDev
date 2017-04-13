import * as React from "react";

import { Alignment, Size, Type } from "./classes/enums";

import { Armor, IArmor } from "./classes/Armor";
import { IMonster, Monster } from "./classes/Monster";
import { IRoll, Roll } from "./classes/Roll";
import { alignmentDesc } from "./classes/utilities";

import M_AbilityScores from "./M_AbilityScores";

export interface IStandardDisplayProps extends React.Props<M_StandardDisplay> {
  monster: IMonster;
}

export default class M_StandardDisplay extends React.Component<IStandardDisplayProps, {}> {

  public constructor(props: IStandardDisplayProps) {
    super(props);
  }

  public render() {

    const size = Size[this.props.monster.size];
    const type = Type[this.props.monster.type].toLowerCase();
    let tagList = "";
    if (this.props.monster.tags.length > 0) {
      tagList = " (" + this.props.monster.tags.join(", ") + ")";
    }
    const alignDesc = alignmentDesc(this.props.monster.alignment).toLowerCase();
    let armorDesc = this.props.monster.armorList.armorsDesc;
    if (armorDesc !== "") { armorDesc = "(" + armorDesc + ")"; }
    const ac = this.props.monster.ac;
    const hp = this.props.monster.hp;
    const hpRoll = this.props.monster.hpRoll.desc;
    const speed = this.props.monster.speeds.speedDesc;

    return (
      <div className="main">
        <div className="monster">
          <div className="intro">
            <div className="name">{this.props.monster.name}</div>
            <div className="details">{size} {type}{tagList}, {alignDesc}</div>
          </div>
          <hr />
          <div className="section">
            <div className="line"><span>Armor Class</span> {ac} {armorDesc}</div>
            <div className="line"><span>Hit Points</span> {hp} ({hpRoll})</div>
            <div className="line"><span>Speed</span> {speed}</div>
          </div>
          <hr />

          <M_AbilityScores abilityScores={this.props.monster.abilityScores} />

          <hr />
          <div className="section">
            <div className="line"><span>Skills</span> Intimidation +2</div>
            {this.props.monster.resistances.resistances.length > 0 &&
              <div className="line"><span>Damage Resistances</span> {this.props.monster.resistances.names}</div>
            }
            {this.props.monster.immunities.immunities.length > 0 &&
              <div className="line"><span>Damage Immunities</span> {this.props.monster.immunities.names}</div>
            }
             {this.props.monster.vulnerabilities.vulnerabilities.length > 0 &&
              <div className="line"><span>Damage Vulnerabilities</span> {this.props.monster.vulnerabilities.names}</div>
            }            
            <div className="line"><span>Senses</span> darkvision 60 ft., passive Perception 10</div>
            <div className="line"><span>Languages</span> Common, Orc</div>
            <div className="line"><span>Challenge</span> 1/2 (100 XP)</div>
          </div>
          <hr />
          <div className="traits">
            <div><span>Aggressive.</span> As a bonus action, the orc can move up to its speed toward a hostile creature that it can see.</div>
          </div>
          <div className="actionsTitle">Actions</div>
          <div className="attacks">
            <div className="line"><span>Greataxe.</span> <span>Melee Weapon Attack:</span> +5 to hit, reach 5 ft., one target. <span>Hit:</span> 9 (1d12 + 3) slashing damage.</div>
            <div className="line"><span>Javelin.</span> <span>Melee or Ranged Weapon Attack:</span> +5 to hit, reach 5 ft. or range 30/120 ft., one target. <span>Hit:</span> 6 (1d6 + 3) piercing damage.</div>
          </div>
        </div>
        <div className="footnotes">
          <div><span>Expected Challenge Rating:</span> {this.props.monster.expectedCR.cr}</div>
          <div><span>Proficiency bonus:</span> +{this.props.monster.expectedCR.profBonus}</div>
          <div><span>Full AC:</span> {this.props.monster.fullAC}</div>
          <div><span>Effective HP:</span> {this.props.monster.effectiveHitPointsNote} = {this.props.monster.effectiveHitPoints} </div>
        </div>
      </div>
    );
  }
}
