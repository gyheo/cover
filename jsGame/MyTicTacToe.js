// HTML 태그 만들어 놓고 TicTacToe Game 만들기
const table = document.querySelector('table');

let result = document.createElement('h1');
document.body.appendChild(result);

let turn = 'X';
let finish = false;

function init() {
    // 모든 행 가져오기
    let tableRows = table.querySelectorAll('tr');
    let tableArrays = [];
    
    for(let i = 0; i < tableRows.length; i++) { 
       tableArrays.push(tableRows[i].querySelectorAll('td'));
    }
    
    for(let i = 0; i < tableRows.length; i++) {
        for(let j = 0; j < tableArrays.length; j++) {
            // console.log(tableArrays[i][j]);
            tableArrays[i][j].addEventListener('click', function (){
                // 각 칸마다 클릭 이벤트 추가
                // console.log(`rows = ${i}, cols = ${j}`)

                if(tableArrays[i][j].textContent == '') { 
                    // 빈칸인 경우에만 값이 들어갈 수 있도록
                    tableArrays[i][j].textContent = turn;

                    // 세로
                    if(tableArrays[i][0].textContent == turn &&
                       tableArrays[i][1].textContent == turn &&
                       tableArrays[i][2].textContent == turn) {
                           finish = true;
                    }
                    
                    // 세로
                    if(tableArrays[0][j].textContent == turn &&
                       tableArrays[1][j].textContent == turn &&
                       tableArrays[2][j].textContent == turn) {
                           finish = true;
                    }
                    
                    // 대각선
                    if(tableArrays[0][0].textContent == turn &&
                       tableArrays[1][1].textContent == turn &&
                       tableArrays[2][2].textContent == turn) {
                           finish = true;
                    }

                    if(tableArrays[0][2].textContent == turn &&
                       tableArrays[1][1].textContent == turn &&
                       tableArrays[2][0].textContent == turn) {
                           finish = true;
                     }
                    
                    if(finish) {
                        alert(`${turn}의 승리!`);
                        for(let i = 0; i < tableRows.length; i++) {
                            for(let j = 0; j < tableArrays.length; j++) {
                                tableArrays[i][j].textContent = '';
                            }
                        }
                        
                        result.textContent = `${turn}의 승리! 👏`;

                        turn = 'X';
                        finish = false;
                    } else {
                    // turn 교체
                        if(turn == 'X')
                            turn = 'O';
                        else
                            turn = 'X';
                    }
                }
            });
        }
    }
}

init();