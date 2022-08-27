import { twoSum } from '../../easy/001-two-sum';

type TestCase = {
  nums: number[];
  target: number;
  expected: number[];
};

const testCases: TestCase[] = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
  { nums: [0, 0], target: 0, expected: [0, 1] },
  { nums: [-3, 4, 3, 90], target: 0, expected: [0, 2] },
];

describe('Given test cases', () => {
  testCases.map((testCase) => {
    it(`${testCase.nums} should find ${testCase.expected} to sum up to ${testCase.target}`, () => {
      expect(twoSum(testCase.nums, testCase.target)).toEqual(testCase.expected);
    });
  });
});
