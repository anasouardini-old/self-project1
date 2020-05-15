let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".menu-icon");
let menuList = document.querySelector(".menu-list");
let header = document.querySelector("header");

menuIcon.addEventListener("click", (_) => {
  document.body.classList.toggle("menu-opened");
});

menu.addEventListener("click", (e) => {
  const menuItemClicked = e.target.closest("li");
  
  if (!menuItemClicked) return;

  document.body.classList.remove("menu-opened");

});


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  
  
  if (currentScroll < 600) {
    console.log(currentScroll);
    header.classList.remove("header-background");
    return;
  }

  header.classList.add("header-background");


});