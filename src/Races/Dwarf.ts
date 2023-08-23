import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _racesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances() {
    Dwarf._racesCount += 1;
    return Dwarf._racesCount;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}