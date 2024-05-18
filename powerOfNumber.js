//2**5
//2**5=>2*2*2*2*2*2=>2*(2**4) ==> num1* num2-1
//2**4=>2*2*2*2=>2*(2**3) ==> num1* num2-1
//2**3=>2*2*2=>2*(2**2) ==> num1* num2-1
//2**2=>2*2=>2*(2**1) ==> num1 * num2-1
//2**1=>2  ==>num2=1 return 2
//2**0=>1  ==>num2=0 return 1
//num1=2;num2=5;

function powerOfNumber(num1,num2){
    if(num2 == 0) return 1;
    if(num2 == 1) return 2;
    return num1*powerOfNumber(num1,num2-1);

}
console.log(powerOfNumber(2,5));