var x = [1,2,3,4,5]; 


function call_me(params) {
    var total=0;
  for (i=0; i<params.length; i++) {
    total=total+params[i]
  }
  return total;
}
console.log(call_me(x))