const guessWord = "UMAIR";

let guessLetter = prompt('Enter a guess letter').toLocaleUpperCase();

for (index in guessWord) {
    if (guessLetter == guessWord[index])
        console.log(guessLetter);
    else
        console.log("_");
    // console.log(guessWord[index]);
}