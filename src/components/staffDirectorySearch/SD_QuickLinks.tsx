import * as React from "react";

import { EmailStyle } from "./IStaffDirectorySearch";

import SD_Email from "./SD_Email";

export interface IQuickLinksProps extends React.Props<SD_QuickLinks> {
  email: string;
  emailPrivacy: boolean;
  useExternalEmailApp: boolean;
  website: string;
  phone: string;
  firstName: string;
  lastName: string;
  userID: number;
  sortOrder: string;
  onlyShowFirstInitial: boolean;
}

export default class SD_QuickLinks extends React.Component<IQuickLinksProps, {}> {

  public constructor(props: IQuickLinksProps) {
    super(props);
  }

  public render() {

    const showWebsite: boolean = this.props.website !== "";
    const showPhone: boolean = this.props.phone !== "";
    const showEmail: boolean = this.props.email !== "";

    const showQuickButtons: boolean = showWebsite || showPhone || showEmail;
    return (
      <div>
        {
          showQuickButtons &&
          <div className="DIR-quickButtons">
            <ul>
              {showWebsite &&
                <li><a href={this.props.website} target="_blank"><em className="fa fa-globe" aria-hidden="true"></em><span className="offScreen">My Website</span></a></li>
              }

              <SD_Email
                style={EmailStyle.small}
                email={this.props.email}
                emailPrivacy={this.props.emailPrivacy}
                useExternalEmailApp={this.props.useExternalEmailApp}
                firstName={this.props.firstName}
                lastName={this.props.lastName}
                userID={this.props.userID}
                sortOrder={this.props.sortOrder}
                onlyShowFirstInitial={this.props.onlyShowFirstInitial}
              />

              {showPhone &&
                <li><a href="#"><em className="fa fa-phone DIR-infoOption" aria-hidden="true"></em><span>{this.props.phone}</span></a></li>
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}
