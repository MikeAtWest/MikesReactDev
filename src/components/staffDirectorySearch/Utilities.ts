export function formatName(firstName: string, lastName: string, sortOrder: string, onlyShowFirstInitial: boolean): string {

  const lastNamePosition = sortOrder.toLowerCase().lastIndexOf("lastname");
  const firstNamePosition = sortOrder.toLowerCase().lastIndexOf("firstname");

  let adjustedFirstName = firstName;
  if (onlyShowFirstInitial) {
    adjustedFirstName = adjustedFirstName[0] + ".";
  }

  let name: string = "";
  if (lastNamePosition <= firstNamePosition) {
    name = lastName + ", " + adjustedFirstName;
  } else {
    name = adjustedFirstName + " " + lastName;
  }

  return name;
};
