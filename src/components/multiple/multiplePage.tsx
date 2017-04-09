import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import HelloWorldComponent from "../helloWorld/helloWorldComponent";
import NewsComponent from "../news/newsComponent";
import SD_Search from "../staffDirectorySearch/SD_Search";

// Display Hello World components.
$("div[id^='helloWorld_']").each((index, elem) => {

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

  render(HelloWorldComponent);

});

// Display News components.
$("div[id^='newsReact_']").each( (index, elem) => {

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

  render(NewsComponent);

});

// Display Staff Directory Search components.
$("div[id^='staffDirectorySearchReact_']").each((index, elem) => {

  const portletInstanceId: number = elem.attributes["data-portlet-instance-id"].nodeValue;

  // AppContainer is required for hot reloading in dev mode. AppContainer is omitted in build.
  const render = (Component) => {
    ReactDOM.render(
      <AppContainer>
        <Component portletInstanceId={portletInstanceId} />
      </AppContainer>,
      elem,
    );
  };

  render(SD_Search);

});
