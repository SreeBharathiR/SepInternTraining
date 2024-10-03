// var-globle scope,let - block scope,const

// var a = 10;
// var a = 5;
// let b = 10;

// {
//   var c = a + b;
// }
// console.log(c);

//operator

// 1)Arithmetic operator -> +,-,/,*,%,**(power 2**4),++(increment),--(decrement)
// console.log(5 * 60);
// console.log(63 / 5); //12 (quoutes)
// console.log(63 % 5); //3(remainder)
// console.log(2 ** 3);

let a = 5;
let b = 10;

// console.log(a); //5

// // a = a + 1;
// console.log(++a); //6
// console.log(a++); //6
// console.log(a); //7
// b--;
// console.log(b); //9
// console.log(b--); //9  (9-1)=8
// console.log(--b); //8-1=7

// assignment operator ->=,+=,-=,/=,%=,**=

let c = 2;
let d = 10;

//c=c-2;  c=2-2=0
console.log((c -= 2)); //0
console.log((c += 5)); //c=c+5 > c=0+5 =5
console.log((c /= 2)); //c=c/2

//comparision operator => ==,===,!=,!==,>,<,<=,>= (boolean -true,flase)

// console.log(2 == "2");
// console.log(2 != 3);
// console.log(2 === "2");
// console.log(2 !== 2);

// console.log(3 <= 3);

//Logical operator => OR ||,AND &&,NOT !

// console.log(2 != 2 || 4 > 3);
//AND     //OR
//true,true ->true      true
//false,true->flase     true
//true,flase->false     true
//flase,false->false    flase

// Not -> True=false
// false=true

console.log(!(3 == 2));

//Condition statement

//Simple if
//if else

// syntax

// if(consdition){
//     statement
// }
// else{
//     statement
// }
if (3 == 2) {
  console.log("equal");
  console.log("Both");
} else {
  console.log("Not equal");
}

//else if
let mark = 72;
if (mark > 90) {
  console.log("Grade A");
} else if (mark > 80 && mark <= 90) {
  console.log("Grade B");
} else if (mark > 60 && mark <= 80) {
  console.log("Grade C");
} else if (mark > 50 && mark <= 60) {
  console.log("Grade D");
} else {
  console.log("Fail");
}

//switch case
