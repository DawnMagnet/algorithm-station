原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc剑指 Offer 
42](http://blog.leanote.com/post/dawnmagnet/lc剑指 Offer 42)
# 题目
<p>输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的
和的最大值。</p>
<p>要求时间复杂度为O(n)。</p>
<p>&nbsp;</p>
<p><strong>示例1:</strong></p>
<pre><strong>输入:</strong> nums = [-2,1,-3,4,-1,2,1,-5,4]
<strong>输出:</strong> 6
<strong>解释:</strong>&nbsp;连续子数组&nbsp;[4,-1,2,1] 
的和最大，为&nbsp;6。</pre>
<p>&nbsp;</p>
<p><strong>提示：</strong></p>
<ul>
    <li><code>1 &lt;=&nbsp;arr.length &lt;= 10^5</code></li>
    <li><code>-100 &lt;= arr[i] &lt;= 100</code></li>
</ul>
<p>注意：本题与主站 53 题相同：<a 
href="https://leetcode-cn.com/problems/maximum-subarray/">https://leetcode-cn
.com/problems/maximum-subarray/</a></p>
<p>&nbsp;</p>
# 思路分析
这是一道非常非常经典的dp题目。
我们可以用dp[i]来表示以某一位结束的结束的所有子数组的最大和。
这样在我们求递推公式的时候，下一位有两种选择，一种是连着上一位一起，也就是num
[i] + dp[i-1]，另一种是不连接上一位，也就是num[i]，下一位的dp[i]就在这两个选
择中选出最大值，一定能够选出最优解，但是我们这个题要求的并非一定是要最后一位
结束的最大子数组的和，所以在维护dp[i]的时候，我们还需要维护一个最终的答案的变
量res。res的作用就相当于求所有dp[i]的最大值。最终就是我们的答案。
# Rust代码

```rust
impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let n = nums.len();
        let mut dp = vec![0; n];
        dp[0] = nums[0];
        let mut res = dp[0];
        for i in 1..n {
            dp[i] = (dp[i - 1] + nums[i]).max(nums[i]);
            res = res.max(dp[i]);
```
