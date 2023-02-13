let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".header__list-mobile");
let navMobBox = document.querySelector(".header__navigation-mobile");
let body = document.querySelector("body");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
  navMobBox.classList.toggle("active");

  if (!window.innerWidth <= 480) {
    body.classList.toggle("overflow-hidden");
  }
});

window.onresize = removeOverflow;

function removeOverflow() {
  if (window.innerWidth > 480) {
    body.classList.remove("overflow-hidden");
  } else if (menu.classList.contains("active")) {
    window.scrollTo(0, 0);
    body.classList.add("overflow-hidden");
  }
}

// footer-card
let [...cardList] = document.querySelectorAll(".footer__card");
cardList.forEach((item) => {
  item.childNodes[1].addEventListener("click", () => {
    item.classList.toggle("footer-card-active");
  });
});

// video
let [...videoBox] = document.querySelectorAll(".social-media__video-box");
videoBox.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    if (elem.childNodes[3].style.display == "block") {
      stopOtherVideo(index)
      elem.childNodes[3].style.display = "none";
      elem.childNodes[1].play();
    } else {
      elem.childNodes[3].style.display = "block";
      elem.childNodes[1].pause();
    }
  });
});

function stopOtherVideo(index) {
  videoBox.forEach((e, index) => {
    e.childNodes[3].style.display = "block";
    e.childNodes[1].pause();
})

} 
