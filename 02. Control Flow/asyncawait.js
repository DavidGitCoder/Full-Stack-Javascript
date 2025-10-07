import * as readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });
// const answer = await rl.question("what do you think of Node.js?");
const mileDriven = await rl.question("enter miles driven: ");
const gallonsUsed = await rl.question("enter gallons used: ");

console.log(`miles per gallon: ${(mileDriven / gallonsUsed).toFixed(2)}`);
rl.close();
