// script.js

const t = document.querySelector("p");
const da = document.querySelector("h1");

function zero (secs){
    if (secs<10){
        return "0"+secs;
    }
    return secs;
}
function am(hrss) {
    if (hrss<12){
        return "AM"} 
        else{
            return "PM"}
}
function day(d){
    if(d==0){
        return "Sunday"
    }
    else if (d==1){
        return "Monday"
    }
    else if (d==2){
        return "Tuesday"
    }
    else if (d==3){
        return "Wednesday"
    }
    else if (d==4){
        return "Thursday"
    }
    else if (d==5){
        return "Friday"
    }
    else if (d==6){
        return "Saturday"
    }
}
function updateSeconds() {
    const d = new Date();
    let seconds = d.getSeconds();
    let min = d.getMinutes();
    let hrs = d.getHours();
    t.innerHTML = Math.floor(hrs/2) +":"+ zero(min) + ":" + zero(seconds) + " "+ am(hrs);
    da.innerHTML = d.getFullYear() + "-"+d.getMonth()+"-"+ d.getDate()+" "+ day(d.getDay());
}


updateSeconds();

setInterval(updateSeconds, 1000);