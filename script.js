'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////////////////////////////
const getCountryData = function (countryName) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();
  // console.log(request.responseText);
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    //   cons data = JSON.parse(this.responseText)[0]; - тоже что и выше только в старом формате
    const currencies = data.currencies;
    const currensyName = Object.values(currencies)[0].name;
    const currensySymbol = Object.values(currencies)[0].symbol;
    const languages = data.languages;
    const firstLanguage = Object.values(languages)[0];
    console.log(data);
    const html = `
    <article class="country">
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
  });
};

getCountryData('ukraine');
