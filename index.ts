function twoSum(nums: number[], target: number): number[] {
    
    nums = nums.filter(num=>num<target);

    for (var _i = 0; _i < nums.length; _i++) {
        for (var _y = 0; _y < nums.length; _y++) {                        
            if(target-(nums[_i]+nums[_y])==0){
                return [_i,_y];
            }
          }
      }

    return nums;
};

console.log(
    twoSum([2,7,11,15],9)
);