if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should move a number from one stack to another', () => {

      assert.equal(towersOfHanoi('a', 'b'), // stacks = {a: [4, 3, 2], b: [1], c: []};);
      assert.equal(towersOfHanoi('b', 'c'), // stacks = {a: [4, 3, 2], b: [], c: [1]};);
    });
    it('should only move the top nuber', () => {
      assert.equal(towersOfHanoi('b', 'c'), 'stacks = {a: [4, 3, 2], b: [], c: [1]}; ');
      assert.equal(towersOfHanoi('a', 'b'), 'stacks = {a: [4, 3], b: [2], c: [1]};');
    });
    it('should count the number of moves', () => {
      assert.equal(towersOfHanoi('a','b'), 'numberOfMoves = 1');
      assert.equal(towersOfHanoi('a','c'), 'numberOfMoves = 2')
    });
    it('should check for a win', () => {
      assert.equal(towersOfHanoi(' '), '');
      assert.equal(towersOfHanoi(' '), '');
    });
  });
} else {

  getPrompt();

}
