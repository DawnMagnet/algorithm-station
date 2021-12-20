原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc1239](http://blog.leanot
e.com/post/dawnmagnet/lc1239)
# 题目
<p>给定一个字符串数组 <code>arr</code>，字符串 <code>s</code> 是将 
<code>arr</code> 某一子序列字符串连接所得的字符串，如果 <code>s</code> 
中的每一个字符都只出现过一次，那么它就是一个可行解。</p>
<p>请返回所有可行解 <code>s</code> 中最长长度。</p>
<p>&nbsp;</p>
<p><strong>示例 1：</strong></p>
<pre><strong>输入：</strong>arr = ["un","iq","ue"]
<strong>输出：</strong>4
<strong>解释：</strong>所有可能的串联组合是 "","un","iq","ue","uniq" 和 
"ique"，最大长度为 4。
</pre>
<p><strong>示例 2：</strong></p>
<pre><strong>输入：</strong>arr = ["cha","r","act","ers"]
<strong>输出：</strong>6
<strong>解释：</strong>可能的解答有 "chaers" 和 "acters"。
</pre>
<p><strong>示例 3：</strong></p>
<pre><strong>输入：</strong>arr = ["abcdefghijklmnopqrstuvwxyz"]
<strong>输出：</strong>26
</pre>
<p>&nbsp;</p>
<p><strong>提示：</strong></p>
<ul>
    <li><code>1 &lt;= arr.length &lt;= 16</code></li>
    <li><code>1 &lt;= arr[i].length &lt;= 26</code></li>
    <li><code>arr[i]</code>&nbsp;中只含有小写英文字母</li>
</ul>
# 思路分析
不难看出，我们似乎可以简化一下这些状态。
由于是小写字母，我们相当于可以用26个布尔状态来分别表示每个字母是否出现。
但我们的int类型是32位的，所以相当于我们可以用一个整数来代表一个字符串，是不是
非常方便呢？
那么如果在一个字符串内遇到重复字母的情况，我们就直接把这个字符串舍弃。因为没
法用。
以上都称为预处理，因为我们还没落实到逻辑上，那么最终合并的逻辑是什么呢？