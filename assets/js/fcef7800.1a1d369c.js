"use strict";(self.webpackChunkalgorithm_station=self.webpackChunkalgorithm_station||[]).push([[4155],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7276:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={},u="No.516 \u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217",p={unversionedId:"leetcode/2021/8/12",id:"leetcode/2021/8/12",title:"No.516 \u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217",description:"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 s \uff0c\u627e\u51fa\u5176\u4e2d\u6700\u957f\u7684\u56de\u6587\u5b50\u5e8f\u5217\uff0c\u5e76\u8fd4\u56de\u8be5\u5e8f\u5217\u7684\u957f\u5ea6\u3002",source:"@site/docs/leetcode/2021/8/12.md",sourceDirName:"leetcode/2021/8",slug:"/leetcode/2021/8/12",permalink:"/algorithm-station/docs/leetcode/2021/8/12",editUrl:"https://github.com/DawnMagnet/algorithm-station/edit/main/website/docs/leetcode/2021/8/12.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"No.446 \u7b49\u5dee\u6570\u5217\u5212\u5206 II - \u5b50\u5e8f\u5217",permalink:"/algorithm-station/docs/leetcode/2021/8/11"},next:{title:"No.233 \u6570\u5b571\u7684\u4e2a\u6570",permalink:"/algorithm-station/docs/leetcode/2021/8/13"}},c=[],s={toc:c};function d(t){var e=t.components,n=(0,o.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"no516-\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217"},"No.516 \u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217"),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,l.kt)("code",null,"s")," \uff0c\u627e\u51fa\u5176\u4e2d\u6700\u957f\u7684\u56de\u6587\u5b50\u5e8f\u5217\uff0c\u5e76\u8fd4\u56de\u8be5\u5e8f\u5217\u7684\u957f\u5ea6\u3002"),(0,l.kt)("p",null,"\u5b50\u5e8f\u5217\u5b9a\u4e49\u4e3a\uff1a\u4e0d\u6539\u53d8\u5269\u4f59\u5b57\u7b26\u987a\u5e8f\u7684\u60c5\u51b5\u4e0b\uff0c\u5220\u9664\u67d0\u4e9b\u5b57\u7b26\u6216\u8005\u4e0d\u5220\u9664\u4efb\u4f55\u5b57\u7b26\u5f62\u6210\u7684\u4e00\u4e2a\u5e8f\u5217\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "bbbab"',(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"4",(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),'\u4e00\u4e2a\u53ef\u80fd\u7684\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217\u4e3a "bbbb" \u3002'),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "cbbd"',(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"2",(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),'\u4e00\u4e2a\u53ef\u80fd\u7684\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217\u4e3a "bb" \u3002'),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= s.length <= 1000")),(0,l.kt)("li",null,(0,l.kt)("code",null,"s")," \u4ec5\u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210")),(0,l.kt)("h1",{id:"\u601d\u8def\u5206\u6790"},"\u601d\u8def\u5206\u6790"),(0,l.kt)("p",null,"\u5176\u5b9e\u6709\u4e00\u4e2a\u975e\u5e38\u5173\u952e\u7684\u601d\u8def\u3002\u5c31\u662f",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"\u5b57\u7b26\u4e32s\u7684\u6700\u957f\u56de\u6587\u5b50\u5e8f\u5217  \u7b49\u4ef7\u4e8e  \u5b57\u7b26\u4e32s\u548cs\u7684\u5012\u5e8fs'\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217")),(0,l.kt)("p",null,"\u7b80\u5355\u7684\u8bc1\u660e\uff0cs\u4e0es\u5012\u5e8f\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u4e00\u5b9a\u662f\u56de\u6587\u7684\u3002\u6b63\u7740\u6709\uff0c\u53cd\u7740\u6709\uff0c\u4e14\u76f8\u540c\uff0c\u8fd9\u5c31\u662f\u56de\u6587\u7684\u5b9a\u4e49\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u4e5f\u4e0d\u4f1a\u6709\u6bd4s\u4e0es\u5012\u5e8f\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u66f4\u957f\u7684\u56de\u6587\u5b50\u5e8f\u5217\u4e86\u3002\u5982\u679c\u6709\uff0c\u90a3\u4e48s\u4e0es\u5012\u5e8f\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u4e5f\u4f1a\u53d8\u5f97\u66f4\u957f\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u6210\u529f\u7684\u5c06\u9898\u76ee\u8f6c\u5316\u4e3a\u6c42s\u4e0es\u5012\u5e8f\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u7684\u957f\u5ea6\u3002"),(0,l.kt)("p",null,"\u65e2\u7136\u662f\u8fd9\u6837\uff0c\u5c31\u975e\u5e38\u65b9\u4fbf\u4e86\u3002\u76f4\u63a5\u4f7f\u7528\u4e8c\u7ef4\u52a8\u6001\u89c4\u5212\u5373\u53ef\u8f7b\u677e\u6c42\u89e3\u3002\n\u9996\u5148\u8bbe\u7f6e\u52a8\u6001\u89c4\u5212\u53d8\u91cf",(0,l.kt)("inlineCode",{parentName:"p"},"dp[n+1][n+1]"),"(\u9884\u7559\u4e00\u4e2a\u7a7a\u4f4d\u65b9\u4fbf\u8ba1\u7b97)\u3002"),(0,l.kt)("p",null,"\u518d\u8bf4",(0,l.kt)("inlineCode",{parentName:"p"},"dp[i][j]"),"\u7684\u542b\u4e49\uff0c\u5c31\u662fs\u4e2d\u524di\u4f4d\u4e0es'\u4e2d\u524dj\u4f4d\u7684\u6700\u957f\u516c\u5171\u5b50\u5e8f\u5217\u3002"),(0,l.kt)("p",null,"\u52a8\u6001\u89c4\u5212\u7684\u9012\u63a8\u5f0f\u4e5f\u975e\u5e38\u597d\u601d\u8003\u3002\u53ea\u8981\u9047\u5230\u4e86\u4e24\u4e2a\u76f8\u540c\u7684\u5b57\u7b26\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"dp[i][j] = dp[i - 1][j - 1] + 1"),(0,l.kt)("br",{parentName:"p"}),"\n","\u5426\u5219\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])")),(0,l.kt)("h1",{id:"rust\u4ee3\u7801"},"Rust\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"# struct Solution;\nimpl Solution {\n    pub fn longest_palindrome_subseq(s: String) -> i32 {\n        let s = s.into_bytes();\n        let n = s.len();\n        let mut res = 0;\n        let mut dp = vec![vec![0; n + 1]; n + 1];\n        for i in 1..=n {\n            for j in 1..=n {\n                if s[n - i] == s[j - 1] {\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\n                } else {\n                    dp[i][j] = dp[i - 1][j].max(dp[i][j - 1]);\n                }\n            }\n        }\n\n        dp[n][n]\n    }\n}\n")))}d.isMDXComponent=!0}}]);