"use strict";(self.webpackChunkalgorithm_station=self.webpackChunkalgorithm_station||[]).push([[5257],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var a=r.createContext({}),i=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(a.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(t),k=l,m=p["".concat(a,".").concat(k)]||p[k]||d[k]||o;return t?r.createElement(m,u(u({ref:n},s),{},{components:t})):r.createElement(m,u({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,u=new Array(o);u[0]=k;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c[p]="string"==typeof e?e:l,u[1]=c;for(var i=2;i<o;i++)u[i]=t[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7015:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(7462),l=(t(7294),t(3905));const o={},u="No.1137 \u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570",c={unversionedId:"leetcode/2021/8/8",id:"leetcode/2021/8/8",title:"No.1137 \u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570",description:"\u6cf0\u6ce2\u90a3\u5951\u5e8f\u5217&nbsp;Tn&nbsp;\u5b9a\u4e49\u5982\u4e0b\uff1a&nbsp;",source:"@site/docs/leetcode/2021/8/8.md",sourceDirName:"leetcode/2021/8",slug:"/leetcode/2021/8/",permalink:"/docs/leetcode/2021/8/",draft:!1,editUrl:"https://github.com/DawnMagnet/algorithm-station/edit/main/website/docs/leetcode/2021/8/8.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"27\u65e5 No.825 \u9002\u9f84\u7684\u670b\u53cb",permalink:"/docs/leetcode/2021/12/27"},next:{title:"No.413 \u7b49\u5dee\u6570\u5217\u5212\u5206",permalink:"/docs/leetcode/2021/8/10"}},a={},i=[],s={toc:i},p="wrapper";function d(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"no1137-\u7b2cn\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570"},"No.1137 \u7b2cN\u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570"),(0,l.kt)("p",null,"\u6cf0\u6ce2\u90a3\u5951\u5e8f\u5217\xa0T",(0,l.kt)("sub",null,"n"),"\xa0\u5b9a\u4e49\u5982\u4e0b\uff1a\xa0"),(0,l.kt)("p",null,"T",(0,l.kt)("sub",null,"0")," = 0, T",(0,l.kt)("sub",null,"1")," = 1, T",(0,l.kt)("sub",null,"2")," = 1, \u4e14\u5728 n >= 0\xa0\u7684\u6761\u4ef6\u4e0b T",(0,l.kt)("sub",null,"n+3")," = T",(0,l.kt)("sub",null,"n")," + T",(0,l.kt)("sub",null,"n+1")," + T",(0,l.kt)("sub",null,"n+2")),(0,l.kt)("p",null,"\u7ed9\u4f60\u6574\u6570\xa0",(0,l.kt)("code",null,"n"),"\uff0c\u8bf7\u8fd4\u56de\u7b2c n \u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570\xa0T",(0,l.kt)("sub",null,"n "),"\u7684\u503c\u3002"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 1\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 4",(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"4",(0,l.kt)("strong",null,"\u89e3\u91ca\uff1a"),"T_3 = 0 + 1 + 1 = 2 T_4 = 1 + 1 + 2 = 4"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u793a\u4f8b 2\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("strong",null,"\u8f93\u5165\uff1a"),"n = 25",(0,l.kt)("strong",null,"\u8f93\u51fa\uff1a"),"1389537"),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"0 <= n <= 37")),(0,l.kt)("li",null,"\u7b54\u6848\u4fdd\u8bc1\u662f\u4e00\u4e2a 32 \u4f4d\u6574\u6570\uff0c\u5373\xa0",(0,l.kt)("code",null,"answer <= 2^31 - 1"),"\u3002")),(0,l.kt)("h1",{id:"\u601d\u8def\u5206\u6790"},"\u601d\u8def\u5206\u6790"),(0,l.kt)("p",null,"\u901a\u8fc7\u89c2\u5bdf\uff0c\u53d1\u73b0\u9898\u76ee\u8981\u6c42\u7684\u662f\u4e00\u4e2a\u6570\u5217\u7684\u548c\u3002\u800c\u4e14\u8fd9\u4e2a\u6570\u5217\u53ef\u4ee5\u901a\u8fc7\u524d\u9762\u76843\u9879\u6765\u8ba1\u7b97\u5f97\u5230\u540e\u9762\u7684\u4e00\u9879\u3002\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u7528\u6700\u7b80\u5355\u7684\u66b4\u529b\u7b97\u6cd5\u6765\u505a\u3002\n\u4e5f\u5c31\u662f\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u6570\u7ec4\uff0c\u91cc\u9762\u6709\u56fa\u5b9a\u7684\u4e09\u9879",(0,l.kt)("inlineCode",{parentName:"p"},"[0,1,1]"),"\u3002\u8fd9\u662f\u9898\u76ee\u4e2d\u7ed9\u6211\u4eec\u7684\u6761\u4ef6\uff0c\u7136\u540e\u6211\u4eec\u6839\u636e\u7ed9\u5165\u7684n\u53bb\u8ba1\u7b97\u5230\u6211\u4eec\u9700\u8981\u7684\u5730\u65b9\uff0c\u5c31\u53ef\u4ee5\u83b7\u5f97\u7b2c N \u4e2a\u6cf0\u6ce2\u90a3\u5951\u6570\u4e86"),(0,l.kt)("h1",{id:"rust\u4ee3\u7801"},"Rust\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"# struct Solution;\nimpl Solution {\n    pub fn tribonacci(n: i32) -> i32 {\n        let n = n as usize;\n        let mut v = vec![0, 1, 1];\n        let mut cur_len = 3;\n        while cur_len <= n {\n            v.push(v[cur_len - 1] + v[cur_len - 2] + v[cur_len - 3]);\n            cur_len += 1;\n        }\n        v[n]\n    }\n}\n")),(0,l.kt)("h1",{id:"\u8fd0\u884c\u6548\u679c"},"\u8fd0\u884c\u6548\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust,editable"},'# fn main() {\n# pub fn tribonacci(n: i32) -> i32 {\n#    let n = n as usize;\n#    let mut v = vec![0, 1, 1];\n#    let mut cur_len = 3;\n#    while cur_len <= n {\n#        v.push(v[cur_len - 1] + v[cur_len - 2] + v[cur_len - 3]);\n#        cur_len += 1;\n#    }\n#    v[n]\n# }\nprintln!("{:?}", tribonacci(2));\n# }\n')))}d.isMDXComponent=!0}}]);