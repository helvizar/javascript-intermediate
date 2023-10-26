// Reduce - Objects

// cart example
const cart = [
  {
    title: "Samsung Galaxy S23",
    price: 1599.99,
    amount: 1
  },
  {
    title: "Google Pixel 7",
    price: 699.99,
    amount: 2
  },
  {
    title: "Iphone 14",
    price: 729.99,
    amount: 4
  },
  {
    title: "Xiaomi Redmi Note 12",
    price: 259.99,
    amount: 3
  },
];

// let total = cart.reduce((total, cartItem) => {
//   console.log(cartItem);
//   const {amount, price} = cartItem; // destructuring
  
//   // count items
//   total.totalItems += amount;

//   // count sum
//   total.cartTotal += amount * price;

//   return total;
// }, {
//   totalItems: 0,
//   cartTotal: 0
// });

// console.log(total);

let { totalItems, cartTotal } = cart.reduce((total, cartItem) => {
  console.log(cartItem);
  const {amount, price} = cartItem; // destructuring
  
  // count items
  total.totalItems += amount;

  // count sum
  total.cartTotal += amount * price;

  return total;
}, {
  totalItems: 0,
  cartTotal: 0
});

// get rid of funky number
cartTotal = parseFloat(cartTotal.toFixed(2));

console.log(totalItems, cartTotal);

// github repo example
const url = 'https://api.github.com/users/helvizar/repos?per_page=100'

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  const newData = data.reduce((total, repo) => {
    const { language } = repo;

    // if (language) {
    //   if (total[language]) {
    //     total[language] = total[language] + 1;
    //   } else {
    //     total[language] = 1;
    //   }
    // }

    // refactor validation
    if (language) {
      total[language] = total[language] + 1 || 1;
    }

    return total;
  }, {});

  console.log(newData);
}


fetchRepos();
