'use strict';

const newYear = new Date(2027, 0, 1).getTime();


setInterval(() => {
    let now = new Date().getTime();
    let msLeft = newYear - now;


    const totalSeconds = Math.floor(msLeft / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalMonth = Math.floor(totalDays / 30);


    const secondsToShow = totalSeconds % 60;
    const minutesToShow = totalMinutes % 60;
    const hoursToShow = totalHours % 24;
    const daysToShow = totalDays % 30;
    const month = totalMonth;

    document.getElementById('timer').textContent = `${month} месяцев, ${daysToShow} дней, ${hoursToShow} часов, ${minutesToShow} минут, ${secondsToShow} секунд`;
}, 1000)