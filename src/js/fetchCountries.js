import Notiflix from 'notiflix';
//import message404 from './message';
const BASE_URL = 'https://restcountries.com/v3.1/name/';
const fields = '?fields=name,capital,population,flags,languages';

const message404 = 'Oops, there is no country with that name';

export default function fetchCountries(name) {
  return (
    fetch(`${BASE_URL}${name}${fields}`)
      .then(response => {
        //   if (!response.ok) {
        //     throw new Error('bad bad bad');
        //   }
        //   return response.json();
        // })
        return response.ok
          ? response.json()
          : // : Promise.reject('Oops, there is no country with that name');
            Promise.reject(message404);
      })
      // .then(data => {
      //   console.log('`Это then');
      //   return data.json;
      // })
      .catch(error => {
        Notiflix.Notify.failure(error);
      })
  );
}
