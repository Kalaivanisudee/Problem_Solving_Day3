let string1="Hello World"
string1=string1.split("");
for(let start=0,end=string1.length-1;start < end;start++,end--){
let temp=string1[start];
string1[start]=string1[end];
string1[end]=temp;
}
console.log(string1.join(""));