# 🔢 Chunk Array in Groups

This JavaScript utility splits an array into smaller sub-arrays (or "chunks") of a specified size.

---

## ✅ Functionality

- The function `chunkArrayInGroups(chunkArr, num)`:
  - Accepts an array `chunkArr` and a chunk size `num`.
  - Returns an array of arrays, where each sub-array has up to `num` elements.
  - Preserves the original order of elements.

---

## 🧪 Sample Test Cases

```js
chunkArrayInGroups(["a", "b", "c", "d"], 2); 
// ➞ [["a", "b"], ["c", "d"]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
// ➞ [[0, 1, 2], [3, 4, 5]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
// ➞ [[0, 1], [2, 3], [4, 5]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
// ➞ [[0, 1, 2, 3], [4, 5]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
// ➞ [[0, 1, 2], [3, 4, 5], [6]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
// ➞ [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
// ➞ [[0, 1], [2, 3], [4, 5], [6, 7], [8]]
