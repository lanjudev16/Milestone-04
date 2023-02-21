/*
includes method  case-sensitive 
 */
const lyrics='Tumi bondhu kala Pakhi ami jeno ki bosonto kale bolte pari nai '
const lyricsLowerCase=lyrics.toLowerCase()
const searchString='pakhi'
const result=lyricsLowerCase.includes(searchString.toLowerCase())
if(result===true){
    console.log('pakhi')
}else{
    console.log('not exist')
}

console.log(lyricsLowerCase.endsWith('nai'))