function toArray(object)
{
    //console.log(Object.keys(object));
    return Object.keys(object).map(key=>[key, object[key]]);
}

let myArray = toArray({ a: 1, b: 2 });
console.log(myArray);
 
myArray = toArray({ shrimp: 15, tots: 12 });
console.log(myArray);

myArray = toArray({});
console.log(myArray);