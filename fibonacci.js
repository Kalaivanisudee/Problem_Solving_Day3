 //           n  
//fibonacci(0)=>0  //return n (it means given number)
//fibonacci(1)=>1  //return n (it means given number)
//fibonacci(2)=>fibonacci(1)+fibonacci(0)//f(n-1)+f(n-2)
//fibonacci(3)=>fibonacci(2)+fibonacci(1)//f(n-1)+f(n-2)
//fibonacci(4)=>fibonacci(3)+fibonacci(2)//f(n-1)+f(n-2)
//fibonacci(5)=>fibonacci(4)+fibonacci(3)//f(n-1)+f(n-2)
//fibonacci(n)=>fibonacci(n-1)+fibonacci(n-2)

//Recursive approach

function fibonacci(num){
    if(num < 2) return num;
    return fibonacci(num-1)+ fibonacci(num-2);

}
console.log(fibonacci(10));//55