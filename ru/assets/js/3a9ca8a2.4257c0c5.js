"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["32928"],{25071:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>c,default:()=>p,assets:()=>l,toc:()=>d,frontMatter:()=>i});var o=JSON.parse('{"id":"tools","title":"\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B","description":"\u042D\u0442\u043E\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u0435\u0439 Klipper.","source":"@site/i18n/ru/docusaurus-plugin-content-docs/current/tools.mdx","sourceDirName":".","slug":"/tools","permalink":"/fly-docs-next/ru/docs/tools","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/tools.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732068100000,"frontMatter":{},"sidebar":"toolsdocSidebar","next":{"title":"\u0410\u043D\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440 \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438 Klipper","permalink":"/fly-docs-next/ru/docs/ToolsDoc/firmware-parser"}}'),r=n("52676"),s=n("79938");let i={},c="\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",l={},d=[];function a(e){let t={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435-\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",children:"\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsx)(t.p,{children:"\u042D\u0442\u043E\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442 \u0440\u0430\u0437\u043B\u0438\u0447\u043D\u044B\u0435 \u043F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u0435\u0439 Klipper."})}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435",type:"warning",children:(0,r.jsxs)(t.p,{children:["\u041D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B, \u0442\u0430\u043A\u0438\u0435 \u043A\u0430\u043A ",(0,r.jsx)(t.code,{children:"\u041F\u0430\u0440\u0441\u0435\u0440 \u043F\u0440\u043E\u0448\u0438\u0432\u043A\u0438 Klipper"}),", \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u043E\u043D\u043B\u0430\u0439\u043D, \u0432 \u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u0430\u043A ",(0,r.jsx)(t.code,{children:"Fly-Tools"})," \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0438 \u043F\u0435\u0440\u0435\u0434 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u043C\u0430\u043D\u0438\u0435 \u043D\u0430 \u0440\u0430\u0437\u043B\u0438\u0447\u0438\u044F."]})}),"\n",(0,r.jsx)(t.admonition,{title:"\u0412\u0430\u0436\u043D\u043E",type:"danger",children:(0,r.jsx)(t.p,{children:"\u0415\u0441\u043B\u0438 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u044E\u0442 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u043E\u0435\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 Issue."})})]})}function p(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},79938:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var o=n(75271);let r={},s=o.createContext(r);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);