

const gameBoard = (() => {
    this.gameArray = [0,0,0,0,0,0,0,0,0];

    let playerTurn = 1; //1 is player1, -1 is player 2
    let turn = document.getElementById('turn');
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
        playerTurn === 1? turn.innerHTML = 'X turn' : turn.innerHTML = 'O turn'
    })

    this.playerSwap = (() => {
        playerTurn *= -1; //toggle whose turn it is

    })
    this.changeState = ((index) => {

        if(gameArray[index]===0){
            playerTurn === 1 ? gameArray[index] = "X" : gameArray[index] = "O"
            playerSwap();
            render();
        }
    })

    return {
        render, changeState
    }
})();

const players = (() => {
    let players = 0;

    this._player = (playerName) => {
        const symbol = players ? 'O' : 'X';
        players++;
        return {playerName, symbol};
    };

    this.addPlayers = () => {
        let player1 = _player(document.getElementById('player1').value);
        let player2 = _player(document.getElementById('player2').value)
        let greeting = `${player1.playerName} (${player1.symbol}) versus ${player2.playerName} (${player2.symbol})`;
    
        document.getElementById("playerForm").style.display = "none";
        document.getElementById("greeting").innerHTML = greeting;
    }

    return {
        addPlayers
    }
})();


const game = (() => {

})();



gameBoard.render();

