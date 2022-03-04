/**************HTML SELECTORS*******************/
const input = document.querySelector("input");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

const urlHtmlList = document.querySelector(".url-list");
const form = document.querySelector("form");


/**************GLOBAL VARIABLES*******************/
const urlList = JSON.parse(localStorage.getItem("link-list"))||[];
const BASE_URL = "https://opengraph.io/api/1.1/site";
const API_KEY = "fdcc299a-6adc-43d0-ac90-1674c1cbadf5";
/**************FUNCTION DECLARATIONS*******************/
function focusInput()
{
    body.classList.add("focus");
}

function removeFocusInput(e)
{
    body.classList.remove("focus");
}

async function addURL(e)
{
    e.preventDefault();

    if (!input.value) return;

    const promise = await fetch(`${BASE_URL}/${encodeURIComponent(input.value)}?app_id=${API_KEY}`);
    const dom = await promise.json();

    //add URL to the URL list
    urlList.push({
        "link": input.value,
        "img": dom.hybridGraph.image,
        "title": dom.hybridGraph.title
    });

    //display list of urls
    displayLinks();

    //reset the form
    form.reset();

    //remove focus
    removeFocusInput();

    //store urls in local storage
    localStorage.setItem("link-list", JSON.stringify(urlList))

}

function displayLinks()
{
    urlHtmlList.innerHTML =  urlList.map((url, i)=>`<li><div class="url-img" style="background-image: url('${url.img}')"></div><a target="_blank" href="${url.link}">${url.title}</a><button class="delete-button" type="button" data-id="${i}">&times;</button></li>`).join("");
}

function removeLink(e)
{
    if (!e.target.matches(".delete-button")) return;
    const idx = e.target.dataset.id;
    urlList.splice(idx, 1);
    displayLinks();
    localStorage.setItem("link-list", JSON.stringify(urlList))
}
/**************EVENT LISTENERS*******************/
input.addEventListener("focus", focusInput)
overlay.addEventListener("click", removeFocusInput);
// input.addEventListener("focusout", removeFocusInput);

form.addEventListener("submit", addURL);
urlHtmlList.addEventListener("click", removeLink);


/****************APPLICATION START*****************/
displayLinks();