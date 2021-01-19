function twoSum(nums: number[], target: number): number[] {
    
    

    if(nums[0]+nums[1]==target)
        return [0,1];

    for (var _i = 0; _i < nums.length; _i++) {
        console.log(nums[_i]);
        for (var _y = 0; _y < nums.length; _y++) {             
            
            if((nums[_i]+nums[_y]==target)&&
                (_y!=_i)
                ){
                    
                return [_i,_y];
            }
          }
      }

    return[-1,-1];
    
};

console.log(
    twoSum([0,4,3,0],0)
);