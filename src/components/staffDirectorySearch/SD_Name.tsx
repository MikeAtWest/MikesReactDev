import * as React from "react";

import { formatName } from "./Utilities";

export interface INameProps extends React.Props<SD_Name> {
  firstName: string;
  lastName: string;
  sortOrder: string;
  onlyShowFirstInitial: boolean;
}

export default class SD_Name extends React.Component<INameProps, {}> {

  public constructor(props: INameProps) {
    super(props);
  }

  public render() {

    const name = formatName(this.props.firstName, this.props.lastName, this.props.sortOrder, this.props.onlyShowFirstInitial);

    return (
      <li className="DIR-name">{name}</li>
    );
  }
}
