// what is factorial? 
//The factorial of a number is the sum of the multiplication, of all the whole numbers, from our specified number down to 1.
// 0!=1
// 1!=1
// 2!=2*1!=>2*1=2
// 3!=3*2!=>3*2=6
//4!=4*3!=>4*6=24
//5!=5*4!=>5*24=120
//n!=n*n-1*n-2*n-3...(n-1)!
//n!=n*(n-1)
//tail call recursion
function factorial(num,x){
if(num < 1) return x;
return  factorial(num-1,num*x);

}
console.log(factorial(5,1));//120