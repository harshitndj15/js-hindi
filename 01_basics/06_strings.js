const name = "harshit";
const repoCount = 50;

//console.log(name + repoCount + "Value");

//console.log(`Hello my name is ${name.toUpperCase()} and repo count is ${repoCount}`);

const gameName = new String('harshit-hs-com');
//console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    harshit";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://harshit.com/harshit%20sharma";

// console.log(url.replace('%20', '-'));
// console.log(url.includes('sundar'));

console.log(gameName.split("-"));