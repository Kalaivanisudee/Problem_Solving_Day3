//2**5
//2**5=>2*2*2*2*2*2=>2*(2**4) ==> num1* num2-1
//2**4=>2*2*2*2=>2*(2**3) ==> num1* num2-1
//2**3=>2*2*2=>2*(2**2) ==> num1* num2-1
//2**2=>2*2=>2*(2**1) ==> num1 * num2-1
//2**1=>2  ==>num2=1 return num1
//2**0=>1  ==>num2=0 return 1
//num1=2;num2=5;

function powerOfNumber(num1,num2){
    if(num2 < 0) return 1 / powerOfNumber(num1, -num2)//if num2 is negative number use this line...it's important for negative number
    if(num2 == 0) return 1;
    if(num2 == 1) return num1;
    return num1*powerOfNumber(num1,num2-1);

}
console.log(powerOfNumber(10,-2));

console.log(Math.pow(10,-2))