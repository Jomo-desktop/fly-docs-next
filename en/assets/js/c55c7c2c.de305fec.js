"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["52812"],{74181:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>s});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-c/fly-c8/index","title":"Introduction","description":"Product Features","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-c/fly-c8/index.mdx","sourceDirName":"ProductDoc/MainBoard/fly-c/fly-c8","slug":"/ProductDoc/MainBoard/fly-c/fly-c8/","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-c/fly-c8/index.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Main Board Introduction"},"sidebar":"tutorialSidebar","previous":{"title":"FLY-C8","permalink":"/fly-docs-next/en/docs/category/fly-c8"},"next":{"title":"System Imaging","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-c/fly-c8/fly-os"}}'),t=i("52676"),o=i("79938");let s={sidebar_position:1,sidebar_label:"Main Board Introduction"},l="Introduction",c={},a=[{value:"Product Features",id:"product-features",level:2},{value:"Product Specifications",id:"product-specifications",level:2},{value:"Host Machine",id:"host-machine",level:3},{value:"Sub-Machine",id:"sub-machine",level:3},{value:"Update Record",id:"update-record",level:2},{value:"Version 1.2",id:"version-12",level:3}];function d(e){let n={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ul:"ul",...(0,o.a)(),...e.components},{ImageView:r}=n;return!r&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"introduction",children:"Introduction"})}),"\n",(0,t.jsx)(n.h1,{id:"fly-c8",children:"FLY C8"}),"\n",(0,t.jsx)(r,{image:i(46141).Z,size:"100%",align:"left"}),"\n",(0,t.jsx)(n.h2,{id:"product-features",children:"Product Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Uses a 32-bit ARM Cortex-M0+ series STM32F407VGT6 main control chip with a frequency of 168MHz"}),"\n",(0,t.jsx)(n.li,{children:"Equipped with TMC drivers in SPI and UART working modes"}),"\n",(0,t.jsx)(n.li,{children:"Equipped with DIAG function pins, allowing for easy use of unlimited homing by simply plugging or unplugging the jumper cap"}),"\n",(0,t.jsx)(n.li,{children:"Digital fan with selectable 24V, 12V, and 5V voltages, eliminating the need to purchase a voltage reduction module"}),"\n",(0,t.jsx)(n.li,{children:"New flash writing method, allowing direct firmware update of the motherboard via FLY-Tools"}),"\n",(0,t.jsx)(n.li,{children:"Multi-channel power management, ensuring that short circuits on ports, limit switches, or drivers will not affect the operation of the host machine\n*\u9884\u7559RGB\u63A5\u53E3\u652F\u6301\uFF0812V\uFF0C5V\uFF09\u7535\u538B\u53EF\u9009\n*\u9884\u7559SPI\u63A5\u53E3\uFF0C\u53EF\u8BA9\u5BA2\u6237\u5916\u63A5\u52A0\u901F\u5EA6\u4F20\u611F\u5668\u8FDB\u884C\u52A0\u901F\u5EA6\u8865\u507F"}),"\n",(0,t.jsx)(n.li,{children:"TFT screen and HDMI screen support one-wire-through"}),"\n",(0,t.jsx)(n.li,{children:"The system is pre-installed with klipper, moonraker, mainsail, fulidd, klipper-screen, Crowsmest, resonance compensation plugins numpy and FLY-Tools, making it easier for beginners without complex operations (requires purchasing TF card or M2WE)"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"product-specifications",children:"Product Specifications"}),"\n",(0,t.jsx)(n.h3,{id:"host-machine",children:"Host Machine"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CPU: High-performance Allwinner H5 chip, quad-core 64-bit Cortex-A53"}),"\n",(0,t.jsx)(n.li,{children:"GPU: High-performance 6-core Mali 450, pixel fill rate greater than 2.7gpixel/s"}),"\n",(0,t.jsx)(n.li,{children:"RAM: 1GB DDR3 (shared with GPU)"}),"\n",(0,t.jsx)(n.li,{children:"ROM: Supports up to 128GB SD card"}),"\n",(0,t.jsx)(n.li,{children:"Peripherals: Spi x1, TFT x1, USB x4 (USB 2.0 x3, OTG x1), Micro HDMI x1, Eth x1 (100M), CAN x1, 3.5mm audio interface x1"}),"\n",(0,t.jsx)(n.li,{children:"Interfaces: On-board M.2 interface, supports expansion of WIFI, eMMC, etc. (private protocol, do not connect non-FLY \u03C0 dedicated M.2 devices)"}),"\n",(0,t.jsx)(n.li,{children:"Reserved ZH1.5 controllable 5V fan interface for cooling the host machine"}),"\n",(0,t.jsx)(n.li,{children:"Supports one-wire-through for TFT screens and HDMI screens"}),"\n",(0,t.jsx)(n.li,{children:"Reserved CAN bridge interface"}),"\n",(0,t.jsx)(n.li,{children:"The system is pre-installed with klipper, moonraker, mainsail, fulidd, klipper-screen, Crowsmest, resonance compensation plugins numpy and FLY-Tools, making it easier for beginners without complex operations (requires purchasing TF card or M2WE)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sub-machine",children:"Sub-Machine"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MCU: STM32F407VGT6"}),"\n",(0,t.jsx)(n.li,{children:"Firmware: KLIPPER/RRF/Marlin"}),"\n",(0,t.jsx)(n.li,{children:"Supports 12-24V DC power supply, providing more stable power supply and eliminating the need for a voltage reduction module"}),"\n",(0,t.jsx)(n.li,{children:"Maximum output current of hotbed port: 15A"}),"\n",(0,t.jsx)(n.li,{children:"Maximum output current of heater port: 6A"}),"\n",(0,t.jsx)(n.li,{children:"Maximum output current of fan port: 1A"}),"\n",(0,t.jsx)(n.li,{children:"Driver working mode support: SPI, UART, STEP/DIR"}),"\n",(0,t.jsx)(n.li,{children:"Supported drivers: External TMC5160Pro, TMC5160, TMC2209, TMC2225, TMC2226, TMC2208, TMC2130, A4988, etc."}),"\n",(0,t.jsx)(n.li,{children:"Expansion interfaces: BLTouch (Servos, Probe), RGB x2, UART x1, 12864 x1"}),"\n",(0,t.jsx)(n.li,{children:"Fans: Two-wire digital fans x6 (selectable 24V, 12V, 5V)"}),"\n",(0,t.jsx)(n.li,{children:"Temperature sensors: 3 channels NTC 100K"}),"\n",(0,t.jsx)(n.li,{children:"Supported machine structures: Cartesian, Delta, Kossel, Ultimaker, CoreXY"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"update-record",children:"Update Record"}),"\n",(0,t.jsx)(n.h3,{id:"version-12",children:"Version 1.2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Added shutdown pin for the host machine, configurable KPPM safety shutdown module"}),"\n",(0,t.jsx)(n.li,{children:"Added 5V power module, can provide power for wiscreen-7 inch screen"}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},46141:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/c8-939488e67cbf916fa5357e68981f740e.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return l},a:function(){return s}});var r=i(75271);let t={},o=r.createContext(t);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);