'use strict';

const buttons = document.querySelectorAll('.gallery__nav-link');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((b) => b.classList.remove('active'));
    button.classList.add('active');
  });
});
