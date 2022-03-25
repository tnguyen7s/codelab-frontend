//Exercise 3
// define a type 
type Drink ={
    name: string,
    price: number
};

// create an array of objects of Drink type
const drinks:Drink[] = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}, 
    {name: "orange juice", price: 15}
];

// sort in-place
function sortDrinkByPrice(drinks: Drink[])
{
    drinks.sort((drink1, drink2) => drink1.price-drink2.price);
}


sortDrinkByPrice(drinks);
console.log(drinks);