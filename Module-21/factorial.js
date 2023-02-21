function factorial(number){
    let fact=1;
    let i=number;
    while(i>=1){
        fact =fact*i;
        i++
    }
    return fact;
}
console.log(factorial(5))