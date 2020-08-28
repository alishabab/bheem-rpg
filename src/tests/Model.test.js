import Model from '../Model';

describe('Model', () => {
  const model = new Model();
  model.user = 'John Doe';
  it('expect soundOn to be true', () => {
    expect(model.soundOn).toBe(true);
  });

  it('expect musicOn to be true', () => {
    expect(model.musicOn).toBe(true);
  });
  it('expect soundOn to be false', () => {
    model.soundOn = !model.soundOn;
    expect(model.soundOn).toBe(false);
  });

  it('expect musicOn to be false', () => {
    model.musicOn = !model.musicOn;
    expect(model.musicOn).toBe(false);
  });
  it('expect player score to be 10', () => {
    model.score = 10;
    expect(model.score).toBe(10);
    expect(model.score).not.toBe(0);
  });
  it('expect to reset player score to be 0', () => {
    model.resetScore();
    expect(model.score).toBe(0);
  });
  it('expect player name to be John Doe', () => {
    expect(model.user).toBe('John Doe');
  });
});