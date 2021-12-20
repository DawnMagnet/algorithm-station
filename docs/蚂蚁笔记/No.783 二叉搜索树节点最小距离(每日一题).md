大家好!今天给大家带来的是每日一题,是一道关于树的题目呢!
原帖地址:http://leanote.com/blog/post/6075795bab644142160032fa
## 题目
给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
## 思路分析
说到二叉树,特别是二叉搜索树,大家第一个想到的是什么呢?  
当然是二分查找啦!二叉搜索数和二分查找,简直是天造地设的一对.因为他们是几乎一模
一样的操作.大家想想二分查找的操作,如果target < 
[mid],我们就去左边找,因为左边的所有数字都小于[mid].而对应到二叉搜索树中,几乎
是相同的操作,一个数左边的所有数都比它小,右边的所有数都比它大,所以对我们而言,*
*二叉搜索树和排序过后的数组其实是同一个东西**,只是存储方式略有不同.
既然是**排过序的数组**,又是要求最小差值,那非常简单,我们直接从左到右两两比较,
直接就出结果了.唯一的问题就是如何在二叉搜索树中模拟数组的行为呢?结果当然是**
中序遍历**.只有中序遍历可以将一个二叉搜索数还原成排过序的数组.我们当然可以新
建一个数组,往里面塞数字,最后再比较.当然更好的办法是不占用额外空间,直接在树上
遍历,因为其实遍历数组和遍历树没有什么本质上的区别.
```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), 
 right(right) {}
 * };
 */
class Solution {
public:
    void dfs(TreeNode* root, int& pre, int& ans) {
        if (root == nullptr) {
            return;
        }
        dfs(root->left, pre, ans);
        if (pre == -1) {
            pre = root->val;
        } else {
            ans = min(ans, root->val - pre);
            pre = root->val;
        }
        dfs(root->right, pre, ans);
    }
    int minDiffInBST(TreeNode* root) {
        int ans = INT_MAX, pre = -1;
        dfs(root, pre, ans);
        return ans;
    }
};
```