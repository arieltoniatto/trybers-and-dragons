import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexterity: number, maxLifePoints = 80) {
    super(name, dexterity);

    Dwarf._createdRacesInstances += 1;
    this._maxLifePoints = maxLifePoints;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
}