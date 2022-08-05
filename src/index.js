"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HeroAxe_1 = require("./components/heros/HeroAxe");
var HeroSpear_1 = require("./components/heros/HeroSpear");
var HeroSword_1 = require("./components/heros/HeroSword");
var heroAxe = new HeroAxe_1.default("bob", 10, 100);
var heroSword = new HeroSword_1.default("Kratos", 20, 100);
var heroSpear = new HeroSpear_1.default("ben", 30, 100);
battle(heroAxe, heroSpear);
battle(heroSword, heroAxe);
battle(heroSpear, heroSword);
function battle(hero, opponent) {
    while (hero.life > 0 || opponent.life > 0) {
        hero.attack(opponent);
        opponent.attack(hero);
    }
    if (hero.life <= 0) {
        console.log(opponent.name + " wins");
    }
    else if (opponent.life <= 0) {
        console.log(hero.name + " wins");
    }
    else {
        console.log("It's a draw");
    }
}
