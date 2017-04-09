import * as React from "react";

export interface ISocialMediaLinkProps extends React.Props<SD_SocialMediaLink> {
  name: string;
  website: string;
}

export default class SD_SocialMediaLink extends React.Component<ISocialMediaLinkProps, {}> {

  public render() {

    let link: any = null;

    switch (this.props.name.toLowerCase()) {
      case "facebook":
        link = <li><a className="DIR-mediaButton" href={this.props.website} target="_blank"><span className="DIR-facebook"><em className="fa fa-facebook" aria-hidden="true"><span className="DIR-mText">Facebook</span></em></span>Facebook</a></li>;
        break;
      case "twitter":
        link = <li><a className="DIR-mediaButton" href={this.props.website} target="_blank"><span className="DIR-twitter"><em className="fa fa-twitter" aria-hidden="true"><span className="DIR-mText">Twitter</span></em></span>Twitter</a></li>;
        break;
    case "youtube":
        link = <li><a className="DIR-mediaButton" href={this.props.website} target="_blank"><span className="DIR-youtube"><em className="fa fa-youtube-play" aria-hidden="true"><span className="DIR-mText">YouTube</span></em></span>YouTube</a></li>;
        break;
    case "linkedin":
        link = <li><a className="DIR-mediaButton" href={this.props.website} target="_blank"><span className="DIR-linkedin"><em className="fa fa-linkedin" aria-hidden="true"><span className="DIR-mText">LinkedIn</span></em></span>LinkedIn</a></li>;
        break;
    case "goolge+":
        link = <li><a className="DIR-mediaButton" href={this.props.website} target="_blank"><span className="DIR-googleplus"><em className="fa fa-google-plus" aria-hidden="true"><span className="DIR-mText">Google+</span></em></span>Google+</a></li>;
        break;
    default:
        link = <li><a className="DIR-mediaButton" href={this.props.website} target="_blank"><span className="DIR-twitter"><em className="fa fa-twitter" aria-hidden="true"><span className="DIR-mText">{this.props.name}</span></em></span>{this.props.name}</a></li>;
        break;
    }

    return (
      link
    );
  }
}
