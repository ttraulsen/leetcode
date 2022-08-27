import { findMedianSortedArrays } from '../../hard/004-median-of-arrays';

type TestCase = {
  nums1: number[];
  nums2: number[];
  expected: number;
};

const testCases: TestCase[] = [
  { nums1: [1, 3], nums2: [2], expected: 2.0 },
  { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
  { nums1: [1, 3], nums2: [2, 7], expected: 2.5 },
];

describe('Given test cases', () => {
  testCases.map((testCase) => {
    it(`${testCase.nums1} and ${testCase.nums2} should find ${testCase.expected}`, () => {
      expect(findMedianSortedArrays(testCase.nums1, testCase.nums2)).toEqual(
        testCase.expected
      );
    });
  });
});
