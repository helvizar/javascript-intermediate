// Spread Operator...
// allows and iterable to spread/expand individually inside receiver
// split into single item and COPY them not referencing them, 
// so when we create new values we not replace/affecting the original values

const udemy = "udemy";
const letters = [...udemy];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];

const bestFriend = "arnold";

// new array to combine array before
const friends = [...boys, bestFriend, ...girls];
// no nested array because use spread operator
console.log(friends);

// reference
// const newFriends = friends;
// newFriends[0] = "nancy";

// both friends and newFriends are affected because referencing the value
// console.log(newFriends);
// console.log(friends);

// use spread operator, not referencing but copying the value
const newFriends = [...friends];
newFriends[0] = "nancy";

console.log(newFriends);
console.log(friends);

// copy

// ES2018 - ES8 Objects

const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago" };

console.log(person);
console.log(newPerson);
