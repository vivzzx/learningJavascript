/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const sortArr = nums.sort((a, b) =>  a - b)
   
    let i = (sortArr.length) - 1
    while (sortArr[i] === sortArr[i-1]) {
        //console.log('last:', sortArr[i], 'last but one', sortArr[i-1])
        i--
    }
    let secondLarg = sortArr[i - 1]
    return secondLarg
}

//getSecondLargest([2, 3, 6, 6, 5]) // 5
getSecondLargest([2, 3, 6, 6, 6, 6, 5]) // 5
//getSecondLargest([2, 3, 100, 6, 6]) // 6
//getSecondLargest([2, 34, 80, 76, 5]) // 76