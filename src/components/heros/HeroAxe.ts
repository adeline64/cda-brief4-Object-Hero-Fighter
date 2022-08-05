import Weapon from "../weapon/Weapon";
import Hero from "./Hero";
import HeroSword from "./HeroSword";

export default class HeroAxe extends Hero {
    constructor(nameHero:string, powerHero:number, lifeHero:number) {
        super(nameHero, powerHero, lifeHero);
        this.weapon = new Weapon("axe", 5);
    }

    attack(opponent: Hero): void {
        if(opponent instanceof HeroSword ) {
            this.life -= opponent.power*2;
        } else {
            super.attack(opponent);
        }
    }
}