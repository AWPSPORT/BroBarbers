const button = document.querySelector('.nav-button')

button.addEventListener('click', () => {
  button.classList.toggle('active')
  button.setAttribute('aria-expended', button.classList.contains('active') ? 'true': 'false')
});
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
});