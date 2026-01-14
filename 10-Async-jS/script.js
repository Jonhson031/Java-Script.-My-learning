'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
// ? Most code is Synchronous code, executed line by line.
// ? Asynchronous code is executed after a task that runs in 'background' finishes exectuction.


// ? AJAX stands for Asynchronous JavaScript And XML, but today it basically means:
// ? "Loading data from a server without reloading the whole page."

// ? API - in Web Dev API is usually a URL you send a request to and get data back.


// ? 1. XML
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     const html = `
//       <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   })
// }
// getCountryData('Ukraine');
// getCountryData('USA');
// getCountryData('AU');
const renderCountry = function (data, neighbor = '') {
  const html = `
      <article class="country ${neighbor}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
}

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbor country (2)
//     const neighbor = data.borders?.[0];
//     if (!neighbor) return;

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`);
//     request2.send();
//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       // Render country 1
//       renderCountry(data2, 'neighbour');
//     })
//   })
// }

// getCountryAndNeighbor('USA');

// ? 2. Promises and Fetch API

const request = fetch('https://countries-api-836d.onrender.com/countries/name/USA');
console.log(request);

// ? Promise is like container for future value
/* A Promise can be:
  - pending (still working)
  - fulfilled (resolved successfully)
  - rejected (error) */

const renderErr = function (message) {
  countriesContainer.insertAdjacentHTML('beforeend', message);
}

// const getCountryData = function (country) {
//   fetch(`https://countries-api-836d.onrender.com/countries/name/${country}`)
//     .then(response => {
//       console.log(response)
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`)
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0])
//       const neighbor = data[0].borders?.[0];
//       if (!neighbor) return;
//       // Country 2
//       return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`)
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data, 'neighbour')
//       const neighbor = data.borders?.[0];
//       if (!neighbor) return;
//       // Country 3
//       return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`)
//     })
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data, 'neighbour')
//       const neighbor = data.borders?.[1];
//       if (!neighbor) return;
//       // Country 4
//       return fetch(`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`)
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => renderErr(`Somethind went wrong ${err.message}. Try again!`)) // catch only calls when promise is rejected
//     .finally(() => { // finally works always, no matter the result.
//       countriesContainer.style.opacity = 1;
//     })
// }

const getJSON = function (url, errMessage = 'Something went wrong') {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${errMessage} ${response.status}`)
      }
      return response.json();
    })
}

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://countries-api-836d.onrender.com/countries/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];
      if (!neighbor) throw new Error('Neighbor not found');
      // Country 2
      return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`, 'Neighbor not found');
    })
    .then(data => {
      if (!data) return;
      renderCountry(data, 'neighbour');
      const neighbor = data.borders?.[0];
      if (!neighbor) throw new Error('Neighbor not found');
      // Country 3
      return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`, 'Neighbor not found');
    })
    .then(data => {
      if (!data) return;
      renderCountry(data, 'neighbour');
      const neighbor = data.borders?.[1];
      if (!neighbor) throw new Error('Neighbor not found');
      // Country 4
      return getJSON(`https://countries-api-836d.onrender.com/countries/alpha/${neighbor}`, 'Neighbor not found');
    })
    .then(data => {
      if (!data) return;
      renderCountry(data, 'neighbour');
    })
    .catch(err => renderErr(`Something went wrong ${err.message}. Try again!`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}


// btn.addEventListener('click', () => getCountryData('AU'));

// ? Handling errors.
// Fetch only rejects on network errors.
// Catch only calls when promise is rejected

// ? Throwing Errors Manually
// We can check and show erorr manually using // ? throw new Error('New error found');
// getCountryData('vfvfv')

// ? Coding Challenge #1
const whereAmI = function (lat, lng) {
  fetch(`https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=bdc_ddbb798715584faf9a4df3cc6cfdba6c`)
    .then(response => {
      if (!response.ok) throw new Error(`Wrong GPS coordinates. ${response.status}`)
      return response.json()
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryCode}`)
      return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.countryCode}`)
    })
    .then(response => {
      if (!response.ok) throw new Error(`Country not found. ${response.status}`)
      return response.json()
    })
    .then(data => {
      renderCountry(data.at(-1));
    })
    .catch(err => renderErr(`Something went wrong: ${err.message}. Try again!`))
    .finally(() => { // finally works always, no matter the result.
      countriesContainer.style.opacity = 1;
    })
}
btn.addEventListener('click', () => {
  whereAmI(42.02194, -88.14158);
  whereAmI(52.508, 13.381);
  whereAmI(19.037, 72.873);
  // whereAmI(-30003.933, 10008.474); // error
});

