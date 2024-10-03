//function -reusable code

// function functionName(){

// }

function Msg(name) {
  console.log("Hi team " + name);
}

//calling function

Msg();
Msg("from Sree");

function add(m, n) {
  let sum = m + n;
  console.log(`Sum of ${m} and ${n} is ${sum}`);
}

add(5, 10);
add(2335, 97865);

//String "",'' (immutable)

let Name = "   Sree Bharathi ";
console.log(Name);

// index-> 0,1,2,3,4-" "
// Sree
console.log(Name.charAt(-6)); //old version es1
console.log(Name.at(-6)); //new version ES2022
Name[5] = "b";
console.log(Name);
let newStr = Name.replaceAll("e", "R");
console.log(newStr);
// console.log(Name);

// console.log(Name.substring(5, 8)); //old version
// console.log(Name.slice(-5, -3));

// console.log(Name.toUpperCase());
// console.log(Name.toLowerCase());

// console.log(Name.concat(" Ramaraj", " Mentor"));

// console.log(Name.trim());

let greet = "Good Evening Team-What 's-oup?";

let arr = greet.split(" ");
console.log(arr);
console.log(arr[1]);

console.log(greet.indexOf("o"));
console.log(greet.lastIndexOf("o"));

console.log(greet.includes("vel"));
console.log(greet.startsWith("God")); //endsWith

console.log("*".repeat(10));

//Array -collection of data (same data types)
let arrayName = [10, 20, 30, 45]; //mutable
console.log(arrayName);

arrayName[2] = 35;
console.log(arrayName);
console.log(arrayName[2]);
