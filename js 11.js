'use strict';
setTimeout( () => {
    console.log('salom')
},4000);

const btn = document.querySelector('#move_btn');
let timerDD
btn.addEventListener('click',() => {
    timerDD = setInterval(logger,3000);
})

function logger(){
    console.log('salom');
}

function setOutput(outputContent) {
    document.querySelector("#output").textContent = outputContent;
}
function delayedMessage() {
    setOutput("");
    let timeoutID = setTimeout(setOutput, 2 * 1000, "qalaysam");
}

function clearMessage() {
    clearTimeout(timeoutID);
}


function myAnimation() {
    const car = document.querySelector('.car');
    let pos = 0;

    const timerId = setInterval(frame, 10);

    function frame() {
        if (pos === 700) {
            clearInterval(timerId);
        } else {
            console.log(pos)
            pos++;
            car.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);
