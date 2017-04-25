import * as React from "react";

import { Alignment, Size, Type } from "./classes/enums";

import { Armor, IArmor } from "./classes/Armor";
import { ILanguages, Languages } from "./classes/Languages";
import { IMonster, Monster } from "./classes/Monster";
import { alignmentDesc } from "./classes/utilities";

import M_AbilityScores from "./M_AbilityScores";
import M_Features from "./M_Features";
import M_Languages from "./M_Languages";
import M_SavingThrows from "./M_SavingThrows";
import M_Skills from "./M_Skills";

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

            <M_SavingThrows savingThrows={this.props.monster.completeSavingThrows} />

            <M_Skills skills={this.props.monster.completeSkills} />

            {this.props.monster.resistances.resistances.length > 0 &&
              <div className="line"><span>Damage Resistances</span> {this.props.monster.resistances.names}</div>
            }
            {this.props.monster.immunities.immunities.length > 0 &&
              <div className="line"><span>Damage Immunities</span> {this.props.monster.immunities.names}</div>
            }
            {this.props.monster.vulnerabilities.vulnerabilities.length > 0 &&
              <div className="line"><span>Damage Vulnerabilities</span> {this.props.monster.vulnerabilities.names}</div>
            }
            <div className="line"><span>Condition Immunities</span> to do...</div>
            <div className="line"><span>Senses</span> to do...</div>

            <M_Languages languages={this.props.monster.languages} />

            <div className="line"><span>Challenge</span> {this.props.monster.expectedCR.cr} (100 XP)</div>
          </div>
          <hr />

          {/*<M_Traits traits={this.props.monster.traits} />*/}

          {/*<M_CompleteActions completeActions={this.props.monster.completeActions} />

          <M_Reactions reactions={this.props.monster.reactions} />*/}

          <M_Features features={this.props.monster.features} legendaryActionsIntro={this.props.monster.legendaryActionsIntro} />

          {/*<div className="actionsTitle">Static Actions</div>
          <div className="attacks">
            <div className="line"><span>Greataxe.</span> <span>Melee Weapon Attack:</span> +5 to hit, reach 5 ft., one target. <span>Hit:</span> 9 (1d12 + 3) slashing damage.</div>
            <div className="line"><span>Javelin.</span> <span>Melee or Ranged Weapon Attack:</span> +5 to hit, reach 5 ft. or range 30/120 ft., one target. <span>Hit:</span> 6 (1d6 + 3) piercing damage.</div>
          </div>*/}
        </div>
        <div className="footnotes">
          <div><span>Expected Challenge Rating:</span> {this.props.monster.expectedCR.cr}</div>
          <div><span>Proficiency bonus:</span> +{this.props.monster.expectedCR.profBonus}</div>
          <div><span>Expected AC:</span> {this.props.monster.expectedCR.ac}</div>
          <div><span>Expected HP:</span> {this.props.monster.expectedCR.minHp}-{this.props.monster.expectedCR.maxHp}</div>
          <div><span>Expected attack bonus:</span> {this.props.monster.expectedCR.attackBonus}</div>
          <div><span>Expected damage/round:</span> {this.props.monster.expectedCR.minDPR}-{this.props.monster.expectedCR.maxDPR}</div>
          <div><span>Expected save DC:</span> {this.props.monster.expectedCR.saveDC}</div>

          <div><span>Full AC:</span> {this.props.monster.fullAC}</div>
          <div><span>Effective HP:</span> {this.props.monster.effectiveHitPointsNote} = {this.props.monster.effectiveHitPoints} </div>
          <div><span>CR Notes:</span> {this.props.monster.challengeRatingNote} </div>
        </div>
      </div>
    );
  }
}
