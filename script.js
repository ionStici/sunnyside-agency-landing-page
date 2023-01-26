const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-icon");
const header = document.querySelector(".header");
const ser = document.querySelector(".ser");

menuBtn.addEventListener("click", function () {
    if (nav.classList.contains("closed")) {
        nav.style.pointerEvents = "revert";
        nav.style.visibility = "visible";
        nav.style.opacity = "1";
        menuBtn.style.opacity = "0.5";
        nav.classList.remove("closed");
    } else {
        nav.style.pointerEvents = "none";
        nav.style.visibility = "hidden";
        nav.style.opacity = "0";
        menuBtn.style.opacity = "1";
        nav.classList.add("closed");
    }
});

const coords = ser.getBoundingClientRect();
const coordsTop = coords.top;

window.addEventListener("scroll", function (e) {
    if (window.scrollY > coordsTop) {
        header.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    } else if (window.scrollY < coordsTop) {
        header.style.backgroundColor = "transparent";
    }
});

console.log(window.innerWidth);
