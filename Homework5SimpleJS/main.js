const yesColor = document.getElementById("yesColor");
const noColor = document.getElementById("noColor");
const maybeColor = document.getElementById("maybeColor");

let clickCount = 0;
let yesWidth = 0;
let noWidth = 0;
let maybeWidth = 0;


function progressYesAnswer() {
    clickCount++;
    yesWidth++;
    update();
}

function progressNoAnswer() {
    clickCount++;
    noWidth++;
    update();

}

function progressMaybeAnswer() {
    clickCount++;
    maybeWidth++;
    update();

}

function update(){
    yesColor.innerText = `${((yesWidth/clickCount)*100).toFixed(0)}%`;
    yesColor.style.width = `${(yesWidth/clickCount)*100}%`;
    noColor.innerText = `${((noWidth/clickCount)*100).toFixed(0)}%`;
    noColor.style.width = `${(noWidth/clickCount)*100}%`;
    maybeColor.innerText = `${((maybeWidth/clickCount)*100).toFixed(0)}%`;
    maybeColor.style.width = `${(maybeWidth/clickCount)*100}%`;
}


