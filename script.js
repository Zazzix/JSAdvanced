'use strict';

function roll(dice) {
    if (isNaN(dice)) {
        return null;
    }

    let max = Number.parseInt(dice);
    let min = dice / dice;
    
    const diceRoll = Math.floor(Math.random() * (max - min + 1) + min);

    return diceRoll;
}

