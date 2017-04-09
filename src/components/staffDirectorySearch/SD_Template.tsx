import * as React from "react";

export interface ITemplateProps extends React.Props<SD_Template> {
  portletInstanceId: number;
}

export default class SD_Template extends React.Component<ITemplateProps, {}> {

  public constructor(props: ITemplateProps) {
    super(props);
  }

  public render() {

    return (
      <div>Template Component</div>
    );
  }
}
