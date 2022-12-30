# Recursion

## Common Recursion Pitfalls

- Not having a base case
- Forgetting to return or returning the wrong thing!
- Stack overflow!

---

## Helper Method Recursion

```js
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }

  helper(input);

  return outerScopedVariable;
}
```

---

## Pure Recursion

### Example

```js
function collectOddValues(arr) {
  let result = [];

  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  result = result.concat(collectOddValues(arr.slice(1)));
  return result;
}
```

**Explained**: [video](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/10793654)

### Pure Recursion Tips

- For arrays, use methods like `slice`, the spread operator, and `concat` that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like `slice`, `substr`, or `substring` to make copies of strings
- To make copies of objects use `Object.assign`, or the spread operator

---
