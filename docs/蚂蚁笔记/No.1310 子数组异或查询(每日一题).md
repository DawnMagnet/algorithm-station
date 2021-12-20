原贴地址：[http://blog.leanote.com/post/dawnmagnet/0bb52ca14c01](http://blog.
leanote.com/post/dawnmagnet/0bb52ca14c01)
# 题目
有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = 
[Li, Ri]。
对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor 
... xor arr[Ri]）作为本次查询的结果。
并返回一个包含给定查询 queries 所有结果的数组。
 
示例 1：
    输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
    输出：[2,7,14,8] 
    解释：
    数组中元素的二进制表示形式是：
    1 = 0001 
    3 = 0011 
    4 = 0100 
    8 = 1000 
    查询的 XOR 值为：
    [0,1] = 1 xor 3 = 2 
    [1,2] = 3 xor 4 = 7 
    [0,3] = 1 xor 3 xor 4 xor 8 = 14 
    [3,3] = 8
示例 2：
    输入：arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
    输出：[8,0,4,4]
提示：
    1 <= arr.length <= 3 * 10^4
    1 <= arr[i] <= 10^9
    1 <= queries.length <= 3 * 10^4
    queries[i].length == 2
    0 <= queries[i][0] <= queries[i][1] < arr.length
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/xor-queries-of-a-subarray
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
# 思路分析
又是一道异或的题目。
我们再强调一下，异或的最重要的性质就是**两个相同的数字异或是0**
接下来看一下我们的这个数据量，不太适合暴力，如果按照题目的说法进行遍历，复杂
度就是$O(arr.length*queries.length)$，达到了$9*10^8$复杂度，这种已经很大了，
很危险，很有可能过不了。这也是对于所有题目的一个小提示：如果复杂度达到$10^9$
，就过不了了。