原帖地址：http://blog.leanote.com/post/dawnmagnet/416189af1a2c
##题目
实现 strStr() 函数。
给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 
字符串出现的第一个位置（下标从 0 开始）。如果不存在，则返回  -1 。
 
说明：
当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
对于本题而言，当 needle 是空字符串时我们应当返回 0 。这与 C 
语言的 strstr() 以及 Java 的 indexOf() 定义相符。
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/implement-strstr
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
## 思路分析
这个其实通过各个函数内置的字符串搜索库就可以做出来，所以这是个简单题，但其实
如果我们深究内部的原理，那么这就变成一道困难题了。其中大部分语言实现字符串搜
索的算法是KMP算法，我也不过多解释，有想法的小伙伴可以自行去网络查询KMP算法，
我就来说说为什么KMP算法能够被发明，说一点我的想法。
传统的寻找字符串子串的匹配算法，就是非常朴素的思想，假设M串长m，N串长n，我们
在匹配的时候，会在m串中截出来一个n长度的子串，来与n串一一比较。这样的时间复杂
度是O(m*n)级别的，因为我们在找到一个错误匹配的时候，我们没法确定这个错误匹配
的中的一部分是否可以作为下一次匹配的开头。
举个例子：
M串：abababc
N串：ababc
假设我们在M串中拿出前五个字符和N串进行匹配，但是在最后一个字符的时候出错了。
这个时候按照传统的想法，我们会拿出来"babab"串和N进行比较，但大家觉得有这个必
要吗？很明显，明眼人看的出来，因为已经出现过"abab"了，就算错误匹配了，后两个"
ab"也有可能作为一次成功匹配的开头，这也是我们KMP的想法，就是错误不要紧，我们
可以在一个新的位置开始匹配而不是每次错误都将之前的努力白费。
```cpp
class Solution {
public:
    int strStr(string haystack, string needle) {
        if(needle.empty())
            return 0;
        
        int slen=haystack.size();
        int tlen=needle.size();
        int i=0,j=0;//i指向源串首位 j指向子串首位
        int k;
        int m=tlen;//第一次匹配时 源串中参与匹配的元素的下一位
        
        for(;i<slen;)
        {