//****************HTML SELECTORS******************//
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const second = document.querySelector(".second");

const start = document.querySelector(".start");
const end = document.querySelector(".stop");
const reset = document.querySelector(".reset");


//****************GLOBAL VARIABLES******************//
let currentSecond = 0;
let myInterval;
let isRunning = false;

//****************FUNCTION DECLARATION******************//
function startTimer()
{
    if (!isRunning){
        myInterval = setInterval(()=>{
            currentSecond++;
            displayTime();
        }, 1000);
        isRunning = true;
    }
}

function displayTime()
{
    let calHour = Math.floor(currentSecond/3600);
    hour.innerText = calHour<10? `0${calHour}`:calHour;

    let calMin = Math.floor(currentSecond/60-calHour*60);
    min.innerText = calMin<10? `0${calMin}`:calMin;

    let calSecond = currentSecond%60;
    second.innerText = calSecond<10? `0${calSecond}`:calSecond;
}

function stopTimer()
{
    isRunning=false;
    clearInterval(myInterval);
}

function resetTimer()
{
    stopTimer();
    currentSecond=0;
    displayTime();
}

//****************EVENT LISTENERS******************//
start.addEventListener("click", startTimer);
end.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
































