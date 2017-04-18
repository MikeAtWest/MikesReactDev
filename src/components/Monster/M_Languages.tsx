import * as React from "react";

import { ILanguages, Languages } from "./classes/Languages";

export interface ILanguagesProps extends React.Props<M_Languages> {
  languages: ILanguages;
}

export default class M_Languages extends React.Component<ILanguagesProps, {}> {

  public constructor(props: ILanguagesProps) {
    super(props);
  }

  public render() {

    const finalLangs = this.props.languages.languages;

    if (this.props.languages.isMute) {
      finalLangs[0] = "Understands " + finalLangs[0];
      finalLangs[finalLangs.length - 1] = finalLangs[finalLangs.length - 1] + " but cannot speak";
    }

    if (this.props.languages.hasTelepathy) {
      finalLangs.push("telepathy " + this.props.languages.telepathyRange + " ft.");
    }

    return (
      <div>
        {this.props.languages.languages.length > 0 ? (
          <div className="line">
            <span>Languages</span>&nbsp;{finalLangs.join(", ")}
          </div>
        ) : (
            <div className="line">
              <span>Languages</span>&nbsp;-
        </div>
          )}
      </div>
    );
  }
}
