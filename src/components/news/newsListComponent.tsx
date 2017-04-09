import * as React from "react";
import NewsItem from "./newsItemComponent";

export default class NewsList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="newsReact">
        <h1>News from React (Portlet Instance id: {this.props.portletInstanceId})</h1>
        <div>
          <label htmlFor="newItemTitle">Title:</label> <input type="text" name="newItemTitle" value={this.props.newItemTitle} onChange={(e) => this.props.onChange(e)} />&nbsp;
          <label htmlFor="newItemText">Text:</label> <input type="text" name="newItemText" value={this.props.newItemText} onChange={(e) => this.props.onChange(e)} /> &nbsp;
          <button name="btnAddNews" onClick={(e) => this.props.onAddItem(e)}>Add News</button>
        </div>
        <div>
          {this.props.newsItems.map((newsItem, i) => {
            return <NewsItem newsItem={newsItem} key={i} onDeleteItem={this.props.onDeleteItem}/>;
          })}
        </div>
      </div>
    );
  }
}
