// Conversion to Number 
console.log(Number("33")); // 33
console.log(Number("33abc")); // NaN
console.log(Number("")); // 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(NaN)); // NaN

// Conversion to Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("33")); // true
console.log(Boolean("Hasan")); // true
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Conversion to String
console.log(String(33)); // 33
console.log(String(true)); // true
console.log(String(false)); // false
console.log(String(null)); // null 
console.log(String(undefined)); // undefined
