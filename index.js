const lowerChars = "qwertyuiopasdfghjklzxcvbnm"
const upperChars = "ASDFGHJKLQWERTYUIOPMNBVCXZ"
const numbers = "1234567890"
const symbol = "#@!$%^)(*&_+-={}[]?/| "


const lch = document.querySelector("lch")
const uppCh = document.querySelector("uppch")
const nm = document.querySelector("nm")
const sym = document.querySelector("sym")
const length = Number(document.querySelector("length").value)
const result = document.querySelector("result")
const button = document.querySelector("button")



function generator(allowed, length){
    let alowed = "";
alowed += lch.checked ? lowerChars : ""
alowed += uppCh.checked ? upperChars : ""
alowed += nm.checked ? numbers : ""
alowed += sym.checked ? symbol : ""
    let ans = ""
    for(let i=0; i<length; i++){
        let index = Math.floor(Math.random() * allowed.length)
        ans += allowed[index];
    }
    return ans;
}


button.onclick = function(){
    let pass = generator(alowed, length);
    result.textContent = pass;
}

