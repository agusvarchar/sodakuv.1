// sodoku.js
document.addEventListener('DOMContentLoaded', () => {
    const solution = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

  const sudokuBoard = document.getElementById('sudoku-board');

    function createBoard() {
        sudokuBoard.innerHTML = '';
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const cell = document.createElement('input');
                cell.type = 'text';
                cell.dataset.row = i;
                cell.dataset.col = j;
                sudokuBoard.appendChild(cell);
            }
        }
    }

    // Define checkSolution in the global scope
    window.checkSolution = function() {
        const inputs = document.querySelectorAll('.sudoku-board input');
        let correct = true;

        inputs.forEach(input => {
            const row = input.dataset.row;
            const col = input.dataset.col;
            const value = Number(input.value);
            console.log(`Checking cell [${row}, ${col}]: ${value} (expected: ${solution[row][col]})`);
            if (value !== solution[row][col]) {
                correct = false;
            }
        });

        if (correct) {
            alert('Selamat');
        } else {
            alert('Coba lagi');
        }
    }

    createBoard();
});
