// let numberArrays = new Array(45);
// let numbers = numberArrays.fill();

// numbers.forEach(function(element, index) {
//     numbers[index] = index + 1;
// });

let numberArrays = Array(45)
                    .fill()
                    .map(function (element, index) {
                        return index + 1;
                    });
console.log(numberArrays);

let shuffle = [];
while (numberArrays.length > 0) {
    let num = numberArrays.splice(Math.floor(Math.random() * numberArrays.length), 1)[0];
    // console.log(numberArrays.length);
    shuffle.push(num);
}

console.log(shuffle);

let bonus = shuffle[shuffle.length - 1];
let lotto = shuffle
            .splice(0, 6)
            .sort(function (a, b) { 
                return a - b
            });

console.log(`당첨숫자 : ${lotto}, 보너스 : ${bonus}`);
const result = document.getElementById('result');

// for (let i = 0; i < lotto.length; i++) {
//     setTimeout(function timeInterval() {
//         let circle = document.createElement('div');
//         circle.style.display = 'inline-block';
//         circle.style.border = '1px solid black';
//         circle.style.borderRadius = '10px';
//         circle.style.width = '20px';
//         circle.style.height = '20px';
//         circle.style.textAlign = 'center';
//         circle.style.marginRight = '10px';
//         circle.textContent = lotto[i];
//         result.appendChild(circle);
//     }, 1000);
// }

function decorateBall(ballNumber, result) {
    let circle = document.createElement('div');
    circle.textContent = ballNumber;
    circle.style.color = 'white';
    circle.style.fontSize = '15px';
    circle.style.display = 'inline-block';
    circle.style.border = '1px solid black';
    circle.style.borderRadius = '10px';
    circle.style.width = '20px';
    circle.style.height = '20px';
    circle.style.textAlign = 'center';
    circle.style.marginRight = '10px';
    
    let backgroundColor;
    
    if(ballNumber <= 10)
        backgroundColor = 'red';
    else if(ballNumber <= 20)
        backgroundColor = 'orange';
    else if(ballNumber <= 30)
        backgroundColor = 'yellow';
    else if(ballNumber <= 40)
        backgroundColor = 'blue';
    else if(ballNumber <= 50)
        backgroundColor = 'green';

    circle.id = 'circle' + ballNumber;
    circle.className = 'circle' + ballNumber;
    circle.style.backgroundColor = backgroundColor;
    result.appendChild(circle);
}

// 행운의 숫자 6자리 + bonus 숫자
for(let i = 0; i < lotto.length + 1; i++) {
    if(i == lotto.length) {
        // const luckys = document.getElementsByClassName('luckys')[0];
        const luckys = document.querySelector('.luckys'); // Using querySelector
        let bonusCircle = document.createElement('div');

        // for 반복문 안의 setTimeout closure 문제 해결
        setTimeout(function () {
            decorateBall(bonus, luckys);
        }, 1000 * i);

        break;
    }

    setTimeout(function() {
        decorateBall(lotto[i], result);
    }, 1000 * i);
}