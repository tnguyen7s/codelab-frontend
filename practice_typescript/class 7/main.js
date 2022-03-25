// create an array of objects of Drink type
var drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "orange juice", price: 15 }
];
// sort in-place
function sortDrinkByPrice(drinks) {
    drinks.sort(function (drink1, drink2) { return drink1.price - drink2.price; });
}
sortDrinkByPrice(drinks);
console.log(drinks);
