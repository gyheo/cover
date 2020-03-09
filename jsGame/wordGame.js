let word = '한글날';
let answer = '';

while(true) {
    answer = prompt(word, '');
    
    if(word[word.length - 1] === answer[0]) {
        alert('OK');
        word = answer;
    } else {
        alert('NG');
    }
}