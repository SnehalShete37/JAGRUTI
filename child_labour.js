const cross = document.querySelector(".cross");
const theoryTop = document.querySelector(".theory-top");
const theoryBottom = document.querySelector(".theory-bottom");
const button = document.querySelector(".click-me");
const actionAudio = document.querySelector("#correctAudio");

let index = 0;

const data = [
  {
    type: "none",
    theory_top: ` Now let's discuss child labour and your right to be protected from it.`,
    image: "lab_1.jpg",
    theory_Bottom: "",
    buttonData: "Let's Start",
  },
  {
    type: "none",
    theory_top:
      "child labour is when children like you are made to work instead of going to school or playing and having fun like you should be able to.",
    image: "lab_2.jpg",
    theory_Bottom: "",
    buttonData: "Understood!",
  },
  {
    type: "none",
    theory_top: "1 in 10 child labourers worldwide is from India!",
    image: "lab_3.jpg",
    theory_Bottom: "Which is equal to 1.01 crore of children!",
    buttonData: "Got It!",
    // buttonData2 : "Avengers Assemble!",
  },
  {
    type: "none",
    theory_top: "But there is a law against child labour!",
    image: "lab_4.jpg",
    theory_Bottom: "",
    buttonData: "Let's learn!!",
  },
  {
    type: "chooseOne",
    theory_top:
      "So, what can you do if someone tries to make you work when you shouldn't have to?",
    image: "lab_5.jpg",
    theory_Bottom: "",
    buttonData: "Yes, I will Do!",
    buttonData2: "I will Refuse!",
  },
  {
    type: "none",
    theory_top:
      "First, remember that it's okay to say no! You have the right to say no to anything that feels wrong or makes you uncomfortable.",
    image: "lab_6.jpg",
    theory_Bottom: "",
    buttonData: "All right!!",
  },
  {
    type: "none",
    theory_top:
      "You see, every child has the right to learn and grow, to go to school, and to play with their friends.",
    image: "lab_7.jpg",
    theory_Bottom: "",
    buttonData: "Okay!",
  },
  {
    type: "none",
    theory_top:
      "But when children are forced to work, it can be really hard for them.",
    image: "lab_9.jpg",
    theory_Bottom:
      "They might have to do dangerous jobs, work long hours, and not get paid very much—if at all!",
    buttonData: "Got It!",
  },
  {
    type: "none",
    theory_top:
      "That means no one should ever make you or any other child work when you're supposed to be in school or enjoying your childhood.",
    image: "lab_10.jpg",
    theory_Bottom: "",
    buttonData: "great!",
  },
  {
    type: "none",
    theory_top:
      "Tell a grown-up you trust, like a parent, teacher, or another family member, about what's happening. They can help you and make sure you stay safe and protected.",
    image: "lab_11.jpg",
    theory_Bottom: "",
    buttonData: "Got It!",
  },
  {
    type: "none",
    theory_top:
      "And lastly, remember that you have the right to learn, play, and be a kid!",
    image: "lab_12.jpg",
    theory_Bottom: "",
    buttonData: "Done, Got It!",
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
