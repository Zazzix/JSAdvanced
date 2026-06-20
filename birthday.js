'use strict';

function birthYearCheck(date) {
    /*
    let birthday = new Date(date)
    let birthYear = birthday.getFullYear();
    let birthMonth = birthday.getMonth();
    let birthDate = birthday.getDate();

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDate = new Date().getDate();

    if (currentYear - birthYear > 14 && ());
    */
    let birthday = new Date(date).setHours(0,0,0,0);
    let current = new Date().setHours(0,0,0,0);
    const daysGap = 5114


    const days =  (current - birthday) / (1000 * 60 * 60 * 24);

    return days > daysGap
}
