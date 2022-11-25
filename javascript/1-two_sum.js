function twoSum (nums,target) {
    const keys = new Map();

    for (let [index,num] of nums.entries()) {
        if (keys.has(num)) return [keys.get(num),index];
        let diff = target - num;
        keys.set(diff,index);
    }
}

console.log(twoSum([2,7,11,15],9));
