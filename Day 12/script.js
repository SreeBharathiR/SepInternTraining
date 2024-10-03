// const number = [22, 8, 90, 10, 44];

// // function arrayUpdating(number) {
// //   const newNumber = [];
// //   //forEach
// //   for (let i = 0; i < number.length; i++) {
// //     newNumber.push(number[i]);
// //   }
// //   return newNumber;
// // }
// // const result = arrayUpdating(number);
// // console.log(result);

// // const newNumber = [];

// // number.forEach((val) => {
// //   return newNumber.push(val * 25);
// // });
// // console.log(newNumber);

// // const usingMap = number.map((val) => val * 25);
// // console.log(usingMap);

// // const evenArr = number.filter((val) => val % 2 === 0 && val >= 10);
// // console.log(evenArr);

// // let sum = 0;
// // number.forEach((val) => (sum += val));
// // console.log(sum);

// // let sum = number.reduce((total, element) => (total += element));
// // console.log(sum);

// //boolean

// const oddCheck = number.some((val) => val % 2 !== 0);
// console.log(oddCheck);
// //every,some

// //spread

// const arr1 = [1, 2, 4];
// const arr2 = [3, 5, 7];
// const newArray = [...arr1, ...arr2];
// console.log(newArray);

// //Object - {} -key:val(property)

// const obj = {
//   name: "Sree",
//   role: "Tech spt",
//   time: 7,
// };

// console.log(obj["role"]);
// console.log(obj.name);

// obj.skill = "js";

// let password = "sree789";
// obj.pass = password;
// console.log(obj);

// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// //for of(object) -for in(array)

// for (let property of Object.entries(obj)) {
//   console.log(property);
// }

//DOM  -Document Object Model
//DOM element accessing

function changeContent() {
  const title = document.getElementById("heading");
  title.style.color = "red";
  title.style.backgroundColor = "blue";
  const para = document.getElementById("para");
  para.textContent = "Fully about document object model";
}

let btn = document.getElementById("btn");
console.log(btn);
// btn.addEventListener("cilck", changeContent);
// console.log(title);

btn.addEventListener("click", changeContent);

const sumbitBtn = document.getElementById("sumbit");
sumbitBtn.addEventListener("click", () => {
  const type = document.getElementById("input");
  const list = document.getElementById("list");
  const createnewlist = list.createElement("li");
  console.log(type);
});
