"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero = /** @class */ (function () {
    function Hero(nameHero, powerHero, lifeHero) {
        this._name = nameHero;
        this._power = powerHero;
        this._life = lifeHero;
    }
    Object.defineProperty(Hero.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "power", {
        get: function () {
            return this._power;
        },
        set: function (newPower) {
            this._power = newPower;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "life", {
        get: function () {
            return this._life;
        },
        set: function (newlife) {
            this._life = newlife;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hero.prototype, "weapon", {
        get: function () {
            return this._weapon;
        },
        set: function (newWeapon) {
            this._weapon = newWeapon;
        },
        enumerable: false,
        configurable: true
    });
    Hero.prototype.isKO = function () {
        return this._life <= 0;
    };
    Hero.prototype.attack = function (opponent) {
        this._life -= opponent.power + this._weapon.damage;
    };
    Hero.prototype.isAlive = function () {
        if (this._life > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Hero;
}());
exports.default = Hero;
