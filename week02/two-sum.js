//hash
//map里存入键值对，键target-nums[i],值下标
//循环的时候看map里面有没有当前值  map.has(nums[i]),
//有就返回map.get(nums[i])和当前下标
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i ++) {
        if(map.has(nums[i])) {
            return [map.get(nums[i]),i]
        } else {
            map.set(target - nums[i],i)
        }
    }
};

//暴力枚举
//双重循环，判断nums[i] + nums[m] === target
//需要注意内层循环的开始条件
var twoSum1 = function(nums, target) {
    for(let i = 0; i < nums.length -1 ; i ++) {
        for(let m = i + 1; m < nums.length; m ++) {
            if(nums[i] + nums[m] === target) {
                return [i,m]
            }
        }
    }
};

//利用数组的indexof
var twoSum3 = function(nums, target) {
    for(let i = 0; i < nums.length; i ++) {
        let m = nums.indexof(target - nums[i],(i+1))
        if(m > 0){
            return [i,m]
        }
    }
};


