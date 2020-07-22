let qwerty = document.getElementById("qwerty");
let phrase = document.getElementById("phrase");
let missed = 0;
let overlay = document.querySelector("#overlay");
let buttonReset = document.querySelector(".btn__reset");
let phraseArr = [
  "my name is anthony",
  "front end web developer",
  "money printer",
  "jerome powell",
  "dave chapelle",
];
let log = console.log;


// When start button is clicked, initial blue screen disappears and keyboard and word panel appear
buttonReset.addEventListener("click", (e) => {
  overlay.style.display = "none";
});

// Randomly chooses a phrase which is used in function below
let word = getRandomPhraseAsArray(phraseArr);

//Gets random phrase and is assigned in word panel 
function getRandomPhraseAsArray(phrases) {
  let phrase = phrases[Math.floor(Math.random() * phrases.length)];
  let split = phrase.split(""); // splits word into new array of letters of any random given phrase
  return split;
}

addPhraseToDisplay(word);

// iterates over each letter selected in a given phrase and spaces a phrase when necessary and also draws the <li> element to the page
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
    let phraseUl = document.getElementById("phrase");
    if (arr[i] == " ") {
      phraseUl.innerHTML += `<li>${arr[i]}</li>`;
    } else {
      phraseUl.innerHTML += `<li class="letter">${arr[i]}</li>`;
    }
  }
}

// function that makes the letters drawn VISIBLE 
function checkLetters(guessedLetter) {
  let letters = document.querySelectorAll(".letter");
  letterFound = null;
  for (let i = 0; i < letters.length; i++) {
    if(letters[i].innerHTML == guessedLetter ) {
        letters[i].classList.add("show");
        letterFound = letters[i].innerHTML;
        }
  }
}

let buttons = document.querySelectorAll("#qwerty button");
let letterFound = null;
let tries = document.getElementsByClassName('tries');

// Once a letter is chosen once it cannot be chosen again and you lose a heart (turn) and as long as the letter guessed continues to be wrong, it will continue to document incorrect letters until turns run out
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', (e) => {
        checkLetters(e.target.innerHTML);
        buttons[i].classList.add("chosen");
        buttons[i].disabled = true;
        if(letterFound == null) {
            tries[0].remove(); 
            missed++;
        } else {
            letterFound = null;
        }
        checkWin();
    });
};

// function disables you from playing any further after lose or win prompt appears
function gameOver() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

// If you guess the correct phrase before losing all turns, you win, or else a lose prompt appears and game stops
function checkWin() {
    let show = document.getElementsByClassName('show');
    let letter = document.getElementsByClassName('letter');
        if(letter.length == show.length) {
            alert('WIN!');
            gameOver();
        } else if(missed >= 5) {
            alert('LOSE!');
            gameOver();
        }
};


