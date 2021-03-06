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

    this.resetGame = (() => {
        gameArray = [0,0,0,0,0,0,0,0,0];
        resetPlayers();
        render();
    })

    return {
        render, changeState, turn, resetGame
    }
})();

const players = (() => {
    let players = 0;
    let addPlayerForm = document.getElementById("addPlayer");
    let addPlayerCont = document.getElementById("addPlayerContainer");
    let greetingBox = document.getElementById("greeting");
    let input1 = document.getElementById('player1');
    let input2 = document.getElementById('player2');

    this._player = (playerName) => {
        const symbol = players ? 'O' : 'X';
        players++;
        return {playerName, symbol};
    };

    this._hidePlayerForm = (() => {
        addPlayerForm.style.visibility = "hidden";
        addPlayerCont.style.visibility = "hidden";
    })

    this._showPlayerForm = (() => {
        addPlayerForm.style.visibility = "visible";
        addPlayerCont.style.visibility = "visible";
    })

    this.addPlayers = (() => {
        this.p1 = _player(input1.value);
        this.p2 = _player(input2.value);
        greetingBox.innerHTML = `${p1.playerName} (${p1.symbol}) versus ${p2.playerName} (${p2.symbol})`; 
        turn.classList.add('show');
        _hidePlayerForm();  
    })

    this.resetPlayers = (() => {
        players = 0;
        addPlayerForm.reset();
        greetingBox.innerHTML = '';
        turn.classList.remove('show');
        _showPlayerForm();
        hideResults();
    })

    return {
        addPlayers, resetPlayers
    }
})();


const game = (() => {
    
    let winner;
    let result = document.getElementById('result');
    let resultCont = document.getElementById('gameResultContainer');
    let resultPopup = document.getElementById('gameResult');
    let resetButton = document.getElementById('reset');

    this.winCheck = (() => {
        if (
            (gameArray[0]==='X' && gameArray[1]==='X' && gameArray[2]==='X') ||
            (gameArray[3]==='X' && gameArray[4]==='X' && gameArray[5]==='X') ||
            (gameArray[6]==='X' && gameArray[7]==='X' && gameArray[8]==='X') ||
            (gameArray[0]==='X' && gameArray[3]==='X' && gameArray[6]==='X') ||
            (gameArray[1]==='X' && gameArray[4]==='X' && gameArray[7]==='X') ||
            (gameArray[2]==='X' && gameArray[5]==='X' && gameArray[8]==='X') ||
            (gameArray[0]==='X' && gameArray[4]==='X' && gameArray[8]==='X') ||
            (gameArray[2]==='X' && gameArray[4]==='X' && gameArray[6]==='X'))
            {
                if(p1.playerName){
                    winner = `${p1.playerName} wins!`
                }
                else{
                    winner = 'X wins!'
                }
                
                gameResults(winner);
            }
        else if (
            (gameArray[0]==='O' && gameArray[1]==='O' && gameArray[2]==='O') ||
            (gameArray[3]==='O' && gameArray[4]==='O' && gameArray[5]==='O') ||
            (gameArray[6]==='O' && gameArray[7]==='O' && gameArray[8]==='O') ||
            (gameArray[0]==='O' && gameArray[3]==='O' && gameArray[6]==='O') ||
            (gameArray[1]==='O' && gameArray[4]==='O' && gameArray[7]==='O') ||
            (gameArray[2]==='O' && gameArray[5]==='O' && gameArray[8]==='O') ||
            (gameArray[0]==='O' && gameArray[4]==='O' && gameArray[8]==='O') ||
            (gameArray[2]==='O' && gameArray[4]==='O' && gameArray[6]==='O'))
            {
                if(p2.playerName){
                    winner = `${p2.playerName} wins!`
                }
                else{
                    winner = 'O wins!'
                }
                gameResults(winner);

            }
        else if(!gameArray.includes(0)){ //all of array is full, no wins
            winner = 'Tie!';
            gameResults(winner);
        }
    })

    this._showResults = (()=> {
        const results = [result, resultPopup, resultCont, resetButton];

        results.forEach(element => {
            element.classList.add('show');
        });
    })

    this.hideResults = (()=> {
        const results = [result, resultPopup, resultCont, resetButton];

        results.forEach(element => {
            element.classList.remove('show');
        });
    })

    this.gameResults = ((winner) => {
        result.innerHTML = `${winner}`
        _showResults();

    })

    return {
        winCheck, hideResults
    }

})();

gameBoard.render(); //initial render

