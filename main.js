let submitButton = document.getElementById("feedbackButton");
let boxId = '';
let myButton = document.getElementById(`${boxId}`)
let inputFeedback = document.getElementById("feedback");

function hitButton(e){
    boxId = e.target.id;
    myButton = document.getElementById(`${boxId}`);
    submitButton.disabled = false;
    inputFeedback.value = '';
    inputFeedback.focus();
    myButton.style.backgroundColor= `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

function hitSubmit(){
    myButton.textContent = inputFeedback.value;
}

function disabledSubmit(e){
    boxId = e.target.id;
    if(boxId === "container"){
        document.getElementById("feedbackButton").disabled = true;
    }
}
