import {list} from './dependency-updates';

suite('dependency updates', () => {
  test('that updates are listed', async () => {
    await list();
  });
});
