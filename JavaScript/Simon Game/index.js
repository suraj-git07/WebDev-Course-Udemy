var buttonC = ['red', 'blue', 'green', 'yellow'];
var gamepattern = [];
var userClickedPattern = [];


document.addEventListener('keypress', function(e) {
    if (e.key == 'a') {

        document.getElementById('level-title').innerText = "Level 1";
        nextSequence();

    }
})




var lev = 1;
nextSequence = () => {
    console.log("Level " + lev);
    randomNum = Math.floor(Math.random() * 4);
    choosenColor = buttonC[randomNum];
    gamepattern.push(choosenColor);
    Animate(choosenColor);
    playSound(choosenColor);

    setTimeout(function() {

        console.log(checkAnswer(lev));
        if (checkAnswer(lev)) {
            lev++;
            incHead(lev);
            userClickedPattern.splice(0, userClickedPattern.length);
            setTimeout(nextSequence, 500);
        } else if (checkAnswer(lev) == false) {

            gameover();
            startover();
            document.getElementById('level-title').innerText = "Press a to RESTART!!!!"
        }

    }, 5000)

}



for (var i = 0; i < document.querySelectorAll('.btn ').length; i++) {
    document.querySelectorAll('.btn')[i].addEventListener("click", function() {
        Animate(this.id);
        playSound(this.id);
        userClickedPattern.push(this.id);

    })

}

//======================================= Other Functions Used======================

incHead = (lev) => {
    document.getElementById('level-title').innerText = "Level " + lev;
}


playSound = (choosenColor) => {
    var format = "Sounds/" + choosenColor + ".mp3";
    var audio = new Audio(format);
    audio.play();

}



Animate = (choosenColor) => {
    var active_btn = document.querySelector("." + choosenColor);
    active_btn.classList.add("pressed");
    setTimeout(function() {
        active_btn.classList.remove("pressed")
    }, 500);
}


checkAnswer = (currentlevel) => {
    for (var i = 0; i < currentlevel; i++) {
        if (userClickedPattern[i] == gamepattern[i]) {
            console.log('success')
        } else {
            console.log("Game-Over");
            playSound("wrong")
            return false;
        }

    }
    return true;
}

gameover = () => {
    document.querySelector("body").classList.add("game-over");
    setTimeout(function() {
        document.querySelector("body").classList.remove("game-over");
    }, 1000)
}

startover = () => {
    gamepattern = [];
    userClickedPattern = [];
}