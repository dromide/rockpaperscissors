const game = () => {
    let pScore = 0;
    let cSorse = 0;

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeout");
        });
    };

    //Is call all the inner function
    startGame();
    updateScore();

};

//start the game function
game();