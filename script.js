'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// // //////////////////////////////////////////////////////
const displayCountry = function (data, className = '') {
  const currencies = data.currencies;
  const currensyName = Object.values(currencies)[0].name;
  const currensySymbol = Object.values(currencies)[0].symbol;
  const languages = data.languages;
  const firstLanguage = Object.values(languages)[0];
  console.log(data);
  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
        +data.population / 1000000
      ).toFixed(1)} миллионов</p>
      <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
      <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const displayError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  countriesContainer.style.opacity = 1;
};

const getDataAndConvertToJSON = function (
  url,
  errorMessage = 'Что-то пошло не так'
) {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(`${errorMessage} Страна не найдена ${response.status}`);
    return response.json();
  });
};
// const getCountryData = function (countryName) {
//   getDataAndConvertToJSON(
//     `https://restcountries.com/v3.1/name/${countryName}`,
//     'Страна не найдена'
//   )
//     .then(data => {
//       displayCountry(data[0]);

//       if (!data[0].borders) throw new Error('Соседних стран не найденно');

//       const firstNeighbour = data[0].borders[0];
//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/alpha/${firstNeighbour}`,
//         'Страна не найдена'
//       );
//     })
//     .then(data => displayCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.error(`${e} 🤷‍♂️`);
//       displayError(`Что-то пошло не так 🤷‍♂️: ${e.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// // getCountryData('ukraine');
// // getCountryData('german');
// btn.addEventListener('click', function () {
//   getCountryData('ukraine');
// });
/////////////////////////////
/////////////////////////////////////////////////

// // const getCountryData = function (countryName) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
// //   request.send();
// //   // console.log(request.responseText);
// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     //   cons data = JSON.parse(this.responseText)[0]; - тоже что и выше только в старом формате
// //     const currencies = data.currencies;
// //     const currensyName = Object.values(currencies)[0].name;
// //     const currensySymbol = Object.values(currencies)[0].symbol;
// //     const languages = data.languages;
// //     const firstLanguage = Object.values(languages)[0];
// //     console.log(data);
// //     const html = `
// //     <article class="country">
// //     <img class="country__img" src="${data.flags.svg}" />
// //     <div class="country__data">
// //       <h3 class="country__name">${data.name.common}</h3>
// //       <h4 class="country__region">${data.region}</h4>
// //       <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
// //         +data.population / 1000000
// //       ).toFixed(1)} миллионов</p>
// //       <p class="country__row"><span>🗣️</span>${firstLanguage}</p>
// //       <p class="country__row"><span>💰</span>${currensySymbol} ${currensyName}</p>
// //     </div>
// //   </article>`;
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //     countriesContainer.style.opacity = 1;
// //   });
// // };

// const getCountryAndBorderCountries = function (countryName) {
//   // Вызов AJAX для страны
//   const request1 = new XMLHttpRequest();
//   request1.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request1.send();
//   // console.log(request.responseText);
//   request1.addEventListener('load', function () {
//     const [data1] = JSON.parse(this.responseText);
//     //   cons data = JSON.parse(this.responseText)[0]; - тоже что и выше только в старом формате
//     // Отображение страны
//     displayCountry(data1);
//     // Получаем соседние страны
//     const [firstNeighbour] = data1.borders;
//     if (!firstNeighbour) return;

//     // Вызов AJAX для получения данных о первой соседней стране
//     const request2 = new XMLHttpRequest();
//     request2.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha/${firstNeighbour}`
//     );
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       displayCountry(data2, 'neighbour');
//     });
//   });
// };
// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
//   request.send();
// const request = fetch('https://restcountries.com/v3.1/name/ukraine');
// console.log(request);
// const getCountryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       displayCountry(data[0]);
//     });
// };
// const displayError = function (message) {
//   countriesContainer.insertAdjacentText('beforeend', message);
//   countriesContainer.style.opacity = 1;
// };

