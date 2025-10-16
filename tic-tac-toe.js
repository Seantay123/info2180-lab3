window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  
  // Add the 'square' class to all divs
  squares.forEach(square => {
    square.classList.add('square');
  });
});
