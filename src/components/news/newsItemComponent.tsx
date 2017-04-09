import * as React from "react";

export default class NewsItem extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
          <div>{this.props.newsItem.title}: {this.props.newsItem.text} <button onClick={(e) => this.props.onDeleteItem(e, this)}>X</button></div>
    );
  }
}
