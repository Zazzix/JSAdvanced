'use strict';

const Character = function (race, name, lanuage) {
    this.race = race,
        this.name = name,
        this.lanuage = lanuage
}

Character.prototype.talk = function () {
    console.log(`My name is ${this.name} and language is ${this.lanuage}`);
}

const human = new Character('Human', 'Biba', 'human');

const Orc = function (race, name, lanuage, weapon) {
    Character.call(this, race, name, lanuage);

    this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);

Orc.prototype.hit = function () {
    console.log('Я нанес удар!!');
}


const orc = new Orc('Orc', 'Garrosh', 'Orc', 'Axe');

const Elf = function (race, name, lanuage, spell) {
    Character.call(this, race, name, lanuage);

    this.spell = spell;
}

Elf.prototype = Object.create(Character.prototype);

Elf.prototype.cast = function () {
    console.log(`Я скастовал ${this.spell}!`);
}

const elf = new Elf('Elf', 'Malfurion', 'Elf', 'Tranquility');