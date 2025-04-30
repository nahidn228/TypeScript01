//Reference Type ---> Object

const user: {
  readonly company: "Programming Hero"; // type --> literal types
  firstName: string;
  middleName?: string; //optional
  lastName: number;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Nahid",
  lastName: "Hasan",
  isMarried: true,
};
user.company = "PH";
