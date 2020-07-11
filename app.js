var min= 0;
var sec= 0;
var milisec= 0;
var minOut = document.getElementById('min');
var secOut = document.getElementById('sec');
var milisecOut = document.getElementById('milisec');
var TimeInterval;

function timer(){
    milisec++;
    milisecOut.innerHTML = milisec;
    if(milisec >= 100){
        sec++;
        secOut.innerHTML = sec + ':' ;
        milisec = 0;
    }
    else if(sec >= 60 ){
        min++;
        minOut.innerHTML = min + ':';
        sec = 0;
    }
}
function start(){
    TimeInterval = setInterval(timer, 10);
    let button = document.getElementById('start');
    button.disabled = true;

}
function stop(){
    clearInterval(TimeInterval);
    let button = document.getElementById('start');
    button.disabled = false;
}
function reset(){
    min= 0; 
    sec= 0;
    milisec = 0;
    minOut.innerHTML = min + '0:';
    secOut.innerHTML = sec + '0:';
    milisecOut.innerHTML = milisec + '0';
    clearInterval(TimeInterval);
    let button = document.getElementById('start');
    button.disabled = false;
}