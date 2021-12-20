原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc1846](http://blog.leanot
e.com/post/dawnmagnet/lc1846)
# 题目
<p>给你一个正整数数组&nbsp;<code>arr</code>&nbsp;。请你对 
<code>arr</code>&nbsp;执行一些操作（也可以不进行任何操作），使得数组满足以下
条件：</p>
<ul>
    <li><code>arr</code>&nbsp;中 
    <strong>第一个</strong>&nbsp;元素必须为&nbsp;<code>1</code>&nbsp;。</li>
    <li>任意相邻两个元素的差的绝对值 
    <strong>小于等于</strong>&nbsp;<code>1</code>&nbsp;，也就是说，对于任意的 
    <code>1 &lt;= i &lt; arr.length</code>&nbsp;（<strong>数组下标从 0 
    开始</strong>），都满足&nbsp;<code>abs(arr[i] - arr[i - 1]) &lt;= 
    1</code>&nbsp;。<code>abs(x)</code>&nbsp;为&nbsp;<code>x</code>&nbsp;的绝
    对值。</li>
</ul>
<p>你可以执行以下 2 种操作任意次：</p>
<ul>
    <li><strong>减小</strong> 
    <code>arr</code>&nbsp;中任意元素的值，使其变为一个 
    <strong>更小的正整数</strong>&nbsp;。</li>
    <li><strong>重新排列</strong>&nbsp;<code>arr</code>&nbsp;中的元素，你可以
    以任意顺序重新排列。</li>
</ul>
<p>请你返回执行以上操作后，在满足前文所述的条件下，<code>arr</code>&nbsp;中可
能的 <strong>最大值</strong>&nbsp;。</p>
<p>&nbsp;</p>
<p><strong>示例 1：</strong></p>
<pre><b>输入：</b>arr = [2,2,1,2,1]
<b>输出：</b>2
<b>解释：</b>
我们可以重新排列 arr 得到 <code>[1,2,2,2,1] ，该数组满足所有条件。</code>
arr 中最大元素为 2 。
</pre>
<p><strong>示例 2：</strong></p>
<pre><b>输入：</b>arr = [100,1,1000]
<b>输出：</b>3
<b>解释：</b>
一个可行的方案如下：
1. 重新排列 <code>arr</code> 得到 <code>[1,100,1000] 。</code>
2. 将第二个元素减小为 2 。
3. 将第三个元素减小为 3 。</pre>