// const getDataAndConvertToJSON = function (
//   url,
//   errorMessage = 'Что-то пошло не так'
// ) {
//   return fetch(url).then(response => {
//     if (!response.ok)
//       throw new Error(`${errorMessage} Страна не найдена ${response.status}`);
//     return response.json();
//   });
// };
// const getCountryData = function (countryName) {
//   fetch(`https://restcountries.com/v3.1/name/${countryName}`)
//     .then(
//       response => {
//         // response.json();
//         if (!response.ok)
//           throw new Error(`Страна не найдена ${response.status}`);
//         return response.json();
//       }
//       // e => alert(e)
//     )
//     .then(data => {
//       displayCountry(data[0]);
//       const firstNeighbour = data[0].borders[0];
//       if (!firstNeighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Страна не найдена ${response.status}`);

//       return response.json();
//     })
//     .then(data => displayCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.error(`${e} 🤷‍♂️`);
//       displayError(`Что-то пошло не так 🤷‍♂️: ${e.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// const getCountryData = function (countryName) {
//   getDataAndConvertToJSON(
//     `https://restcountries.com/v3.1/name/${countryName}`,
//     'Страна не найдена'
//   )
//     .then(data => {
//       displayCountry(data[0]);

//       if (!data[0].borders) throw new Error('Соседних стран не найденно');

//       const firstNeighbour = data[0].borders[0];
//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/alpha/${firstNeighbour}`,
//         'Страна не найдена'
//       );
//     })
//     .then(data => displayCountry(data[0], 'neighbour'))
//     .catch(e => {
//       console.error(`${e} 🤷‍♂️`);
//       displayError(`Что-то пошло не так 🤷‍♂️: ${e.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// // getCountryData('ukraine');
// // getCountryData('german');
// btn.addEventListener('click', function () {
//   getCountryData('japan');
// });

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Task-1

// const displayCountryByGPS = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `Проблема с геокодированием (ошибка ${response.status})`
//         );
//       // console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`,
//         'Страна не найдена'
//       );
//     })
//     .then(data => displayCountry(data[0]))
//     .catch(e => {
//       console.error(`${e} 🤷‍♂️`);
//       displayError(`Что-то пошло не так 🤷‍♂️: ${e.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
//     .catch(e => console.error(`${e.message} 🐱‍🐉`));
// };
// displayCountryByGPS(35.756, 139.256);

///Event Loop
//Пример работы с циклом событий
// console.log('Начало теста');
// setTimeout(() => console.log('Таймер 0 секунд'), 0);
// Promise.resolve('Выполненное promise 1').then(result => console.log(result));
// Promise.resolve('Выполнение promise 2').then(result => {
//   for (let i = 0; i < 100000000; i++) {

//   }
//   console.log(result);
// });
// console.log('Конец теста');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Проиходит розыгрыш лотереи');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('Вы выиграли!');
//     } else {
//       reject('Вы проиграли!');
//     }
//   }, 3000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//Промисофикацию, Promisifying функции setTimeout()
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// wait(3)
//   .then(() => {
//     console.log('Длительность ожидания 3 секунды');
//     return wait(2);
//   })
//   .then(() => console.log('Длительность ожидания 2 секунды'));

// wait(1)
//   .then(() => {
//     console.log('1 second');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second');
//   });

// Promise.resolve('Resolved!').then(res => console.log(res));
// Promise.reject(new Error('Rejected!')).catch(e => console.error(e));

//Промисификация API Геолокации

// const getUserPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   e => reject(e)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getUserPosition()
// //   .then(pos => console.log(pos))
// //   .catch(e => console.error(e));

