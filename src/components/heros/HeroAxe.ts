import Hero from "./Hero";
import HeroSword from "./HeroSword";

export default class HeroAxe extends Hero {
    attack(opponent: Hero): void {
        if(opponent instanceof HeroSword ) {
            this.life -= opponent.power*2;
        } else {
            super.attack;
        }
    }
}