const cross = document.querySelector(".cross");
const theoryTop = document.querySelector(".theory-top");
const theoryBottom = document.querySelector(".theory-bottom");
const button = document.querySelector(".click-me");
const actionAudio = document.querySelector("#correctAudio"); // This should be your audio element's ID

let index = 0;

const data = [
  {
    theory_top: "A child is any person under the age of 18.",
    image: "first.jpg",
    theory_Bottom: "Yabadabadoo!",
    buttonData: "Let's Start",
  },
  {
    theory_top: "What are Child Rights?",
    image: "second.jpg",
    theory_Bottom:
      "Children's rights are human rights that apply especially to children!",
    buttonData: "Understood",
  },
  {
    theory_top:
      "There are certain things that all humans need, such as shelter and food.",
    image: "third.jpg",
    theory_Bottom:
      "Having access to these things is seen as a right that applies to all humans—adults as well as children.",
    buttonData: "Understood",
  },
  {
    theory_top:
      "But children have additional needs, including love, protection and support as they grow and learn.",
    image: "fourth.jpg",
    theory_Bottom: "Got it!",
    buttonData: "Got it",
  },
  {
    theory_top:
      "The United Nations declared that children everywhere have the right to be protected from harm, to develop to their fullest, and to participate in the life of their family, culture, and society.",
    image: "fifth.jpg",
    theory_Bottom: "All right!",
    buttonData: "Done",
  },
];

function loadInformation(index) {
  const info = data[index];
  theoryTop.textContent = info.theory_top;
  document.querySelector(".img").src = info.image;
  theoryBottom.textContent = info.theory_Bottom;
  button.innerHTML = `${info.buttonData} <span><i class="fa-solid fa-thumbs-up"></i></span>`;
}

window.onload = function () {
  loadInformation(index);
};

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
      // setTimeout(() => {
      //     window.location.href = 'next_page.html';
      // }, 1000);
    }
  }, 500);
});

cross.addEventListener("click", function () {
  document.body.style.display = "none";
});
