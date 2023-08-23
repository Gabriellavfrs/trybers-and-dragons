import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _racesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances() {
    Orc._racesCount += 1;
    return Orc._racesCount;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}