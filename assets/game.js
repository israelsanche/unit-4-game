// Variables Here:
// Track Random number:
var randomNumber = "";

// track wins
var wins = 0;

// track losses
var losses = 0;

// Track Crystal 1 clicked value, maybe make random function and store here the returned value of that round... Values are 1-12 individual random.
var crystal1 = 0;
// Track Crystal 2 clicked value
var crystal2 = 0;
// Track Crystal 3 Clicked Value
var crystal3 = 0;
// Track crystal 4 clicked value
var crystal4 = 0;

var click1 = 0;
var click2 = 0;
var click3 = 0;
var click4 = 0;
// Track total user score
var totalscore = parseInt(click1 + click2 + click3 + click4);

// Create variables that hold references to the places in the HTML where we want to display things.
var directionsText = $("#directions-text");
var randomscoredisplay = $("#random-text");
var clickedscoredisplay = $("#clickedscore-text");
var winsText = $("#wins-text");
var lossesText = $("#losses-text");
var crystalbutton1 = $("#crystalbutton1");
var crystalbutton2 = $("#crystalbutton2");
var crystalbutton3 = $("#crystalbutton3");
var crystalbutton4 = $("#crystalbutton4");
var crystalbuttons = $(".crystalclass");

// Game reset function
function gamereset() {
    randomnewNumber();
    crystalrandomvalue();
    clickedscoredisplay = 0;
    totalscore = 0;

}
// Functions here.
// 1. Function to create a random number for user to guess:
function randomnewNumber() {
    var newNumber = Math.floor((Math.random() * 101) + 1);
    randomNumber = parseInt(newNumber + 19);
    randomscoredisplay.text(randomNumber);
    console.log("New Random Number is: " + randomNumber);


}
console.log(randomNumber);

// 2. Function for each crystal to genereate own random number:
function crystalrandomvalue() {
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    crystalbutton1 = crystal1;
    crystalbutton2 - crystal2;
    crystalbutton3 = crystal3;
    crystalbutton4 = crystal4;
}
crystalrandomvalue();
console.log("crystal 1: " + crystal1, "Crystal 2: " + crystal2, "Crystal 3: " + crystal3, "Crystal 4: " + crystal4);
console.log(crystalbutton1);

