var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dicename1 = "dice" + randomNumber1 + ".png";
var dicename2 = "dice" + randomNumber2 + ".png";

var imagesrc1 = "images/" + dicename1;
var imagesrc2 = "images/" + dicename2;

var image1 = document.querySelectorAll('img')[0];
var image2 = document.querySelectorAll('img')[1];

image1.setAttribute('src', imagesrc1);
image2.setAttribute('src', imagesrc2);


if (randomNumber1 > randomNumber2) {
    document.getElementById('head').innerText = "🏁Player1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.getElementById('head').innerText = "Player2 Wins!🚩";
} else {
    document.getElementById('head').innerText = "Match Draws!!";

}