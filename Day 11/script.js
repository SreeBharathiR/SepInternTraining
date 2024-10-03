// String -immutable
// array -mutable

// let name="sree"
// let num=234,23,90,168;

// const numArray = new Array(2, 3, 566, 987, 12);

const numArray = [2, 3, 566, 987, 12];
// console.log(numArray.length);
// console.log(numArray[2]);
// // numArray[2] = numArray[1] * 10; //30
// console.log(numArray);
// const arr = []; //dynamic in size
// console.log(arr);
// arr.push("sree");
// arr.push("masha");
// arr.push("Ragul");
// console.log(arr);
// let deletedValue = arr.pop();
// console.log(deletedValue);
// console.log(arr);

// console.log(arr.at(1));
// console.log(arr[1]);

// let str = numArray.join(",");
// console.log(str);

// arr.shift();
// console.log(arr);
// arr.unshift("ragul");
// arr.unshift("Sree");
// console.log(arr);

// let num1 = [1, 2, 3];
// let num2 = [4, 5, 6];
// let num3 = [7, 8, 9];
// let total = num1.concat(num2, num3);
// console.log(total);

// let slicedArr = numArray.slice(2, 4);
// console.log(slicedArr);
// splice(indexNum,deleteCount,items)
// console.log(numArray.splice(2, 1, "dhoni", "MS"));
// console.log(numArray);

// let str = numArray.toString();

// console.log(str);

//Searching and sort

// console.log(numArray.indexOf("MS"));

// console.log(numArray.includes("Dhoni"));

//sorting

let num = [23, 9, 0, 986, 6];
let str = ["sree", "ragul", "Thanshika", "masha", "arun"];

// str.sort();
// num.sort();
// console.log(num);
// console.log(str);
// let rev = str.reverse();
// console.log(rev);
// console.log(num.reverse());

for (let i = 0; i <= num.length; i++) {
  console.log(num[i] * 10 - 2);
}

// i=0=>0<5 =>num[0]=>23
// 1=1=>1<5 =>num[1]=>9
// i=2=>2<5=>num[2]=>0
// i=3=>3<5=>num[3]=>986
// i=4=>4<5=>num[4]=>6
// i=5=>5<=5
3;
1;
11;
111;
11111111111;
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= i; j++) {
    console.log("1");
  }
  console.log();
}
