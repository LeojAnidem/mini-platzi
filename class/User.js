import {_, createElement} from 'https://cdn.jsdelivr.net/gh/LeojAnidem/Library@master/domFunctions.js';

export default class User {
    static count = 0;

    constructor({
        name,
        age,
    }) {
        this._id = this.constructor.count++;
        this._name = name;
        this._age = age;
    }

    printUserInfo(place) {
        createElement(place , 'li', `user__item-${this._id}`);
        createElement(`.user__item-${this._id}`, 'span', 'user__text', `id: ${this._id}`);
        createElement(`.user__item-${this._id}`, 'span', 'user__text', `name: ${this._name}`);
        createElement(`.user__item-${this._id}`, 'span', 'user__text', `age: ${this._age}`);
    }
    
    get id() { return this._id }
    get name() { return this._name }
    get age() { return this._age }
    
    set name(name) { this._name = name }
    set age(age) { this._age = age }
}