export default function markupLineCountry(data) {
  return data.map(item => {
    const newItem = document.createElement('li');
    const newImg = document.createElement('img');
    const newH = document.createElement('h4');
    newItem.append(newImg, newH);

    newItem.classList.add('country-item');
    newImg.src = item.flags.svg;
    newImg.alt = item.name.official;
    newItem.value = item.name.official;
    newH.textContent = item.name.official;

    return newItem;
  });
}
