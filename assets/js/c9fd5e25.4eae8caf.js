"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([[49104],{76298:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>_});const r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-e3/fly-e3-pro/cfg","title":"Klipper\u53c2\u8003\u914d\u7f6e","description":"","source":"@site/docs/ProductDoc/MainBoard/fly-e3/fly-e3-pro/cfg.mdx","sourceDirName":"ProductDoc/MainBoard/fly-e3/fly-e3-pro","slug":"/ProductDoc/MainBoard/fly-e3/fly-e3-pro/cfg","permalink":"/fly-docs-next/docs/ProductDoc/MainBoard/fly-e3/fly-e3-pro/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-e3/fly-e3-pro/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1727600494000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Klipper\u53c2\u8003\u914d\u7f6e"},"sidebar":"tutorialSidebar","previous":{"title":"\u4e3b\u677f\u63a5\u7ebf","permalink":"/fly-docs-next/docs/ProductDoc/MainBoard/fly-e3/fly-e3-pro/wiring"},"next":{"title":"\u4e09\u7ef4\u6a21\u578b\u4e0e\u539f\u7406\u56fe","permalink":"/fly-docs-next/docs/ProductDoc/MainBoard/fly-e3/fly-e3-pro/schematic"}}');var i=t(86070),o=t(15658);const a={sidebar_position:5,sidebar_label:"Klipper\u53c2\u8003\u914d\u7f6e"},p="Klipper\u53c2\u8003\u914d\u7f6e",s={},_=[];function d(n){const e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"klipper\u53c2\u8003\u914d\u7f6e",children:"Klipper\u53c2\u8003\u914d\u7f6e"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cfg",children:'# TMC2209 on board\n# Integrated Linux host\n# "FLY flyboard FLY-E3 Pro" board\n# use this config, the firmware should be compiled for the STM32F407\n# with a "32KiB bootloader".\n\n# after running "make", copy the generated "out/klipper.bin" file to a\n# file named "firmware.bin" on an SD card and then restart the FLYBOARD\n# with that SD card.\n\n# See docs/Config_Reference.md for a description of parameters.\n\n[stepper_x]\nstep_pin: PE3\ndir_pin: !PE2\nenable_pin: !PE5\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: !PA2\nposition_endstop: 0\nposition_max: 210\nhoming_speed: 80\n\n[stepper_y]\nstep_pin: PB9\ndir_pin: PB8\nenable_pin: !PE1\nmicrosteps: 16\nrotation_distance: 40\nendstop_pin: !PB10\nposition_endstop: 210\nposition_max: 210\nhoming_speed: 50\n\n[stepper_z]\nstep_pin: PA15\ndir_pin: !PD7\nenable_pin: !PC2\nmicrosteps: 16\nstep_pulse_duration: 0.0000004\nrotation_distance: 8\nendstop_pin: PC4\nposition_endstop: 0.5\nposition_max: 210\n\n[extruder]\nstep_pin: PD4\ndir_pin: PD3\nenable_pin: !PD6\nmicrosteps: 16\nrotation_distance: 33.500\nnozzle_diameter: 0.400\nfilament_diameter: 1.750\nheater_pin: PA5\nsensor_pin: PA4\nsensor_type: EPCOS 100K B57560G104F\ncontrol: pid\npid_Kp: 22.2\npid_Ki: 1.08\npid_Kd: 114\nmin_temp: 0\nmax_temp: 350\n\n#[extruder1]\n#step_pin: PC13\n#dir_pin: PC0\n#enable_pin: !PC15\n#microsteps: 16\n#rotation_distance: 33.500\n#nozzle_diameter: 0.400\n#filament_diameter: 1.750\n#heater_pin: PC6\n#sensor_pin: PA1\n#sensor_type: EPCOS 100K B57560G104F\n#control: pid\n#pid_Kp: 22.2\n#pid_Ki: 1.08\n#pid_Kd: 114\n#min_temp: 0\n#max_temp: 350\n\n[heater_bed]\nheater_pin: PA0\nsensor_pin: PA3\nsensor_type: ATC Semitec 104GT-2\ncontrol: watermark\nmin_temp: 0\nmax_temp: 200\n\n[fan]  #Fan1\npin: PA6\n#cycle_time: 0.50\n\n[fan]  #Fan4\npin: PB6\n#cycle_time: 0.50\n\n[heater_fan E0]  #Fan0\npin: PA7\n#cycle_time:\nheater: extruder\nheater_temp: 50.0\nfan_speed: 1.0\n\n#[heater_fan E1]  #Fan3\n#pin: PB7\n##cycle_time:\n#heater: extruder1\n#heater_temp: 50.0\n#fan_speed: 1.0\n\n\n\n[mcu]\nserial: /dev/ttyACM0\n\n[mcu host]\nserial: /tmp/klipper_host_mcu\n\n[printer]\nkinematics: corexy\nmax_velocity: 300\nmax_accel: 3000\nmax_z_velocity: 5\nmax_z_accel: 100\n\n[temperature_sensor E3-PRO-MCU]\nsensor_type: temperature_mcu\n\n\n[tmc2209 stepper_x]\nuart_pin: PE4\nrun_current: 0.800\ninterpolate: False\n\n[tmc2209 stepper_y]\nuart_pin: PE0\nrun_current: 0.800\ninterpolate: False\n\n[tmc2209 stepper_z]\nuart_pin: PA8\nrun_current: 0.800\ninterpolate: False\n\n[tmc2209 extruder]\nuart_pin: PD5\nrun_current: 0.800\ninterpolate: False\n\n#[tmc2209 extruder1]\n#uart_pin: PC14\n#run_current: 0.800\n#interpolate: False\n\n\n\n########################################\n# BLTouch\n########################################\n\n#[bltouch]\n#sensor_pin: ^PC5\n#control_pin: PB0\n#pin_move_time: 0.680\n#x_offset: 0.0\n#y_offset: 2.3\n#z_offset: 2.2\n#speed: 70\n\n#[safe_z_home]\n#home_xy_position: 105,105\n\n\n########################################\n# EXP1 / EXP2 (display) pins\n########################################\n\n[board_pins]\naliases:\n    # EXP1 header\n    EXP1_1=PE11, EXP1_3=PA14,  EXP1_5=PE9,   EXP1_7=PE7,  EXP1_9=<GND>,\n    EXP1_2=PE12,  EXP1_4=PE6,  EXP1_6=PE10,   EXP1_8=PE8,  EXP1_10=<5V>,\n    # EXP2 header\n    EXP2_1=PB4, EXP2_3=PA10,  EXP2_5=PA9,  EXP2_7=PA13,   EXP2_9=<GND>,\n    EXP2_2=PB3, EXP2_4=PB2,  EXP2_6=PB5,  EXP2_8=<RST>, EXP2_10=<NC>\n    # Pins EXP2_1, EXP2_6, EXP2_2 are also MISO, MOSI, SCK of bus "spi2"\n\n# See the sample-lcd.cfg file for definitions of common LCD displays.\n\n'})})]})}function c(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}}}]);