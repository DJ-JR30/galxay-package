// Random Uppercase
function getRandomUpperCase(){
       return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

// Random Lowercase
function getRandomLowerCase(){
   return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

// Random Number
function getRandomNumber(){
   return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

// Random Symbol
function getRandomSymbol(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}

function Password() {
  
}

module.exports.Password = Password;