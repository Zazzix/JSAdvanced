'use strict';

class Car {
    #make;
    #model;
    #mileage;

    constructor(make, model, mileage) {
        this.#make = make;
        this.#model = model;
        this.#mileage = mileage;
    }

    info() {
        return `Марка: ${this.#make}, Модель: ${this.#model}, Пробег: ${this.#mileage}`
    };

    get mileage() {
        return this.#mileage;
    };

    set mileage(mileage) {
        if (typeof mileage == 'number' && mileage > this.#mileage) {
            this.#mileage = mileage;
        } else {
            throw new Error('Некорректный пробег');
        }
    }
}
