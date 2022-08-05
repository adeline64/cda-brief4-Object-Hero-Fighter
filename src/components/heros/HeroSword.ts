import Weapon from "../weapon/Weapon";
import Hero from "./Hero";
import HeroSpear from "./HeroSpear";


export default class HeroSword  extends Hero{
  
  constructor(nameHero:string, powerHero:number, lifeHero:number) {
    super(nameHero, powerHero, lifeHero);
    this.weapon = new Weapon("Sword", 10);
  }

  attack(opponent: Hero){
    if (opponent instanceof HeroSpear ) {
      this.life -=opponent.power*2;
    } else{
      super.attack(opponent);
    }
  }

}

