let blogList = document.querySelector(".blogList");
let login = localStorage.getItem("login");
let blog = localStorage.getItem("blogs");
let brand = document.querySelector(".brand");
let writeBtn = document.querySelector(".write-btn");

// console.log(writeBtn)
writeBtn.addEventListener("click", () => {
  Swal.fire("Login to write!");
  window.location.replace("/loginForm.html");
});

brand.addEventListener("click", () => {
  window.location.assign("/index.html");
});
function printData() {
  let blogs = localStorage.getItem("blogs");
  let blogList = document.querySelector(".blogList");

  blogs = JSON.parse(blogs);

  let list = blogs.map((value) => {
    return `<section class="blog-area-view">
        <section class="text-area">
        <h2 class="Title1">${value.title}</h2>
        <p class="para">${value.description}</p>
        <div class="button-container"><button class='delete' data-id="${value.id}">Delete</button></div>
        </section>
        <section class="img-place1">
        <img src="${value.url}" alt="">
        </section>
        </section>`;
  });
  blogList.innerHTML = list.join("");
  removeblog();
}
printData();

function removeblog() {
  let removeBlogList = document.querySelectorAll(".delete");
  removeBlogList.forEach((button) => {
    button.addEventListener("click", () => {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: true,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your blog has been deleted.",
              icon: "success",
            });
            let id = button.dataset.id;
            // console.log(id);
            let blogs = JSON.parse(localStorage.getItem("blogs"));
            blogs = blogs.filter((value) => {
              return value.id != id;
            });
            localStorage.setItem("blogs", JSON.stringify(blogs));
            printData();
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your blog is safe :)",
              icon: "error",
            });
          }
        });
    });
  });
}
