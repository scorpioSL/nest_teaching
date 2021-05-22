function twoSum(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == target - nums[i]) {
                return [i, j];
            }
        }
    }
}

let input = [2, 7, 11, 15];
let target = 13;

console.log(twoSum(input, target));