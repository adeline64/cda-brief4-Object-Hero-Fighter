"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Hero_1 = require("./Hero");
var HeroSpear_1 = require("./HeroSpear");
var HeroSword = /** @class */ (function (_super) {
    __extends(HeroSword, _super);
    function HeroSword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeroSword.prototype.attack = function (opponent) {
        if (opponent instanceof HeroSpear_1.default) {
            this.life -= opponent.power * 2;
        }
        else {
            _super.prototype.attack.call(this, opponent);
        }
    };
    return HeroSword;
}(Hero_1.default));
exports.default = HeroSword;
