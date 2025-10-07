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

console.log(romanToInt("MDCCCXCIV"));

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
    //if truthy thus returning the closed bracket
    if (bracketMap[s[i]]) {
      stack.push(s[i]);
    } else {
      if (bracketMap[stack.pop()] !== s[i]) {
        return false;
      }
    }
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
console.log("//**** BINARY SEARCH - RECURSIVE */");
const recBinarySearch = function (list, val, s, e) {
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
  });
  return recBinarySearch(list, val, s, e);
};
// console.log(recBinarySearch([0, 6, 9, 15, 18, 20, 23], 23, 0, 7));
console.log("//**** QUICK SORT- RECURSIVE */");
const quickSort2 = function (list) {
  if (list.length < 2) return list; //empty arrays or with just 1 element have nothing to sort, return as is
  let pivotIndex = Math.floor(0 + (list.length - 1) / 2);
  let pivot = list[pivotIndex];

  //put pivot at the end of the list so not to include it later on
  list[pivotIndex] = list[list.length - 1];
  list[list.length - 1] = pivot;
  let stackSmaller = [];
  let stackGreater = [];

  for (let i = 0; i < list.length - 1; i++) {
    if (pivot > list[i]) {
      stackSmaller.push(list[i]);
    } else {
      stackGreater.push(list[i]);
    }
  }
  console.log({
    list: list,
    stackSmaller: stackSmaller,
    pivot: pivot,
    stackGreater: stackGreater,
  });

  return [...quickSort2(stackSmaller), pivot, ...quickSort2(stackGreater)]; //return an array of all the values of sTacksmaller + pivot + stackGreater
};
console.log(quickSort2([33, 5, 15, 55, 10, 36, 44]));

const hashTable = {};
hashTable["jenny"] = 8675309;
hashTable["emergency"] = 911;
//console.log(hashTable);

//similar to an Object but suitable for large dataset
const voted = new Map();
const checkVoter = function (name) {
  console.log(voted.get(name));
  if (!voted.get(name)) {
    console.log("Let them vote!");
    voted.set(name, true);
  } else {
    console.log("Kick them out!");
  }
  console.log(voted);

  return;
};
// checkVoter("Thomas");
// checkVoter("Thomas");
// checkVoter("Ella");

//**** GRAPH - BREADTH-FIRST SEARCH (shortest path) */

console.log("//**** RAPH - BREADTH-FIRST SEARCH (shortest path) */");

const graphQueue = function (persons) {
  const queue = [];
  let neighbors = [];
  const searched = []; //keeps track of all the people searched to avoid duplicates in queue

  let curNeighbor = "";

  //get neighbors
  neighbors = persons[Object.keys(persons)[0]];
  queue.push(...neighbors);

  //LOOP THROUGH PERSONS
  while (queue.length > 0) {
    //checks the first person of the queue and pops it off the queue
    curNeighbor = queue.shift();

    if (!searched.includes(curNeighbor)) {
      if (isPersonSeller(curNeighbor))
        return curNeighbor + " is a mango seller!";

      //else: add all neighbors to the queue
      queue.push(...persons[curNeighbor]);
      //add the person to the searched array to avoid duplicates
      searched.push(curNeighbor);
    }
    // console.log({
    //   //persons: persons,
    //   queue: queue,
    //   //neighbors: neighbors,
    //   curNeighbor: curNeighbor,
    //   "persons[curNeighbor]": persons[curNeighbor],
    //   queueLength: queueLength,
    // });
  }
  return "no luck finding a mango seller in your entourage :'";
};

const isPersonSeller = function (name) {
  if (name[name.length - 1] === "m")
    //if the name ends with 'm' then we'll return true
    return true;
  else return false;
};

const friends = {
  you: ["alice", "bob", "claire"],
  bob: ["anuj", "peggy"],
  alice: ["peggy"],
  claire: ["thom", "jonny"],
  anuj: [],
  peggy: [],
  thom: [],
  jonny: [],
};
//console.log(graphQueue(friends));

