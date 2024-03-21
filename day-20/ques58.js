function averageCalculator() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var average = scores.reduce(function (sum, score) { return sum + score; }, 0) / scores.length;
    console.log(average);
}
// 0 is our initial value : 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
averageCalculator(1, 2, 3, 4, 5, 6, 7, 8, 9);
