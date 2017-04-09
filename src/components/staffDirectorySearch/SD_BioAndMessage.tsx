import * as React from "react";

export interface IBioAndMessageProps extends React.Props<SD_BioAndMessage> {
  biography: string;
  personalMessage: string;
}

export default class SD_BioAndMessage extends React.Component<IBioAndMessageProps, {}> {

  public constructor(props: IBioAndMessageProps) {
    super(props);
  }

  public render() {

    const showBioOrMessage: boolean = this.props.biography !== "" || this.props.personalMessage !== "";

    return (
      <div>
        {showBioOrMessage &&
          <div className="DIR-message">
            {this.props.biography !== "" &&
              <div className="DIR-biography">
                <div className="DIR-mTitle">Biography</div>
                <div className="DIR-mContent">
                  <p>{this.props.biography}</p>
                </div>
              </div>
            }
            {this.props.personalMessage !== "" &&
              <div className="DIR-personalMessage">
                <div className="DIR-mTitle">Personal Message</div>
                <div className="DIR-mContent">
                  <p>{this.props.personalMessage}</p>
                </div>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}
