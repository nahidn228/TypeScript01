{
  //
  // Mapped types

  const arrOfNumbers: number[] = [1, 4, 5];

  // const arrOfStrings : string[] = ['1','4','5']

  const arrOfStrings = arrOfNumbers.map((number) => number.toString());
  console.log(arrOfStrings);

  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; //lookup type

  // type AreaString = {
  //   // [key in "height" | "width"]: string;
  //   [key in keyof AreaNumber]: string;
  // };

  //mapped type with generic
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
