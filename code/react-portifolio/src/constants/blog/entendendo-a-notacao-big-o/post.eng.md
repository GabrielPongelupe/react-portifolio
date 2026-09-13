---
title: Big O Notation: How to Measure an Algorithm's Efficiency
excerpt: How to measure and compare the efficiency of algorithms: what Big O notation is, how it differs from Omega and Theta, and what each complexity class actually looks like, with a code example for each.
readTime: 10 min read
---

Code that flies on your laptop can choke in production, and that's not bad luck, it's math. A stopwatch measures the machine, not the algorithm. What actually measures the algorithm is Big O notation: it describes how a solution's cost grows with the input size (n), not in seconds. Below, every concept comes with a JavaScript example and a short analogy, so you never confuse O(n) with O(n²) again.

## Why not just use a stopwatch?

Run the same function on your laptop and on a cloud server: the numbers come out different, but the algorithm is still the same. That's because execution time depends on factors that say nothing about the quality of the code: hardware, language, environment, even the shape of the input data. That's why algorithm analysis ignores the stopwatch and uses complexity functions instead: expressions describing how the number of operations grows with the input size, analyzed across three scenarios (best case, average case, worst case). There's just one question left: how do you compare two of these functions fairly?

## Big O, Omega, and Theta: the three asymptotic bounds

The answer is three asymptotic rulers. Big O (O) measures the upper bound: "in the worst case, how expensive can this algorithm get?", and it's by far the most used, because it guarantees a safety ceiling. Omega (Ω) is the mirror image, the lower bound, the best possible case. Theta (Θ) shows up when the two coincide, describing the exact behavior. Example: binary search has a best case of Ω(1) and a worst case of O(log n); Bubble Sort without an early-exit optimization is always Θ(n²), since its comparison structure never changes.

## The complexity classes, one by one

With these rulers in hand, any algorithm can be placed on a clear scale, from cheapest to most expensive. Each class below comes with a code example and an analogy.

## O(1): constant time

The number of operations doesn't change no matter the input size. It's like grabbing the top card from a deck, whether it has 10 or 10,000 cards.

~~~js
function firstElement(list) {
  return list[0];
}
~~~

## O(log n): logarithmic time

At every step, a chunk of the input is discarded, usually half of it. It's like opening a dictionary in the middle and ignoring half the pages each time. Only works on already-sorted lists:

~~~js
function binarySearch(list, target) {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (list[mid] === target) return mid;
    if (list[mid] < target) start = mid + 1;
    else end = mid - 1;
  }

  return -1;
}
~~~

## O(n): linear time

The cost grows in direct proportion to the input: doubling the list doubles the operations. It's like checking a shopping list item by item, no shortcuts:

~~~js
function maxValue(list) {
  let max = list[0];
  for (const value of list) {
    if (value > max) max = value;
  }
  return max;
}
~~~

## O(n log n): linearithmic time

Shows up when an algorithm repeatedly splits the problem in half and still has to process every element at each split. It's the class of the most efficient sorting algorithms, like Merge Sort:

