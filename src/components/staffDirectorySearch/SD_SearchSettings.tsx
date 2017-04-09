import * as React from "react";

import { IGroup } from "./IStaffDirectorySearch";

export interface ISearchSettingsProps extends React.Props<SD_SearchSettings> {
  portletInstanceId: number;
  groups: IGroup[];
}

export default class SD_SearchSettings extends React.Component<ISearchSettingsProps, {}> {
  public render() {

    return (
      <div className="PO-controlsTop">

        <div className="PO-search">
          <div className="DIR-sGroups">
            <div className="DIR-sGroup">
              <div className="DIR-sGroupFName">
                <span className="DIR-sGFN">All</span>
                <em className="fa fa-chevron-down" aria-hidden="true"></em>
              </div>

              <select className="DIR-sGroupSelect">
                <option data-text="All" value="0">All</option>
                {this.props.groups.map((group, i) => {
                    return <option data-text="{group.name}" value={group.groupID}>{group.name}</option>;
                })}
              </select>

            </div>
          </div>
          <div className="nav-fill">
            <div className="DIR-sTextInput">
              <input type="text" placeholder="Name, Job Title..." />
            </div>
            <div className="DIR-sSubmit"> <span className="DIR-sSubmitText">Search</span>
              <input type="submit" className="DIR-sGhostSubmit" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
