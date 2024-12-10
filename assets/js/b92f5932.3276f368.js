"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["32310"],{50549:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>c,assets:()=>_,toc:()=>p,frontMatter:()=>s});var r=JSON.parse('{"id":"DebugDoc/ref-config/voron2.4","title":"VORON 2.4 \u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/DebugDoc/ref-config/voron2.4.mdx","sourceDirName":"DebugDoc/ref-config","slug":"/DebugDoc/ref-config/voron2.4","permalink":"/fly-docs-next/docs/DebugDoc/ref-config/voron2.4","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/DebugDoc/ref-config/voron2.4.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1728976228000,"sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"debugdocSidebar","previous":{"title":"\u52A0\u70ED\u5BB9\u5DEE\u914D\u7F6E","permalink":"/fly-docs-next/docs/DebugDoc/ref-config/verify_heater"},"next":{"title":"VORON Trident \u53C2\u8003\u914D\u7F6E","permalink":"/fly-docs-next/docs/DebugDoc/ref-config/trident"}}'),i=t("52676"),o=t("79938");let s={sidebar_position:4},a="VORON 2.4 \u53C2\u8003\u914D\u7F6E",_={},p=[];function d(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"voron-24-\u53C2\u8003\u914D\u7F6E",children:"VORON 2.4 \u53C2\u8003\u914D\u7F6E"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cfg",children:'\n#####################################################################\n#      Items to be changed/checked\n#####################################################################\n##***\u9700\u8981\u66F4\u6539/\u68C0\u67E5\u7684\u4E8B\u9879\uFF1A***\n## MCU \u8DEF\u5F84                                [mcu] \n## \u6253\u5370\u673A\u6D3B\u52A8\u8303\u56F4                           xyz\u7684position   \n## \u70ED\u654F\u7535\u963B\u7C7B\u578B                             [extruder] \u548C [heater_bed]\n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u505C\u6B62\u4F4D\u7F6E                      [safe_z_home] \n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u504F\u79FB\u4F4D\u7F6E                      [stepper_z] \n## PID \u6821\u51C6                               [extruder] \u548C [heater_bed] \n## \u5FAE\u8C03\u6324\u51FA\u673A\u7535\u673A\u6B65\u8FDB\u503C                     [extruder] \n\n#####################################################################\n#      file invocation\n#####################################################################\n### \u5F53\u60A8\u4F7F\u7528fuidd\u6216\u8005mainsail\u4F5C\u4E3A\u524D\u7AEF\u65F6\uFF0C\u8BF7\u5220\u9664#[include XXX.cfg]\u524D\u9762\u7684#\u3002\n### When using fuidd or mainsail as the frontend, remove the \'#\' before #[include XXX.cfg].\n[include fluidd.cfg]\n#[include mainsail.cfg]\n\n### \u4E0B\u9762/home/fly\u4E2D\u7684fly\u9700\u8981\u66FF\u6362\u6210\u4F60\u7684\u4E0A\u4F4D\u673A\u7528\u6237\uFF0C\u8BF7\u6CE8\u610F\u4E0D\u662FROOT\u7528\u6237\n### Replace \'fly\' in /home/fly with your host computer username, ensuring it\'s not the ROOT user.\n[virtual_sdcard]\npath: /home/fly/printer_data/gcodes\non_error_gcode: CANCEL_PRINT\n\n\n#####################################################################\n#      Master ID Configuration\n#####################################################################\n[mcu]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\n### \u4F7F\u7528is/dev/Serial/by-id/*\u67E5\u627EUSB\u56FA\u4EF6ID\uFF0C\u5E76\u5C06\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\u66FF\u6362\u4E3A\u60A8\u53D1\u73B0\u7684ID\u3002\n### Find the USB firmware ID with: ls /dev/serial/by-id/* and replace\n### /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00 with the ID you discover.\n\n#canbus_uuid: 114514114514\n### \u67E5\u8BE2can\u56FA\u4EF6id\u662F\uFF1A~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628Aserial: \u66FF\u6362\u6210canbus_uuid: \u540E\u9762\u6DFB\u52A0id \n### Query the CAN firmware ID with: ~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### Replace \'serial:\' in the CAN ID with \'canbus_uuid:\', then append the ID.\n\n#####################################################################\n#      Temperature monitoring\n#####################################################################\n[temperature_sensor motherboard]\nsensor_type: temperature_mcu\n\n[temperature_sensor Raspberry Pi]\nsensor_type: temperature_host\n\n#####################################################################\n#      Tmodel and acceleration\n#####################################################################\n[printer]\nkinematics: corexy\nmax_velocity: 300\nmax_accel: 2000\nmax_z_velocity: 15\nmax_z_accel: 300\nsquare_corner_velocity: 6.0\n\n#####################################################################\n#      X/Y Stepper Settings\n#####################################################################\n\n[stepper_x]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # Check motor direction in link above. If inverted, add a ! before gpio3 \nenable_pin:! \nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200                    # Set to 400 for 0.9\xb0 degree stepper motor, 200 is for 1.8\xb0 stepper motors\nendstop_pin:\n# endstop_pin: tmc2209_stepper_x:virtual_endstop\n# endstop_pin: tmc5160_stepper_x:virtual_endstop\nposition_min: 0\nposition_endstop: 300                           # (250mm-300mm-350mm)\nposition_max: 300                               # (250mm-300mm-350mm)\nhoming_speed: 40                                # for sensorless homing it is recommended not to go above 40mm/s   \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_x]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0                        # Set to 999999 to turn stealthchop on, and 0 to use spreadcycle\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_x]\ncs_pin:\n### spi_bus\u4E0Espi_software\u53EA\u80FD\u4F7F\u7528\u5176\u4E2D\u4E00\u4E2A\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u9A71\u52A8\u91C7\u6837\u7535\u963B\u9700\u8981\u6309\u7740\u9A71\u52A8\u6765\u4FEE\u6539\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n[stepper_y]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:                                        # Check motor direction in link above. If inverted, add a ! before gpio0\nenable_pin:!\nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200\nendstop_pin:\n# endstop_pin: tmc2209_stepper_y:virtual_endstop\n# endstop_pin: tmc5160_stepper_y:virtual_endstop\nposition_min: 0\nposition_endstop: 300\nposition_max: 300\nhoming_speed: 40 \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_y]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\ndiag_pin: ^\ndriver_SGTHRS: 80\n\n[tmc5160 stepper_y]\ncs_pin:\n### spi_bus\u4E0Espi_software\u53EA\u80FD\u4F7F\u7528\u5176\u4E2D\u4E00\u4E2A\n### spi_bus and spi_software can only use one of them.\n# spi_bus:\nspi_software_mosi_pin:\nspi_software_miso_pin:\nspi_software_sclk_pin:\nrun_current: 1.0\ninterpolate: False\n### \u9A71\u52A8\u91C7\u6837\u7535\u963B\u9700\u8981\u6309\u7740\u9A71\u52A8\u6765\u4FEE\u6539\n### The driver sampling resistor needs to be modified according to the driver\nsense_resistor: 0.075\nstealthchop_threshold: 0\ndiag0_pin: ^!\ndriver_SGT: 1\n\n#####################################################################\n#      Z Stepper Settings\n#####################################################################\n\n[stepper_z]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:\ndir_pin:!                                         # Check motor direction in link above. If inverted, add a ! before gpio25\nenable_pin: !\nrotation_distance: 8\nmicrosteps: 32\nendstop_pin: ^\n# endstop_pin: probe:z_virtual_endstop  \nposition_endstop:-0.5\nposition_max: 270\nposition_min: -15\nhoming_speed: 20\nsecond_homing_speed: 3.0\nhoming_retract_dist: 3.0\n\n[tmc2209 stepper_z]\nuart_pin:\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n[stepper_z1]\nstep_pin: \ndir_pin:\nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z1]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n##    Z2 \u6B65\u8FDB\u7535\u673A - \u53F3\u540E\u65B9 on Driver5\n[stepper_z2]\nstep_pin:\ndir_pin:\nenable_pin:!\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z2]\nuart_pin:\ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n[stepper_z3]\nstep_pin: \ndir_pin: \nenable_pin: !\nrotation_distance: 40\ngear_ratio: 80:16\nfull_steps_per_rotation: 200\nmicrosteps: 16\n\n\n[tmc2209 stepper_z3]\nuart_pin: \ninterpolate: false\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n\n#####################################################################\n#      Extruder\n#####################################################################\n[extruder]\n## Type of sensor # common thermistors are (Generic 3950, ATC Semitec 104GT#2)\n## \u4F20\u611F\u5668\u7C7B\u578B#\u5E38\u89C1\u7684\u70ED\u654F\u7535\u963B\u5668\u662F (Generic 3950, ATC Semitec 104GT#2)\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: \n#####################################################################\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n## \u5982\u679C\u4F7F\u7528PT1000\u8BF7\u5C06\u70ED\u654F\u65C1\u8FB9\u8DF3\u7EBF\u63A5\u4E0A\n# sensor_type:PT1000\n# pullup_resistor: 1100\n# sensor_pin: \n#####################################################################\n#      extruder\n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html#extruder\n[extruder]\nstep_pin:\ndir_pin:\nenable_pin: !\nrotation_distance: 21.84\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## \u6821\u51C6\u6B65\u8FDB\u503C: 22.44=\u65E7\u503C22*\u5B9E\u9645\u503C102/\u76EE\u6807\u503C100\ngear_ratio:50:10\n## \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nmicrosteps:16\nfull_steps_per_rotation: 200    \nnozzle_diameter:0.400\nfilament_diameter:1.75\nheater_pin:\nmin_temp: -50\nmax_temp: 300\nmax_power: 1.0\nmin_extrude_temp: 150\npressure_advance: 0.05\n##Pressure in advance\n##\u538B\u529B\u63D0\u524D\n##https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51FA\u6D41\u91CF\u62A5\u9519\u53EF\u4EE5\u6CE8\u91CA\u8FD9\u4E2A\uFF0C\u4F46\u662F\u5EFA\u8BAE\u91CD\u65B0\u5207\u7247\n# \u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A PID_CALIBRATE HEATER=extruder TARGET=245\n# Calibrate the nozzle temperature PID command \uFF1A PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\nstep_pulse_duration: 0.000004\n\n[tmc2209 extruder]\nuart_pin:gpio9\nuart_address:3\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n#####################################################################\n#      Bed Heater\n#####################################################################\n[heater_bed]\nheater_pin: \n## Check what thermistor type you have. See https://www.klipper3d.org/Config_Reference.html#common#thermistors for common thermistor types.\n## Use "Generic 3950" for Keenovo heaters\nsensor_type:\nsensor_pin:\nmax_power: 1.0 \nmin_temp: -50\nmax_temp: 120\n# \u70ED\u5E8A\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A PID_CALIBRATE HEATER=heater_bed TARGET=100\n# Calibrate the heated bed temperature PID command\uFF1A PID_CALIBRATE HEATER=heater_bed TARGET=100\ncontrol: pid\npid_kp: 68.453\npid_ki: 2.749\npid_kd: 426.122\n\n#####################################################################\n#      Fan Control\n#####################################################################\n[fan]\npin: \nmax_power: 1.0\nkick_start_time: 0.5                                                # Depending on your fan, you may need to increase this value if your fan will not start\noff_below: 0.13\ncycle_time: 0.010\n#####################################################################\n[heater_fan hotend_fan]\npin: \nmax_power: 1.0\nkick_start_time: 0.5\nheater: extruder\nheater_temp: 50.0\n\n#####################################################################\n#      Filament Runout Sensor\n#####################################################################\n#[filament_switch_sensor Filament_Runout_Sensor]\n#pause_on_runout: True\n#runout_gcode: PAUSE\n#switch_pin: \n\n#####################################################################\n#      Probe\n#####################################################################\n### TAP\n[probe]\npin:\nx_offset: 0\ny_offset: 0\n# z_offset: 0\nspeed: 10.0\nsamples: 3\nsamples_result: median\nsample_retract_dist: 4.0\nsamples_tolerance: 0.006\nsamples_tolerance_retries: 3\n\n### EDDY\n# [probe_eddy_current fly_eddy_probe]\n# sensor_type: ldc1612\n# z_offset: 0.8\n# i2c_address: 43\n# i2c_mcu:\n# i2c_bus:\n# x_offset: 0\n# y_offset: 0\n# speed:40\n# lift_speed: 5\n\n\n#####################################################################\n#      Homing and Gantry Adjustment Routines\n#####################################################################\n### \u53EA\u80FD\u4F7F\u7528safe_z_home\u6216homing_override\u4E2D\u7684\u4E00\u4E2A\n### You can only use either safe_z_home or homing_override\n#[safe_z_home]\n#home_xy_position: 206,300\n#speed: 100\n#z_hop: 5\n\n#[homing_override]\n#axes: z\n#set_position_z: 0\n#gcode:\n#   G90\n#   G0 Z15 F600\n#   G28 X Y\n#    ## Z \u9650\u4F4D\u5F00\u5173\u7684 XY \u4F4D\u7F6E\n#    ##\u901A\u8FC7\u540E\u5C06X0\u548CY0\u66F4\u65B0\u4E3A\u4F60\u7684\u503C\uFF08\u5982X157\u3001Y305\uFF09\n#    ## Z \u8F74\u9650\u4F4D\u4F4D\u7F6E\u5B9A\u4E49\n#   G0 X185 Y250 F3600    #250mm   \n#   G28 Z\n#   G0 Z10 F1800\n\n#####################################################################\n#      quad_gantry_level\n#####################################################################\n[quad_gantry_level]\n#gantry_corners:\n#    -60,-10\n#    310,320\n#points:                      # 250mm\n#    50,25\n#    50,175\n#    200,175\n#    200,25\n\ngantry_corners:              # 300mm\n   -60,-10\n   360,370\npoints:\n   50,25\n   50,225\n   250,225\n   250,25\n\n#gantry_corners:              # 350mm\n#    -60,-10\n#    410,420\n#points:\n#    50,25\n#    50,275\n#    300,275\n#    300,25\n\nspeed: 100\nhorizontal_move_z: 1\nretry_tolerance: 0.0075\nretries: 5\nmax_adjust: 10\n\n\n#####################################################################\n# Macros\n#####################################################################\n[idle_timeout]\n### \u5982\u679C\u7A7A\u95F2\u8D85\u8FC730\u5206\u949F\uFF0C\u5219\u5173\u95ED\u52A0\u70ED\u5E8A\u3002\n### If idle for more than 30 minutes, heated bed will be turned off.\ntimeout: 1800 \n\n#[gcode_arcs]\n#### \u5141\u8BB8\u5706\u5F27\u63D2\u8865\n#### Allowing arc interpolation\n#resolution: 1.0 \n\n[gcode_macro PRINT_START]          \n### \u5C06 PRINT_START \u8BBE\u7F6E\u4E3A\u5F00\u59CB\u6253\u5370\u65F6\u7684\u5B8F\uFF0C\u81EA\u5B9A\u4E49\u6253\u5370\u524D\u7684\u52A8\u4F5C\n### Set PRINT_START as a macro for the start of printing, customize actions before printing.\ngcode:\n    G92 E0\n    BED_MESH_CLEAR\n    G28\n    quad_gantry_level\n    G28\n    G1 Z20 F3000\n    #BED_MESH_PROFILE LOAD=default  \n    BED_MESH_CALIBRATE adaptive=1 METHOD=scan SCAN_MODE=rapid\n\n[gcode_macro PRINT_END]            \n### \u5C06 PRINT_END \u8BBE\u7F6E\u4E3A\u6253\u5370\u7ED3\u675F\u65F6\u7684\u5B8F\uFF0C\u81EA\u5B9A\u4E49\u6253\u5370\u5B8C\u6210\u4E4B\u540E\u52A8\u4F5C\n### Set PRINT_END as a macro for the end of printing, customize actions after printing completion\ngcode:\n    #   Get Boundaries\n    {% set max_x = printer.configfile.config["stepper_x"]["position_max"]|float %}\n    {% set max_y = printer.configfile.config["stepper_y"]["position_max"]|float %}\n    {% set max_z = printer.configfile.config["stepper_z"]["position_max"]|float %}\n    \n    #   Check end position to determine safe directions to move\n    {% if printer.toolhead.position.x < (max_x - 20) %}\n        {% set x_safe = 20.0 %}\n    {% else %}\n        {% set x_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.y < (max_y - 20) %}\n        {% set y_safe = 20.0 %}\n    {% else %}\n        {% set y_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.z < (max_z - 2) %}\n        {% set z_safe = 2.0 %}\n    {% else %}\n        {% set z_safe = max_z - printer.toolhead.position.z %}\n    {% endif %}\n \n    M400                              # \u7B49\u5F85\u7F13\u51B2\u533A\u6E05\u9664\n    G92 E0                            # \u5C06\u6324\u51FA\u673A\u5F52\u96F6\n    G1 E-10.0 F3600                   # \u7F29\u56DE\u8017\u6750\u4E1D\n    G91                               # \u76F8\u5BF9\u5B9A\u4F4D\n    G0 Z{z_safe} F3600                # \u62AC\u9AD8\u9F99\u95E8\n    G0 X{x_safe} Y{y_safe} F20000     # \u79FB\u52A8\u55B7\u5634\u4EE5\u79FB\u9664\u67B6\u7EBF\n    M104 S0                           # \u5173\u95ED\u6324\u51FA\u5934\n    M140 S0                           # \u5173\u95ED\u70ED\u5E8A\n    M106 S0                           # \u5173\u95ED\u6A21\u578B\u98CE\u6247\n    G90                               # \u8BBE\u7F6E\u7EDD\u5BF9\u5750\u6807\u4F53\u7CFB\n    G0 X{max_x / 2} Y{max_y} F3600    # \u5C06\u55B7\u5634\u505C\u5728\u540E\u90E8\n    BED_MESH_CLEAR                    # \u5378\u8F7D\u7F51\u5E8A\n\n\n#*# <---------------------- SAVE_CONFIG ----------------------\x3e\n#*# DO NOT EDIT THIS BLOCK OR BELOW. The contents are auto-generated.\n#*#\n\n'})})]})}function c(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return s}});var r=t(75271);let i={},o=r.createContext(i);function s(n){let e=r.useContext(o);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);