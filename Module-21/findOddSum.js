let arr=[1,2,3,4,5,6]
function findOddSum(arr){
    let oddNumber=[]
    let sum=0;
    for(let i=0;i<arr.length; i++){
        if(arr[i]%2==1){
            sum=sum+arr[i]
            oddNumber.push(arr[i])
        }
        
    }
    return oddNumber
    
}
let result=findOddSum(arr)

function getOddSum(sum){
    let s=0;
    for(let i=0;i<sum.length;i++){
        s=s+sum[i]
    }
    return s
}
console.log(getOddSum(result))