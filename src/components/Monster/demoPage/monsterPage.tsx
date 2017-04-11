import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import MonsterMaster from "../MonsterMaster";

// For hot reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}

$("div[id^='monsterReact_']").each((index, elem) => {

  const monsterID: number = elem.attributes["data-monster-id"].nodeValue;

  // AppContainer is required for hot reloading in dev mode. AppContainer is ommitted in build.
  const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Component monsterID={monsterID} />
      </AppContainer>,
      elem,
    );
  };

  render(MonsterMaster);

});
