'use strict';

function roll(dice) {
    const diceSides = ['d4', 'd6', 'd8', 'd10', 'd12', 'd16', 'd20'];

    if (!diceSides.includes(dice)) {
        return false;
    }

    let max = parseInt(dice.slice(1));
    let min = max / max;


    const diceRoll = Math.floor(Math.random() * (max - min + 1) + min);

    return diceRoll;


}


