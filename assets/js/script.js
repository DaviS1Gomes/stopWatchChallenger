
let [milliseconds,seconds,minutes,hours] = [0,0,0,0],
    timerRef = document.querySelector('.timerDisplay'),
    int;

document.getElementById('startTimer').addEventListener('click', () => {
    int = setInterval(displayTimer,10);
    timerRef.classList.remove('paused');
});

document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(int);
    timerRef.classList.add('paused');
});

document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(int);
    seconds = 0;
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00 : 00 : 00 : 000';
    timerRef.classList.remove('paused');
});

function displayTimer() {
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60) {
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}

displayTimer()

function darkModeButton() {
    const bntMode = document.body.querySelector('.bntMode');
    const containerBtnMode = document.querySelector('.containerBtnMode');
    const bodyBackgroud = document.body;
    const containerWhite = document.querySelector('.container');
    const buttonWhite = document.querySelector('.btn');
    const buttonWhite2 = document.querySelector('.btn2');
    const buttonWhite3 = document.querySelector('.btn3');

    bntMode.addEventListener('click', () => {
        bntMode.classList.toggle('animation');
        containerBtnMode.classList.toggle('white');
        bodyBackgroud.classList.toggle('white');
        containerWhite.classList.toggle('white');
        timerRef.classList.toggle('white');
        buttonWhite.classList.toggle('white');
        buttonWhite2.classList.toggle('white');
        buttonWhite3.classList.toggle('white');
    })
}
darkModeButton()


