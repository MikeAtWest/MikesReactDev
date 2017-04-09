// Class Interfaces:

export interface ISettings {
  portletInstanceID: number;
  emailPrivacy: boolean;
  useExternalEmailApp: boolean;
  sortOrder: string;
  onlyShowFirstInitial: boolean;
  groups: IGroup[];
}

export interface IStaffBasic {
  userID: number;
  firstName: string;
  lastName: string;
  imageURL: string;
  jobTitle: string;
  groups: string[];
  website: string;
  email: string;
  phone: string;
  // blog: string;
  // socialMediaLinks: ISocialMediaLink[];
  staffExtended: IStaffExtended;
}

export interface IStaffExtended {
  userID: number;
  blog: string;
  socialMediaLinks: ISocialMediaLink[];
  room: string;
  grades: string;
  subjects: string;
  officeHours: string;
  biography: string;
  personalMessage: string;
}

export interface ISocialMediaLink {
  name: string;
  website: string;
}

export interface IGroup {
  groupID: number;
  name: string;
}

// Enumerations:

export enum EmailStyle { small, medium };

// Constants:

export const BASE_PATH = "http://localhost:8088";
export const EMAIL_POPUP_URL = "/common/controls/General/Email/Default.aspx?action=staffDirectoryEmail&recipients=";
