"use strict";(self.webpackChunkalgorithm_station=self.webpackChunkalgorithm_station||[]).push([[3115],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,f=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6988:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),a=["components"],i={},u="16 \u65e5 No.382 \u94fe\u8868\u968f\u673a\u8282\u70b9",c={unversionedId:"leetcode/2022/1/16",id:"leetcode/2022/1/16",title:"16 \u65e5 No.382 \u94fe\u8868\u968f\u673a\u8282\u70b9",description:"\u539f\u8d34\u5730\u5740\uff1ahttps://dawnmagnet.github.io/algorithm-station/docs/2022/1/16",source:"@site/docs/leetcode/2022/1/16.md",sourceDirName:"leetcode/2022/1",slug:"/leetcode/2022/1/16",permalink:"/algorithm-station/docs/leetcode/2022/1/16",editUrl:"https://github.com/DawnMagnet/algorithm-station/edit/main/website/docs/leetcode/2022/1/16.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"15\u65e5 No.1716 \u8ba1\u7b97\u529b\u6263\u94f6\u884c\u7684\u94b1",permalink:"/algorithm-station/docs/leetcode/2022/1/15"},next:{title:"17 \u65e5 No.1220 \u7edf\u8ba1\u5143\u97f3\u5b57\u6bcd\u5e8f\u5217\u7684\u6570\u76ee",permalink:"/algorithm-station/docs/leetcode/2022/1/17"}},p=[],d={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"16-\u65e5-no382-\u94fe\u8868\u968f\u673a\u8282\u70b9"},"16 \u65e5 No.382 \u94fe\u8868\u968f\u673a\u8282\u70b9"),(0,l.kt)("p",null,"\u539f\u8d34\u5730\u5740\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://dawnmagnet.github.io/algorithm-station/docs/2022/1/16"},"https://dawnmagnet.github.io/algorithm-station/docs/2022/1/16")),(0,l.kt)("p",null,"\u7ed9\u4f60\u4e00\u4e2a\u5355\u94fe\u8868\uff0c\u968f\u673a\u9009\u62e9\u94fe\u8868\u7684\u4e00\u4e2a\u8282\u70b9\uff0c\u5e76\u8fd4\u56de\u76f8\u5e94\u7684\u8282\u70b9\u503c\u3002\u6bcf\u4e2a\u8282\u70b9 \u88ab\u9009\u4e2d\u7684\u6982\u7387\u4e00\u6837 \u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u5b9e\u73b0 Solution \u7c7b\uff1a")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Solution(ListNode head)")," \u4f7f\u7528\u6574\u6570\u6570\u7ec4\u521d\u59cb\u5316\u5bf9\u8c61\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"int getRandom()")," \u4ece\u94fe\u8868\u4e2d\u968f\u673a\u9009\u62e9\u4e00\u4e2a\u8282\u70b9\u5e76\u8fd4\u56de\u8be5\u8282\u70b9\u7684\u503c\u3002\u94fe\u8868\u4e2d\u6240\u6709\u8282\u70b9\u88ab\u9009\u4e2d\u7684\u6982\u7387\u76f8\u7b49\u3002")),(0,l.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\u8f93\u5165\n["Solution", "getRandom", "getRandom", "getRandom", "getRandom", "getRandom"]\n[[[1, 2, 3]], [], [], [], [], []]\n\u8f93\u51fa\n[null, 1, 3, 2, 2, 3]\n\n\u89e3\u91ca\nSolution solution = new Solution([1, 2, 3]);\nsolution.getRandom(); // \u8fd4\u56de 1\nsolution.getRandom(); // \u8fd4\u56de 3\nsolution.getRandom(); // \u8fd4\u56de 2\nsolution.getRandom(); // \u8fd4\u56de 2\nsolution.getRandom(); // \u8fd4\u56de 3\n// getRandom() \u65b9\u6cd5\u5e94\u968f\u673a\u8fd4\u56de 1\u30012\u30013\u4e2d\u7684\u4e00\u4e2a\uff0c\u6bcf\u4e2a\u5143\u7d20\u88ab\u8fd4\u56de\u7684\u6982\u7387\u76f8\u7b49\u3002\n')),(0,l.kt)("p",null,"\u63d0\u793a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u94fe\u8868\u4e2d\u7684\u8282\u70b9\u6570\u5728\u8303\u56f4 ","[1, $10^4$]"," \u5185"),(0,l.kt)("li",{parentName:"ul"},"$-10^4$ <= ",(0,l.kt)("inlineCode",{parentName:"li"},"Node.val")," <= $10^4$"),(0,l.kt)("li",{parentName:"ul"},"\u81f3\u591a\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"getRandom")," \u65b9\u6cd5 $10^4$ \u6b21")),(0,l.kt)("p",null,"\u8fdb\u9636\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u94fe\u8868\u975e\u5e38\u5927\u4e14\u957f\u5ea6\u672a\u77e5\uff0c\u8be5\u600e\u4e48\u5904\u7406\uff1f"),(0,l.kt)("li",{parentName:"ul"},"\u4f60\u80fd\u5426\u5728\u4e0d\u4f7f\u7528\u989d\u5916\u7a7a\u95f4\u7684\u60c5\u51b5\u4e0b\u89e3\u51b3\u6b64\u95ee\u9898\uff1f")),(0,l.kt)("p",null,"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/linked-list-random-node"},"https://leetcode-cn.com/problems/linked-list-random-node"),"\n\u8457\u4f5c\u6743\u5f52\u9886\u6263\u7f51\u7edc\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u5b98\u65b9\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002"),(0,l.kt)("h1",{id:"\u601d\u8def\u5206\u6790"},"\u601d\u8def\u5206\u6790"),(0,l.kt)("p",null,"\u8fd9\u79cd\u9898\u76ee\u4e00\u822c\u90fd\u662f\u8868\u9762\u7b80\u5355\uff0c\u505a\u51fa\u6765\u4e5f\u5f88\u7b80\u5355\uff0c\u4f46\u8981\u662f\u5b8c\u6210\u9898\u76ee\u4e2d\u6240\u6709\u8981\u6c42\u7684\u8fdb\u9636\u4efb\u52a1\u8fd8\u662f\u5f88\u6709\u6311\u6218\u6027\u7684\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u9898\u4e2d\uff0c\u6211\u4eec\u624b\u91cc\u4e0e\u5176\u8bf4\u6709\u4e00\u4e2a\u94fe\u8868\uff0c\u5012\u4e0d\u5982\u8bf4\u6709\u4e00\u4e2a\u672a\u77e5\u957f\u5ea6\u7684\u6570\u636e\u6d41\u3002\u5b9e\u9645\u4e0a\u672c\u9898\u771f\u6b63\u60f3\u8981\u6311\u6218\u6211\u4eec\u7684\u662f\u5982\u4f55\u5728\u4e00\u4e2a\u672a\u77e5\u957f\u5ea6\u7684\u6570\u636e\u6d41\u4e2d\u53bb\u53d6\u968f\u673a\u6570\uff08\u6839\u636e\u8fdb\u9636\u4e2d\u7684\u8981\u6c42\u53ef\u4ee5\u77e5\u9053\uff09\uff0c\u8fd8\u8981\u6c42\u4e0d\u80fd\u4f7f\u7528\u5e38\u6570\u7a7a\u95f4\uff0c\u5982\u679c\u8fd9\u4e2a\u6570\u636e\u6d41\u5f88\u957f\u4f46\u7b97\u6cd5\u9700\u8981\u7684\u6bd4\u5e38\u6570\u7a7a\u95f4\u5927\uff08\u5982$O(n)$\uff09\uff0c\u90a3\u5c06\u4f1a\u662f\u4e00\u4e2a\u975e\u5e38\u53ef\u6015\u7684\u7b97\u6cd5\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\u672c\u9898\u5c31\u8981\u9686\u91cd\u4ecb\u7ecd\u4e00\u4e2a\u7b97\u6cd5\uff0c\u53eb\u505a",(0,l.kt)("strong",{parentName:"p"},"\u84c4\u6c34\u6c60\u62bd\u6837"),"\u3002\u4e0d\u61c2\u4e5f\u5f88\u6b63\u5e38\uff0c\u8fd9\u79cd\u4e1c\u897f\u5c31\u662f\u4e00\u56de\u751f\u4e8c\u56de\u719f\uff0c\u591a\u770b\u770b\u5c31\u77e5\u9053\u4e86\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8bb0\u4f4f\u4e00\u4ef6\u4e8b\uff0c\u84c4\u6c34\u6c60\u62bd\u6837\u8fd9\u4e2a\u7b97\u6cd5\u5c31\u662f\u7528\u6765\u505a",(0,l.kt)("strong",{parentName:"p"},"\u5728\u672a\u77e5\u957f\u5ea6\u7684\u6570\u636e\u6d41\u4e2d\u83b7\u53d6\u968f\u673a\u6570\u7684"))),(0,l.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u5df2\u7ecf\u5904\u7406\u4e86$n$\u4e2a\u6570\u5b57\uff0c\u83b7\u5f97\u4e86\u524d$n$\u4e2a\u6570\u5b57\u4e2d\u7684\u4e00\u4e2a\u968f\u673a\u6570\u7ed3\u679c\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7ed3\u679c\u5bf9\u4e8e\u524d$n$\u4e2a\u6570\u7684\u6982\u7387\u4e00\u5b9a\u662f\u76f8\u540c\u7684\uff0c\u4e5f\u5c31\u662f\u6bcf\u4e2a\u6570\u5b57\u6709$\\frac1n$\u7684\u6982\u7387\u53d6\u5230\u3002\u5728\u8fd9\u79cd\u80cc\u666f\u4e0b\uff0c\u5982\u679c\u6211\u4eec\u52a0\u5165\u4e00\u4e2a\u65b0\u7684\u6570\u5b57\uff0c\u4e5f\u5c31\u662f\u7b2c$n+1$\u4e2a\u6570\u5b57\uff0c\u8fd9\u79cd\u65f6\u5019\u6211\u4eec\u80af\u5b9a\u5e0c\u671b\uff0c\u6240\u6709\u6570\u5b57\u88ab\u53d6\u5230\u7684\u6982\u7387\u90fd\u662f$\\frac1{n+1}$\uff0c\u5f53\u7136\u4e5f\u5305\u542b\u8fd9\u4e2a\u65b0\u52a0\u8fdb\u6765\u7684\u6570\u5b57\u3002"),(0,l.kt)("p",null,"\u90a3\u4e48\u5982\u4f55\u5b8c\u6210\u8fd9\u4e2a\u6982\u7387\u8f6c\u53d8\u7684\u8fc7\u7a0b\u5462\uff1f\u7b54\u6848\u5c31\u662f\u786e\u4fdd\u7b2c$n+1$\u4e2a\u6570\u5b57\u88ab\u53d6\u5230\u7684\u6982\u7387\u662f$\\frac1{n+1}$\u3002\u56e0\u4e3a\u5728\u786e\u4fdd\u4e86\u8fd9\u4e2a\u4e8b\u60c5\u4e4b\u540e\uff0c\u56e0\u4e3a\u53d6\u5230\u524d$n$\u4e2a\u6570\u5b57\u7684\u6982\u7387\u662f\u5747\u7b49\u7684\uff0c\u5982\u679c\u5728\u65b0\u52a0\u5165\u7684\u7b2c$n+1$\u4e2a\u6570\u5b57\u4fdd\u6301$\\frac1{n+1}$\u6982\u7387\uff0c\u90a3\u4e48\u6211\u4eec\u53ef\u4ee5\u4fdd\u8bc1\u524d$n$\u4e2a\u6570\u5b57\u4e5f\u662f\u8fd9\u4e2a\u6982\u7387\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4ee5\u4e0a\u662f\u4e00\u4e2a\u5bf9\u84c4\u6c34\u6c60\u62bd\u6837\u7b97\u6cd5\u7684\u7b80\u5355\u8bf4\u660e\u548c\u8bc1\u660e\u3002\u6709\u5174\u8da3\u7684\u540c\u5b66\u53ef\u4ee5\u5728\u7f51\u4e0a\u81ea\u884c\u67e5\u9605\u66f4\u591a\u8d44\u6599\u3002")),(0,l.kt)("p",null,"\u8bb2\u5b8c\u4e86\u8fd9\u4e48\u4e00\u4e9b\u4e2a\u6b65\u9aa4\uff0c\u7b97\u6cd5\u5e72\u7684\u4ec0\u4e48\u4e8b\u4e5f\u5c31\u5f88\u660e\u4e86\u4e86\u3002\u5bf9\u4e8e\u7b2c$n$\u4e2a\u6570\u5b57\uff0c\u6211\u4eec\u9996\u5148\u53d6\u4e00\u4e2a\u968f\u673a\u6570\uff0c\u5982\u679c\u6982\u7387\u5c0f\u4e8e$\\frac1n$\uff0c\u6211\u4eec\u5c31\u5c06\u7ed3\u679c\u6539\u4e3a\u7b2c$n$\u4e2a\u6570\u5b57\uff0c\u5426\u5219\u5c31\u4e0d\u52a8\uff0c\uff08\u6570\u636e\u6d41\uff09\u7ee7\u7eed\u5f80\u4e0b\u8d70\u3002"),(0,l.kt)("p",null,"\u5728LeetCode\u5e73\u53f0\u4e0a\uff0cRust\u652f\u6301\u7b2c\u4e09\u65b9\u7684\u968f\u673a\u6570\u5e93\uff0c\u540d\u5b57\u53eb\u505arand\uff0c\u5177\u4f53\u7684\u6587\u6863\u53ef\u4ee5\u5728",(0,l.kt)("a",{parentName:"p",href:"https://docs.rs/rand/latest/rand/"},"https://docs.rs/rand/latest/rand/"),"\u8fdb\u884c\u67e5\u8be2\u3002"),(0,l.kt)("h1",{id:"rust-\u4ee3\u7801"},"Rust \u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},"use rand::prelude::*;\nstruct Solution {\n    node: Option<Box<ListNode>>\n}\nimpl Solution {\n    fn new(head: Option<Box<ListNode>>) -> Self {\n        Solution { node: head }\n    }\n    fn get_random(&self) -> i32 {\n        let mut node = self.node.clone();\n        let mut res = 0;\n        let mut factor = 1;\n        let mut rng = rand::thread_rng();\n        while let Some(node_some) = node {\n            let rnd: i32 = rng.gen();\n            if rnd % factor == 0 {\n                res = node_some.val;\n            }\n            factor += 1;\n            node = node_some.next;\n        }\n        res\n    }\n}\n")))}s.isMDXComponent=!0}}]);