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