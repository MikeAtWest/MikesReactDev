import * as React from "react";

import { ISettings, IStaffBasic, IStaffExtended } from "./IStaffDirectorySearch";

import SD_GroupsList from "./SD_GroupsList";
import SD_Name from "./SD_Name";
import SD_Photo from "./SD_Photo";
import SD_QuickLinks from "./SD_QuickLinks";
import SD_StaffExtended from "./SD_StaffExtended";

export interface IStaffBasicProps extends React.Props<SD_StaffBasic> {
  settings: ISettings;
  staffBasic: IStaffBasic;
  staffExtended: IStaffExtended;
}

export default class SD_StaffBasic extends React.Component<IStaffBasicProps, {}> {

  public render() {

    return (

      <li className="DIR-item active">
        <div className="DIR-card">

          <SD_Photo imageURL={this.props.staffBasic.imageURL} firstName={this.props.staffBasic.firstName} lastName={this.props.staffBasic.lastName} />

          <div className="DIR-cardInfo">
            <ul>

              <SD_Name firstName={this.props.staffBasic.firstName} lastName={this.props.staffBasic.lastName} sortOrder={this.props.settings.sortOrder} onlyShowFirstInitial={this.props.settings.onlyShowFirstInitial} />

              <li className="DIR-title">{this.props.staffBasic.jobTitle}</li>

              <SD_GroupsList groups={this.props.staffBasic.groups} />

              <li className="DIR-quickLinks">

                <SD_QuickLinks
                  website={this.props.staffBasic.website}
                  email={this.props.staffBasic.email}
                  useExternalEmailApp={this.props.settings.useExternalEmailApp}
                  phone={this.props.staffBasic.phone}
                  emailPrivacy={this.props.settings.emailPrivacy}
                  firstName={this.props.staffBasic.firstName}
                  lastName={this.props.staffBasic.lastName}
                  userID={this.props.staffBasic.userID}
                  sortOrder={this.props.settings.sortOrder}
                  onlyShowFirstInitial={this.props.settings.onlyShowFirstInitial}
                />

                <div className="DIR-more">
                  <a className="DIR-openSlideOut" href="#">More...</a>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <SD_StaffExtended settings={this.props.settings} staffBasic={this.props.staffBasic} staffExtended={this.props.staffExtended} />

      </li>

    );
  }
}
