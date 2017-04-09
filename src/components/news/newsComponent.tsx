import * as React from "react";
import News from "./news";
import NewsList from "./newsListComponent";

import "./newsComponent.css";

// interface IProps extends React.Props<NewsComponent> {
//   portletInstanceId: number;
// }

export default class NewsComponent extends React.Component<any, any> {

  public state: any = {};

  constructor(props: any) {
    super(props);

    const newsItems = new Array<News>();

    newsItems.push(new News("Title One", "This is the text for item #1."));
    newsItems.push(new News("Title Two", "This is the text for item #2."));
    newsItems.push(new News("Title Three", "This is the text for item #3."));
    newsItems.push(new News("Title Four", "This is the text for item #4."));

    this.state = {};
    this.state.newsItems = newsItems;
    this.state.newItemTitle = "Title";
    this.state.newItemText = "Text";

    this.setNewItemState = this.setNewItemState.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  public setNewItemState(event: React.KeyboardEvent<HTMLInputElement>): void {
    const field = event.currentTarget.name;
    const value = event.currentTarget.value;
    this.state[field] = value;
    return this.setState({ newsItems: this.state.newsItems, newItemTitle: this.state.newItemTitle, newItemText: this.state.newItemText });
  }

  public addNewItem(event: React.KeyboardEvent<HTMLInputElement>): void {
    event.preventDefault();
    const newNewsItem = new News(this.state.newItemTitle, this.state.newItemText);
    this.state.newsItems.push(newNewsItem);
    return this.setState({ newsItems: this.state.newsItems, newItemTitle: this.state.newItemTitle, newItemText: this.state.newItemText });
  }

  public deleteItem(event: React.KeyboardEvent<HTMLInputElement>, item: any): void {
    event.preventDefault();
    // This is just a hack to pop off the last item...
    this.state.newsItems.pop();
    return this.setState({ newsItems: this.state.newsItems, newItemTitle: this.state.newItemTitle, newItemText: this.state.newItemText });
 }

  public render() {
    return (
      <NewsList
        portletInstanceId={this.props.portletInstanceId}
        newsItems={this.state.newsItems}
        newItemTitle={this.state.newItemTitle}
        newItemText={this.state.newItemText}
        onChange={this.setNewItemState}
        onAddItem={this.addNewItem}
        onDeleteItem={this.deleteItem}
      />
    );
  }
}
