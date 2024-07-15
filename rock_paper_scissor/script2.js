let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll('.choice');
const user_point = document.querySelector("#user-score");
const comp_point = document.querySelector("#computer-score")
const outputs = document.querySelector(".result");
const btn = document.querySelector("#msg");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute('id');
        playGame(userchoice);
    });
});

const computerchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const ramdom = Math.floor(Math.random() * 3);
    return options[ramdom];
}

const playGame = (userchoice) => {
    btn.innerText = "Reset";
    console.log("user choice", userchoice);
    //Generate computer choice
    const compChoice = computerchoice();
    console.log("computer choice", compChoice);

    if (userchoice == compChoice) {
        console.log("draw");
        outputs.innerText = "Draw"
    }
    else if (userchoice == "paper" && compChoice == "rock") {
        console.log("user won")
        userscore = userscore + 1;
        user_point.innerText = userscore
        outputs.innerText = "User won"
    }
    else if (userchoice == "paper" && compChoice == "scissors") {
        console.log("computer  won")
        computerscore = computerscore + 1;
        comp_point.innerText = computerscore
        outputs.innerText = "Computer won"
    }
    else if (userchoice == "rock" && compChoice == "paper") {
        console.log("computer won")
        computerscore = computerscore + 1;
        comp_point.innerText = computerscore
        outputs.innerText = "Computer won"
    }
    else if (userchoice == "rock" && compChoice == "scissors") {
        console.log("user won")
        userscore = userscore + 1;
        user_point.innerText = userscore
        outputs.innerText = "User won"
    }
    else if (userchoice == "scissors" && compChoice == "rock") {
        console.log("comp won")
        computerscore = computerscore + 1;
        comp_point.innerText = computerscore
        outputs.innerText = "computer won"

    } else if (userchoice == "scissors" && compChoice == "paper") {
        console.log("user won")
        userscore = userscore + 1;
        user_point.innerText = userscore
        outputs.innerText = "User won"
    }
}
btn.addEventListener("click", () => {
    userscore = 0;
    computerscore = 0;
    user_point.innerText = userscore;
    comp_point.innerText = computerscore;
    outputs.innerText = "";
    btn.innerText = "Let's Start";
})


