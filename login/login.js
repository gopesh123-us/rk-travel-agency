let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let email = formData.get("email");
  let password = formData.get("password");
  //validation
  //get data
  validation(email, password);
});

let validation = async (email, password) => {
  let response = await fetch("http://localhost:3000/users");
  let userData = await response.json();
  console.log(response);
  let singlerUser = userData.find((value) => value.email == email && value.password == password);
  if (singlerUser) {
    alert("login success");
    location.href = "../homepage/index.html";
  } else {
    alert("Invalid Credentials");
    location.href = "../registration/register.html";
  }
  console.log(singlerUser);
};
