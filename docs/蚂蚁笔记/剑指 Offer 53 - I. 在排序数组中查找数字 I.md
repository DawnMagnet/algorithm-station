原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc-offer53](http://blog.lean
ote.com/post/dawnmagnet/lc-offer53)
# 题目
<p>统计一个数字在排序数组中出现的次数。</p>
<p>&nbsp;</p>
<p><strong>示例 1:</strong></p>
<pre><strong>输入:</strong> nums = [<code>5,7,7,8,8,10]</code>, target = 8
<strong>输出:</strong> 2</pre>
<p><strong>示例&nbsp;2:</strong></p>
<pre><strong>输入:</strong> nums = [<code>5,7,7,8,8,10]</code>, target = 6
<strong>输出:</strong> 0</pre>
<p>&nbsp;</p>
<p><strong>提示：</strong></p>
<ul>
    <li><code>0 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
    <li><code>-10<sup>9</sup>&nbsp;&lt;= nums[i]&nbsp;&lt;= 
    10<sup>9</sup></code></li>
    <li><code>nums</code>&nbsp;是一个非递减数组</li>
    <li><code>-10<sup>9</sup>&nbsp;&lt;= target&nbsp;&lt;= 
    10<sup>9</sup></code></li>
</ul>
<p>&nbsp;</p>
<p><strong>注意：</strong>本题与主站 34 题相同（仅返回值不同）：<a 
href="https://leetcode-cn.com/problems/find-first-and-last-position-of-element-
in-sorted-array/">https://leetcode-cn.com/problems/find-first-and-last-position
-of-element-in-sorted-array/</a></p>
# 思路分析
这个实在是太简单了。
统计一下就行
# Rust代码

```rust
impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        nums.iter().fold(0, |acc, &x| if x == target {acc + 1} else {acc})
    }
}
```
