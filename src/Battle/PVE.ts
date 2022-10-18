import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];

  constructor(player: Fighter, monster: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monster;
  }

  public fight(): number {
    this._monsters.forEach((monster) => {
      while (this._player.lifePoints > 0 && monster.lifePoints > 0) {
        this._player.attack(monster);
        monster.attack(this._player);
      }
    });

    return this._player.lifePoints === -1 ? -1 : 1;
  }
}