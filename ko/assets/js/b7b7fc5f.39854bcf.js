"use strict";(self.webpackChunkklipper_docs=self.webpackChunkklipper_docs||[]).push([["24707"],{4103:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>a,default:()=>d,assets:()=>p,toc:()=>_,frontMatter:()=>s});var r=JSON.parse('{"id":"ProductDoc/MainBoard/fly-micro/fly-micro4/cfg","title":"Klipper\u53C2\u8003\u914D\u7F6E","description":"","source":"@site/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/cfg.mdx","sourceDirName":"ProductDoc/MainBoard/fly-micro/fly-micro4","slug":"/ProductDoc/MainBoard/fly-micro/fly-micro4/cfg","permalink":"/fly-docs-next/ko/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/cfg","draft":false,"unlisted":false,"editUrl":"https://github.com/kluoyun/fly-docs-next/tree/master/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/cfg.mdx","tags":[],"version":"current","lastUpdatedBy":"fenghua","lastUpdatedAt":1725931817000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"sidebar_label":"Klipper\u53C2\u8003\u914D\u7F6E"},"sidebar":"tutorialSidebar","previous":{"title":"\uBA54\uC778\uBCF4\uB4DC \uC5F0\uACB0","permalink":"/fly-docs-next/ko/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/wiring"},"next":{"title":"CAN \uBE0C\uB9AC\uC9D5","permalink":"/fly-docs-next/ko/docs/ProductDoc/MainBoard/fly-micro/fly-micro4/canbridge"}}'),o=t("52676"),i=t("79938");let s={sidebar_position:5,sidebar_label:"Klipper\u53C2\u8003\u914D\u7F6E"},a="Klipper\u53C2\u8003\u914D\u7F6E",p={},_=[];function c(n){let e={code:"code",h1:"h1",header:"header",pre:"pre",...(0,i.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"klipper\u53C2\u8003\u914D\u7F6E",children:"Klipper\u53C2\u8003\u914D\u7F6E"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-cfg",children:"####################################################################################\n#                                         3D MELLOW                                #\n####################################################################################\n## Fly micro\u8D44\u6599\u7F51\u5740\uFF1Ahttp://mellow.klipper.cn/#/board/fly_micro/README\n## Fly micro\u539F\u7406\u56FE\u7F51\u5740\uFF1Ahttp://mellow.klipper.cn/#/board/fly_micro/schematic\n## FLY \u5B98\u65B9\u6DD8\u5B9D\u5E97\uFF1Ahttps://shop126791347.taobao.com/shop/view_shop.htm?spm=a230r.1.14.4.1a4840a8hyvpPJ&user_number_id=2464680006\n## \u5982\u9700\u552E\u540E\uFF0C\u8BF7\u8054\u7CFB\u6DD8\u5B9D\u5BA2\u670D\n## FLY \u552E\u540E\u6280\u672F\u652F\u6301\u7FA4\uFF1A621032883\n## FLY#RRF\u56FA\u4EF6\u4EA4\u6D41\u7FA4\uFF1A786561979\n\n#####################################################################\n#      Notes\n#####################################################################\n##***\u9700\u8981\u66F4\u6539/\u68C0\u67E5\u7684\u4E8B\u9879\uFF1A***\n## MCU \u8DEF\u5F84                                [mcu] \n## \u6253\u5370\u673A\u6D3B\u52A8\u8303\u56F4                           xyz\u7684position   \n## \u70ED\u654F\u7535\u963B\u7C7B\u578B                             [extruder] \u548C [heater_bed]\n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u505C\u6B62\u4F4D\u7F6E                      [safe_z_home] \n## Z\u8F74\u9650\u4F4D\u5F00\u5173\u504F\u79FB\u4F4D\u7F6E                      [stepper_z] \n## PID \u6821\u51C6                               [extruder] \u548C [heater_bed] \n## \u5FAE\u8C03\u6324\u51FA\u673A\u7535\u673A\u6B65\u8FDB\u503C                     [extruder] \n\n#####################################################################\n#      file invocation\n#####################################################################\n[include fluidd.cfg]          # FLUIDD\u8C03\u7528\u6587\u4EF6\u3002\n#[include mainsail.cfg]        # MAINSDIL\u8C03\u7528\u6587\u4EF6\u3002\n#\u9700\u8981\u81EA\u884C\u786E\u5B9A\u4F7F\u7528\u54EA\u4E2A\u6587\u4EF6\n\n#####################################################################\n#      Master ID Configuration\n#####################################################################\n[mcu]\nserial: /dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\n### \u67E5\u8BE2usb\u56FA\u4EF6id\u662F\uFF1Als /dev/serial/by-id/*\n### \u628A/dev/serial/by-id/usb-Klipper_rp2040_MELLOW-if00\u66FF\u6362\u67E5\u8BE2\u5230\u7684id\n#canbus_uuid: 114514114514\n### \u67E5\u8BE2can\u56FA\u4EF6id\u662F\uFF1A~/klippy#env/bin/python ~/klipper/scripts/canbus_query.py can0\n### can\u7684id\u9700\u8981\u628Aserial\u66FF\u6362\u6210canbus_uuid: \u540E\u9762\u6DFB\u52A0id \n\n#####################################################################\n#      Temperature monitoring\n#####################################################################\n[temperature_sensor Micro4]        #\u663E\u793A\u4E3B\u677F\u7684\u6E29\u5EA6\nsensor_type: temperature_mcu\n#####################################################################\n# [temperature_sensor lite2]       #\u4E0A\u4F4D\u673A\u6E29\u5EA6\n# sensor_type: temperature_host\n\n#####################################################################\n#      Tmodel and acceleration\n#####################################################################\n[printer]\nkinematics: corexy\nmax_velocity: 200\nmax_accel: 2000\nmax_z_velocity: 15\nmax_z_accel: 300\nsquare_corner_velocity: 6.0\n\n#####################################################################\n#      X/Y Stepper Settings\n#####################################################################\n\n[stepper_x]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin: gpio6\ndir_pin:gpio3                                    # Check motor direction in link above. If inverted, add a ! before gpio3 \nenable_pin:!gpio7\nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200                    # Set to 400 for 0.9\xb0 degree stepper motor, 200 is for 1.8\xb0 stepper motors\nendstop_pin: tmc2209_stepper_x:virtual_endstop\nposition_endstop: 120\nposition_max: 120\nhoming_speed: 40                                # for sensorless homing it is recommended not to go above 40mm/s   \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_x]\nuart_pin:gpio9\nuart_address:0\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0                        # Set to 999999 to turn stealthchop on, and 0 to use spreadcycle\ndiag_pin: ^gpio13\ndriver_SGTHRS: 80\n\n[stepper_y]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin:gpio1\ndir_pin:gpio0                                    # Check motor direction in link above. If inverted, add a ! before gpio0\nenable_pin:!gpio2\nrotation_distance: 40\nmicrosteps: 32\nfull_steps_per_rotation: 200\nendstop_pin: tmc2209_stepper_y:virtual_endstop\nposition_endstop: 120\nposition_max: 120\nhoming_speed: 40 \nhoming_retract_dist: 0\nhoming_positive_dir: true\n\n[tmc2209 stepper_y]\nuart_pin:gpio9\nuart_address:1\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\ndiag_pin: ^gpio14\ndriver_SGTHRS: 80\n\n#####################################################################\n#   Z Stepper Settings\n#####################################################################\n[stepper_z]\n## Refer to https://docs.vorondesign.com/build/startup/#v0\nstep_pin: gpio26\ndir_pin:!gpio25                                    # Check motor direction in link above. If inverted, add a ! before gpio25\nenable_pin: !gpio27\nrotation_distance: 8\nmicrosteps: 32\nendstop_pin: ^gpio12\nposition_endstop: 105\nposition_max: 105\nposition_min: -1.5\nhoming_speed: 20\nsecond_homing_speed: 3.0\nhoming_retract_dist: 3.0\n\n[tmc2209 stepper_z]\nuart_pin:gpio9\nuart_address:2\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n#####################################################################\n#   Extruder\n#####################################################################\n[extruder]\n## Type of sensor # common thermistors are (Generic 3950, ATC Semitec 104GT#2)\n## \u4F20\u611F\u5668\u7C7B\u578B#\u5E38\u89C1\u7684\u70ED\u654F\u7535\u963B\u5668\u662F (Generic 3950, ATC Semitec 104GT#2)\nsensor_type: ATC Semitec 104GT-2\nsensor_pin: gpio28\n#####################################################################\n## If using PT1000, please connect the jumper next to the thermal sensitivity.\n## \u5982\u679C\u4F7F\u7528PT1000\u8BF7\u5C06\u70ED\u654F\u65C1\u8FB9\u8DF3\u7EBF\u63A5\u4E0A\n# sensor_type:PT1000\n#pullup_resistor: 1100\n#sensor_pin: gpio28\n\n#####################################################################\n#      extruder\n#####################################################################\n## https://www.klipper3d.org/Config_Reference.html#extruder\n[extruder]\nstep_pin: gpio23\ndir_pin: gpio22\nenable_pin: !gpio24\nrotation_distance: 21.84\n## rotation_distance = The original rotation_distance multiplied by the actual extrusion length divided by the requested extrusion length.\n## \u6821\u51C6\u6B65\u8FDB\u503C: 22.44=\u65E7\u503C22*\u5B9E\u9645\u503C102/\u76EE\u6807\u503C100\ngear_ratio:50:10\n## \u51CF\u901F\u6BD4\uFF08\u4F3D\u5229\u7565\u9F7F\u6BD47.5:1 \u5E76\u4E14\u8FD9\u884C\u6CE8\u91CA\u6389\uFF1BBMG\u4E3A50\uFF1A17\uFF0C\u8F93\u51FA\u8F74\u5728\u524D\uFF0C\u8F93\u5165\u8F74\u5728\u540E\uFF09\nmicrosteps:16\nfull_steps_per_rotation: 200    \nnozzle_diameter:0.400\nfilament_diameter:1.75\nheater_pin: gpio20\nmin_temp: -50\nmax_temp: 350\nmax_power: 1.0\nmin_extrude_temp: 150\npressure_advance: 0.05\n##Pressure in advance\n##\u538B\u529B\u63D0\u524D\n##https://www.klipper3d.org/zh/Pressure_Advance.html\npressure_advance_smooth_time: 0.040\n#max_extrude_only_distance: 200.0   # \u6324\u51FA\u6D41\u91CF\u62A5\u9519\u53EF\u4EE5\u6CE8\u91CA\u8FD9\u4E2A\uFF0C\u4F46\u662F\u5EFA\u8BAE\u91CD\u65B0\u5207\u7247\n#\u55B7\u5634\u6E29\u5EA6PID\u6821\u51C6\u547D\u4EE4\uFF1A  \"PID_CALIBRATE HEATER=extruder TARGET=245\ncontrol: pid\npid_kp: 26.213\npid_ki:1.304\npid_kd: 131.721\nstep_pulse_duration: 0.000004\n\n[tmc2209 extruder]\nuart_pin:gpio9\nuart_address:3\ninterpolate: False\nrun_current: 0.8\nsense_resistor: 0.110\nstealthchop_threshold: 0\n\n\n#####################################################################\n#   Bed Heater\n#####################################################################\n[heater_bed]\nheater_pin: gpio21\n## Check what thermistor type you have. See https://www.klipper3d.org/Config_Reference.html#common#thermistors for common thermistor types.\n## Use \"Generic 3950\" for Keenovo heaters\nsensor_type:Generic 3950\nsensor_pin: gpio29\nsmooth_time: 3.0\n#max_power: 0.6                                                     # Only needed for 100w pads\nmin_temp: -50\nmax_temp: 120\ncontrol: pid                                                        # Do PID calibration after initial checks\npid_kp: 68.453\npid_ki: 2.749\npid_kd: 426.122\n\n#####################################################################\n# Fan Control\n#####################################################################\n[fan]\npin: gpio16\nmax_power: 1.0\nkick_start_time: 0.5                                                # Depending on your fan, you may need to increase this value if your fan will not start\noff_below: 0.13\ncycle_time: 0.010\n#####################################################################\n[heater_fan hotend_fan]\npin: gpio17\nmax_power: 1.0\nkick_start_time: 0.5\nheater: extruder\nheater_temp: 50.0\n\n#####################################################################\n#   Filament Runout Sensor\n#####################################################################\n#[filament_switch_sensor Filament_Runout_Sensor]\n#pause_on_runout: True\n#runout_gcode: PAUSE\n#switch_pin: gpio11\n\n\n#####################################################################\n# Homing and Gantry Adjustment Routines\n#####################################################################\n\n[idle_timeout]\ntimeout: 1800\n\n[homing_override]\naxes: xyz\nset_position_z: 0\ngcode:\nG90\nG0 Z5 F600\n{% set home_all = 'X' not in params and 'Y' not in params and 'Z' not in params %}\n\n{% if home_all or 'X' in params %}\n    _HOME_X\n{% endif %}\n\n{% if home_all or 'Y' in params %}\n    _HOME_Y\n{% endif %}\n\n{% if home_all or 'Z' in params %}\n    _HOME_Z\n{% endif %}\n\n\n#[safe_z_home]                      Only needed if you are using V0.0 or V0.1 Z endstop location\n#home_xy_position: 120,120\n#speed: 50.0\n#z_hop: 5\n\n## To be used with BED_SCREWS_ADJUST\n[bed_screws]\nscrew1: 60,5\nscrew1_name: front screw\nscrew2: 5,115\nscrew2_name: back left\nscrew3: 115,115\nscrew3_name: back right\nProbe_height: 0.1\n\n#####################################################################\n# Macros\n#####################################################################\n\n[gcode_macro PRINT_START]\n#   Use PRINT_START for the slicer starting script # please customize for your slicer of choice\ngcode:\n    G28                            ; home all axes\n    G90                            ; absolute positioning    \n    G1 Z20 F3000                   ; move nozzle away from bed\n\n[gcode_macro PRINT_END]\n#   Use PRINT_END for the slicer ending script - please customize for your slicer of choice\ngcode:\n    M400                           ; wait for buffer to clear\n    G92 E0                         ; zero the extruder\n    G1 E-4.0 F3600                 ; retract filament\n    G91                            ; relative positioning\n\n    #   Get Boundaries\n    {% set max_x = printer.configfile.config[\"stepper_x\"][\"position_max\"]|float %}\n    {% set max_y = printer.configfile.config[\"stepper_y\"][\"position_max\"]|float %}\n    {% set max_z = printer.configfile.config[\"stepper_z\"][\"position_max\"]|float %}\n\n    #   Check end position to determine safe direction to move\n    {% if printer.toolhead.position.x < (max_x - 20) %}\n        {% set x_safe = 20.0 %}\n    {% else %}\n        {% set x_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.y < (max_y - 20) %}\n        {% set y_safe = 20.0 %}\n    {% else %}\n        {% set y_safe = -20.0 %}\n    {% endif %}\n\n    {% if printer.toolhead.position.z < (max_z - 2) %}\n        {% set z_safe = 2.0 %}\n    {% else %}\n        {% set z_safe = max_z - printer.toolhead.position.z %}\n    {% endif %}\n\n    G0 Z{z_safe} F3600             ; move nozzle up\n    G0 X{x_safe} Y{y_safe} F20000  ; move nozzle to remove stringing\n    TURN_OFF_HEATERS\n    M107                           ; turn off fan\n    G90                            ; absolute positioning\n    G0 X60 Y{max_y-10} F3600          ; park nozzle at rear\n\n[gcode_macro LOAD_FILAMENT]\ngcode:\nM83                            ; set extruder to relative\nG1 E30 F300                    ; load\nG1 E15 F150                    ; prime nozzle with filament\nM82                            ; set extruder to absolute\n    \n[gcode_macro UNLOAD_FILAMENT]\ngcode:\nM83                            ; set extruder to relative\nG1 E10 F300                    ; extrude a little to soften tip\nG1 E#40 F1800                  ; retract some, but not too much or it will jam\nM82                            ; set extruder to absolute\n\n[gcode_macro _HOME_X]\ngcode:\n    # Always use consistent run_current on A/B steppers during sensorless homing\n    {% set RUN_CURRENT_X = printer.configfile.settings['tmc2209 stepper_x'].run_current|float %}\n    {% set RUN_CURRENT_Y = printer.configfile.settings['tmc2209 stepper_y'].run_current|float %}\n    {% set HOME_CURRENT_RATIO = 0.7 %} # by default we are dropping the motor current during homing. you can adjust this value if you are having trouble with skipping while homing\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_Y}\n\n    # Home\n    G28 X\n    # Move away\n    G91\n    G1 X#10 F1200\n    \n    # Wait for StallGuard registers to clear\n    M400\n    G90\n    # Set current during print\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={RUN_CURRENT_Y}\n\n[gcode_macro _HOME_Y]\ngcode:\n    # Set current for sensorless homing\n    {% set RUN_CURRENT_X = printer.configfile.settings['tmc2209 stepper_x'].run_current|float %}\n    {% set RUN_CURRENT_Y = printer.configfile.settings['tmc2209 stepper_y'].run_current|float %}\n    {% set HOME_CURRENT_RATIO = 0.7 %} # by default we are dropping the motor current during homing. you can adjust this value if you are having trouble with skipping while homing\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={HOME_CURRENT_RATIO * RUN_CURRENT_Y}\n\n    # Home\n    G28 Y\n    # Move away\n    G91\n    G1 Y#10 F1200\n\n    # Wait for StallGuard registers to clear\n    M400\n    G90\n    # Set current during print\n    SET_TMC_CURRENT STEPPER=stepper_x CURRENT={RUN_CURRENT_X}\n    SET_TMC_CURRENT STEPPER=stepper_y CURRENT={RUN_CURRENT_Y}\n\n[gcode_macro _HOME_Z]\ngcode:\n    G90\n    G28 Z\n    G1 Z30\n\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(c,{...n})}):c(n)}},79938:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return s}});var r=t(75271);let o={},i=r.createContext(o);function s(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);