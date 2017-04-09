import { ISocialMediaLink } from "../IStaffDirectorySearch";

export class SocialMediaLink implements ISocialMediaLink {
  public name: string = "";
  public website: string = "";

  constructor(name: string, website: string) {
    this.name = name;
    this.website = website;
  }
}
