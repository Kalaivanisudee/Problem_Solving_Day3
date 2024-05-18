 //           n  
//fibonacci(0)=>0  //return n (it means given number)
//fibonacci(1)=>1  //return n (it means given number)
//fibonacci(2)=>fibonacci(1)+fibonacci(0)//f(n-1)+f(n-2)
//fibonacci(3)=>fibonacci(2)+fibonacci(1)//f(n-1)+f(n-2)
//fibonacci(4)=>fibonacci(3)+fibonacci(2)//f(n-1)+f(n-2)
//fibonacci(5)=>fibonacci(4)+fibonacci(3)//f(n-1)+f(n-2)
//fibonacci(n)=>fibonacci(n-1)+fibonacci(n-2)

//Recursive approach
//a=>insted of  fibonacci(0)=0
//b=>insted of  fibonacci(1)=1
function fibonacci(num,previous,current){
   if(num == 0) return previous;
   if(num == 1) return current;
  return fibonacci(num-1,current,previous+current)

}
console.log(fibonacci(50,0,1))//12586269025