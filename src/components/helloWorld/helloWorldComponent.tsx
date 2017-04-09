import * as React from "react";
import "./helloWorldComponent.css";

interface IProps extends React.Props<HelloWorldComponent> {
  portletInstanceId: number;
}

export default class HelloWorldComponent extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className="helloWorldReact">
        <h1>Hello World from React (Portlet Instance id: {this.props.portletInstanceId})</h1>
      </div>
    );
  }
}
