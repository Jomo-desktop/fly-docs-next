"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["75985"],{28294:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"DebugDoc/BasicTutorial/index","title":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 SSH \u043A \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443","description":"* \u042D\u0442\u043E\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043A \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443 FLY, \u0434\u043B\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 \u043E\u043D \u0441\u043B\u0443\u0436\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0438.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/DebugDoc/BasicTutorial/index.mdx","sourceDirName":"DebugDoc/BasicTutorial","slug":"/DebugDoc/BasicTutorial/","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/BasicTutorial/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"debugdocSidebar","previous":{"title":"\u4E0A\u4F4D\u673A\u57FA\u7840\u6559\u7A0B","permalink":"/fly-docs-next/ru/docs/category/\u4E0A\u4F4D\u673A\u57FA\u7840\u6559\u7A0B"},"next":{"title":"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0441\u0435\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 SSH","permalink":"/fly-docs-next/ru/docs/DebugDoc/BasicTutorial/Internet"}}'),t=i("52676"),r=i("79938");let l={sidebar_position:1},c="\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 SSH \u043A \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443",a={},d=[{value:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0440\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A SSH \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430",id:"\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E-\u043F\u043E\u0440\u0442\u0430-\u0434\u043B\u044F-\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F-\u043A-ssh-\u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E-\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430",level:2},{value:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u0442\u0435\u0432\u043E\u0433\u043E IP \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A SSH \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430",id:"\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u0441\u0435\u0442\u0435\u0432\u043E\u0433\u043E-ip-\u0434\u043B\u044F-\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F-\u043A-ssh-\u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E-\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430",level:2}];function o(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{ImageView:s,TabItem:l,Tabs:c}=n;return!s&&x("ImageView",!0),!l&&x("TabItem",!0),!c&&x("Tabs",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435-ssh-\u043A-\u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443-\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443",children:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 SSH \u043A \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u042D\u0442\u043E\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u043F\u0440\u0438\u043C\u0435\u043D\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u043A \u0432\u0435\u0440\u0445\u043D\u0435\u043C\u0443 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443 FLY, \u0434\u043B\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 \u043E\u043D \u0441\u043B\u0443\u0436\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u043A\u0438."}),"\n",(0,t.jsx)(n.li,{children:"\u0415\u0441\u043B\u0438 \u0432\u044B \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0435\u0441\u044C \u043A\u043E\u043C\u043F\u0438\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0438 \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0443, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E \u0441\u0435\u0442\u0435\u0432\u043E\u043C\u0443 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044E, \u0430 \u043D\u0435 \u043F\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044E \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u0442."}),"\n"]})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0443 \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u0442 \u0438\u043B\u0438 Wi-Fi."}),"\n",(0,t.jsxs)(n.li,{children:["\u0417\u0430\u0440\u0430\u043D\u0435\u0435 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u044C\u0442\u0435 ",(0,t.jsx)(n.strong,{children:"MobaXterm_Personal"})," \u0438\u043B\u0438 \u0434\u0440\u0443\u0433\u043E\u0439 ",(0,t.jsx)(n.strong,{children:"SSH \u0442\u0435\u0440\u043C\u0438\u043D\u0430\u043B"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u043D\u0430 SD-\u043A\u0430\u0440\u0442\u0435 \u0438\u043B\u0438 M2WE \u0437\u0430\u043F\u0438\u0441\u0430\u043D\u0430 ",(0,t.jsx)(n.strong,{children:"\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0434\u043B\u044F \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430"}),"."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u0415\u0441\u043B\u0438 \u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 \u043D\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E, \u043E\u0442\u0441\u043E\u0435\u0434\u0438\u043D\u0438\u0442\u0435 \u0434\u0440\u0430\u0439\u0432\u0435\u0440\u044B, \u043A\u043E\u043D\u0446\u0435\u0432\u044B\u0435 \u0432\u044B\u043A\u043B\u044E\u0447\u0430\u0442\u0435\u043B\u0438, \u0432\u0435\u043D\u0442\u0438\u043B\u044F\u0442\u043E\u0440\u044B \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u0435\u0440\u0438\u0444\u0435\u0440\u0438\u0439\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430!!!"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u041D\u0430\u043A\u043E\u043D\u0435\u0446, \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u0441\u044C \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0442\u044C \u043A SSH \u0434\u043B\u044F \u0443\u0434\u043E\u0431\u0441\u0442\u0432\u0430 \u043A\u043E\u043C\u043F\u0438\u043B\u044F\u0446\u0438\u0438 \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438!!!"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"\u0414\u043B\u044F \u043A\u043E\u043C\u043F\u0438\u043B\u044F\u0446\u0438\u0438 \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u043F\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044E \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430 \u0447\u0435\u0440\u0435\u0437 Wi-Fi \u0438\u043B\u0438 \u0441\u0435\u0442\u0435\u0432\u043E\u0439 \u043A\u0430\u0431\u0435\u043B\u044C"})}),"\n"]}),"\n",(0,t.jsxs)(c,{children:[(0,t.jsxs)(l,{value:"serial",label:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u043E\u0440\u0442",default:!0,children:[(0,t.jsx)(n.h2,{id:"\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E-\u043F\u043E\u0440\u0442\u0430-\u0434\u043B\u044F-\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F-\u043A-ssh-\u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E-\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430",children:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u043E\u0440\u0442\u0430 \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A SSH \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440 FLY \u043A \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u0430\u0431\u0435\u043B\u044F USB Type-C."}),"\n",(0,t.jsx)(n.li,{children:"\u0414\u043B\u044F \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0435\u0440\u0445\u043D\u0438\u0445 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u043E\u0432 \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u043D\u0430\u0439\u0434\u0438\u0442\u0435 \u0441\u043F\u043E\u0441\u043E\u0431 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E!!"}),"\n"]}),(0,t.jsxs)(c,{children:[(0,t.jsxs)(l,{value:"c8",label:"FLY-C8",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u0440\u0442\u044B FLY-C8"}),"\n"]}),(0,t.jsx)(s,{image:i(85187).Z,size:"40%",align:"center"})]}),(0,t.jsxs)(l,{value:"piv2",label:"FLY-Pi v2",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u0440\u0442\u044B FLY-Pi v2"}),"\n"]}),(0,t.jsx)(s,{image:i(97494).Z,size:"20%",align:"center"})]}),(0,t.jsxs)(l,{value:"piv1",label:"FLY-Pi(\u03C0)",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u0440\u0442\u044B FLY-Pi"}),"\n"]}),(0,t.jsx)(s,{image:i(82174).Z,size:"20%",align:"center"})]}),(0,t.jsxs)(l,{value:"gemini",label:"FLY-Gemini",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u0440\u0442\u044B FLY-Gemini"}),"\n"]}),(0,t.jsx)(s,{image:i(23206).Z,size:"20%",align:"center"})]}),(0,t.jsxs)(l,{value:"minipad",label:"FLY-MiniPad",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u0440\u0442\u044B FLY-MiniPad"}),"\n"]}),(0,t.jsx)(s,{image:i(3686).Z,size:"30%",align:"center"})]}),(0,t.jsxs)(l,{value:"pilite2",label:"FLY-Pi Lite2",default:!0,children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u0440\u0442\u044B FLY-Pi Lite2"}),"\n"]}),(0,t.jsx)(s,{image:i(8312).Z,size:"40%",align:"center"})]})]}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u0415\u0441\u043B\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u043D\u0441\u043A\u043E\u0439 \u043F\u043B\u0430\u0442\u044B \u043A \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0443 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E\u0435, \u043E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0434\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432 \u0438 \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u043F\u043E\u0440\u0442 CH340."}),"\n"]}),(0,t.jsx)(s,{image:i(19063).Z,size:"40%",align:"center"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 ",(0,t.jsx)(n.code,{children:"MobaXterm"}),", \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0435\u0433\u043E \u043A\u0430\u043A \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043E, \u0432\u044B\u0431\u0440\u0430\u0432 \u043F\u043E\u0440\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u0432\u0438\u0434\u0435\u043B\u0438 \u0432 \u0434\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432."]}),"\n"]}),(0,t.jsx)(s,{image:i(25400).Z,size:"40%",align:"center"}),(0,t.jsx)(s,{image:i(91363).Z,size:"40%",align:"center"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u0415\u0441\u043B\u0438 \u0432\u0441\u0435 \u043F\u0440\u043E\u0448\u043B\u043E \u0433\u043B\u0430\u0434\u043A\u043E, \u0432\u044B \u0443\u0432\u0438\u0434\u0438\u0442\u0435 \u044D\u043A\u0440\u0430\u043D \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438."}),"\n"]}),(0,t.jsx)(s,{image:i(88525).Z,size:"40%",align:"center"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u0434\u043E\u0436\u0434\u0438\u0442\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E, \u0438 \u0435\u0441\u043B\u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u044D\u0442\u043E\u0442 \u044D\u043A\u0440\u0430\u043D, \u0437\u043D\u0430\u0447\u0438\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0430\u0441\u044C."}),"\n"]}),(0,t.jsx)(s,{image:i(61305).Z,size:"40%",align:"center"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u0415\u0441\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442 \u044D\u043A\u0440\u0430\u043D \u0432\u0441\u0435 \u0435\u0449\u0435 \u043F\u0443\u0441\u0442, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0440\u0430\u0437 \u043A\u043B\u0430\u0432\u0438\u0448\u0443 Enter."})}),(0,t.jsx)(s,{image:i(23561).Z,size:"40%",align:"center"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u041F\u043E\u0441\u043B\u0435 \u043D\u0430\u0436\u0430\u0442\u0438\u044F \u043D\u0430 Enter \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u0435, \u043A\u0430\u043A \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043E \u043D\u0438\u0436\u0435."})}),(0,t.jsx)(s,{image:i(72957).Z,size:"40%",align:"center"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u0427\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C IP, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0432 ssh: ",(0,t.jsx)(n.code,{children:"ip a | grep inet"})," \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter. \u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430\u0445 \u043D\u0430\u0439\u0434\u0438\u0442\u0435 IP, \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0439 \u0441\u0435\u0433\u043C\u0435\u043D\u0442\u0443 \u0432\u0430\u0448\u0435\u0433\u043E \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u0430."]}),"\n"]}),(0,t.jsx)(s,{image:i(64578).Z,size:"40%",align:"center"})]}),(0,t.jsxs)(l,{value:"net",label:"\u0421\u0435\u0442\u0435\u0432\u043E\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",default:!0,children:[(0,t.jsx)(n.h2,{id:"\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435-\u0441\u0435\u0442\u0435\u0432\u043E\u0433\u043E-ip-\u0434\u043B\u044F-\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F-\u043A-ssh-\u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E-\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430",children:"\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u0442\u0435\u0432\u043E\u0433\u043E IP \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u043A SSH \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0430 ",(0,t.jsx)(n.strong,{children:"\u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u043B\u0430\u0441\u044C"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0432 ",(0,t.jsx)(n.strong,{children:"\u0430\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u0430"}),", \u043A \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D \u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440, \u0435\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u0437\u043D\u0430\u0435\u0442\u0435 \u0435\u0433\u043E IP-\u0430\u0434\u0440\u0435\u0441\u0430."]}),"\n",(0,t.jsxs)(n.li,{children:["\u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044C, \u0447\u0442\u043E \u0432\u044B \u0437\u043D\u0430\u0435\u0442\u0435 ",(0,t.jsx)(n.strong,{children:"\u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430"}),". \u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u044B FLY \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ",(0,t.jsx)(n.strong,{children:"fly"}),", \u043F\u0430\u0440\u043E\u043B\u044C ",(0,t.jsx)(n.strong,{children:"mellow"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"\u0415\u0441\u043B\u0438 \u043F\u043B\u0430\u0442\u0430 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430 \u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0430 \u043A \u0441\u0435\u0442\u0438, \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043A SSH \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C:"}),"\n",(0,t.jsx)(n.li,{children:"\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 MobaXterm, \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u0442\u0435 \u0435\u0433\u043E \u043A\u0430\u043A \u043F\u043E\u043A\u0430\u0437\u0430\u043D\u043E, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 IP, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043B\u0438 \u0440\u0430\u043D\u0435\u0435, \u0438\u043B\u0438 \u043D\u0430\u0439\u0434\u0438\u0442\u0435 \u0435\u0433\u043E \u0432 \u0430\u0434\u043C\u0438\u043D-\u043F\u0430\u043D\u0435\u043B\u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0438\u0437\u0430\u0442\u043E\u0440\u0430."}),"\n"]}),(0,t.jsx)(s,{image:i(25400).Z,size:"40%",align:"center"}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435: \u0437\u0434\u0435\u0441\u044C \u0432\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430"})}),(0,t.jsx)(s,{image:i(92364).Z,size:"40%",align:"center"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u041F\u0440\u0438 \u043F\u0435\u0440\u0432\u043E\u043C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0438 \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u044D\u0442\u043E \u043E\u043A\u043D\u043E, \u043D\u0430\u0436\u043C\u0438\u0442\u0435 ",(0,t.jsx)(n.code,{children:"Accept"}),"."]}),"\n"]}),(0,t.jsx)(s,{image:i(4828).Z,size:"40%",align:"center"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u0432\u0432\u043E\u0434 \u043F\u0430\u0440\u043E\u043B\u044F, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C \u0432\u0435\u0440\u0445\u043D\u0435\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430 \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter."}),"\n"]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435: \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044F, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0435\u0433\u043E \u0438 \u043D\u0430\u0436\u043C\u0438\u0442\u0435 Enter."})}),(0,t.jsxs)(n.p,{children:["\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E \u0434\u043B\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u044B FLY, \u0438\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ",(0,t.jsx)(n.code,{children:"fly"}),", \u043F\u0430\u0440\u043E\u043B\u044C: ",(0,t.jsx)(n.code,{children:"mellow"})]}),(0,t.jsx)(s,{image:i(36847).Z,size:"40%",align:"center"}),(0,t.jsx)(s,{image:i(45565).Z,size:"40%",align:"center"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0448\u043B\u043E \u0443\u0441\u043F\u0435\u0448\u043D\u043E."}),"\n"]})]})]}),"\n",(0,t.jsx)(n.hr,{})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}function x(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85187:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/c8-port-6816085af07cf862fa261a15d28cf147.webp"},23206:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/gemini-port-8ad5dc8fcc8ac4d84ff82fddfa799553.webp"},3686:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/minipad-port-2b4dc5f3cdecd4c1fad8981d4eeb6639.webp"},25400:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-1-2a44e31779ffe0a74fdb09921c24ca3e.webp"},4828:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-10-2699dcaebc29cf1d3bedcdbb40b41b30.webp"},36847:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-11-3d58dd094664307317d5b7d7a973f88e.webp"},45565:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-12-032fc32a515ee0afe65d9e77762cbace.webp"},91363:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-2-273b3b4bfff52a5c1a1e388dc8964112.webp"},88525:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-3-151965778ddfb93f44aaa24e10e02dbb.webp"},61305:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-4-0d677ea96590d19d313472418b9d3fa4.webp"},23561:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-5-b93ee98e2487f52442dacc9b83e1b52a.webp"},72957:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-6-37fc63e0cb12b9b19420d7a374c3d31a.webp"},64578:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-8-d3370454369e54fbc22ca40c7ef50a2a.webp"},92364:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/mobaxterm-9-262d9c655a1778c98421ad5179c4685c.webp"},19063:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/pc-device-mgr-31e6d7f9b4a8a052cdfad54479b8de5e.webp"},82174:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/pi-port-4613f1dd218929f19b8321a97d115048.webp"},8312:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/pilite2-port-8464c005fb4765f4ac616e1fa3b52fab.webp"},97494:function(e,n,i){i.d(n,{Z:function(){return s}});let s=i.p+"assets/images/piv2-port-05142296eee0b68d1ec9d84c27acec72.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return l}});var s=i(75271);let t={},r=s.createContext(t);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);