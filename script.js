//factory function for players
const player = (name, marker) => ({ name, marker });

//making two players
const player1 = player('Player One', 'X');
const player2 = player('Player Two', 'O');

//first iife for playGame
const playGame = (() => {
    const board = Array.from(document.getElementsByClassName('box'));
    let count = 0;

    const changeColor = (e) => {
        const targetIndex = e.target.id;
        console.log(targetIndex);
        if (board[targetIndex].innerText === '') {
            if (count % 2 == 0) {
                board[targetIndex].innerText = player1.marker;
            }
            if (count % 2 != 0) {
                board[targetIndex].innerText = player2.marker;
            }
        count++;
        } 
        else {
            console.log('Box is already marked.');
        }
        console.log(board[0].innerText);
    };

    const checkWinner = () => {
        const winner = document.getElementById('winner');
        if (board[0].innerText === board[1].innerText && board[1].innerText === board[2].innerText && board[0].innerText !== '') {
            if (board[0].innerText === player1.marker) {
                winner.innerText = `${player1.name} wins!`;
            }
            if (board[0].innerText === player2.marker) {
                winner.innerText = `${player2.name} wins!`;
            }
        }
        if (board[0].innerText === board[4].innerText && board[4].innerText === board[8].innerText && board[0].innerText !== '') {
            if (board[0].innerText === player1.marker) {
                winner.innerText = `${player1.name} wins!`;
            }
            if (board[0].innerText === player2.marker) {
                winner.innerText = `${player2.name} wins!`;
            }
        }
        if (board[0].innerText === board[3].innerText && board[3].innerText === board[6].innerText && board[0].innerText !== '') {
            if (board[0].innerText === player1.marker) {
                winner.innerText = `${player1.name} wins!`;
            }
            if (board[0].innerText === player2.marker) {
                winner.innerText = `${player2.name} wins!`;
            }
        }
        if (board[1].innerText === board[4].innerText && board[4].innerText === board[7].innerText && board[1].innerText !== '') {
            if (board[1].innerText === player1.marker) {
                winner.innerText = `${player1.name} wins!`;
            }
            if (board[1].innerText === player2.marker) {
                winner.innerText = `${player2.name} wins!`;
            }
        }
        if (board[2].innerText === board[5].innerText && board[5].innerText === board[8].innerText && board[2].innerText !== '') {
            if (board[2].innerText === player1.marker) {
                winner.innerText = `${player1.name} wins!`;
            }
            if (board[2].innerText === player2.marker) {
                winner.innerText = `${player2.name} wins!`;
            }
        }
        if (board[3].innerText === board[4].innerText && board[4].innerText === board[5].innerText && board[3].innerText !== '') {
            if (board[3].innerText === player1.marker) {
                winner.innerText = `${player1.name} wins!`;
            }
            if (board[3].innerText === player2.marker) {
                winner.innerText = `${player2.name} wins!`;
            }
        }
        if (board[6].innerText === board[7].innerText && board[7].innerText === board[8].innerText && board[8].innerText !== '') {
            if (board[6].innerText === player1.marker) {
                winner.innerText = `${player1.name} wins!`;
            }
            if (board[6].innerText === player2.marker) {
                winner.innerText = `${player2.name} wins!`;
            }
        }
        if (board[6].innerText === board[4].innerText && board[4].innerText === board[2].innerText && board[2].innerText !== '') {
            if (board[6].innerText === player1.marker) {
                winner.innerText = `${player1.name} wins!`;
            }
            if (board[6].innerText === player2.marker) {
                winner.innerText = `${player2.name} wins!`;
            }
        }
        return;
        console.log(winner.innerText)
    }

    return { checkWinner, changeColor, board };

})();


//second iife for render
const render = (() => {
    const { checkWinner, changeColor, board } = playGame;

    board.forEach(box => {
        box.addEventListener('click', changeColor);
        box.addEventListener('click', checkWinner);

    });
})();
