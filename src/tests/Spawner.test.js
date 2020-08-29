import Spawner from '../game_manager/Spawner';
import ChestModel from '../game_manager/ChestModel';

describe('Spawner', () => {
  const arr = [];
  const config = {
    spawnInterval: 0,
    limit: 3,
    spawnerType: 'CHEST',
    id: 'spawn-123',
  };
  function mockAddObject(a, b) {
    arr.push(b);
  }

  function mockDeleteObject(a) {
    arr.splice(a, 1);
  }

  function mockMoveObject() {
    return ('moved');
  }

  const spawner = new Spawner(config, [[100, 150], [200, 300], [350, 450]], mockAddObject,
    mockDeleteObject, mockMoveObject);

  it('expect id to be spawn-123', () => {
    expect(spawner.id).toStrictEqual('spawn-123');
  });

  it('expect spwan object type to be CHEST', () => {
    expect(spawner.objectType).toStrictEqual('CHEST');
  });

  it('expect spawn limit to be 3', () => {
    expect(spawner.limit).toBe(3);
  });

  it('expect spawnObject to call spawnChest if SpawnType is CHEST', () => {
    spawner.spawnObject();
    expect(spawner.objectsCreated.length).toBe(1);
    expect(arr.length).toBe(1);
  });

  it('expect spawnObject to call spawnMonster if SpawnType is MONSTER', () => {
    config.spawnerType = 'MONSTER';
    spawner.spawnObject();
    expect(spawner.objectsCreated.length).toBe(2);
    expect(arr.length).toBe(2);
  });

  it('expect spawnChest to create a new chest object', () => {
    spawner.spawnChest();
    expect(arr[2] instanceof ChestModel).toBe(true);
  });
});