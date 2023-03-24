export default function clearMarkup() {
  for (const argument of arguments) {
    argument.innerHTML = '';
  }
}
