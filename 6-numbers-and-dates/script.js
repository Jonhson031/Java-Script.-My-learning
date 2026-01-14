'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
// Creating DOM elements
// insertAdjacentElement
/* lets you insert an HTML element into the DOM at a specific position relative to another element.                                     |
| --------------- | --------------------------------------------- |
| `"beforebegin"` | Insert **before** the element itself          |
| `"afterbegin"`  | Insert **inside**, **before** the first child |
| `"beforeend"`   | Insert **inside**, **after** the last child   |
| `"afterend"`    | Insert **after** the element itself           |
*/


const formatMovementDate = function (date) {
  const daysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = `${date.getDate()}`.padStart(2, 0);
  const hour = date.getHours();
  const minutes = `${date.getMinutes()}`.padStart(2, 0);
  return `${month}/${day}/${year}, ${hour}:${minutes}`;
}


const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  // Combine movements and dates | Creating new object inside arrow function
  const combinedMovsDates = acc.movements.map((mov, i) => ({
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));

  // Sort movements | Using sort() method
  // const movementsSort = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  if (sort) {
    combinedMovsDates.sort((a, b) => a.movement - b.movement);
  }





  combinedMovsDates.forEach(function (object, i) {
    const { movement, movementDate } = object;
    // Creating currennt date and time
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__date">${displayDate}</div>
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
  displayMovements(currentAccount);
  calcPrintBalance(currentAccount);
  calcDisplaySummary(currentAccount);
}

// Find() method
// Login into account using find() method
let currentAccount; // to save account information.

// !? Fake Always Logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

// Adding current date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = `${currentDate.getDate()}`.padStart(2, 0);
const hour = currentDate.getHours();
const minutes = currentDate.getMinutes();
labelDate.textContent = `${month}/${day}/${year}, ${hour}:${minutes}`;



btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  const inputUserName = inputLoginUsername.value.toLowerCase();
  const inputPin = Number(inputLoginPin.value);

  currentAccount = accounts.find(acc => acc.userName === inputUserName);

  if (currentAccount?.pin === inputPin) {
    // Display UI and Welcome Message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = '1';

    updateUI();

    inputLoginUsername.style.borderColor = '#fff';
    inputLoginPin.style.borderColor = '#fff';
    startLogOutTimer();
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
      currentAccount.movementsDates.push(new Date);
      receiverAccount.movementsDates.push(new Date);
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
      currentAccount.movementsDates.push(new Date);
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
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
})


// Log Out Timer
const startLogOutTimer = function () {
  let time = 10;
  const timer = setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = '0';
    }
  }, 1000)
}
startLogOutTimer();
















/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
