原帖地址：[http://blog.leanote.com/post/dawnmagnet/fda5818930ff](http://blog.
leanote.com/post/dawnmagnet/fda5818930ff)
# 题目
给你一个整数数组 perm ，它是前 n 个正整数的排列，且 n 是个 奇数 。
它被加密成另一个长度为 n - 1 的整数数组 encoded ，满足 encoded[i] = perm[i] 
XOR perm[i + 1] 。比方说，如果 perm = [1,3,2] ，那么 encoded = [2,1] 。
给你 encoded 数组，请你返回原始数组 perm 。题目保证答案存在且唯一。
 
示例 1：
    输入：encoded = [3,1]
    输出：[1,2,3]
    解释：如果 perm = [1,2,3] ，那么 encoded = [1 XOR 2,2 XOR 3] = [3,1]
示例 2：
    输入：encoded = [6,5,4,6]
    输出：[2,4,1,5,3]
 
提示：
    3 <= n < 105
    n 是奇数。
    encoded.length == n - 1
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decode-xored-permutation
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
# 思路分析
这是一道数学题，需要思考。
之前说过异或的最重要的性质就是两个相同的数字异或之后是0.所以我们一定要牢牢抓
住这一点。
在encode数组中，每个项都是perm中的两项的异或，也就是说，我们只要知道了perm[0]
，也就能通过encode[1]知道perm[1]，，也就能通过encode[2]知道perm[2]，也就。。
。。。。。知道了所有。所以我们先写一段简单的，也就是通过perm[0]和encode求出最
终的结果。
```cpp
vector<int> res = {cur};
for (int i = 0; i < 2 * n; ++i) res.push_back(res[i] ^ encoded[i]);
return res;
```
我们再将工作的中心转移到求这个perm[0]上来，我们手里的工具只有encode数组，也就
是说这个perm[0]必定可以通过encode求出，要不然题目就有错了。
我们先将encode中的所有项列出来看看规律。
假设perm中的数字有7个