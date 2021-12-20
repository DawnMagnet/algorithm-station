原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc645](http://blog.leanote
.com/post/dawnmagnet/lc645)
# 题目
<p>集合 <code>s</code> 包含从 <code>1</code> 
到&nbsp;<code>n</code>&nbsp;的整数。不幸的是，因为数据错误，导致集合里面某一
个数字复制了成了集合里面的另外一个数字的值，导致集合 
<strong>丢失了一个数字</strong> 并且 <strong>有一个数字重复</strong> 。</p>
<p>给定一个数组 <code>nums</code> 代表了集合 <code>S</code> 
发生错误后的结果。</p>
<p>请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。</p>
<p>&nbsp;</p>
<p><strong>示例 1：</strong></p>
<pre><strong>输入：</strong>nums = [1,2,2,4]
<strong>输出：</strong>[2,3]
</pre>
<p><strong>示例 2：</strong></p>
<pre><strong>输入：</strong>nums = [1,1]
<strong>输出：</strong>[1,2]
</pre>
<p>&nbsp;</p>
<p><strong>提示：</strong></p>
<ul>
    <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
    <li><code>1 &lt;= nums[i] &lt;= 10<sup>4</sup></code></li>
</ul>
# 思路分析

根据题目我们可以知道，如果这个数据集合没有错误，应该是1到n每个数字都会出现一
次。
那么出现了一个错误，丢失和重复各出现一次，也就是说，在这个错误的集合中，存在
两个数字**一个出现了两次，一个出现了零次，剩下的所有都只出现过一次。**
那么我们完全可以使用一个基数排序（通俗地来说也就是统计）来做，一次遍历获得1到
n中间所有数字的的出现次数，然后再去看一下哪个数字出现了两次，哪个数字出现了0
次，这就是我们最终出现错误的两个数字。

# C++代码

```cpp
int js[10005];
class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        memset(js, 0, sizeof js);