// ? Asynchronous Behind the Scenes: The Event Loop
// ? check word document for explanation
console.log("1"); // runs first (1)
setTimeout(() => console.log("2"), 0); // runs after microtask (4)
Promise.resolve().then(() => console.log("3")); // runs after call stack is cleaned (3)
console.log("4"); // runs second (2)


// ? Builiding a simple Promise
// const lottelyPromise = new Promise(function (resolve, reject) { // promise is speacial kind of object
//   console.log('Lottery draw is happening');
//   setTimeout(() => {
//     if (Math.random() <= 0.50) {
//       resolve('You win 🤑'); // resolve - when succeseds
//     } else {
//       reject(new Error('You lost your money 😂')); // reject - when fails
//     }
//   }, 2000)
// })

// lottelyPromise
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
// wait(3).then(() => {
//   console.log('I waited for 3 seconds')
//   return wait(1);
// }).then(() => console.log('I waited for one more second'))

// ? Promisifying the Geolocation API
// Promisifying = taking a function that normally uses callbacks and converting it into a Promise-based function.
function getPosition() { // Here we wrapping this web API
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}
getPosition()
  .then(pos => {
    console.log(pos)
    whereAmI(pos.coords.latitude, pos.coords.longitude);
  })
  .catch(err => console.error(err));


// ? Coding Challenge #2
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', () => {
      document.querySelector('.images').appendChild(img);
      resolve(img)
    })
    img.addEventListener('error', () => reject(new Error('Image not found')))
    // return img
  })
}
let currentImg;
createImage('../img/img-1.jpg')
  .then(img => {
    console.log('Image 1 loaded')
    currentImg = img;
    return wait(2)
  })
  .then(() => {
    currentImg.style.display = 'none'
    return createImage('../img/img-2.jpg')
  })
  .then(img => {
    currentImg = img;
    return wait(2)
  })
  .then(() => {
    currentImg.style.display = 'none'
    return createImage('../img/img-3.jpg')
  })
  .then(img => {
    currentImg = img;
    return wait(2)
  })
  .catch(err => console.error(err))

// ? Async / Await
// Use Async / Await when you: consuming promises, Fetch, database, timers, async tasks
// Don't use when you create promise manually, Wrap callback API
// Async / Await is basically a synthetic sugar, and behind the scenes it still uses .then
const whereAmIAwait = async function (lat, lng) {
  try {
    // Reverse GeoCoding API
    const res = await fetch(`https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=bdc_ddbb798715584faf9a4df3cc6cfdba6c`);
    console.log(res);

    // Check for errors
    if (!res.ok) throw new Error(`Wrong GPS coordinates. ${res.status}`);

    // Get data from Reverse Geo Coding API
    const data = await res.json();

    // Country Data API
    const res2 = await fetch(`https://countries-api-836d.onrender.com/countries/name/${data.countryCode}`);

    // Check for errors from second API
    if (!res2.ok) throw new Error(`Country not found. ${res2.status}`);

    // Get country data
    const data2 = await res2.json();
    renderCountry(data2.at(-1));
    return (`You are in ${data.city}, ${data.countryCode}`)
  } catch (err) {
    renderErr(`Something went wrong: ${err.message}. Try again!`)
    // Here we re throwing this error:
    throw err;
  } finally {
    countriesContainer.style.opacity = 1;
  }
}
// ? Returning values from ASYNC function
// const city = whereAmI(42.02194, -88.14158) // gonna return promise
whereAmIAwait(42.02194, -88.14158)
//   .then(city => console.log(city))
//   .catch(err => console.log(err)); // not gonna work, we need to re throw error inside our async function

