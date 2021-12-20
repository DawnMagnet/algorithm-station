原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc1711](http://blog.leanot
e.com/post/dawnmagnet/lc1711)
# 题目
<p><strong>大餐</strong> 是指 <strong>恰好包含两道不同餐品</strong> 
的一餐，其美味程度之和等于 2 的幂。</p>
<p>你可以搭配 <strong>任意</strong> 两道餐品做一顿大餐。</p>
<p>给你一个整数数组 <code>deliciousness</code> ，其中 
<code>deliciousness[i]</code> 是第 <code>i<sup>      </sup>    </code>     
道餐品的美味程度，返回你可以用数组中的餐品做出的不同 <strong>大餐</strong> 
的数量。结果需要对 <code>10<sup>9</sup> + 7</code> 取余。</p>
<p>注意，只要餐品下标不同，就可以认为是不同的餐品，即便它们的美味程度相同。</
p>
<p>&nbsp;</p>
<p><strong>示例 1：</strong></p>
<pre><strong>输入：</strong>deliciousness = [1,3,5,7,9]
<strong>输出：</strong>4
<strong>解释：</strong>大餐的美味程度组合为 (1,3) 、(1,7) 、(3,5) 和 (7,9) 。
它们各自的美味程度之和分别为 4 、8 、8 和 16 ，都是 2 的幂。
</pre>
<p><strong>示例 2：</strong></p>
<pre><strong>输入：</strong>deliciousness = [1,1,1,3,3,3,7]
<strong>输出：</strong>15
<strong>解释：</strong>大餐的美味程度组合为 3 种 (1,1) ，9 种 (1,3) ，和 3 种 
(1,7) 。</pre>
<p>&nbsp;</p>
<p><strong>提示：</strong></p>
<ul>
    <li><code>1 &lt;= deliciousness.length &lt;= 10<sup>5</sup></code></li>
    <li><code>0 &lt;= deliciousness[i] &lt;= 2<sup>20</sup></code></li>
</ul>
# 思路分析
首先我们还是解读一下题目。
这个题目想要我们找出来的是在这个数组中，两个数字的和是2的幂次，但我们千万别被
2的幂次给打倒了，这就是个纸老虎，2的幂次在int范围内一共也就32个，几乎是可以忽
略的复杂度。而且题目还给我们限定了数据范围，每一个数字的最大也就2^20，也就是
说两个数字的和最大也就2^21，所以我们只需要求这个21个数字即可。
所以我们可以将这个题目换个视角看一下，也就是说，在数组中找出两个数字，它们的
和等于1或者2或者4或者。。。。。。