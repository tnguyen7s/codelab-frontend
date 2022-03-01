//************SELECT HTML ELEMENTS************\\
const button = document.querySelector("button");

//************GLOBAL VARIABLES************\\
let randomColor1;
let randomColor2;

//************FUNCTION DECLARATIONS************\\
function changeBackgroundAndTextColor()
{
    //Create two random colors hex for text and background
    randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    randomColor2 = Math.floor(Math.random()*16777215).toString(16);

    //change the button background and the button text color
    button.style.color = `#${randomColor1}`;
    button.style.backgroundColor = `#${randomColor2}`;
}


//************EVENT LISTENERS************\\
button.addEventListener("click", changeBackgroundAndTextColor);