const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function shiftLetter(letter, offset) {
  if (!isLetterInAlphabet(letter)) {
    return letter;
  }

  return numberToLetter(letterToNumber(letter) + offset);
}

function isLetterInAlphabet(letter) {
  return alphabet.includes(letter.toUpperCase());
}
function letterToNumber(letter) {
  if (!isLetterInAlphabet(letter)) {
    return false;
  }

  return alphabet.indexOf(letter.toUpperCase()) + 1;
}

function numberToLetter(position) {
  return getLetterByAlphabeticPosition(
    moduloClamp(position, 1, alphabet.length)
  );
}
function getLetterByAlphabeticPosition(position) {
  if (position < 1 || position > alphabet.length) {
    return false;
  }

  return alphabet[position - 1];
}

function moduloClamp(number, min, max) {
  return positiveModulo(number - min, max + 1 - min) + min;
}

function positiveModulo(number, divisor) {
  return ((number % divisor) + divisor) % divisor;
}

function encode(message, key, isDecoding) {
    return message
      .split("")
      .map(function(letter) {
        if (!isLetterInAlphabet(letter)) {
          return letter;
        }
  
        return shiftLetter(letter, isDecoding ? -key : key);
      })
      .join("");
  }


document.getElementById("connect").onclick = function() {  
login = document.getElementById("inputLogin").value;
password = document.getElementById("inputPassword").value;
if (login == 'LU24EL' && password == encode('LU24EL', 3, 0)){
document.location.href = 'administration.html';
} else {
document.getElementById("modelerror").style.display = "block";
}
}; 
