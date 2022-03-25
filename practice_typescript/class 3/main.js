// Exercise 1
var intro = function (name, age) { return console.log("Hello, my name is ".concat(name, ", I'm ").concat(age, " years old!")); };
// intro("Tuyen", "21"); not work
intro("Tuyen", 21);
// Exercise 3
function keysAndValues2(object) {
    var keys = Object.keys(object);
    var values = [];
    keys.forEach(function (k) { return values.push(object[k]); });
    return [keys, values];
}
console.log(keysAndValues2({ a: 1, b: 2, c: 3 }));
