"use strict";(self.webpackChunkalgorithm_station=self.webpackChunkalgorithm_station||[]).push([[7277],{3905:function(l,n,t){t.d(n,{Zo:function(){return k},kt:function(){return s}});var e=t(7294);function u(l,n,t){return n in l?Object.defineProperty(l,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[n]=t,l}function i(l,n){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(l);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(l,n).enumerable}))),t.push.apply(t,e)}return t}function o(l){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){u(l,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(l,n,Object.getOwnPropertyDescriptor(t,n))}))}return l}function r(l,n){if(null==l)return{};var t,e,u=function(l,n){if(null==l)return{};var t,e,u={},i=Object.keys(l);for(e=0;e<i.length;e++)t=i[e],n.indexOf(t)>=0||(u[t]=l[t]);return u}(l,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);for(e=0;e<i.length;e++)t=i[e],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(l,t)&&(u[t]=l[t])}return u}var a=e.createContext({}),c=function(l){var n=e.useContext(a),t=n;return l&&(t="function"==typeof l?l(n):o(o({},n),l)),t},k=function(l){var n=c(l.components);return e.createElement(a.Provider,{value:n},l.children)},p={inlineCode:"code",wrapper:function(l){var n=l.children;return e.createElement(e.Fragment,{},n)}},d=e.forwardRef((function(l,n){var t=l.components,u=l.mdxType,i=l.originalType,a=l.parentName,k=r(l,["components","mdxType","originalType","parentName"]),d=c(t),s=u,m=d["".concat(a,".").concat(s)]||d[s]||p[s]||i;return t?e.createElement(m,o(o({ref:n},k),{},{components:t})):e.createElement(m,o({ref:n},k))}));function s(l,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof l||u){var i=t.length,o=new Array(i);o[0]=d;var r={};for(var a in n)hasOwnProperty.call(n,a)&&(r[a]=n[a]);r.originalType=l,r.mdxType="string"==typeof l?l:u,o[1]=r;for(var c=2;c<i;c++)o[c]=t[c];return e.createElement.apply(null,o)}return e.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5461:function(l,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return k},default:function(){return d}});var e=t(7462),u=t(3366),i=(t(7294),t(3905)),o=["components"],r={},a="2021 \u79cb\u5b63\u529b\u6263\u676f - \u6218\u961f\u8d5b\u590d\u76d8",c={unversionedId:"special/leetcode-cup-2021-autumn-group",id:"special/leetcode-cup-2021-autumn-group",title:"2021 \u79cb\u5b63\u529b\u6263\u676f - \u6218\u961f\u8d5b\u590d\u76d8",description:"\u5199\u5728\u524d\u9762",source:"@site/docs/special/leetcode-cup-2021-autumn-group.md",sourceDirName:"special",slug:"/special/leetcode-cup-2021-autumn-group",permalink:"/algorithm-station/docs/special/leetcode-cup-2021-autumn-group",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/special/leetcode-cup-2021-autumn-group.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SUMMAR",permalink:"/algorithm-station/docs/special/SUMMAR"},next:{title:"\u5173\u4e8e\u4ece\u8682\u8681\u7b14\u8bb0\u8fc1\u79fb\u800c\u6765\u7684\u8bf4\u660e",permalink:"/algorithm-station/docs/leanote"}},k=[{value:"\u5199\u5728\u524d\u9762",id:"\u5199\u5728\u524d\u9762",children:[],level:2},{value:"\u7b2c\u4e00\u9898 \u5f00\u5e55\u5f0f\u7130\u706b",id:"\u7b2c\u4e00\u9898-\u5f00\u5e55\u5f0f\u7130\u706b",children:[{value:"1.1 \u9898\u76ee",id:"11-\u9898\u76ee",children:[],level:3},{value:"1.2 \u601d\u8def\u5206\u6790",id:"12-\u601d\u8def\u5206\u6790",children:[],level:3},{value:"1.3 \u4ee3\u7801",id:"13-\u4ee3\u7801",children:[],level:3}],level:2},{value:"\u7b2c\u4e8c\u9898 \u81ea\u884c\u8f66\u70ab\u6280\u8d5b\u573a",id:"\u7b2c\u4e8c\u9898-\u81ea\u884c\u8f66\u70ab\u6280\u8d5b\u573a",children:[{value:"2.1 \u9898\u76ee",id:"21-\u9898\u76ee",children:[],level:3},{value:"2.2 \u601d\u8def\u5206\u6790",id:"22-\u601d\u8def\u5206\u6790",children:[],level:3},{value:"2.3 C++\u4ee3\u7801",id:"23-c\u4ee3\u7801",children:[],level:3}],level:2},{value:"\u7b2c\u4e09\u9898 \u5fd7\u613f\u8005\u8c03\u914d",id:"\u7b2c\u4e09\u9898-\u5fd7\u613f\u8005\u8c03\u914d",children:[{value:"3.1 \u9898\u76ee",id:"31-\u9898\u76ee",children:[],level:3},{value:"3.2 \u601d\u8def\u5206\u6790",id:"32-\u601d\u8def\u5206\u6790",children:[],level:3},{value:"3.3 C++\u4ee3\u7801",id:"33-c\u4ee3\u7801",children:[],level:3}],level:2},{value:"\u7b2c\u56db\u9898 \u5165\u573a\u5b89\u68c0",id:"\u7b2c\u56db\u9898-\u5165\u573a\u5b89\u68c0",children:[{value:"4.1 \u9898\u76ee",id:"41-\u9898\u76ee",children:[],level:3},{value:"4.2 \u601d\u8def\u5206\u6790",id:"42-\u601d\u8def\u5206\u6790",children:[],level:3},{value:"4.3 C++\u4ee3\u7801",id:"43-c\u4ee3\u7801",children:[],level:3}],level:2}],p={toc:k};function d(l){var n=l.components,r=(0,u.Z)(l,o);return(0,i.kt)("wrapper",(0,e.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2021-\u79cb\u5b63\u529b\u6263\u676f---\u6218\u961f\u8d5b\u590d\u76d8"},"2021 \u79cb\u5b63\u529b\u6263\u676f - \u6218\u961f\u8d5b\u590d\u76d8"),(0,i.kt)("h2",{id:"\u5199\u5728\u524d\u9762"},"\u5199\u5728\u524d\u9762"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3209).Z}),"\n",(0,i.kt)("img",{src:t(5469).Z}),"\n\u4eca\u5e74\u53d1\u6325\u8fd8\u7b97\u633a\u4e0d\u9519\u7684\u3002\u4ee5\u540e\u518d\u63a5\u518d\u52b1\uff01",(0,i.kt)("br",{parentName:"p"}),"\n","\u6211 30 \u5206\u949f\u5199\u5b8c\u4e86 2\u30014 \u4e24\u9053\u9898\uff0c\u961f\u53cb\u4e00\u5c0f\u65f6\u591a\u5199\u5b8c\u4e86 1\u30013 \u4e24\u9053\u9898\uff0c\u7136\u540e\u5c31\u662f\u5565\u90fd\u4e0d\u4f1a\u7684\u51e0\u4e2a\u5c0f\u65f6\u3002\u3002\u3002"),(0,i.kt)("p",null,"\u4e89\u53d6\u4ee5\u540e\u4e0d\u4f1a\u51fa\u73b0\u8fd9\u79cd\u60c5\u51b5\u3002"),(0,i.kt)("h2",{id:"\u7b2c\u4e00\u9898-\u5f00\u5e55\u5f0f\u7130\u706b"},(0,i.kt)("a",{parentName:"h2",href:"https://leetcode-cn.com/problems/sZ59z6/"},"\u7b2c\u4e00\u9898 \u5f00\u5e55\u5f0f\u7130\u706b")),(0,i.kt)("h3",{id:"11-\u9898\u76ee"},"1.1 \u9898\u76ee"),(0,i.kt)("div",null,(0,i.kt)("p",null,"\u300c\u529b\u6263\u6311\u6218\u8d5b\u300d\u5f00\u5e55\u5f0f\u5f00\u59cb\u4e86\uff0c\u7a7a\u4e2d\u7efd\u653e\u4e86\u4e00\u9897\u4e8c\u53c9\u6811\u5f62\u7684\u5de8\u578b\u7130\u706b\u3002",(0,i.kt)("br",null),"\u7ed9\u5b9a\u4e00\u68f5\u4e8c\u53c9\u6811 ",(0,i.kt)("code",null,"root")," \u4ee3\u8868\u7130\u706b\uff0c\u8282\u70b9\u503c\u8868\u793a\u5de8\u578b\u7130\u706b\u8fd9\u4e00\u4f4d\u7f6e\u7684\u989c\u8272\u79cd\u7c7b\u3002\u8bf7\u5e2e\u5c0f\u6263\u8ba1\u7b97\u5de8\u578b\u7130\u706b\u6709\u591a\u5c11\u79cd\u4e0d\u540c\u7684\u989c\u8272\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u8f93\u5165\uff1a",(0,i.kt)("code",null,"root = [1,3,2,1,null,2]")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a",(0,i.kt)("code",null,"3")),(0,i.kt)("p",null,"\u89e3\u91ca\uff1a\u7130\u706b\u4e2d\u6709 3 \u4e2a\u4e0d\u540c\u7684\u989c\u8272\uff0c\u503c\u5206\u522b\u4e3a 1\u30012\u30013")),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u8f93\u5165\uff1a",(0,i.kt)("code",null,"root = [3,3,3]")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a",(0,i.kt)("code",null,"1")),(0,i.kt)("p",null,"\u89e3\u91ca\uff1a\u7130\u706b\u4e2d\u4ec5\u51fa\u73b0 1 \u4e2a\u989c\u8272\uff0c\u503c\u4e3a 3")),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("code",null,"1 <= \u8282\u70b9\u4e2a\u6570 <= 1000")),(0,i.kt)("li",null,(0,i.kt)("code",null,"1 <= Node.val <= 1000")))),(0,i.kt)("h3",{id:"12-\u601d\u8def\u5206\u6790"},"1.2 \u601d\u8def\u5206\u6790"),(0,i.kt)("p",null,"\u6570\u7ec4 dp \u5b58\u4e00\u4e0b\u72b6\u6001\u5c31\u884c\u4e86\uff0c\u6ca1\u6709\u51fa\u73b0\u8fc7\u5c31\u52a0\u4e00\u6b21\u3002"),(0,i.kt)("h3",{id:"13-\u4ee3\u7801"},"1.3 \u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Definition for a binary tree node.\n * struct TreeNode {\n *     int val;\n *     TreeNode *left;\n *     TreeNode *right;\n *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n * };\n */\nclass Solution {\npublic:\n    bool dp[1005];\n    int count = 0;\n    void deal(TreeNode * root) {\n        if (!root) return ;\n        if (!dp[root->val]) {\n            count++;\n            dp[root->val] = true;\n        }\n        deal(root->left);\n        deal(root->right);\n    }\n    int numColor(TreeNode* root) {\n        deal(root);\n        return count;\n    }\n};\n")),(0,i.kt)("h2",{id:"\u7b2c\u4e8c\u9898-\u81ea\u884c\u8f66\u70ab\u6280\u8d5b\u573a"},(0,i.kt)("a",{parentName:"h2",href:"https://leetcode-cn.com/problems/kplEvH/"},"\u7b2c\u4e8c\u9898 \u81ea\u884c\u8f66\u70ab\u6280\u8d5b\u573a")),(0,i.kt)("h3",{id:"21-\u9898\u76ee"},"2.1 \u9898\u76ee"),(0,i.kt)("div",null,(0,i.kt)("p",null,"\u300c\u529b\u6263\u6311\u6218\u8d5b\u300d\u4e2d ",(0,i.kt)("code",null,"N*M")," \u5927\u5c0f\u7684\u81ea\u884c\u8f66\u70ab\u6280\u8d5b\u573a\u7684\u573a\u5730\u7531\u4e00\u7247\u8fde\u7ef5\u8d77\u4f0f\u7684\u4e0a\u4e0b\u5761\u7ec4\u6210\uff0c\u573a\u5730\u7684\u9ad8\u5ea6\u503c\u8bb0\u5f55\u4e8e\u4e8c\u7ef4\u6570\u7ec4 ",(0,i.kt)("code",null,"terrain")," \u4e2d\uff0c\u573a\u5730\u7684\u51cf\u901f\u503c\u8bb0\u5f55\u4e8e\u4e8c\u7ef4\u6570\u7ec4 ",(0,i.kt)("code",null,"obstacle")," \u4e2d\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"\u82e5\u9009\u624b\u9a91\u7740\u81ea\u884c\u8f66\u4ece\u9ad8\u5ea6\u4e3a ",(0,i.kt)("code",null,"h1")," \u4e14\u51cf\u901f\u503c\u4e3a ",(0,i.kt)("code",null,"o1")," \u7684\u4f4d\u7f6e\u5230\u9ad8\u5ea6\u4e3a ",(0,i.kt)("code",null,"h2")," \u4e14\u51cf\u901f\u503c\u4e3a ",(0,i.kt)("code",null,"o2")," \u7684\u76f8\u90bb\u4f4d\u7f6e\uff08\u4e0a\u4e0b\u5de6\u53f3\u56db\u4e2a\u65b9\u5411\uff09\uff0c\u901f\u5ea6\u53d8\u5316\u503c\u4e3a ",(0,i.kt)("code",null,"h1-h2-o2"),"\uff08\u8d1f\u503c\u51cf\u901f\uff0c\u6b63\u503c\u589e\u901f\uff09\u3002")),(0,i.kt)("p",null,"\u9009\u624b\u521d\u59cb\u4f4d\u4e8e\u5750\u6807 ",(0,i.kt)("code",null,"position")," \u5904\u4e14\u521d\u59cb\u901f\u5ea6\u4e3a 1\uff0c\u8bf7\u95ee\u9009\u624b\u53ef\u4ee5\u521a\u597d\u5230\u5176\u4ed6\u54ea\u4e9b\u4f4d\u7f6e\u65f6\u901f\u5ea6\u4f9d\u65e7\u4e3a 1\u3002\u8bf7\u4ee5\u4e8c\u7ef4\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u8fd9\u4e9b\u4f4d\u7f6e\u3002\u82e5\u6709\u591a\u4e2a\u4f4d\u7f6e\u5219\u6309\u884c\u5750\u6807\u5347\u5e8f\u6392\u5217\uff0c\u82e5\u6709\u591a\u4e2a\u4f4d\u7f6e\u884c\u5750\u6807\u76f8\u540c\u5219\u6309\u5217\u5750\u6807\u5347\u5e8f\u6392\u5217\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u6ce8\u610f\uff1a")," \u9a91\u884c\u8fc7\u7a0b\u4e2d\u901f\u5ea6\u4e0d\u80fd\u4e3a\u96f6\u6216\u8d1f\u503c"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u8f93\u5165\b\uff1a",(0,i.kt)("code",null,"position = [0,0], terrain = [[0,0],[0,0]], obstacle = [[0,0],[0,0]]")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a",(0,i.kt)("code",null,"[[0,1],[1,0],[1,1]]")),(0,i.kt)("p",null,"\u89e3\u91ca\uff1a",(0,i.kt)("br",null),"\u7531\u4e8e\u5f53\u524d\u573a\u5730\u5c5e\u4e8e\u5e73\u5730\uff0c\u6839\u636e\u4e0a\u9762\u7684\u89c4\u5219\uff0c\u9009\u624b\u4ece",(0,i.kt)("code",null,"[0,0]"),"\u7684\u4f4d\u7f6e\u51fa\u53d1\u90fd\u80fd\u521a\u597d\u5728\u5176\u4ed6\u5904\u7684\u4f4d\u7f6e\u901f\u5ea6\u4e3a 1\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u8f93\u5165\b\uff1a",(0,i.kt)("code",null,"position = [1,1], terrain = [[5,0],[0,6]], obstacle = [[0,6],[7,0]]")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a",(0,i.kt)("code",null,"[[0,1]]")),(0,i.kt)("p",null,"\u89e3\u91ca\uff1a",(0,i.kt)("br",null),"\u9009\u624b\u4ece ",(0,i.kt)("code",null,"[1,1]")," \u5904\u7684\u4f4d\u7f6e\u51fa\u53d1\uff0c\u5230 ",(0,i.kt)("code",null,"[0,1]")," \u5904\u7684\u4f4d\u7f6e\u65f6\u6070\u597d\u901f\u5ea6\u4e3a 1\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("code",null,"n == terrain.length == obstacle.length")),(0,i.kt)("li",null,(0,i.kt)("code",null,"m == terrain[i].length == obstacle[i].length")),(0,i.kt)("li",null,(0,i.kt)("code",null,"1 <= n <= 100")),(0,i.kt)("li",null,(0,i.kt)("code",null,"1 <= m <= 100")),(0,i.kt)("li",null,(0,i.kt)("code",null,"0 <= terrain[i][j], obstacle[i][j] <= 100")),(0,i.kt)("li",null,(0,i.kt)("code",null,"position.length == 2")),(0,i.kt)("li",null,(0,i.kt)("code",null,"0 <= position[0] < n")),(0,i.kt)("li",null,(0,i.kt)("code",null,"0 <= position[1] < m")))),(0,i.kt)("h3",{id:"22-\u601d\u8def\u5206\u6790"},"2.2 \u601d\u8def\u5206\u6790"),(0,i.kt)("p",null,"\u8fd9\u9053\u9898\u662f\u4e00\u4e2a\u6bd4\u8f83\u57fa\u7840\u7684 dfs \u601d\u8def\u3002\n\u53ef\u80fd\u4f1a\u8981\u4f7f\u7528\u8bb0\u5fc6\u5316\u7684\u6280\u672f\u53bb\u91cd\u3002\n\u4ed4\u7ec6\u8bfb\u9898\u540e\u53d1\u73b0\uff0c\u81ea\u884c\u8f66\u5230\u8fbe\u4e00\u4e2a\u5730\u65b9\uff0c\u5e76\u975e\u4e00\u5b9a\u4f1a\u6709\u76f8\u540c\u7684\u901f\u5ea6\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e0d\u540c\u7684\u8def\u5f84\u5230\u8fbe\u4e00\u4e2a\u5730\u65b9\uff0c\u901f\u5ea6\u53ef\u80fd\u5e76\u4e0d\u76f8\u540c\u3002\n\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u5fc5\u987b\u5f97\u8bb0\u5f55\u4e00\u4e0b\uff0c\u5982\u679c\u4e24\u6b21\u5230\u8fbe\u540c\u4e00\u4e2a\u5730\u65b9\uff0c\u5177\u6709\u76f8\u540c\u7684\u901f\u5ea6\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u8003\u8651\u4e0d\u518d\u7ee7\u7eed\u3002\u5982\u679c\u4e0d\u53bb\u5224\u65ad\u8fd9\u4e00\u70b9\uff0c\u5c31\u4f1a\u5bfc\u81f4\u5faa\u73af\u7684\u51fa\u73b0\uff0c\u4e5f\u5c31\u662f\u793a\u4f8b 1 \u4e2d\u51fa\u73b0\u7684\u60c5\u51b5\uff0c\u5982\u679c\u6211\u4eec\u4e0d\u5224\u65ad\u91cd\u590d\uff0c\u4e00\u5b9a\u4f1a\u5bfc\u81f4\u6b7b\u5faa\u73af\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u603b\u7ed3\u4e00\u4e0b\uff0c\u601d\u8def\u5c31\u662f dfs \u52a0\u4e0a\u8bb0\u5fc6\u5316\u53bb\u91cd\uff08\u526a\u679d\uff09\u3002\u53ea\u6709\u4e24\u6b21\u5230\u8fbe\u540c\u4e00\u4e2a\u5730\u65b9\u5e76\u4e14\u5177\u6709\u76f8\u540c\u7684\u901f\u5ea6\uff0c\u624d\u4f1a\u662f\u526a\u679d\u6761\u4ef6\u3002"),(0,i.kt)("p",null,"\u6211\u7684\u4ee3\u7801\u4e2d\u4e3b\u8981\u5206\u6210\u4e86\u4e24\u5757\uff0c\u4e00\u5757\u662f\u4e3b\u51fd\u6570\uff0c\u4e00\u5757\u662f dfs\uff0cdfs \u51fd\u6570\u63a5\u53d7\u4e09\u4e2a\u53c2\u6570\uff0c\u4e5f\u5c31\u662f\u5f53\u524d\u7684 x\uff0cy \u5750\u6807\u548c speed \u901f\u5ea6\u3002\n\u5f53",(0,i.kt)("inlineCode",{parentName:"p"},"passed[x][y][speed]"),"\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u65f6\u5019\uff0c\u5c31\u8bf4\u660e\u4e4b\u524d\u4ee5\u76f8\u540c\u7684\u901f\u5ea6\u904d\u5386\u8fc7\u76f8\u540c\u7684\u5730\u65b9\uff0c\u800c\u4e14\u65e0\u9700\u518d\u904d\u5386\u4e00\u6b21\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"res[x][y]"),"\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u7684\u65f6\u5019\u8bf4\u660e\u8be5\u5750\u6807\u662f\u7b54\u6848\u7684\u4e00\u4e2a\u5019\u9009\u5750\u6807\u3002\u63a5\u4e0b\u6765\u5c31\u662f\u975e\u5e38\u5e38\u89c4\u7684\u5f80\u56db\u4e2a\u65b9\u5411\u8fdb\u884c\u904d\u5386\u3002\u901f\u5ea6\u5c0f\u4e8e 0 \u5c31\u622a\u65ad\u4e4b\u7c7b\u7684\u57fa\u64cd\u3002"),(0,i.kt)("p",null,"\u4e3b\u51fd\u6570\u4e2d\u4e3b\u8981\u662f\u5904\u7406\u4e86\u4e00\u4e0b\u8f93\u5165\u8f93\u51fa\u7684\u903b\u8f91\uff0c\u5b58\u4e86\u4e00\u4e9b\u5168\u5c40\u53d8\u91cf\uff0c\u5bf9\u8f93\u51fa\u7684\u7b54\u6848\u683c\u5f0f\u505a\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u64cd\u4f5c\uff0c\u5305\u62ec\u5c06 res \u53d8\u6210\u7b54\u6848\u6240\u9700\u7684\u5f62\u5f0f\u3002"),(0,i.kt)("h3",{id:"23-c\u4ee3\u7801"},"2.3 C++\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"using VI = vector<int>;\nusing VVI = vector<VI>;\nconst VI direc = {0, 1, 0, -1, 0};\nclass Solution {\npublic:\n    VVI t, o;\n    bool res[100][100] = {};\n    bool passed[100][100][105] = {};\n    int n, m;\n    void dfs(int x, int y, int speed) {\n        if (speed == 1) res[x][y] = true;\n        if (speed < 1) return;\n        if (passed[x][y][speed]) {\n            return;\n        }\n        passed[x][y][speed] = true;\n        for (int i = 0; i < 4; ++i) {\n            int xt = x + direc[i];\n            int yt = y + direc[i + 1];\n            if (xt >= 0 && yt >= 0 && xt < n && yt < m)\n                dfs(xt, yt, speed + t[x][y] - t[xt][yt] - o[xt][yt]);\n        }\n    }\n    VVI bicycleYard(VI& p, VVI& terrain, VVI& obstacle) {\n        t = terrain;\n        o = obstacle;\n        n = t.size();\n        m = t[0].size();\n        int x = p[0], y = p[1];\n        dfs(x, y, 1);\n        VVI res_v;\n        res[x][y] = false;\n        for (int i = 0; i < 100; ++i)\n            for (int j = 0; j < 100; ++j)\n                if (res[i][j])\n                    res_v.push_back({i, j});\n        return res_v;\n    }\n};\n")),(0,i.kt)("h2",{id:"\u7b2c\u4e09\u9898-\u5fd7\u613f\u8005\u8c03\u914d"},(0,i.kt)("a",{parentName:"h2",href:"https://leetcode-cn.com/problems/05ZEDJ/"},"\u7b2c\u4e09\u9898 \u5fd7\u613f\u8005\u8c03\u914d")),(0,i.kt)("h3",{id:"31-\u9898\u76ee"},"3.1 \u9898\u76ee"),(0,i.kt)("div",null,(0,i.kt)("p",null,"\u300c\u529b\u6263\u6311\u6218\u8d5b\u300d\u6709 ",(0,i.kt)("code",null,"n")," \u4e2a\u6bd4\u8d5b\u573a\u9986\uff08\u573a\u9986\u7f16\u53f7\u4ece ",(0,i.kt)("code",null,"0")," \u5f00\u59cb\uff09\uff0c\u573a\u9986\u4e4b\u95f4\u7684\u901a\u9053\u5206\u5e03\u60c5\u51b5\u8bb0\u5f55\u4e8e\u4e8c\u7ef4\u6570\u7ec4 ",(0,i.kt)("code",null,"edges")," \u4e2d\uff0c",(0,i.kt)("code",null,"edges[i]= [x, y]")," \u8868\u793a\u7b2c ",(0,i.kt)("code",null,"i")," \u6761\u901a\u9053\u8fde\u63a5\u573a\u9986 ",(0,i.kt)("code",null,"x")," \u548c\u573a\u9986 ",(0,i.kt)("code",null,"y"),"(\u5373\u4e24\u4e2a\u573a\u9986\u76f8\u90bb)\u3002\u521d\u59cb\u6bcf\u4e2a\u573a\u9986\u4e2d\u90fd\u6709\u4e00\u5b9a\u4eba\u6570\u7684\u5fd7\u613f\u8005\uff08\u4e0d\u540c\u573a\u9986\u4eba\u6570\u53ef\u80fd\u4e0d\u540c\uff09\uff0c\u540e\u7eed ",(0,i.kt)("code",null,"m")," \u5929\u6bcf\u5929\u5747\u4f1a\u6839\u636e\u8d5b\u4e8b\u70ed\u5ea6\u8fdb\u884c\u5fd7\u613f\u8005\u4eba\u6570\u8c03\u914d\u3002\u8c03\u914d\u65b9\u6848\u5206\u4e3a\u5982\u4e0b\u4e09\u79cd\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",null,"\u5c06\u7f16\u53f7\u4e3a ",(0,i.kt)("code",null,"idx")," \u7684\u573a\u9986\u5185\u7684\u5fd7\u613f\u8005\u4eba\u6570\u51cf\u534a\uff1b"),(0,i.kt)("li",null,"\u5c06\u7f16\u53f7\u4e3a ",(0,i.kt)("code",null,"idx")," \u7684\u573a\u9986\u76f8\u90bb\u7684\u573a\u9986\u7684\u5fd7\u613f\u8005\u4eba\u6570\u90fd\u52a0\u4e0a\u7f16\u53f7\u4e3a ",(0,i.kt)("code",null,"idx")," \u7684\u573a\u9986\u7684\u5fd7\u613f\u8005\u4eba\u6570\uff1b"),(0,i.kt)("li",null,"\u5c06\u7f16\u53f7\u4e3a ",(0,i.kt)("code",null,"idx")," \u7684\u573a\u9986\u76f8\u90bb\u7684\u573a\u9986\u7684\u5fd7\u613f\u8005\u4eba\u6570\u90fd\u51cf\u53bb\u7f16\u53f7\u4e3a ",(0,i.kt)("code",null,"idx")," \u7684\u573a\u9986\u7684\u5fd7\u613f\u8005\u4eba\u6570\u3002")),(0,i.kt)("p",null,"\u6240\u6709\u7684\u8c03\u914d\u4fe1\u606f\u8bb0\u5f55\u4e8e\u6570\u7ec4 ",(0,i.kt)("code",null,"plans")," \u4e2d\uff0c",(0,i.kt)("code",null,"plans[i] = [num,idx]")," \u8868\u793a\u7b2c ",(0,i.kt)("code",null,"i")," \u5929\u5bf9\u7f16\u53f7 ",(0,i.kt)("code",null,"idx")," \u7684\u573a\u9986\u6267\u884c\u4e86\u7b2c ",(0,i.kt)("code",null,"num")," \u79cd\u8c03\u914d\u65b9\u6848\u3002",(0,i.kt)("br",null),"\u5728\u6bd4\u8d5b\u7ed3\u675f\u540e\u5bf9\u8c03\u914d\u65b9\u6848\u8fdb\u884c\u590d\u76d8\u65f6\uff0c\u4e0d\u614e\u5c06\u7b2c ",(0,i.kt)("code",null,"0")," \u4e2a\u573a\u9986\u7684",(0,i.kt)("strong",null,"\u6700\u7ec8"),"\u5fd7\u613f\u8005\u4eba\u6570\u4e22\u5931\uff0c\u53ea\u4fdd\u7559\u4e86",(0,i.kt)("strong",null,"\u521d\u59cb"),"\u6240\u6709\u573a\u9986\u7684\u5fd7\u613f\u8005\u603b\u4eba\u6570 ",(0,i.kt)("code",null,"totalNum")," \uff0c\u4ee5\u53ca\u8bb0\u5f55\u4e86\u7b2c ",(0,i.kt)("code",null,"1 ~ n-1")," \u4e2a\u573a\u9986\u7684",(0,i.kt)("strong",null,"\u6700\u7ec8"),"\u5fd7\u613f\u8005\u4eba\u6570\u7684\u4e00\u7ef4\u6570\u7ec4 ",(0,i.kt)("code",null,"finalCnt"),"\u3002\u8bf7\u4f60\u6839\u636e\u73b0\u6709\u7684\u4fe1\u606f\u6c42\u51fa\u521d\u59cb\u6bcf\u4e2a\u573a\u9986\u7684\u5fd7\u613f\u8005\u4eba\u6570\uff0c\u5e76\u6309\u573a\u9986\u7f16\u53f7\u987a\u5e8f\u8fd4\u56de\u5fd7\u613f\u8005\u4eba\u6570\u5217\u8868\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u6ce8\u610f\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",null,"\u6d4b\u8bd5\u6570\u636e\u4fdd\u8bc1\u5f53\u67d0\u573a\u9986\u8fdb\u884c\u7b2c\u4e00\u79cd\u8c03\u914d\u65f6\uff0c\u8be5\u573a\u9986\u7684\u5fd7\u613f\u8005\u4eba\u6570\u4e00\u5b9a\u4e3a\u5076\u6570\uff1b"),(0,i.kt)("li",null,"\u6d4b\u8bd5\u6570\u636e\u4fdd\u8bc1\u5f53\u67d0\u573a\u9986\u8fdb\u884c\u7b2c\u4e09\u79cd\u8c03\u914d\u65f6\uff0c\u8be5\u573a\u9986\u7684\u76f8\u90bb\u573a\u9986\u5fd7\u613f\u8005\u4eba\u6570\u4e0d\u4e3a\u8d1f\u6570\uff1b"),(0,i.kt)("li",null,"\u6d4b\u8bd5\u6570\u636e\u4fdd\u8bc1\u6bd4\u8d5b\u5f00\u59cb\u65f6\u6bcf\u4e2a\u573a\u9986\u7684\u5fd7\u613f\u8005\u4eba\u6570\u90fd\u4e0d\u8d85\u8fc7 ",(0,i.kt)("code",null,"10^9"),"\uff1b"),(0,i.kt)("li",null,"\u6d4b\u8bd5\u6570\u636e\u4fdd\u8bc1\u7ed9\u5b9a\u7684\u573a\u9986\u95f4\u7684\u9053\u8def\u5206\u5e03\u60c5\u51b5\u4e2d\u4e0d\u4f1a\u51fa\u73b0\u81ea\u73af\u3001\u91cd\u8fb9\u7684\u60c5\u51b5\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",null,(0,i.kt)("img",{src:"./leetcode-cup-1.png",alt:"image.png",onerror:"this.src='data:image/svg+xml,%3Csvg height=\\'150\\' viewBox=\\'0 0 150 150\\' width=\\'150\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'m2465 2286.42347-18.95363-18.92555-50.0112 43.79935-24.62708-24.5906-33.41155 24.5906-22.99654-17.22567v-73.0716c0-2.20914 1.79086-4 4-4h142c2.20914 0 4 1.79086 4 4zm-122-25.59081c5.52285 0 10-4.47052 10-9.98518 0-5.51467-4.47715-9.98519-10-9.98519s-10 4.47052-10 9.98519c0 5.51466 4.47715 9.98518 10 9.98518zm122 40.89296v61.27438c0 2.20914-1.79086 4-4 4h-142c-2.20914 0-4-1.79086-4-4v-53.62625l22.99654 17.22567 33.41155-24.5906 24.62708 24.5906 50.0112-43.79935z\\' fill=\\'%23eee\\' fill-rule=\\'evenodd\\' transform=\\'translate(-2315 -2217)\\'/%3E%3C/svg%3E'; "}),(0,i.kt)("br",null),"\u8f93\u5165\uff1a",(0,i.kt)("br",null),(0,i.kt)("code",null,"finalCnt = [1,16], totalNum = 21, edges = [[0,1],[1,2]], plans = [[2,1],[1,0],[3,0]]")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a",(0,i.kt)("code",null,"[5,7,9]")),(0,i.kt)("p",null,"\u89e3\u91ca\uff1a",(0,i.kt)("br",null),(0,i.kt)("img",{src:"./leetcode-cup-2.png",alt:"image.png",height:"200",onerror:"this.src='data:image/svg+xml,%3Csvg height=\\'150\\' viewBox=\\'0 0 150 150\\' width=\\'150\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'m2465 2286.42347-18.95363-18.92555-50.0112 43.79935-24.62708-24.5906-33.41155 24.5906-22.99654-17.22567v-73.0716c0-2.20914 1.79086-4 4-4h142c2.20914 0 4 1.79086 4 4zm-122-25.59081c5.52285 0 10-4.47052 10-9.98518 0-5.51467-4.47715-9.98519-10-9.98519s-10 4.47052-10 9.98519c0 5.51466 4.47715 9.98518 10 9.98518zm122 40.89296v61.27438c0 2.20914-1.79086 4-4 4h-142c-2.20914 0-4-1.79086-4-4v-53.62625l22.99654 17.22567 33.41155-24.5906 24.62708 24.5906 50.0112-43.79935z\\' fill=\\'%23eee\\' fill-rule=\\'evenodd\\' transform=\\'translate(-2315 -2217)\\'/%3E%3C/svg%3E'; "}))),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 2 \uff1a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u8f93\u5165\uff1a",(0,i.kt)("br",null),(0,i.kt)("code",null,"finalCnt = [4,13,4,3,8], totalNum = 54, edges = [[0,3],[1,3],[4,3],[2,3],[2,5]], plans = [[1,1],[3,3],[2,5],[1,0]]")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a",(0,i.kt)("code",null,"[10,16,9,4,7,8]"))),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("code",null,"2 <= n <= 5*10^4")),(0,i.kt)("li",null,(0,i.kt)("code",null,"1 <= edges.length <= min((n * (n - 1)) / 2, 5*10^4)")),(0,i.kt)("li",null,(0,i.kt)("code",null,"0 <= edges[i][0], edges[i][1] < n")),(0,i.kt)("li",null,(0,i.kt)("code",null,"1 <= plans.length <= 10")),(0,i.kt)("li",null,(0,i.kt)("code",null,"1 <= plans[i][0] <=3")),(0,i.kt)("li",null,(0,i.kt)("code",null,"0 <= plans[i][1] < n")),(0,i.kt)("li",null,(0,i.kt)("code",null,"finalCnt.length = n-1")),(0,i.kt)("li",null,(0,i.kt)("code",null,"0 <= finalCnt[i] < 10^9")),(0,i.kt)("li",null,(0,i.kt)("code",null,"0 <= totalNum < 5*10^13")))),(0,i.kt)("h3",{id:"32-\u601d\u8def\u5206\u6790"},"3.2 \u601d\u8def\u5206\u6790"),(0,i.kt)("p",null,"\u6211\u4eec\u53ea\u6709\u4e00\u4e2a\u503c\u4e0d\u77e5\u9053\uff0c\u5c31\u662f\u5f53\u524d\uff08\u6700\u540e\u65f6\u523b\uff09\u7b2c 0 \u53f7\u4f4d\u7684\u4eba\u6570\u3002\n\u901a\u8fc7\u89c2\u5bdf\u9898\u76ee\u4e0d\u96be\u5f97\u51fa\uff0c\u4e09\u4e2a\u64cd\u4f5c\u90fd\u662f\u7ebf\u6027\u64cd\u4f5c\uff0c\u800c\u4e14\u6211\u4eec\u51c6\u786e\u5730\u77e5\u9053\u6bcf\u4e00\u6b65\u7684\u64cd\u4f5c\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u53ea\u8981\u77e5\u9053\u77e5\u9053\u4e86\u6700\u540e\u4e00\u4e2a\u65f6\u523b\u7684\u7b2c 0 \u53f7\u4f4d\u7684\u4eba\u6570\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4e25\u4e1d\u5408\u7f1d\u5730\u5c06\u7ed3\u679c\u9012\u63a8\u5230\u7b2c\u4e00\u6b65\u3002\u5e76\u4e14\uff0c\u5728\u6b64\u65f6\uff0c\u7b2c\u4e00\u6b65\u7684\u603b\u548c\u5e94\u5f53\u4e25\u683c\u7b49\u4e8e",(0,i.kt)("inlineCode",{parentName:"p"},"totalNum"),"\u3002"),(0,i.kt)("p",null,"\u65e2\u7136\u5982\u6b64\uff0c\u6211\u4eec\u4e0d\u59a8\u8bbe\u4e00\u4e2a\u53d8\u91cf x\uff0c\u4f5c\u4e3a\u6700\u540e\u65f6\u523b\u7b2c 0 \u53f7\u4f4d\u7684\u4eba\u6570\u3002\u9006\u63a8\u6765\u5b8c\u6210\u6700\u7ec8\u7684\u63a8\u7406\uff0c\u63a8\u7406\u5230\u7b2c\u4e00\u6b65\u4e4b\u540e\uff0c\u6bcf\u4e00\u4e2a\u573a\u9986\u7684\u4eba\u6570\u90fd\u5e94\u8be5\u662f\u4e00\u4e2a\u5173\u4e8e\u53d8\u91cf x \u7684\u4e00\u6b21\u51fd\u6570\uff0c\u6211\u4eec\u5c06\u5176\u6c42\u548c\u4e4b\u540e\u4ecd\u7136\u662f\u4e00\u4e2a\u4e00\u6b21\u51fd\u6570\uff0c\u8fd9\u4e2a\u4e00\u6b21\u51fd\u6570\u6700\u7ec8\u7b49\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"totalNum")," \uff0c\u4ee3\u5165\u5c31\u53ef\u4ee5\u6c42\u5f97 x\uff0c\u4ee3\u5165\u6bcf\u4e2a\u573a\u9986\u7684\u8868\u8fbe\u5f0f\u4e2d\u5373\u53ef\u83b7\u5f97\u6bcf\u4e2a\u573a\u9986\u5728\u7b2c\u4e00\u6b65\u65f6\u7684\u4eba\u6570\u3002"),(0,i.kt)("p",null,"\u5728\u5177\u4f53\u4ee3\u7801\u4e2d\uff0c\u8bbe\u7f6e\u4e24\u4e2a\u6570\u7ec4 ",(0,i.kt)("inlineCode",{parentName:"p"},"x_param")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"c_param")," \uff0c\u5206\u522b\u4ee3\u8868\u6307\u5b9a\u573a\u9986\u4e00\u6b21\u51fd\u6570\u4e2d\u7684 x \u7cfb\u6570\u9879\u548c\u5e38\u6570\u9879\u3002\u6700\u7ec8\u9012\u63a8\u56de\u7b2c\u4e00\u6b65\uff0c\u6c42\u5f97 ",(0,i.kt)("inlineCode",{parentName:"p"},"x_param_sum")," \u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"c_param_sum")," \u3002\u6c42\u89e3 x \u7684\u65b9\u7a0b\u4e3a:"),(0,i.kt)("p",null,"$\\sum^{n}",(0,i.kt)("em",{parentName:"p"},"{i=1}{x"),"{param}","[i]","} * x + \\sum^{n}",(0,i.kt)("em",{parentName:"p"},"{i=1}{c"),"{param}","[i]","} = totalNum$",(0,i.kt)("br",{parentName:"p"}),"\n","\u7b80\u5355\u53d8\u6362\u540e\u5f97\u5230:"),(0,i.kt)("p",null,"$x = \\frac{(totalNum - \\sum^{n}",(0,i.kt)("em",{parentName:"p"},"{i=1}{c"),"{param}","[i]","})}{\\sum^{n}",(0,i.kt)("em",{parentName:"p"},"{i=1}{x"),"{param}","[i]","}}$"),(0,i.kt)("p",null,"\u6700\u540e\u4ee3\u5165\u5230\u8868\u8fbe\u5f0f\u4e2d\u5373\u53ef\u5b8c\u6210\u8ba1\u7b97\u3002"),(0,i.kt)("h3",{id:"33-c\u4ee3\u7801"},"3.3 C++\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"using VI = vector<int>;\nusing VVI = vector<VI>;\nusing ll = long long;\nclass Solution {\npublic:\n    VI volunteerDeployment(VI& finalCnt, ll totalNum, VVI& edges, VVI& plans) {\n        VI m[50005];\n        int n = finalCnt.size() + 1;\n        // x\u7cfb\u6570\u548c\u5e38\u6570\n        int x_param[50005] = {}, c_param[50005] = {};\n        for (auto & edge : edges) {\n            m[edge[0]].push_back(edge[1]);\n            m[edge[1]].push_back(edge[0]);\n        }\n        x_param[0] = 1;\n        for (int i = 0; i < n - 1; ++i)\n            c_param[i + 1] = finalCnt[i];\n        while (plans.size()) {\n            int kind = plans.back()[0];\n            int place = plans.back()[1];\n            plans.pop_back();\n            if (kind == 1) {\n                x_param[place] *= 2;\n                c_param[place] *= 2;\n            } else if (kind == 2) {\n                for (auto & nxt : m[place]) {\n                    x_param[nxt] -= x_param[place];\n                    c_param[nxt] -= c_param[place];\n                }\n            } else {\n                for (auto & nxt : m[place]) {\n                    x_param[nxt] += x_param[place];\n                    c_param[nxt] += c_param[place];\n                }\n            }\n        }\n        ll x_param_sum = 0, c_param_sum = 0;\n        for (int i = 0; i < n; ++i) {\n            x_param_sum += x_param[i];\n            c_param_sum += c_param[i];\n        }\n        // \u65b9\u7a0b: x_param_sum * x + c_param_sum = totalNum\n        int x = (totalNum - c_param_sum) / x_param_sum;\n        vector<int> res(n);\n        for (int i = 0; i < n; ++i)\n            res[i] = x_param[i] * x + c_param[i];\n        return res;\n    }\n};\n")),(0,i.kt)("h2",{id:"\u7b2c\u56db\u9898-\u5165\u573a\u5b89\u68c0"},(0,i.kt)("a",{parentName:"h2",href:"https://leetcode-cn.com/problems/oPs9Bm/"},"\u7b2c\u56db\u9898 \u5165\u573a\u5b89\u68c0")),(0,i.kt)("h3",{id:"41-\u9898\u76ee"},"4.1 \u9898\u76ee"),(0,i.kt)("div",null,(0,i.kt)("p",null,"\u300c\u529b\u6263\u6311\u6218\u8d5b\u300d \u7684\u5165\u573a\u4eea\u5f0f\u9a6c\u4e0a\u5c31\u8981\u5f00\u59cb\u4e86\uff0c\u7531\u4e8e\u5b89\u4fdd\u5de5\u4f5c\u7684\u9700\u8981\uff0c\u8bbe\u7f6e\u4e86\u53ef\u5bb9\u7eb3\u4eba\u6570\u603b\u548c\u4e3a ",(0,i.kt)("code",null,"M")," \u7684 ",(0,i.kt)("code",null,"N")," \u4e2a\u5b89\u68c0\u5ba4\uff0c",(0,i.kt)("code",null,"capacities[i]")," \u8bb0\u5f55\u7b2c ",(0,i.kt)("code",null,"i")," \u4e2a\u5b89\u68c0\u5ba4\u53ef\u5bb9\u7eb3\u4eba\u6570\u3002\u5b89\u68c0\u5ba4\u62e5\u6709\u4e24\u79cd\u7c7b\u578b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"\u5148\u8fdb\u5148\u51fa\uff1a\u5728\u5b89\u68c0\u5ba4\u4e2d\u7684\u6240\u6709\u89c2\u4f17\u4e2d\uff0c\u6700\u65e9\u8fdb\u5165\u5b89\u68c0\u5ba4\u7684\u89c2\u4f17\u6700\u5148\u79bb\u5f00"),(0,i.kt)("li",null,"\u540e\u8fdb\u5148\u51fa\uff1a\u5728\u5b89\u68c0\u5ba4\u4e2d\u7684\u6240\u6709\u89c2\u4f17\u4e2d\uff0c\u6700\u665a\u8fdb\u5165\u5b89\u68c0\u5ba4\u7684\u89c2\u4f17\u6700\u5148\u79bb\u5f00")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{src:"https://pic.leetcode-cn.com/1628843202-cdFPSt-c24754f1a5ff56989340ba5004dc5eda.gif",alt:"c24754f1a5ff56989340ba5004dc5eda.gif"})),(0,i.kt)("p",null,"\u6070\u597d ",(0,i.kt)("code",null,"M+1")," \u4f4d\u5165\u573a\u7684\u89c2\u4f17\uff08\u7f16\u53f7\u4ece 0 \u5f00\u59cb\uff09\u9700\u8981\u6392\u961f",(0,i.kt)("strong",null,"\u4f9d\u6b21"),"\u5165\u573a\u5b89\u68c0\uff0c \u5165\u573a\u5b89\u68c0\u7684\u89c4\u5219\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"\u89c2\u4f17\u9700\u8981\u5148\u8fdb\u5165\u7f16\u53f7 ",(0,i.kt)("code",null,"0")," \u7684\u5b89\u68c0\u5ba4"),(0,i.kt)("li",null,"\u5f53\u89c2\u4f17\u5c06\u8fdb\u5165\u7f16\u53f7 ",(0,i.kt)("code",null,"i")," \u7684\u5b89\u68c0\u5ba4\u65f6\uff08",(0,i.kt)("code",null,"0 <= i < N"),")\uff0c",(0,i.kt)("ul",null,(0,i.kt)("li",null,"\u82e5\u5b89\u68c0\u5ba4\u672a\u5230\u8fbe\u53ef\u5bb9\u7eb3\u4eba\u6570\u4e0a\u9650\uff0c\u8be5\u89c2\u4f17\u53ef\u76f4\u63a5\u8fdb\u5165\uff1b"),(0,i.kt)("li",null,"\u82e5\u5b89\u68c0\u5ba4\u5df2\u5230\u8fbe\u53ef\u5bb9\u7eb3\u4eba\u6570\u4e0a\u9650\uff0c\u5728\u8be5\u89c2\u4f17\u8fdb\u5165\u5b89\u68c0\u5ba4\u4e4b\u524d\u9700\u6839\u636e\u5f53\u524d\u5b89\u68c0\u5ba4\u7c7b\u578b\u9009\u62e9\u4e00\u4f4d\u89c2\u4f17\u79bb\u5f00\u540e\u624d\u80fd\u8fdb\u5165\uff1b"))),(0,i.kt)("li",null,"\u5f53\u89c2\u4f17\u79bb\u5f00\u7f16\u53f7 ",(0,i.kt)("code",null,"i")," \u7684\u5b89\u68c0\u5ba4\u65f6 \uff08",(0,i.kt)("code",null,"0 <= i < N-1"),")\uff0c\u5c06\u8fdb\u5165\u7f16\u53f7 ",(0,i.kt)("code",null,"i+1")," \u7684\u5b89\u68c0\u5ba4\u63a5\u53d7\u5b89\u68c0\u3002")),(0,i.kt)("p",null,"\u82e5\u53ef\u4ee5\u4efb\u610f\u8bbe\u5b9a\u6bcf\u4e2a\u5b89\u68c0\u5ba4\u7684\u7c7b\u578b\uff0c\u8bf7\u95ee\u6709\u591a\u5c11\u79cd\u8bbe\u5b9a\u5b89\u68c0\u5ba4\u7c7b\u578b\u7684\u65b9\u6848\u53ef\u4ee5\u4f7f\u5f97\u7f16\u53f7 ",(0,i.kt)("code",null,"k")," \u7684\u89c2\u4f17\u7b2c\u4e00\u4e2a\u901a\u8fc7\u6700\u540e\u4e00\u4e2a\u5b89\u68c0\u5ba4\u5165\u573a\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u6ce8\u610f\uff1a")),(0,i.kt)("ul",null,(0,i.kt)("li",null,"\u89c2\u4f17\u4e0d\u53ef\u4e3b\u52a8\u79bb\u5f00\u5b89\u68c0\u5ba4\uff0c\u53ea\u6709\u5f53\u5b89\u68c0\u5ba4\u5bb9\u7eb3\u4eba\u6570\u8fbe\u5230\u4e0a\u9650\uff0c\u4e14\u53c8\u6709\u65b0\u89c2\u4f17\u9700\u8981\u8fdb\u5165\u65f6\uff0c\u624d\u53ef\u6839\u636e\u5b89\u68c0\u5ba4\u7684\u7c7b\u578b\u9009\u62e9\u4e00\u4f4d\u89c2\u4f17\u79bb\u5f00\uff1b"),(0,i.kt)("li",null,"\u7531\u4e8e\u65b9\u6848\u6570\u53ef\u80fd\u8fc7\u5927\uff0c\u8bf7\u5c06\u7b54\u6848\u5bf9 ",(0,i.kt)("code",null,"1000000007")," \u53d6\u6a21\u540e\u8fd4\u56de\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u8f93\u5165\uff1a",(0,i.kt)("code",null,"capacities = [2,2,3], k = 2")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a",(0,i.kt)("code",null,"2"),(0,i.kt)("br",null),"\u89e3\u91ca\uff1a",(0,i.kt)("br",null),"\u5b58\u5728\u4e24\u79cd\u8bbe\u5b9a\u7684 ",(0,i.kt)("code",null,"2")," \u79cd\u65b9\u6848\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",null,"\u65b9\u6848 1\uff1a\u5c06\u7f16\u53f7\u4e3a ",(0,i.kt)("code",null,"0")," \u3001",(0,i.kt)("code",null,"1")," \u7684\u5b9e\u9a8c\u5ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("strong",null,"\u540e\u8fdb\u5148\u51fa")," \u7684\u7c7b\u578b\uff0c\u7f16\u53f7\u4e3a ",(0,i.kt)("code",null,"2")," \u7684\u5b9e\u9a8c\u5ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("strong",null,"\u5148\u8fdb\u5148\u51fa")," \u7684\u7c7b\u578b\uff1b"),(0,i.kt)("li",null,"\u65b9\u6848 2\uff1a\u5c06\u7f16\u53f7\u4e3a ",(0,i.kt)("code",null,"0")," \u3001",(0,i.kt)("code",null,"1")," \u7684\u5b9e\u9a8c\u5ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("strong",null,"\u5148\u8fdb\u5148\u51fa")," \u7684\u7c7b\u578b\uff0c\u7f16\u53f7\u4e3a ",(0,i.kt)("code",null,"2")," \u7684\u5b9e\u9a8c\u5ba4\u8bbe\u7f6e\u4e3a ",(0,i.kt)("strong",null,"\u540e\u8fdb\u5148\u51fa")," \u7684\u7c7b\u578b\u3002")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u65b9\u6848 1 \u7684\u793a\u610f\u56fe\uff1a",(0,i.kt)("br",null),(0,i.kt)("img",{src:"https://pic.leetcode-cn.com/1628841618-bFKsnt-c60e38199a225ad62f13b954872edf9b.gif",alt:"c60e38199a225ad62f13b954872edf9b.gif"}))),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u8f93\u5165\uff1a",(0,i.kt)("code",null,"capacities = [3,3], k = 3")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a",(0,i.kt)("code",null,"0"))),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,i.kt)("blockquote",null,(0,i.kt)("p",null,"\u8f93\u5165\uff1a",(0,i.kt)("code",null,"capacities = [4,3,2,2], k = 6")),(0,i.kt)("p",null,"\u8f93\u51fa\uff1a",(0,i.kt)("code",null,"2"))),(0,i.kt)("p",null,(0,i.kt)("strong",null,"\u63d0\u793a:")),(0,i.kt)("ul",null,(0,i.kt)("li",null,(0,i.kt)("code",null,"1 <= capacities.length <= 200")),(0,i.kt)("li",null,(0,i.kt)("code",null,"1 <= capacities[i] <= 200")),(0,i.kt)("li",null,(0,i.kt)("code",null,"0 <= k <= sum(capacities)")))),(0,i.kt)("h3",{id:"42-\u601d\u8def\u5206\u6790"},"4.2 \u601d\u8def\u5206\u6790"),(0,i.kt)("p",null,"\u672c\u9898\u6ce8\u610f\u89c2\u5bdf\u9898\u76ee\u5373\u53ef\u53d1\u73b0\uff0c\u5148\u8fdb\u5148\u51fa\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\u4e3a\u961f\u5217\uff0c\u540e\u8fdb\u5148\u51fa\u5bf9\u5e94\u7684\u6570\u636e\u7ed3\u6784\u4e3a\u6808\u3002\n\u800c\u6ce8\u610f\u770b\u7b2c\u4e8c\u4e2agif\uff0c\u6211\u4eec\u53d1\u73b0\uff0c\u5f53\u4e00\u4e2a\u5bb9\u5668\uff08\u5b9e\u9a8c\u5ba4\uff0c\u6211\u4eec\u5728\u6b64\u7edf\u79f0\u4e3a\u5bb9\u5668\uff09\u4e3a\u961f\u5217\u65f6\uff0c\u7b2c\u4e00\u4e2a\u8fdb\u5165\u7684\u7b2c\u4e00\u4e2a\u51fa\u961f\u5217\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u4e00\u4e2a\u961f\u5217\u5bf9\u4e8e\u6539\u53d8\u6d41\u7a0b\u4e2d\u7684\u7b2c\u4e00\u4e2a\u4eba\u6ca1\u4efb\u4f55\u5f71\u54cd\u3002\u5bf9\u6bd4\u7740\u6765\u770b\u6808\uff0c\u6211\u4eec\u53d1\u73b0\uff0c\u4e00\u4e2a\u957f\u5ea6\u4e3a2\u7684\u6808\u5fc5\u987b\u5148\u586b\u51451\u4e2a\u5143\u7d20\uff0c\u8fd9\u4e00\u4e2a\u5143\u7d20\u5c31\u76f8\u5f53\u4e8e\u56fa\u5b9a\u5728\u6b64\u5904\uff0c\u6ca1\u6cd5\u79fb\u52a8\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5bf9\u4e8e\u6d41\u7a0b\u4e2d\u7684\u7b2c\u4e00\u4e2a\u4eba\uff0c\u4e00\u4e2a\u957f\u5ea6\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"c"),"\u7684\u6808\u80fd\u591f\u62e6\u622a",(0,i.kt)("inlineCode",{parentName:"p"},"c-1"),"\u4e2a\u4eba\u3002"),(0,i.kt)("p",null,"\u90a3\u4e48\u5c31\u5f88\u7b80\u5355\u4e86\u3002\u56e0\u4e3a\u6211\u4eec\u60f3\u8981\u8ba9\u7b2c",(0,i.kt)("inlineCode",{parentName:"p"},"k"),"\u4e2a\u4eba\u8fbe\u5230\u5bf9\u9996\uff0c\u6211\u4eec\u5fc5\u987b\u4f7f\u7528\u6808\u6765\u62e6\u622a\u524d",(0,i.kt)("inlineCode",{parentName:"p"},"k"),"\u4e2a\u4eba\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u628a\u8fd9\u9053\u9898\u7ffb\u8bd1\u6210\u4e00\u4e2a\u6211\u4eec\u559c\u95fb\u4e50\u89c1\u7684\u5f62\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markdown"},"\u6709`N`\u4e2a\u786c\u5e01\uff0c\u6bcf\u4e2a\u7684\u91d1\u989d\u90fd\u5728`cap`\u6570\u7ec4\u4e2d\u7ed9\u51fa\uff08\u9700\u8981\u4e00\u4e2a\u51cf1\u64cd\u4f5c\uff09\u3002\u6211\u4eec\u4ece\u524d\u5f80\u540e\u9009\uff0c\u6c42\u6700\u7ec8\u91d1\u989d\u4e3a`k`\u7684\u65b9\u6848\u6570\u3002\n")),(0,i.kt)("p",null,"\u662f\u4e0d\u662f\u4e00\u4e0b\u5c31\u7b80\u5355\u4e86\u5462\uff01"),(0,i.kt)("p",null,"\u6700\u7ec8\u7684\u505a\u6cd5\u5c31\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684dp\u3002\u56e0\u4e3a\u4e00\u4e2a\u786c\u5e01\u53ea\u80fd\u7528\u4e00\u6b21\uff0c\u6240\u4ee5\u8981\u63a7\u5236dp\u7684\u65b9\u5411\u3002"),(0,i.kt)("h3",{id:"43-c\u4ee3\u7801"},"4.3 C++\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"const int md = 1000000007;\nclass Solution {\npublic:\n    int securityCheck(vector<int>& cap, int k) {\n        for (auto & c : cap) c--;\n        int sum = accumulate(cap.begin(), cap.end(), 0);\n        if (sum < k) return 0;\n        int dp[40005] = {1};\n        for (auto & c : cap) {\n            for (int i = k - c; i >= 0; --i) {\n                (dp[i + c] += dp[i]) %= md;\n            }\n        }\n        return dp[k];\n    }\n};\n")))}d.isMDXComponent=!0},5469:function(l,n,t){n.Z=t.p+"assets/images/leetcode-cup-2021\u79cb\u6218\u961f\u8d5b-1-c21f343d726399ddcd87372b292fab7b.png"},3209:function(l,n,t){n.Z=t.p+"assets/images/leetcode-cup-2021\u79cb\u6218\u961f\u8d5b-08ddf47c01936ee13da4922284a6d250.png"}}]);