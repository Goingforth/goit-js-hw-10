import './css/styles.css';
import Notiflix from 'notiflix';
import fetchCountries from '../src/fetchCountries';

var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const inFieldSearch = document.querySelector('input#search-box');

inFieldSearch.addEventListener(
  'input',
  debounce(() => {
    const valueSearch = inFieldSearch.value.trim();
    checkInput(valueSearch);
  }, DEBOUNCE_DELAY)
);

function checkInput(name) {
  if (name !== '') {
    fetchCountries(name);
  } else {
    console.log('Clear markup!!!');
  }
}
