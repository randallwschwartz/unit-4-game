// Javascript for Collect Crystals

var randomNumber = document.getElementById("RandomNumber");
var wins = document.getElementById("numWins");
var losses = document.getElementById("numLosses");
var totalScore = document.getElementById("TotalScore");
var crystalOne = document.getElementById("crystal_1");
var crystalTwo = document.getElementById("crystal_2");
var crystalThree = document.getElementById("crystal_3");
var crystalFour = document.getElementById("crystal_4");
var min = 0;
var max = 0;

wins = 0;
losses = 0;
totalScore = 0;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function gameBegin() {
    document.getElementById("numWins").innerHTML = wins;
    document.getElementById("numLosses").innerHTML = losses;

    // generate new randomNumber between 19-120
    randomNumber = getRndInteger(19,120);

    // assign random values to each crystal between 1-12
    crystalOne = getRndInteger(1,12);
    crystalTwo = getRndInteger(1,12);
    crystalThree = getRndInteger(1,12);
    crystalFour = getRndInteger(1,12);

    console.log(randomNumber);
    console.log(crystalOne);
    console.log(crystalTwo);
    console.log(crystalThree);
    console.log(crystalFour);

}

gameBegin();
