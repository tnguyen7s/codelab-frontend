function reversibleInclusiveList(start, end)
{
    let my_list = [];
    if (start<end)
    {
        for (let i=start; i<=end; i++) my_list.push(i);
    }
    else
    {
        for (let i=start; i>=end; i--) my_list.push(i);
    }


    return my_list; 
}

console.log(reversibleInclusiveList(1, 5));
console.log(reversibleInclusiveList(2, 8));
console.log(reversibleInclusiveList(10, 20));
console.log(reversibleInclusiveList(24,17));