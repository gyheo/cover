const body = document.body; // Document Object Model 이해

const gameTitle = document.createElement('h1');
gameTitle.textContent = '쿵쿵따!'

let word = document.createElement('div');
word.textContent = '한글날';
document.body.append(word);

let form = document.createElement('form');
document.body.append(form);

let answer = document.createElement('input');
form.append(answer);

let submitButton = document.createElement('button');
submitButton.textContent = '입력';

let result = document.createElement('div');
document.body.append(result);

form.append(submitButton);

answer.focus(); // 첫 시작 focus 고정

// 영상 보기 전
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let answerLength = answer.value.length; 

//     if(answerLength > 1 && answerLength <= 3) { // 글자 수 제한
//         if(word.textContent[word.textContent.length - 1] === answer.value[0]) {
//             if(answer.value.includes(' ')){ 
//                 // 공백 처리
//                 result.textContent = '빈칸 입력 ❌';
//                 answer.value = '';
//                 return;
//             }
    
//             result.textContent = '정답 ⭕️!';
//             word.textContent = answer.value;
//         } else { // 오답 처리
//             result.textContent = '오답 ❌!';
//         }
//     } else {
//         result.textContent = '최소 2글자, 최대 3글자!';
//     }

//     answer.value = '';
//     answer.focus();
// }

// 수업
form.addEventListener('submit', function callback(e) {
    e.preventDefault();
    let answerLength = answer.value.length; 

    if(answerLength > 1 && answerLength <= 3) { // 글자 수 제한
        if(word.textContent[word.textContent.length - 1] === answer.value[0]) {
            if(answer.value.includes(' ')){ 
                // 공백 처리
                result.textContent = '빈칸 입력 ❌';
                return;
            }
    
            result.textContent = '통과 ⭕️';
            word.textContent = answer.value;
        } else { // 오답 처리
            result.textContent = '오답 ❌';
        }
    } else {
        result.textContent = '최소 2글자, 최대 3글자!';
    }
    answer.value = '';
    answer.focus();
});