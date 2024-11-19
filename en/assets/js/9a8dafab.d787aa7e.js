"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[18633],{45146:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"ProductDoc/MainBoard/fly-rpfmex/cfg","title":"\u53c2\u8003\u914d\u7f6e","description":"\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u6240\u6709*\u5305\u88f9\u7684\u5185\u5bb9\u9700\u8981\u6309\u7167\u81ea\u5df1\u5b9e\u9645\u7684\u4fee\u6539","source":"@site/docs/ProductDoc/MainBoard/fly-rpfmex/cfg.mdx","sourceDirName":"ProductDoc/MainBoard/fly-rpfmex","slug":"/ProductDoc/MainBoard/fly-rpfmex/cfg","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-rpfmex/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-rpfmex/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1729220269000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"\u53c2\u8003\u914d\u7f6e"},"sidebar":"tutorialSidebar","previous":{"title":"Pin Distribution","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-rpfmex/pin"},"next":{"title":"Flashing the bootloader firmware","permalink":"/fly-docs-next/en/docs/ProductDoc/MainBoard/fly-rpfmex/bl"}}');var p=r(86070),o=r(15658);const t={sidebar_position:5,sidebar_label:"\u53c2\u8003\u914d\u7f6e"},s="\u53c2\u8003\u914d\u7f6e",a={},c=[];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(e.header,{children:(0,p.jsx)(e.h1,{id:"\u53c2\u8003\u914d\u7f6e",children:"\u53c2\u8003\u914d\u7f6e"})}),"\n",(0,p.jsx)(e.admonition,{type:"tip",children:(0,p.jsxs)(e.p,{children:["\u6587\u6863\u4e2d\u51fa\u73b0\u7684\u6240\u6709",(0,p.jsx)(e.code,{children:"*"}),"\u5305\u88f9\u7684\u5185\u5bb9\u9700\u8981\u6309\u7167\u81ea\u5df1\u5b9e\u9645\u7684\u4fee\u6539"]})}),"\n",(0,p.jsx)(e.pre,{children:(0,p.jsx)(e.code,{className:"language-cfg",children:"## RPFMEX\u8bbe\u7f6e\n[mcu rpfmex]\nserial:  */dev/serial/by-id/usb-Klipper_rp2040_12345-if00*\n\n## RPFMEX\u6e29\u5ea6\n[temperature_sensor FLY-RPFMEX]\nsensor_type: temperature_mcu\nsensor_mcu: rpfmex\n\n## FAN0\n[fan]\npin: rpfmex:gpio11\n\n## FAN1\n[fan_generic fan]\npin: rpfmex:gpio12\n\n## M0\n[stepper_x]\nstep_pin: rpfmex:gpio6\ndir_pin: rpfmex:gpio5\nenable_pin: !rpfmex:gpio9\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: !rpfmex:gpio27\n## RPFMEX\u677f\u6709gpio27,gpio27,gpio29\u4e09\u4e2a\u9650\u4f4d\u5f15\u811a\u53ef\u7528\uff0c\u6309\u7167\u5b9e\u9645\u63a5\u7ebf\u4fee\u6539\u914d\u7f6e\n\n## M1\n[stepper_y]\nstep_pin: rpfmex:gpio1\ndir_pin: rpfmex:gpio0\nenable_pin: !rpfmex:gpio4\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: !rpfmex:gpio28\n## RPFMEX\u677f\u6709gpio27,gpio27,gpio29\u4e09\u4e2a\u9650\u4f4d\u5f15\u811a\u53ef\u7528\uff0c\u6309\u7167\u5b9e\u9645\u63a5\u7ebf\u4fee\u6539\u914d\u7f6e\n\n## M2\n[stepper_z]\nstep_pin: rpfmex:gpio22\ndir_pin: rpfmex:gpio21\nenable_pin: !rpfmex:gpio25\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: !rpfmex:gpio29\n## RPFMEX\u677f\u6709gpio27,gpio27,gpio29\u4e09\u4e2a\u9650\u4f4d\u5f15\u811a\u53ef\u7528\uff0c\u6309\u7167\u5b9e\u9645\u63a5\u7ebf\u4fee\u6539\u914d\u7f6e\n\n## M3\n[extruder]\nstep_pin: rpfmex:gpio17\ndir_pin: rpfmex:gpio16\nenable_pin: !rpfmex:gpio20\nmicrosteps: 16\nrotation_distance: 33.5\n\n\n[tmc2209 stepper_x]\nuart_pin: rpfmex:gpio7\nrun_current: 0.800\nstealthchop_threshold: 999999\n#diag_pin: rpfmex:gpio8\n\n[tmc2209 stepper_y]\nuart_pin: rpfmex:gpio2\nrun_current: 0.800\nstealthchop_threshold: 999999\n#diag_pin: rpfmex:gpio3\n\n[tmc2209 stepper_z]\nuart_pin: rpfmex:gpio23\nrun_current: 0.800\nstealthchop_threshold: 999999\n#diag_pin: rpfmex:gpio24\n\n[tmc2209 extruder]\nuart_pin: rpfmex:gpio18\nrun_current: 0.800\nstealthchop_threshold: 999999\n#diag_pin: rpfmex:gpio19\n\n\n## RGB\n[neopixel my_neopixel]\npin: rpfmex:gpio10\nchain_count: 12\ncolor_order: GRB\ninitial_RED: 0.0\ninitial_GREEN: 0.0\ninitial_BLUE: 0.0\n\n\n## \u70ed\u654f\u8bbe\u7f6e\n[temperature_sensor PT100]\nsensor_pin: rpfmex:gpio27\n## RPFMEX\u677f\u6709gpio27,gpio27,gpio29\u4e09\u4e2a\u70ed\u654f\u5f15\u811a\u53ef\u7528\uff0c\u6309\u7167\u5b9e\u9645\u63a5\u7ebf\u4fee\u6539\u914d\u7f6e\n## \u70ed\u654f\u63a5\u9650\u4f4d\u63a5\u53e3\u7684GND\u548cGPIO\nsensor_type: ATC Semitec 104GT-2\npullup_resistor: 2200\n\n"})})]})}function l(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,p.jsx)(e,{...n,children:(0,p.jsx)(d,{...n})}):d(n)}}}]);