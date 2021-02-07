let data = [
   {
      question: "What is null in JavaScript?",
      a: "Null means empty string value.",
      b: "Null means absence of a value.",
      c: "Null means unknown value.",
      d: "Null means zero value.",
      correct: "b"
   },
   {
      question: "Which of the following object represent parameters of current function inside any function?",
      a: "Global",
      b: "arguments",
      c: "this",
      d: "Object",
      correct: "b"
   },
   {
      question: "What is eval() in JavaScript?",
      a: "It executes specified string as JavaScript code.",
      b: "It returns an object representing the parsed tree of the specified JavaScript code.",
      c: "It executes server side code in JavaScript.",
      d: "It displays popup message.",
      correct: "a"
   },
   {
      question: "How to handle error in JavaScript?",
      a: "By writing error proof code.",
      b: "By using eval().",
      c: "By using if-else block.",
      d: "By using try, catch & finally block.",
      correct: "d"
   },
   {
      question: "Which of the following is NOT a JavaScript object?",
      a: "var obj = {}",
      b: "var obj = { name: 'Steve'}",
      c: "var obj = { name = 'Steve'}",
      d: "var obj = new Object()",
      correct: "c"
   }
]

let question = document.getElementById("question");
let a_el = document.getElementById("a-elem");
let b_el = document.getElementById("b-elem");
let c_el = document.getElementById("c-elem");
let d_el = document.getElementById("d-elem");
let btn = document.getElementById("btn");
let answerList = document.querySelectorAll(".answer");

var index = 0;
var score = 0;
loadQuiz();
function loadQuiz() {
   deselectElem();
   let quiz = data[index];
   question.innerText = `${quiz.question}`;
   a_el.innerText = `${quiz.a}`;
   b_el.innerText = `${quiz.b}`;
   c_el.innerText = `${quiz.c}`;
   d_el.innerText = `${quiz.d}`;
}

function selectElem() {
   let answer = undefined;
   answerList.forEach((elem) => {
      if (elem.checked) {
         answer = elem.id
      }
   });
   return answer;
}
function deselectElem() {
   answerList.forEach((elem) => {
      elem.checked = false
   });
}

btn.addEventListener('click', function () {
   const answer = selectElem();
   console.log(answer);
   if (answer) {
      if (answer === data[index].correct) {
         score++;
      }
      index++;
      if (index < data.length) {
         loadQuiz();
      } else {
         document.body.innerHTML = `<div class="total">` +
            `<div>` +
            `<h2>Congratulations! You have finished test</h2>` +
            `<p>Your total score ${score} / ${data.length} ` +
            `<button  class="reload" onclick="location.reload()">Reload</button>` +
            `</div>`
         '<div/>';
      }
   }
});
