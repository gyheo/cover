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

let lotto = [];
while (numberArrays.length > 0) {
    let num = numberArrays.splice(Math.floor(Math.random() * numberArrays.length), 1)[0];
    lotto.push(num);
}

console.log(lotto);