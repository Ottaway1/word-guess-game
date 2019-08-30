// array of foods //

var choices = ["tacos", "pizza" , "cheese burger", "crepe", "fish and chips", "poutine", "sushi"];

// computer random selection from array and display of _ _ _ _ _ //
var computerSlection = choices[Math.floor(Math.random()*choices.length)];

console.log(computerSlection);
// user keys in letter for guesses if correct display if not correct display in box //
document.onkeyup = function(){
    var userguess = String.fromCharCode(event.keyCode)
    .toLowerCase();
}
    console.log(userguess);




// once food completely guessed add to counter and play assigned music//
// marachi//
var tacoAudio = new Audio('https://www.youtube.com/watch?v=BYwqjCj6kgc');
audio.play();
// godfather theme//
var pizzaAudio = new Audio('https://www.youtube.com/watch?v=WUUvgdjsIQk');
audio.play();
// cheese burger in paradise
var cheeseburgerAudio = new Audio('https://www.youtube.com/watch?v=OJi4bln-hHQ');
audio.play();
// Ratatouille Main Theme//
var crepeAudio = new Audio('https://www.youtube.com/watch?v=We3ht-BskBk');
audio.play();
// god save the queen//
var fishandchipsAudio = new Audio('https://www.youtube.com/watch?v=I8KSAtos-dk&t=15s');
audio.play();
// o canada //
var putineAudio = new Audio('https://www.youtube.com/watch?v=KryJpNr9eqs');
audio.play();
// sukiyaki
var sushiAudio = new Audio('https://www.youtube.com/watch?v=C35DrtPlUbc');
audio.play();



// restart with new ramdon selection from array//



