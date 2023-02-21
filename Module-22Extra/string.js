/* string is sequence of character
we can find string length by .length  
we can also find a specific char by index like array
given example here
*/

/* 
what is the main difference between string and array
01->string immutable
immutable means string index value can not change after initialize string

*/

const name='Md Lanju Hossain'
const len=name.length //string length
const specificChar=name[3] //specific char finding process

console.log(name+' length '+len+" Find L char "+specificChar)

//case conversion
const userName='Abul kalam Ali'
console.log(userName.toLocaleLowerCase())
console.log(userName.toUpperCase())

const userInput='Abul Kalam Ali'
if(userInput.toLocaleLowerCase===userName.toLocaleLowerCase){
    console.log('match')
}else{
    console.log("not match")
}