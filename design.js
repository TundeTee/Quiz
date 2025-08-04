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
      { text: "(A) Berlin", correct: false },
      { text: "(B) Madrid", correct: false },
      { text: "(C) Paris", correct: true },
      { text: "(D) Rome", correct: false }
    ]
  },
   {
    question: "What is the process by which plants make their own food?",
    answers: [
      { text: "(A) Respiration", correct: false },
      { text: "(B) Digestion", correct: false },
      { text: "(C) Photosynthesis", correct: true },
      { text: "(D) Fermentation", correct: false }
    ]
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "(A) William Shakespeare", correct: true },
      { text: "(B) Charles Dickens", correct: false },
      { text: "(C) Jane Austen", correct: false },
      { text: "(D) Mark Twain", correct: false }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "(A) Atlantic Ocean", correct: false },
      { text: "(B) Indian Ocean", correct: false },
      { text: "(C) Arctic Ocean", correct: false },
      { text: "(D) Pacific Ocean", correct: true }
    ]
  },
  {
    question: "What is the powerhouse of the cell?",
    answers: [
      { text: "(A) Nucleus", correct: false },
      { text: "(B) Mitochondria", correct: true },
      { text: "(C) Ribosome", correct: false },
      { text: "(D) Endoplasmic reticulum", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "(A) Au", correct: true },
      { text: "(B) Ag", correct: false },
      { text: "(C) Fe", correct: false },
      { text: "(D) Cu", correct: false }
    ]
  },
  {
    question: " Which ancient civilization built the pyramids of Giza?",
    answers: [
      { text: "(A) The Greeks", correct: false },
      { text: "(B) The Romans", correct: false },
      { text: "(C) The Egyptians", correct: true },
      { text: "(D) The Mesopotamians", correct: false }
    ]
  },
  {
    question: `What historical event is represented by the phrase "Remember the Alamo"?`,
    answers: [
      { text: "(A) The American Revolution", correct: false },
      { text: "(B) The Texas Revolution", correct: true },
      { text: "(C) The French Revolution", correct: false },
      { text: "(D) The Mexican-American War", correct: false }
    ]
  },
  {
    question: "Who was the first person to walk on the moon?",
    answers: [
      { text: "(A) Neil Armstrong", correct: true },
      { text: "(B) Buzz Aldrin", correct: false},
      { text: "(C) Yuri Gagarin", correct: false },
      { text: "(D) John Glen", correct: false }
    ]
  },
  {
    question: `Who wrote the novel "To Kill a Mockingbird?`,
    answers: [
      { text: "(A) George Orwell", correct: false },
      { text: "(B) Harper lee", correct: true },
      { text: "(C) Mark Twain", correct: false },
      { text: "(D) George Eliot", correct: false }
    ]
  },
  {
    question: "In what year did World War II officially end?",
    answers: [
      { text: "(A) 1945", correct: true },
      { text: "(B) 1939", correct: false },
      { text: "(C) 1950", correct: false },
      { text: "(D) 1941", correct: false }
    ]
  },
  {
    question: "What is the name of the longest river in the world?",
    answers: [
      { text: "(A) Amazon", correct: false },
      { text: "(B) Nile", correct: true },
      { text: "(C) Yangtze", correct: false },
      { text: "(D) Missipi", correct: false }
    ]
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "(A) Earth", correct: false },
      { text: "(B) Mars", correct: true },
      { text: "(C) Jupiter", correct: false },
      { text: "(D) Venus", correct: false }
    ]
  },
  {
    question: "What is the name of the closest star to Earth'?",
    answers: [
      { text: "(A) Sirius", correct: false },
      { text: "(B) Alpha Centauri", correct: false },
      { text: "(C) Proxima Centauri", correct: false },
      { text: "(D) Sun", correct: true }
    ]
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "(A) Atlantic Ocean", correct: false },
      { text: "(B) Indian Ocean", correct: false },
      { text: "(C) Arctic Ocean", correct: false },
      { text: "(D) Pacific Ocean", correct: true }
    ]
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "(A) Gold", correct: false },
      { text: "(B) Oxygen", correct: true },
      { text: "(C) Osmium", correct: false },
      { text: "(D) Oxide", correct: false }
    ]
  },
  {
    question: "What is the fastest land animal?",
    answers: [
      { text: "(A) Lion", correct: false },
      { text: "(B) Cheetah", correct: true },
      { text: "(C) Horse", correct: false },
      { text: "(D) Leopard", correct: false }
    ]
  },
  {
    question: "How many continents are there?",
    answers: [
      { text: "(A) 5", correct: false },
      { text: "(B)6", correct: false },
      { text: "(C) 7", correct: true },
      { text: "(A) 8", correct: false }
    ]
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "(A) Vincent van Gogh", correct: false },
      { text: "(B) Leonardo da Vinci", correct: true },
      { text: "(C) Pablo Picasso", correct: false },
      { text: "(D) Claude Monet", correct: false }
    ]
  },
  {
    question: "What is the boiling point of water?",
    answers: [
      { text: "(A) 50°C", correct: false },
      { text: "(B) 100°C", correct: true },
      { text: "(C) 150°C", correct: false },
      { text: "(D) 200°C", correct: false }
    ]
  },
  {
    question: "In what year did the Titanic sink?",
    answers: [
      { text: "(A) 1905", correct: false },
      { text: "(B) 1912", correct: true },
      { text: "(C) 1920", correct: false },
      { text: "(D) 1931", correct: false }
    ]
  },
  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "(A) CO2", correct: false },
      { text: "(B) NACl", correct: false },
      { text: "(C) H20", correct: true },
      { text: "(D) O2", correct: false }
    ]
  },
  {
    question: "What force keeps us grounded on Earth?",
    answers: [
      { text: "(A) Friction", correct: true },
      { text: "(B) Magnetism", correct: false },
      { text: "(C)  Gravity", correct: false },
      { text: "(D) Tension", correct: false }
    ]
  },
  {
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "(A) Quartz", correct: false },
      { text: "(B) Gold", correct: false },
      { text: "(C) Iron ", correct: false },
      { text: "(D) Diamond", correct: true }
    ]
  },
  {
    question: "What do you call a boomerang that won't come back?",
    answers: [
      { text: "(A)  A regret ", correct: false },
      { text: "(B)  A stick", correct: true },
      { text: "(C)  A disappointment ", correct: false },
      { text: "(D) 2A boomerang according to Mentimeter", correct: false }
    ]
  },
  {
    question: "What is a baby kangaroo called?",
    answers: [
      { text: "(A) Calf", correct: false },
      { text: "(B) Pup", correct: false },
      { text: "(C) Joey", correct: true },
      { text: "(D) Kit", correct: false }
    ]
  },
  {
    question: "What has an eye, but cannot see?",
    answers: [
      { text: "(A) A cat", correct: false },
      { text: "(B) A cat", correct: false },
      { text: "(C) A needle", correct: true },
      { text: "(D)  A ghost", correct: false }
    ]
  },
  {
    question: "What is the quirky name for a sudden heavy rainstorm in America?",
    answers: [
      { text: "(A) Drip bomb", correct: false },
      { text: "(B) Cloud hospital", correct: false },
      { text: "(C) Water raid", correct: false },
      { text: "(D) Gully-washe", correct: true }
    ]
  },
  {
    question: "What is always coming, but never arrives?",
    answers: [
      { text: "(A) The mai", correct: false },
      { text: "(B)  Tomorrow", correct: true },
      { text: "(C) The next bus", correct: false },
      { text: "(D) The end of the world", correct: false }
    ]
  },
  {
    question: "Which language is primarily spoken in Brazil?",
    answers: [
      { text: "(A) Spanish", correct: false },
      { text: "(B) Portuguese", correct: true },
      { text: "(B) French", correct: false },
      { text: "(D) English", correct: false }
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