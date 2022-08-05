import Hero from "./Hero";
import Weapon from "../weapon/Weapon";

const joan=new Hero("joan",10,30);
const leon=new Hero("leon",15,20);

leon.attack(joan);
console.log(leon);