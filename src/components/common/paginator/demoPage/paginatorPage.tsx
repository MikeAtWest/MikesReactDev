import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import "../../../../../node_modules/font-awesome/scss/font-awesome.scss"; // Font-Awesome SASS CSS sheet.

import PaginatorComponent from "../paginatorComponent";

// For hot reloading
declare var module: any;
if (module.hot) {
    module.hot.accept();
}

$("div[id^='paginatorReact_']").each((index, elem) => {

  const portletInstanceId: number = elem.attributes["data-portlet-instance-id"].nodeValue;

  // AppContainer is required for hot reloading in dev mode. AppContainer is ommitted in build.
  const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Component portletInstanceId={portletInstanceId} />
      </AppContainer>,
      elem,
    );
  };

  render(PaginatorComponent);

});
