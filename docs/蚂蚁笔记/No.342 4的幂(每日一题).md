原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc342](http://blog.leanote
.com/post/dawnmagnet/lc342)
# 题目
<div class="notranslate"><p>给定一个整数，写一个函数来判断它是否是 4 
的幂次方。如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 
。</p>
<p>整数 <code>n</code> 是 4 的幂次方需满足：存在整数 <code>x</code> 使得 
<code>n == 4<sup>x</sup></code></p>
<p>&nbsp;</p>
<p><strong>示例 1：</strong></p>
<pre><strong>输入：</strong>n = 16
<strong>输出：</strong>true
</pre>
<p><strong>示例 2：</strong></p>
<pre><strong>输入：</strong>n = 5
<strong>输出：</strong>false
</pre>
<p><strong>示例 3：</strong></p>
<pre><strong>输入：</strong>n = 1
<strong>输出：</strong>true
</pre>
<p>&nbsp;</p>
<p><strong>提示：</strong></p>
<ul>
    <li><code>-2<sup>31</sup> &lt;= n &lt;= 2<sup>31</sup> - 1</code></li>
</ul>
<p>&nbsp;</p>
<p><strong>进阶：</strong></p>
<ul>
    <li>你能不使用循环或者递归来完成本题吗？</li>
</ul>
</div>
# 解答
这个题目非常简单。
我一开始想到的是用$\log$做，因为没有$log_4(x)$的函数，我就用了一下换底公式