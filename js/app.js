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



buttonReset.addEventListener("click", (e) => {
  overlay.style.display = "none";
});

let word = getRandomPhraseAsArray(phraseArr);

function getRandomPhraseAsArray(phrases) {
  let phrase = phrases[Math.floor(Math.random() * phrases.length)];
  let split = phrase.split(""); // splits word into new array of letters of any random given phrase
  return split;
}

addPhraseToDisplay(word); // can be removed later 

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

function checkLetters(guessedLetter) {
  let letters = document.querySelectorAll(".letter");
  lettersFound = null;
  for (let i = 0; i < letters.length; i++) {
    if(letters[i].innerHTML == guessedLetter ) {
        letters[i].classList.add("show");
        letterFound = letters[i].innerHTML;
        } else {
        // return 'null'; remember to come back to this later
    }
  }
}

let buttons = document.querySelectorAll("#qwerty button");
let letterFound = null;
let tries = document.getElementsByClassName('tries');

for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener('click', (e) => {
        checkLetters(e.target.innerHTML);
        buttons[i].classList.add("chosen");
        buttons[i].disabled = true;
        //log(missed, letterFound);
        if(letterFound == null) {
            tries[0].remove(); 
            missed++;
        } else {
            letterFound = null;
        }
        checkWin();
    });
};

function checkWin() {
    let show = document.getElementsByClassName('show');
    let letter = document.getElementsByClassName('letter');
        if(letter.length == show.length) {
            alert('WIN!');
        } else if(missed >= 5) {
            alert('LOSE!');
        }
};


