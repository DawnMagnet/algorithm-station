原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc279](http://blog.leanote
.com/post/dawnmagnet/lc279)
# 题目
<p>给定正整数&nbsp;<em>n</em>，找到若干个完全平方数（比如&nbsp;<code>1, 4, 9, 
16, ...</code>）使得它们的和等于<em> 
n</em>。你需要让组成和的完全平方数的个数最少。</p>
<p>给你一个整数 <code>n</code> ，返回和为 <code>n</code> 的完全平方数的 
<strong>最少数量</strong> 。</p>
<p><strong>完全平方数</strong> 
是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例
如，<code>1</code>、<code>4</code>、<code>9</code> 和 <code>16</code> 
都是完全平方数，而 <code>3</code> 和 <code>11</code> 不是。</p>
<p>&nbsp;</p>
<p><strong>示例&nbsp;1：</strong></p>
<pre><strong>输入：</strong>n = <code>12</code>
<strong>输出：</strong>3 
<strong>解释：</strong><code>12 = 4 + 4 + 4</code></pre>
<p><strong>示例 2：</strong></p>
<pre><strong>输入：</strong>n = <code>13</code>
<strong>输出：</strong>2
<strong>解释：</strong><code>13 = 4 + 9</code></pre>
&nbsp;
<p><strong>提示：</strong></p>
<ul>
    <li><code>1 &lt;= n &lt;= 10<sup>4</sup></code></li>
</ul>
# 思路分析
本道题如果从dp的角度来看，是一个非常常规的背包问题，唯一要注意的点就是每一个
完全平方数都可以无限次使用，所以是一个完全背包问题。
|递推公式|dp[i] = min(dp[i], dp[i - 完全平方数] + 1)
--|
|边界条件|dp[0] = 1,其余等于正无穷
|dp[i]的意义|i最少可以由dp[i]个完全平方数组成
这样一列就非常简单了。
当然本题还有一个数学做法。用通俗的说法来说就是，每个自然数都已经被证明了可以
由至多四个完全平方数相加得到，而且还是有特解的。具体的证明可以看[四平方和定理 
百度百科](https://baike.baidu.com/item/%E5%9B%9B%E5%B9%B3%E6%96%B9%E5%92%8C%E
5%AE%9A%E7%90%86/4507832?fr=aladdin)。