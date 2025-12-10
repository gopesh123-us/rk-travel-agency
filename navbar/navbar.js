//grab container
let containerData = document.querySelector(".container");

//add nav element to container data
let navbar = document.createElement("nav");

navbar.innerHTML = `
  <section id="logo" class="col-3 logo"><img src="../assets/images/tours-logo.svg" class="logo-img"/></section>
  <section id="navigation" class="col-5 navigation order-2"></section>
  <section id="profile" class="col-4 profile order-3"></section>   
`;
navbar.classList = "row align-items-center justify-content-between navbar";
containerData.before(navbar);

let logoBlock = document.querySelector(".logo");
let navigationBlock = document.querySelector(".navigation");
let profileBlock = document.querySelector(".profile");

let profileData = [
  { label: "BH", path: "#" },
  { label: "Notification", path: "#" },
  { label: "Signup", path: "../registration/register.html" },
  { label: "Login", path: "../login/login.html" },
  { label: "Admin", path: "../admin/addPlaces.html" },
];

let navigationData = [
  { label: "Home", path: "../homepage/index.html" },
  { label: "About", path: "../aboutus/about.html" },
  { label: "Contact", path: "../contactus/contact.html" },
  { label: "Booking", path: "../booking/booking.html" },
];

let createNavbar = (data, appendTo) => {
  let ul = document.createElement("ul");
  data.map((value) => {
    let li = document.createElement("li");
    let button = document.createElement("button");
    li.className = "col";
    button.addEventListener("click", () => {
      location.href = value.path;
    });
    button.innerHTML = value.label;

    li.append(button);
    ul.append(li);
  });
  ul.classList = "row";
  appendTo.append(ul);
};

createNavbar(navigationData, navigationBlock);
createNavbar(profileData, profileBlock);
