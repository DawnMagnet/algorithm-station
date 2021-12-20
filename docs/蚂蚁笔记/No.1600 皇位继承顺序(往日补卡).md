原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc1600](http://blog.leanot
e.com/post/dawnmagnet/lc1600)
# 题目
<p>一个王国里住着国王、他的孩子们、他的孙子们等等。每一个时间点，这个家庭里有
人出生也有人死亡。</p>
<p>这个王国有一个明确规定的皇位继承顺序，第一继承人总是国王自己。我们定义递归
函数&nbsp;<code>Successor(x, 
curOrder)</code>&nbsp;，给定一个人&nbsp;<code>x</code>&nbsp;和当前的继承顺序
，该函数返回 <code>x</code>&nbsp;的下一继承人。</p>
<pre>Successor(x, curOrder):
    如果 x 没有孩子或者所有 x 的孩子都在 curOrder 中：
        如果 x 是国王，那么返回 null
        否则，返回 Successor(x 的父亲, curOrder)
    否则，返回 x 不在 curOrder 中最年长的孩子
</pre>
<p>比方说，假设王国由国王，他的孩子&nbsp;Alice 和 Bob （Alice 比 
Bob&nbsp;年长）和 Alice 的孩子&nbsp;Jack 组成。</p>
<ol>
    <li>一开始，&nbsp;<code>curOrder</code>&nbsp;为&nbsp;<code>["king"]</code
    >.</li>
    <li>调用&nbsp;<code>Successor(king, curOrder)</code>&nbsp;，返回 Alice 
    ，所以我们将 Alice 放入 
    <code>curOrder</code>&nbsp;中，得到&nbsp;<code>["king", 
    "Alice"]</code>&nbsp;。</li>
    <li>调用&nbsp;<code>Successor(Alice, curOrder)</code>&nbsp;，返回 Jack 
    ，所以我们将 Jack 
    放入&nbsp;<code>curOrder</code>&nbsp;中，得到&nbsp;<code>["king", 
    "Alice", "Jack"]</code>&nbsp;。</li>
    <li>调用&nbsp;<code>Successor(Jack, curOrder)</code>&nbsp;，返回 Bob 
    ，所以我们将 Bob 
    放入&nbsp;<code>curOrder</code>&nbsp;中，得到&nbsp;<code>["king", 
    "Alice", "Jack", "Bob"]</code>&nbsp;。</li>
    <li>调用&nbsp;<code>Successor(Bob, 
    curOrder)</code>&nbsp;，返回&nbsp;<code>null</code>&nbsp;。最终得到继承顺
    序为&nbsp;<code>["king", "Alice", "Jack", "Bob"]</code>&nbsp;。</li>
</ol>
<p>通过以上的函数，我们总是能得到一个唯一的继承顺序。</p>
<p>请你实现&nbsp;<code>ThroneInheritance</code>&nbsp;类：</p>
<ul>
    <li><code>ThroneInheritance(string kingName)</code> 
    初始化一个&nbsp;<code>ThroneInheritance</code>&nbsp;类的对象。国王的名字
    作为构造函数的参数传入。</li>
    <li><code>void birth(string parentName, string 
    childName)</code>&nbsp;表示&nbsp;<code>parentName</code>&nbsp;新拥有了一
    个名为&nbsp;<code>childName</code>&nbsp;的孩子。</li></ul>
