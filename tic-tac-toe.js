window.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('#board div');
  const status = document.getElementById('status');
  const newGameBtn = document.querySelector('.btn');
  let currentPlayer = 'X';

  // Exercise 1 - Add the 'square' class to all divs
  squares.forEach(square => {
    square.classList.add('square');
  });

  // Exercise 2 - Add X or O when clicked
  squares.forEach(square => {
    square.addEventListener('click', () => {
      if (!square.textContent && !status.classList.contains('you-won')) { 
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);

        // Check for a winner after each move
        if (checkWinner()) return;

        // Switch player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });

    // Exercise 3 - Hover effect
    square.addEventListener('mouseenter', () => {
      square.classList.add('hover');
    });

    square.addEventListener('mouseleave', () => {
      square.classList.remove('hover');
    });
  });

  // Exercise 4 - Check for the winner and update status
  function checkWinner() {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        squares[a].textContent &&
        squares[a].textContent === squares[b].textContent &&
        squares[a].textContent === squares[c].textContent
      ) {
        status.textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
        status.classList.add('you-won');
        return true;
      }
    }
    return false;
  }

  // Exercise 5 - New Game button
  newGameBtn.addEventListener('click', () => {
    squares.forEach(square => {
      square.textContent = '';
      square.classList.remove('X', 'O');
    });
    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    status.classList.remove('you-won');
    currentPlayer = 'X';
  });
});
