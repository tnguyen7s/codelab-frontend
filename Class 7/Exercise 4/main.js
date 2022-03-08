function getBudgets(people = [])
{
    let sum = 0;
    people.forEach((person)=> sum=sum+person.budget);
    return sum;
}


let totalBudget = getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ]) ;

console.log(totalBudget);



totalBudget = getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ]);

console.log(totalBudget);