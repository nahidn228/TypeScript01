{
  //

  // Conditional type

  type A1 = number;
  type B1 = undefined;

  type X = A1 extends null ? true : false; //conditional type
  type Y = A1 extends null ? true : B1 extends undefined ? undefined : any; //nested conditional type

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  // car ase kina / bike ase kina / ship ase kina ??
  // type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasTractor = CheckVehicle<"tractor">;
  type HasCar = CheckVehicle<"car">;
  type HasPlane = CheckVehicle<"plane">;

  //
}