//**** GRAPH - DIJKSTRA (fastest path) for weighted graphs*/

console.log("//**** GRAPH - DIJKSTRA (fastest path) */");
const dijkstra = function (myGraph) {
  //keep track of all the processed nodes
  const processed = [];
  let node = findLowestCostNode(costs, processed);
  let neighbors = {};
  let cost, newCost;

  // loop through all the nodes
  while (node != "") {
    // check if node already processed
    console.log(node);
    // grabs the cost of the current
    cost = costs[node];
    //grabs all its neighbors
    neighbors = myGraph[node];
    //lopp through neighbors
    for (const key in neighbors) {
      newCost = cost + neighbors[key];

      if (newCost < costs[key]) {
        // update new cost of node->neighbor only if cost is smaller than the previous on
        costs[key] = newCost;
        // update new parent of neighbor with current node
        parents[key] = node;
      }
    }
    //add it to the processed list
    processed.push(node);
    node = findLowestCostNode(costs, processed);
    console.log("lowest node:" + node);
  }
  return parents;
};
/* returns the lowest cost node */
const findLowestCostNode = function (costs, processed) {
  // if costs is empty return -1
  if (Object.keys(costs).length < 1) return "";
  let lowestNode = ""; //eg : B
  let lowestCost = Infinity; //eg: 2
  let cost;
  //loop trough the different nodes
  for (const node in costs) {
    cost = costs[node];
    //if a smaller value is found, store it
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  }
  return lowestNode;
};

const myGraph = {
  START: { A: 6, B: 2 },
  A: { FIN: 1 },
  B: { A: 3, FIN: 5 },
  FIN: {},
};
const costs = { A: 6, B: 2, FIN: Infinity };
const parents = { A: "START", B: "START", FIN: Infinity };

//console.log(dijkstra(myGraph));

// console.log(Object.values(myGraph)[0]);
// console.log(myGraph["START"]["A"]); //gives the weight from START to A = 6
// console.log(Object.keys(myGraph["START"])); //returns array of keys of sub object: ["A","B"]

// function rev(s) {
//   let reversed = [];
//   reversed = [...s];
//   for (i = 0; i < s.length; i++) {
//     console.log(reversed.pop());
//   }
// }
// rev("savant");

//**** GREEDY ALGORITHM TO APPROXIMATE COMPLEX/IMPOSSIBLE PROBLEMS*/

console.log(
  "//****  GREEDY ALGORITHM TO APPROXIMATE COMPLEX/IMPOSSIBLE PROBLEMS */"
);
const radioStates = function () {
  let statesNeeded = new Set([
    "mt",
    "wa",
    "or",
    "id",
    "nv",
    "ut",
    "ca",
    "az",
    "id",
  ]); //sets store unique values
  const stations = {};
  stations["kone"] = new Set(["id", "nv", "ut"]);
  stations["ktwo"] = new Set(["wa", "id", "mt"]);
  stations["kthree"] = new Set(["or", "nv", "ca"]);
  stations["kfour"] = new Set(["nv", "ut"]);
  stations["kfive"] = new Set(["ca", "az"]);
  let bestStation;
  let statesCovered;
  let covered = new Set();
  const finalStations = [];

  //console.log(Object.entries(stations));
  while (statesNeeded.size > 0) {
    bestStation = "";
    statesCovered = new Set();

    //loop through all the stations
    for (const [station, statesForStation] of Object.entries(stations)) {
      covered = statesNeeded.intersection(statesForStation); //returns only the states of a station that are in the statesNeeded set
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }

      console.log({
        station: station,
        statesForStation: statesForStation,
        bestStation: bestStation,
        covered: covered,
        statesCovered: statesCovered,
        finalStations: finalStations,
        statesNeeded: statesNeeded,
      });
    }
    finalStations.push(bestStation);
    statesNeeded = statesNeeded.difference(statesCovered);
  }
  return finalStations;
};

