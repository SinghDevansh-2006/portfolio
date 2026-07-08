function showTime(){

    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if(hours<10){
        hours= "0" + hours;
    }

    if(minutes<10){
        minutes= "0" + minutes;
    }

    if(seconds<10){
        seconds= "0" + seconds;
    }

    let currentTime = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerHTML = currentTime;

}

setInterval(showTime, 1000);