~~~js
function mergeSort(list) {
  if (list.length <= 1) return list;

  const mid = Math.floor(list.length / 2);
  const left = mergeSort(list.slice(0, mid));
  const right = mergeSort(list.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return result.concat(left.slice(i), right.slice(j));
}
~~~

## O(n²): quadratic time

One loop inside another, each one scanning the whole input. It's like asking, at a party of n people, whether each shares a birth month with every other. The typical example is Bubble Sort:

~~~js
function bubbleSort(list) {
  const n = list.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  return list;
}
~~~

## O(2ⁿ): exponential time

Every extra element in the input doubles the number of operations. Typical of algorithms that explore every possible combination without discarding anything, like the "naive" recursive Fibonacci, which recomputes the same subproblems over and over:

~~~js
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
~~~

## O(n!): factorial time

The worst class of all: the cost grows with the factorial of the input size. Shows up in problems that generate every possible ordering of a set, like permutations of a list. Just 10 elements already give over 3 million combinations:

~~~js
function permutations(list, start = 0) {
  if (start === list.length - 1) {
    console.log(list);
    return;
  }

  for (let i = start; i < list.length; i++) {
    [list[start], list[i]] = [list[i], list[start]];
    permutations(list, start + 1);
    [list[start], list[i]] = [list[i], list[start]];
  }
}
~~~

In practice, exponential and factorial algorithms only work for small inputs. Past a certain n, not even the most powerful computer in the world can keep up.

## Fibonacci: the same problem, three different costs

Fibonacci shows this well: the same problem can have implementations with radically different costs. The "naive" recursive version above generates a call tree that grows exponentially, because fibonacciRecursive(n - 2) gets recomputed dozens of times inside the call tree of fibonacciRecursive(n - 1). The iterative version solves the same problem in O(n), computing each term exactly once:

~~~js
function fibonacciIterative(n) {
  let previous = 0;
  let current = 1;
  for (let i = 0; i < n; i++) {
    [previous, current] = [current, previous + current];
  }
  return previous;
}
~~~

And there's a middle ground: memoization stores already-computed results in a cache, turning the recursive version from exponential into linear without losing the elegance of recursion:

~~~js
function fibonacciMemo(n, cache = new Map()) {
  if (n <= 1) return n;
  if (cache.has(n)) return cache.get(n);

  const result = fibonacciMemo(n - 1, cache) + fibonacciMemo(n - 2, cache);
  cache.set(n, result);
  return result;
}
~~~

## Time complexity vs. space complexity

So far, "cost" has meant number of operations. But there's a second dimension: memory usage. The iterative Fibonacci version is O(n) in time and O(1) in space, because it only uses two variables. The memoized version is also O(n) in time, but O(n) in space, because the cache stores one result per value of n. Memoization trades memory for speed: a real engineering decision, not just an academic one.

## The Master Theorem, with examples

For divide-and-conquer recurrences, in the form T(n) = a·T(n/b) + f(n) (a is the number of subproblems, n/b the size of each one, f(n) the cost outside the recursion), the Master Theorem gives the complexity directly, without expanding the recurrence by hand.

The idea: compare f(n) with n^(log_b a), the cost the recursion would have on its own. That gives three cases.

Case 1: f(n) grows slower than n^(log_b a), i.e. f(n) = O(n^c) for some c < log_b a. The cost is dominated by the leaves of the tree, and T(n) = Θ(n^(log_b a)).
Example: T(n) = 8T(n/2) + n². a = 8, b = 2, log_b a = 3. Since f(n) = n² grows slower than n³, T(n) = Θ(n³).

Case 2: f(n) grows at the same rate as n^(log_b a). The cost is spread evenly across the levels of the tree, and T(n) = Θ(n^(log_b a) · log n).
Example: Merge Sort itself. a = 2, b = 2, log_b a = 1. Since f(n) = n grows at the same rate as n¹, T(n) = Θ(n log n).

Case 3: f(n) grows faster than n^(log_b a), satisfying a regularity condition (a·f(n/b) ≤ k·f(n) for some k < 1). The cost is dominated by the root, and T(n) = Θ(f(n)).
Example: T(n) = 2T(n/2) + n². a = 2, b = 2, log_b a = 1. Since f(n) = n² grows faster than n¹, T(n) = Θ(n²).

When f(n) falls "between" two cases, like f(n) = n / log n, the theorem doesn't apply and you need another tool, like the substitution method.

Here's the essential takeaway: before optimizing anything, you need to be able to name the problem. Big O is the vocabulary for that.

## For those who want to go deeper

- Cormen, Leiserson, Rivest & Stein, "Introduction to Algorithms" (the "CLRS"): the classic reference on algorithm analysis and recurrences.
- MIT OpenCourseWare, course 6.006 "Introduction to Algorithms": recorded lectures on asymptotic notation and the Master Theorem.
