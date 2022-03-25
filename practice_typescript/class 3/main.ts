// Exercise 1
const intro = (name: string, age: number) => console.log(`Hello, my name is ${name}, I'm ${age} years old!`);

// intro("Tuyen", "21"); not work
intro("Tuyen", 21);


// Exercise 3
function keysAndValues2(object: {}):any[]
{
    let keys = Object.keys(object);

    let values = [];

    keys.forEach((k)=>values.push(object[k]));

    return [keys, values];
}

console.log(keysAndValues2({ a: 1, b: 2, c: 3 }));


