//****************HTML SELECTORS******************//
const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");
const totalCost = document.querySelector(".total-cost");
const showQuantity = document.querySelector(".show-quantity");


//****************FUNCTION DECLARATION******************//
function updateTotalCost()
{
    let total = price.value*quantity.value;
    totalCost.innerText = `$${total.toFixed(2)}`;
}

function updateQuantity()
{
    showQuantity.innerText = quantity.value;
}
//****************EVENT LISTENERS******************//
price.addEventListener("input", updateTotalCost);
quantity.addEventListener("input", updateTotalCost);
quantity.addEventListener("input", updateQuantity);

//****************APPLICATION STARTS******************//
updateQuantity();



































