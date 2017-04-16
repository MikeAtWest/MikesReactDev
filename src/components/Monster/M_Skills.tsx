import * as React from "react";

import { CompleteSkill, ICompleteSkill } from "./classes/CompleteSkill";

import { modifierStr } from "./classes/utilities";

export interface ISkillsProps extends React.Props<M_Skills> {
  skills: ICompleteSkill[];
}

export default class M_Skills extends React.Component<ISkillsProps, {}> {

  public constructor(props: ISkillsProps) {
    super(props);
  }

  public render() {

    const skills = [];
    for (const skill of this.props.skills) {
      const s = skill.name + " " + modifierStr(skill.level);
      skills.push(s);
    }

    return (
      <div>
        {this.props.skills.length > 0 &&
          <div className="line">
            <span>Skills</span>&nbsp;{skills.join(", ")}
          </div>
        }
      </div>
    );
  }
}
