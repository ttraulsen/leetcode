export function firstMissingPositive(nums: number[]): number {
  const existingNumbers = new Map();
  let maxFoundNumber = 0;
  for (const n of nums) {
    if (n <= 0) continue;
    if (n > maxFoundNumber) maxFoundNumber = n;
    existingNumbers.set(n, 1);
  }
  for (let i = 1; i <= maxFoundNumber + 1; i++) {
    if (!existingNumbers.get(i)) return i;
  }
  return undefined;
}
