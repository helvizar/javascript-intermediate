// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2st parameter ('curr') - current iteration/value

const staff = [
  {name: "bob", age: 20, position: "intern", salary: 20},
  {name: "peter", age: 25, position: "developer", salary: 230},
  {name: "susy", age: 30, position: "designer", salary: 250},
  {name: "anna", age: 35, position: "the boss", salary: 500},
];

const totalDaily = staff.reduce((total, person) => {
  console.log(total);
  console.log(person.salary);
  
  total += person.salary;
  return total; // always return the first parameter in callback function reduce

}, 0);

console.log(totalDaily);