// const displayUserCountry = function () {
//   getUserPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//       return;
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `Проблема с геокодированием (ошибка ${response.status})`
//         );
//       // console.log(response);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return getDataAndConvertToJSON(
//         `https://restcountries.com/v3.1/name/${data.country.toLowerCase()}`,
//         'Страна не найдена'
//       );
//     })
//     .then(data => displayCountry(data[0]))
//     .catch(e => {
//       console.error(`${e} 🤷‍♂️`);
//       displayError(`Что-то пошло не так 🤷‍♂️: ${e.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     })
//     .catch(e => console.error(`${e.message} 🐱‍🐉`));
// };
// // displayCountryByGPS(35.756, 139.256);
// displayUserCountry();
/////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// const getUserPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// const getCountryData = async function () {
//   try {
//     const userPosition = await getUserPosition();
//     const { latitude: lat, longitude: lng } = userPosition.coords;
//     const geocodingResponse = fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json`
//     );
//     if (!geocodingResponse.ok)
//       throw new Error('Проблема с извлечением местоположения');
//     const geocodingData = await geocodingResponse.json();
//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${geocodingData.country.toLowerCase()}`
//     );
//     if (!response.ok) throw new Error('Проблема с получение страны');
//     const data = await response.json();
//     console.log(response);
//     displayCountry(data[0]);

//     // fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(response =>
//     //   console.log(response)
//     // );
//   } catch (e) {
//     console.log(`${e} 😎`);
//     displayError(`Что то пошло не так ${e.message}`);
//     //Отклоняем promise возвращаемое из асинхронной функции
//     throw e;
//   }
// };

// getCountryData();
// console.log('Синхронный код');

// getCountryData()
//   .then(place => console.log(`2 ${place}`))
//   .catch(e => console.error(`2 ${e.message}`))
//   .finally(() => console.log(`3 получили местоположение`));

// (async function () {
//   try {
//     const place = await getCountryData();
//     console.log(`2 ${place}`);
//   } catch (e) {
//     console.error(`2 ${e.message}`);
//   }
//   console.log(`3 Получили местоположение`);
// })();
// try {
//   let x = 2;
//   const y = 3;
//   y = 10;
// } catch (e) {
//   alert(e.message);
// }

const print3CountriesCapitals = async function (country1, country2, country3) {
  try {
    // const [country1Data] = await getDataAndConvertToJSON(
    //   `https://restcountries.com/v3.1/name/${country1}`
    // );
    // const [country2Data] = await getDataAndConvertToJSON(
    //   `https://restcountries.com/v3.1/name/${country2}`
    // );
    // const [country3Data] = await getDataAndConvertToJSON(
    //   `https://restcountries.com/v3.1/name/${country3}`
    // );
    // console.log([
    //   country1Data.capital,
    //   country2Data.capital,
    //   country3Data.capital,
    // ]);
    const countriesData = await Promise.all([
      getDataAndConvertToJSON(
        `https://restcountries.com/v3.1/name/${country1}`
      ),
      getDataAndConvertToJSON(
        `https://restcountries.com/v3.1/name/${country2}`
      ),
      getDataAndConvertToJSON(
        `https://restcountries.com/v3.1/name/${country3}`
      ),
    ]);
    console.log(countriesData.map(countryData => countryData[0].capital));
  } catch (e) {
    console.error(e);
  }
};

print3CountriesCapitals('ukraine', 'usa', 'canada');

