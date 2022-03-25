// exercise 2
function reversibleInclusiveList(start, end) {
    var numbers = [];
    if (start < end) {
        for (var i = start; i <= end; i++)
            numbers.push(i);
    }
    else {
        for (var i = end; i >= start; i--)
            numbers.push(i);
    }
    return numbers;
}
console.log(reversibleInclusiveList(1, 5));
console.log(reversibleInclusiveList(2, 8));
console.log(reversibleInclusiveList(10, 20));
console.log(reversibleInclusiveList(24, 17));
//Exercuse 3
function product(array2D) {
    var sum = 0;
    //inner function have access to variable sum in outer function
    array2D.forEach(function (innerArray) { return sum += innerArray[0] * innerArray[1]; });
    return sum;
}
console.log(product([[1, 2], [1, 1], [2, 3]]));
console.log(product([[10, 2], [5, 0], [2, 3]]));
console.log(product([[1, 2], [2, 3], [3, 4]]));
console.log(product([[1, 2], [0, 3], [3, 0]]));
