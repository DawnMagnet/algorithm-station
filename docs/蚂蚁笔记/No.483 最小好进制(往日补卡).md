原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc483](http://blog.leanote
.com/post/dawnmagnet/lc483)
# 题目
<p>对于给定的整数 n, 
如果n的k（k&gt;=2）进制数的所有数位全为1，则称&nbsp;k（k&gt;=2）是 n 
的一个<em><strong>好进制</strong></em>。</p>
<p>以字符串的形式给出 n, 以字符串的形式返回 n 的最小好进制。</p>
<p>&nbsp;</p>
<p><strong>示例 1：</strong></p>
<pre><strong>输入：</strong>"13"
<strong>输出：</strong>"3"
<strong>解释：</strong>13 的 3 进制是 111。
</pre>
<p><strong>示例 2：</strong></p>
<pre><strong>输入：</strong>"4681"
<strong>输出：</strong>"8"
<strong>解释：</strong>4681 的 8 进制是 11111。
</pre>
<p><strong>示例 3：</strong></p>
<pre><strong>输入：</strong>"1000000000000000000"
<strong>输出：</strong>"999999999999999999"
<strong>解释：</strong>1000000000000000000 的 999999999999999999 进制是 11。
</pre>
<p>&nbsp;</p>
<p><strong>提示：</strong></p>
<ol>
    <li>n的取值范围是&nbsp;[3, 10^18]。</li>
    <li>输入总是有效且没有前导 0。</li>
</ol>
<p>&nbsp;</p>
# 思路分析
这道题其实有点难
我们先确定一个事实：k进制的"11111111..."，假设有m个1，用10进制表示出来就是$1+
k+k^2+k^3+...+k^{m-1}$
相当于这个题目变成了求等比数列的和。
而通过初等数学的计算，我们知道了这个等比数列的和等于$\frac{1-k^m}{1-k}$，那么
我们现在的任务变成了算两个参数，m和k，使这个式子等于给定的整数n