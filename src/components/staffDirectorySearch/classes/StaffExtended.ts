import { ISocialMediaLink, IStaffExtended } from "../IStaffDirectorySearch";

export class StaffExtended implements IStaffExtended {
  public userID = 0;
  public blog: string = "";
  public room: string = "";
  public grades: string = "";
  public subjects: string = "";
  public officeHours: string = "";
  public biography: string = "";
  public personalMessage: string = "";
  public socialMediaLinks: ISocialMediaLink[] = [];

  constructor(userID: number) {
    this.userID = userID;
   }
}
