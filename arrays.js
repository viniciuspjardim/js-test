// === Arrow Functions ===

// sumA and sumB are equivalent, you can omit the '{}' and the
// 'return' when the arrow function has only one line.
const sumA = (a, b) => {
  return a + b;
};
const sumB = (a, b) => a + b;

console.log("sumA:\n", sumA(2, 3), "\n");
console.log("sumB:\n", sumB(2, 3), "\n");

// Also you can omit the '()' when it has exactly one argument
const square = (a) => a * a;
console.log("square:\n", square(4), "\n");

// === Array Functions ===

// Array with animals and its weights
const animals = [
  { name: "elephant", weight: 2000 },
  { name: "human", weight: 70 },
  { name: "pig", weight: 60 },
  { name: "cow", weight: 600 },
  { name: "chicken", weight: 2 },
];

// Find by animal name
const pig = animals.find((animal) => animal.name === "pig");
console.log("Find pig:\n", pig, "\n");

// Find first by weight less then 100
const animalByWeight = animals.find((animal) => animal.weight < 100);
console.log(
  "First animal that weights less then 100 kg:\n",
  animalByWeight,
  "\n"
);

// Get animals name list
const animalsNames = animals.map((animal) => animal.name);
console.log("Animals names:\n", animalsNames, "\n");

// Find all (filter) where weight is grater then 100
const animalsByWeight = animals.filter((animal) => animal.weight > 100);
console.log(
  "All animals that weights more then 100 kg:\n",
  animalsByWeight,
  "\n"
);

// Weight sum
const sum = animals.reduce((weightSum, animal) => {
  return animal.weight + weightSum;
}, 0);
console.log("Weight sum:\n", sum, "\n");

// Sort animals by weight
const animalsSorted = animals.sort((animalA, animalB) => {
  return animalA.weight - animalB.weight;
});
console.log("Animals sorted by weight:\n", animalsSorted, "\n");
