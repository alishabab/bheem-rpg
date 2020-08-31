import { randomNumber } from '../game_manager/utils';

describe('Utils', () => {
  it('expect to generate a random number', () => {
    expect(randomNumber(0, 10) < 10).toBe(true);
  });
});