let body = document.body;
let table = document.createElement('table');
let result = document.createElement('h1');
let rows = [];
let cols = [];
let turn = 'X';

let nonsync = function(e) {
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.children);

    let rowIndex = rows.indexOf(e.target.parentNode);
    let colIndex = cols[rowIndex].indexOf(e.target);
    
    console.log('row = '+ rowIndex);
    console.log('col = '+ colIndex);

    if(cols[rowIndex][colIndex].textContent !== "") { // 칸에 값이 존재?
        // console.log('빈칸 NO');
    } else {
        // console.log('빈칸 YES');
        cols[rowIndex][colIndex].textContent = turn;

        let answer = false;
    
        if(cols[rowIndex][0].textContent === turn &&
            cols[rowIndex][1].textContent === turn &&
            cols[rowIndex][2].textContent === turn) {
                answer = true; // rows
        }
        
        if(cols[0][colIndex].textContent === turn &&
            cols[1][colIndex].textContent === turn &&
            cols[2][colIndex].textContent === turn) {
                answer = true; // cols
        }
    
        // 대각선
        if(rowIndex - colIndex == 0){
            if(cols[0][0].textContent === turn && 
               cols[1][1].textContent === turn &&
               cols[2][2].textContent === turn) {
                answer = true;
            }
        }
        if(Math.abs(rowIndex - colIndex) == 2){
            if(cols[0][2].textContent === turn && 
               cols[1][1].textContent === turn &&
               cols[2][0].textContent === turn) {
                answer = true;
            }
        }
    
        if(answer) {
            result.textContent = `${turn}의 승리!`;
            // alert(`${turn}의 승리!`);
            
            // initialize
            turn = 'X';
            cols.forEach(function (row){
                row.forEach(function (col){
                    col.textContent = '';
                });
            });
        }
        else {
            if(turn == 'X') {
                turn = 'O';
            } else {
                turn = 'X';
            }
        }
    }
};

for(let i = 0; i < 3; i++){
    let row = document.createElement('tr');
    rows.push(row);
    cols.push([]);

    for(let j = 0; j < 3; j++){
        let col = document.createElement('td');
        col.addEventListener('click', nonsync);
        cols[i].push(col);
        row.appendChild(col);
    }
    table.appendChild(row);
}

console.log(rows);
console.log(cols);

body.appendChild(table);
body.appendChild(result);
