const cross = document.querySelector('.cross');
const theoryTop = document.querySelector('.theory-top');
const theoryBottom = document.querySelector('.theory-bottom');
const button = document.querySelector('.click-me');
const actionAudio = document.querySelector('#correctAudio'); 

let index = 0;

const data = [
    {
        type:"none",
        theory_top: `Let's start by understanding what "protection" means.`,
        image: "p_first.png",
        theory_Bottom: "Let's Go!",
        buttonData: "Let's Start"
    },
    {
        type:"none",
        theory_top: "Protection is like having a shield around us that keeps us safe from harm.",
        image: "p_second.jpg",
        theory_Bottom: "Got it!",
        buttonData: "Understood"
    },
    {
        type:"chooseOne",
        theory_top: "Following scenarios is safe or dangerous?",
        image: "p_third.jpg",
        theory_Bottom: "",
        buttonData: "Safe",
        buttonData2 : "Dangerous",
        
    },
    {
        type:"none",
        theory_top: "Sometimes people can be intentionally mean or hurtful to others.",
        image: "p_fourth.jpg",
        theory_Bottom: "",
        buttonData: "Got it"
    },
    {
        type:"none",
        theory_top: "Well, when someone does or says something that makes you feel bad inside, that's called violence.",
        image: "physical_voilence.jpg",
        theory_Bottom: "Feeling Scared? Don't worry",
        buttonData: "Next"
    },
    {
        type:"none",
        theory_top: "But guess what?",
        image: "p_fifth.jpg",
        theory_Bottom: "You have the right to be safe and protected from any kind of violence!",
        buttonData: "Ohh"
    },
    {
        type:"none",
        theory_top: "That means no one should ever make you feel scared or hurt on purpose.",
        image: "p_sixth.jpg",
        theory_Bottom: "",
        buttonData: "Understood"
    },
    {
        type:"none",
        theory_top: "It's really important to know that you have the power to do something about it if it happens to you!",
        image: "p_seven.jpg",
        theory_Bottom: "Ok! I am strong!!",
        buttonData: "Yess"
    },
    {
        type:"none",
        theory_top: "So, what can you do if something like this happens?",
        image: "p_eight.jpg",
        theory_Bottom: "Let's see",
        buttonData: "Next"
    },
    {
        type:"none",
        theory_top: "First, try to stay calm, even if you're feeling upset.It's super important to tell a grown-up you trust, like a teacher, parent, or another family member.  They can help you figure out what to do next and make sure you're safe. ",
        image: "p_nine.jpg",
        theory_Bottom: "",
        buttonData: "Understood"
    },
    {
        type:"none",
        theory_top: "Remember, it's not your fault if someone is mean or hurts you.",
        image: "p_ten.jpg",
        theory_Bottom: "Got it!",
        buttonData: "Done"

    },
];

const buttonSecond = document.querySelector('.click-mee');



function loadInformation(index) {
    const info = data[index];
   
    const buttonContainerSecond = buttonSecond.parentNode; 

    if (info.type === "chooseOne") 
    {
        theoryTop.textContent = info.theory_top;
        document.querySelector('.img').src = info.image;
        theoryBottom.textContent = info.theory_Bottom;
        button.innerHTML = `${info.buttonData} <span><i class="fa-solid fa-thumbs-up"></i></span>`;

        buttonSecond.innerHTML = `${info.buttonData2} <span><i class="fa-solid fa-thumbs-up"></i></span>`;
        buttonContainerSecond.style.display = 'block'; 
       
    } 
    else
    {
        theoryTop.textContent = info.theory_top;
        document.querySelector('.img').src = info.image;
        theoryBottom.textContent = info.theory_Bottom;
        button.innerHTML = `${info.buttonData} <span><i class="fa-solid fa-thumbs-up"></i></span>`;
        buttonContainerSecond.style.display = 'none'; 
    }
}



button.addEventListener('click', () => {
    if (data[index].type === "chooseOne")
    {
        button.classList.add('animated');
        setTimeout(() => {
            button.classList.remove('animated');  
        }, 1000);  
    } 
    else 
    {
        actionAudio.play(); 
        setTimeout(() => {
            if (index < data.length - 1) 
            {
                index++;
                loadInformation(index);
            } 
            else 
            {
                button.disabled = true;
                button.innerHTML = "Thank You! <span><i class='fa-solid fa-heart'></i></span>";
            }
        }, 500); 
    }
});

buttonSecond.addEventListener('click', () => {
    actionAudio.play(); 
    setTimeout(() => {
        if (index < data.length - 1) 
        {
            index++;
            loadInformation(index);
        } 
        else 
        {
            button.disabled = true;
            button.innerHTML = "Thank You! <span><i class='fa-solid fa-heart'></i></span>";
        }
    }, 500); 
});

    
cross.addEventListener('click', function() 
{
 
    document.body.style.display = 'none';
});

window.onload = function() 
{
    loadInformation(index);
};