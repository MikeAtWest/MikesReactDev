import { IGroup } from "../IStaffDirectorySearch";

export class Group implements IGroup {
  public groupID: number = 0;
  public name: string = "";

  constructor(groupID: number, name: string) {
    this.groupID = groupID;
    this.name = name;
  }

}
