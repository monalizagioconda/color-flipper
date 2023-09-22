const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  
  const r = getRandomNumber();
  const g = getRandomNumber();
  const b = getRandomNumber();
  const rgb = `rgb(${r}, ${g}, ${b})`;
  

  document.body.style.backgroundColor = rgb;
  color.textContent = rgb;
});

// get random number between 0 - 255
function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
