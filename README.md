# Unexpected NaN result from adding a number and undefined

This repository demonstrates a common yet subtle bug in JavaScript involving the addition of a number and undefined. The unexpected NaN result can lead to program errors that are difficult to debug.

## Bug Description
In JavaScript, adding a number to undefined results in NaN (Not a Number). This behavior is often unexpected, particularly when working with functions where arguments may not always be defined.

## Bug Reproduction
The `bug.js` file demonstrates the issue. Running this code will produce `NaN` as the output, since `undefined` is added to `1`.

## Solution
The `bugSolution.js` provides a solution. Before performing addition, it checks if the second argument (`b`) is undefined. If it is, it replaces it with `0`, ensuring that the addition operates on numbers and produces an expected result.

## Lessons Learned
Always handle potential undefined values explicitly.  This avoids unexpected NaN results and leads to more robust code.