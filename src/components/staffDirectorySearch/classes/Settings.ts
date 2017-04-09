import { IGroup, ISettings } from "../IStaffDirectorySearch";

export class Settings implements ISettings {
  public portletInstanceID: number;
  public emailPrivacy: boolean = false;
  public useExternalEmailApp: boolean = false;
  public sortOrder: string = "LastName, FirstName";
  public onlyShowFirstInitial: boolean = false;
  public groups: IGroup[] = [];

  constructor(portletInstanceId: number) {
    this.portletInstanceID = portletInstanceId;
  }
}
