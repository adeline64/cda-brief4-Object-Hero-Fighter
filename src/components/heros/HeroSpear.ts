import Hero from "./Hero";
import HeroAxe from "./HeroAxe";
import Weapon from "../weapon/Weapon";

export default class HeroSpear extends Hero {

    // private _weapon : Weapon;

    constructor(nameHero : string, powerHero : number, lifeHero : number){
        super (nameHero, powerHero, lifeHero);
        this.weapon = new Weapon("spear");
    }

    attack(): void {
    }
}