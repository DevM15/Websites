const startBtn = document.querySelector(".start_btn");
const infoBox = document.querySelector(".info_box");
const quizBox = document.querySelector(".que_text");
const result_box = document.querySelector(".result_box");
const options = document.querySelectorAll(".option_list .option");
const timerText = document.querySelector(".timer_sec");
const tickIcon = "<div class='icon tick'><i class='fas fa-check'></i></div>"
const crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>'

var timeout;
var duration = 0;
let queNum = 0;
let storedCorrect = 0;
let correct = 0;

const Que = [  [   '1. What does HTML stand for?',
                    'Hyper Text Preprocessor',
                    'Hyper Text Markup Language',
                    'Hyper Text Multiple Language',
                    'Hyper Tool Multi Language',
                    'Hyper Text Markup Language'
                ],
                [   '2. What does CSS stand for?',
                    'Common Style Sheet',
                    'Colorful Style Sheet',
                    'Computer Style Sheet',
                    'Cascading Style Sheet',
                    'Cascading Style Sheet',
                ],
                [   '3. What does PHP stand for?',
                    'Hypertext PreProcessor',
                    'Hypertext Programming',
                    'Hypertext PreProgramming',
                    'Hometext Preprocessor',
                    'Hypertext PreProcessor',
                ],
                [   '4. What does SQL stand for?',
                    'Stylish Question Language',
                    'Stylesheet Query Language',
                    'Statement Question Language',
                    'Structured Query Language',
                    'Structured Query Language'
                ],
                [   '5. What does XML stand for?',
                    'extensible Markup Language',
                    'executable Multiple Language',
                    'extra Multi Program Language',
                    'examine Multiple Language',
                    'extensible Markup Language'
                ]
];

function change(box1,box2) {
    const Box1 = document.querySelector(`.${box1}`);
    const Box2 = document.querySelector(`.${box2}`);
    Box1.style.opacity = "0";
    Box1.style.pointerEvents = "none"; 
    Box2.style.opacity = "1";
    Box2.style.pointerEvents = "all";
};

function answer(e) {
    if(Que[queNum-1][e.target.id] === Que[queNum-1][5]) {
        e.target.style.background = "#b4ecc2"
        e.target.innerHTML += tickIcon;
        correct += 1;
        clearInterval(interval);
        options.forEach(option => {
            option.removeEventListener("click", answer)
        }) 
        console.log("correct");
        timeout = setTimeout(nextQue, 5000);  
    }
    else {
        e.target.style.background = "#f8d7da";
        e.target.innerHTML += crossIcon;
        clearInterval(interval);
        options.forEach(option => {
            option.removeEventListener("click", answer)
            if(option.querySelector("span").innerHTML == Que[queNum-1][5]) {
                option.style.background = "#b4ecc2";
                option.innerHTML += tickIcon;
            }
        })
        console.log("incorrect")
        timeout = setTimeout(nextQue, 5000); 
    }
};

function timer() {
    interval = setInterval(() => {
        if(duration==15){
            clearInterval(interval);
            options.forEach((option,key) => {
                option.removeEventListener("click", answer)
                if(option.querySelector("span").innerHTML == Que[queNum-1][5]) {
                    option.style.background = "#b4ecc2";
                    option.innerHTML += tickIcon;
                    console.log("incorrect from timer");
                }
            })
            timeout = setTimeout(nextQue, 5000);
        }
        duration += 1;
        timerText.innerHTML = 16 - duration;
    },1000)
};

function nextQue() {
    queNum += 1;
    clearTimeout(timeout);
    if(queNum > 5){
        queNum = 0;
        change("quiz_box","result_box");
        clearInterval(interval);
        storedCorrect = correct;
        correct = 0;
        document.querySelector(".score_text span p:first-child").innerHTML = storedCorrect;
        console.log("end")
        return;
    }
    document.querySelector(".total_que span p:first-child").innerHTML = queNum;
    options.forEach((option,key) => {
        option.style.background = "";
        option.innerHTML = '<span></span>';
        option.querySelector("span").innerHTML = Que[queNum-1][key+1];
        option.addEventListener("click", answer);
    })
    quizBox.innerHTML = Que[queNum - 1][0];
    clearInterval(interval);
    duration = 0;
    timer();
};


options.forEach(option => {
    option.addEventListener("click", answer);
})