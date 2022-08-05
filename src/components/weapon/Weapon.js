"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon = /** @class */ (function () {
    function Weapon(name, damage) {
        this._name = name;
        this._damage = damage;
    }
    Object.defineProperty(Weapon.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "damage", {
        get: function () {
            return this._damage;
        },
        set: function (damage) {
            this._damage = damage;
        },
        enumerable: false,
        configurable: true
    });
    return Weapon;
}());
exports.default = Weapon;
