原贴地址：[http://blog.leanote.com/post/dawnmagnet/lc461](http://blog.leanote
.com/post/dawnmagnet/lc461)
# 题目
<html>
<div class="notranslate"><p>两个整数之间的<a 
href="https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E8%B7%9D%E7%A6%BB">汉明
距离</a>指的是这两个数字对应二进制位不同的位置的数目。</p>
<p>给出两个整数 <code>x</code> 和 
<code>y</code>，计算它们之间的汉明距离。</p>
<p><strong>注意：</strong><br/>
0 ≤ <code>x</code>, <code>y</code> &lt; 2<sup>31</sup>.</p>
<p><strong>示例:</strong></p>
<pre><strong>输入:</strong> x = 1, y = 4
<strong>输出:</strong> 2
<strong>解释:</strong>
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
上面的箭头指出了对应二进制位不同的位置。
</pre>
</div>
</html>
# 思路分析
通过观察可以得出，给入两个数字，我们输出的答案就是这两个数字在二进制位上的不
同点，也就是说，只有在对应二进制位不一样的时候我们就统计这个位，既然是这样我
们可以异或一下赋值给一个新变量，再统计这个新变量里有多少个1即可。

### C++代码

```cpp
class Solution {
public:
    int hammingDistance(int x, int y) {
        return __builtin_popcount(x ^ y);
    }
};
```

### Rust代码

```
impl Solution {
    pub fn hamming_distance(x: i32, y: i32) -> i32 {
        (x ^ y).count_ones() as i32
    }
}
```
