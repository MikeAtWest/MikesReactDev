import * as React from "react";

import { BASE_PATH, EMAIL_POPUP_URL, EmailStyle } from "./IStaffDirectorySearch";
import { formatName } from "./Utilities";

export interface IEmailProps extends React.Props<SD_Email> {
  style: EmailStyle;
  email: string;
  emailPrivacy: boolean;
  useExternalEmailApp: boolean;
  firstName: string;
  lastName: string;
  userID: number;
  sortOrder: string;
  onlyShowFirstInitial: boolean;
}

export default class SD_Email extends React.Component<IEmailProps, {}> {

  public constructor(props: IEmailProps) {
    super(props);
  }

  public render() {

    const name = formatName(this.props.firstName, this.props.lastName, this.props.sortOrder, this.props.onlyShowFirstInitial);
    const alt = "Email (" + name + ")";

    const emailPopupURL = BASE_PATH + EMAIL_POPUP_URL + this.props.userID;

    let emailLink = "";
    if (this.props.emailPrivacy || !this.props.useExternalEmailApp) {
      emailLink = "javascript: OpenModalDialog('" + emailPopupURL + "',  'sendemail', 700, 530);"; // This JS function only exists in the Presence CMS.
    } else {
      emailLink = "mailto:" + this.props.email;
    }

    let email: JSX.Element = null;
    if (this.props.email !== "") {
      switch (this.props.style) {

        case EmailStyle.small:
          email = (
            <li>
              <a href={emailLink}>
                <em className="fa fa-envelope DIR-infoOption" aria-hidden="true" title={alt}></em>
                {!this.props.emailPrivacy &&
                  <span>{this.props.email}</span>
                }
              </a>
            </li>
          );
          break;

        case EmailStyle.medium:
          email = (
            <li>
              <a href={emailLink} className="DIR-contactButton">
                <em className="fa fa-envelope" aria-hidden="true" title={alt}></em>
                {!this.props.emailPrivacy &&
                  this.props.email
                }
              </a>
            </li>
          );
          break;

        default:
          email = <div>Unknown email style</div>;
      }
    }

    return (
      email
    );
  }
}
