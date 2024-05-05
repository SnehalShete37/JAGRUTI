const questions = [
  {
    type: "srt",
    image: "Alone_1.jpg",
    question:
      "If you were playing in the park and saw a younger child sitting alone, what would you do to help them feel safe?",
    options: {
      A: "ignore the kid",
      B: "talk to him/her and invite him/her to join you to play",
    },
    answer: "B",
  },
  {
    type: "srt",
    image: "bullent.jpg",
    question:
      "Imagine you see someone being bullied at school. What could you do to help them",
    options: {
      A: "Laugh along with the bullies.",
      B: "Walk away and pretend not to notice what's happening.",
      C: "Speak up and tell a teacher or another adult about the bullying to get help for the child being bullied",
    },
    answer: "C",
  },
  {
    type: "srt",
    image: "playing.jpg",
    question:
      "Your friend wants to play a game you don't like. How do you respond?",
    options: {
      A: "Refuse to play and tell them it's a stupid game ",
      B: "Suggest a different game that you both enjoy",
      C: "Agree to play but secretly sabotage the game ",
    },
    answer: "B",
  },
  {
    type: "srt",
    image: "Noise.jpg",
    question:
      "Your neighbour is playing songs at a very high sound in the night and he is not turning it off even after you request many times, then you will:",
    options: {
      A: "Start abusing and fighting with him",
      B: "Request him last time and if he won't agree, then you will inform the police",
      C: "Inform the police without requesting him again",
      D: "None of the Above",
    },
    answer: "B",
  },
];

let correctAnswers = 0;
let currentQuestionIndex = 0;
const optionsContainer = document.getElementById("options-container");
const scorecardContainer = document.getElementById("scorecard");
const answersContainer = document.getElementById("answers");

let userResponses = []; //for answer storing

function loadQuestion(index) {
  const question = questions[index];
  document.getElementById("question-image").src = question.image;
  document.getElementById("question-text").textContent = question.question;

  optionsContainer.innerHTML = "";
  Object.keys(question.options).forEach((key) => {
    const optionText = question.options[key];
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = optionText; // Direct text addition ensures text is properly centered
    optionElement.dataset.key = key;
    optionElement.addEventListener("click", () =>
      handleOptionClick(optionElement, question.answer, key)
    );
    optionsContainer.appendChild(optionElement);
  });
}

function preloadAudio() {
  const correctAudio = document.querySelector("#correctAudio");
  const incorrectAudio = document.querySelector("#incorrectAudio");

  correctAudio.load();
  incorrectAudio.load();
}

function handleOptionClick(optionElement, correctAnswer, selectedKey) {
  // Disable further clicks on all options
  optionsContainer.childNodes.forEach((node) => {
    node.classList.add("inactive"); // Disable further interaction
    node.removeEventListener("click", handleOptionClick);
  });

  const audio =
    selectedKey === correctAnswer
      ? document.querySelector("#correctAudio")
      : document.querySelector("#incorrectAudio");
  audio.currentTime = 0; // Rewind to start
  audio.play();

  // Check if the answer is correct
  if (selectedKey === correctAnswer) {
    correctAnswers++;
    // document.getElementById('celebration-overlay').style.display = 'flex'; // Show the overlay
    // setTimeout(() => {
    //     document.getElementById('celebration-overlay').style.display = 'none'; // Automatically hide after 3 seconds
    // }, 3000);
    optionElement.classList.add("correct");
  } else {
    optionElement.classList.add("incorrect");
  }

  // Proceed to next question or finish
  userResponses.push({
    questionIndex: currentQuestionIndex,
    userAnswer: selectedKey,
    correctAnswer,
  });
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(() => loadQuestion(currentQuestionIndex), 2000);
  } else {
    setTimeout(() => {
      showScorecard();
      showAnswers();
    }, 2000);
  }

  if (currentQuestionIndex >= questions.length) {
    localStorage.setItem("userResponses", JSON.stringify(userResponses));
    localStorage.setItem("score", `${correctAnswers}/${questions.length}`);
    // window.location.href = 'progress.html'; // assuming this is the results page
  }
}

function showScorecard() {
  const totalQuestions = questions.length;
  const score = correctAnswers;
  scorecardContainer.innerHTML = ` Score: ${score}/${totalQuestions}`;
}

function showAnswers() {
  let html = "<h2>Answers</h2>";
  userResponses.forEach((response, index) => {
    const questionNumber = index + 1;
    const isCorrect = response.userAnswer === response.correctAnswer;
    const correctness = isCorrect ? "Correct" : "Incorrect";
    const color = isCorrect ? "green" : "red";
    html += `<p>
        Question ${questionNumber}: ${correctness} -{" "}
        <span style="color: ${color};">
          Your answer: ${response.userAnswer}, Correct answer: ${response.correctAnswer};
        </span> </p>`;
  });
  answersContainer.innerHTML = html;
}
window.onload = function () {
  loadQuestion(currentQuestionIndex);
};
