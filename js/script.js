// let saveBtn = document.querySelector("#save");
let name1 = document.querySelector("#name");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let pass = document.querySelector("#pass");
let cPass = document.querySelector("#cPass");
let loginBtn = document.querySelector("#loginBtn");
let userNameBtn = document.querySelector("#userName");
let passwordBtn = document.querySelector("#password");

let brand = document.querySelector(".brand");

brand.addEventListener("click", () => {
  window.location.assign("/index.html");
});

loginBtn.addEventListener("click", () => {
  let username = userNameBtn.value;
  let password = passwordBtn.value;

  let userList = localStorage.getItem("users");

  userList = userList === null ? [] : JSON.parse(userList);
  console.log(userList);
  let isUserExist = userList.findIndex((value) => {
    console.log(value.email + value.pass);
    return value.email === username && value.pass === password;
  });
  console.log(isUserExist);
  if (isUserExist === -1) {
    Toastify({
      text: "Login Error!",
      duration: 3000,
    }).showToast();
    Toastify({
      text: "Please try again",
      duration: 3000,
    }).showToast();
    userNameBtn.value = passwordBtn.value = "";
  } else {
    Swal.fire({
      icon: "success",
      title: "Welcome",
      text: "Login Successful!",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ok",
    });
    localStorage.setItem("login", isUserExist);
    userNameBtn.value = passwordBtn.value = "";
    window.location.replace("/write-a-blog.html");
  }
});
// console.log(name1)
// console.log(email)
// console.log(mobile)
// console.log(pass)
// console.log(cPass)
let data = [];

function saveButton() {
  let name = name1.value;
  let Email = email.value;
  let mob = mobile.value;
  let paasw = pass.value;
  let cPassw = cPass.value;
  if (cPassw !== paasw) {
    Swal.fire({
      title: "Error!",
      text: "Passwords do not match!",
      icon: "error",
    });
    return false;
  }
  let data1 = [];
  data1 = {
    name,
    email: Email,
    mob,
    pass: paasw,
  };
  let existingUsers = localStorage.getItem("users");
  existingUsers = existingUsers === null ? [] : JSON.parse(existingUsers);
  existingUsers.push(data1);
  console.log(existingUsers);
  localStorage.setItem("users", JSON.stringify(existingUsers));
  // if (){
  //     window.location.replace("/login.html")
  // }
  name1.value = email.value = mobile.value = pass.value = cPass.value = "";
  element = document.querySelector(".pop-reg");
  element.style.visibility = "hidden";
  Swal.fire({
    title: "Registration success!",
    text: "You have been registered! Now login to start using the services",
    icon: "success",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Ok",
  });
}

function showElement() {
  element = document.querySelector(".pop-reg");
  element.style.visibility = "visible";
}
function clickCancel() {
  element = document.querySelector(".pop-reg");
  element.style.visibility = "hidden";
}
function writeBtn() {
  window.location.replace("/write-a-blog.html");
}

let fname = document.querySelector(".fname")
let lname = document.querySelector(".lname")
let Email = document.querySelector(".email")
let query = document.querySelector(".query")
let submitBtn = document.querySelector(".submitBtn")
submitBtn.addEventListener('click',()=>{
  let fname = fname.value
  let lname = lname.value
  let email = Email.value
  let query = query.value
  let data = {
    fname,
    lname,
    email,
    query
  }
  let abc = localStorage.getItem('queries')
  abc = JSON.parse(abc)
  abc = data.map((value,index)=>{
    return value
  })
  localStorage.setItem('queries',JSON.stringify(abc))
})