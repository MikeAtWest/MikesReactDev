import * as React from "react";

import { ISocialMediaLink } from "./IStaffDirectorySearch";

import SD_SocialMediaLink from "./SD_SocialMediaLink";

export interface ISocialMediaLinksProps extends React.Props<SD_SocialMediaLinks> {
  socialMediaLinks: ISocialMediaLink[];
}

export default class SD_SocialMediaLinks extends React.Component<ISocialMediaLinksProps, {}> {

  public constructor(props: ISocialMediaLinksProps) {
    super(props);
  }

  public render() {

    return (
      <div>
        {this.props.socialMediaLinks.length > 0 &&
          <div className="DIR-media">
            <ul>
              {this.props.socialMediaLinks.map((smLink, i) => {
                return <SD_SocialMediaLink name={smLink.name} website={smLink.website} key={i}/>;
              })}
            </ul>
          </div>
        }
      </div>
    );
  }
}
