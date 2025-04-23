let str = "Our country is Pakistan";
let char = "s";  // Change to a character that exists in the string
let index = -1;  // Change to a number, not a string
let checked = -1;  // Change to a number

function findIndexOf(sentence, character) {
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == character) { 
      index = i;  // Store the first found index
      break;  // Stop looping after the first match
    }
  }
}

findIndexOf(str, char);

if (index !== -1) { // Check correctly with a number, not a string
    document.write("The index number is: " + index);
} else {
    document.write("Character not found in the sentence.");
}


// let str = "Our country is Pakistan";
// let char = "2";
// let index = "-1"; //13
// let checked = "-1"
// function findIndexOf(sentence, character) {
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] == character) { //"s" =="s"
//       index = i;
//       console.log(i)
//       break;
//     }
//     if(index == checked){
//         index = i
//      }
//   }
//   }

// findIndexOf(str, char);
// if(index !== "-1" ){
//     document.write("the index number is",index)
// }

// else{
//     document.write("your index number is",index)
// }
        0
/*let str = "PlEases read this application and give me gratuity".toLowerCase();
let count = 0;
let characters = []
function vowel(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    let firstChar = sentence[i];
    let secondChar = sentence[i + 1];
    console.log(firstChar + secondChar);
    //p                                 //l
    if (checkVowel(firstChar) && checkVowel(secondChar)) {
      count++;
      let merged = firstChar+secondChar;
      characters.push(merged)
    }
  }
}
vowel(str);
function checkVowel(char) {
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
}

document.write(count+"<br />")
document.write(characters)// let str = prompt("Enter your paragraph");


// if(str.length >= 25){

// }
// else{

// }

// let str = "Our country is Pakistan";
// let char = "2";
// let index = "-1"; //13
// let checked = "-1"
// function findIndexOf(sentence, character) {
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] == character) { //"s" =="s"
//       index = i;
//       break;
//     }
//     if(index == checked){
//         index = i
//      }
//   }
//   }

// findIndexOf(str, char);
// if(index !== "-1" ){
//     document.write("the index number is",index)
// }

// else{
//     document.write("your index number is",index)
// }
//         0*/
/*let str = "PlEases read this application and give me gratuity".toLowerCase();
let count = 0;
let characters = []
function vowel(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    let firstChar = sentence[i];
    let secondChar = sentence[i + 1];
    console.log(firstChar + secondChar);
    //p                                 //l
    if (checkVowel(firstChar) && checkVowel(secondChar)) {
      count++;
      let merged = firstChar+secondChar;
      characters.push(merged)
    }
  }
}
vowel(str);
function checkVowel(char) {
  switch (char) {
    case "a"*:
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
    default:
      return false;
  }
}

document.write(count+"<br />")
document.write(characters)*/

let cityName;
let zipEntered = document.getElementById("zip").value;


function swapPic(eId,newPic){
  document.getElementById(eId).src=newPic
}