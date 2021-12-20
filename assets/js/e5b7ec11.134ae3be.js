"use strict";(self.webpackChunkalgorithm_station=self.webpackChunkalgorithm_station||[]).push([[7861],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,k=a(e,["components","mdxType","originalType","parentName"]),s=p(n),m=l,d=s["".concat(u,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(d,i(i({ref:t},k),{},{components:n})):r.createElement(d,i({ref:t},k))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=s;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7796:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return k},default:function(){return s}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),i=["components"],a={},u="No.284 \u7aa5\u63a2\u8fed\u4ee3\u5668",p={unversionedId:"2021/10/No.284",id:"2021/10/No.284",title:"No.284 \u7aa5\u63a2\u8fed\u4ee3\u5668",description:"\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u8fed\u4ee3\u5668\uff0c\u9664\u4e86\u652f\u6301 hasNext \u548c next \u64cd\u4f5c\u5916\uff0c\u8fd8\u652f\u6301 peek \u64cd\u4f5c\u3002",source:"@site/docs/2021/10/5-No.284.md",sourceDirName:"2021/10",slug:"/2021/10/No.284",permalink:"/algorithm-station/docs/2021/10/No.284",editUrl:"https://github.com/DawnMagnet/algorithm-station/edit/main/website/docs/2021/10/5-No.284.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"No.482 \u5bc6\u94a5\u683c\u5f0f\u5316",permalink:"/algorithm-station/docs/2021/10/No.482"},next:{title:"No.414 \u7b2c\u4e09\u5927\u7684\u6570",permalink:"/algorithm-station/docs/2021/10/No.414"}},k=[],c={toc:k};function s(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"no284-\u7aa5\u63a2\u8fed\u4ee3\u5668"},"No.284 \u7aa5\u63a2\u8fed\u4ee3\u5668"),(0,o.kt)("p",null,"\u8bf7\u4f60\u8bbe\u8ba1\u4e00\u4e2a\u8fed\u4ee3\u5668\uff0c\u9664\u4e86\u652f\u6301 ",(0,o.kt)("code",null,"hasNext")," \u548c ",(0,o.kt)("code",null,"next")," \u64cd\u4f5c\u5916\uff0c\u8fd8\u652f\u6301 ",(0,o.kt)("code",null,"peek")," \u64cd\u4f5c\u3002"),(0,o.kt)("p",null,"\u5b9e\u73b0 ",(0,o.kt)("code",null,"PeekingIterator")," \u7c7b\uff1a"),(0,o.kt)("div",{class:"original__bRMd"},(0,o.kt)("div",null,(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("code",null,"PeekingIterator(int[] nums)")," \u4f7f\u7528\u6307\u5b9a\u6574\u6570\u6570\u7ec4 ",(0,o.kt)("code",null,"nums")," \u521d\u59cb\u5316\u8fed\u4ee3\u5668\u3002"),(0,o.kt)("li",null,(0,o.kt)("code",null,"int next()")," \u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u4e0b\u4e00\u4e2a\u5143\u7d20\uff0c\u5e76\u5c06\u6307\u9488\u79fb\u52a8\u5230\u4e0b\u4e2a\u5143\u7d20\u5904\u3002"),(0,o.kt)("li",null,(0,o.kt)("code",null,"bool hasNext()")," \u5982\u679c\u6570\u7ec4\u4e2d\u5b58\u5728\u4e0b\u4e00\u4e2a\u5143\u7d20\uff0c\u8fd4\u56de ",(0,o.kt)("code",null,"true")," \uff1b\u5426\u5219\uff0c\u8fd4\u56de ",(0,o.kt)("code",null,"false")," \u3002"),(0,o.kt)("li",null,(0,o.kt)("code",null,"int peek()")," \u8fd4\u56de\u6570\u7ec4\u4e2d\u7684\u4e0b\u4e00\u4e2a\u5143\u7d20\uff0c\u4f46 ",(0,o.kt)("strong",null,"\u4e0d")," \u79fb\u52a8\u6307\u9488\u3002")),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",null,"\u793a\u4f8b\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("strong",null,"\u8f93\u5165\uff1a"),'["PeekingIterator", "next", "peek", "next", "next", "hasNext"] [[[1, 2, 3]], [], [], [], [], []]',(0,o.kt)("strong",null,"\u8f93\u51fa\uff1a"),"[null, 1, 2, 2, 3, false]",(0,o.kt)("strong",null,"\u89e3\u91ca\uff1a"),"PeekingIterator peekingIterator = new PeekingIterator([1, 2, 3]); // [",(0,o.kt)("em",null,(0,o.kt)("strong",null,"1")),",2,3] peekingIterator.next();    // \u8fd4\u56de 1 \uff0c\u6307\u9488\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5143\u7d20 [1,",(0,o.kt)("em",null,(0,o.kt)("strong",null,"2")),",3] peekingIterator.peek();    // \u8fd4\u56de 2 \uff0c\u6307\u9488\u672a\u53d1\u751f\u79fb\u52a8 [1,",(0,o.kt)("em",null,(0,o.kt)("strong",null,"2")),",3] peekingIterator.next();    // \u8fd4\u56de 2 \uff0c\u6307\u9488\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5143\u7d20 [1,2,",(0,o.kt)("em",null,(0,o.kt)("strong",null,"3")),"] peekingIterator.next();    // \u8fd4\u56de 3 \uff0c\u6307\u9488\u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a\u5143\u7d20 [1,2,3] peekingIterator.hasNext(); // \u8fd4\u56de False"),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",null,"\u63d0\u793a\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("code",null,"1 <= nums.length <= 1000")),(0,o.kt)("li",null,(0,o.kt)("code",null,"1 <= nums[i] <= 1000")),(0,o.kt)("li",null,"\u5bf9 ",(0,o.kt)("code",null,"next")," \u548c ",(0,o.kt)("code",null,"peek")," \u7684\u8c03\u7528\u5747\u6709\u6548"),(0,o.kt)("li",null,(0,o.kt)("code",null,"next"),"\u3001",(0,o.kt)("code",null,"hasNext")," \u548c ",(0,o.kt)("code",null,"peek "),"\u6700\u591a\u8c03\u7528\xa0 ",(0,o.kt)("code",null,"1000")," \u6b21")))),(0,o.kt)("p",null,"\xa0"),(0,o.kt)("p",null,(0,o.kt)("strong",null,"\u8fdb\u9636\uff1a"),"\u4f60\u5c06\u5982\u4f55\u62d3\u5c55\u4f60\u7684\u8bbe\u8ba1\uff1f\u4f7f\u4e4b\u53d8\u5f97\u901a\u7528\u5316\uff0c\u4ece\u800c\u9002\u5e94\u6240\u6709\u7684\u7c7b\u578b\uff0c\u800c\u4e0d\u53ea\u662f\u6574\u6570\u578b\uff1f"),(0,o.kt)("h1",{id:"\u601d\u8def\u5206\u6790"},"\u601d\u8def\u5206\u6790"),(0,o.kt)("p",null,"\u672c\u9898\u7684\u96be\u70b9\u4e3b\u8981\u5728\u4e8e\uff0c\u672c\u6765\u539f\u9898\u7ed9\u6211\u4eec\u63d0\u4f9b\u7684\u6570\u636e\u7ed3\u6784",(0,o.kt)("inlineCode",{parentName:"p"},"Iterator"),"\u53ea\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u4e24\u4e2a\u63a5\u53e3\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"int next()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bool hasNext()"))),(0,o.kt)("p",null,"\u800c\u6211\u4eec\u8981\u5b9e\u73b0\u7684\u6570\u636e\u7ed3\u6784\u8981\u5728\u5176\u57fa\u7840\u4e0a\u518d\u5b9e\u73b0\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"int peek()"),"\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u5c31\u4f1a\u51fa\u73b0\u4e00\u4e2a\u95ee\u9898\uff0c\u4e5f\u5c31\u662f\u6bcf\u6b21\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"next()"),"\u65e0\u7591\u90fd\u4f1a\u4f7f\u5f97\u8fed\u4ee3\u5668\u5411\u540e\u79fb\u52a8\u4e00\u4e2a\u4f4d\u7f6e\uff0c\u4f46\u662f\u6bcf\u6b21\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"peek()"),"\u5374\u4e0d\u4f1a\u3002"),(0,o.kt)("p",null,"\u5176\u5b9e\u5f88\u597d\u63d0\u51fa\u4e00\u4e2a\u89e3\u51b3\u65b9\u6cd5\uff0c\u5c31\u662f\u5728\u6bcf\u6b21\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"next()"),"\u7684\u65f6\u5019\u62ff\u4e00\u4e2a\u6570\u5b57\u5b58\u4e00\u4e0b\uff0c\u4f5c\u4e3a\u4e0b\u6b21\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"peek()"),"\u65f6\u5019\u7684\u8fd4\u56de\u503c\u3002\u4f46\u8fd9\u6837\u4f1a\u51fa\u73b0\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u89c2\u5bdf\u4e00\u4e0b\u793a\u4f8b1\uff0c\u53ef\u4ee5\u53d1\u73b0\uff0c\u5728\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"peek()"),"\u65f6\uff0c\u6307\u9488\u4e0d\u53d1\u751f\u79fb\u52a8\uff0c\u4f46\u662f\u786e\u786e\u5b9e\u5b9e\u5730\uff0c\u6211\u4eec\u83b7\u53d6\u5230\u4e86\u4e0b\u4e00\u4e2a\u53d8\u91cf\u7684\u503c\u3002\u8fd9\u9898\u7684\u96be\u70b9\u5c31\u5728\u4e8e\uff0c\u6211\u4eec\u671f\u671b\u80fd\u591f\u5728\u83b7\u53d6\u4e0b\u4e00\u4e2a\u5143\u7d20\u7684\u503c\u7684\u65f6\u5019\u4e0d\u79fb\u52a8\u6307\u9488\u3002\u4f46",(0,o.kt)("inlineCode",{parentName:"p"},"next()"),"\u4e00\u5b9a\u4f1a\u79fb\u52a8\u6307\u9488\u3002"),(0,o.kt)("p",null,"\u601d\u8def\u53ef\u4ee5\u8fd9\u6837\uff1a\u5148\u7528\u4e00\u4e2a\u53d8\u91cf\u4e00\u76f4\u5b58\u4f4f\u4e0b\u4e00\u4e2a\u5143\u7d20\u7684\u503c\uff0c\u5982\u679c\u9047\u5230\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"peek()"),"\u5c31\u8fd4\u56de\u8fd9\u4e2a\u9884\u5148\u5b58\u7684\u503c\uff0c\u5982\u679c\u9047\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"next()"),"\u4e5f\u8fd4\u56de\u8fd9\u4e2a\u9884\u5148\u5b58\u7684\u503c\u5e76\u4e14\u66f4\u65b0\u9884\u5148\u5b58\u7684\u503c\u4e3a\u4e0b\u4e00\u4e2a\u3002"),(0,o.kt)("h1",{id:"c-\u4ee3\u7801"},"C++ \u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class PeekingIterator : public Iterator {\npublic:\n    PeekingIterator(const vector<int>& nums) : Iterator(nums) {\n        flag = Iterator::hasNext();\n        if (flag) {\n            nextElement = Iterator::next();\n        }\n    }\n    \n    int peek() {\n        return nextElement;\n    }\n    \n    int next() {\n        int ret = nextElement;\n        flag = Iterator::hasNext();\n        if (flag) {\n            nextElement = Iterator::next();\n        }\n        return ret;\n    }\n    \n    bool hasNext() const {\n        return flag;\n    }\nprivate:\n    int nextElement;\n    bool flag;\n};\n")))}s.isMDXComponent=!0}}]);