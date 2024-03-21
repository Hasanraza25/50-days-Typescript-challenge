// Average Score Calculator: Write a simple program that can take lots of scores and find their average.

function averageCalculator(...scores: number[]) {
    let average = scores.reduce((sum,score) => sum + score, 0)/ scores.length;
    console.log(average);
}

// 0 is our initial value : 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

averageCalculator(1,2,3,4,5,6,7,8,9); // Output : 5

