import * as React from "react";

import "../../../node_modules/font-awesome/scss/font-awesome.scss"; // Font-Awesome SASS CSS sheet.
import "./styles/common.css";
import "./styles/staffDirSearch.css";

import { ISettings, IStaffBasic, IStaffExtended } from "./IStaffDirectorySearch";

import SD_SearchResults from "./SD_SearchResults";
import SD_SearchSettings from "./SD_SearchSettings";

import { api_getSearchResults, api_getSearchResultsExtended, api_getSettings } from "./api/dummyAPI";

export interface ISearchProps extends React.Props<SD_Search> {
  portletInstanceID: number;
}

export interface ISearchState {
  settings: ISettings;
  staffMembersBasic: IStaffBasic[];
  staffMembersExtended: { [userID: number]: IStaffExtended };
}

export default class SD_Search extends React.Component<ISearchProps, ISearchState> {

  public constructor(props: ISearchProps) {
    super(props);

    const settings: ISettings = api_getSettings(this.props.portletInstanceID);
    const staffBasic: IStaffBasic[] = api_getSearchResults();
    const staffExtended: { [userID: number]: IStaffExtended } = api_getSearchResultsExtended();

    this.state = { settings, staffMembersBasic: staffBasic, staffMembersExtended: staffExtended };
  }

  public render() {

    return (

      <div className="PO-wrapper PO-staffDirectory">

        <SD_SearchSettings portletInstanceId={this.props.portletInstanceID} groups={this.state.settings.groups} />

        <SD_SearchResults
          portletInstanceId={this.props.portletInstanceID}
          settings={this.state.settings}
          staffMembersBasic={this.state.staffMembersBasic}
          staffMembersExtended={this.state.staffMembersExtended}/>
      </div>

    );
  }
}
