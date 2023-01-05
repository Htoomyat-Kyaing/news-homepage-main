const navMobile = document.querySelector(".navigation_mobile");
const navList = document.querySelector(".navigation_list");
const darkFilter = document.querySelector(".darkFilter");
let canScroll = true;

navMobile.addEventListener("click", () => {
  navList.classList.toggle("open");
  navMobile.classList.toggle("toggle");
  darkFilter.classList.toggle("toggle");
  toggleScroll();
});

function toggleScroll() {
  canScroll ? disableScroll() : enableScroll();
}

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
  canScroll = false;
}

function enableScroll() {
  window.onscroll = function () {};
  canScroll = true;
}
