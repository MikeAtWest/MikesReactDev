import { IStaffBasic, IStaffExtended } from "../IStaffDirectorySearch";

export class StaffBasic implements IStaffBasic {
  public userID = 0;
  public firstName: string = "";
  public lastName: string = "";
  public imageURL: string = "";
  public jobTitle: string = "";
  public groups: string[] = [];
  public website: string = "";
  public email: string = "";
  public phone: string = "";
  public staffExtended: IStaffExtended = null;

  constructor(userID: number, firstName: string, lastName: string) {
    this.userID = userID;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
