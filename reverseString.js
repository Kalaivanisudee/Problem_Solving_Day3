//Recursive approach
let string1="Hello World";

function helper(string1,start){
if(string1.length == start) return " ";
return helper(string1,start+1) + string1[start];

}

function reverseString(string1){
   return  helper(string1,0);

}
console.log(reverseString(string1))// dlroW olleH