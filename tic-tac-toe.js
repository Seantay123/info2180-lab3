window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  
  // Add the 'square' class to all divs
  squares.forEach(square => {
    square.classList.add('square');
  });
});

let currentPlayer = 'X';
const squares = document.querySelectorAll('#board div');

squares.forEach(square => {
  square.addEventListener('click', () => {
    if (!square.textContent) { // only if empty
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      // Switch player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

squares.forEach(square => {
  square.addEventListener('mouseenter', () => {
    square.classList.add('hover');
  });
  square.addEventListener('mouseleave', () => {
    square.classList.remove('hover');
  });
});
