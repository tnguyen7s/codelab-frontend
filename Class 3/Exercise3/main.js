function keysAndValues(my_object)
{
    //get all keys of the object
    keys = Object.keys(my_object);
    //sort keys in place
    keys.sort()
    
    //create an array to store values
    values = []
    for (let k of keys)
    {
        values.push(my_object[k]);
    }

    //return the result
    return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
