import ChestModel from '../game_manager/ChestModel';

describe('ChestModel', () => {
  const chestModel = new ChestModel(100, 200, 'gold', 123);

  it('expect to generate a random id', () => {
    expect(/^123-/.test(chestModel.id)).toBe(true);
  });

  it('expect x cordinate to be 100', () => {
    expect(chestModel.x).toBe(100);
  });

  it('expect y cordinate to be 200', () => {
    expect(chestModel.y).toBe(200);
  });

  it('expect spawnerId to be 123', () => {
    expect(chestModel.spawnerId).toBe(123);
  });
});