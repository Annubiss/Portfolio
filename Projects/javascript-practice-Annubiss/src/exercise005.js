export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error('nums is required');
  if (n === undefined) throw new Error('n is required');
  const position = nums.indexOf(n)
  if(position == -1) return null;
  if(position == nums.length - 1) return null;

  return nums[position + 1]
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error('str is required');
  let count = {
    0: 0,
    1: 0,
  }
  str.split("").forEach(ch => {
    if(ch == 0) count[0] += 1
    if(ch == "1") count[1] += 1
  })
  return count
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error('n is required');
  return Number(n.toString().split("").reverse().join(""))
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error('arrs is required');
  return arrs.flat().reduce((sum, x) => sum + x, 0)
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error('arr is required');
  if(arr.length >= 2) {
    return [arr[arr.length - 1], ...arr.slice(1, -1), arr[0]]
  }
  else {
    return arr
  }
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error('haystack is required');
  if (searchTerm === undefined) throw new Error('searchTerm is required');
  return Object.values(haystack).some(s => String(s).toLowerCase().includes(searchTerm.toLowerCase()))
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error('str is required');
  const words = str
    .toLowerCase()
    .match(/[a-z0-9']+/g) ?? [];

  return words.reduce((counts, w) => {
    counts[w] = (counts[w] ?? 0) + 1;
    return counts;
  }, {});
}




