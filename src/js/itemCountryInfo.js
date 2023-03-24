import markupLineCountry from './markupLineCountry';

export default function itemCountryInfo(data) {
  return data.map(item => {
    const contentDIV = document.createElement('ul');

    const newItem = document.createElement('li');
    newItem.append(...markupLineCountry(data));

    newItem.classList.add('countryItemSize');

    const itemCapital = document.createElement('li');
    const itemPopulation = document.createElement('li');
    const itemLanguages = document.createElement('li');

    const languages = Object.values(item.languages);

    itemCapital.innerHTML = `<span class="nameItem">Capital :</span> <span class="contentItem">${item.capital}</span> `;
    itemPopulation.innerHTML = `<span class="nameItem">Population :</span> <span class="contentItem">${item.population}</span> `;
    itemLanguages.innerHTML = `<span class="nameItem">Languages :</span> <span class="contentItem">${languages}</span> `;

    contentDIV.append(newItem, itemCapital, itemPopulation, itemLanguages);

    return contentDIV;
  });
}
