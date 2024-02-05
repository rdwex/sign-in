var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var rePasswordInput = document.getElementById("repassword");
var phoneInput = document.getElementById("phone");
var btn = document.getElementById("btn");
var loading = document.getElementById("load");
var table = document.getElementById("tables");

btn.addEventListener("click", function () {
  var user = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    rePassword: rePasswordInput.value,
    phone: phoneInput.value,
  };
  Register(user);
});

async function Register(user) {
  var data = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  var response = await data.json();
  console.log(response);
  if (response.message == "success") {
    getUserFromBackend();
  }
}

function display(users) {
  var cartona = ``;
  for (var i = 0; i < users.length; i++) {
    cartona += `
        <tr>
          <td>${i + 1}</td>
          <td>${users[i].name}</td>
          <td>${users[i].email}</td>
        </tr>`;
  }
  document.getElementById("demo").innerHTML = cartona;
}

async function getUserFromBackend() {
  table.style.display = "none";
  var data = await fetch("https://ecommerce.routemisr.com/api/v1/users");
  var response = await data.json();
  console.log(response.users);
  display(response.users);
  clear();
  loading.style.display = "none";
  table.style.display = "table";
}
getUserFromBackend();

function clear() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  rePasswordInput.value = "";
  phoneInput.value = "";
}