//console.log(radioStates());
// console.log(statesNeeded);
// console.log(stations);

console.log("//****  BREADTH-FIRST SEARCH BY MYSELF*/");
const bfsStates = function () {
  const states = {
    ca: ["or", "az", "nv"],
    or: ["ca", "id", "wa"],
    wa: ["or"],
    nv: ["az", "ca", "ut", "id"],
    az: ["nv", "ca", "nm"],
    id: ["or", "nv"],
    nm: [],
    ut: [],
  };
  const qStatesToProcess = ["ca"]; //we start with CA
  const coloredStates = { ca: "white" }; //store all the nodes colors
  const processed = []; //keep track of what state has already been processed
  let color = "white";

  while (qStatesToProcess.length > 0) {
    // removes first state from queue to respect the FIFO queue
    let state = qStatesToProcess.shift();
    if (!processed.includes(state)) {
      //get the current state's neighbors
      let neighbors = states[state];

      //reverse the color for the neighbors by getting the parents color
      color = coloredStates[state];
      color === "white" ? (color = "black") : (color = "white");
      //assign the same color to all the neighbors
      for (let i = 0; i < neighbors.length; i++) {
        //update the color for that state only if it's not already in the object
        if (!(neighbors[i] in coloredStates)) {
          coloredStates[neighbors[i]] = color;
        }
      }
      //add neighbors to the queue
      qStatesToProcess.push(...neighbors);
      //flag state as processed
      processed.push(state);
    }
  }
  console.log({
    qStatesToProcess: qStatesToProcess,
    processed: processed,
  });
  return coloredStates;
};
//console.log(bfsStates());

console.log("//****  KNAPSACK */");
const knapSack = function () {
  const objects = {
    stereo: { price: 3000, weight: 4 },
    laptop: { price: 2000, weight: 3 },
    guitar: { price: 1500, weight: 1 },
  };
  const knapsackCapacity = 4;
  const checkedObjects = [];

  for (obj in objects) {
    checkedObjects.push(obj);
  }
  console.log(checkedObjects);

  while (knapSack[weight] < knapsackCapacity || checkedObjects.length > 0) {}
};
//knapSack();

console.log("***** TEST CODERPAD - CHANGE PROBLEM ****");
const changeOLD = function (cash) {
  const bills = [10, 5, 2];
  const toChange = { 10: 0, 5: 0, 2: 0 };
  let i = 0;
  let bill;
  let quotient;
  let remainder = cash;
  let nextDivisorFound = false;
  let nextDivisor = -1;
  const billsToAdd = [];

  for (let i = 0; i < bills.length; i++) {
    bill = bills[i];
    //initialize our tracker
    if (billsToAdd.length < 1) billsToAdd.push(bill);
    console.log(billsToAdd.length, billsToAdd);

    quotient = Math.floor(remainder / bill);
    //if the bill hasn't been found to be a candidate for change skip its remainder so we keep looking with the previous one
    if (billsToAdd.includes(bill)) {
      remainder = remainder % bill;
      console.log("remainder=" + remainder);
    }

    //we now need to make sure that the new remainder can be used in with the other bills we haven't processed yet
    let j = i + 1; //starts at i+1

    //look for the greatest divisor of the remainder in the remaining bills
    //this works because our bills are sorted in decreasing order
    let tempR = remainder;
    console.log(remainder);

    while (!nextDivisorFound && j < bills.length) {
      if (tempR % bills[j] === 0) {
        //we have found a bill that fits the remainder
        nextDivisorFound = true;
        nextDivisor = bills[j];
      }
      //if the remainder is greater than the quotient of the current bill
      else {
        //it will then use that new remainder to find a corresponding match in the subsequent iteration
        tempR = tempR % bills[j]; //tempR - bills[j];
      }
      j++;
    }
    console.log("nextdivisor:" + nextDivisor);
    j = i;
    tempR = remainder;
    while (!nextDivisorFound && j < bills.length) {
      //last hope
      if (tempR % bills[j] === 0) {
        nextDivisorFound = true;
        nextDivisor = bills[j];
      }
      j++;
    }

    if (nextDivisorFound) {
      billsToAdd.push(bills[i]);
      billsToAdd.push(nextDivisor);
    }

    //if there remains bills that can divise the remainder or if we are at the last bill and the that bill can give the change fully
    //then update the number of bills to use
    //this means we'll be able to use the next smaller bills to finish the change operation
    if (
      (nextDivisorFound && billsToAdd.includes(bills[i])) ||
      quotient * bill === cash
    ) {
      //we can safely add the quotient of the previous bill, otehrwise don't update it just skip it
      toChange[bill] = quotient;
    } else {
      //the remainder is not divisible by any other bills
      //in thise case we start from scratch again, and remainder is now our original cash value we need change for
      //remainder = cash;
    }
    console.log({
      i: i,
      cash: cash,
      toChange: toChange,
      bill: bill,
      quotient: quotient,
      remainder: remainder,
      nextDivisorFound,
      nextDivisor: nextDivisor,
      billsToAdd: billsToAdd,
    });
  }
  //if on the last bill, the remainder is not 0 then it means the operation isn't possible
  if (remainder > 0) {
    return "impossible";
  }

  return toChange;
};

