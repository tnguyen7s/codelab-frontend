const questions = document.querySelectorAll(".question");

function openAccordion()
{
    if (!this.nextElementSibling.classList.contains("opening"))
    {
        this.nextElementSibling.classList.add("opening");
        this.firstElementChild.innerText = "-";
    }
    else
    {
        this.nextElementSibling.classList.remove("opening");
        this.firstElementChild.innerText = "+";
    }
}

questions.forEach((q)=> q.addEventListener("click", openAccordion));