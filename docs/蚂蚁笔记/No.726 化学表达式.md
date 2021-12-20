原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc726](http://blog.leanote
.com/post/dawnmagnet/lc726)
# 题目
<html>
<p>给定一个化学式<code>formula</code>（作为字符串），返回每种原子的数量。</p>
<p>原子总是以一个大写字母开始，接着跟随0个或任意个小写字母，表示原子的名字。<
/p>
<p>如果数量大于 1，原子后会跟着数字表示原子的数量。如果数量等于 1 
则不会跟数字。例如，H2O 和 H2O2 是可行的，但 H1O2 这个表达是不可行的。</p>
<p>两个化学式连在一起是新的化学式。例如&nbsp;H2O2He3Mg4 也是化学式。</p>
<p>一个括号中的化学式和数字（可选择性添加）也是化学式。例如 (H2O2) 和 (H2O2)3 
是化学式。</p>
<p>给定一个化学式，输出所有原子的数量。格式为：第一个（按字典序）原子的名子，
跟着它的数量（如果数量大于 
1），然后是第二个原子的名字（按字典序），跟着它的数量（如果数量大于 
1），以此类推。</p>
<p><strong>示例 1:</strong></p>
<pre><strong>输入:</strong> 
formula = "H2O"
<strong>输出:</strong> "H2O"
<strong>解释:</strong> 
原子的数量是 ['H': 2, 'O': 1]。
</pre>
<p><strong>示例 2:</strong></p>
<pre><strong>输入:</strong> 
formula = "Mg(OH)2"
<strong>输出:</strong> "H2MgO2"
<strong>解释:</strong> 
原子的数量是 ['H': 2, 'Mg': 1, 'O': 2]。
</pre>
<p><strong>示例 3:</strong></p>
<pre><strong>输入:</strong> 
formula = "K4(ON(SO3)2)2"
<strong>输出:</strong> "K4N2O14S4"
<strong>解释:</strong> 
原子的数量是 ['K': 4, 'N': 2, 'O': 14, 'S': 4]。
</pre>
<p><strong>注意:</strong></p>
<ul></ul>
</html>
