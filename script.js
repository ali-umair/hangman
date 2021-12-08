const correctWord = ["U", "M", "A", "I", "R"];
const guessWord = ["_", "_", "_", "_", "_"];


const p = document.querySelector('p');
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    let guessLetter = prompt('Enter a guess letter').toLocaleUpperCase();

    for (index in correctWord) {
        if (guessLetter == correctWord[index]) {
            guessWord.splice(index, index, guessLetter);
            p.textContent = guessWord.join(" ");
        }
        // console.log(guessWord[index]);
    }
})