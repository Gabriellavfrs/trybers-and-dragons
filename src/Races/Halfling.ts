import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _racesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances() {
    Halfling._racesCount += 1;
    return Halfling._racesCount;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}