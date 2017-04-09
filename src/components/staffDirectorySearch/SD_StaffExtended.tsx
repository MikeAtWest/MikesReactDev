import * as React from "react";

import { ISettings, IStaffBasic, IStaffExtended } from "./IStaffDirectorySearch";

import SD_BioAndMessage from "./SD_BioAndMessage";
import SD_ContactInfo from "./SD_ContactInfo";
import SD_SecondaryInfo from "./SD_SecondaryInfo";
import SD_SocialMediaLinks from "./SD_SocialMediaLinks";

export interface IStaffExtendedProps extends React.Props<SD_StaffExtended> {
  settings: ISettings;
  staffBasic: IStaffBasic;
  staffExtended: IStaffExtended;
}

export default class SD_StaffExtended extends React.Component<IStaffExtendedProps, {}> {

  public render() {

    return (

      <div>
        {this.props.staffExtended != null &&
          <div className="DIR-slideOut DIR-active">

            <SD_ContactInfo
              phone={this.props.staffBasic.phone}
              email={this.props.staffBasic.email}
              emailPrivacy={this.props.settings.emailPrivacy}
              useExternalEmailApp={this.props.settings.useExternalEmailApp}
              website={this.props.staffBasic.website}
              blog={this.props.staffExtended.blog}
              firstName={this.props.staffBasic.firstName}
              lastName={this.props.staffBasic.lastName}
              userID={this.props.staffBasic.userID}
              sortOrder={this.props.settings.sortOrder}
              onlyShowFirstInitial={this.props.settings.onlyShowFirstInitial}
            />

            <SD_SocialMediaLinks socialMediaLinks={this.props.staffExtended.socialMediaLinks} />

            <SD_SecondaryInfo room={this.props.staffExtended.room} grades={this.props.staffExtended.grades} subjects={this.props.staffExtended.subjects} officeHours={this.props.staffExtended.officeHours} />

            <SD_BioAndMessage biography={this.props.staffExtended.biography} personalMessage={this.props.staffExtended.personalMessage} />

          </div>
        }
      </div>

    );
  }
}
