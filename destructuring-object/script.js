// faster/easier way to access/unpack variable from arrays, objects

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

// console.log(firstName, lastName, sister);

let { last, first, city, zip } = bob;

// giving alias
let { last: banana, siblings: {sister: favoriteSister} } = bob;

console.log(first, last, city, zip, banana, favoriteSister);

// destructuring in function body
function printPerson(person) {
  // console.log(person.first);
  const { first, last } = person;
  console.log(first, last);
}

// destructuring in function parameter
function printPerson2({first, last, city, siblings: {sister}}) {
  console.log(first, last, city, sister);
}

printPerson(bob);

printPerson2(bob);
