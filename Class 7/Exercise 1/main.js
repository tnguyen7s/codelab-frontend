function redundantReturn(str)
{
    return function(){
        return str;
    }
}

const innerFunction = redundantReturn("Hello");
// innerFunction has access to str
console.log(innerFunction());