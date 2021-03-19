
let newYear = new Date("Jan 1, 2022 00:00:00").getTime();

function counter(){
    let dateCurrent = new Date().getTime(), timeLeft = newYear - dateCurrent;
    let second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let dayLeft = addZero(Math.floor(timeLeft/day), 3),
        hourLeft = addZero(Math.floor((timeLeft % day)/hour), 2),
        minuteLeft = addZero(Math.floor((timeLeft % hour)/minute),2),
        secondLeft = addZero(Math.floor((timeLeft % minute)/ second), 2);

        function addZero (num, count){
            return num.toString().padStart(count, "0");
        }

    document.getElementById('days-number').innerHTML = dayLeft;
    document.querySelector('.hours-number').innerHTML = hourLeft;
    document.querySelector('.mins-number').innerHTML = minuteLeft;
    document.querySelector('.sec-number').innerHTML = secondLeft;
}

setInterval(() => {
    counter();
}, 1000);