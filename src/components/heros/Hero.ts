export default class Hero{

    private _name:string;
    private  power:number;
    private  life:number;
             

constructor(nameHero:string, powerHero:number, lifeHero:number){
    this._name=nameHero;
    this.power=powerHero;
    this.life=lifeHero;

}


get name():string{
    return this._name;
}

set name(newName:string){
    this._name=newName;
}


isKO(): boolean {
    return this.life <= 0;
}

attack(opponent:Hero) {
    this.life -= opponent.power;
}

isAlive(): boolean{
    if(this.life>0)
    return true
    else
    return false
}

}