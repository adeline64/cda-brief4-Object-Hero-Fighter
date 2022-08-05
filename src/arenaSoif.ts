import HeroAxe from "./components/heros/HeroAxe";

const Superman = new HeroAxe("Superman", 10, 100);
const kratos = new HeroAxe("Kratos", 20, 100);

kratos.attack(Superman);

console.log(Superman.life);
console.log(kratos.life);

