import * as React from "react";

export interface IPhotoProps extends React.Props<SD_Photo> {
  imageURL: string;
  firstName: string;
  lastName: string;
}

export default class SD_Photo extends React.Component<IPhotoProps, {}> {

  public constructor(props: IPhotoProps) {
    super(props);
  }

  public render() {

    let photoClass: string = "DIR-photo";
    if (this.props.imageURL === "") {
      photoClass += " DIR-noPhoto";
    }

    const backgroundImageStyle = { backgroundImage: "url(" + this.props.imageURL + ")" };

    let initials: string = "";
    initials += this.props.firstName[0];
    initials += this.props.lastName[0];

    return (
      <div className={photoClass} aria-hidden="true">
        <span style={backgroundImageStyle}></span>
        <em>{initials}</em>
      </div>
    );
  }
}
