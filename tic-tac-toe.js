

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
        winCheck();
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
        render, changeState, gameArray
    }
})();

const players = (() => {
    let players = 0;

    this._player = (playerName) => {
        const symbol = players ? 'O' : 'X';
        players++;
        return {playerName, symbol};
    };

    this._hidePlayerForm = (() => {
        document.getElementById("playerForm").style.display = "none";
        document.getElementById("popup").style.display = "none";
    })

    this.addPlayers = () => {
        let player1 = _player(document.getElementById('player1').value);
        let player2 = _player(document.getElementById('player2').value);

        let greeting = `${player1.playerName} (${player1.symbol}) versus ${player2.playerName} (${player2.symbol})`; 
        document.getElementById("greeting").innerHTML = greeting;

        _hidePlayerForm();   
        
    }

    return {
        addPlayers
    }
})();


const game = (() => {
    
    let winner;
    let result = document.getElementById('result');

    this.winCheck = (() => {
        if (
            (gameArray[0]==='X' && gameArray[1]==='X' && gameArray[2]==='X') ||
            (gameArray[3]==='X' && gameArray[4]==='X' && gameArray[5]==='X') ||
            (gameArray[6]==='X' && gameArray[7]==='X' && gameArray[8]==='X') ||
            (gameArray[0]==='X' && gameArray[3]==='X' && gameArray[6]==='X') ||
            (gameArray[1]==='X' && gameArray[4]==='X' && gameArray[7]==='X') ||
            (gameArray[2]==='X' && gameArray[5]==='X' && gameArray[8]==='X') ||
            (gameArray[0]==='X' && gameArray[5]==='X' && gameArray[8]==='X') ||
            (gameArray[2]==='X' && gameArray[5]==='X' && gameArray[6]==='X'))
            {
                winner = 'X'
            }
        else if (
            (gameArray[0]==='O' && gameArray[1]==='O' && gameArray[2]==='O') ||
            (gameArray[3]==='O' && gameArray[4]==='O' && gameArray[5]==='O') ||
            (gameArray[6]==='O' && gameArray[7]==='O' && gameArray[8]==='O') ||
            (gameArray[0]==='O' && gameArray[3]==='O' && gameArray[6]==='O') ||
            (gameArray[1]==='O' && gameArray[4]==='O' && gameArray[7]==='O') ||
            (gameArray[2]==='O' && gameArray[5]==='O' && gameArray[8]==='O') ||
            (gameArray[0]==='O' && gameArray[5]==='O' && gameArray[8]==='O') ||
            (gameArray[2]==='O' && gameArray[5]==='O' && gameArray[6]==='O'))
            {
                winner = 'O'
            }
        else if(!gameArray.includes(0)){ //all of array is full, no wins
            winner = 'Tie!';
        }
    })

    this.gameResults = ((winner) => {
        result.innerHTML = `doop`
    })

    return {
        winCheck
    }

})();



gameBoard.render();

