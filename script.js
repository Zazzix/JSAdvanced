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


'use strict'

const arr = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
]

const newArr = arr.map(user => user.id);
const newSet = new Set(newArr);
const uniqueIds = [...newSet];
const filtered = uniqueIds.map(id => arr.find(user => user.id === id));

console.log(filtered);
