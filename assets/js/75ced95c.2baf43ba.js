"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["12058"],{56475:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>i});var o=JSON.parse('{"id":"ToolsDoc/fly-tools/flash","title":"\u529F\u80FD\u6F14\u793A","description":"\u652F\u6301\u4E00\u952E\u590D\u5236\u8BBE\u5907ID\uFF0C\u81EA\u52A8\u8BC6\u522BID\u5E76\u4E14\u524D\u9762\u5BF9\u5E94\u7684\u914D\u7F6E\u6DFB\u52A0serial \uFF0Cdevice:*","source":"@site/docs/ToolsDoc/fly-tools/flash.mdx","sourceDirName":"ToolsDoc/fly-tools","slug":"/ToolsDoc/fly-tools/flash","permalink":"/fly-docs-next/docs/ToolsDoc/fly-tools/flash","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ToolsDoc/fly-tools/flash.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732242947000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"\u56FA\u4EF6\u7F16\u8BD1"},"sidebar":"toolsdocSidebar","previous":{"title":"\u641C\u7D22ID","permalink":"/fly-docs-next/docs/ToolsDoc/fly-tools/id"},"next":{"title":"\u751F\u6210\u8D1F\u8F7D\u56FE\u7B49","permalink":"/fly-docs-next/docs/ToolsDoc/fly-tools/utils"}}'),s=t("52676"),l=t("79938");let i={sidebar_position:4,sidebar_label:"\u56FA\u4EF6\u7F16\u8BD1"},r="\u529F\u80FD\u6F14\u793A",c={},a=[];function d(e){let n={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{ImageView:o}=n;return!o&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u529F\u80FD\u6F14\u793A",children:"\u529F\u80FD\u6F14\u793A"})}),"\n",(0,s.jsx)(o,{image:t(58967).Z,size:"100%",align:"left"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u652F\u6301\u4E00\u952E\u590D\u5236\u8BBE\u5907ID\uFF0C\u81EA\u52A8\u8BC6\u522BID\u5E76\u4E14\u524D\u9762\u5BF9\u5E94\u7684\u914D\u7F6E\u6DFB\u52A0",(0,s.jsx)(n.strong,{children:"serial:"})," \uFF0C",(0,s.jsx)(n.strong,{children:"canbus_uuid:"})," \uFF0C",(0,s.jsx)(n.strong,{children:"device:"})]}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301CAN\u901F\u7387\u4E0ECAN\u7F13\u5B58\u4FEE\u6539\uFF0C\u53EF\u65B9\u4FBF\u73A9\u5BB6\u81EA\u5B9A\u4E49CAN"}),"\n",(0,s.jsx)(n.li,{children:"\u652F\u6301\u6444\u50CF\u5934\u8BBE\u5907\u67E5\u8BE2\uFF0C\u907F\u514D\u4E86\u73A9\u5BB6\u641C\u7D22\u6444\u50CF\u5934\u7684\u9EBB\u70E6"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8BF7\u6CE8\u610FFLY-Tools\u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFAcan\u914D\u7F6E\u9700\u8981\u81EA\u884C\u521B\u5EFACAN\u914D\u7F6E\u624D\u53EF\u4EE5\u4F7F\u7528CAN\u901F\u7387\u4E0ECAN\u7F13\u5B58\u4FEE\u6539"}),"\n"]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8BF7\u63D0\u4F9BSSH\u4F7F\u7528\u7F51\u7EDC\u8FDE\u63A5\u5230\u4F60\u7684\u7528\u6237\u540E\u6267\u884C\u4E0B\u65B9\u547D\u4EE4"}),"\n",(0,s.jsx)(n.li,{children:"Ubuntu\u6682\u65F6\u4E0D\u652F\u6301\u6B64\u529F\u80FD"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo /bin/sh -c "cat > /etc/network/interfaces.d/can0" << EOF\nallow-hotplug can0\niface can0 can static\n    bitrate 1000000\n    up ifconfig $IFACE txqueuelen 1024\n    pre-up ip link set can0 type can bitrate 1000000\n    pre-up ip link set can0 txqueuelen 1024\nEOF\n'})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},58967:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/home-a1934df127c6c0bf53aeecf81bbfc6ad.gif"},79938:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var o=t(75271);let s={},l=o.createContext(s);function i(e){let n=o.useContext(l);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);