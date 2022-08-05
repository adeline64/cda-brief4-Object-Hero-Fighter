"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    Object.defineProperty(Weapon.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Weapon;
}());
exports.Weapon = Weapon;
