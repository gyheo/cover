let body = document.body;
let table = document.createElement('table');
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

        if(turn == 'X') {
            turn = 'O';
        } else {
            turn = 'X';
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
