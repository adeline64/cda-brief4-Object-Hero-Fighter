import Hero from "./Hero";
import HeroAxe from "./HeroAxe";
import Weapon from "../weapon/Weapon";

export default class HeroSpear extends Hero {


    constructor(nameHero : string, powerHero : number, lifeHero : number){
        super (nameHero, powerHero, lifeHero);
        this.weapon = new Weapon("Spear", 15);
    }

    attack(opponent: Hero): void {
        if(opponent instanceof HeroAxe ) {
            this.life -= opponent.power*2;
        } else {
            super.attack(opponent);
        }
    }
}