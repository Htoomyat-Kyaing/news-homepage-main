const navMobile = document.querySelector(".navigation_mobile");
const navList = document.querySelector(".navigation_list");

navMobile.addEventListener("click", () => {
  navList.classList.toggle("open");
  navMobile.classList.toggle("toggle");
});
