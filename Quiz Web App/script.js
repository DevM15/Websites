const startBtn = document.querySelector(".start_btn");
const infoBox = document.querySelector(".info_box");
const quizBox = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
var duration = 0;
var queNum = 5;

function change(box1,box2) {
    const Box1 = document.querySelector(`.${box1}`)
    const Box2 = document.querySelector(`.${box2}`)
    Box1.style.display = "none";
    Box2.style.display = "block";
};

function timer() {
    interval = setInterval(() => {
        if(duration==15){
            clearInterval(interval);
            setTimeout(nextQue, 5000);
        }
        duration += 1;
        document.querySelector(".timer_sec").innerHTML = 16 - duration;
    },1000)
    
    // setTimeout(timeOut,15000);
};

function nextQue() {
    document.querySelector(".total_que span p:first-child").innerHTML = queNum;
    clearInterval(interval);
    duration = 0;
    queNum += 1;
    if(queNum == 6){change("quiz_box","result_box")}
    timer();
}