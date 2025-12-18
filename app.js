import { questions } from "./Data.js";
 
let current = 0;
 
const progress = document.getElementById("progress");
const questionDiv = document.getElementById("question");
const answersDiv = document.getElementById("answers");
 
const bubbles = [];
 
//padaro tuos burbulus kur right or wrong
questions.forEach((_, index) => {
  const div = document.createElement("div");
  div.textContent = index + 1;
  div.className = "bubble";
  progress.appendChild(div);
  bubbles.push(div);
});
 
//questiono texta parodo
function showQuestion() {
  const q = questions[current];
 
  questionDiv.textContent = q.question;
  answersDiv.innerHTML = "";
 
  //klausiom atsakymai
  q.answers.forEach((answer) => {
    const div = document.createElement("div");
    div.textContent = answer.text;
    div.className = "answer";
//pagal click prideda classe ar blogai ar gerai kad uzdeti raudona ar zalia ant atsakymo
    div.addEventListener("click", () => {
      bubbles[current].classList.add(
        answer.isCorrect ? "correct" : "wrong"
      );
 
      //pabaiga
      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        questionDiv.textContent = "Quiz finished";
        answersDiv.innerHTML = "";
      }
    });
 
    answersDiv.appendChild(div);
  });
}





 
//restart shi
document.getElementById("restart").addEventListener("click", () => {
    location.reload();
  });
 
showQuestion();
 