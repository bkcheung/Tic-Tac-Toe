const gameBoard = (() => {
    this.gameArray = ['X', 'O', 'O', 'X', 'O', 'O', 'X', 'X', 'O'];
    
    const board = document.querySelector('#gameBoard');

    this.createDiv = (() => {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('squareDiv');
        board.append(squareDiv);
    })
    this.createGrid = (() => {
        for(i=0; i<9; i++){
                createDiv();
        }
    })

    this.render = (() => {
        console.log(`${gameArray}`);
    })

    this.init = (() => {
        createGrid();
        render();
    })

    return {
        render:render, 
        init:init
    }
})();

gameBoard.init();
