const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};
const getLimit = user => spendingLimits?.[user] ?? 0;

const addExspense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // if (value <= lim) {
  //   budget.push({ value: -value, description, user });
  // }

  // const limit = spendingLimits ? spendingLimits[user] : 0;
  const limit = getLimit(user);

  if (value <= limit) {
    budget.push({ value: -value, description, user });
  }
};
addExspense(10, 'Pizza 🍕');
addExspense(100, 'Going to movies 🍿', 'Matilda');
addExspense(200, 'Stuff', 'Jay');
console.log(budget);

const check = function (budget, user) {

  // for (var el of budget) {
  //   var lim;
  //   if (spendingLimits[el.user]) {
  //     lim = spendingLimits[el.user];
  //   } else {
  //     lim = 0;
  //   }

  //   if (el.value < -lim) {
  //     el.flag = 'limit';
  //   }
  // }
  budget.map(entry => entry.value < -getLimit(entry.user) ? entry.flag = 'limit' : '');
};
check(budget, 'jonas');

console.log(budget);

const logBigExpenses = function (bigLimit) {
  let output = '';
  // for (var el of budget) {
  //   if (el.value <= -bigLimit) {
  //     output += `${el.description.slice(-2)} / `; // Emojis are 2 chars
  //   }
  // }
  budget.filter(entry => entry.value <= -bigLimit ? output += `${entry.description.slice(-2)} / `: '');
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);

};
logBigExpenses(100);