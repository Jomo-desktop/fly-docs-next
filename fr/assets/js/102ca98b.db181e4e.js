"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["38264"],{19339:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return s}});var r=i(52676),l=i(79938);let s=[];function t(e){let n={admonition:"admonition",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"Le nom original de Katapult \xe9tait CanBoot, puis il a \xe9t\xe9 chang\xe9."})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Le firmware Katapult est un type de bootloader qui peut \xeatre utilis\xe9 avec Klipper. Apr\xe8s avoir \xe9t\xe9 flash\xe9 via DFU ou une autre m\xe9thode, il permet la mise \xe0 jour du firmware d'un simple clic de commande."}),"\n",(0,r.jsx)(n.li,{children:"Avantages : Double-cliquez sur le bouton de r\xe9initialisation ou coupez l'alimentation deux fois rapidement pour entrer dans le firmware Katapult, et les LED configur\xe9es \xe0 l'avance clignoteront. S'il n'y a pas de configuration, elles ne clignoteront pas."}),"\n",(0,r.jsx)(n.li,{children:"Le firmware Katapult ne peut \xeatre utilis\xe9 que pour flasher le firmware et ne peut pas se connecter \xe0 Klipper !!!"}),"\n",(0,r.jsxs)(n.li,{children:["Le firmware Katapult supporte trois m\xe9thodes pour se connecter \xe0 l'ordinateur h\xf4te :","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Connexion CAN","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,r.jsx)(n.li,{children:"Inconv\xe9nients : Il faut conna\xeetre \xe0 l'avance le taux de compilation du firmware."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Connexion RS232","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour le firmware."}),"\n",(0,r.jsx)(n.li,{children:"Inconv\xe9nients : Impossible d'utiliser des commandes pour mettre \xe0 jour le firmware en un clic, il faut entrer manuellement dans le firmware Katapult."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Connexion USB","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Avantages : Apr\xe8s avoir compil\xe9 le firmware KLIPPER, vous pouvez utiliser des commandes pour mettre \xe0 jour directement le firmware."}),"\n",(0,r.jsx)(n.li,{children:"Inconv\xe9nients : Une connexion trop longue peut provoquer des interf\xe9rences."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},72147:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return s}});var r=i(52676),l=i(79938);let s=[];function t(e){let n={code:"code",li:"li",ol:"ol",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{ImageView:s}=n;return!s&&function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Installation de l'outil de flashage"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"FLY HMI n'a pas besoin d'installer l'outil de flashage"}),"\n",(0,r.jsx)(n.li,{children:"Si vous avez besoin de l'installer, notez que l'ordinateur h\xf4te doit pouvoir se connecter \xe0 Internet pour l'installation correcte."}),"\n",(0,r.jsx)(n.li,{children:"Si l'outil est d\xe9j\xe0 install\xe9, il n'est pas n\xe9cessaire de le r\xe9installer."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install dfu-util -y\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Ex\xe9cutez la commande ci-dessous pour v\xe9rifier si la connexion a r\xe9ussi."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"lsusb\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Si aucun appareil DFU n'appara\xeet, essayez de r\xe9entrer en ",(0,r.jsx)(n.strong,{children:"mode flashage"})]}),"\n",(0,r.jsxs)(n.li,{children:["En raison de probl\xe8mes de version du syst\xe8me, d'autres noms peuvent appara\xeetre, si ",(0,r.jsx)(n.code,{children:"0483:df11"})," est pr\xe9sent, cela signifie que vous \xeates en mode flashage."]}),"\n"]}),"\n",(0,r.jsx)(s,{image:i(44691).Z,size:"100%",align:"left"}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"T\xe9l\xe9chargement du firmware pr\xe9compil\xe9"}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Ici, vous trouverez des firmwares pr\xe9compil\xe9s."}),"\n",(0,r.jsx)(n.li,{children:"Notez que l'ordinateur h\xf4te doit pouvoir se connecter \xe0 Internet pour l'installation."}),"\n",(0,r.jsx)(n.li,{children:"L'ordinateur h\xf4te doit ex\xe9cuter la commande ci-dessous pour t\xe9l\xe9charger le paquet de firmware."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd && git clone https://github.com/FengHua741/FLY_Katapult.git\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Il est recommand\xe9 de mettre \xe0 jour le paquet de firmware avant de continuer avec les autres \xe9tapes si vous l'avez d\xe9j\xe0 t\xe9l\xe9charg\xe9."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/FLY_Katapult && git pull\n"})})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},38524:function(e,n,i){i.d(n,{ZP:function(){return a},d$:function(){return s}});var r=i(52676),l=i(79938);let s=[];function t(e){let n={admonition:"admonition",code:"code",li:"li",ol:"ol",strong:"strong",ul:"ul",...(0,l.a)(),...e.components},{Button:s,ImageView:t}=n;return!s&&o("Button",!0),!t&&o("ImageView",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"Attention",type:"danger",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Probl\xe8mes de compatibilit\xe9 du syst\xe8me, veuillez utiliser ",(0,r.jsx)(n.code,{children:"USB2.0"})," de l'ordinateur pour flasher"]}),"\n",(0,r.jsx)(n.li,{children:"Si cela ne fonctionne toujours pas, essayez de flasher avec un autre logiciel h\xf4te"}),"\n"]})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Outil de flashage ",(0,r.jsx)(s,{variant:"contained",disableElevation:!0,href:"https://mellow-next.klipper.cn/docs/ResDownload/auxiliary_software/",children:"Lien de t\xe9l\xe9chargement"})]}),"\n",(0,r.jsxs)(n.li,{children:["Vous devez t\xe9l\xe9charger ",(0,r.jsx)(n.code,{children:"SetupSTM32CubeProgrammer"})," et ",(0,r.jsx)(n.code,{children:"STM32 DFU Driver"})]}),"\n",(0,r.jsxs)(n.li,{children:["Copiez le firmware compil\xe9 pr\xe9c\xe9demment (klipper.bin) ou le firmware ",(0,r.jsx)(n.code,{children:"Katapult"})," pr\xe9compil\xe9 dans un r\xe9pertoire de votre choix sur l'ordinateur"]}),"\n",(0,r.jsxs)(n.li,{children:["Connectez la carte m\xe8re \xe0 l'ordinateur avec un c\xe2ble Type-C, assurez-vous d'\xeatre en ",(0,r.jsx)(n.strong,{children:"mode DFU"})]}),"\n",(0,r.jsxs)(n.li,{children:["Dans STM32CubeProgrammer, s\xe9lectionnez le mode USB, et actualisez, connectez","\n",(0,r.jsx)(t,{image:i(54411).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Si aucune fen\xeatre d'erreur n'appara\xeet, la connexion est r\xe9ussie"}),"\n",(0,r.jsxs)(n.li,{children:["Cliquez sur l'ic\xf4ne de t\xe9l\xe9chargement \xe0 gauche et cochez les options ci-dessous","\n",(0,r.jsx)(t,{image:i(88789).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Cliquez sur ",(0,r.jsx)(n.code,{children:"Browse"})," indiqu\xe9 par la fl\xe8che, puis s\xe9lectionnez le firmware que vous souhaitez flasher","\n",(0,r.jsx)(t,{image:i(34319).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["S\xe9lectionnez ",(0,r.jsx)(n.code,{children:"Start address"})," et entrez ",(0,r.jsx)(n.code,{children:"0x08000000"}),"\n",(0,r.jsx)(t,{image:i(18134).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Cliquez sur ",(0,r.jsx)(n.code,{children:"Start automatic mode"})," ci-dessous pour commencer \xe0 flasher le firmware","\n",(0,r.jsx)(t,{image:i(92085).Z,size:"100%",align:"center"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Si l'invite ci-dessous appara\xeet, cela signifie que le flashe du firmware est termin\xe9","\n",(0,r.jsx)(t,{image:i(61566).Z,size:"100%",align:"center"}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}function o(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16733:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>d,toc:()=>u,frontMatter:()=>o});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl","title":"Firmware BL","description":"* Veuillez noter que l\'usine a d\xe9j\xe0 pr\xe9-flash\xe9 le bootloader, pas besoin de le reflasher","source":"@site/i18n/fr/docusaurus-plugin-content-docs/current/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl.mdx","sourceDirName":"ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash","slug":"/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/bl.mdx","tags":[],"version":"current","lastUpdatedBy":"Xiaok","lastUpdatedAt":1732265789000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"sidebar_label":"Firmware BL, ignorez s\'il vous pla\xeet"},"sidebar":"tutorialSidebar","previous":{"title":"Tutoriel de recherche d\'ID","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/flash/id"},"next":{"title":"klipper\u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/fr/docs/ProductDoc/MainBoard/fly-gemini/fly-gemini-v3/cfg"}}'),l=i("52676"),s=i("79938"),t=i("38524"),a=i("72147");i("19339");let o={sidebar_position:6,sidebar_label:"Firmware BL, ignorez s'il vous pla\xeet"},c="Firmware BL",d={},u=[{value:"Entrer en mode de programmation",id:"entrer-en-mode-de-programmation",level:2},{value:"Programmation du firmware",id:"programmation-du-firmware",level:2},...t.d$,...a.d$];function p(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Button:r,ImageView:o,TabItem:c,Tabs:d}=n;return!r&&h("Button",!0),!o&&h("ImageView",!0),!c&&h("TabItem",!0),!d&&h("Tabs",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"firmware-bl",children:"Firmware BL"})}),"\n",(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Veuillez noter que l'usine a d\xe9j\xe0 pr\xe9-flash\xe9 le ",(0,l.jsx)(n.code,{children:"bootloader"}),", pas besoin de le reflasher"]}),"\n"]})}),"\n",(0,l.jsx)(n.h2,{id:"entrer-en-mode-de-programmation",children:"Entrer en mode de programmation"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Il y a deux m\xe9thodes pour entrer en mode de programmation"}),"\n",(0,l.jsx)(n.li,{children:"La premi\xe8re : avec la carte m\xe8re compl\xe8tement d\xe9connect\xe9e, court-circuitez BOOT et BOOT1 puis connectez un c\xe2ble de donn\xe9es \xe0 la carte m\xe8re et \xe0 votre appareil"}),"\n",(0,l.jsxs)(n.li,{children:["La deuxi\xe8me : apr\xe8s avoir connect\xe9 un c\xe2ble de donn\xe9es \xe0 la carte m\xe8re et \xe0 votre appareil, court-circuitez BOOT et BOOT1, puis appuyez sur la touche RST, rel\xe2chez la touche RST et enfin d\xe9branchez le court-circuit BOOT","\n",(0,l.jsx)(o,{image:i(23808).Z,size:"100%",align:"center"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"programmation-du-firmware",children:"Programmation du firmware"}),"\n",(0,l.jsxs)(d,{children:[(0,l.jsxs)(c,{value:"win",label:"Tutoriel de programmation sous Windows",default:!0,children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Firmware bootloader pour Gemini ",(0,l.jsx)(r,{variant:"contained",disableElevation:!0,href:"https://cdn.mellow.klipper.cn/firmware/BL/GeminiV3.bin",children:"Cliquez pour t\xe9l\xe9charger automatiquement le firmware"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["D\xe9placez les commutateurs DIP ",(0,l.jsx)(n.code,{children:"3"}),", ",(0,l.jsx)(n.code,{children:"4"})," vers la droite pour connecter l'appareil de commande avec l'appareil h\xf4te via USB int\xe9gr\xe9"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["D\xe9placez les commutateurs DIP ",(0,l.jsx)(n.code,{children:"1"}),", ",(0,l.jsx)(n.code,{children:"2"})," vers la gauche, sinon cela affectera la connexion entre l'appareil de commande et l'appareil h\xf4te"]}),"\n",(0,l.jsx)(o,{image:i(52268).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),(0,l.jsx)(t.ZP,{})]}),(0,l.jsxs)(c,{value:"linux",label:"Tutoriel de programmation depuis l'h\xf4te",children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["D\xe9placez les commutateurs DIP ",(0,l.jsx)(n.code,{children:"1"}),", ",(0,l.jsx)(n.code,{children:"2"})," vers la droite pour connecter l'appareil de commande avec l'appareil h\xf4te via USB int\xe9gr\xe9"]}),"\n",(0,l.jsxs)(n.li,{children:["D\xe9placez les commutateurs DIP ",(0,l.jsx)(n.code,{children:"3"}),", ",(0,l.jsx)(n.code,{children:"4"})," vers la gauche, sinon cela affectera la connexion entre l'appareil de commande et l'appareil h\xf4te","\n",(0,l.jsx)(o,{image:i(4742).Z,size:"50%",align:"center"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["Apr\xe8s avoir d\xe9plac\xe9 les commutateurs DIP comme indiqu\xe9 ci-dessus, le port USB ci-dessous sera occup\xe9 par l'appareil de commande, ne connectez pas d'autres appareils","\n",(0,l.jsx)(o,{image:i(62977).Z,size:"50%",align:"center"}),"\n"]}),"\n"]}),(0,l.jsx)(a.ZP,{}),(0,l.jsxs)(n.ol,{start:"4",children:["\n",(0,l.jsx)(n.li,{children:"Programmation du firmware"}),"\n"]}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Il suffit de programmer un seul firmware"})}),(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Voici la commande pour flasher le firmware bootloader","\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"sudo dfu-util -a 0 -d 0483:df11 --dfuse-address 0x08000000 -D ~/FLY_Katapult/BL/Gemini/GeminiV3.bin\n"})}),"\n"]}),"\n"]}),(0,l.jsxs)(n.ol,{start:"5",children:["\n",(0,l.jsxs)(n.li,{children:["Si le message suivant appara\xeet, la programmation a r\xe9ussi : ",(0,l.jsx)(n.code,{children:"File downloaded successfully"})]}),"\n"]}),(0,l.jsx)(n.admonition,{type:"warning",children:(0,l.jsxs)(n.p,{children:["Ignorez l'erreur ",(0,l.jsx)(n.strong,{children:"apr\xe8s"})," la ligne indiqu\xe9e par la fl\xe8che rouge !!!"]})}),(0,l.jsx)(o,{image:i(69056).Z,size:"100%",align:"center"}),(0,l.jsx)(n.admonition,{type:"tip",children:(0,l.jsx)(n.p,{children:"Une fois la programmation termin\xe9e, il est n\xe9cessaire de couper compl\xe8tement l'alimentation de la carte m\xe8re une fois."})})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}function h(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},44691:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/lsusb-460d7d3379cb644139898385fd86f2ec.webp"},69056:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/make-flash-85b1e01b14ed5924982a2ae7cb6501f0.webp"},54411:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-1-4d518a7b7231de7da7230ae63b82e477.webp"},88789:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-2-8f9f2f15bea5e6acf6c39175f13140fc.webp"},34319:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-3-51ae6c039223223689cbcab82827c416.webp"},18134:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-4-9cf41c6403736a50cf97b75379c12579.webp"},92085:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-5-02cc80158d21b9919d8815237e5555f3.webp"},61566:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/stm32cube-6-6011a605b09f201c9daa91f53d1c8fca.webp"},62977:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/usb-53255bdb9281af5f357a85c4b4ceb1be.webp"},23808:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/boot-0b447ca885909e438bd97d564f106caf.webp"},4742:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/dip1-891542cd5c3d510a77a1b520b5cf1d26.webp"},52268:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/dip3-4a1e2c21589a03ed82aa1c70e286cc25.webp"},79938:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return t}});var r=i(75271);let l={},s=r.createContext(l);function t(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);