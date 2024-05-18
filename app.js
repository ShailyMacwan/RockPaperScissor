const userScore = 0;
const compScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
//Generate computer choice
const genCompChoice =() =>{
    const options = ["rock", "paper" ,"scissors"];
    const indexId = options[Math.floor(Math.random()*3)];

    return indexId;
};

const drawGame =()=>{
    console.log("It is a Draw!!!");
    msg.innerText= "It was a Draw. Try Again"

};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        console.log("You Win!!!!");
        msg.innerText= `Congratulations. You win!!. Your ${userChoice} defeated ${compChoice}`;
        msg.style.backgroundColor ="green";

    }
    else{
        console.log("You Lost!!!");
        msg.innerText= `You Lost. ${compChoice} defeated your ${userChoice} Try Again`;
        msg.style.backgroundColor ="red";
    }

};

const playGame =(userChoice)=>{

    console.log("User Choice:", userChoice);

    const compChoice = genCompChoice();
    console.log("Computer Choice:", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        var userWin = true;

        if(userChoice ==="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === " paper"){
            userWin = compChoice === "scissors" ? false: true;
        }
        else {
            userWin = compChoice ==="rock" ? false: true;
        }
    }

    showWinner (userWin, userChoice, compChoice);

};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});



