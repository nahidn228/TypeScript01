{
  //

  //type assertion

  let anything: any;

  // anything = "i am in n ext level web development";

  // (anything as string).

  // anything = 124;
  // (anything as number).

  const kgToGM = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The converted value is: ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }

    const result1 = kgToGM(1000) as number;
    const result2 = kgToGM("1000") as string;
  };

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
