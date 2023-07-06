"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hero_1 = require("./components/heros/Hero");
var joan = new Hero_1.default("joan", 10, 30);
var leon = new Hero_1.default("leon", 15, 20);
leon.attack(joan);
console.log(leon);






