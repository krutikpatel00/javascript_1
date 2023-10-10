let nam = "krutik"
let lastName = "patel"

// console.log(`my name ${nam} and last name ${lastName}`);
// console.log(`${nam} ${lastName}`);

let gameName = new String('krutik')

// console.log(gameName.charAt(1));
// console.log(gameName.indexOf("u"));
// console.log(gameName.toUpperCase());
// console.log(gameName.charCodeAt());
// console.log(gameName.codePointAt());
// console.log(gameName.includes("i"));
// console.log(gameName.endsWith("k"));
// console.log(gameName.length);
// console.log(gameName.match());

// const newGame = gameName.substring(0, 4)
// console.log(newGame);

const anotherGame = gameName.slice(-4, 2)
console.log(anotherGame);

const NameTrime = "kring"
console.log(NameTrime);

const NameTrim = NameTrime.trim()
console.log(NameTrim);

const url = "https://example.com/search?q=\uD800"


const urlR = url.replace("20%", "-")
console.log(urlR);



const myName = "i am krutik and my age 14"
const urlR2 = myName.split("0")
console.log(urlR2);



