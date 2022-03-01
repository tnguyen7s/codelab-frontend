function countTrue(inputArray)
{
    let count = 0;
    inputArray.forEach((boolValue)=> boolValue? count++:count);
    return count;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
