function product(collection)
{
    let sum=0;
    let product;
    for (let i=0; i<collection.length; i++)
    {
        product = 1;
        for (let j=0; j<collection[0].length; j++)
        {
            product *= collection[i][j];
        }
        sum+=product;
    }
    return sum;
}

console.log(product([[1,2],[1,1],[2,3]]));
console.log(product([[10,2],[5,0],[2,3]]));
console.log(product([[1,2],[2,3],[3,4]]));
console.log(product([[1,2],[0,3],[3,0]]));

