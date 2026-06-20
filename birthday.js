'use strict';

function birthYearCheck(date) {
    let birthday = new Date(date)
    let birthYear = birthday.getFullYear();
    let currentYear = new Date().getFullYear();

    return currentYear - birthYear > 14;
}
