// workaround to prevent error because of dynamic import usage only
import myStaticModule from './my-static-module.js';

let beforeEachCount = 0;
let test1Count = 0;
let test2Count = 0;

describe('run twice', () => {
  beforeEach(() => {
    beforeEachCount += 1;
    console.log('beforeEachCount:', beforeEachCount);
  });

  it('test 1', async () => {
    await import('./my-dynamic-module.js');
    test1Count += 1;
    console.log('test1Count:', test1Count);
    expect(test1Count, 'test 1 run twice').to.not.eql(2);
  });

  it('test 2', async () => {
    await import('./my-dynamic-module.js');
    test2Count += 1;
    console.log('test2Count:', test2Count);
    expect(test2Count, 'test 2 run twice').to.not.eql(2);
  });
});
