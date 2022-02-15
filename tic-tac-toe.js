let players = 0;

const gameBoard = (() => {
    this.gameArray = ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'O'];
    
    const board = document.querySelector('#gameBoard');

    this.createDiv = ((state) => {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        state ? squareDiv.innerHTML = state : squareDiv.innerHTML = '';
        board.append(squareDiv);
    })

    this.render = (() => {
        for(i=0; i<9; i++){
            createDiv(gameArray[i]);
        }
    })

    return {
        render
    }
})();

const player = (playerName) => {
    const symbol = players ? 'X' : 'O';
    players++;

    return {playerName, symbol};
};

gameBoard.render();

let bonnie = player('Bonnie');
let kevin = player('Kevin');

