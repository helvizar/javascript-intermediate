// faster/easier way to access/unpack variables from arrays, object

const fruits = ["oranges", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [bean, peter, bob, anna] = friends;

console.log(bean, peter, bob, anna);

const [one, , three, , five, tommy] = friends;

console.log(three, five, one, tommy);

// swap variable and value
let first = "bob";
let second = "john";

// let temp = first;
// first = second;
// second = temp;

// using desctucturing array
[second, first] = [first, second];

console.log(first, second);
