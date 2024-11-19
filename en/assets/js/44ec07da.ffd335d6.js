"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[6425],{92848:(e,n,t)=>{t.d(n,{Ay:()=>l,RM:()=>a});var r=t(86070),i=t(15658);const a=[];function s(e){const n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Katapult was originally named CanBoot and was later renamed."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Katapult firmware is a type of bootloader that can be used in conjunction with Klipper. After being flashed using methods like DFU, you can use commands to update the firmware in one click."}),"\n",(0,r.jsx)(n.li,{children:"Advantages: Double resetting or quickly cutting power twice will enter the Katapult firmware, and the pre-configured LED will flash; if not configured, it won't flash."}),"\n",(0,r.jsx)(n.li,{children:"The Katapult firmware can only be used for flashing firmware and cannot connect to Klipper!!!"}),"\n",(0,r.jsxs)(n.li,{children:["There are three ways to connect the Katapult firmware to the host machine:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["CAN connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: You need to know the firmware compilation rate in advance."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["RS232 connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can update the firmware using commands."}),"\n",(0,r.jsx)(n.li,{children:"Disadvantages: You cannot update the firmware in one click using commands; you need to manually enter the Katapult firmware."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["USB connection","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Advantages: After compiling the KLIPPER firmware, you can directly update the firmware using commands."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},51999:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var r=t(86070),i=t(15658),a=t(63436);const s=[];function l(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Install the flashing tool"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Enter the following command in SSH"}),"\n",(0,r.jsx)(n.li,{children:"Only execute this for the first flashing, no need to run it again after that"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/klipper/lib/rp2040_flash/ && make\n"})}),"\n",(0,r.jsx)(a.A,{image:t(64692).A,size:"100%",align:"left"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Execute the following command to check if the connection is successful."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Enter ",(0,r.jsx)(n.code,{children:"lsusb"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["If there is no ",(0,r.jsx)(n.code,{children:"2e8a:0003"})," device, please try to re-enter ",(0,r.jsx)(n.strong,{children:"flashing mode"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Due to system version issues, it may display other names. If there is a ",(0,r.jsx)(n.code,{children:"2e8a:0003"}),", it indicates that the flashing mode has been entered."]}),"\n",(0,r.jsx)(a.A,{image:t(85284).A,size:"80%",align:"left"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,r.jsxs)(n.p,{children:["Only proceed if there is a ",(0,r.jsx)(n.code,{children:"2e8a:0003"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pull the pre-compiled firmware"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"These are all pre-compiled firmwares"}),"\n",(0,r.jsx)(n.li,{children:"Please note that the host machine needs to be able to access the internet to install"}),"\n",(0,r.jsx)(n.li,{children:"The host machine needs to execute the following command to download the firmware package"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you have already downloaded the firmware package, it is recommended to update the firmware package before proceeding with the remaining steps"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})}),"\n"]}),"\n"]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},16754:(e,n,t)=>{t.d(n,{Ay:()=>o,RM:()=>s});var r=t(86070),i=t(15658),a=t(63436);const s=[];function l(e){const n={code:"code",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Prepare a data cable with data transmission capability"}),"\n",(0,r.jsx)(n.li,{children:"Download the firmware to your computer"}),"\n",(0,r.jsxs)(n.li,{children:["Connect the BOOT jumper or hold it down after connecting to the computer, at this point the ",(0,r.jsx)(n.code,{children:"RPI-RP2"})," disk will appear","\n",(0,r.jsx)(a.A,{image:t(59205).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Remove the BOOT jumper or release the button!!!"}),"\n",(0,r.jsx)(n.li,{children:"Copy the firmware you need to burn into the disk, please note that only UF2 suffix firmware can be used!!! (Do not modify the suffix name, it is useless)"}),"\n",(0,r.jsxs)(n.li,{children:["Reference","\n",(0,r.jsx)(a.A,{image:t(31736).A,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["After copying the firmware into the ",(0,r.jsx)(n.code,{children:"RPI-RP2"})," disk, it will automatically disappear, at this point the firmware burning is completed!"]}),"\n"]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},46325:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>m,default:()=>j,frontMatter:()=>p,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl","title":"Katapult Firmware","description":"Katapult Firmware Description","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl.mdx","sourceDirName":"ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash","slug":"/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"BL firmware, please ignore"},"sidebar":"tutorialSidebar","previous":{"title":"ID Search Tutorial","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/flash/id"},"next":{"title":"Motherboard Wiring","permalink":"/fly-docs-next/en/docs/ProductDoc/ToolBoard/fly-sht36/sht36_pro/wiring"}}');var i=t(86070),a=t(15658),s=t(77849),l=t(27166),o=t(61706),c=t(63436),d=t(16754),u=t(51999),h=t(92848);const p={sidebar_position:6,sidebar_label:"BL firmware, please ignore"},m="Katapult Firmware",f={},x=[{value:"Katapult Firmware Description",id:"katapult-firmware-description",level:2},...h.RM,{value:"Entering Programming Mode",id:"entering-programming-mode",level:2},{value:"Flashing Firmware",id:"flashing-firmware",level:2},...d.RM,...u.RM,{value:"Confirming Firmware Boot",id:"confirming-firmware-boot",level:2}];function g(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"katapult-firmware",children:"Katapult Firmware"})}),"\n",(0,i.jsx)(n.h2,{id:"katapult-firmware-description",children:"Katapult Firmware Description"}),"\n",(0,i.jsx)(h.Ay,{}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"SHT36 PRO supports CAN"}),"\n",(0,i.jsx)(n.li,{children:"Only CAN firmware is provided here, with speeds of 500K and 1M"}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"entering-programming-mode",children:"Entering Programming Mode"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The circled part is the ",(0,i.jsx)(n.code,{children:"BOOT button"})]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"With the motherboard completely powered off, short the BOOT button and connect one end of the data cable to the motherboard and the other end to your device."}),"\n",(0,i.jsxs)(n.li,{children:["Then release the short on the BOOT button","\n",(0,i.jsx)(c.A,{image:t(54158).A,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"flashing-firmware",children:"Flashing Firmware"}),"\n",(0,i.jsxs)(s.A,{children:[(0,i.jsxs)(l.A,{value:"win",label:"Windows Flashing Guide",default:!0,children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["SHT36_PRO's Katapult firmware    ",(0,i.jsx)(o.A,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/SHT36_PRO.zip",children:"Click to automatically download the firmware"})]}),"\n"]}),(0,i.jsx)(d.Ay,{})]}),(0,i.jsxs)(l.A,{value:"linux",label:"Host Computer Flashing Guide",children:[(0,i.jsx)(u.Ay,{}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Flashing Firmware"}),"\n"]}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Only one firmware needs to be flashed."})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Below is the command to flash the 500K CAN speed firmware"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SHT36/FLY_SHT36PRO_CANBOOT_500K.uf2\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Below is the command to flash the 1M CAN speed firmware"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ~/klipper/lib/rp2040_flash/rp2040_flash ~/FLY_Katapult/BL/SHT36/FLY_SHT36PRO_CANBOOT_1M.uf2\n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"If the flashing is successful, you will see the following prompt"}),"\n"]}),(0,i.jsx)(c.A,{image:t(13235).A,size:"100%",align:"center"}),(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"After flashing, the motherboard needs to be completely powered off once."})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"confirming-firmware-boot",children:"Confirming Firmware Boot"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the firmware starts up normally, the LED will blink.","\n",(0,i.jsx)(c.A,{image:t(43063).A,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},27166:(e,n,t)=>{t.d(n,{A:()=>s});t(30758);var r=t(13526);const i={tabItem:"tabItem_nvWs"};var a=t(86070);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,s),hidden:t,children:n})}},77849:(e,n,t)=>{t.d(n,{A:()=>v});var r=t(30758),i=t(13526),a=t(42973),s=t(25557),l=t(67636),o=t(42310),c=t(4919),d=t(61231);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=h(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:t,groupId:i}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,d.Dv)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),g=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=t(21760);const g={tabList:"tabList_vBCw",tabItem:"tabItem_NxBH"};var j=t(86070);function b(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),i=l[t].value;i!==r&&(c(n),s(i))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,i.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(w,{...n,...e})]})}function v(e){const n=(0,x.A)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},64692:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/2040-43c81d0f8030e52816db1be8521a2929.png"},13235:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/flash3-45b54a25718cd4a451d3d2b457069876.png"},59205:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/uf2-675454aaf6017450feee226084f05572.png"},31736:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/uf21-130cad39055e132ae37b750c38bc9eb8.png"},85284:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/2e8a-5bc7c58f995abf8e3174d6c8e696caa6.png"},54158:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/boot-e38fb1c59c9655e800adb423f12c3e0c.png"},43063:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/led-89cc51ede092ec3b8df099b31fcc9c10.png"}}]);