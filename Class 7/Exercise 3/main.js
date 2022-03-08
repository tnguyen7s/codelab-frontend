function sortDrinkByPrice(drinks)
{
    drinks.sort((drink1, drink2)=> drink1.price>drink2.price? 1:-1);
    return drinks;
}

drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}, 
    {name: "orange juice", price: 15}
];

sortDrinkByPrice(drinks);
console.log(drinks);
