let players = 0;

const addPlayers = () => {
    let player1 = player(document.getElementById('player1').value);
    let player2 = player(document.getElementById('player2').value)
    let greeting = `${player1.playerName} ${player1.symbol} versus ${player2.playerName} ${player2.symbol}`;

    document.getElementById("playerForm").style.display = "none";
    document.getElementById("playerGreeting").innerHTML = greeting;
}

const gameBoard = (() => {
    this.gameArray = [0,0,0,0,0,0,0,0,0];
    
    let board = document.querySelector('#gameBoard');

    this._createDiv = ((index) => {
        state = gameArray[index];
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        squareDiv.setAttribute('index', index);
        squareDiv.setAttribute('onclick', `changeState(${index})`);
        state ? squareDiv.innerHTML = state : squareDiv.innerHTML = ' ';
        board.append(squareDiv);
    })

    this.render = (() => {
        board.innerHTML = '';
        for(i=0; i<9; i++){
            _createDiv(i);
        }
    })
    this.changeState = ((index) => {
        console.log(index);
        gameArray[index] = 'X';
        render();
    })

    return {
        render, changeState
    }
})();

const player = (playerName) => {
    const symbol = players ? 'O' : 'X';
    players++;
    return {playerName, symbol};
};

gameBoard.render();

