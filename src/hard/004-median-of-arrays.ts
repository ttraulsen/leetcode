export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  //  const sortedOverall = [...nums1, ...nums2].sort((a, b) => (a < b ? -1 : 1));
  const sortedOverall = buildSorted(nums1, nums2);
  if (sortedOverall.length % 2 !== 0)
    return sortedOverall[Math.floor(sortedOverall.length / 2)];
  return (
    (sortedOverall[sortedOverall.length / 2 - 1] +
      sortedOverall[sortedOverall.length / 2]) /
    2
  );
}

function buildSorted(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < nums1.length || j < nums2.length) {
    if (i >= nums1.length) {
      result.push(nums2[j]);
      j++;
      continue;
    }
    if (j >= nums2.length) {
      result.push(nums1[i]);
      i++;
      continue;
    }
    if (nums1[i] <= nums2[j]) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  return result;
}
