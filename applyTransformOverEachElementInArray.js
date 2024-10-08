/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const nArr=[];

    for(let i=0; i<arr.length; i++)
    {
        nArr[i]=fn(arr[i], i);
    }
    return nArr;
};
