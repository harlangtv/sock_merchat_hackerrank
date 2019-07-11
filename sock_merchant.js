// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
//
// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .
//
// Function Description
//
// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.
//
// sockMerchant has the following parameter(s):
//
// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format
//
// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.
//
// Constraints
//
//  where
// Output Format
//
// Return the total number of matching pairs of socks that John can sell.


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
// SOLUTION:
function sockMerchant(n, ar) {
    //create a variable to sort the array using the sort method.
    // sort method can take a function as an argument, ensuring that each item is sorted in ascending order
    let sorted = ar.sort((a, b) => a - b)
    // create pairs variable to count the total amount of pairs
    let pairs = 0

    // create standard for loop. However, since we are comapring items, we must stop at the last index (hence i < n - 1)
    for (let i = 0; i < n - 1; i++) {
      // comparing each item of the array to it's direct sbling
        if (sorted[i] === sorted[i + 1]) {
          // if conditional is met, increment pairs
            pairs++
            // also increment i by 1, allowing us to skip to the next item since we've already checked it
            i += 1
        }
        // if two items do not match, for loop simply continues
    }
    //return the pairs variable once for loop is complete
    return pairs
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