// It's not a really good practice to combine async and .then methods
// To fix it:

// (async function () {
//   try {
//     const city = await whereAmIAwait(42.02194, -88.14158);
//     console.log(city);
//   } catch {
//     console.log(err);
//   }
//   console.log('Finished getting location')
// })();



// const whereAmI = function (lat, lng) {
//   fetch(`https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lng}&localityLanguage=en&key=bdc_ddbb798715584faf9a4df3cc6cfdba6c`)
//     .then(response => {
//       if (!response.ok) throw new Error(`Wrong GPS coordinates. ${response.status}`)
//       return response.json()
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.countryCode}`)
//       return fetch(`https://countries-api-836d.onrender.com/countries/name/${data.countryCode}`)
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found. ${response.status}`)
//       return response.json()
//     })
//     .then(data => {
//       renderCountry(data.at(-1));
//     })
//     .catch(err => renderErr(`Something went wrong: ${err.message}. Try again!`))
//     .finally(() => { // finally works always, no matter the result.
//       countriesContainer.style.opacity = 1;
//     })
// }

// ? Running Promises in parallel
// Parallel means start multiple async operations at the same time, then wait for all of them together.
// If ANY promise rejects, the whole thing rejects:
const loadCountries = async function () {
  try {
    const [gb, canada, mexico] = await Promise.all([
      getJSON('https://countries-api-836d.onrender.com/countries/name/gb'),
      getJSON('https://countries-api-836d.onrender.com/countries/name/canada'),
      getJSON('https://countries-api-836d.onrender.com/countries/name/mexico')
    ]);

    console.log(gb[0], canada[0], mexico[0]);
  } catch (err) {
    console.error(err);
  }
};

loadCountries();

/* ✅When SHOULD you run promises in parallel?
✔ Independent API calls
✔ Loading multiple images
✔ Fetching dashboard data
✔ Improving performance
❌ When NOT to
❌ One request depends on the result of another
❌ You need strict order */

// If async tasks don’t depend on each other → use Promise.all()

// ? Other Promise Combinators: race, allSettled and any
// 1. Promise.race
// Returns the first promise that settles (that loads first);
// ✅ Use cases: Time Outs, Fasted API wins, Cancel slow requests
(async () => {
  const res = await Promise.race([
    getJSON('https://countries-api-836d.onrender.com/countries/name/italy'),
    getJSON('https://countries-api-836d.onrender.com/countries/name/egypt'),
    getJSON('https://countries-api-836d.onrender.com/countries/name/ukraine')
  ])
  console.log(res);
})()

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
};
Promise.race([
  getJSON('https://countries-api-836d.onrender.com/countries/name/poland'),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// ? Promise.all and Promise.race are most important promise combinators.

// Promise.allSettled()
// Waits for ALL promises to finish, no matter if they succeed or fail
// ✅ Use cases: Analytics / widgets / optional features


// ? Coding Challenge #3
const loadNPause = async function () {
  try {
    // Image 1
    let imgAsync = await createImage('../img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    imgAsync.style.display = 'none';

    // Image 2
    imgAsync = await createImage('../img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    imgAsync.style.display = 'none';

    // Image 3
    imgAsync = await createImage('../img/img-3.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    imgAsync.style.display = 'none';

  } catch (err) {
    console.log(err)
  }
}
// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img))

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl)
    imgsEl.forEach(img => img.classList.add('parallel'))
  } catch (err) {
    console.log(err);
  }
}
loadAll(['../img/img-1.jpg', '../img/img-2.jpg', '../img/img-3.jpg'])
