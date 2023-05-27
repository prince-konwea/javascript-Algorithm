// const powerOf2 = (num) => {

//   if(num<1){
//     return false ;   
// }  
//   while(num > 1){
//      if(num%2 !== 0){
//         return false;
//      }
//      num= num/2
//   }
//   return true;
// }

// console.log(powerOf2(5))

const isPowerof2bitwise = (n) => {
     if (n <1) {
        return false;
     }

     return (n & (n-1))  === 0;
}

console.log(isPowerof2bitwise(8));