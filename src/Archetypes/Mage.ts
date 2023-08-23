import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _archetypeCount = 0;
  private _energy: EnergyType = 'mana';

  static createdArchetypeInstances() {
    Mage._archetypeCount += 1;
    return Mage._archetypeCount;
  }

  get energyType():EnergyType {
    return this._energy;
  }
}
