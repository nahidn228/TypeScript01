//normal Function
//Arrow Function

function add(num1: number, num2: number) {
  return num1 + num2;
}
add(2, 2);

const add1 = (num1: number, num2: number): number => num1 + num2;

// object ---> function ---> Method

const poorUser = {
  name: "nahid",
  balance: 100,
  addFunction(balance: number) {
    return `My balance is ${this.balance + balance}`;
  },
};

//define explicitly in callback function
const arr: number[] = [1, 5, 3, 6];

const newArray: number[] = arr.map((num: number): number => num * num);

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

const check1: string[] = ["nahid", "karim", "rahim"];
const check2: string[] = ["abul", "babul", "cabul"];

check2.push(...check1);
