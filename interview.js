//Input:6
//Output:
// 1 + 2 + 3
// 1 + 5 
// 2 + 4
// 6

//Recursive Approach

function solve(n,ind,sum,arr){
    // console.log(n,ind,sum,arr);
    
    if(sum == n){
        console.log(arr.join("+"));
        return;
    }
    if(ind > n) return;
    if(sum > n) return;
    solve(n,ind+1,sum+ind,[...arr,ind])
    solve(n,ind+1,sum,[...arr])
}

function sumTill(n){
    solve(n,1,0,[])

}
sumTill(6)