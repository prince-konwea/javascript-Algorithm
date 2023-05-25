function fibonacci(num){
   const fib=[0,1];
    for(let i = 2; i < num; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}

console.log( fibonacci(4))
// BIG-O = O(n) *this function has a linear time complexity. As input size increases the time complexity of the 
// function increases