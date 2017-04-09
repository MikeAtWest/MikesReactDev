import * as React from "react";

import { ISettings, IStaffBasic, IStaffExtended } from "./IStaffDirectorySearch";

import PaginatorComponent from "../common/paginator/paginatorComponent";
import SD_StaffBasic from "./SD_StaffBasic";

export interface ISearchResultsProps {
  portletInstanceId: number;
  settings: ISettings;
  staffMembersBasic: IStaffBasic[];
  staffMembersExtended: { [userID: number]: IStaffExtended };
}

export default class SD_SearchResults extends React.Component<ISearchResultsProps, {}> {

  public constructor(props: ISearchResultsProps) {
    super(props);
  }

  public render() {

    const that = this;

    function getStaffMemberExtended(userID: number): IStaffExtended {
      return that.props.staffMembersExtended[userID];
    }

    return (

      <div>

        <div className="PO-contentArea">
          <ul className="DIR-userList">
            {this.props.staffMembersBasic.map((staff, i) => {
              return <SD_StaffBasic settings={this.props.settings} staffBasic={staff} staffExtended={getStaffMemberExtended(staff.userID)} key={staff.userID}/>;
            })}
          </ul>
        </div>

        <PaginatorComponent portletInstanceId={this.props.portletInstanceId} />

      </div>
    );
  }
}
            // <li className="DIR-item">
            //   <div className="DIR-card">
            //     <div className="DIR-photo" aria-hidden="true">
            //       <span style={setBackgroundImage("https://randomuser.me/api/portraits/men/17.jpg")}></span>
            //       <em>HB</em>
            //     </div>
            //     <div className="DIR-cardInfo">
            //       <ul>
            //         <li className="DIR-name">Burton, Harold</li>
            //         <li className="DIR-title">Community Safety Officer</li>
            //         <li className="DIR-groups">
            //           <ul>
            //             <li>Administrators</li>
            //             <li>East Nguyen At Risk Youth Centre</li>
            //           </ul>
            //         </li>
            //         <li className="DIR-quickLinks">
            //           <div className="DIR-quickButtons">
            //             <ul>
            //               <li><a href="#"><em className="fa fa-globe" aria-hidden="true"></em><span className="offScreen">My Website</span></a></li>
            //               <li><a href="#"><em className="fa fa-envelope DIR-infoOption" aria-hidden="true"></em><span>otobin@district.com</span></a></li>
            //               <li><a href="#"><em className="fa fa-phone DIR-infoOption" aria-hidden="true"></em><span>372-293-8392 ex.2839</span></a></li>
            //             </ul>
            //           </div>
            //           <div className="DIR-more">
            //             <a className="DIR-openSlideOut" href="#">More...</a>
            //           </div>
            //         </li>
            //       </ul>
            //     </div>
            //   </div>
            //   <div className="DIR-slideOut">
            //     <div className="DIR-contactInfo">
            //       <ul>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-phone" aria-hidden="true"></em>372-293-8392 ex.2839</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-envelope" aria-hidden="true"></em>otobin@district.com</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-globe" aria-hidden="true"></em>My Website</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-comments" aria-hidden="true"></em>My Blog</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-media">
            //       <ul>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-facebook"><em className="fa fa-facebook" aria-hidden="true"><span className="DIR-mText">Facebook</span></em></span>Facebook</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-twitter"><em className="fa fa-twitter" aria-hidden="true"><span className="DIR-mText">Twitter</span></em></span>Twitter</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-youtube"><em className="fa fa-youtube-play" aria-hidden="true"><span className="DIR-mText">YouTube</span></em></span>YouTube</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-linkedin"><em className="fa fa-linkedin" aria-hidden="true"><span className="DIR-mText">LinkedIn</span></em></span>LinkedIn</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-googleplus"><em className="fa fa-google-plus" aria-hidden="true"><span className="DIR-mText">Google+</span></em></span>Google+</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-secondaryInfo">
            //       <ul>
            //         <li><span>Room:</span> classNameroom #45</li>
            //         <li><span>Subjects Taught:</span> Computer Science</li>
            //         <li><span>Grades Taught:</span> Grade 10</li>
            //         <li><span>Office Hours:</span> 9am - 5pm Mon-Fri</li>
            //       </ul>
            //     </div>
            //     <div className="DIR-message">
            //       <div className="DIR-biography">
            //         <div className="DIR-mTitle">Biography</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //       <div className="DIR-personalMessage">
            //         <div className="DIR-mTitle">Personal Message</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </li>
            // <li className="DIR-item">
            //   <div className="DIR-card">
            //     <div className="DIR-photo DIR-noPhoto" aria-hidden="true">
            //       <span></span>
            //       <em>WA</em>
            //     </div>
            //     <div className="DIR-cardInfo">
            //       <ul>
            //         <li className="DIR-name">Alvarado, Walter</li>
            //         <li className="DIR-title">Vice Principal A-R</li>
            //         <li className="DIR-groups">
            //           <ul>
            //             <li>Administrators</li>
            //             <li>East Nguyen At Risk Youth Centre</li>
            //           </ul>
            //         </li>
            //         <li className="DIR-quickLinks">
            //           <div className="DIR-quickButtons">
            //             <ul>
            //               <li><a href="#"><em className="fa fa-globe" aria-hidden="true"></em><span className="offScreen">My Website</span></a></li>
            //               <li><a href="#"><em className="fa fa-envelope DIR-infoOption" aria-hidden="true"></em><span>otobin@district.com</span></a></li>
            //               <li><a href="#"><em className="fa fa-phone DIR-infoOption" aria-hidden="true"></em><span>372-293-8392 ex.2839</span></a></li>
            //             </ul>
            //           </div>
            //           <div className="DIR-more">
            //             <a className="DIR-openSlideOut" href="#">More...</a>
            //           </div>
            //         </li>
            //       </ul>
            //     </div>
            //   </div>
            //   <div className="DIR-slideOut">
            //     <div className="DIR-contactInfo">
            //       <ul>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-phone" aria-hidden="true"></em>372-293-8392 ex.2839</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-envelope" aria-hidden="true"></em>otobin@district.com</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-globe" aria-hidden="true"></em>My Website</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-comments" aria-hidden="true"></em>My Blog</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-media">
            //       <ul>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-facebook"><em className="fa fa-facebook" aria-hidden="true"><span className="DIR-mText">Facebook</span></em></span>Facebook</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-twitter"><em className="fa fa-twitter" aria-hidden="true"><span className="DIR-mText">Twitter</span></em></span>Twitter</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-youtube"><em className="fa fa-youtube-play" aria-hidden="true"><span className="DIR-mText">YouTube</span></em></span>YouTube</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-linkedin"><em className="fa fa-linkedin" aria-hidden="true"><span className="DIR-mText">LinkedIn</span></em></span>LinkedIn</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-googleplus"><em className="fa fa-google-plus" aria-hidden="true"><span className="DIR-mText">Google+</span></em></span>Google+</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-secondaryInfo">
            //       <ul>
            //         <li><span>Room:</span> classNameroom #45</li>
            //         <li><span>Subjects Taught:</span> Computer Science</li>
            //         <li><span>Grades Taught:</span> Grade 10</li>
            //         <li><span>Office Hours:</span> 9am - 5pm Mon-Fri</li>
            //       </ul>
            //     </div>
            //     <div className="DIR-message">
            //       <div className="DIR-biography">
            //         <div className="DIR-mTitle">Biography</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //       <div className="DIR-personalMessage">
            //         <div className="DIR-mTitle">Personal Message</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </li>
            // <li className="DIR-item">
            //   <div className="DIR-card">
            //     <div className="DIR-photo" aria-hidden="true">
            //       <span style={setBackgroundImage("https://randomuser.me/api/portraits/men/5.jpg")}></span>
            //       <em>AL</em>
            //     </div>
            //     <div className="DIR-cardInfo">
            //       <ul>
            //         <li className="DIR-name">Lucas, Andrew</li>
            //         <li className="DIR-title">Music Teacher</li>
            //         <li className="DIR-groups">
            //           <ul>
            //             <li>Teachers</li>
            //             <li>East Nguyen At Risk Youth Centre</li>
            //             <li>Music</li>
            //           </ul>
            //         </li>
            //         <li className="DIR-quickLinks">
            //           <div className="DIR-quickButtons">
            //             <ul>
            //               <li><a href="#"><em className="fa fa-globe" aria-hidden="true"></em><span className="offScreen">My Website</span></a></li>
            //               <li><a href="#"><em className="fa fa-envelope DIR-infoOption" aria-hidden="true"></em><span>otobin@district.com</span></a></li>
            //               <li><a href="#"><em className="fa fa-phone DIR-infoOption" aria-hidden="true"></em><span>372-293-8392 ex.2839</span></a></li>
            //             </ul>
            //           </div>
            //           <div className="DIR-more">
            //             <a className="DIR-openSlideOut" href="#">More...</a>
            //           </div>
            //         </li>
            //       </ul>
            //     </div>
            //   </div>
            //   <div className="DIR-slideOut">
            //     <div className="DIR-contactInfo">
            //       <ul>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-envelope" aria-hidden="true"></em>otobin@district.com</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-globe" aria-hidden="true"></em>My Website</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-media">
            //       <ul>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-facebook"><em className="fa fa-facebook" aria-hidden="true"><span className="DIR-mText">Facebook</span></em></span>Facebook</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-twitter"><em className="fa fa-twitter" aria-hidden="true"><span className="DIR-mText">Twitter</span></em></span>Twitter</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-youtube"><em className="fa fa-youtube-play" aria-hidden="true"><span className="DIR-mText">YouTube</span></em></span>YouTube</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-linkedin"><em className="fa fa-linkedin" aria-hidden="true"><span className="DIR-mText">LinkedIn</span></em></span>LinkedIn</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-googleplus"><em className="fa fa-google-plus" aria-hidden="true"><span className="DIR-mText">Google+</span></em></span>Google+</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-secondaryInfo">
            //       <ul>
            //         <li><span>Room:</span> classNameroom #45</li>
            //         <li><span>Grades Taught:</span> Grade 10</li>
            //       </ul>
            //     </div>
            //     <div className="DIR-message">
            //       <div className="DIR-biography">
            //         <div className="DIR-mTitle">Biography</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //       <div className="DIR-personalMessage">
            //         <div className="DIR-mTitle">Personal Message</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </li>
            // <li className="DIR-item">
            //   <div className="DIR-card">
            //     <div className="DIR-photo" aria-hidden="true">
            //       <span style={setBackgroundImage("https://randomuser.me/api/portraits/women/19.jpg")}></span>
            //       <em>JV</em>
            //     </div>
            //     <div className="DIR-cardInfo">
            //       <ul>
            //         <li className="DIR-name">Vasquez, Julie</li>
            //         <li className="DIR-title">Chemistry Teacher</li>
            //         <li className="DIR-groups">
            //           <ul>
            //             <li>Teachers</li>
            //             <li>East Nguyen At Risk Youth Centre</li>
            //             <li>Chemistry</li>
            //           </ul>
            //         </li>
            //         <li className="DIR-quickLinks">
            //           <div className="DIR-quickButtons">
            //             <ul>
            //               <li><a href="#"><em className="fa fa-globe" aria-hidden="true"></em><span className="offScreen">My Website</span></a></li>
            //               <li><a href="#"><em className="fa fa-envelope DIR-infoOption" aria-hidden="true"></em><span>otobin@district.com</span></a></li>
            //               <li><a href="#"><em className="fa fa-phone DIR-infoOption" aria-hidden="true"></em><span>372-293-8392 ex.2839</span></a></li>
            //             </ul>
            //           </div>
            //           <div className="DIR-more">
            //             <a className="DIR-openSlideOut" href="#">More...</a>
            //           </div>
            //         </li>
            //       </ul>
            //     </div>
            //   </div>
            //   <div className="DIR-slideOut">
            //     <div className="DIR-contactInfo">
            //       <ul>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-phone" aria-hidden="true"></em>372-293-8392 ex.2839</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-comments" aria-hidden="true"></em>My Blog</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-media">
            //       <ul>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-facebook"><em className="fa fa-facebook" aria-hidden="true"><span className="DIR-mText">Facebook</span></em></span>Facebook</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-twitter"><em className="fa fa-twitter" aria-hidden="true"><span className="DIR-mText">Twitter</span></em></span>Twitter</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-youtube"><em className="fa fa-youtube-play" aria-hidden="true"><span className="DIR-mText">YouTube</span></em></span>YouTube</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-linkedin"><em className="fa fa-linkedin" aria-hidden="true"><span className="DIR-mText">LinkedIn</span></em></span>LinkedIn</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-googleplus"><em className="fa fa-google-plus" aria-hidden="true"><span className="DIR-mText">Google+</span></em></span>Google+</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-secondaryInfo">
            //       <ul>
            //         <li><span>Room:</span> classNameroom #45</li>
            //         <li><span>Subjects Taught:</span> Computer Science</li>
            //         <li><span>Grades Taught:</span> Grade 10</li>
            //         <li><span>Office Hours:</span> 9am - 5pm Mon-Fri</li>
            //       </ul>
            //     </div>
            //     <div className="DIR-message">
            //       <div className="DIR-biography">
            //         <div className="DIR-mTitle">Biography</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //       <div className="DIR-personalMessage">
            //         <div className="DIR-mTitle">Personal Message</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </li>
            // <li className="DIR-item">
            //   <div className="DIR-card">
            //     <div className="DIR-photo" aria-hidden="true">
            //       <span style={setBackgroundImage("https://randomuser.me/api/portraits/women/2.jpg")} ></span>
            //       <em>DB</em>
            //     </div>
            //     <div className="DIR-cardInfo">
            //       <ul>
            //         <li className="DIR-name">Bennett, Diana</li>
            //         <li className="DIR-title">Community Support Leader</li>
            //         <li className="DIR-groups">
            //           <ul>
            //             <li>Teachers</li>
            //             <li>East Nguyen At Risk Youth Centre</li>
            //             <li>Chemistry</li>
            //           </ul>
            //         </li>
            //         <li className="DIR-quickLinks">
            //           <div className="DIR-quickButtons">
            //             <ul>
            //               <li><a href="#"><em className="fa fa-globe" aria-hidden="true"></em><span className="offScreen">My Website</span></a></li>
            //               <li><a href="#"><em className="fa fa-envelope DIR-infoOption" aria-hidden="true"></em><span>otobin@district.com</span></a></li>
            //               <li><a href="#"><em className="fa fa-phone DIR-infoOption" aria-hidden="true"></em><span>372-293-8392 ex.2839</span></a></li>
            //             </ul>
            //           </div>
            //           <div className="DIR-more">
            //             <a className="DIR-openSlideOut" href="#">More...</a>
            //           </div>
            //         </li>
            //       </ul>
            //     </div>
            //   </div>
            //   <div className="DIR-slideOut">
            //     <div className="DIR-contactInfo">
            //       <ul>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-phone" aria-hidden="true"></em>372-293-8392 ex.2839</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-envelope" aria-hidden="true"></em>otobin@district.com</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-globe" aria-hidden="true"></em>My Website</a></li>
            //         <li><a className="DIR-contactButton" href="#"><em className="fa fa-comments" aria-hidden="true"></em>My Blog</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-media">
            //       <ul>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-facebook"><em className="fa fa-facebook" aria-hidden="true"><span className="DIR-mText">Facebook</span></em></span>Facebook</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-twitter"><em className="fa fa-twitter" aria-hidden="true"><span className="DIR-mText">Twitter</span></em></span>Twitter</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-youtube"><em className="fa fa-youtube-play" aria-hidden="true"><span className="DIR-mText">YouTube</span></em></span>YouTube</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-linkedin"><em className="fa fa-linkedin" aria-hidden="true"><span className="DIR-mText">LinkedIn</span></em></span>LinkedIn</a></li>
            //         <li><a className="DIR-mediaButton" href="#"><span className="DIR-googleplus"><em className="fa fa-google-plus" aria-hidden="true"><span className="DIR-mText">Google+</span></em></span>Google+</a></li>
            //       </ul>
            //     </div>
            //     <div className="DIR-secondaryInfo">
            //       <ul>
            //         <li><span>Room:</span> classNameroom #45</li>
            //         <li><span>Subjects Taught:</span> Computer Science</li>
            //         <li><span>Grades Taught:</span> Grade 10</li>
            //         <li><span>Office Hours:</span> 9am - 5pm Mon-Fri</li>
            //       </ul>
            //     </div>
            //     <div className="DIR-message">
            //       <div className="DIR-biography">
            //         <div className="DIR-mTitle">Biography</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //       <div className="DIR-personalMessage">
            //         <div className="DIR-mTitle">Personal Message</div>
            //         <div className="DIR-mContent">
            //           <p>Born in 1971, politician Olivia Tobin started out her political career as the mayor of Metros, California. Vestibulum commodo fermentum ex. Cras cursus massa ut posuere sagittis. Nam molestie suscipit diam, vitae pharetra purus ultrices ac. Vivamus convallis vel turpis feugiat lacinia. Nulla rutrum bibendum consequat. Proin eget fermentum mauris, et pretium risus. Suspendisse vehicula iaculis purus, et convallis ipsum tempor vitae. Vestibulum sodales ullamcorper leo, lobortis consectetur ipsum faucibus sed.</p>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </li>
