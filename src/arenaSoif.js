"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeroAxe_1 = require("./components/heros/HeroAxe");
var Superman = new HeroAxe_1.default("Superman", 10, 100);
var kratos = new HeroAxe_1.default("Kratos", 20, 100);
kratos.attack(Superman);
console.log(Superman.life);
console.log(kratos.life);
