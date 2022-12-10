import { countNumbersWithUniqueDigits } from '../../medium/357-count-unique-numbers';

type TestCase = {
  n: number;
  expected: number;
};

const testCases: TestCase[] = [
  { n: 0, expected: 1 },
  { n: 1, expected: 10 },
  { n: 2, expected: 91 },
  { n: 3, expected: 739 },
];

describe('Given test cases', () => {
  testCases.map((testCase) => {
    it(`${testCase.n} should find ${testCase.expected}`, () => {
      expect(countNumbersWithUniqueDigits(testCase.n)).toEqual(
        testCase.expected
      );
    });
  });
});
