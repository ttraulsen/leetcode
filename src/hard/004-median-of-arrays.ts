export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const sortedOverall = [...nums1, ...nums2].sort((a, b) => (a < b ? -1 : 1));
  if (sortedOverall.length % 2 !== 0)
    return sortedOverall[Math.floor(sortedOverall.length / 2)];
  return (
    (sortedOverall[sortedOverall.length / 2 - 1] +
      sortedOverall[sortedOverall.length / 2]) /
    2
  );
}
