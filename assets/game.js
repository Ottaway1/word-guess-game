// array of foods //

var choices = ["tacos", "pizza", "cheese burger", "crepe", "fish and chips", "poutine", "sushi"];

var goodLetters = "";
var answer = "";
// computer random selection from array and display of _ _ _ _ _ //
var computerSelection = choices[Math.floor(Math.random() * choices.length)];

console.log(computerSelection);
// user keys in letter for guesses if correct display if not correct display in box //
var answerStr = "";

for (var i = 0; i < computerSelection.length; i++) {
    answerStr += "_  ";
    answer += "-"

}
 window.onload = function () {
    document.getElementById("correct").innerHTML = answerStr;
    console.log(answerStr);
}

var remainingLetters = choices.length;
// compairing  userguess to each string and stating true but also stating each time it is false
document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode)
        .toLowerCase();
        var answerTp = "";
       
    for (var i = 0; i < computerSelection.length; i++) {
        if (userguess == computerSelection.charAt(i)) {
            console.log("correct " + userguess);
           answerTp +=userguess;
           console.log(goodLetters);

           // new user guess to be checked if true create new string with updated correct letter and also old correct letter
        }
        else {
            if ('-' == answer.charAt(i)){
            answerTp+= "-";
            }
            else {
                answerTp+= answer.charAt(i);
            }
            console.log("incorrect " + userguess);
            // If false place in not correct box and create new string with updated non correct letter and old non correct letter
        }
    }
    answer = answerTp;
    document.getElementById("correct").innerHTML = answer;
    console.log("answer; "+answer);
} //end of function







// I need to update html based correct or incorrect



// 











// // 
// // once food completely guessed add to counter and play assigned music//
// // marachi//
// var tacoAudio = new Audio('https://www.youtube.com/watch?v=BYwqjCj6kgc');
// audio.play();
// // godfather theme//
// var pizzaAudio = new Audio('https://www.youtube.com/watch?v=WUUvgdjsIQk');
// audio.play();
// // cheese burger in paradise
// var cheeseburgerAudio = new Audio('https://www.youtube.com/watch?v=OJi4bln-hHQ');
// audio.play();
// // Ratatouille Main Theme//
// var crepeAudio = new Audio('https://www.youtube.com/watch?v=We3ht-BskBk');
// audio.play();
// // god save the queen//
// var fishandchipsAudio = new Audio('https://www.youtube.com/watch?v=I8KSAtos-dk&t=15s');
// audio.play();
// // o canada //
// var putineAudio = new Audio('https://www.youtube.com/watch?v=KryJpNr9eqs');
// audio.play();
// // sukiyaki
// var sushiAudio = new Audio('https://www.youtube.com/watch?v=C35DrtPlUbc');
// audio.play();
// // 



// restart with new ramdon selection from array//



