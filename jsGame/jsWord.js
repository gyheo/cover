const body = document.body; // Document Object Model 이해

const gameTitle = document.createElement('h1');
gameTitle.textContent = '쿵쿵따!'

let word = document.createElement('div');
word.textContent = '한글날';

document.body.append(word);

let answer = document.createElement('input');
document.body.append(answer);

let submitButton = document.createElement('button');
submitButton.textContent = '입력';

let result = document.createElement('div');
document.body.append(result);

document.body.append(submitButton);

// 영상 보기 전
// submitButton.onclick = function () {
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
//             answer.value = '';
//         } else { // 오답 처리
//             result.textContent = '오답 ❌!';
//             answer.value = '';
//         }
//     } else {
//         result.textContent = '최소 2글자, 최대 3글자!';
//         answer.value = '';
//     }
// }

// 수업
submitButton.addEventListener('click', function () {
    let answerLength = answer.value.length; 

    if(answerLength > 1 && answerLength <= 3) { // 글자 수 제한
        if(word.textContent[word.textContent.length - 1] === answer.value[0]) {
            if(answer.value.includes(' ')){ 
                // 공백 처리
                result.textContent = '빈칸 입력 ❌';
                answer.value = '';
                return;
            }
    
            result.textContent = '정답 ⭕️!';
            word.textContent = answer.value;
            answer.value = '';
        } else { // 오답 처리
            result.textContent = '오답 ❌!';
            answer.value = '';
        }
    } else {
        result.textContent = '최소 2글자, 최대 3글자!';
        answer.value = '';
    }
});