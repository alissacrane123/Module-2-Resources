document.addEventListener('DOMContentLoaded', () => {
  function randomNum(i) {
    return Math.floor(Math.random() * i);
  }

  const ul = document.querySelector('.your-worst-enemy');

  let strAll = '';
  for (let i = 0 ;i < 6; i++) {
    let randomNumber = randomNum(10);
    let str = `<li>${randomNumber}</li>`;
    strAll += str;
  }
  ul.innerHTML = strAll;

});