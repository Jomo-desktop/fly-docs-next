"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[98734],{21112:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>P,contentTitle:()=>g,default:()=>I,frontMatter:()=>E,metadata:()=>t,toc:()=>_});const t=JSON.parse('{"id":"ToolsDoc/firmware-parser","title":"Klipper Firmware Parser","description":"This tool can extract build information and other parameters from Klipper firmware .bin, .uf2, .dict, .elf files (It is recommended to access from a PC for a better experience).","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ToolsDoc/firmware-parser.mdx","sourceDirName":"ToolsDoc","slug":"/ToolsDoc/firmware-parser","permalink":"/fly-docs-next/en/docs/ToolsDoc/firmware-parser","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ToolsDoc/firmware-parser.mdx","tags":[],"version":"current","lastUpdatedBy":"XiaoK","lastUpdatedAt":1730539595000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"toolsdocSidebar","previous":{"title":"Practical Tools","permalink":"/fly-docs-next/en/docs/tools"},"next":{"title":"Fly-Tools","permalink":"/fly-docs-next/en/docs/category/fly-tools"}}');var i=n(86070),s=n(15658),a=n(30758),l=n(66537),d=n(95838),o=n(61706),c=n(4661),h=n(1804),x=n(17066),p=n(13004),f=n(58979),j=n(63815),m=n(34532);const u="#9DA8B7",A="#303740",y=(0,f.A)("div")((e=>{let{theme:r}=e;return`\n    border-radius: 12px;\n    border: 2px solid ${"dark"===r.palette.mode?A:u};\n    overflow: hidden;\n\n    table {\n      font-family: 'IBM Plex Sans', sans-serif;\n      font-size: 1rem;\n      border-collapse: collapse;\n      border-radius: 12px;\n      border: 0px;\n      width: 100%;\n      margin: 0px;\n    }\n  \n    td,\n    th {\n      border: 1px solid ${"dark"===r.palette.mode?A:u};\n      text-align: left;\n      padding: 10px;\n    }\n  \n    @media screen and (max-width: 600px) {\n        th, td {\n            width: auto; /* \u5728\u5c0f\u5c4f\u5e55\u4e0a\u81ea\u52a8\u8c03\u6574\u5bbd\u5ea6 */\n        }\n    }\n    `})),S=(0,f.A)(l.A)({p:2,border:"4px dashed grey",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"center",minHeight:"100px",minWidth:"300px",transition:"border-color 0.3s, background-color 0.3s","&.highlight":{borderColor:"blue",backgroundColor:"lightblue",zIndex:99999999}}),b=(0,f.A)("input")({clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:1,overflow:"hidden",position:"absolute",bottom:0,left:0,whiteSpace:"nowrap",width:1}),w=()=>{const[e,r]=(0,a.useState)(null),n=(0,a.useRef)(null),[t,s]=(0,a.useState)({snackbarisOpen:!1,snackbarMsg:""}),{snackbarisOpen:f,snackbarMsg:u}=t,[A,w]=(0,a.useState)(!1),[E,g]=(0,a.useState)(null),[P,_]=(0,a.useState)([]),[R,I]=(0,a.useState)([]),[N,O]=(0,a.useState)([]),[U,v]=(0,a.useState)([]),B=e=>{s({snackbarisOpen:!0,snackbarMsg:e})},C=e=>{const r=[];for(let n=0;n<e.length;n+=2)r.push(parseInt(e.slice(n,n+2),16));return new Uint8Array(r)},D=e=>Array.prototype.map.call(e,(function(e){return("0"+(255&e).toString(16)).slice(-2)})).join(""),W=e=>{try{const r=new FileReader;r.onload=async()=>{const e=r.result,n=new Uint8Array(e);var t=D(n),s=t.indexOf("78da9d");if(-1==s&&(s=t.indexOf("78da")),-1==s)return t.indexOf("43616e426f6f74")>0?void B((0,i.jsx)(m.A,{children:"\u4e0d\u652f\u6301\u89e3\u6790 CanBoot(Katapult) \u56fa\u4ef6"})):void B((0,i.jsx)(m.A,{children:"BIN\u6587\u4ef6\u89e3\u6790\u9519\u8bef,0x01"}));var a=t.indexOf("020000000002",s);if(-1==a&&(a=t.indexOf("0000000000",s)),-1!=a){t=t.slice(s,a);var l=C(t);try{const e=j.Ay.inflate(l),r=(new TextDecoder).decode(e);g(JSON.parse(r))}catch(d){console.error("\u89e3\u538b\u6570\u636e\u65f6\u53d1\u751f\u9519\u8bef:",d),B((0,i.jsx)(m.A,{children:"\u6570\u636e\u5904\u7406\u5931\u8d25,0x01"}))}}else B((0,i.jsx)(m.A,{children:"BIN\u6587\u4ef6\u89e3\u6790\u9519\u8bef,0x02"}))},r.readAsArrayBuffer(e)}catch(r){console.error(r),B((0,i.jsx)(m.A,{children:"Bin\u6587\u4ef6\u89e3\u6790\u9519\u8bef,0x0f"}))}};return(0,a.useEffect)((()=>{if(null==e||null==e||!e)return;g(null),_([]),I([]),O([]),v([]);const r=e.name.toLowerCase();r.endsWith(".bin")||r.endsWith(".uf2")||r.endsWith(".dict")||r.endsWith(".elf")?!r.endsWith(".elf")&&e.size>2097152?B((0,i.jsx)(m.A,{children:"\u6587\u4ef6\u4e0d\u80fd\u5927\u4e8e2M"})):r.endsWith(".elf")&&e.size>5242880?B((0,i.jsx)(m.A,{children:"elf\u6587\u4ef6\u4e0d\u80fd\u5927\u4e8e5M"})):(B((0,i.jsx)(m.A,{children:"\u6587\u4ef6\u89e3\u6790\u4e2d\uff0c\u8bf7\u7a0d\u540e"})),r.endsWith(".bin")?W(e):r.endsWith(".uf2")?(e=>{try{const r=new FileReader;r.onload=async()=>{const e=r.result,n=new Uint8Array(e);var t=D(n),s=(t=(t=t.replace(/00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000/g,"")).replace(/306fb10a5546320a57515d9e.*?56ff8be4/g,"")).indexOf("78da9d");if(-1==s&&(s=t.indexOf("78da")),-1==s)return t.indexOf("43616e426f6f74")>0?void B((0,i.jsx)(m.A,{children:"\u4e0d\u652f\u6301\u89e3\u6790 CanBoot(Katapult) \u56fa\u4ef6"})):void B((0,i.jsx)(m.A,{children:"UF2\u6587\u4ef6\u89e3\u6790\u9519\u8bef,0x01"}));var a=t.indexOf("020000000002",s);if(-1==a&&(a=t.indexOf("0000000000",s)),-1!=a){t=t.slice(s,a);var l=C(t);try{const e=j.Ay.inflate(l),r=(new TextDecoder).decode(e);g(JSON.parse(r))}catch(d){console.error("\u89e3\u538b\u6570\u636e\u65f6\u53d1\u751f\u9519\u8bef:",d),B((0,i.jsx)(m.A,{children:"\u6570\u636e\u5904\u7406\u5931\u8d25,0x01"}))}}else B((0,i.jsx)(m.A,{children:"UF2\u6587\u4ef6\u89e3\u6790\u9519\u8bef,0x02"}))},r.readAsArrayBuffer(e)}catch(r){console.error(r),B((0,i.jsx)(m.A,{children:"UF2\u6587\u4ef6\u89e3\u6790\u9519\u8bef,0x0f"}))}})(e):r.endsWith(".dict")?(e=>{try{const r=new FileReader;r.onload=async()=>{const e=r.result,n=new Uint8Array(e),t=(new TextDecoder).decode(n);g(JSON.parse(t))},r.readAsArrayBuffer(e)}catch(r){console.error(r),B((0,i.jsx)(m.A,{children:"DICT\u6587\u4ef6\u89e3\u6790\u9519\u8bef,0x0f"}))}})(e):r.endsWith(".elf")?W(e):B((0,i.jsx)(m.A,{children:"\u6587\u4ef6\u89e3\u6790\u9519\u8bef\uff0c\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u6587\u4ef6"}))):B((0,i.jsx)(m.A,{children:"\u6587\u4ef6\u683c\u5f0f\u9519\u8bef\uff0c\u8bf7\u9009\u62e9.bin/.uf2/.dict/.elf\u6587\u4ef6"}))}),[e]),(0,a.useEffect)((()=>{if(E&&null!=E&&null!=E&&E!={})if(E.hasOwnProperty("app")&&E.hasOwnProperty("version")){if(E.hasOwnProperty("app")&&_((e=>[...e,{name:(0,i.jsx)(m.A,{children:"APP\u7a0b\u5e8f"}),info:E.app}])),E.hasOwnProperty("license")&&_((e=>[...e,{name:(0,i.jsx)(m.A,{children:"\u8bb8\u53ef\u534f\u8bae"}),info:E.license}])),E.hasOwnProperty("version")){const r=E.version.match(/-g([0-9a-f]{8})/i);var e="";r&&r[1]&&E.version.indexOf("dirty")<0&&(e=r[1]),_((r=>[...r,{name:(0,i.jsx)(m.A,{children:"\u56fa\u4ef6\u7248\u672c"}),info:e?E.version.replace(e,"<a href='https://github.com/Klipper3d/klipper/commit/"+e+"' target='_blank'>"+e+"</a>"):E.version}]))}if(E.hasOwnProperty("build_versions ")&&_((e=>[...e,{name:(0,i.jsx)(m.A,{children:"\u5de5\u5177\u94fe\u7248\u672c"}),info:E.build_versions}])),E.hasOwnProperty("config")){const e=E.config;if(e.hasOwnProperty("MCU")&&_((r=>[...r,{name:(0,i.jsx)(m.A,{children:"\u4e3b\u63a7\u578b\u53f7"}),info:e.MCU.toUpperCase()}])),e.hasOwnProperty("CLOCK_FREQ")&&_((r=>[...r,{name:(0,i.jsx)(m.A,{children:"\u4e3b\u63a7\u9891\u7387"}),info:e.CLOCK_FREQ/1e6+"MHz"}])),e.hasOwnProperty("RESERVE_PINS_USB")&&_((r=>[...r,{name:(0,i.jsx)(m.A,{children:"USB\u5f15\u811a"}),info:`DM:${e.RESERVE_PINS_USB.split(",")[0]},  DP:${e.RESERVE_PINS_USB.split(",")[1]}`}])),e.hasOwnProperty("RESERVE_PINS_CAN")&&_((r=>[...r,{name:(0,i.jsx)(m.A,{children:"CAN\u5f15\u811a"}),info:`RX:${e.RESERVE_PINS_CAN.split(",")[0]},  TX:${e.RESERVE_PINS_CAN.split(",")[1]}`}])),e.hasOwnProperty("CANBUS_FREQUENCY")&&_((r=>[...r,{name:(0,i.jsx)(m.A,{children:"CAN\u901f\u7387"}),info:`${e.CANBUS_FREQUENCY} Kbps`}])),e.hasOwnProperty("RESERVE_PINS_serial")&&_((r=>[...r,{name:(0,i.jsx)(m.A,{children:"UART\u5f15\u811a"}),info:`RX:${e.RESERVE_PINS_serial.split(",")[0]},  TX:${e.RESERVE_PINS_serial.split(",")[1]}`}])),e.hasOwnProperty("SERIAL_BAUD")&&_((r=>[...r,{name:(0,i.jsx)(m.A,{children:"UART\u901f\u7387"}),info:`${e.SERIAL_BAUD} bps`}])),!e.hasOwnProperty("RESERVE_PINS_USB")||e.hasOwnProperty("RESERVE_PINS_serial")||e.hasOwnProperty("RESERVE_PINS_CAN")?e.hasOwnProperty("RESERVE_PINS_serial")||e.hasOwnProperty("SERIAL_BAUD")&&!e.hasOwnProperty("RESERVE_PINS_USB")&&!e.hasOwnProperty("RESERVE_PINS_CAN")?_((e=>[...e,{name:(0,i.jsx)(m.A,{children:"\u901a\u4fe1\u65b9\u5f0f"}),info:(0,i.jsx)(m.A,{children:"\u8be5\u56fa\u4ef6\u4f7f\u7528\u4e32\u53e3UART\u4e0e\u4e0a\u4f4d\u673a\u901a\u4fe1"})}])):e.hasOwnProperty("RESERVE_PINS_USB")||e.hasOwnProperty("RESERVE_PINS_serial")||!e.hasOwnProperty("RESERVE_PINS_CAN")?e.hasOwnProperty("RESERVE_PINS_USB")&&!e.hasOwnProperty("RESERVE_PINS_serial")&&e.hasOwnProperty("RESERVE_PINS_CAN")&&e.hasOwnProperty("CANBUS_BRIDGE")&&"1"==e.CANBUS_BRIDGE&&_((e=>[...e,{name:(0,i.jsx)(m.A,{children:"\u901a\u4fe1\u65b9\u5f0f"}),info:(0,i.jsx)(m.A,{children:"\u8be5\u56fa\u4ef6\u4f7f\u7528USB\u6865\u63a5CANBus\u4e0e\u4e0a\u4f4d\u673a\u901a\u4fe1"})}])):_((e=>[...e,{name:(0,i.jsx)(m.A,{children:"\u901a\u4fe1\u65b9\u5f0f"}),info:(0,i.jsx)(m.A,{children:"\u8be5\u56fa\u4ef6\u4f7f\u7528CANBus\u4e0e\u4e0a\u4f4d\u673a\u901a\u4fe1"})}])):_((e=>[...e,{name:(0,i.jsx)(m.A,{children:"\u901a\u4fe1\u65b9\u5f0f"}),info:(0,i.jsx)(m.A,{children:"\u8be5\u56fa\u4ef6\u4f7f\u7528USB\u4e0e\u4e0a\u4f4d\u673a\u901a\u4fe1"})}])),e.hasOwnProperty("INITIAL_PINS")){var r=e.INITIAL_PINS.split(",");r?.forEach((e=>{I((r=>[...r,{pin:e.startsWith("!")?e.substring(1):e,state:e.startsWith("!")?"LOW":"HIGH"}]))}))}Object.entries(e).map((e=>{let[r,n]=e;if(r.startsWith("BUS_PINS_spi")){var t=r.replace("BUS_PINS_",""),i=n.split(",");O((e=>[...e,{bus:t,miso:i[0],mosi:i[1],sck:i[2]}]))}else if(r.startsWith("BUS_PINS_i2c")){t=r.replace("BUS_PINS_",""),i=n.split(",");v((e=>[...e,{bus:t,sda:i[0],scl:i[1]}]))}}))}B((0,i.jsx)(m.A,{children:"\u56fa\u4ef6\u89e3\u6790\u5b8c\u6210"}))}else B((0,i.jsx)(m.A,{children:"\u6587\u4ef6\u89e3\u6790\u9519\u8bef\uff0c\u7f3a\u5c11\u5fc5\u8981\u5b57\u6bb5"}))}),[E]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{children:(0,i.jsx)(S,{component:"section",className:A?"highlight":"",onDrop:e=>{e.preventDefault(),w(!1);const n=e.dataTransfer.files[0];n&&r(n)},onDragOver:e=>{e.preventDefault()},onDragEnter:e=>{e.preventDefault(),w(!0)},onDragLeave:e=>{e.preventDefault(),w(!1)},children:(0,i.jsxs)(o.A,{component:"label",role:void 0,variant:"contained",tabIndex:-1,startIcon:(0,i.jsx)(p.A,{}),children:["Upload file",(0,i.jsx)(b,{type:"file",accept:".bin,.uf2,.dict,.elf",onChange:e=>{if(e.target.files.lenght>1)return void B((0,i.jsx)(m.A,{children:"\u4e0d\u652f\u6301\u591a\u6587\u4ef6\u89e3\u6790\uff0c\u8bf7\u9009\u62e9\u5355\u4e2a\u6587\u4ef6"}));if(e.target.files.lenght<1)return void B((0,i.jsx)(m.A,{children:"\u8bf7\u9009\u62e9\u6587\u4ef6"}));const n=e.target.files[0];r(n)},ref:n})]})})}),(0,i.jsx)("br",{}),(0,i.jsx)(h.A,{variant:"middle"}),(0,i.jsx)("br",{}),(0,i.jsxs)(l.A,{width:"100%",component:"section",sx:{p:2},children:[P.length>0&&(0,i.jsx)(y,{children:(0,i.jsxs)("table",{style:{tableLayout:"fixed",width:"100%",minWidth:"100%"},"aria-label":"custom pagination table",children:[(0,i.jsx)("caption",{children:(0,i.jsx)(m.A,{children:"\u56fa\u4ef6\u914d\u7f6e"})}),(0,i.jsx)("thead",{style:{maxWidth:"100%",width:"100%"},children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:"auto",minWidth:"100px"},children:"Name"}),(0,i.jsx)("th",{style:{width:"100%"},align:"right",children:"Info"})]})}),(0,i.jsx)("tbody",{children:P.map((e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.name}),(0,i.jsx)("td",{dangerouslySetInnerHTML:{__html:e.info}})]},e.name)))})]})}),R.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)(y,{children:(0,i.jsxs)("table",{style:{tableLayout:"fixed",width:"100%",minWidth:"100%"},"aria-label":"custom pagination table",children:[(0,i.jsx)("caption",{children:(0,i.jsx)(m.A,{children:"\u521d\u59cb\u5f15\u811a\u914d\u7f6e"})}),(0,i.jsx)("thead",{style:{maxWidth:"100%",width:"100%"},children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:"auto",minWidth:"100px"},children:"Pin"}),(0,i.jsx)("th",{style:{width:"100%"},align:"right",children:"State"})]})}),(0,i.jsx)("tbody",{children:R.map((e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.pin}),(0,i.jsx)("td",{children:"HIGH"===e.state?(0,i.jsx)(x.A,{label:e.state,size:"small",color:"success"}):(0,i.jsx)(x.A,{label:e.state,size:"small",color:"primary"})})]},e.pin)))})]})})]}),N.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)(y,{children:(0,i.jsxs)("table",{style:{tableLayout:"fixed",width:"100%",minWidth:"100%"},"aria-label":"custom pagination table",children:[(0,i.jsx)("caption",{children:(0,i.jsx)(m.A,{children:"\u786c\u4ef6SPI\u901a\u9053\u914d\u7f6e"})}),(0,i.jsx)("thead",{style:{maxWidth:"100%",width:"100%"},children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:"auto",minWidth:"100px"},children:"Bus"}),(0,i.jsx)("th",{style:{width:"30%"},align:"right",children:"Miso"}),(0,i.jsx)("th",{style:{width:"30%"},align:"right",children:"Mosi"}),(0,i.jsx)("th",{style:{width:"30%"},align:"right",children:"Sck"})]})}),(0,i.jsx)("tbody",{children:N.map((e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.bus}),(0,i.jsx)("td",{children:e.miso}),(0,i.jsx)("td",{children:e.mosi}),(0,i.jsx)("td",{children:e.sck})]},e.bus)))})]})})]}),U.length>0&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)(y,{children:(0,i.jsxs)("table",{style:{tableLayout:"fixed",width:"100%",minWidth:"100%"},"aria-label":"custom pagination table",children:[(0,i.jsx)("caption",{children:(0,i.jsx)(m.A,{children:"\u786c\u4ef6I2C\u901a\u9053\u914d\u7f6e"})}),(0,i.jsx)("thead",{style:{maxWidth:"100%",width:"100%"},children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{style:{width:"auto",minWidth:"100px"},children:"Bus"}),(0,i.jsx)("th",{style:{width:"50%"},align:"right",children:"Sda"}),(0,i.jsx)("th",{style:{width:"50%"},align:"right",children:"Scl"})]})}),(0,i.jsx)("tbody",{children:U.map((e=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:e.bus}),(0,i.jsx)("td",{children:e.sda}),(0,i.jsx)("td",{children:e.scl})]},e.bus)))})]})})]})]}),(0,i.jsx)(c.A,{anchorOrigin:{vertical:"top",horizontal:"right"},open:f,message:u})]})},E={sidebar_position:1},g="Klipper Firmware Parser",P={},_=[];function R(e){const r={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"klipper-firmware-parser",children:"Klipper Firmware Parser"})}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["This tool can extract build information and other parameters from Klipper firmware ",(0,i.jsx)(r.code,{children:".bin"}),", ",(0,i.jsx)(r.code,{children:".uf2"}),", ",(0,i.jsx)(r.code,{children:".dict"}),", ",(0,i.jsx)(r.code,{children:".elf"})," files (It is recommended to access from a PC for a better experience)."]})}),"\n","\n",(0,i.jsx)(w,{})]})}function I(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(R,{...e})}):R(e)}}}]);