// Code adapted from https://www.geeksforgeeks.org/generate-a-combination-of-minimum-coins-that-results-to-a-given-value/
// Original code contributed by Nidhi Goel

// Function to find the minimum number of coins to make the sum equals to X

/**
 * 
 * @param {number} totalLength 
 * @param {Array.<number>} available 
 * @returns {{value: number, result: Object.<string, number>}}
 */

export default function dpSolution(totalLength: number, available: Array<number>)
    : { value: number; result: { [p: string]: number; }; } {

    const N = available.length;
    
    // create result object 
    const resultObj = available.reduce((o, key) => Object.assign(o, {[key]: 0}), {});

    // dp array to store the minimum number of coins for each value from 0 to X
    const dp = new Array(totalLength + 1).fill(Infinity);
    
    // Initialize dp array
    dp[0] = 0;
    
    // Loop through all values from 1 to X and compute the minimum number of coins
    for (let i = 1; i <= totalLength; i++) {
    	for (let j = 0; j < N; j++) {
        	if (available[j] <= i && dp[i - available[j]] !== Infinity) {
        		dp[i] = Math.min(dp[i], 1 + dp[i - available[j]]);
        	}
    	}
    }
    
    // If no solution exists
    if (dp[totalLength] === Infinity) {
    	// console.log("-1");
    	return {
            value: -1,
            result: resultObj,
        }
    }
    
    // Print the solution
    let i = totalLength;
    while (i > 0) {
    	for (let j = 0; j < N; j++) {
            if (i >= available[j] && dp[i - available[j]] === dp[i] - 1) {
        // 		result.push(C[j]);
                resultObj[available[j].toString()]++;
                i -= available[j];
                break;
            }
    	}
    }
    
    // console.log(coinsObj);
    
    return {
        value: dp[totalLength],
        result: resultObj
    };
}

// // Driver code
// const X = 22;

// // Set of possible denominations
// const arr = [6, 8, 12, 16];

// // Function Call
// const {value, result} = dpSolution(X, arr);