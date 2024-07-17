const lowerChars = "qwertyuiopasdfghjklzxcvbnm"
const upperChars = "ASDFGHJKLQWERTYUIOPMNBVCXZ"
const numbers = "1234567890"
const symbol = "#@!$%^*&_+-? "


const lch = document.querySelector("#lch")
const uppCh = document.querySelector("#uppch")
const nm = document.querySelector("#nm")
const sym = document.querySelector("#sym")
const lengthInput = document.querySelector("#length")
const result = document.querySelector("#result")
const button = document.querySelector("#button")



function generator(allowed, length) {

    let ans = ""
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * allowed.length)
        ans += allowed[index];
    }
    return ans;
}


button.onclick = function () {
    let allowed = "";
    allowed += lch.checked ? lowerChars : ""
    allowed += uppCh.checked ? upperChars : ""
    allowed += nm.checked ? numbers : ""
    allowed += sym.checked ? symbol : ""
    const length = Number(lengthInput.value)
    let pass = generator(allowed, length);
    result.textContent = pass;
};

