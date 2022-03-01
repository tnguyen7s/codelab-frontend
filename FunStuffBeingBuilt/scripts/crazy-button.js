//****************HTML SELECTORS******************//
const button = document.querySelector(".crazy-button");

//****************GLOBAL VARIABLES******************//
let speed=4000;
let inGame=true;

//****************FUNCTION DECLARATION******************//
function buttonGoAway()
{
    if (inGame){
        const offsetTop = (window.innerHeight-button.clientHeight)*Math.random();
        const offsetRight = (window.innerWidth-button.clientWidth)*Math.random();

        button.style.top = `${offsetTop}px`;
        button.style.right = `${offsetRight}px`;
    }
}

function buttonClicked()
{
    if (inGame){
        button.innerText = "Congratulation 🤩!!! Try again?";
        inGame=false;
    }
    else
    {
        inGame=true;
        speed-=200;
        button.style.transition = `cubic-bezier(0.075, 0.82, 0.165, 1) ${speed}ms`;
        button.innerText="Hey, click me!!!😜";
        buttonGoAway();
    }
}

//****************EVENT LISTENERS******************//
button.addEventListener("mouseenter", buttonGoAway);
button.addEventListener("click", buttonClicked);
































