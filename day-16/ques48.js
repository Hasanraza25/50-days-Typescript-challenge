var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptop1Price = [25000, 2000, 1000000];
var laptop2Price = [52000, 29000, 60000];
var bothPrices = __spreadArray(__spreadArray([], laptop1Price, true), laptop2Price, true).sort(function (a, b) { return a - b; });
console.log(bothPrices);
// here we use comparison functions and a and b are two contiguous elements 
