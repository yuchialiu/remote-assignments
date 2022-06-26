function twoSum(nums, target) {
  // your code here
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let v = nums[i];
    if (map[target - v] >= 0) {
      return [map[target - v], i];
    } else {
      map[v] = i;
    }
  }
}
/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
    */
