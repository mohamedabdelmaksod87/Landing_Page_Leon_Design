/* When the user clicks on menu icon, toggle between hiding and showing the dropdown content */
function showMenu() {
  document.querySelector(".header ul").classList.toggle("show");
  document.querySelector(".header .links .menu-icon").classList.toggle("hide");
  document.querySelector(".header .links .close-icon").classList.toggle("show");
}

//Scroll to top
let span = document.querySelector(".up");

window.onscroll = () => {
  this.scrollY >= 800
    ? span.classList.add("view")
    : span.classList.remove("view");
};

span.onclick = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};
