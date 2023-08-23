import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private static _archetypeCount = 0;
  private _energy: EnergyType = 'mana';

  static createdArchetypeInstances() {
    Necromancer._archetypeCount += 1;
    return Necromancer._archetypeCount;
  }

  get energyType():EnergyType {
    return this._energy;
  }
}