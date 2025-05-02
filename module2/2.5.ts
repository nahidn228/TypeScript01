{
  //
  // Function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type Person = {
    id: number;
    name: string;
  };

  //Using alias

  const resGenericObj = createArrayWithGeneric<Person>({
    id: 222,
    name: "nahid",
  });

  //using interface
  interface Human {
    id: number;
    name: string;
  }

  const resGenericObjInterface = createArrayWithGeneric<Human>({
    id: 222,
    name: "nahid",
  });

  // Tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const result1 = createArrayWithTuple<string, number>("Banglades", 147570);
  const resultGeneric = createArrayWithTuple<
    string,
    { name: string; role: string }
  >("Bangladesh", { name: "nahid", role: "developer" });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "nahid",
    email: "nahid@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "nahid",
    email: "nahid.hasan@gmail.com",
    devType: "NLWD",
    hasWatch: "Apple-watch",
  });

  //
}
