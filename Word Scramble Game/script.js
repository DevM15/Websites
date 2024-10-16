const words = [
    {
      word: "apple",
      hint: "A fruit that keeps the doctor away."
    },
    {
      word: "elephant",
      hint: "The largest land animal."
    },
    {
      word: "jupiter",
      hint: "The largest planet in our solar system."
    },
    {
      word: "guitar",
      hint: "A musical instrument with strings."
    },
    {
      word: "pyramid",
      hint: "A structure built by ancient Egyptians."
    },
    {
      word: "volcano",
      hint: "A mountain that erupts with lava."
    },
    {
      word: "kangaroo",
      hint: "An animal that hops and carries babies in a pouch."
    },
    {
      word: "python",
      hint: "A large snake or a popular programming language."
    },
    {
      word: "chess",
      hint: "A board game of strategy with kings and queens."
    },
    {
      word: "bicycle",
      hint: "A vehicle with two wheels and pedals."
    },
    {
      word: "internet",
      hint: "A global network connecting millions of computers."
    },
    {
      word: "rainbow",
      hint: "An arc of colors seen after rain."
    },
    {
      word: "mountain",
      hint: "A large natural elevation of the earth's surface."
    },
    {
      word: "penguin",
      hint: "A flightless bird that lives in cold regions."
    },
    {
      word: "robot",
      hint: "A machine capable of carrying out complex tasks."
    }
  ];

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
inputField = document.querySelector("input");

let correctWord, timer;

const initTimer = maxTime => {
  clearInterval(timer);
  timer = setInterval(() => {
    if(maxTime > 0) {
      maxTime--;
      return timeText.innerHTML = maxTime;
    }
    clearInterval(timer);
    alert (`Time off! ${correctWord.toUpperCase()} was correct word`)
    initGame();
  }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerHTML = wordArray.join("");
    hintText.innerHTML = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    console.log(randomObj);
}
initGame();

const checkWord = () => {
  let userWord =  inputField.value.toLocaleLowerCase();
  if(!userWord) return alert('Please enter a word ')
  if(userWord !== correctWord) return alert (`Opps! ${userWord} is not a correct word`);
  alert (`Congrats! ${userWord.toUpperCase()} is a correct word`)
  initGame();
} 

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord)
  