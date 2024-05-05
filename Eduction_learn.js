const cross = document.querySelector(".cross");
const theoryTop = document.querySelector(".theory-top");
const theoryBottom = document.querySelector(".theory-bottom");
const button = document.querySelector(".click-me");
const actionAudio = document.querySelector("#correctAudio");

let index = 0;

const data = [
  {
    type: "none",
    theory_top:
      "Today, we're going to talk about something really special - your right to education",
    image: "child education.jpg",
    theory_Bottom: "",
    buttonData: "Let's begin in Style",
  },
  {
    type: "none",
    theory_top:
      "You might already know that going to school is important, but do you know why?",
    image: "edu_second.jpg",
    theory_Bottom: "",
    buttonData: "Let's find out!",
  },
  {
    type: "chooseOne",
    theory_top: "Education is like a superpower that helps you learn and grow.",
    image: "edu_third.jpg",
    theory_Bottom: "",
    buttonData: "Superhero for rescue",
    buttonData2: "Avengers Assemble!",
  },
  {
    type: "none",
    theory_top:
      "When you go to school, you get to learn all sorts of amazing things, like reading, writing, math, science, and so much more.",
    image: "edu_fourth.jpg",
    theory_Bottom: "",
    buttonData: "Awesome!",
  },
  {
    type: "chooseOne",
    theory_top: "But did you know that education is also a right?",
    image: "edu_five.jpg",
    theory_Bottom: "",
    buttonData: "Yes, I Knew!",
    buttonData2: "No,But Now I got it!",
  },
  {
    type: "none",
    theory_top:
      "Every child has the right to go to school and get an education.",
    image: "edu_six.jpg",
    theory_Bottom: "",
    buttonData: "All right!!",
  },
  {
    type: "none",
    theory_top:
      " It doesn't matter where you come from, what you look like, or how much money your family has—you have the right to learn and explore the world around you.",
    image: "edu_seven.jpg",
    theory_Bottom: "",
    buttonData: "Got it!",
  },
  {
    type: "none",
    theory_top:
      "When you have an education, you have the power to dream big and make those dreams come true.",
    image: "edu_eight.jpg",
    theory_Bottom: "",
    buttonData: "Great!",
  },
  {
    type: "none",
    theory_top:
      "Education opens doors to endless possibilities and helps you reach for the stars.",
    image: "edu_nine.jpg",
    theory_Bottom: "",
    buttonData: "Eureka!",
  },
  {
    type: "none",
    theory_top:
      "But education is not just about learning facts and figures. It's also about learning important values, like kindness, respect, and teamwork.",
    image: "edu_ten.jpg",
    theory_Bottom: "",
    buttonData: "Great!",
  },
  {
    type: "none",
    theory_top:
      "It teaches you how to be a good friend, a responsible citizen, and a positive force in the world.",
    image: "edu_ele.jpg",
    theory_Bottom: "",
    buttonData: "Nice!",
  },
  {
    type: "none",
    theory_top:
      "So, let's celebrate our right to education and make the most of every opportunity to learn and grow.",
    image: "edu_twel.jpg",
    theory_Bottom: "",
    buttonData: "Woohoo!",
  },
  {
    type: "none",
    theory_top:
      "Remember, education is your key to a bright and successful future, so let's unlock its full potential together!",
    image: "edu_thirt.jpg",
    theory_Bottom: "",
    buttonData: "Fantastic!",
  },
];

const buttonSecond = document.querySelector(".click-mee");

function loadInformation(index) {
  const info = data[index];

  const buttonContainerSecond = buttonSecond.parentNode;
  theoryTop.textContent = info.theory_top;
  document.querySelector(".img").src = info.image;
  theoryBottom.textContent = info.theory_Bottom;
  button.innerHTML = `${info.buttonData} <span><i class="fa-solid fa-thumbs-up"></i></span>`;

  if (info.type === "chooseOne") {
    buttonSecond.innerHTML = `${info.buttonData2} <span><i class="fa-solid fa-thumbs-up"></i></span>`;
    buttonContainerSecond.style.display = "block";
  } else {
    buttonContainerSecond.style.display = "none";
  }
}

button.addEventListener("click", () => {
  actionAudio.play();
  setTimeout(() => {
    if (index < data.length - 1) {
      index++;
      loadInformation(index);
    } else {
      button.disabled = true;
      button.innerHTML =
        "Thank You! <span><i class='fa-solid fa-heart'></i></span>";
    }
  }, 500);
});

buttonSecond.addEventListener("click", () => {
  actionAudio.play();
  setTimeout(() => {
    if (index < data.length - 1) {
      index++;
      loadInformation(index);
    } else {
      button.disabled = true;
      button.innerHTML =
        "Thank You! <span><i class='fa-solid fa-heart'></i></span>";
    }
  }, 500);
});

cross.addEventListener("click", function () {
  document.body.style.display = "none";
});

window.onload = function () {
  loadInformation(index);
};
