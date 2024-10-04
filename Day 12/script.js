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

let btn = document.getElementById("btn");
const type = document.getElementById("input");
const list = document.getElementById("list");
const para = document.getElementById("para");
const image = document.querySelector("#image");
const title = document.getElementById("heading");
const deleteItemBtn = document.getElementById("delete");
const title2 = document.getElementById("subtitle");
const showtype = document.getElementById("showtext");
const result = document.getElementById("result");
const inputfield = document.getElementById("inputfield");
// console.log(btn);
// btn.addEventListener("cilck", changeContent);
// console.log(title);

function changeContent() {
  title.style.color = "red";
  title.style.backgroundColor = "blue";
  para.textContent = "Fully about document object model";
  image.setAttribute(
    "src",
    "data:image/jpeg;base64,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"
  );
}
btn.addEventListener("click", changeContent);

const sumbitBtn = document.getElementById("sumbit");
sumbitBtn.addEventListener("click", () => {
  const newList = document.createElement("li");
  newList.textContent = type.value;
  list.appendChild(newList);
});

deleteItemBtn.addEventListener("click", () => {
  const lastItem = list.lastElementChild;
  console.log(lastItem);
  if (lastItem) {
    list.removeChild(lastItem);
  }
});
title2.addEventListener("mouseover", () => {
  title2.style.color = "blue";
  title2.style.fontFamily = "fantasy";
});
title2.addEventListener("mouseout", () => {
  title2.style.color = "black";
  title2.style.fontFamily = "sans-safari";
});

showtype.addEventListener("input", () => {
  result.textContent = showtype.value;
});

inputfield.addEventListener("keydown", (e) => {
  console.log("now key is entering in the input field");
});
inputfield.addEventListener("keyup", () => {
  console.log("Key press is stoped");
});
