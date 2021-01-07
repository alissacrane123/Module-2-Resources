document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('h1');
  header.setAttribute('id', 'sleeping-giant');
  header.innerText = 'Jell-O, Burled!';
  console.log(header);
  document.body.appendChild(header);
});