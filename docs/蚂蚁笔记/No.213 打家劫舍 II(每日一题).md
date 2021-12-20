大家好！今天给大家带来的是一道很有意思的题目：打家劫舍。
原贴地址：http://leanote.com/blog/post/6077ab41ab644104e70017ff
## 题目
你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所
有的房屋都 **围成一圈** 
，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的
防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。
给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 
，能够偷窃到的最高金额。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 思路分析
这个题目，如果去掉上面那个**围成一圈**，一看就是一个非常经典的动态规划题目，
当我们每次遍历到一个房子的时候，有两个选择，一个是抢（从而放弃了抢该房子之前
一座房子的权利），一个是不抢，假设我们对每个房子维护一个从左往右抢，抢到该房
子时能获得的最大价值，那么状态转移方程就是
```
dp[i] = max(dp[i-1], dp[i-2]+value[i])
```
当然这都是假设在房子没有围城一圈的情况下的。
那么如果这些房子围城一圈了呢？大家考虑一下围城一圈和之前最大的变化是什么，其
实就是原本可以同时选择首位两座房子，现在不行，两座房子中必定有一座不能被选择
。
鉴于此，我们可以分出两种情况讨论，一种不选择头房子，一种不选择尾房子，这样两
种情况再套用没有圈的方法来计算，最后再取一个最大值就解决了。
C++代码
```cpp
class Solution {
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;
        if (n == 1) return nums[0];
        vector<int> nohead = nums, notail = nums;
        nohead.erase(nohead.begin());
        notail.pop_back();
        return max(nocirclerob(nohead), nocirclerob(notail));
    }
    int nocirclerob(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) return 0;
        vector<int> ret = {0, nums[0]};
        for (int i = 1; i < n; ++i) {
            ret.push_back(max(ret[ret.size() - 2] + nums[i], ret.back()));
        }
        return ret.back();
    }
};