原贴地址：http://leanote.com/blog/post/6082bc6fab64410dd50008ec
## 题目
给你一个由 无重复 正整数组成的集合 nums 
，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], 
answer[j]) 都应当满足：
answer[i] % answer[j] == 0 ，或
answer[j] % answer[i] == 0
如果存在多个有效解子集，返回其中任何一个均可。
来源：力扣（LeetCode）
链接：https://leetcofde-cn.com/problems/largest-divisible-subset
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 思路分析
这个题目有点难，一开始我想用dfs做，但是粗略分析了一下，复杂度非常高，假设数组
长度是n，dfs枚举全组合的复杂度是O(2^n)，时间过长。
但是dfs的思路非常好理解，就是在一个数组的后面加上一个可以被该数组最后一个数字
整除的数。
```cpp
class Solution {
public:
    vector<int> ret;
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        vector<int> cur;
        dfs(nums, cur, -1);
        return ret;
    }
    void dfs(vector<int>& nums, vector<int>& cur, int pos) {
        if (cur.size() > ret.size()) ret = cur;
        for (int i = pos + 1; i < nums.size(); ++i) {
            if (pos == -1 || nums[i] % nums[pos] == 0) {
                cur.push_back(nums[i]);
                dfs(nums, cur, i);
                cur.pop_back();
            }
        }
    }
};
```
这是dfs的思路，也就是模拟的思路，当然最后是超时了。
所以我们得从复杂度开始考虑这个问题。
众所周知，dfs的最佳替代品当然就是dp啦，但是这个问题可以通过dp来解决吗，关键还
在于能不能分成子问题，或者说有没有递推关系。我们可以看出，如果我们对原数组进
行一个排序，因为大的数字在后面，所以对一个数来说，构造以该数结尾的最大整除子
集必须在原数组中的该数前面寻找，寻找一个能被该数约分的数。
这么说可能有点迷惑，我们加一个示例来看。
nums(原数组)|2|4|7|8|9|12|16|20
--|
dp|1|2|1|3|1|3|4|3
我们假设我们不知道8的dp值，但是我们知道8之前的dp值，我们就应该在8之前寻找能够
整除8的数字，其中有2和4，我们将这些数字的dp值求最大值再加1，就能推出以8结尾的
最大整除子集的最大长度。同理，dp(16)=max(dp(2),dp(4),dp(8))+1等于4，要是在前
方没有找到能够整除的数，最大子集的长度就是自己一个元素，就是1。