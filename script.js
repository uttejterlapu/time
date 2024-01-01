// script.js

const t = document.querySelector("p");
const da = document.querySelector("h1");
const body = document.querySelector("body")
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
function month(m){
    return zero(m+1)
}

function time(ti){
    if (ti>12){
        return Math.floor(ti/12)
    }
    else{
        return ti
    }
}
function updateSeconds() {
    const d = new Date();
    let seconds = d.getSeconds();
    let min = d.getMinutes();
    let hrs = d.getHours();
    const angle = (360 / 12) * min + (360 / 60) * (seconds / 60);
    // const angle = (360 / 60) *seconds;
    body.style.backgroundImage = `linear-gradient(${angle}deg,black, rgb(248, 248, 248)`;
    body.style.transition = `1.9s ease-in`;

    t.innerHTML = time(hrs) +":"+ zero(min) + ":" + zero(seconds) + " "+ am(hrs);
    da.innerHTML = d.getFullYear() + "-"+month(d.getMonth())+"-"+ zero(d.getDate())+" "+ day(d.getDay());
}


updateSeconds();

setInterval(updateSeconds, 1000);
