var snd = new Audio('alarm.mp3');
let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');

let addHour = document.querySelector('#addHour');
let subtractHour = document.querySelector('#subtractHour');
let addMinute = document.querySelector('#addMinute');
let subtractMinute = document.querySelector('#subtractMinute');

let am = document.querySelector('#AM');
let pm = document.querySelector('#PM');
let meridian = document.querySelector('#meridian');

let setAlarm = document.querySelector('#setAlarm');

addHour.addEventListener('click', () => {
    let h = parseInt(hour.innerText);

    if (h == 12) {
        h = 1;
        hour.innerText = '01';
    }
    else if (h >= 9 && h < 12) {
        hour.innerText = `${h + 1}`
    }
    else {
        hour.innerText = `0${h + 1}`
    }

})
subtractHour.addEventListener('click', () => {
    let h = parseInt(hour.innerText);

    if (h == 1) {
        h = 12;
        hour.innerText = '12';
    }
    else if (h >= 11 && h <= 12) {
        hour.innerText = `${h - 1}`
    }
    else {
        hour.innerText = `0${h - 1}`
    }

})
subtractMinute.addEventListener('click', () => {
    let m = parseInt(minute.innerText);

    if (m == 0) {
        m = 59;
        minute.innerText = '59';
    }
    else if (m >= 11 && m <= 59) {
        minute.innerText = `${m - 1}`;
    }
    else {
        minute.innerText = `0${m - 1}`
    }

})
addMinute.addEventListener('click', () => {
    let m = parseInt(minute.innerText);

    if (m == 59) {
        m = 0;
        minute.innerText = '00';
    }
    else if (m >= 9 && m < 59) {
        minute.innerText = `${m + 1}`;
    }
    else {
        minute.innerText = `0${m + 1}`
    }

})

am.addEventListener('click', () => {
    meridian.innerText = 'AM';
})
pm.addEventListener('click', () => {
    meridian.innerText = 'PM';
})

const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

let time;
setAlarm.addEventListener('click', () => {
    // currentTime = formatAMPM(new Date());
    let hr = parseInt(hour.innerText);
    let min = parseInt(minute.innerText);
    let mer = meridian.innerText;
    console.log(`Alarm has been set to ${hr}:${min} ${mer}`);
    time=`${hr}:${min} ${mer}`;
})
// console.log(formatAMPM(new Date()));

let currentTime;
setInterval(() => {
    currentTime = formatAMPM(new Date());
    playAlarm();
}, 1000)

function playAlarm()
{
    if(currentTime==time)
    {
        setInterval(() => {
            snd.play();
        }, 5000);
        // clearInterval();
    }
}
// let date=new Date();
// let hr=date.getHours();
// let min=date.getMinutes();


