

/**
 * First I have to declare an empty array
 * iterate through the array by incrementing i by size(argument) and slice from i to i+size
 * and push the sliced array into the empty array
 */

function _chunk(array, size=1) {
    let ans = [];

    for(let i=0; i<array.length; i+=size){
        ans.push(array.slice(i, i+size));
    }

    return ans;
}

const array = ['a', 'b', 'c', 'd'];
console.log(_chunk(array, 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ]
console.log(_chunk(array, 3)); // [ [ 'a', 'b', 'c' ], [ 'd' ] ]