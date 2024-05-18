const userScore = 0;
const compScore= 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        console.log("it was clicked")

    });
});