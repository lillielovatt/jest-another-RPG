const Potion = require("../lib/Potion");

function Enemy(name,weapon) {
    this.name=name;
    this.weapon=weapon;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);

    this.potion=new Potion();
}

Enemy.prototype.getHealth = function () {
    return `${this.name}'s health is now ${this.health}`;
}

Enemy.prototype.isAlive = function () {
    if (this.health > 0) {
        return true;
    } else {
        return false;
    }
}

Enemy.prototype.reduceHealth = function (health) {
    if (this.health - health >= 0) {
        this.health = this.health - health;
    } else {
        this.health = 0;
    }
}

Enemy.prototype.getAttackValue = function () {
    const min = this.strength - 5;
    const max = this.strength + 5;
    return Math.floor(Math.random()*(max-min)+min);
}

Enemy.prototype.getDescription = function() {
    return `A ${this.name} carrying a ${this.weapon} has appeared!`;
}

module.exports = Enemy;