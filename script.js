const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-icon");

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
