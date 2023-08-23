import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _archetypeCount = 0;
  private _energy: EnergyType = 'stamina';

  static createdArchetypeInstances() {
    Ranger._archetypeCount += 1;
    return Ranger._archetypeCount;
  }

  get energyType():EnergyType {
    return this._energy;
  }
}