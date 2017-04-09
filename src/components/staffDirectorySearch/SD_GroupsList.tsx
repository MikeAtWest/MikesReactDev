import * as React from "react";

export interface IGroupsListProps extends React.Props<SD_GroupsList> {
  groups: string[];
}

export default class SD_GroupsList extends React.Component<IGroupsListProps, {}> {

  public constructor(props: IGroupsListProps) {
    super(props);
  }

  public render() {

    const groupItems = this.props.groups.map((group, i) => {
      return <li key={i}>{group}</li>;
    });

    return (
      <li className="DIR-groups">
        <ul>{groupItems}</ul>
      </li>
    );
  }
}
