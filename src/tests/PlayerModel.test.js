import PlayerModel from '../game_manager/PlayerModel';

describe('MonsterModel', () => {
  const playerModel = new PlayerModel([[100, 100]]);
  it('expect player health to be 10', () => {
    expect(playerModel.health).toBe(10);
  });

  it('expect player max health to be 10', () => {
    expect(playerModel.maxHealth).toBe(10);
  });

  it('expect player gold coins to be 0', () => {
    expect(playerModel.gold).toBe(0);
  });

  it('expect to generate a random player id', () => {
    expect(/^player-/.test(playerModel.id)).toBe(true);
  });

  it('expect to generate player location cordinates from given array', () => {
    expect([playerModel.x, playerModel.y]).toStrictEqual([100, 100]);
  });

  it('expect to update gold coins quantity', () => {
    expect(playerModel.updateGold(6)).toBe(6);
  });

  it('expect to update the player health', () => {
    playerModel.health = 5;
    playerModel.updateHealth(3);
    expect(playerModel.health).toBe(8);
  });
  it('expect player health not exceed more than 10', () => {
    playerModel.health = 8;
    playerModel.updateHealth(6);
    expect(playerModel.health).toBe(10);
    expect(playerModel.health).not.toBe(14);
  });

  it('expect to respawn the player and making health to max', () => {
    playerModel.health = 0;
    playerModel.respawn();
    expect(playerModel.health).toBe(10);
  });
});