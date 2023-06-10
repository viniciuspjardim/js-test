// === Spread Operator ===

{
  const accountData = {
    name: "John Miles",
    gender: "M",
    email: "johnm@mail.com",
  };

  const id = 3;
  const account = { id, ...accountData, createdAt: new Date() };

  console.log(account);
}

{
  const arr1 = [3, 5, 7];
  const arr2 = [11, 13, "?"];
  const mergedArr = [2, ...arr1, "random item", ...arr2, 17];

  console.log("Merged array: ", mergedArr);
}

// === Destructuring Assignment ===

{
  const book = {
    code: 8,
    title: "JS",
    author: "Maria Branca",
    date: "2005-05-12",
    tags: ["programming", "educational", "it"],
  };

  const { title, author } = book;
  console.log("Destructuring object: ", title, author);

  // Renaming the variable
  const { author: authorName } = book;
  console.log("Renaming: ", authorName);

  // Getting other values separated
  const { date, ...other } = book;
  console.log("date: ", date);
  console.log("Other properties: ", other);

  // Destructuring args in function declaration and using a default
  // value for x. Also the code property is assigned to id variable
  function fn({ code: id, title, x = 2 }) {
    console.log("Destructuring function args: ", id, title, x);
  }
  fn(book);

  book.x = 4;
  fn(book);
}

// === Object Creation

{
  const id = 10;
  const name = "Lia";
  const grades = [4, 6, 8];

  const average = function () {
    const sum = this.grades.reduce((add, grade) => grade + add, 0);
    return sum / this.grades.length;
  };

  const studentA = { id: id, name: name, grades: grades, average: average };
  // This is a equivalent syntax, just more concise
  const studentB = { id, name, grades, average };

  console.log("studentA: ", studentA, "average: ", studentA.average());
  console.log("studentB: ", studentB, "average: ", studentB.average());

  // Can we use the same with an object?
  // const studentC = { studentA.id, studentB.name } // don't compile
  // We could use normal syntax instead
  const studentC = { id: studentA.id, name: studentB.name };
}
