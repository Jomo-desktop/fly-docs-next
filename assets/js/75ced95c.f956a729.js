"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[55158],{99003:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"ToolsDoc/fly-tools/flash","title":"\u529f\u80fd\u6f14\u793a","description":"\u652f\u6301\u4e00\u952e\u590d\u5236\u8bbe\u5907ID\uff0c\u81ea\u52a8\u8bc6\u522bID\u5e76\u4e14\u524d\u9762\u5bf9\u5e94\u7684\u914d\u7f6e\u6dfb\u52a0serial \uff0cdevice:*","source":"@site/docs/ToolsDoc/fly-tools/flash.mdx","sourceDirName":"ToolsDoc/fly-tools","slug":"/ToolsDoc/fly-tools/flash","permalink":"/fly-docs-next/docs/ToolsDoc/fly-tools/flash","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ToolsDoc/fly-tools/flash.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1727593241000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4,"sidebar_label":"\u56fa\u4ef6\u7f16\u8bd1"},"sidebar":"toolsdocSidebar","previous":{"title":"\u641c\u7d22ID","permalink":"/fly-docs-next/docs/ToolsDoc/fly-tools/id"},"next":{"title":"\u751f\u6210\u8d1f\u8f7d\u56fe\u7b49","permalink":"/fly-docs-next/docs/ToolsDoc/fly-tools/utils"}}');var o=n(86070),t=n(15658),i=n(63436);const c={sidebar_position:4,sidebar_label:"\u56fa\u4ef6\u7f16\u8bd1"},a="\u529f\u80fd\u6f14\u793a",r={},d=[];function h(e){const s={admonition:"admonition",code:"code",h1:"h1",header:"header",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"\u529f\u80fd\u6f14\u793a",children:"\u529f\u80fd\u6f14\u793a"})}),"\n",(0,o.jsx)(i.A,{image:n(66632).A,size:"100%",align:"left"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["\u652f\u6301\u4e00\u952e\u590d\u5236\u8bbe\u5907ID\uff0c\u81ea\u52a8\u8bc6\u522bID\u5e76\u4e14\u524d\u9762\u5bf9\u5e94\u7684\u914d\u7f6e\u6dfb\u52a0",(0,o.jsx)(s.strong,{children:"serial:"})," \uff0c",(0,o.jsx)(s.strong,{children:"canbus_uuid:"})," \uff0c",(0,o.jsx)(s.strong,{children:"device:"})]}),"\n",(0,o.jsx)(s.li,{children:"\u652f\u6301CAN\u901f\u7387\u4e0eCAN\u7f13\u5b58\u4fee\u6539\uff0c\u53ef\u65b9\u4fbf\u73a9\u5bb6\u81ea\u5b9a\u4e49CAN"}),"\n",(0,o.jsx)(s.li,{children:"\u652f\u6301\u6444\u50cf\u5934\u8bbe\u5907\u67e5\u8be2\uff0c\u907f\u514d\u4e86\u73a9\u5bb6\u641c\u7d22\u6444\u50cf\u5934\u7684\u9ebb\u70e6"}),"\n"]}),"\n",(0,o.jsx)(s.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"\u8bf7\u6ce8\u610fFLY-Tools\u4e0d\u4f1a\u81ea\u52a8\u521b\u5efacan\u914d\u7f6e\u9700\u8981\u81ea\u884c\u521b\u5efaCAN\u914d\u7f6e\u624d\u53ef\u4ee5\u4f7f\u7528CAN\u901f\u7387\u4e0eCAN\u7f13\u5b58\u4fee\u6539"}),"\n"]})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"\u8bf7\u63d0\u4f9bSSH\u4f7f\u7528\u7f51\u7edc\u8fde\u63a5\u5230\u4f60\u7684\u7528\u6237\u540e\u6267\u884c\u4e0b\u65b9\u547d\u4ee4"}),"\n",(0,o.jsx)(s.li,{children:"Ubuntu\u6682\u65f6\u4e0d\u652f\u6301\u6b64\u529f\u80fd"}),"\n"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:'sudo /bin/sh -c "cat > /etc/network/interfaces.d/can0" << EOF\nallow-hotplug can0\niface can0 can static\n    bitrate 1000000\n    up ifconfig $IFACE txqueuelen 1024\n    pre-up ip link set can0 type can bitrate 1000000\n    pre-up ip link set can0 txqueuelen 1024\nEOF\n'})})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},66632:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/home-a1934df127c6c0bf53aeecf81bbfc6ad.gif"}}]);