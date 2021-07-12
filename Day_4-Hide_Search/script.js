const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  //   The focus method will make the input field active, which means we can write rigth away after clicking the search icon
  input.focus();
});
