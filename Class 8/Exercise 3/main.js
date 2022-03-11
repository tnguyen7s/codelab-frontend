//['very easy', 'very easy', 'easy', 'easy', 'medium', 'medium', 'hard', 'hard']

function interview(individualTimes, total)
{
    const max = [5, 5, 10, 10, 15, 15, 20, 20, 120];

    //first condition
    if (individualTimes.length!=8) return "disqualified";

    //second condition and the rest
    const times = [...individualTimes, total];
    if (times.some((time, index) => time>max[index])) return "disqualified";
    
    return "qualified";
}

console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120));
console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 64));
console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120));
console.log(interview([5, 5, 10, 10, 15, 15, 20], 120));
console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130));



