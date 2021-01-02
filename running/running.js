let goal = document.querySelector("#goal");
let footer = document.querySelector("footer");
let h1 = document.createElement("h1");

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

h1.innerHTML = `${year}년 ${month}월 ${day}일 기준`;

goal.appendChild(h1);
