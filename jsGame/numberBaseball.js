const body = document.body;

const gameTitle = document.createElement('h1');
gameTitle.textContent = '숫자 야구!'
document.body.append(gameTitle);

let numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbers = [];

for (let i = 0; i < 4; i++) {
    // let num = numberArr.pop();
    let num = numberArr.splice(Math.floor(Math.random() * 9 - i), 1)[0];
    // let num = numberArr.splice(Math.floor(Math.random() * numberArr.length), 1)[0];
    numbers.push(num);
}
console.log(numbers);

let form = document.createElement('form');
document.body.append(form);

let answer = document.createElement('input');
form.append(answer);

let submitButton = document.createElement('button');
submitButton.textContent = '입력';

let result = document.createElement('div');
document.body.append(result);

form.append(submitButton);

submitButton.onclick = function (e) {
    e.preventDefault();
}