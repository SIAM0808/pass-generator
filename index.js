const lowerChars = "qwertyuiopasdfghjklzxcvbnm"
const upperChars = "ASDFGHJKLQWERTYUIOPMNBVCXZ"
const numbers = "1234567890"
const symbol = "#@!$%^)(*&_+-={}[]?/|>,<: "


const lch = document.querySelector("")
const uppCh = document.querySelector("")
const nm = document.querySelector("")
const sym = document.querySelector("")
const length = Number(document.querySelector("").value)
const result = decodeURI.querySelector("")
//const button = document.querySelector("")

let alowed = "";
alowed += lch.checked ? lowerChars : ""
alowed += uppCh.checked ? upperChars : ""
alowed += nm.checked ? numbers : ""
alowed += sym.checked ? symbol : ""

function generator(allowed, length){
    let ans = ""
    for(let i=0; i<length; i++){
        let index = Math.floor(Math.random() * allowed.length)
        ans += allowed[index];
    }
    return ans;
}


const pass = generator(alowed, length)

