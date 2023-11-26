let sec=0;
let min=0;
let hr=0;
let timer = 0;  //false
function start(){
    timer=1;  //true
    myFun();
}
function stop(){
    timer=0; //false
    myFun();
}
function reset(){
    location.reload();
}
// second zero when timer start....
function myFun(){
    if(timer == 1)//true
    {
        sec=sec+1;
    }
    if(sec==60){
        min=min+1;
        sec=0;
    }
    if(min==60){
        hr=hr+1;
        min=0;
    }
//first zero when timer start....    
let getSec=sec;
let getMin=min;
let getHr=hr;
if(sec<10){
    getSec="0"+sec; // timer run 01 - 60 so string as zero,without string it count from 1-60
}
if(min<10){
    getMin="0"+min;
}
if(hr<10){
    getHr="0"+hr;
}
    setTimeout("myFun()",50);
    document.getElementById("sec").innerHTML =getSec;
    document.getElementById("min").innerHTML =getMin;
    document.getElementById("hr").innerHTML =getHr;
}