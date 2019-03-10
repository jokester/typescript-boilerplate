import { doSomething } from '../lib';

describe('doSomething', () => {
  it('returns 50', async () => {
    expect(await doSomething()).toBe(50);
  });
});
