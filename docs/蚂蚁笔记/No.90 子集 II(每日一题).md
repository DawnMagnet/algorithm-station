大家好!今天给大家带来的是LeetCode第90题子集 II.
## 题目
给你一个整数数组 `nums` 
，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
解集**不能**包含重复的子集。返回的解集中，子集可以按**任意顺序**排列。
 
示例 1：
```
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
```
示例 2：
```
输入：nums = [0]
输出：[[],[0]]
```
提示：
```
1 <= nums.length <= 10
-10 <= nums[i] <= 10
```
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subsets-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 思路分析
这是一个求子集的题目,而且是所有子集,我们无法避免的联想到对元素进行枚举.**我一
开始的思路是这样的**
1.首先获取所有元素的键值对,值为该元素在数组中出现的次数
2.假设一个数字n出现了m次,那么我们就有(m+1)种情况,即向子集中放入0,1,2...m个该
数字
3.基于这个思路,我们就做了一个dfs来循环的将数字放入子集并且模拟m+1种情况来继续
下一步dfs
以下是我按照第一次思路写出的C++代码
```cpp
class Solution {
public:
    vector<vector<int>> ret;
    vector<vector<int>> subsetsWithDup(vector<int>& nums) {
        array<int, 21> a = {0};
        for (auto & num : nums) {
            a[num + 10]++;
        }
        vector<pair<int, int>> v;
        for (int i = 10; i >= -10; --i) {
            if (a[i + 10]) v.push_back(make_pair(i, a[i + 10]));
        }
        vector<int> cur;