{
  // Utility types
  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type Name = Pick<Person, "name">;
  type Age = Pick<Person, "age">;
  type NameAge = Pick<Person, "name" | "age">;

  //Omit  ( bad deya )
  type ContactInfo = Omit<Person, "name" | "age">;

  // required utility
  type PersonRequire = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  //Readonly
  type PersonReadonly = Readonly<Person>;

  const person1: PersonReadonly = {
    name: "Mr. XY",
    age: 30,
    contactNo: "015655151",
  };

  person1.name = "hasan"; //Cannot assign to 'name' because it is a read-only property.

  //record

  // type MyObj = {
  //   a: "aa";
  //   b: "bb";
  // };
  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  const EmptyObj: Record<string, unknown> = {};

  //
}
