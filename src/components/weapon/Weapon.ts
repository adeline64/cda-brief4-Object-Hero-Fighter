export default class Weapon {

 private _name: string;
 private _damage: number;

  constructor(name : string, damage: number) {
    this._name = name;
    this._damage = damage;
  }

  get name() : string {
    return this._name;
  }
    
  set name(name: string){
    this._name = name;
  }

  get damage() : number {
    return this._damage;
  }
    
  set damage(damage: number){
    this._damage = damage;
  }
}