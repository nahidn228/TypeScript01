"use strict";
//normal Function
//Arrow Function
function add(num1, num2) {
    return num1 + num2;
}
add(2 + 2);
const add = (num1, num2) => num1 + num2;
// object ---> function ---> Method
const poorUser = {
    name: "nahid",
    balance: 100,
    addFunction(balance) {
        return `My balance is ${this.balance + balance}`;
    },
};
//define explicitly in callback function
const arr = [1, 5, 3, 6];
const newArray = arr.map((num) => num * num);
// {
//   //Learning function
//   // Normal Function
//   // Arrow Function
//   function add(num1: number, num2: number = 10): number {
//     return num1 + num2;
//   }
//   add(2, "2");
//   const addArrow = (num1: number, num2: number): number => num1 + num2;
//   // object --> function --> method
//   const poorUser = {
//     name: "Mezba",
//     balance: 0,
//     addBalance(balance: number): string {
//       return `My new balance is : ${this.balance + balance}`;
//     },
//   };
//   const arr: number[] = [1, 4, 10];
//   const newArray: number[] = arr.map((elem: number): number => elem * elem);
// }
