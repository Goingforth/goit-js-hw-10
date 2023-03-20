import './css/styles.css';
import Notiflix from 'notiflix';

import fetchCountries from '../src/fetchCountries';

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const messageOver =
  'Too many matches found. Please enter a more specific name.';

const inFieldSearch = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const CountryInfo = document.querySelector('.country-info');

inFieldSearch.addEventListener(
  'input',
  debounce(() => {
    const valueSearch = inFieldSearch.value.trim();
    checkInput(valueSearch);
  }, DEBOUNCE_DELAY)
);

function checkInput(name) {
  if (name !== '') {
    //fetchCountries(name).then(data => checkAmountLands(data));
    fetchCountries(name).then(data => {
      checkAmountLands(data);

      //data.length ? checkAmountLands(data) : console.log('ERROR');

      //   if (data.hasOwnProperty('length')) {
      //     checkAmountLands(data);
      //   }
    });
  } else {
    clearMarkup();
  }
}

function checkAmountLands(data) {
  if (data.length > 10) {
    Notiflix.Notify.info(messageOver);
  } else if (data.length > 1 && data.length <= 10) {
    markupCountryList(data);
  } else {
    markupCountryInfo(data);
  }
}

function markupCountryList(data) {
  //const dog = JSON.parse(data);
  console.log(data.length);
  console.log('Create markup CountryList!!!');
  countryList.append(...itemsCountryList(data));
}
//

const itemsCountryList = data => {
  return data.map(item => {
    const newItem = document.createElement('li');
    // const liContent = item.name.official;
    //  newItem.classList.add(flags)
    newItem.style.listStyleImage = item.flags.svg;
    newItem.textContent = item.name.official;
    console.log(newItem);
    return newItem;
  });
};

function markupCountryInfo(data) {
  console.log('Create markup CountryInfo!!!');
}

function clearMarkup() {
  console.log('Clear markup!!!');
}
// const listIngredients = document.querySelector('#ingredients');

// const itemsFromIngredients = ingredients => {
//   return ingredients.map(ingredient => {
//     const newItem = document.createElement('li');
//     newItem.textContent = ingredient;
//     newItem.classList.add('item');
//     return newItem;
//   });
// };

// listIngredients.append(...itemsFromIngredients(ingredients));
