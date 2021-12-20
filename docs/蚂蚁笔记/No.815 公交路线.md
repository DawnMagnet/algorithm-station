原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc815](http://blog.leanote
.com/post/dawnmagnet/lc815)
# 题目
<p>给你一个数组 <code>routes</code> ，表示一系列公交线路，其中每个 
<code>routes[i]</code> 表示一条公交线路，第 <code>i</code> 
辆公交车将会在上面循环行驶。</p>
<ul>
    <li>例如，路线 <code>routes[0] = [1, 5, 7]</code> 表示第 <code>0</code> 
    辆公交车会一直按序列 <code>1 -&gt; 5 -&gt; 7 -&gt; 1 -&gt; 5 -&gt; 7 
    -&gt; 1 -&gt; ...</code> 这样的车站路线行驶。</li>
</ul>
<p>现在从 <code>source</code> 车站出发（初始时不在公交车上），要前往 
<code>target</code> 车站。 期间仅可乘坐公交车。</p>
<p>求出 <strong>最少乘坐的公交车数量</strong> 。如果不可能到达终点车站，返回 
<code>-1</code> 。</p>
<p>&nbsp;</p>
<p><strong>示例 1：</strong></p>
<pre><strong>输入：</strong>routes = [[1,2,7],[3,6,7]], source = 1, target = 
6
<strong>输出：</strong>2
<strong>解释：</strong>最优策略是先乘坐第一辆公交车到达车站 7 , 
然后换乘第二辆公交车到车站 6 。 
</pre>
<p><strong>示例 2：</strong></p>
<pre><strong>输入：</strong>routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], 
source = 15, target = 12
<strong>输出：</strong>-1
</pre>
<p>&nbsp;</p>
<p><strong>提示：</strong></p>
<ul>
    <li><code>1 &lt;= routes.length &lt;= 500</code>.</li>
    <li><code>1 &lt;= routes[i].length &lt;= 10<sup>5</sup></code></li>
    <li><code>routes[i]</code> 中的所有值 <strong>互不相同</strong></li>
    <li><code>sum(routes[i].length) &lt;= 10<sup>5</sup></code></li>
    <li><code>0 &lt;= routes[i][j] &lt; 10<sup>6</sup></code></li>
    <li><code>0 &lt;= source, target &lt; 10<sup>6</sup></code></li>
</ul>
# 思路分析