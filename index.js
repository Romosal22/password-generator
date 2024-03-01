const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let passwordElOne = document.getElementById("password-1");
let passwordElTwo = document.getElementById("password-2");

let symbolsEl = document.querySelector("#symbols-el");
let numbersEl = document.querySelector("#numbers-el");
symbolsEl.checked=true
numbersEl.checked=true

function generatePasswords() {
    
    let inputLength = document.querySelector("#length-el").value
    let isSymbolsActive =symbolsEl.checked
    let isNumbersActive =numbersEl.checked
    let length = 15

    let availableCharacters=characters;
         
    if (!isSymbolsActive){
        availableCharacters=characters.filter(isNotSymbol)
    }
    if (!isNumbersActive){
        availableCharacters=availableCharacters.filter(isNotNumber)
    }
    
    if(!(inputLength==="" || parseInt(inputLength)<=0 || parseInt(inputLength) >20)) {
        length=parseInt(inputLength)
    }
    
    let passwordOne = "";
    let passwordTwo = "";
    
    for (let i=0; i<length;i++){
        let randomNumber1 = Math.floor(Math.random()*availableCharacters.length);
        let randomNumber2 = Math.floor(Math.random()*availableCharacters.length);
        passwordOne+=availableCharacters[randomNumber1];
        passwordTwo+=availableCharacters[randomNumber2];
    }
    
    passwordElOne.textContent=passwordOne;
    passwordElTwo.textContent=passwordTwo;
}

function isNotNumber(value) {
    return !numbers.includes(value);
}
function isNotSymbol(value) {
    return !symbols.includes(value);
}