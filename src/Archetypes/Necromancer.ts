import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana'; 
  private static _ArchetypeInstances = 0;

  public static createdArchetypeInstances(): number {
    this._ArchetypeInstances += 1;
    return this._ArchetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}