// Unique Value
const menu = [
  {
    name: "pancakes",
    category: "breakfast"
  },
  {
    name:"burger",
    category: "lunch",
  },
  {
    name:"steak",
    category: "dinner",
  },
  {
    name:"bacon",
    category: "breakfast",
  },
  {
    name:"eggs",
    category: "breakfast",
  },
  {
    name:"pasta",
    category: "lunch",
  },
];

// map - get all instances
// new Set - narrow down only unique values
// ["all",...] - turn it back to array
const categories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories);

const result = document.querySelector("#result");
result.innerHTML = categories.map((category) => {
  return `<button>${category}</button>`;
}).join("");

