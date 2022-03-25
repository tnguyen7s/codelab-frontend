// Exercise 2
function countTrue(array) {
    var count = 0;
    //closure allows the inner function have access variables in outer function
    array.forEach(function (value) { return value ? count++ : 0; });
    return count;
}
console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
