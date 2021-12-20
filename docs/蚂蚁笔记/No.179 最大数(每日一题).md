大家好!今天是周一,给大家带来的是每日一题-最大数
原贴地址：http://leanote.com/blog/post/60746b4cab64417b49003062
## 题目
给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大
的整数。
## 思路分析
题目描述非常简单,但是思路却不好想.可以对这些数进行一个简单的排序吗?显而易见的
是不行的.我们假设两个数,9和30,930明显大于309吧,从这里我们分析得出一个重要结论
:就是每个数的位置似乎跟他们的位数有关系.比如9占一位数,30占两位数,把30拼在9前
面就需要让30乘10,把9拼在30前面就需要乘10的2次方.这是一个非常关键的思路.
我们假设最后存在一个答案,这个答案一定会有一个确切的顺序,我们假设是a0, a1, a2, 
a......., an-1,那么我们进行一个思考,我们对其中的任意两个元素进行交换,得到的结
果会更大还是更小呢?因为这是最大的排列,所以任意交换两个元素只有可能让结果变小,
也就是说,交换两个相邻的元素,得到的结果一定比交换之前小(或者相等),那也就是说,
在我们排序的时候,使得每两个相邻的元素在交换后都只可能变小,那么我们最终得到的
就可能是答案.
我们还知道,答案只可能有一个,而我们对所有的元素进行上述排序之后的结果也只有一
个,所以我们只要保证每两个相邻元素交换之后只有可能小于等于之前的组合,就可以得
到我们最终的答案.
```rust
impl Solution {
    pub fn largest_number(mut nums: Vec<i32>) -> String {
        nums.sort_by(|a, b| format!("{}{}", b, a).cmp(&format!("{}{}", a, 
        b)));
        if nums[0] == 0 {
            return 0.to_string();
        }
        nums.into_iter().map(|i| i.to_string()).collect::<String>()
    }
}
```
```cpp
class Solution {
public:
    string largestNumber(vector<int> &nums) {
        sort(nums.begin(), nums.end(), [](const int &x, const int &y) {
            long sx = 10, sy = 10;
            while (sx <= x) {
                sx *= 10;
            }
            while (sy <= y) {
                sy *= 10;
            }
            return sy * x + y > sx * y + x;
        });
        if (nums[0] == 0) {
            return "0";
        }
        string ret;
        for (int &x : nums) {
            ret += to_string(x);