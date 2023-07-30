let field1 = document.getElementById("field-a")
let field2 = document.getElementById("field-b")
let passwordLength = document.getElementById("length")
let password1 = ""
let password2 = ""

let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let alphaNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]



let alphaSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"] 

let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"] 

let choice = alphabets

let checkS = false
let checkN = false

function randomIndex(){
    let index = Math.floor(Math.random()*(choice.length))
    return index
}

function randomPassword(){
    let str = ""
    for(let i=0;i<Number(passwordLength.value);i++){
        str += choice[randomIndex()]
    }
    return str
}

function password(){
    field1.textContent = randomPassword()
    field2.textContent = randomPassword()   
    password1 = field1.textContent
    password2 = field2.textContent
    choice = alphabets
    passwordLength.value = ""
    
}

function reset(){
    field1.textContent = ''
    field2.textContent = ''
    document.getElementById('symbols').checked = false;
    document.getElementById('numbers').checked = false;
    checkS = false
    checkN = false
}

const symbolsCheck = document.getElementById('symbols');

symbolsCheck.addEventListener('change', function () {
  if (symbolsCheck.checked) {
    checkS = true
    if(checkN===true && checkS===true){
        choice = characters
    }
    else{
        choice = alphaSymbols
    }
    
  }
  else{
    choice = alphabets
  }
});

const numbersCheck = document.getElementById('numbers');

numbersCheck.addEventListener('change', function () {
  if (numbersCheck.checked) {
    checkN = true
    let s = "symbols: "+ checkS +" numbers: "+checkN
    console.log(s)
    if(checkN===true && checkS===true){
        choice = characters
    }

    else{
        choice = alphaNumbers
    }
    console.log('hello')
    
  }
  else{
    choice = alphabets
  }
});

let copyContent = ""
function copyToClipboard(element) {
    let selectedElement = document.getElementById(element)
    if(selectedElement===field1){
        copyContent = password1
    }
    else{
        copyContent = password2
    }
    navigator.clipboard.writeText(copyContent).then(() => {
        
        alert("Copied to clipboard");
    });
  }

