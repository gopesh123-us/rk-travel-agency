let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const details = {
    id: formData.get("id"),
    name: formData.get("name"),
    contact: formData.get("contact"),
    email: formData.get("email"),
    password: formData.get("password"),
    address: formData.get("address"),
    gender: formData.get("gender"),
    dob: formData.get("dob"),
  };
  console.log(details);
  addUsers(details);
  //go to login page
  window.location.href = "../login/login.html";
});

let addUsers = async (data) => {
  await fetch(`http://localhost:3000/users`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
