let element=document.querySelector('.timeDisplay');
let [seconds,minutes,hours]=[0,0,0];
let timer=null;
element.innerHTML="00 : 00 : 00";
function stopWatch(){
seconds++;
if(seconds ==60){
  minutes++;
  seconds=0;
}
else if(minutes ==60){
  hours++;
  minutes=0;
}
let h=hours< 10?"0"+hours:hours;
let m=minutes<10?"0"+minutes:minutes;
let s=seconds<10?"0"+seconds:seconds;
element.innerHTML=h +" : " +m+" : "+s;
}

function startWatch(){
if(timer !== null){
clearInterval(timer);
}
  timer=setInterval(stopWatch,1000);
}
function Watchstop(){
  clearInterval(timer);
}
function Reset(){
  clearInterval(timer);
  [seconds,minutes,hours]=[0,0,0];
  element.innerHTML="00 : 00 : 00"
}