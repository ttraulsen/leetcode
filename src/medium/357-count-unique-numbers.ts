export function countNumbersWithUniqueDigits(n: number): number {
  let hadUniqueDigits = 0;
  console.log(`was called with n=${n} => 10^n=${Math.pow(10, n)}`);
  for (let i = 0; i < Math.pow(10, n); i++) {
    const nonUniquePosition = isUniqueDigit(i);
    if (nonUniquePosition === -1) {
      hadUniqueDigits++;
    } else {
      console.log(
        `${i} was non-unique in ${nonUniquePosition}-th position, skipping ${
          Math.pow(10, n - (nonUniquePosition + 1)) - 1
        } numbers`
      );
      i += Math.pow(10, n - (nonUniquePosition + 1)) - 1;
      //i--;
    }
  }
  return hadUniqueDigits;
}

function isUniqueDigit(n: number): number {
  const digits = new Map();
  const chars = n.toString().split('');
  for (let i = 0; i < chars.length; i++) {
    if (digits.has(chars[i])) {
      return i + 1;
    }
    digits.set(chars[i], '1');
  }
  return -1;
}
