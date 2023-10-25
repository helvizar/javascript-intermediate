// Filter - returns a new array, can manipulate the size of new array (unlike map), return based on condition

// Find - returns single instance, return first match, if no match - undefined

const people = [
  {name: "bob", age: 20, position: "intern"},
  {name: "peter", age: 25, position: "developer"},
  {name: "susy", age: 30, position: "designer"},
  {name: "anna", age: 35, position: "the boss"},
];

const fruits = ["apple", "orange", "melon"];

// filter
const youngPeople = people.filter((person) => {
  // if (person.age <= 25) {
  //   return person
  // }
  return person.age <= 25
});
console.log(youngPeople);

const developers = people.filter((person) => person.position === "developer"); // set up a one-liner, implicity returning value
console.log(developers);

// no match
const seniorDevelopers = people.filter((item) => item.position === "seniorDeveloper");
console.log(seniorDevelopers);

// find
const peter = people.find((person) => person.name === "peter");
console.log(peter);

const melon = fruits.find((fruit) => fruit === "melon");
console.log(melon);

// no match
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// multiple matches - first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);

// special case
const anna = people.filter((person) => person.name === "anna");
console.log(anna); // filter always return array

// access property
console.log(peter.position);
console.log(anna[0].position);
