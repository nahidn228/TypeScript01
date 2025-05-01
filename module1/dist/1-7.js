"use strict";
{
    // spread operator
    // rest operator
    // destructuring
    // learn spread operator
    const bros1 = ["Nahid", "Hasan", "Opu"];
    const bros2 = ["Mezba", "Khaled", "Pritom"];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: "Mezba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentors2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    const mentorsList = Object.assign(Object.assign({}, mentors1), mentors2);
    // Learn rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("abul", "kabul", "babul", "dabul", "cabul");
}
