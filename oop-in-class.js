'use strict';

class Character {
    race;
    name;
    language;

    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    talk() {
        console.log(`За короля и честь!`);
    }
}

class Orc extends Character {
    weapon;

    constructor(race, name, language, weapon) {
        super(race, name, language);
        this.weapon = weapon;
    }

    hit() {
        console.log("Lok'gar!!!");
    }

    talk() {
        console.log(`Lok'tar ogar!`);
    }
}


class Elf extends Character {
    spell;

    constructor(race, name, language, spell) {
        super(race, name, language);
        this.spell = spell;
    }

    cast() {
        console.log(`Zin-Azshari alah ${this.spell}!`);
    }

    talk() {
        console.log(`Bal'a dash, malorneah`);
    }
}
