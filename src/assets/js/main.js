const coin = document.getElementById("headAndTail");
const button = document.getElementById("headOrTailbutton");
const result = document.getElementById("showResult");
let resultFlip ="";

button.addEventListener("click", () => {
    result.innerHTML= "Wait... ";
    const headAndTail = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(headAndTail){
        setTimeout(function(){
            coin.style.animation = "flipHead 3s forwards";
        }, 100);
        resultFlip = "Tail!"
    }
    else{
        setTimeout(function(){
            coin.style.animation = "flipTail 3s forwards";
        }, 100);
        resultFlip = "Head!"
    }
    setTimeout(waitForTheEndOfAnimationForDisplayResult, 3000);
});

function waitForTheEndOfAnimationForDisplayResult(){
    result.innerHTML = resultFlip;
}