// 3. Function for onclick of crystal 1
$("#crystalbutton1").on("click", function () {
    if (click1 === 0) {
        click1 = crystal1;
        console.log("if click1 is working");
        console.log(click1);
        totalscore = parseInt(click1 + click2 + click3 + click4);
        console.log(totalscore)
        $("#clickedscore-text").text(totalscore);
        // if (totalscore > randomNumber) {
        //     losses++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("You've Lost!! Better Luck This Round!!");

        // }
        // if (totalscore === randomNumber) {
        //     wins++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("Congrats, You've won! Can you do it again?");
        // }

    }
    else {
        click1 = parseInt(click1 + crystal1);
        console.log("else click 1 is working");
        console.log(click1);
        totalscore = parseInt(click1 + click2 + click3 + click4);
        console.log(totalscore)
        $("#clickedscore-text").text(totalscore);
        // if (totalscore > randomNumber) {
        //     losses++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("You've Lost!! Better Luck This Round!!");

        // }
        // if (totalscore === randomNumber) {
        //     wins++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("Congrats, You've won! Can you do it again?");
        // }
    }

});
//   Function for onclick of crystal 2
$("#crystalbutton2").on("click", function () {
    if (click2 === 0) {
        click2 = crystal2;
        console.log("if click 2 is working");
        console.log(click2)
        totalscore = parseInt(click1 + click2 + click3 + click4);
        console.log(totalscore)
        $("#clickedscore-text").text(totalscore);
        // if (totalscore > randomNumber) {
        //     losses++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("You've Lost!! Better Luck This Round!!");

        // }
        // if (totalscore === randomNumber) {
        //     wins++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("Congrats, You've won! Can you do it again?");
        // }
    }
    else {
        click2 = parseInt(click2 + crystal2);
        console.log("else click 2 is working")
        console.log(click2)
        totalscore = parseInt(click1 + click2 + click3 + click4);
        console.log(totalscore)
        $("#clickedscore-text").text(totalscore);
        // if (totalscore > randomNumber) {
        //     losses++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("You've Lost!! Better Luck This Round!!");

        // }
        // if (totalscore === randomNumber) {
        //     wins++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("Congrats, You've won! Can you do it again?");
        // }
    }

});
//   onclick crystal 3
$("#crystalbutton3").on("click", function () {
    if (click3 === 0) {
        click3 = crystal3;
        console.log("if click 3 is working");
        console.log(click3)
        totalscore = parseInt(click1 + click2 + click3 + click4);
        console.log(totalscore)
        $("#clickedscore-text").text(totalscore);
        // if (totalscore > randomNumber) {
        //     losses++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("You've Lost!! Better Luck This Round!!");

        // }
        // if (totalscore === randomNumber) {
        //     wins++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("Congrats, You've won! Can you do it again?");
        // }
    }
    else {
        click3 = parseInt(click3 + crystal3);
        console.log("else click 3 is working")
        console.log(click3)
        totalscore = parseInt(click1 + click2 + click3 + click4);
        console.log(totalscore)
        $("#clickedscore-text").text(totalscore);
        // if (totalscore > randomNumber) {
        //     losses++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("You've Lost!! Better Luck This Round!!");

        // }
        // if (totalscore === randomNumber) {
        //     wins++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("Congrats, You've won! Can you do it again?");
        // }
    }

});
//   onclick crystal 4
$("#crystalbutton4").on("click", function () {
    if (click4 === 0) {
        click4 = crystal4;
        console.log("if click 4 is working");
        console.log(click4)
        totalscore = parseInt(click1 + click2 + click3 + click4);
        console.log(totalscore)
        $("#clickedscore-text").text(totalscore);
        // if (totalscore > randomNumber) {
        //     losses++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "";
        //     totalscore = 0;
        //     directionsText.text("You've Lost!! Better Luck This Round!!");

        // }
        // if (totalscore === randomNumber) {
        //     wins++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "-";
        //     totalscore = 0;
        //     directionsText.text("Congrats, You've won! Can you do it again?");
        // }
    }
    else {
        click4 = parseInt(click4 + crystal4);
        console.log("else click 4 is working")
        console.log(click4)
        totalscore = parseInt(click1 + click2 + click3 + click4);
        console.log(totalscore)
        $("#clickedscore-text").text(totalscore);
        // if (totalscore > randomNumber) {
        //     losses++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "-";
        //     totalscore = 0;
        //     directionsText.text("You've Lost!! Better Luck This Round!!");

        // }
        // if (totalscore === randomNumber) {
        //     wins++;
        //     randomnewNumber();
        //     crystalrandomvalue();
        //     clickedscoredisplay = "-";
        //     totalscore = 0;
        //     directionsText.text("Congrats, You've won! Can you do it again?");
        // }
    }

});

if ($(parseInt("#clickedscore-text") > randomNumber)) {
    losses++;
    randomnewNumber();
    crystalrandomvalue();
    clickedscoredisplay = "-";
    totalscore = 0;
    directionsText.text("You've Lost!! Better Luck This Round!!");

}
if ($(parseInt("#clickedscore-text") === randomNumber)) {
    wins++;
    randomnewNumber();
    crystalrandomvalue();
    clickedscoredisplay = "-";
    totalscore = 0;
    directionsText.text("Congrats, You've won! Can you do it again?");
}

// 4. Function for game reset after win or lose. This would be an if function for win else lose to reset game and up win or lose score.


// Function that updates the wins...
function updatewins() {
    $("#wins").innerHTML = "Wins: " + wins;
}
// Function that updates the losses...
function updatelosses() {
    $("#losses").innerHTML = "Losses: " + losses;
}
// function updateclicked() {
//     $("#clickedscore-text").innerHTML = totalscore;
// }


// Call the Functions to start the game:
randomnewNumber()
