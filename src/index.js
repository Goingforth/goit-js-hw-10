import './css/styles.css';
import Notiflix from 'notiflix';

import fetchCountries from './js/fetchCountries';
import markupLineCountry from './js/markupLineCountry';
import itemCountryInfo from './js/itemCountryInfo';
import clearMarkup from './js/clearMarkup';

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
    checkInput(inFieldSearch.value.trim());
  }, DEBOUNCE_DELAY)
);

function checkInput(name) {
  clearMarkup(countryList, countryInfo);
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
    countryList.append(...markupLineCountry(data));
  } else {
    countryInfo.append(...itemCountryInfo(data));
  }
}
