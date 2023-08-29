var hours=document.getElementById("hour");
var minuts=document.getElementById("minut");
var seconds=document.getElementById("seconds");
var ms=document.getElementById("ms");
var playButton =document.getElementById("playBtn");
var stopButton =document.getElementById("stopBtn");
var resetButton =document.getElementById("resetBtn");

// console.log(hours);
var swHours=0;
var swMinuts=0;
var swSecond=0;
var swMSeconds=0;

var interval;

function start(){
interval= setInterval(startTime, 100);


}

function startTime(){
swMSeconds++;
ms.innerHTML = swMSeconds;
playButton.disabled=true;

if (swMSeconds===100){

    swSecond++;
    seconds.innerHTML=swSecond;
    swMSeconds=0;
}
else if ( swSecond===59 ){

    swMinuts++
    minuts.innerHTML=swMinuts;
    swSecond=0;
}
else if ( swMinuts===59 ){

    swHours++
    hours.innerHTML=swHours;
    swMinuts=0;
}

}
function stop(){

    clearInterval(interval);

    playButton.disabled=false;
}
function resetAll(){
stop();
swMSeconds=0;
swSecond=0;
swMinuts=0;
swHours=0;
ms.innerHTML = swMSeconds;
seconds.innerHTML=swSecond;
minuts.innerHTML=swMinuts;
hours.innerHTML=swHours;

}