import Hero from "./components/heros/Hero";
import HeroAxe from "./components/heros/HeroAxe";
import HeroSpear from "./components/heros/HeroSpear";
import HeroSword from "./components/heros/HeroSword";

const heroAxe = new HeroAxe("bob", 10 , 100);
const heroSword = new HeroSword("Kratos", 20, 100);
const heroSpear = new HeroSpear("ben", 30, 100);

battle(heroAxe, heroSpear);
battle(heroSword, heroAxe);
battle(heroSpear, heroSword);

function battle(hero: Hero, opponent: Hero) {
    while (hero.isAlive() || opponent.isAlive()) {
        hero.attack( opponent );
        opponent.attack( hero );
    }

    if (hero.isKO) {
        console.log(opponent.name + " wins");
    } else if (opponent.isKO ) {
        console.log(hero.name + " wins");
    } else {
        console.log("It's a draw");
    }
}

