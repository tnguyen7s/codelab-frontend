// Exercise 2
function countTrue(array: boolean[]) :number
{
    let count = 0;
    //closure allows the inner function have access variables in outer function
    array.forEach((value) => value? count++:0);
    
    return count;
}


console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));