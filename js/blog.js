let blogs = localStorage.getItem("blogs");
let blogList = document.querySelector("#blog-list");
blogs = JSON.parse(blogs);

let list = blogs.map((value) => {
  return `
  <section class="blog-area-view">
  <section class="text-area">
  <h2 class="Title1">${value.title}</h2>
  <p class="para">${value.description}</p>
  <p class="author">-${value.author}</p>
</section>
<section class="img-place1">
  <img src="${value.url}" alt="">
</section>
</section>`;
});
blogList.innerHTML = list.join("");
console.log(blogs);
