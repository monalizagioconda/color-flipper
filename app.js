const colors = ['green', 'red', 'rgb(133, 122, 200)', '#f15025'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');  // span

btn.addEventListener('click', () => {  // zmiana background color
  // get random number between 0 - 3
  const randomNumber = getRandomNUmber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];  // wbudowane property style .backgroundColor odczytuje stringa pod indexem [x] jako kolor
  color.textContent = colors[randomNumber];
});

function getRandomNUmber() {
  return Math.floor(Math.random() * colors.length);
}
