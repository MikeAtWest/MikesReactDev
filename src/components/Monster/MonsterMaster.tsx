import * as React from "react";

import "../../../node_modules/font-awesome/scss/font-awesome.scss"; // Font-Awesome SASS CSS sheet.
import "./styles/monster.css";

import { api_getMonster } from "./api/fake_api";
import { IMonster, Monster } from "./classes/Monster";

import M_StandardDisplay from "./M_StandardDisplay";

export interface IMonsterMasterProps extends React.Props<MonsterMaster> {
  monsterID: number;
}

export interface IMonsterMasterState {
  monster: IMonster;
}

export default class MonsterMaster extends React.Component<IMonsterMasterProps, IMonsterMasterState> {

  public constructor(props: IMonsterMasterProps) {
    super(props);

    const monster = api_getMonster(this.props.monsterID);

    monster.processCompleteSkills();
    monster.processCompleteSavingThrows();

    this.state = { monster };
  }

  public render() {
    return (
      <M_StandardDisplay monster={this.state.monster} />
    );
  }
}
