// import * as $ from "jquery";
// import * as toastr from "toastr";
// import { deleteUser, getUsers } from "./api/userApi";

// import "../node_modules/toastr/build/toastr.css";
// import "./index.css";

// // Populate table of users via API call.
// getUsers().then((result) => {
//   let usersBody = "";

//   result.forEach((user) => {
//     usersBody += `<tr>
//       <td>
//         <a href="#" data-id="${user.id}" data-name="${user.firstName + " " + user.lastName} " class="deleteUser">Delete</a>
//       </td>
//       <td>${user.id}</td>
//       <td>${user.firstName}</td>
//       <td>${user.lastName}</td>
//       <td>${user.email}</td>
//       </tr>`;
//   });

//   $("#users").html(usersBody);

//   const deleteLinks = $(".deleteUser");
//   deleteLinks.on("click", deleteClicked);

//   function deleteClicked(event) {
//     const element = event.target;
//     event.preventDefault();
//     deleteUser(element.attributes["data-id"].value);
//     const row = element.parentNode.parentNode;
//     row.parentNode.removeChild(row);
//     const name = (element.attributes["data-name"].value);
//     toastr.info(name + " has been deleted.");
//   }

// });
