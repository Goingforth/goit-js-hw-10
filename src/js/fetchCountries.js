import Notiflix from 'notiflix';
import { message404 } from './message';

const BASE_URL = 'https://restcountries.com/v3.1/name/';
const fields = '?fields=name,capital,population,flags,languages';

export default function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}${fields}`)
    .then(response => {
      return response.ok ? response.json() : Promise.reject(message404());
    })
    .catch(error => {
      Notiflix.Notify.failure(error);
    });
}