const change = function (cash) {
  const bills = [10, 5, 4, 2];
  const toChange = { 10: 0, 5: 0, 4: 0, 2: 0 };
  const graph = {};
  let bill;
  let quotient;
  let remainder = cash;
  let isPossible = false;
  let tmpRemainder = cash;

  //1ST CASE - THE EASIEST AND GREEDY ALGORITHM
  for (let i = 0; i < bills.length; i++) {
    bill = bills[i];
    quotient = Math.floor(remainder / bill);
    remainder = remainder % bill;

    graph[i] = [tmpRemainder, bill, remainder % bills[i], quotient];
    tmpRemainder = remainder;
    if (remainder === 0) {
      isPossible = true;
    }
  }

  //2ND CASE - I HAVE TO BACKTRACK AND CHECK IF THE FIRST REMAINDER HAS A DIVISOR AMONG THE BILLS
  if (!isPossible) {
    //find the greatest divisor for the first remainder of cash
    remainder = cash % bills[0];
    const divisorsOfRemainder = bills.filter((n) => remainder % n === 0);
    const greatest = Math.max(...divisorsOfRemainder);
    //console.log({ cash, remainder, divisorsOfRemainder, greatest });
    if (remainder % greatest === 0) {
      graph[remainder] = [
        remainder,
        greatest,
        remainder % greatest,
        remainder / greatest,
      ];
    } else {
      return `it is impossible to give exact change for €${cash}`;
    }
  }

  return updateBills(graph, toChange, isPossible);
};
const updateBills = function (graph, toChange, isPossible) {
  if (isPossible) {
    for (arr of Object.entries(graph)) {
      for (let i = arr.length - 1; i > 0; i--) {
        //first case
        //everything went well and the change will be exact
        let bill = arr[i][1];
        toChange[bill] = arr[i][3];
      }
    }
  } else {
    let arr = Object.entries(graph);
    //second and last case
    //last hope, only keep the first bills and the last ones, ignore everything in the middle

    let bill = arr[0][1][1];
    toChange[bill] = arr[0][1][3];
    bill = arr[arr.length - 1][1][1];
    toChange[bill] = arr[arr.length - 1][1][3];
  }
  // console.log(graph);

  return toChange;
};
console.log(change(6));
console.log(change(18));
console.log(change(17));
console.log(change(42));

console.log(change(14));
console.log(change(1564));
console.log(change(33));
console.log(change(7));
console.log(change(97894654318)); //doesn't work for this one when remainder is 8
