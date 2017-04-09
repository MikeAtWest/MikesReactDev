import * as React from "react";

import { EmailStyle } from "./IStaffDirectorySearch";

import SD_Email from "./SD_Email";

export interface IContactInfoProps extends React.Props<SD_ContactInfo> {
  phone: string;
  website: string;
  email: string;
  emailPrivacy: boolean;
  useExternalEmailApp: boolean;
  blog: string;
  firstName: string;
  lastName: string;
  userID: number;
  sortOrder: string;
  onlyShowFirstInitial: boolean;
}

export default class SD_ContactInfo extends React.Component<IContactInfoProps, {}> {

  public constructor(props: IContactInfoProps) {
    super(props);
  }

  public render() {

    const showPhone: boolean = this.props.phone !== "";
    const showEmail: boolean = this.props.email !== "";
    const showWebsite: boolean = this.props.website !== "";
    const showBlog: boolean = this.props.blog !== "";

    const showContactInfo: boolean = showPhone || showEmail || showWebsite || showBlog;

    return (
      <div>
        {showContactInfo &&
          <div className="DIR-contactInfo">
            <ul>
              {showPhone &&
                <li><a className="DIR-contactButton" href="#"><em className="fa fa-phone" aria-hidden="true"></em>{this.props.phone}</a></li>
              }
              {showEmail &&
                <SD_Email
                  style={EmailStyle.medium}
                  email={this.props.email}
                  emailPrivacy={this.props.emailPrivacy}
                  useExternalEmailApp={this.props.useExternalEmailApp}
                  firstName={this.props.firstName}
                  lastName={this.props.lastName}
                  userID={this.props.userID}
                  sortOrder={this.props.sortOrder}
                  onlyShowFirstInitial={this.props.onlyShowFirstInitial}
                />
              }
              {showWebsite &&
                <li><a className="DIR-contactButton" href={this.props.website} target="_blank"><em className="fa fa-globe" aria-hidden="true"></em>My Website</a></li>
              }
              {showBlog &&
                <li><a className="DIR-contactButton" href={this.props.blog} target="_blank"><em className="fa fa-comments" aria-hidden="true"></em>My Blog</a></li>
              }
            </ul>
          </div>
        }
      </div>
    );
  }
}
