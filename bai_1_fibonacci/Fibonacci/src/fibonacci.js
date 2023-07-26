function fibonacci(num) {
    if (num <= 1)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
var n = 10;
var sum = 0;
for (var i = 1; i <= n; i++) {
    sum += fibonacci(i);
}
console.log("tổng: " + sum);
for (var i = 0; i <= n; i++) {
    console.log("fibonacci: " + fibonacci(i));
}
