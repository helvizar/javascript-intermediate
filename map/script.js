// MAP Method
const people = [
  {
    name: "bob",
    age: 20,
    position: "developers"
  },
  {
    name: "anna",
    age: 25,
    position: "designer"
  },
  {
    name: "susy",
    age: 30,
    position: "the boss"
  },
];

const getAges = ((person) => person.age);
console.log(getAges);

const ages = people.map(getAges);
console.log(ages);

const newPerson = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  }
});
console.log(newPerson);

// display to page
const names = people.map((person) => `<h2>${person.name}</h2>`);

// grab id from html
const result = document.querySelector("#result");

// execution
result.innerHTML = names.join("");