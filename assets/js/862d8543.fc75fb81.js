"use strict";(self.webpackChunkalgorithm_station=self.webpackChunkalgorithm_station||[]).push([[8767],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),p=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return l.createElement(c.Provider,{value:e},t.children)},d="mdxType",a={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),d=p(n),k=r,f=d["".concat(c,".").concat(k)]||d[k]||a[k]||o;return n?l.createElement(f,i(i({ref:e},s),{},{components:n})):l.createElement(f,i({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=k;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u[d]="string"==typeof t?t:r,i[1]=u;for(var p=2;p<o;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7862:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var l=n(7462),r=(n(7294),n(3905));const o={},i="No.639 \u89e3\u7801\u65b9\u6cd5 II",u={unversionedId:"leetcode/2021/9/27",id:"leetcode/2021/9/27",title:"No.639 \u89e3\u7801\u65b9\u6cd5 II",description:"\u4e00\u6761\u5305\u542b\u5b57\u6bcd&nbsp;A-Z \u7684\u6d88\u606f\u901a\u8fc7\u4ee5\u4e0b\u7684\u65b9\u5f0f\u8fdb\u884c\u4e86\u7f16\u7801\uff1a",source:"@site/docs/leetcode/2021/9/27.md",sourceDirName:"leetcode/2021/9",slug:"/leetcode/2021/9/27",permalink:"/docs/leetcode/2021/9/27",draft:!1,editUrl:"https://github.com/DawnMagnet/algorithm-station/edit/main/website/docs/leetcode/2021/9/27.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"No.371 \u4e24\u6574\u6570\u4e4b\u548c",permalink:"/docs/leetcode/2021/9/26"},next:{title:"No.517 \u8d85\u7ea7\u6d17\u8863\u673a",permalink:"/docs/leetcode/2021/9/29"}},c={},p=[],s={toc:p},d="wrapper";function a(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,l.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"no639-\u89e3\u7801\u65b9\u6cd5-ii"},"No.639 \u89e3\u7801\u65b9\u6cd5 II"),(0,r.kt)("p",null,"\u4e00\u6761\u5305\u542b\u5b57\u6bcd\xa0",(0,r.kt)("code",null,"A-Z")," \u7684\u6d88\u606f\u901a\u8fc7\u4ee5\u4e0b\u7684\u65b9\u5f0f\u8fdb\u884c\u4e86\u7f16\u7801\uff1a"),(0,r.kt)("pre",null,"'A' -> 1 'B' -> 2 ... 'Z' -> 26"),(0,r.kt)("p",null,"\u8981 ",(0,r.kt)("strong",null,"\u89e3\u7801")," \u4e00\u6761\u5df2\u7f16\u7801\u7684\u6d88\u606f\uff0c\u6240\u6709\u7684\u6570\u5b57\u90fd\u5fc5\u987b\u5206\u7ec4\uff0c\u7136\u540e\u6309\u539f\u6765\u7684\u7f16\u7801\u65b9\u6848\u53cd\u5411\u6620\u5c04\u56de\u5b57\u6bcd\uff08\u53ef\u80fd\u5b58\u5728\u591a\u79cd\u65b9\u5f0f\uff09\u3002\u4f8b\u5982\uff0c",(0,r.kt)("code",null,'"11106"')," \u53ef\u4ee5\u6620\u5c04\u4e3a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,'"AAJF"')," \u5bf9\u5e94\u5206\u7ec4 ",(0,r.kt)("code",null,"(1 1 10 6)")),(0,r.kt)("li",null,(0,r.kt)("code",null,'"KJF"')," \u5bf9\u5e94\u5206\u7ec4 ",(0,r.kt)("code",null,"(11 10 6)"))),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u50cf ",(0,r.kt)("code",null,"(1 11 06)")," \u8fd9\u6837\u7684\u5206\u7ec4\u662f\u65e0\u6548\u7684\uff0c\u56e0\u4e3a ",(0,r.kt)("code",null,'"06"')," \u4e0d\u53ef\u4ee5\u6620\u5c04\u4e3a ",(0,r.kt)("code",null,"'F'")," \uff0c\u56e0\u4e3a ",(0,r.kt)("code",null,'"6"')," \u4e0e ",(0,r.kt)("code",null,'"06"')," \u4e0d\u540c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u9664\u4e86")," \u4e0a\u9762\u63cf\u8ff0\u7684\u6570\u5b57\u5b57\u6bcd\u6620\u5c04\u65b9\u6848\uff0c\u7f16\u7801\u6d88\u606f\u4e2d\u53ef\u80fd\u5305\u542b ",(0,r.kt)("code",null,"'*'")," \u5b57\u7b26\uff0c\u53ef\u4ee5\u8868\u793a\u4ece ",(0,r.kt)("code",null,"'1'")," \u5230 ",(0,r.kt)("code",null,"'9'")," \u7684\u4efb\u4e00\u6570\u5b57\uff08\u4e0d\u5305\u62ec ",(0,r.kt)("code",null,"'0'"),"\uff09\u3002\u4f8b\u5982\uff0c\u7f16\u7801\u5b57\u7b26\u4e32 ",(0,r.kt)("code",null,'"1*"')," \u53ef\u4ee5\u8868\u793a ",(0,r.kt)("code",null,'"11"'),"\u3001",(0,r.kt)("code",null,'"12"'),"\u3001",(0,r.kt)("code",null,'"13"'),"\u3001",(0,r.kt)("code",null,'"14"'),"\u3001",(0,r.kt)("code",null,'"15"'),"\u3001",(0,r.kt)("code",null,'"16"'),"\u3001",(0,r.kt)("code",null,'"17"'),"\u3001",(0,r.kt)("code",null,'"18"')," \u6216 ",(0,r.kt)("code",null,'"19"')," \u4e2d\u7684\u4efb\u610f\u4e00\u6761\u6d88\u606f\u3002\u5bf9 ",(0,r.kt)("code",null,'"1*"')," \u8fdb\u884c\u89e3\u7801\uff0c\u76f8\u5f53\u4e8e\u89e3\u7801\u8be5\u5b57\u7b26\u4e32\u53ef\u4ee5\u8868\u793a\u7684\u4efb\u4f55\u7f16\u7801\u6d88\u606f\u3002"),(0,r.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5b57\u7b26\u4e32 ",(0,r.kt)("code",null,"s")," \uff0c\u7531\u6570\u5b57\u548c ",(0,r.kt)("code",null,"'*'")," \u5b57\u7b26\u7ec4\u6210\uff0c\u8fd4\u56de ",(0,r.kt)("strong",null,"\u89e3\u7801")," \u8be5\u5b57\u7b26\u4e32\u7684\u65b9\u6cd5 ",(0,r.kt)("strong",null,"\u6570\u76ee")," \u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u7b54\u6848\u6570\u76ee\u53ef\u80fd\u975e\u5e38\u5927\uff0c\u8fd4\u56de\u5bf9 ",(0,r.kt)("code",null,"10",(0,r.kt)("sup",null,"9")," + 7")," ",(0,r.kt)("strong",null,"\u53d6\u4f59")," \u7684\u7ed3\u679c\u3002"),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "*"',(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"9",(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),'\u8fd9\u4e00\u6761\u7f16\u7801\u6d88\u606f\u53ef\u4ee5\u8868\u793a "1"\u3001"2"\u3001"3"\u3001"4"\u3001"5"\u3001"6"\u3001"7"\u3001"8" \u6216 "9" \u4e2d\u7684\u4efb\u610f\u4e00\u6761\u3002 \u53ef\u4ee5\u5206\u522b\u89e3\u7801\u6210\u5b57\u7b26\u4e32 "A"\u3001"B"\u3001"C"\u3001"D"\u3001"E"\u3001"F"\u3001"G"\u3001"H" \u548c "I" \u3002 \u56e0\u6b64\uff0c"*" \u603b\u5171\u6709 9 \u79cd\u89e3\u7801\u65b9\u6cd5\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "1*"',(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"18",(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),'\u8fd9\u4e00\u6761\u7f16\u7801\u6d88\u606f\u53ef\u4ee5\u8868\u793a "11"\u3001"12"\u3001"13"\u3001"14"\u3001"15"\u3001"16"\u3001"17"\u3001"18" \u6216 "19" \u4e2d\u7684\u4efb\u610f\u4e00\u6761\u3002 \u6bcf\u79cd\u6d88\u606f\u90fd\u53ef\u4ee5\u7531 2 \u79cd\u65b9\u6cd5\u89e3\u7801\uff08\u4f8b\u5982\uff0c"11" \u53ef\u4ee5\u89e3\u7801\u6210 "AA" \u6216 "K"\uff09\u3002 \u56e0\u6b64\uff0c"1*" \u5171\u6709 9 * 2 = 18 \u79cd\u89e3\u7801\u65b9\u6cd5\u3002'),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u793a\u4f8b 3\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("strong",null,"\u8f93\u5165\uff1a"),'s = "2*"',(0,r.kt)("strong",null,"\u8f93\u51fa\uff1a"),"15",(0,r.kt)("strong",null,"\u89e3\u91ca\uff1a"),'\u8fd9\u4e00\u6761\u7f16\u7801\u6d88\u606f\u53ef\u4ee5\u8868\u793a "21"\u3001"22"\u3001"23"\u3001"24"\u3001"25"\u3001"26"\u3001"27"\u3001"28" \u6216 "29" \u4e2d\u7684\u4efb\u610f\u4e00\u6761\u3002 "21"\u3001"22"\u3001"23"\u3001"24"\u3001"25" \u548c "26" \u7531 2 \u79cd\u89e3\u7801\u65b9\u6cd5\uff0c\u4f46 "27"\u3001"28" \u548c "29" \u4ec5\u6709 1 \u79cd\u89e3\u7801\u65b9\u6cd5\u3002 \u56e0\u6b64\uff0c"2*" \u5171\u6709 (6 * 2) + (3 * 1) = 12 + 3 = 15 \u79cd\u89e3\u7801\u65b9\u6cd5\u3002'),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,(0,r.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("code",null,"1 <= s.length <= 10",(0,r.kt)("sup",null,"5"))),(0,r.kt)("li",null,(0,r.kt)("code",null,"s[i]")," \u662f ",(0,r.kt)("code",null,"0 - 9")," \u4e2d\u7684\u4e00\u4f4d\u6570\u5b57\u6216\u5b57\u7b26 ",(0,r.kt)("code",null,"'*'"))),(0,r.kt)("h1",{id:"\u601d\u8def\u5206\u6790"},"\u601d\u8def\u5206\u6790"),(0,r.kt)("p",null,"\u8fd9\u4e00\u9898\u8003\u5bdf\u7684\u4e3b\u8981\u5c31\u662f\u601d\u8def\u4e25\u5bc6\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u901a\u8fc7\u9898\u76ee\u6240\u7ed9\u4fe1\u606f\u4e0d\u96be\u5224\u65ad\u8fd9\u662f\u4e00\u4e2a\u4e00\u7ef4\u7684\u52a8\u6001\u89c4\u5212\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u601d\u8def\u4e5f\u662f\u975e\u5e38\u52a8\u6001\u89c4\u5212\uff0cdp","[i]","\u4e3a\u4f7f\u7528\u4e86s\u7684\u524di\u4e2a\u5b57\u7b26\u6240\u6709\u7684\u65b9\u6848\u6570\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5982\u679cs","[i]"," \u4e0d\u662f '0'\uff0c\u90a3\u4e48\u5c31\u8bf4\u660e\u53ef\u4ee5\u5355\u72ec\u4f5c\u4e3a\u4e00\u4e2a\u65b9\u6848\u3002\u4e5f\u5c31\u662f dp","[i + 1]"," += dp","[i]"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679cs","[i - 1]","\u548cs","[i]","\u53ef\u4ee5\u7ec4\u6210\u5927\u4e8e\u7b49\u4e8e",(0,r.kt)("strong",{parentName:"li"},"10"),'\uff08\u6b64\u5904\u5e94\u4e3a\u5927\u5751\uff0c\u56e0\u4e3a\u4e0d\u80fd\u51fa\u73b0"01"\uff09\u4e14\u5c0f\u4e8e\u7b49\u4e8e26\u7684\u6570\u5b57\uff0c\u90a3\u4e48\u6211\u4eec\u5c31\u8ba4\u4e3a\u53ef\u4ee5\u5c06\u8fd9\u4e24\u4f4d\u6570\u4f5c\u4e3a\u4e00\u4e2a\u65b9\u6848\u3002dp',"[i + 1]"," += dp","[i - 1]")),(0,r.kt)("p",null,'\u601d\u8def\u975e\u5e38\u7b80\u5355\uff0c\u4f46\u662f\u5b9e\u73b0\u6bd4\u8f83\u590d\u6742\uff0c\u662f\u56e0\u4e3a\u6211\u4eec\u603b\u662f\u4f1a\u5ffd\u7565\u5404\u79cd\u5404\u6837\u7684\u60c5\u51b5\uff0c\u6bd4\u5982"*"\u53ea\u80fd\u4ee3\u88681\u52309\uff0c"01"\u4e0d\u80fd\u4f5c\u4e3a\u5408\u6cd5\u7684\u6570\u4e4b\u7c7b\u7684\u3002'),(0,r.kt)("p",null,"\u4e3b\u8981\u7684\u601d\u8def\u5c31\u662f\u5206\u5f00\u6765\u5199\uff0c\u5bf9\u4e8es","[i]","\u548cs","[i-1]",'\u662f\u4e0d\u662f"*"\u5206\u56db\u79cd\u60c5\u51b5\u8ba8\u8bba\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u6f0f\u4e86\u3002'),(0,r.kt)("h1",{id:"c\u4ee3\u7801"},"C++\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"using ll = int64_t;\nclass Solution {\npublic:\n    int numDecodings(string s) {\n        int n = s.size();\n        ll dp[n + 1];\n        memset(dp, 0, sizeof dp);\n        dp[0] = 1;\n        for (int i = 0; i < n; ++i) {\n            if (s[i] == '*') dp[i + 1] += dp[i] * 9;\n            else if (s[i] != '0') dp[i + 1] += dp[i];\n            if (i > 0) {\n// cout << \"Good\";\n                if (s[i - 1] == '*' && s[i] != '*'){\n                    if (s[i] <= '6') dp[i + 1] += 2 * dp[i - 1];\n                    else dp[i + 1] += dp[i - 1];\n                } else if (s[i - 1] == '*' && s[i] == '*') {\n                    // cout << \"Good\";\n                    dp[i + 1] += dp[i - 1] * 15;\n                } else if (s[i - 1] != '*' && s[i] == '*') {\n                    if (s[i - 1] == '1') dp[i + 1] += dp[i - 1] * 9;\n                    else if (s[i - 1] == '2') dp[i + 1] += dp[i - 1] * 6;\n                } else {\n                    if (s[i - 1] == '1' || (s[i - 1] == '2' && s[i] <= '6'))\n                        dp[i + 1] += dp[i - 1];\n                }\n            }\n            dp[i + 1] %= ll(1e9 + 7);\n        }\n        return dp[n];\n    }\n};\n")))}a.isMDXComponent=!0}}]);