// Array of questions and answers
const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: 0
  },
  {
    question: "What is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: 3
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Cu", "Fe"],
    answer: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: 2
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: 2
  }
];

// Get the necessary DOM elements
const questionElement = document.getElementById("question");
const optionsElement = document.getElementsByClassName("option");
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");
const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");

let currentQuestion = 0;
let score = 0;

// Function to display the current question and options
function displayQuestion() {
  questionElement.textContent = questions[currentQuestion].question;

  for (let i = 0; i < optionsElement.length; i++) {
    optionsElement[i].getElementsByTagName("span")[0].textContent = questions[currentQuestion].options[i];
  }

  currentQuestionElement.textContent = currentQuestion + 1;
  totalQuestionsElement.textContent = questions.length;
}

// Function to handle user's answer selection
function selectOption(index) {
  if (index === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResults();
  }
}

// Function to display the final results
function displayResults() {
  questionElement.textContent = "Quiz Completed!";

  for (let i = 0; i < optionsElement.length; i++) {
    optionsElement[i].style.display = "none";
  }

  scoreElement.textContent = score;
  percentageElement.textContent = ((score / questions.length) * 100).toFixed(2) + "%";
}

// Initial display of the first question
displayQuestion();