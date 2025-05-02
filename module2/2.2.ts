{
  //

  //interface

  //type alias
  type Person = {
    name: string;
    age: number;
  };

  //interface
  interface Person2 {
    name: string;
    age: number;
  }

  const user1: Person2 = {
    name: "Nahid",
    age: 26,
  };

  //extend

  type UserWithRole1 = Person & { role: string };
  const user2: UserWithRole1 = {
    name: "Nahid",
    age: 26,
    role: "user",
  };

  //interface with extend

  interface UserWithRole2 extends Person2 {
    role: string;
  }
  const user3: UserWithRole2 = {
    name: "Nahid",
    age: 26,
    role: "user",
  };

  // js ----> object, array --> object, function --> object

  //Array
  type Roll1 = number[];
  const rollNumber: Roll1 = [1, 2, 3];

  interface Roll2 {
    [index: number]: number;
  }
  const rollNumber1: Roll2 = [1, 2, 3];

  //Function
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;

  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;

  //
}
