// const colors = ['green', 'red', 'rgb(133, 122, 200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');  // span

btn.addEventListener('click', () => {  // zmiana background color
  // get random number between 0 - 255
  const r = getRandomNumber();
  const g = getRandomNumber();
  const b = getRandomNumber();
  const rgb = `rgb(${r}, ${g}, ${b})`;
  console.log(r);
  console.log(g);
  console.log(b);

  document.body.style.backgroundColor = rgb;  // wbudowane property style .backgroundColor odczytuje stringa jako kolor
  color.textContent = rgb;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
