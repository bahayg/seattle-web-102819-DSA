// Tiffany

{maxGain(nums) {
    int length = nums.length;
    newArr = [];
    // Initialize the solutions array with the first three answers
    // we will build off of
    newArr[0] = nums[0];
    newArr[1] = nums[1];
    newArr[2] = nums[0] + nums[2];
    // Set a max variable and update it as we add values to the memo array
    // If we see a new max sum, update appropriately
    let max = newArr[2]; (we know this is the new max right now because that third position has the highest we could have at this moment)
    // For loop the iterate through the blocks array, only comparing i-2 and i-3 due to the
    // Constraints of this problem
    for (let i = 3; i < length; i++) {
      newArr[i] = nums[i] + Math.max(newArr[i-2], newArr[i-3]);
      if (newArr[i] > max)
        max = newArr[i];
    }
    return max;
  }

  // Katrina

  function houseRob(arr) {
    let newArr = [];
    newArr.push (arr[0], arr[1], arr[2] + arr[0])

    for (i = 3; i < arr.length; i ++) {
      let sum = arr[i] + Math.max(newArr[i-2], newArr[i-3])
      newArr.push(sum)
      if (sum > x) {
        x = sum
      }
      return x
    }
  }