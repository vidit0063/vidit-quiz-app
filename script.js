const questions = [
  {
    question: "What is the capital of India?",
    options: ["Paris", "Rome", "New Delhi", "Berlin"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

let currentIndex = 0;
let score = 0;

function loadQuestion() {
  const current = questions[currentIndex];
  document.getElementById("question").innerText = current.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  current.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const correct = questions[currentIndex].answer;
  if (selected === correct) score++;

  document.querySelectorAll("#options button").forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.style.backgroundColor = "lightgreen";
    } else if (btn.innerText === selected) {
      btn.style.backgroundColor = "salmon";
    }
  });

  document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
    document.getElementById("next-btn").disabled = true;
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").innerText = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
  document.getElementById("next-btn").disabled = true;
}

// Initialize
window.onload = () => {
  loadQuestion();
  document.getElementById("next-btn").disabled = true;
};
