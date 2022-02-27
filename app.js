let cell = document.getElementsByClassName('cell');
let currentCickedCell = [];
let count = 0;
let winner = '';
let redPlayerCount = 0;
let greenPlayerCount = 0;
let drawCount =0;
let colorRed = [];
let colorGreen = [];
let resetBtn = document.getElementById('reset-button');
resetBtn.addEventListener('click', reset);
gameBoard(a=0,b=0,c=0);
for(let i=0; i<cell.length;i++){
    cell[i].addEventListener('click', selectCell)
}

function selectCell(e){
    if(winner == ''){
    checkClicked(e); 
    }    
}    
function checkClicked(e){
    let ifInclude = currentCickedCell.includes(e.target.id)
    if(ifInclude == false){
        count +=1 ;
        currentCickedCell.push(e.target.id);
        changeColor(e);   
        let winnerGreen = gameLogicGreen();  
        let winerRedn = gameLogicRed(); 
        if(winner != ''){
        printWinner(); 
        }
        if(count == 9 && winner == ''){
            drawCount += 1;
            gameBoard(greenPlayerCount,redPlayerCount,drawCount);
        }
    }
}
function changeColor(e){
    if(count % 2 == 0){
        e.target.textContent = "X";   
        let cellId = e.target.id;  
        colorRed.push(cellId);
    }
    else{
        e.target.textContent = "O";
        let cellId = e.target.id;
        colorGreen.push(cellId);
}
}
function gameLogicGreen(){
    //  for red
    if(colorGreen.includes('cell-1') && (colorGreen.includes('cell-2'))
    && (colorGreen.includes('cell-3'))) {
        winner = 'green';
        strikeFirstLine();
    }
    if(colorGreen.includes('cell-1') && (colorGreen.includes('cell-5')) 
    &&  (colorGreen.includes('cell-9'))) {
        winner = 'green';
        strikeDiagonalLeft()
    }
    if(colorGreen.includes('cell-2') && (colorGreen.includes('cell-5')) 
    &&(colorGreen.includes('cell-8'))){
        winner = 'green';
        strikeSecondColumn();
    }
    if(colorGreen.includes('cell-3') && (colorGreen.includes('cell-6')) 
    && (colorGreen.includes('cell-9'))){
        winner = 'green';
        strikeThirdColumn();
    }
    if(colorGreen.includes('cell-4') && (colorGreen.includes('cell-5')) 
    && (colorGreen.includes('cell-6'))){
        winner = 'green';
        strikeSecondLine()
    }
    if(colorGreen.includes('cell-7') 
    && (colorGreen.includes('cell-8')) && (colorGreen.includes('cell-9'))){
        winner = 'green';
        strikeThirdLine();
    }
    if(colorGreen.includes('cell-1') && (colorGreen.includes('cell-4'))
    && (colorGreen.includes('cell-7'))) {
        winner = 'green';
        strikeFirstColumn()
    }
    if(colorGreen.includes('cell-3') && (colorGreen.includes('cell-5'))
    && (colorGreen.includes('cell-7'))) {
        winner = 'green';
        strikeDiagonalRight();
    }
    return winner;
}
function gameLogicRed(){
    let colorGreen = colorRed;
    if(colorGreen.includes('cell-1') && (colorGreen.includes('cell-2'))
    && (colorGreen.includes('cell-3'))) {
        winner = 'red';
        strikeFirstLine();
    }
    if(colorGreen.includes('cell-1') && (colorGreen.includes('cell-5')) 
    &&  (colorGreen.includes('cell-9'))) {
        winner = 'red';
        strikeDiagonalLeft()
    }
    if(colorGreen.includes('cell-2') && (colorGreen.includes('cell-5')) 
    &&(colorGreen.includes('cell-8'))){
        winner = 'red';
        strikeSecondColumn();
    }
    if(colorGreen.includes('cell-3') && (colorGreen.includes('cell-6')) 
    && (colorGreen.includes('cell-9'))){
        winner = 'red';
        strikeThirdColumn();
    }
    if(colorGreen.includes('cell-4') && (colorGreen.includes('cell-5')) 
    && (colorGreen.includes('cell-6'))){
        winner = 'red';
        strikeSecondLine();
    }
    if(colorGreen.includes('cell-7') 
    && (colorGreen.includes('cell-8')) && (colorGreen.includes('cell-9'))){
        winner = 'red';
        strikeThirdLine();
    }
    if(colorGreen.includes('cell-1') && (colorGreen.includes('cell-4'))
    && (colorGreen.includes('cell-7'))) {
        winner = 'red';
        strikeFirstColumn()
    }
    if(colorGreen.includes('cell-3') && (colorGreen.includes('cell-5'))
    && (colorGreen.includes('cell-7'))) {
        winner = 'red';
        strikeDiagonalRight();
    }
    return winner;
}
function printWinner(){
    if(winner == 'red'){
        redPlayerCount +=1;
        gameBoard(greenPlayerCount,redPlayerCount,drawCount);
    }
    if(winner == 'green'){
        greenPlayerCount +=1;
        gameBoard(greenPlayerCount,redPlayerCount,drawCount);
    }
}
function reset(){
    for(i=0;i<cell.length;i++){
        cell[i].textContent = '';
    }
    let strike = document.getElementById('strikeID');
    colorGreen = [];
    colorRed = [];
    count = 0;
    currentCickedCell = [];
    winner = ''; 
    try{
        let strike = document.getElementById('strikeID');
        strike.remove();
    }
    catch{
        console.log('nothing found');
    }
}
function gameBoard(a,b,c){
    let drawScreen = document.getElementById('draw');
    let firstPlayer = document.getElementById('player-1');
    let secondPlayer = document.getElementById('player-2');
    firstPlayer.textContent = `O : ${a}`;
    secondPlayer.textContent = `X : ${b}`;   
    drawScreen.textContent = `Draw: ${c}`;
}
function strikeFirstLine(){
    let strikeThrough = document.createElement('p');
    strikeThrough.textContent="|";
    let gameSpace = document.getElementById('game-space');
    gameSpace.append(strikeThrough);
    strikeThrough.className = 'first-line-strike';
    strikeThrough.id = "strikeID";   
}
function strikeSecondLine(){
    let strikeThrough = document.createElement('p');
    strikeThrough.textContent="|";
    let gameSpace = document.getElementById('game-space');
    gameSpace.append(strikeThrough);
    strikeThrough.className = 'second-line-strike';    
    strikeThrough.id = "strikeID";
}
function strikeThirdLine(){
    let strikeThrough = document.createElement('p');
    strikeThrough.textContent="|";
    let gameSpace = document.getElementById('game-space');
    gameSpace.append(strikeThrough);
    strikeThrough.className = 'third-line-strike';   
    strikeThrough.id = "strikeID"; 
}
function strikeFirstColumn(){
    let strikeThrough = document.createElement('p');
    strikeThrough.textContent="|";
    let gameSpace = document.getElementById('game-space');
    gameSpace.append(strikeThrough);
    strikeThrough.className = 'first-column-strike';   
    strikeThrough.id = "strikeID";
}
function strikeSecondColumn(){
    let strikeThrough = document.createElement('p');
    strikeThrough.textContent="|";
    let gameSpace = document.getElementById('game-space');
    gameSpace.append(strikeThrough);
    strikeThrough.className = 'second-column-strike';   
    strikeThrough.id = "strikeID";
}
function strikeThirdColumn(){
    let strikeThrough = document.createElement('p');
    strikeThrough.textContent="|";
    let gameSpace = document.getElementById('game-space');
    gameSpace.append(strikeThrough);
    strikeThrough.className = 'third-column-strike';   
    strikeThrough.id = "strikeID";
}
function strikeDiagonalLeft(){
    let strikeThrough = document.createElement('p');
    strikeThrough.textContent="|";
    let gameSpace = document.getElementById('game-space');
    gameSpace.append(strikeThrough);
    strikeThrough.className = 'diagonal-left-strike';  
    strikeThrough.id = "strikeID";
}
function strikeDiagonalRight(){
    let strikeThrough = document.createElement('p');
    strikeThrough.textContent="|";
    let gameSpace = document.getElementById('game-space');
    gameSpace.append(strikeThrough);
    strikeThrough.className = 'diagonal-right-strike';  
    strikeThrough.id = "strikeID";
}
