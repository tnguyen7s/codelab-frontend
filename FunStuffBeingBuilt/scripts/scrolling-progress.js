const progressBar = document.querySelector(".scrolling-progress-bar");

let fullHeight;
let scrollY;
function updateProgressBar()
{
    fullHeight = document.body.clientHeight;
    scrollY = window.scrollY;
    winHeight = window.innerHeight;

    progressBar.style.width = `${window.innerWidth*(scrollY/(fullHeight- winHeight))}px`;
}

window.addEventListener("scroll", updateProgressBar);