var miliseconds = 0;
var seconds = 0;
var minutes = 0;



var displaymsec = 0;
var displaysec = 0;
var displaymin = 0;



var interval;


var status = "stopped";


function stopWatch() {

    miliseconds++;

    if (miliseconds / 100 === 1) {
        miliseconds = 0;
        seconds++;

        if (seconds / 60 === 1) {
            seconds = 0;
            minutes++;
        }

    }

    if (miliseconds < 10) {
        displaymsec = "0" + miliseconds.toString();
    } else {
        displaymsec = miliseconds;
    }

    if (seconds < 10) {
        displaysec = "0" + seconds.toString();
    } else {
        displaysec = seconds;
    }

    if (minutes < 10) {
        displaymin = "0" + minutes.toString();
    } else {
        displaymin = minutes;
    }


    document.getElementById("msheading").innerHTML = displaymsec;
    document.getElementById("secheading").innerHTML = displaysec;
    document.getElementById("minheading").innerHTML = displaymin;

}



function startStop() {

    if (status === "stopped") {

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    } else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}


function reset() {

    window.clearInterval(interval);
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    document.getElementById("msheading").innerHTML = "00";
    document.getElementById("secheading").innerHTML = "00";
    document.getElementById("minheading").innerHTML = "00";
    document.getElementById("startStop").innerHTML = "Start";

}