import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _racesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  static createdRacesInstances() {
    Elf._racesCount += 1;
    return Elf._racesCount;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }
}