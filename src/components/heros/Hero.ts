import Weapon from "../weapon/Weapon";
export default class Hero{

    private _name:string;
    private _power:number;
    private  _life:number;
    private _weapon:Weapon;
             

constructor(nameHero:string, powerHero:number, lifeHero:number){
    this._name=nameHero;
    this._power=powerHero;
    this._life=lifeHero;

}


get name():string{
    return this._name;
}

set name(newName:string){
    this._name=newName;
}


get power():number{
    return this._power;
}

set power(newPower:number){
    this._power=newPower;
}

get life():number{
    return this._life;
}

set life(newlife:number){
    this._life=newlife;
}

get weapon():Weapon{
    return this._weapon;
}

set weapon(newWeapon:Weapon){
    this._weapon=newWeapon;
}




isKO(): boolean {
    return this.life <= 0;
}

attack(opponent:Hero) {
    this.life -= opponent.power;
}

isAlive(): boolean{
    if(this.life>0){
        return true
    }
    else{
        return false
    }
}

}