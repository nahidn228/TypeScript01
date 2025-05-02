{
  // Constraints in typescript
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 111,
    name: "nahid",
    email: "nahid@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 222,
    name: "nahid",
    email: "nahid.hasan@gmail.com",
    devType: "NLWD",
    hasWatch: "Apple-watch",
  });

  const student3 = addCourseToStudent({
    id: 223,
    name: "Mr. X",
    email: "mr.x@gmail.com",
    emni: "emni",
  });

  //
}
