document.addEventListener('DOMContentLoaded', () => {
  const ul = document.querySelector('.your-best-friend');
  const listElements = ul.children;

  for (const element of listElements) {
    console.log(element.innerText);
  }
});


