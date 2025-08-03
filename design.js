const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startButton = document.getElementById('start-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionSpan = document.getElementById('total-questions');
const scoreSpan = document.getElementById('score');
const finalScoreSpan = document.getElementById('final-score');
const maxScoreSpan = document.getElementById('max-score');
const resultMessage = document.getElementById('result-message');
const restartButton = document.getElementById('restart-btn');
const progressBar = document.getElementById('progress');




const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },
      { text: "Rome", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Venus", correct: false }
    ]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true }
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Oxygen", correct: true },
      { text: "Osmium", correct: false },
      { text: "Oxide", correct: false }
    ]
  },
  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "Lion", correct: false },
      { text: "Cheetah", correct: true },
      { text: "Horse", correct: false },
      { text: "Leopard", correct: false }
    ]
  },
  {
    question: "How many continents are there?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "50°C", correct: false },
      { text: "100°C", correct: true },
      { text: "150°C", correct: false },
      { text: "200°C", correct: false }
    ]
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "French", correct: false },
      { text: "English", correct: false }
    ]
  }
];

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false

totalQuestionSpan.testContent = quizQuestions.length;
maxScoreSpan.textContent= quizQuestions.length;

startButton.addEventListener("click", starQuiz)

function starQuiz(){
 currentQuestionIndex = 0;
 score= 0;
 scoreSpan.textContent = 0;
 startScreen.classList.remove("active");
 quizScreen.classList.add("active");
 showQuestion();
}

function showQuestion(){
 answerDisabled = false
 const currentQuestion = quizQuestions[currentQuestionIndex]
 currentQuestionSpan.textContent = currentQuestionIndex + 1
 const progressPercent = (currentQuestionIndex / quizQuestions.length)* 100;
 progressBar.style.width = progressPercent + "%"
 questionText.textContent = currentQuestion.question
 answersContainer.innerHTML = "";
 currentQuestion.answers.forEach((answer) => {
  const button = document.createElement("button");
  button.textContent = answer.text;
  button.classList.add("answer-btn");

  button.dataset.correct = answer.correct;
  button.addEventListener("click",selectAnswer);
  answersContainer.appendChild(button);
 });
}

function selectAnswer(event){
 if(answerDisabled) return

 answerDisabled = true
 const selectedButton = event.target;
 const isCorrect = selectedButton.dataset.correct === "true"

 Array.from(answersContainer.children).forEach(button => {
  if(button.dataset.correct === "true"){
   button.classList.add("correct");
  }else if (button === selectedButton){
   button.classList.add("incorrect");
  }
 });
 if (isCorrect){
  score++;
  scoreSpan.textContent = score
 }

 setTimeout(() => {
  currentQuestionIndex ++;

  if(currentQuestionIndex < quizQuestions.length)
   {showQuestion()

   }else{
    showResults()
   }
  },1000)
 }

 function showResults(){
  quizScreen.classList.remove("active")
  resultScreen.classList.add("active")
  finalScoreSpan.textContent = score;
const percentage = (score/quizQuestions.length) * 100
if (percentage === 100){
 resultMessage.textContent = "Perfect! You're a genius!";
}else if (percentage >= 80){
 resultMessage.textContent = 
 "Great job! You know your stuff!";
}else if (percentage >= 60){
  resultMessage.textContent = 
 "Great effort! keep learning!";
}else if (percentage >= 40){
  resultMessage.textContent = 
 "Not bad! Try again to improve!";
}else{
  resultMessage.textContent = 
 "Keep Studying! You'll get better!";
}
}
restartButton.addEventListener("click", restartQuiz)
function restartQuiz(){
 resultScreen.classList.remove("active");
 starQuiz();
}