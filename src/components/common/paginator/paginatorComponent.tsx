import * as React from "react";
import "./styles/paginator.css";

import { IPaginatorProps } from "./IPaginator";

export default class PaginatorComponent extends React.Component<IPaginatorProps, {}> {

  public render() {

    return (

      <div className="PO-paging">
        <ul className="PO-pageButton">
          <li><a href="#"><em className="fa fa-arrow-left"></em></a></li>
          <li><a href="#">...</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#" className="active">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">...</a></li>
          <li><a href="#"><em className="fa fa-arrow-right"></em></a></li>
        </ul>
        <div className="PO-pageCount">1-10 of 55</div>
      </div>

    );
  }
}
