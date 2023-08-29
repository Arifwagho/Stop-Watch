var hours=document.getElementById("hour");
var minuts=document.getElementById("minut");
var seconds=document.getElementById("seconds");
var ms=document.getElementById("ms");
var playButton =document.getElementById("playBtn");
var stopButton =document.getElementById("stopBtn");
var resetButton =document.getElementById("resetBtn");

// console.log(hours);
var swHours=23;
var swMinuts=59;
var swSecond=59;
var swMSeconds=100;

var interval;

function start(){
interval= setInterval(startTime, 100);


}

function startTime(){
swMSeconds--;
ms.innerHTML = swMSeconds;
playButton.disabled=true;

if (swMSeconds<=0){

    swSecond--;
    seconds.innerHTML=swSecond;
    swMSeconds=100;
}
else if ( swSecond<=0 ){

    swMinuts--
    minuts.innerHTML=swMinuts;
    swSecond=59;
}
else if ( swMinuts<=0 ){

    swHours--
    hours.innerHTML=swHours;
    swMinuts=59;
}

}
function stop(){

    clearInterval(interval);

    playButton.disabled=false;
}
function resetAll(){
stop();
swMSeconds=100;
swSecond=59;
swMinuts=59;
swHours=23;
ms.innerHTML = swMSeconds;
seconds.innerHTML=swSecond;
minuts.innerHTML=swMinuts;
hours.innerHTML=swHours;

}