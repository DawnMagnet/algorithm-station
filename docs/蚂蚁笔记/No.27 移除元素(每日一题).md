非常抱歉，周末太忙了，捞了两个面试和蓝桥杯，实在是忙不过来。
还好上天给我送来一道简单题
原贴地址：http://blog.leanote.com/post/dawnmagnet/8b607821d3dc
## 题目
给你一个数组 nums 和一个值 val，你需要 原地 
移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-element
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 思路分析
这其实是一个非常基本的题，考察到基本的数据结构，最最基本的线性数组，增删操作
都是O(n)级别的，因为我们在删除一个元素之后，需要将删除位置之后的元素每个向前
移动一位，但是只有一种情况是O(1)的，就是将数组看成一个栈，即只对末尾进行push
和pop操作，这样既实现了增删，复杂度也只是O(1)，这就是我们的思路。
但我们要删的不一定在末尾怎么办？交换一下位置就行了，先把末尾的元素赋值给待删
除的元素，再删除末尾元素，就相当于是删除了该元素（在不考虑顺序的情况下可以这
么做）
Rust代码
```rust
impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut left = 0;
        while left < nums.len() && nums.len() > 0 {
            if nums[left] == val {
                nums.swap_remove(left);
            } else {
                left += 1;
            }
        }
        nums.len() as i32
    }
}
```
rust中存在该方法，swap_remove()就是删除一个指定位置的元素并且将末尾交换至该位
置。
但是我们还有更简单的方法，因为题目中没有要求删除数组，而仅仅是要求我们把不是v
al的所有数组放在前面，所以我们也可以不对数组做删除，而仅仅是交换位置，将正确
的数字放在正确的位置即可。
C++代码
```cpp
class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int i = 0;
        for (int j = 0; j < nums.size(); j++) {
                if (nums[j] != val) {