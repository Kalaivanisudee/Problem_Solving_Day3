//What is recursive function?
/*A function that calls itself again and again untill a specific condition meets*/

//Iterative Approach
//1.print 1 to 10

// for(let i=1;i<=10;i++){
//     console.log(i)//1 2 3 4 5 6 7 8 9 10
// }
for(let i=10;i>0;i--){
    console.log(i);
}
//Recursive Approach
// function printTill(num,current){
//     if(num<current) return;
//     console.log(current)//1 2 3 4 5 6 7 8 9 10
//     printTill(num,current+1)

// }
// printTill(10,1)