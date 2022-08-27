import { firstMissingPositive } from '../../hard/041-first-missing-positive';

type TestCase = {
  nums: number[];
  expected: number;
};

const testCases: TestCase[] = [
  { nums: [1, 2, 0], expected: 3 },
  { nums: [3, 4, -1, 1], expected: 2 },
  { nums: [7, 8, 9, 11, 12], expected: 1 },
];

describe('Given test cases', () => {
  testCases.map((testCase) => {
    it(`${testCase.nums} should find ${testCase.expected}`, () => {
      expect(firstMissingPositive(testCase.nums)).toEqual(testCase.expected);
    });
  });
});
