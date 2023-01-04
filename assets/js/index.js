const navMobile = document.querySelector(".navigation_mobile");
const navList = document.querySelector(".navigation_list");
const darkFilter = document.querySelector(".darkFilter");

navMobile.addEventListener("click", () => {
  navList.classList.toggle("open");
  navMobile.classList.toggle("toggle");
  darkFilter.classList.toggle("toggle");
});
