function showTime() {
    let getTime = new Date();
    let hour = getTime.getHours();
    let minutes = getTime.getMinutes();
    let seconds = getTime.getSeconds();

    let formatHours = convertFormat(hour)
    hour = checkTime(hour)

    hour = addZero(hour)
    document.getElementById("clock").innerHTML = `${hour} : ${minutes} : ${seconds} ${formatHours}`
}

function convertFormat(time) {
    let format = "AM";
    if(time >= 12) {
        format = "PM";
    }
    return format;
}

function checkTime(time) {
    if(time > 12){
        time = time - 12;
    }

    if(time == 0) {
        time = 12;
    }

    return time;
}

function addZero(time) {
    if(time < 10){
        time = "0" + time;
    }
    return time;
}

setInterval(showTime, 1000)