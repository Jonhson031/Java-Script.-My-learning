'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Creating DOM elements
// insertAdjacentElement
/* lets you insert an HTML element into the DOM at a specific position relative to another element.                                     |
| --------------- | --------------------------------------------- |
| `"beforebegin"` | Insert **before** the element itself          |
| `"afterbegin"`  | Insert **inside**, **before** the first child |
| `"beforeend"`   | Insert **inside**, **after** the last child   |
| `"afterend"`    | Insert **after** the element itself           |
*/

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  // Sort movements | Using sort() method
  const movementsSort = sort ? movements.slice().sort((a, b) => a - b) : movements;


  movementsSort.forEach(function (movement, i) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      
      <div class="movements__value">${movement}€</div>
    </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);

  });
};


// Computing Usernames using map() method
const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  })
}
createUserNames(accounts);
console.log(accounts);


// Display Balance
const calcPrintBalance = function (account) {
  const balance = Number(account.movements.reduce((acc, curr) => acc + curr, 0).toFixed(2));
  labelBalance.innerText = balance + '€';
  account.balance = balance;
}


// Display Summary
const calcDisplaySummary = function (account) {
  const income = Number(account.movements.filter(mov => mov > 0).reduce((acc, curr) => acc + curr, 0).toFixed(2));
  labelSumIn.innerText = `${Math.abs(income)}€`;
  const out = Number(account.movements.filter(mov => mov < 0).reduce((acc, curr) => acc + curr, 0).toFixed(2));
  labelSumOut.innerText = `${Math.abs(out)}€`;

  // Interest 1.2%


  const interest = Number(account.movements
    .filter(mov => mov > 0)
    .map(mov => mov * account.interestRate / 100)
    .reduce((acc, curr) => acc + curr, 0).toFixed(2));
  labelSumInterest.innerText = `${Math.abs(interest)}€`;
}

const updateUI = function () {
  displayMovements(currentAccount.movements);
  calcPrintBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}

// Find() method
// Login into account using find() method
let currentAccount; // to save account information.
btnLogin.addEventListener('click', function (e) {

  // Prevent form from submitting
  e.preventDefault();

  const inputUserName = inputLoginUsername.value.toLowerCase();
  const inputPin = Number(inputLoginPin.value);

  currentAccount = accounts.find(acc => acc.userName === inputUserName)
  //   if (acc.pin === inputPin && acc.userName === inputUserName) {
  //     // Display UI and Welcome Message
  //     labelWelcome.textContent = `Welcome back ${acc.owner.split(' ')[0]}`;
  //     containerApp.style.opacity = '1';

  //     currentAccount = acc; // to save account information.

  //     displayMovements(currentAccount.movements);
  //     calcPrintBalance(currentAccount.movements);
  //     calcDisplaySummary(currentAccount);
  //   } else{
  //     inputLoginUsername.style.border = 'red';
  //     inputLoginPin.style.border = 'red';
  //   }
  // })

  if (currentAccount?.pin === inputPin) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = '1';

    updateUI();

    inputLoginUsername.style.borderColor = '#fff';
    inputLoginPin.style.borderColor = '#fff';
  } else {
    inputLoginUsername.style.borderColor = 'red';
    inputLoginPin.style.borderColor = 'red';
  }
})


// Transfer money
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  // inputTransferAmount.value = inputTransferTo.value = '';

  if (currentAccount) {
    const inputTransferAmountValue = Number(inputTransferAmount.value);

    // Find account
    const receiverAccount = accounts.find(acc => acc.userName === inputTransferTo.value.toLowerCase());

    // 
    if (receiverAccount && receiverAccount?.userName !== currentAccount.userName && currentAccount.balance > 0 && inputTransferAmountValue <= currentAccount.balance & inputTransferAmountValue > 0) {
      currentAccount.movements.push(-inputTransferAmountValue);
      receiverAccount.movements.push(inputTransferAmountValue);
      updateUI();
    }
  }
})


// Close Account | Using findIndex()
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (currentAccount) {
    if (Number(inputClosePin.value) === currentAccount.pin && inputCloseUsername.value.toLowerCase() === currentAccount.userName) {
      const index = accounts.findIndex(acc => acc.userName === currentAccount.userName);

      // Delete account
      accounts.splice(index, 1);
      containerApp.style.opacity = 0;
      inputClosePin.value = inputCloseUsername.value = '';
    }
  }
})


// Request Loan | Using some() method
// Gives loan if there at least one deposit of 10% of loan amount
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  if (currentAccount) {
    const checkLoan = currentAccount.movements.some(mov => mov >= Number(inputLoanAmount.value / 10));
    if (checkLoan) {
      currentAccount.movements.push(Number(inputLoanAmount.value));
      updateUI();
    }
  }
})


// Calculate all movements | Using flatMap() method
const allMovements = accounts.flatMap(acc => acc.movements).reduce((acc, curr) => acc + curr, 0);
console.log(allMovements);


// Sorting button
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////



// Practice\

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, curr) => acc + curr, 0);
console.log(bankDepositSum);

// 2.
// const numDeposits = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
const numDeposits = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, curr) => (curr >= 1000 ? acc + 1 : acc), 0)
console.log(numDeposits);


// 3. 
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce((sums, curr) => {
    curr > 0 ? (sums.deposits += curr) : (sums.withdrawals += curr);
    return sums;
  }, { deposits: 0, withdrawals: 0 });
console.log(sums);

// 4. 
// this is a nice title > This Is a Nice Title
const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'with', 'in'];
  const titleCase = title
    .toLowerCase().split(' ')
    .map(word => exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1))
    .join(' ')

  return console.log(titleCase);
}
convertTitleCase('this is a nice title');
convertTitleCase('and this also an nice title, but with And');



// Coding Challenge #5
console.log('---Coding Challenge #5---')
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
console.log(dogs);

// 1.
dogs.forEach(dog => {
  dog.recFood = Math.floor(dog.weight ** 0.75 * 28);
})



// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog eats too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3.
const ownersTooMuch = dogs.filter(dog => dog.curFood > (dog.recFood * 1.10)).flatMap(dog => dog.owners);
console.log(ownersTooMuch.flatMap(owner => `${owner}'s dog eating too much`));

const ownersTooLittle = dogs.filter(dog => dog.curFood <= (dog.recFood * 0.90)).flatMap(dog => dog.owners);
console.log(ownersTooLittle.flatMap(owner => `${owner}'s dog eating too little`));

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog => dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;
console.log(dogs.every(checkEatingOkay));

// 7.
const dogsEatingOkay = dogs.filter(dog => dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9);
console.log(dogsEatingOkay);

// 8.
const groupedDogs = Object.groupBy(dogs, dog => {
  if(dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9) return 'exact';
  else if(dog.curFood > dog.recFood * 1.1) return 'too-much';
  else if(dog.curFood < dog.recFood * 0.9) return 'too-little';
})
console.log(groupedDogs);

// 9.
const groupedByOwners = Object.groupBy(dogs, dog => dog.owners);
console.log(groupedByOwners);

const dogsGroupedByOwners = Object.groupBy(
  dogs,
  dog => `${dog.owners.length}-owners`
);
console.log(dogsGroupedByOwners);


// 10.
const dogsSortedAsc = dogs.toSorted((a, b) => {
  return a.recFood - b.recFood;
})
console.log(dogsSortedAsc);

