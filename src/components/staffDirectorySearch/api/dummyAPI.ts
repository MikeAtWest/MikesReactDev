import { ISettings, IStaffBasic, IStaffExtended } from "../IStaffDirectorySearch";

import { Group } from "../classes/Group";
import { Settings } from "../classes/Settings";
import { SocialMediaLink } from "../classes/SocialMediaLink";
import { StaffBasic } from "../classes/StaffBasic";
import { StaffExtended } from "../classes/StaffExtended";

export function api_getSettings(portletInstanceId: number): ISettings {

  const settings = new Settings(portletInstanceId);

  settings.emailPrivacy = false;
  settings.useExternalEmailApp = true;
  //  settings.sortOrder = "LastName,FirstName";
  settings.sortOrder = "FirstName, LastName";
  settings.onlyShowFirstInitial = true;

  settings.groups.push(new Group(1, "Group One"));
  settings.groups.push(new Group(2, "Group Two"));
  settings.groups.push(new Group(3, "Group Three"));

  return settings;

}

export function api_getSearchResults(): IStaffBasic[] {

  const staff: IStaffBasic[] = [];

  const staff1 = new StaffBasic(1, "Albert", "Einstein");
  staff1.imageURL = "https://upload.wikimedia.org/wikipedia/en/8/86/Einstein_tongue.jpg";
  staff1.jobTitle = "Physics Teacher";
  staff1.groups = ["Teacher"];
  staff1.website = "https://en.wikipedia.org/wiki/Albert_Einstein";
  staff1.email = "aeinstein@bernpatentoffice.gov";
  staff1.phone = "123-456-7890 extn. 2345";

  const staff2 = new StaffBasic(2, "Ada", "Lovelace");
  staff2.imageURL = "https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwODQwOTQ2MTkw/ada-lovelace-20825279-1-402.jpg";
  staff2.jobTitle = "Computer Science Teacher";
  staff2.groups = ["Teacher", "Other"];
  staff2.website = "https://en.wikipedia.org/wiki/Ada_Lovelace";
  staff2.email = "ada@ockhampark.net";
  staff2.phone = "234-567-8901";

  const staff3 = {
    email: "mcurie@uniofparis.edu",
    firstName: "Marie",
    groups: ["Adminstrator", "Teacher"],
    imageURL: "", // https://www.biography.com/.image/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MTkzNzE5ODE5/marie-curie-9263538-1-402.jpg",
    jobTitle: "Chemistry Teacher",
    lastName: "Curie",
    phone: "345-678-9012 extn 123",
    socialMediaLinks: [],
    staffExtended: null,
    userID: 3,
    website: "https://en.wikipedia.org/wiki/Marie_Curie",
  };

  staff.push(staff1);
  staff.push(staff2);
  staff.push(staff3);

  return staff;

}

export function api_getSearchResultsExtended(): { [userID: number]: IStaffExtended } {

  const staffExtended1 = new StaffExtended(1);
  staffExtended1.blog = "http://alberteinsteinblog.org/";
  staffExtended1.room = "Albert's room";
  staffExtended1.subjects = "Physics";
  staffExtended1.grades = "Grade 10";
  staffExtended1.officeHours = "9am - 5pm Mon-Fri";
  staffExtended1.biography = "Albert Einstein (/ˈaɪnstaɪn/; German: [ˈalbɛɐ̯t ˈaɪnʃtaɪn]; 14 March 1879 – 18 April 1955) was a German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics (alongside quantum mechanics). Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass–energy equivalence formula E = mc2 (which has been dubbed 'the world's most famous equation'). He received the 1921 Nobel Prize in Physics 'for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect', a pivotal step in the evolution of quantum theory.";
  staffExtended1.personalMessage = "Imagination is more important than knowledge.";
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Facebook", "https://www.facebook.com/AlbertEinstein/"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Twitter", "https://twitter.com/einsteinquotes?lang=en"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("YouTube", "https://www.youtube.com/watch?v=HZ_W3EAfp6I"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("LinkedIn", "https://www.linkedin.com/company-beta/15037/?pathWildcard=15037"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Google+", "https://plus.google.com/communities/113385895179315329377"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Newsvine", "https://www.newsvine.com/"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Camyoo", "http://www.camyoo.com/sign-up.html"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Bebo", "https://bebo.com/"));
  staffExtended1.socialMediaLinks.push(new SocialMediaLink("Hubpages", "http://hubpages.com/"));

  const staffExtended2 = new StaffExtended(2);
  staffExtended2.blog = "http://blogs.bodleian.ox.ac.uk/adalovelace/";
  staffExtended2.socialMediaLinks.push(new SocialMediaLink("Facebook", "https://www.facebook.com/AdaLovelaceDay/"));
  staffExtended2.personalMessage = "As soon as I have got flying to perfection, I have got a scheme about a steam engine.";

  const details: { [userID: number]: IStaffExtended } = {
    1: staffExtended1,
    2: staffExtended2,
  };

  return details;

}
