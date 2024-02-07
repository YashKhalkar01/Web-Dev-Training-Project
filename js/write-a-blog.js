let brand = document.querySelector(".brand");

brand.addEventListener("click", () => {
  window.location.assign("/index.html");
});

let login = localStorage.getItem("login");
let userDetails = null;
if (login === null) {
  window.location.replace("/loginForm.html");
} else {
  userDetails = localStorage.getItem("users");
  userDetails = JSON.parse(userDetails);
  userDetails = userDetails[login];
  document.querySelector("#welcome-text").innerHTML = `Welcome, <b>${
    userDetails.name.split(" ")[0]
  }</b>`;
}

console.log(userDetails);
let logoutBtn = document.querySelector("#logout");
let title = document.querySelector("#title");
let description = document.querySelector("#description");
let saveBlogBtn = document.querySelector(".btn-save");

let welcomeText = document.querySelector("#welcomeText");

let data = localStorage.getItem("login");

let urlLink = document.querySelector("#url");
let imgPreview = document.querySelector(".img-place");
urlLink.addEventListener("blur", () => {
  let urlStr = urlLink.value;
  imgPreview.innerHTML = `<img src="${urlStr}" alt=""></img>`;
});

let titleBlog = document.querySelector("#titleBlog");
let descriptionBlog = document.querySelector("#descriptionBlog");

saveBlogBtn.addEventListener("click", () => {
  let newBlog = {
    id: Date.now(),
    title: titleBlog.value,
    description: descriptionBlog.value,
    url: urlLink.value,
    userId: login,
    author: userDetails.name,
  };
  let blogs = localStorage.getItem("blogs");
  blogs = blogs === null ? [] : JSON.parse(blogs);

  blogs.unshift(newBlog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  Swal.fire({
    title: "Success!",
    text: "Your blog is saved successfully!",
    icon: "success",
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Ok",
  });
});

// logoutBtn.addEventListener("click", () => {
//   let isLogout = confirm("Are you sure to logout?");
//   if (isLogout === true) {
//     localStorage.removeItem('login')
//     window.location.replace("/index.html");
//   }
// });
logoutBtn.addEventListener("click", () => {
  Swal.fire({
    title: "Are you sure to logout?",
    text: "You will have to login again to write!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Logged Out!",
        text: "You have been logged out.",
        icon: "success",
      });
      localStorage.removeItem("login");
      window.location.replace("/index.html");
    }
  });
});
