import Hero from "./Hero";
import HeroSpear from "./HeroSpear";


export default class HeroSword  extends Hero{
  
    attack(opponent: Hero){
      if (opponent instanceof HeroSpear ) {
        this.life -=opponent.power*2;
      } else{
        super.attack(opponent);
      }
    }

}

