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

function checkWinner() {
  const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8], // rows
    [0,3,6], [1,4,7], [2,5,8], // columns
    [0,4,8], [2,4,6]           // diagonals
  ];
  
  const squares = document.querySelectorAll('#board div');
  const status = document.getElementById('status');

  for (let combo of winningCombos) {
    const [a,b,c] = combo;
    if (squares[a].textContent && 
        squares[a].textContent === squares[b].textContent &&
        squares[a].textContent === squares[c].textContent) {
      status.textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
      status.classList.add('you-won');
      return true;
    }
  }
  return false;
}

const newGameBtn = document.querySelector('.btn');
newGameBtn.addEventListener('click', () => {
  squares.forEach(square => {
    square.textContent = '';
    square.classList.remove('X', 'O');
  });
  document.getElementById('status').textContent = 'Move your mouse over a square and click to play an X or an O.';
  document.getElementById('status').classList.remove('you-won');
  currentPlayer = 'X';
});
