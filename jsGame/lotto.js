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
    circle.style.display = 'inline-block';
    circle.style.border = '1px solid black';
    circle.style.borderRadius = '10px';
    circle.style.width = '20px';
    circle.style.height = '20px';
    circle.style.textAlign = 'center';
    circle.style.marginRight = '10px';
    result.appendChild(circle);
}

setTimeout(function timeInterval() {
    decorateBall(lotto[0], result);
}, 1000);

setTimeout(function timeInterval() {
    decorateBall(lotto[1], result);
}, 2000);

setTimeout(function timeInterval() {
    decorateBall(lotto[2], result);
}, 3000);

setTimeout(function timeInterval() {
    decorateBall(lotto[3], result);
}, 4000);

setTimeout(function timeInterval() {
    decorateBall(lotto[4], result);
}, 5000);

setTimeout(function timeInterval() {
    decorateBall(lotto[5], result);
}, 6000);


const luckys = document.getElementsByClassName('luckys')[0];
let bonusCircle = document.createElement('div');

setTimeout(function timeInterval() {
    decorateBall(bonus, luckys);
}, 7000);