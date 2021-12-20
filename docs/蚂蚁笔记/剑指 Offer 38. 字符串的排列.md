原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc剑指 Offer 
38](http://blog.leanote.com/post/dawnmagnet/lc-offer38)
# 题目
<p>输入一个字符串，打印出该字符串中字符的所有排列。</p>
<p>&nbsp;</p>
<p>你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。</p>
<p>&nbsp;</p>
<p><strong>示例:</strong></p>
<pre><strong>输入：</strong>s = "abc"
<strong>输出：[</strong>"abc","acb","bac","bca","cab","cba"<strong>]</strong>
</pre>
<p>&nbsp;</p>
<p><strong>限制：</strong></p>
<p><code>1 &lt;= s 的长度 &lt;= 8</code></p>
# 思路分析
这是一道求排列的题目，排列就是permutation，而C++的`<algorithm>`有一个函数，叫做
next_permutation()，传入两个迭代器，返回这两个迭代器包含的范围内的下一个排列，
还有返回值，表示是否循环到最小的那个排列，循环到末尾了就返回false，并且返回最小
的那个排列。
我们利用这个函数就可以很轻松的解决该问题。</algorithm>

# C++代码

```cpp
class Solution {
public:
    vector<string> permutation(string s) {
        while (next_permutation(s.begin(), s.end()));
        vector<string> res = {s};
        while (next_permutation(s.begin(), s.end()))
            res.push_back(s);
        return res;
    }
};
```
