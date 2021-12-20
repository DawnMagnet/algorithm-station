原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc274](http://blog.leanote
.com/post/dawnmagnet/lc274)
# 题目
<p>给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，
计算出研究者的 <em>h&nbsp;</em>指数。</p>
<p><a href="https://baike.baidu.com/item/h-index/3991452?fr=aladdin">h 
指数的定义</a>：h 代表“高引用次数”（high citations），一名科研人员的 h 
指数是指他（她）的 （N 篇论文中）<strong>总共</strong>有 h 
篇论文分别被引用了<strong>至少</strong> h 次。且其余的&nbsp;<em>N - 
h&nbsp;</em>篇论文每篇被引用次数&nbsp;<strong>不超过 </strong><em>h 
</em>次。</p>
<p>例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 
次的论文总共有 20 篇。</p>
<p>&nbsp;</p>
<p><strong>示例：</strong></p>
<pre><strong>输入：</strong><code>citations = [3,0,6,1,5]</code>
<strong>输出：</strong>3 
<strong>解释：</strong>给定数组表示研究者总共有 <code>5</code> 
篇论文，每篇论文相应的被引用了 <code>3, 0, 6, 1, 5</code> 次。
&nbsp;    由于研究者有 <code>3 </code>篇论文每篇 <strong>至少 
</strong>被引用了 <code>3</code> 次，其余两篇论文每篇被引用 
<strong>不多于</strong> <code>3</code> 次，所以她的 <em>h </em>指数是 
<code>3</code>。</pre>
<p>&nbsp;</p>
<p><strong>提示：</strong>如果 <em>h </em>有多种可能的值，<em>h</em> 
指数是其中最大的那个。</p>
# 思路分析
这个题看着可以二分，其实没法二分。一定要好好读题目。
我们举个例子
```json
[5,5,5,5,5,5,6] 
```
这个例子的合法h值只有5,大于和小于5都是不合法的。这就决定了不能使用二分。
所以我们只能一个一个去判断。
既然是一个一个判断，不妨我们先对这个数组排个序。因为如果我们想要获得一个h指数
，我们得获得这个数组最大的前h个数字。这就要求我们排个序。
排完序之后，最好是倒序，因为我们这样选取前h个数比较人性化易懂。
取完前k个数字，判断一下，nums[k]是否大于等于k，nums[k+1]（如果有）是否小于等
于k，我们这个k才能作为一个合格的h的候选。
选出来的最大的k，再返回即可。