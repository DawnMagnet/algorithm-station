大家好！今天给大家带来的是第80题，删除有序数组中的重复项
原贴地址：http://leanote.com/blog/post/606bd48aab644179a600036d
## 题目
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 
，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 
额外空间的条件下完成。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 思路分析
这道题虽然是中等题，但其实只有简单题的难度。  
原地修改和不使用额外空间是一个挑战  
那就要我们开动脑筋，如何才能在原数组中判断一个数字是多于两个重复值的需要被剔
除的值呢，这就要看到**数组是升序**这个条件了。  
每次在遍历到一个值的时候，向前判断两个值，若这三者相等，就说明当前遍历到的值
是需要被删除的值，这里还要注意一个点，就是删除之后不可继续向后遍历，因为我们
是在原地进行的操作，所以原来的n+1位置的数字会被前移，如果我们再使n加1，就会漏
过这个值，从而造成错误。
rust代码
```rust
impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let n = nums.len();
        let mut i = 2usize;
        while i < nums.len() {
            if nums[i] == nums[i - 1] && nums[i - 1] == nums[i - 2] {
                nums.remove(i);
            } else {
                i += 1;
            }
        }
        nums.len() as i32
    }
}
```
C++代码
```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        for (int i = 2; i < nums.size(); ++i) {
            if (nums[i] == nums[i - 1] && nums[i - 1] == nums[i - 2]) 
                nums.erase(nums.begin() + i--);
        }
        return nums.size();
    }
};