import './css/styles.css';
import Notiflix from 'notiflix';

import fetchCountries from './js/fetchCountries';
//import messageOver from './js/message';

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const messageOver =
  'Too many matches found. Please enter a more specific name.';

const inFieldSearch = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

inFieldSearch.addEventListener(
  'input',
  debounce(() => {
    const valueSearch = inFieldSearch.value.trim();
    checkInput(valueSearch);
  }, DEBOUNCE_DELAY)
);

function checkInput(name) {
  clearMarkup();
  if (name !== '') {
    fetchCountries(name).then(data => {
      checkAmountLands(data);
    });
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
  countryList.append(...itemsCountryList(data));
}

const itemsCountryList = data => {
  return data.map(item => {
    const newItem = document.createElement('li');
    const newImg = document.createElement('img');
    const newH = document.createElement('h4');
    newItem.append(newImg, newH);

    newItem.classList.add('country-item');
    newImg.src = item.flags.svg;
    newImg.alt = item.name.official;
    newImg.width = '50';
    newItem.value = item.name.official;
    newH.textContent = item.name.official;
    console.log(newItem);
    return newItem;
  });
};

function markupCountryInfo(data) {
  countryInfo.append(...itemCountryInfo(data));
}

const itemCountryInfo = data => {
  return data.map(item => {
    const contentDIV = document.createElement('ul');
    const newItem = document.createElement('li');
    const newImg = document.createElement('img');
    const newH = document.createElement('h3');
    newItem.append(newImg, newH);
    newItem.classList.add('country-item');
    newImg.src = item.flags.svg;
    newImg.alt = item.name.official;
    newImg.width = '50';
    newItem.value = item.name.official;
    newH.textContent = item.name.official;

    const itemCapital = document.createElement('li');
    const itemPopulation = document.createElement('li');
    const itemLanguages = document.createElement('li');

    itemCapital.textContent = `Capital : ${item.capital}`;
    itemPopulation.textContent = `Population : ${item.population}`;
    itemLanguages.textContent = 'Languages : ' + Object.values(item.languages);

    contentDIV.append(newItem, itemCapital, itemPopulation, itemLanguages);
    return contentDIV;
  });
};

function clearMarkup() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}