///////////////////////////////////////////////////////////////////////////
//race, allSetteled & any
// Promise.race()
(async function () {
  const response = await Promise.race([
    getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/france`),
    getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/italy`),
    getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/spain`),
  ]);
  console.log(response[0]);
});

const timeout = function (seconds) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Запрос превысил допустимое время'));
    }, seconds * 1000);
  });
};

Promise.race([
  getDataAndConvertToJSON(`https://restcountries.com/v3.1/name/spain`),
  timeout(5),
])
  .then(data => console.log(data[0]))
  .catch(e => console.error(e));

//Promise.allSettled()
// Promise.allSettled([
//   Promise.resolve('Выполнено'),
//   Promise.reject('Отклонено'),
//   Promise.resolve('Выполнено'),
// ]).then(data => console.log(data));

// Promise.all([
//   Promise.resolve('Выполнено'),
//   Promise.reject('Отклонено'),
//   Promise.resolve('Выполнено'),
// ])
//   .then(data => console.log(data))
//   .catch(e => console.error(e));

//Promise.any() - первый выполненый
// Promise.any([
//   Promise.resolve('Выполнено'),
//   Promise.reject('Отклонено'),
//   Promise.resolve('Выполнено'),
// ])
//   .then(data => console.log(data))
//   .catch(e => console.error(e));

//Task 3
// В этом задании вам нужно будет создать функциональность загрузки изображений
// 1. Создайте функцию createImageElement(), которая принимает imagePath как входной параметр. Эта функция возвращает promise, которое создает новый HTML элемент img (используйте document.createElement ('img')) и устанавливает атрибут src для предоставленного пути к изображению.
// 2. Когда загрузка изображения будет завершена, добавьте его к элементу DOM с классом images и сделайте promise выполненным. Значение выполненного promise должно быть самим элементом img. В случае, если при загрузке изображения произошла ошибка (прослушайте событие error), отклоните promise.
// 3. Если эта часть слишком непонятна для вас, просто просмотрите первую часть решения в следующем видео.
// 4. Произведите потребление promise, используя then(), а также добавьте обработчик ошибок.
// 5. После загрузки изображения приостановите выполнение на 2 секунды, используя функцию wait(), которую мы создали ранее.
// 6. По истечении 2 секунд спрячьте текущее изображение (установите для CSS свойства display значение none) и загрузите второе изображение (Подсказка: используйте элемент img из promise, возвращенного из createImageElement(), чтобы скрыть текущее изображение. Для этого вам понадобится глобальная переменная)
// 7. После загрузки второго изображения снова приостановите выполнение на 2 секунды.
// 8. По истечении 2 секунд спрячьте текущее изображение.
// Тестовые данные:
// Изображения в папке img. Протестируйте обработчик ошибок, указав неверный путь к изображению. Установите скорость интернета Fast 3G на вкладке Network в инструментах разработчика, иначе изображения будут загружаться слишком быстро.

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// let currentImage;
const imageContainer = document.querySelector('.images');

const createImageElement = function (imagePath) {
  return new Promise(function (reselve, reject) {
    const imgEl = document.createElement('img');
    imgEl.src = imagePath;

    imgEl.addEventListener('load', function () {
      imageContainer.append(imgEl);
      reselve(imgEl);
    });

    imgEl.addEventListener('error', function () {
      reject(new Error('Изображение не найдено'));
    });
  });
};

// createImageElement('img/image1.jpg')
//   .then(image => {
//     currentImage = image;
//     console.log('first img');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImageElement('img/image2.jpg');
//   })
//   .then(image => {
//     currentImage = image;
//     console.log('second img');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImageElement('img/image3.jpg');
//   })
//   .then(image => {
//     currentImage = image;
//     console.log('third image');
//   })
//   .catch(e => console.error(e));

const loadAndWait = async function () {
  try {
    let image = await createImageElement('img/image1.jpg');
    console.log('Первое изображение загруженно');
    await wait(2);
    image.style.display = 'none';

    image = await createImageElement('img/image2.jpg');
    console.log('Первое изображение загруженно');
    await wait(2);
    image.style.display = 'none';

    image = await createImageElement('img/image3.jpg');
    console.log('Первое изображение загруженно');
    await wait(2);
    image.style.display = 'none';
  } catch (e) {
    console.error(e);
  }
};

// loadAndWait();

const loadAllImages = async function (imagePathsArray) {
  try {
    const images = imagePathsArray.map(
      async imagePath => await createImageElement(imagePath)
    );
    console.log(images);
    const imageElements = await Promise.all(images);
    console.log(imageElements);
    imageElements.forEach(img => img.classList.add('parallel'));
  } catch (e) {
    console.error(e);
  }
};
loadAllImages(['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg']);
