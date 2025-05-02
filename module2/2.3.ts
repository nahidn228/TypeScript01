{
  // generic type

  // type GenericArray<params> = Array<params>; //Dynamic generic type
  type GenericArray<T> = Array<T>; //Dynamic generic type

  // const rollNumber: number[] = [20, 24, 26];
  // const rollNumber: Array<number> = [20, 24, 26];
  const rollNumber: GenericArray<number> = [20, 24, 26];

  // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user2: GenericArray<{ name: string; age: number }> = [
    {
      name: "nahid",
      age: 26,
    },
    {
      name: "Jhankar",
      age: 26,
    },
  ];

  // Generic Tuple

  type GenericTuple<X, Y> = [X, Y];
  const human: GenericTuple<string, string> = ["Nahid", "Hasan"];
  const human1: GenericTuple<string, number> = ["Nahid", 26];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    1234,
    { name: "nahid", email: "nahid@gmail.com" },
  ];

  //
}
