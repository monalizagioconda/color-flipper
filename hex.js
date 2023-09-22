const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];  // system szesnastkowy, A reprezentuje 10, B-11, C-12, D-13, E-14, F-15
 // #f15025  -> hasztag + 6 values

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  let hexColor = '#';  // ponieważ jest tu string - kolejne liczby nie będą sie dodawały tylko dopisywały
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}


