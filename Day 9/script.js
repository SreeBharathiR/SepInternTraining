//switch case

// if(consdition){
//     statement
// }
// else if(condition){
//     statement
// }
// else{
//     statement
// }

//number or strings
//case sensitive -uppercase(captial),lowercase
let day = "sunday";
switch (day) {
  // case("Monday"==="Monday")
  case "Sunday":
    console.log("First day");
    break;
  case "Monday":
    console.log("Second day");
    break;
  case "Tuesday":
    console.log("Third day");
    break;
  case "Wednesday":
    console.log("Fourth day");
    break;
  case "Thurday":
    console.log("Fifth day");
    break;
  case "Friday":
    console.log("Sixth day");
    break;
  case "Saturday":
    console.log("Seventh day");
    break;
  default:
    console.log("Your give data is not a day!!");
    break;
}

//ternar operator
// condition ? true_block : flase_block;

// 2-even 3-odd

let num = 17;
// 4/2=2(0)
// if (num % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
num % 2 == 0 ? console.log("even") : console.log("Odd");

//looping

// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");
// console.log("Hello");

// for,while,do while

// for syntax:

// for(initization;condition;increment/decrement);
// let n = 5;
// for (let i = n; i > 0; i+n) {
//   console.log(i);

// }

// i=1=>  1<=5  =>2
// i=2=> 2<=5 =>3
// 1=3=> 3<=5 =>4
// i=4 => 4<=5 =>5
// i=5 => 5<=5 =>6
// i=6 => 6<=5

//i=5 5>0   i=i-1=5-4
//i=4 4>0 3
// i=3 3>0  2
// i=2 2>0  1
// i=1 1>0 0
// i=0 0>0

// let m = 10;
// let i = 1;
// while (i <= m) {
//   console.log(i);
//   let n = 4;
//   i += n;
// }

//do while

// let m = 10;
// let i = 10;
// do {
//   console.log("Hi");
// } while (i < m);

let number = 353;
let sum = 0;
for (let i = 0; number > 0; i++) {
  let rem = number % 10;
  sum += rem;
  //   console.log(rem);
  number = Math.floor(number / 10);
}
console.log(sum);
