function factorial(num){
 let results = 1;
 
 for(let i = 2; i<=num; i++){
    results *= i;
 }
 return results;
}

console.log(factorial(5))

// BIG-O notation is linear time complexity O(N)
