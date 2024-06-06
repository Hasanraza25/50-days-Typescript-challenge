var arr = [1, 2, 3, 4, 5];
for (var i = 0; i < arr.length; i++) {
    if (i === 1 || 3 || 2) {
        continue;
    }
    console.log(arr[i]);
}
