//BÀI TẬP 2:  Nhập vào một chuỗi chữ số nguyên. Tính tổng các số nguyên tố có trong chuỗi.
// let numbers = [];
// let n = parseInt(prompt(`Nhập số lượng kí tự:`));
// for (let i = 1; i <= n; i++) {
//   let number = parseInt(prompt(`Nhập số:`));
//   numbers.push(number);
// }

// let nextNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   let isNext = true;
//   for (let j = 0; j < numbers.length; j++) {
//     if (i !== j && numbers[i] === numbers[j]) {
//       isNext = false;
//       break;
//     }
//   }
//   if (isNext) {
//     nextNumbers.push(numbers[i]);
//   }
// }

// let sum = 0;
// for (let i = 0; i < nextNumbers.length; i++) {
//   let isPrime = true;

//   for (let j = 2; j <= Math.sqrt(nextNumbers[i]); j++) {
//     if (nextNumbers[i] % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (nextNumbers[i] === 1) {
//     isPrime = false;
//   }
//   if (isPrime) {
//     sum += nextNumbers[i];
//   } else {
//     isPrime = false;
//   }
// }

// console.log(sum);

//BÀI TẬP 4:  Viết chương trình nhập vào một chuỗi ký tự, xóa ký tự số trong đó.
// const string = prompt(" Chuỗi kí tự bao gồm chữ và số ");
// const result = string.replace(/\d/g, "");
// console.log(result);

//BÀI TẬP 1:  Nhập vào một chuỗi là 5 chữ số nguyên, tìm số lớn nhất và duy nhất trong 5 số đó:
// let numbers = [];
// let n = parseInt(prompt(`Nhập số lượng kí tự của chuỗi:`));
// for (let i = 1; i <= n; i++) {
//   let number = parseInt(prompt(`Nhập số:`));
//   numbers.push(number);
// }

// let nextNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//   let isNext = true;
//   for (let j = 0; j < numbers.length; j++) {
//     if (i !== j && numbers[i] === numbers[j]) {
//       isNext = false;
//       break;
//     }
//   }
//   if (isNext) {
//     nextNumbers.push(numbers[i]);
//   }
// }

// nextNumbers.sort((a, b) => b - a);
// console.log(`Số lớn nhất là: ${nextNumbers[0]}`);

//BÀI TẬP 5:  Nhập vào một chuỗi và trả về là các thành phần trong chuỗi đảo ngược. Tất cả khoảng trắng trong chuỗi phải được giữ lại.
// const string = "Hello Viet Nam";
// const stringArray = string.split(" ");
// let result = "";
// for (let i = 0; i < stringArray.length; i++) {
//   const word = stringArray[i].split("").reverse().join("");
//   result = result.concat(" ", word);
// }
// console.log(result);

//BÀI TẬP 3:
// for (let row = 0; row < 6; row++) {
//   for (let col = 0; col < 7; col++) {
//     if (
//       (row == 0 && (col == 1 || col == 2 || col == 4 || col == 5)) ||
//       (row == 1 && (col == 0 || col == 3 || col == 6)) ||
//       (row == 2 && (col == 0 || col == 6)) ||
//       (row == 3 && (col == 1 || col == 5)) ||
//       (row == 4 && (col == 2 || col == 4)) ||
//       (row == 5 && col == 3)
//     ) {
//       document.write("* &nbsp");
//     } else document.write("&nbsp&nbsp   &nbsp");
//   }
//   document.write("<br />");
// }
