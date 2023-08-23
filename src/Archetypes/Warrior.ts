import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _archetypeCount = 0;
  private _energy: EnergyType = 'stamina';

  static createdArchetypeInstances() {
    Warrior._archetypeCount += 1;
    return Warrior._archetypeCount;
  }

  get energyType():EnergyType {
    return this._energy;
  }
}