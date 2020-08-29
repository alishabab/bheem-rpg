import MonsterModel from '../game_manager/MonsterModel';

describe('MonsterModel', () => {
  const monsterModel = new MonsterModel(100, 200, 'gold', 1, 2, 10, 3);
  it('expect monster health to be 10', () => {
    expect(monsterModel.health).toBe(10);
  });

  it('expect monster health to be 9 after calling loseHealth', () => {
    monsterModel.loseHealth();
    expect(monsterModel.health).toBe(9);
  });

  it('expect to generate a random id', () => {
    expect(/^1-/.test(monsterModel.id)).toBe(true);
  });
});