// function check số fibonacci
function fibonacci(num: number): number {
   if (num <= 1) return 1;
   return fibonacci(num - 1) + fibonacci( num - 2);
}
let n:number = 10;
// tinh tong
    let sum: number = 0;
    for (let i = 1; i <= n; i++){
        sum+=fibonacci(i);
    }
    console.log("tổng: " + sum);
// in ra
    for (let i = 0; i <= n; i++ ){
        console.log("fibonacci: "+ fibonacci(i));
    }

