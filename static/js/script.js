'use strict';

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    const addText = checkSource(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s + addText;
    var t = setTimeout(startTime, 500);
}

function checkSource(i) {
    let txt = '';
    if (i < 30) {
        txt = ' before';
    } else {
        txt = ' after';
    }
    return txt;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }  // add zero in front of numbers < 10
    return i;
}