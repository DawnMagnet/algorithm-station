原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc451](http://blog.leanote.c
om/post/dawnmagnet/lc451)
# 题目
<p>给定一个字符串，请将字符串里的字符按照出现的频率降序排列。</p>
<p><strong>示例 1:</strong></p>
<pre><strong>输入:</strong>
"tree"
<strong>输出:</strong>
"eert"
<strong>解释:
</strong>'e'出现两次，'r'和't'都只出现一次。
因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
</pre>
<p><strong>示例 2:</strong></p>
<pre><strong>输入:</strong>
"cccaaa"
<strong>输出:</strong>
"cccaaa"
<strong>解释:
</strong>'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
注意"cacaca"是不正确的，因为相同的字母必须放在一起。
</pre>
<p><strong>示例 3:</strong></p>
<pre><strong>输入:</strong>
"Aabb"
<strong>输出:</strong>
"bbAa"
<strong>解释:
</strong>此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
注意'A'和'a'被认为是两种不同的字符。
</pre>
# 思路分析
# C++代码