///HTML SELECTORS
const form = document.querySelector("form");
const input = document.querySelector("input");

const userInfosUL = document.querySelector("ul");

///GLOBAL VARIABLES
let userInfos = JSON.parse(localStorage.getItem("user-info-list")) || [];
///FUNCTION DECLARATIONS
function addUserInfo(e)
{
    e.preventDefault();
    if (!input.value) return;
    
    //get user input
    const userInfo = input.value;

    //add it to a list of user infos
    userInfos.push(userInfo);

    //display the list of infos
    displayUserInfos();

    //save userInfos List to the storage
    form.reset();
}

function displayUserInfos()
{
    userInfosUL.innerHTML = userInfos.map(
        (info)=>`<li>${info}</li>`).join("");

    localStorage.setItem("user-info-list", JSON.stringify(userInfos));
}


///EVENT LISTENERS
form.addEventListener("submit", addUserInfo);

//APPLICATION STARTS
displayUserInfos();