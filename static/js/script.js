'use strict';

// generate current time format like '22:14'
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    const addText = checkSource(s);

    // change clock's time
    document.getElementById('clock').innerHTML = h + ":" + m;

    // switch weather-avalanche
    // const weather = document.getElementsByClassName('weather')[0];
    // if (s < 30) {
    //     weather.classList.add('visually-hidden');
    // } else {
    //     weather.classList.remove('visually-hidden');
    // }
    
    var t = setTimeout(startTime, 1000);
}

// check current time's secconds to switch information blocks
function checkSource(i) {
    let txt = '';
    if (i < 30) {
        txt = ' before';
    } else {
        txt = ' after';
    }
    return txt;
}

//visually-hidden
// add zero in front of numbers < 10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}