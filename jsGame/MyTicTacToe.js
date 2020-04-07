// HTML 태그 만들어 놓고 TicTacToe Game 만들기
const table = document.querySelector('table');

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
            tableArrays[i][j].addEventListener('click', function async(){
                // 각 칸마다 클릭 이벤트 추가
                // console.log(`rows = ${i}, cols = ${j}`)
            });
        }
    }
}

init();