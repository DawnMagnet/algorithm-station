"use strict";(self.webpackChunkalgorithm_station=self.webpackChunkalgorithm_station||[]).push([[4133],{3905:function(e,t,n){n.d(t,{Zo:function(){return a},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},a=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,a=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,i(i({ref:t},a),{},{components:n})):r.createElement(m,i({ref:t},a))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2879:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return a}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],c={},s="26\u65e5 No.1078 Bigram\u5206\u8bcd",u={unversionedId:"leetcode/2021/12/26",id:"leetcode/2021/12/26",title:"26\u65e5 No.1078 Bigram\u5206\u8bcd",description:'\u7ed9\u51fa\u7b2c\u4e00\u4e2a\u8bcd&nbsp;first \u548c\u7b2c\u4e8c\u4e2a\u8bcd&nbsp;second\uff0c\u8003\u8651\u5728\u67d0\u4e9b\u6587\u672c&nbsp;text&nbsp;\u4e2d\u53ef\u80fd\u4ee5 "first second third" \u5f62\u5f0f\u51fa\u73b0\u7684\u60c5\u51b5\uff0c\u5176\u4e2d&nbsp;second&nbsp;\u7d27\u968f&nbsp;first&nbsp;\u51fa\u73b0\uff0cthird&nbsp;\u7d27\u968f&nbsp;second&nbsp;\u51fa\u73b0\u3002',source:"@site/docs/leetcode/2021/12/26.md",sourceDirName:"leetcode/2021/12",slug:"/leetcode/2021/12/26",permalink:"/algorithm-station/docs/leetcode/2021/12/26",editUrl:"https://github.com/DawnMagnet/algorithm-station/edit/main/website/docs/leetcode/2021/12/26.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"24\u65e5 No.1705 \u5403\u82f9\u679c\u7684\u6700\u5927\u6570\u76ee",permalink:"/algorithm-station/docs/leetcode/2021/12/24"},next:{title:"27\u65e5 No.825 \u9002\u9f84\u7684\u670b\u53cb",permalink:"/algorithm-station/docs/leetcode/2021/12/27"}},a=[],p={toc:a};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"26\u65e5-no1078-bigram\u5206\u8bcd"},"26\u65e5 No.1078 Bigram\u5206\u8bcd"),(0,l.kt)("div",{class:"css-1a7yjpy-ZoomWrapper e13l6k8o9"},(0,l.kt)("div",{class:"content__1Y2H"},(0,l.kt)("div",{class:"notranslate"},(0,l.kt)("p",null,"\u7ed9\u51fa\u7b2c\u4e00\u4e2a\u8bcd\xa0",(0,l.kt)("code",null,"first")," \u548c\u7b2c\u4e8c\u4e2a\u8bcd\xa0",(0,l.kt)("code",null,"second"),"\uff0c\u8003\u8651\u5728\u67d0\u4e9b\u6587\u672c\xa0",(0,l.kt)("code",null,"text"),"\xa0\u4e2d\u53ef\u80fd\u4ee5 ",(0,l.kt)("code",null,'"first second third"')," \u5f62\u5f0f\u51fa\u73b0\u7684\u60c5\u51b5\uff0c\u5176\u4e2d\xa0",(0,l.kt)("code",null,"second"),"\xa0\u7d27\u968f\xa0",(0,l.kt)("code",null,"first"),"\xa0\u51fa\u73b0\uff0c",(0,l.kt)("code",null,"third"),"\xa0\u7d27\u968f\xa0",(0,l.kt)("code",null,"second"),"\xa0\u51fa\u73b0\u3002"),(0,l.kt)("p",null,'\u5bf9\u4e8e\u6bcf\u79cd\u8fd9\u6837\u7684\u60c5\u51b5\uff0c\u5c06\u7b2c\u4e09\u4e2a\u8bcd "',(0,l.kt)("code",null,"third"),'" \u6dfb\u52a0\u5230\u7b54\u6848\u4e2d\uff0c\u5e76\u8fd4\u56de\u7b54\u6848\u3002'),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,l.kt)("pre",null,'\u8f93\u5165\uff1atext = "alice is a good girl she is a good student", first = "a", second = "good" \u8f93\u51fa\uff1a["girl","student"]'),(0,l.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,l.kt)("pre",null,'\u8f93\u5165\uff1atext = "we will we will rock you", first = "we", second = "will" \u8f93\u51fa\uff1a["we","rock"]'),(0,l.kt)("p",null,"\xa0"),(0,l.kt)("p",null,"\u63d0\u793a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= text.length <= 1000")),(0,l.kt)("li",null,(0,l.kt)("code",null,"text"),"\xa0\u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u548c\u7a7a\u683c\u7ec4\u6210"),(0,l.kt)("li",null,(0,l.kt)("code",null,"text")," \u4e2d\u7684\u6240\u6709\u5355\u8bcd\u4e4b\u95f4\u90fd\u7531 \u5355\u4e2a\u7a7a\u683c\u5b57\u7b26 \u5206\u9694"),(0,l.kt)("li",null,(0,l.kt)("code",null,"1 <= first.length, second.length <= 10")),(0,l.kt)("li",null,(0,l.kt)("code",null,"first")," \u548c\xa0",(0,l.kt)("code",null,"second"),"\xa0\u7531\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u7ec4\u6210"))))),(0,l.kt)("h1",{id:"\u601d\u8def\u5206\u6790"},"\u601d\u8def\u5206\u6790"),(0,l.kt)("p",null,"\u8fd9\u9053\u9898\u5c31\u53ea\u9700\u5728\u904d\u5386\u6570\u7ec4\u7684\u540c\u65f6\u5224\u65ad\u4e00\u4e0b\u662f\u5426\u6ee1\u8db3\u9898\u76ee\u6240\u7ed9\u7684\u6761\u4ef6\u5373\u53ef"),(0,l.kt)("h1",{id:"rust-\u4ee3\u7801"},"Rust \u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-rust"},'impl Solution {\n    pub fn find_ocurrences(text: String, first: String, second: String) -> Vec<String> {\n        let mut is_one = false;\n        let mut is_two = false;\n        let mut res = vec![];\n        let mut pre1 = "";\n        let mut pre2 = "";\n        for word in text.split(" ") {\n            if pre1 == first && pre2 == second {\n                res.push(word.to_string());\n            }\n            pre1 = pre2;\n            pre2 = word;\n        }\n        res\n    }\n}\n')))}d.isMDXComponent=!0}}]);