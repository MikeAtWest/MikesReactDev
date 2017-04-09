import * as React from "react";

export interface ISecondaryInfoProps extends React.Props<SD_SecondaryInfo> {
  room: string;
  subjects: string;
  grades: string;
  officeHours: string;
}

export default class SD_SecondaryInfo extends React.Component<ISecondaryInfoProps, {}> {

  public constructor(props: ISecondaryInfoProps) {
    super(props);
  }

  public render() {

    const showSecondaryInfo: boolean = this.props.room !== "" || this.props.subjects !== "" || this.props.grades !== "" || this.props.officeHours !== "";

    return (
      <div>
        {showSecondaryInfo &&
          <div className="DIR-secondaryInfo">
            <ul>
              {this.props.room !== "" &&
                <li><span>Room:</span> {this.props.room}</li>
              }
              {this.props.subjects !== "" &&
                <li><span>Subjects Taught:</span> {this.props.subjects}</li>
              }
              {this.props.grades !== "" &&
                <li><span>Grades Taught:</span> {this.props.grades}</li>
              }
              {this.props.officeHours !== "" &&
                <li><span>Office Hours:</span> {this.props.officeHours}</li>
              }
            </ul>
          </div>
        }</div>
    );
  }
}
