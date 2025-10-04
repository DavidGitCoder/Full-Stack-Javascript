console.log("*************************");
console.log("*** TWO SUM CHALLENGE ***");
console.log("*************************");

const twoSum_solutionLeetCode = function (nums, target) {
  //Time: O(n)
  //Space: O(n)
  let cur, x;
  let map = {};

  for (let s = 0; s < nums.length; s++) {
    cur = nums[s];
    x = target - cur;

    if (map[x] >= 0) {
      return [map[x], s];
    }
    map[cur] = s;
    //console.log(map);
  }
  return [-1];
};

console.log(twoSum_solutionLeetCode([1, 2, 3, 4, 5, 6, 7, 8, 9], 13));
console.log("****************************");
console.log("*** PALINDROME CHALLENGE ***");
console.log("****************************");

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();

  let e = str.length - 1;
  for (let i = 0; i <= e; i++) {
    if (str[i] !== str[e]) {
      return false;
    }
    e--;
  }

  return true;
};

console.log(isPalindrome(123456787654321));

console.log("******************************");
console.log("*** ROMAN TO INT CHALLENGE ***");
console.log("******************************");

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const rMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let int = 0;

  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && rMap[s[i]] < rMap[s[i + 1]]) {
      int -= rMap[s[i]];
    } else {
      int += rMap[s[i]];
    }

    console.log({
      int: int,
      rMap: rMap[s[i]],
      "s[i]": s[i],
      i: i,
    });
  }
  return int;
};

console.log(romanToInt("MCMXCIV"));

console.log("***************************************");
console.log("*** lONGEST COMMON PREFIX CHALLENGE ***");
console.log("***************************************");

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let len = strs.length;
  let prefix = strs[0]; // initial prefix is first word -> saves one iteration

  for (let i = 1; i < len; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      console.log({ prefix: prefix, cur: strs[i] });
      if (prefix === "") return "";
    }
  }
  return prefix;
};

console.log("prefix: " + longestCommonPrefix(["flower", "flow", "flight"]));

console.log("**************************");
console.log("*** BRACKETS CHALLENGE ***");
console.log("**************************");

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let bracketMap = { "(": ")", "[": "]", "{": "}" };
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    // console.log({
    //   stack: stack,
    //   i: i,
    //   "s[i]": s[i],
    //   "bracketMap[stack[stack.length - 1]] ":
    //     bracketMap[stack[stack.length - 1]],
    // });
    //if truthy thus returning the closed bracket
    if (bracketMap[s[i]]) {
      stack.push(s[i]);
    } else {
      if (bracketMap[stack.pop()] !== s[i]) {
        //console.log(`poped ${s[i]}`);
        return false;
      }
    }
    //console.log(stack);
  }
  return stack.length === 0;
};
// console.log(isValid("(([]){})"));
// console.log(isValid("(([){})"));
console.log(isValid("()[]{)}"));

console.log("*****************************************");
console.log("*** MERGE TWO SORTED LISTED CHALLENGE ***");
console.log("*****************************************");
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function (list1, list2) {
//   let stack=[];

// let i,j=0;

// };
// mergeTwoLists((list1 = [1, 2, 4]), (list2 = [1, 3, 4]));

const quickSort = function (list) {
  let tmp, curr, next;
  let s = (n = 0);
  let e = list.length - 1;

  while (s <= e) {
    curr = list[s];
    tmp = s;

    while (n <= e) {
      next = list[++n];
      //console.log({ list: list, curr: curr, next: next, s: s, n: n, tmp: tmp });
      if (next > curr) {
        //switch because curr is smaller than the next
        list[tmp] = next;
        list[n] = curr;
        curr = next;
        tmp = n;
      }
    }

    s++;
    n = s;
  }
};
quickSort([156, 141, 35, 94, 88, 61, 111]);

//const selectBiggerNumber(list)
const selectionSort = function (list) {
  let sorted = [];
  let deletedElement;

  while (list.length > 0) {
    //find the greatest number and removes it from original list
    deletedElement = list.splice(findGreatest(list), 1);
    //adds the deleted element (splice returns an array of the deleted element) in sorted
    sorted.push(deletedElement[0]);
    // console.log(list);
    // console.log(sorted);
  }
  return sorted;
};
// Find the greatest number in an array
function findGreatest(list) {
  let greatest = list[0];
  greatestIndex = 0;

  for (let i = 1; i < list.length; i++) {
    if (list[i] >= greatest) {
      greatest = list[i];
      greatestIndex = i;
    }
  }
  return greatestIndex;
}

console.log(selectionSort([156, 141, 35, 94, 88, 61, 111]));

//**** RECURSION */
const countdown = function (num) {
  console.log(num);
  if (num <= 0) return 0;
  countdown(num - 1);
};
console.log(countdown(5));

//Recursive Find Biggest Square Size For Area
const biggestSquare = function findBiggestSquare(width, length) {
  //base case, return width and length when they are equal
  console.log({ width: width, length: length });

  if (width === length) {
    return [width, length];
  }

  if (length > width) {
    length = length - width;
  } else {
    width = width - length;
  }
  return findBiggestSquare(width, length);
};
console.log(biggestSquare(1680, 700));

const recSum = function (list, index = 0) {
  if (index === list.length - 1) return list[index];

  //return list[index] + recSum(list, index + 1); //1st method
  let x = list[0];
  list.splice(0, 1); //second method : reduce the size each recursive call
  return x + recSum(list);
};
console.log(recSum([2, 4, 6, 10, 12, 100]));

const nbOfItems = function (list) {
  if (list.length <= 0) return 0;
  list.splice(0, 1);
  return 1 + nbOfItems(list);
};
console.log(nbOfItems([0]));

const maxNum = function (list) {
  if (list.length === 1) return list[0];

  const subMax = maxNum(list.slice(1));
  if (subMax > list[0]) {
    return subMax;
  } else {
    return list[0];
  }
};
console.log(maxNum([0, 15, 6, 23, 9]));

const recBinarySearch = function (list, val) {
  let e = list.length;
  let s = 0;
  let m = Math.floor((e + s) / 2);

  console.log({ s: s, e: e, m: m });

  if (s > e) return -1;

  if (list[m] === val) return m;

  if (val > list[m]) {
    s = m + 1;
  } else {
    e = m - 1;
  }
  console.log({
    s: s,
    e: e,
    m: m,
    "list[m]": list[m],
    "list.slice(s, e+1)": list.slice(s, e + 1), //slice(): e is excluded so i add 1 to it
  });
  return recBinarySearch(list.slice(s, e + 1), val);
};
console.log(recBinarySearch([0, 6, 9, 15, 18, 20, 23], 18));

const quickSort2 = function (list) {
  if (list.length < 2) return list; //empty arrays or with just 1 element have nothing to sort, return as is
  let pivot = list[0];
  let stackSmaller = [];
  let stackGreater = [];

  for (let i = 1; i < list.length; i++) {
    if (pivot > list[i]) {
      stackSmaller.push(list[i]);
    } else {
      stackGreater.push(list[i]);
    }
  }
  console.log({
    list: list,
    stackSmaller: stackSmaller,
    stackGreater: stackGreater,
    pivot: pivot,
  });

  return [...quickSort2(stackSmaller), pivot, ...quickSort2(stackGreater)]; //return an array of all the values of sTacksmaller + pivot + stackGreater
};
console.log(quickSort2([33, 5, 15, 55, 10, 36, 44]));
