let hamburger = document.getElementById("hamburger");
let nav = document.getElementById("myNav")
let entirety = document.getElementById("entirety")
function hamburgerMenu() {
    console.log("clicked")
}

hamburger.addEventListener('click', hamburgerMenu)

function openNav() {
    nav.style.width = "30%";
    entirety.style.filter = "blur(2px)";
}

function closeNav() {
    nav.style.width = "0%";
    entirety.style.filter = "none";
}