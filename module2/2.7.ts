{
  //
  //Generic Constraint using key of operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type owner = "bike" | "car" | "ship"; //manually
  type owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "nahid",
    age: 26,
    address: "Dhaka",
  };
  const car = {
    model: "Toyota",
    year: 2000,
  };

  const result1 = getPropertyValue(user, "name");
  const result2 = getPropertyValue(car, "model");

  //
}
