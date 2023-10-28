// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread with invoke function

// arrays
const fruits = ["apple", "orange", "lemon", "banana"];
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, second, restOfTheFruits);
const specificFruit = restOfTheFruits.find((fruit) => fruit === "lemon");
console.log(specificFruit);

// objects
const person = { name: "john", lastName: "smith", job: "developer" };
// const { ...rest, job } = person;
// always put rest operator at the end
const { job, ...rest } = person;
console.log(job, rest);

// functions, always use rest operator when declare a function
const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);

  const average = scores.reduce((total, item) => { return total += item }, 0) / scores.length;
  average
}

// getAverage(person.name, 89, 76, 81, 100);

const testScores = [23, 45, 67, 89];

// getAverage(person.name, testScores); // array inside array

// use Sperad Operator when invoke a function
getAverage(person.name, ...testScores);
