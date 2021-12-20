大家好！今天是周末，难得来了道简单题，非常简单哦！
原贴地址：http://leanote.com/blog/post/60711b85ab64413bd300102f
## 题目
给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 
。  
丑数 就是只包含质因数 2、3 和/或 5 的正整数。
## 思路分析
我们首先应该对这个数字进行分析，如果它的质因数里有不属于2，3，5的数字，我们首先
应该将该数字尽可能地除以2，3，5直至不能整除，这样剩下的数字如过大于1，就说明这
个数字有除了2，3，5以外的余数。
这也太轻松了吧！简直就是一个题目翻译题，没有什么需要深入思考的思路。
需要注意的只有一个点：0不是丑数，因为0没有因数。
rust代码
```rust
impl Solution {
    pub fn is_ugly(mut n: i32) -> bool {
        if n == 0 {
            return false;
        }
        let factors = [2, 3, 5];
        for factor in factors.iter() {
            while n % factor == 0 {
                n /= factor;
            }
        }
        n == 1
    }
}
```
cpp代码
```cpp
class Solution {
public:
    bool isUgly(int n) {
        if (n == 0) return false;
        const array<int, 3> factors = {2, 3, 5};
        for (auto & factor : factors)
            while (n % factor == 0) n /= factor;
        return n == 1;
    }
};
```