System.register("chunks:///_virtual/ConfigUtil.ts",["cc"],(function(t){var n,r;return{setters:[function(t){n=t.cclegacy,r=t._decorator}],execute:function(){var e;n._RF.push({},"1b877W/OK5MhIwmx9rZwh3C","ConfigUtil",void 0);var i=r.ccclass;t("ConfigUtil",i("ConfigUtil")(e=function(){function t(){}return t.getDataByKey=function(t,n,r){if(t&&n){for(var e=t.json,i=Object.keys(e),c=[],o=0;o<i.length;o++){e[o][n];e[o][n]==r&&c.push(e[o])}return c}},t.getDataBySn=function(t,n){if(t){for(var r=t.json,e=Object.keys(r),i=0;i<e.length;i++){var c=r[i];if(r[i].sn==n)return c}return null}},t}())||e);n._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/EffectPlay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./resourceUtil.ts"],(function(t){var e,n,o,r,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Component},function(t){c=t.resourceUtil}],execute:function(){var i;n._RF.push({},"b00degBjppBr4DrfsyaV7LQ","EffectPlay",void 0);var s=o.ccclass;o.property,t("EffectPlay",s("EffectPlay")(i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.update=function(t){},o.play=function(){var t=this;c.getEffect("coin",(function(e,n){e&&console.error(e);var o=instantiate(n);o.parent=t.node,o.setWorldPosition(t.node.getWorldPosition()),t.scheduleOnce((function(){o.destroy()}),2)}))},n}(r))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/EventSlot.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,o,i,c,a,l,s,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,c=t._decorator,a=t.Sprite,l=t.resources,s=t.SpriteFrame,u=t.Component}],execute:function(){var p,f,v,y,d;i._RF.push({},"5ced44nA1VJYY5loyWM+Zer","EventSlot",void 0);var h=c.ccclass,_=c.property;t("EventSlot",(p=h("EventSlot"),f=_(a),p((d=e((y=function(t){function e(){for(var e,r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i))||this,n(e,"icon",d,o(e)),e}r(e,t);var i=e.prototype;return i.start=function(){},i.update=function(t){},i.init=function(t){console.log("yjf____slot data"+t);var e=t.icon,r=l.get("texture/"+e+"/spriteFrame",s);this.icon.spriteFrame=r},e}(u)).prototype,"icon",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=y))||v));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./ConfigUtil.ts","./EffectPlay.ts","./EventSlot.ts","./MainUI.ts","./MapUI.ts","./UserData.ts","./poolManager.ts","./resourceUtil.ts","./rootScene.ts","./tips.ts","./uiManager.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./ConfigUtil.ts","./UserData.ts"],(function(t){var e,i,n,o,s,a,r,c,h,l,u,f,d,v,p,g,_,m,y;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,a=t._decorator,r=t.Node,c=t.Prefab,h=t.JsonAsset,l=t.ScrollView,u=t.macro,f=t.tween,d=t.Vec3,v=t.ParticleSystem,p=t.instantiate,g=t.Vec2,_=t.Component},function(t){m=t.ConfigUtil},function(t){y=t.UserData}],execute:function(){var b,C,S,w,N,x,P,L,M,U,z,D,I,B,E,G,j,k,V,O,R,A,T,F,K,H,J,Z;s._RF.push({},"69124BKloNPKKjGrsmpyZdk","MainUI",void 0);var q=a.ccclass,Q=a.property,W=function(t,e){var i=Math.random();return t+Math.floor((e-t)*i)};t("MainUI",(b=q("MainUI"),C=Q(Number),S=Q(r),w=Q(r),N=Q(r),x=Q({type:c}),P=Q(y),L=Q(r),M=Q(h),U=Q(h),z=Q(h),D=Q({type:c}),I=Q({type:l}),b((G=e((E=function(t){function e(){for(var e,i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return e=t.call.apply(t,[this].concat(s))||this,n(e,"cur_index",G,o(e)),n(e,"particleNode",j,o(e)),n(e,"mapNode",k,o(e)),n(e,"playerNode",V,o(e)),n(e,"itemPrefab",O,o(e)),e.cache_move_count=0,e.cache_forward_move_count=0,e.cache_back_move_count=0,e.isMoveing=!1,n(e,"userDataInfo",R,o(e)),n(e,"effectNode",A,o(e)),n(e,"eventConfig",T,o(e)),n(e,"groupConfig",F,o(e)),n(e,"randomEventConfig",K,o(e)),e.eventSlots=[],e.jsonCache=[],e.eventGroupList=[],e.eventSnList=[],e.isDoubbleScore=!1,e.isDoubbleShaizi=!1,e.doubleShaiziNum=0,n(e,"slotPrefab",H,o(e)),n(e,"scrollView",J,o(e)),n(e,"totalCount",Z,o(e)),e}i(e,t);var s=e.prototype;return s.onLoad=function(){var t=this;this.userDataInfo.init(),cc.view.setResizeCallback((function(){console.log("yjf________resizeCallBack"),t.onUpdatePlayerUi()}))},s.start=function(){this.node.getChildByName("shared").active=!1,this.node.getChildByName("video").active=!1;var t=this.node.getChildByName("shaizi");t&&(t.active=!1);var e=this.node.getChildByName("doubleShaizi");e&&(e.active=!1);var i=this.node.getChildByName("tips");i&&(i.active=!1),this.initMapInfo(),this.initUiInfo(),this.initRandomEvent()},s.update=function(t){},s.startGame=function(){var t=this;this.userDataInfo.getStep()<=0||this.isMoveing||(this.resetScrollOffset(),this.isMoveing=!0,this.scheduleOnce((function(){t.realStartGame()}),.1))},s.initRandomEvent=function(){this.node.getChildByName("box").active=!1,this.schedule(this.showRandomEvent,60,u.REPEAT_FOREVER)},s.showRandomEvent=function(){var t=this.node.getChildByName("box");if(!t.active){t.active=!0;var e=this.node.getChildByName("random_event_start"),i=this.node.getChildByName("random_event_end");t.setPosition(e.getPosition()),f(t).to(1,{position:i.getPosition()},{easing:"cubicInOut"}).call((function(){})).start()}},s.onClickRandomEvent=function(){var t=this.node.getChildByName("box");if(t.active){for(var e=this.randomEventConfig.json,i=Object.keys(e),n=0,o=0;o<i.length;o++){n+=e[o].weight}for(var s=Math.random()*n,a=0,r=null,c=0;c<i.length;c++){var h=e[c];if(s<=(a+=h.weight)){r=h;break}}this.showTips(r.tips),t.active=!1,1==r.type?this.showVideoDialog("看视频获得积分"):2==r.type?this.showVideoDialog("看视频获得投掷次数"):3==r.type&&this.showVideoDialog("看视频获得双倍积分")}},s.realStartGame=function(){var t=this;this.userDataInfo.addStep(-1),this.onUpdateStepUi();var e=null;if(this.doubleShaiziNum>0){this.doubleShaiziNum=this.doubleShaiziNum-1,(e=this.node.getChildByName("doubleShaizi"))&&(e.active=!0);var i=e.getChildByName("shaizi_01"),n=e.getChildByName("shaizi_02"),o=i.getComponent(cc.Animation),s=n.getComponent(cc.Animation);if(o&&s){var a=W(1,7),r=W(1,7);console.log("anim game"),o.play("shaizi0"+a),s.play("shaizi0"+r),o.once(cc.Animation.EventType.FINISHED,(function(){t.cache_move_count=a+r,t.playerMove()}),this)}}else{(e=this.node.getChildByName("shaizi"))&&(e.active=!0);var c=e.getComponent(cc.Animation);if(c){var h=W(1,7);console.log("anim game"),c.play("shaizi0"+h),c.once(cc.Animation.EventType.FINISHED,(function(){t.cache_move_count=h,t.playerMove()}),this)}}this.scheduleOnce((function(){console.log("yjf_________!111111"),e.active=!1,e.emit("fade-out")}),2)},s.initUiInfo=function(){this.initEventInfo(),this.initScrollView(),this.onUpdateStepUi(),this.onUpdateScoreUi(),this.onUpdatePlayerUi()},s.initEventInfo=function(){},s.onUpdateScoreUi=function(){var t=this.node.getChildByName("score");t&&(t.getComponent(cc.Label).string=this.userDataInfo.getScore())},s.onUpdateStepUi=function(){var t=this.node.getChildByName("game_count");t&&(t.getComponent(cc.Label).string=this.userDataInfo.getStep())},s.onUpdatePlayerUi=function(){var t=(this.cur_index-1)%3*200,e=(this.totalCount-this.cur_index)/3*200;this.playerNode.setPosition(t,e,0)},s.onClickAddStepCount=function(){this.addStepCount(1)},s.addStepCount=function(t){this.userDataInfo.addStep(t),this.onUpdateStepUi()},s.playerMove=function(){var t=this;if(0!=this.cache_move_count){var e=null;if(this.node.getChildByName("scrollView")){var i="map_0"+this.cur_index;console.log(i),e=this.eventSlots[this.cur_index-1]}if(e){var n=this.playerNode,o=n.getPosition().x,s=n.getPosition().y;console.log("yjf________this.cur_index:"+this.cur_index),this.cur_index%3==0?s=n.getPosition().y-200:Math.floor(this.cur_index/3)%2==0?o=n.getPosition().x+200:Math.floor(this.cur_index/3)%2==1&&(o=n.getPosition().x-200),this.cache_move_count=this.cache_move_count-1,console.log("yjf_________this.cache_move_count:"+this.cache_move_count),f(n).to(1,{position:new d(o,s,0)},{easing:"cubicInOut"}).call((function(){t.playerMove()})).start(),this.cur_index>=this.totalCount?this.finishGame():this.cur_index=this.cur_index+1}}else this.finishMove()},s.moveForward=function(){var t=this;if(!(this.cache_forward_move_count<=0)){this.isMoveing=!0;var e=this.playerNode,i=e.getPosition().x,n=e.getPosition().y;this.cur_index%3==0?n=e.getPosition().y-200:Math.floor(this.cur_index/3)%2==0?i=e.getPosition().x+200:Math.floor(this.cur_index/3)%2==1&&(i=e.getPosition().x-200),f(e).to(1,{position:new d(i,n,0)},{easing:"cubicInOut"}).call((function(){t.cur_index=t.cur_index+1,t.isMoveing=!1,t.cache_forward_move_count=t.cache_forward_move_count-1,t.moveForward()})).start()}},s.moveBack=function(){var t=this;if(!(this.cache_back_move_count<=0)){this.isMoveing=!0;var e=this.playerNode,i=e.getPosition().x,n=e.getPosition().y;console.log("yjf___this.cur_index: "+this.cur_index),console.log(" yjf  11"+this.cur_index/3),console.log(" yjf  "+Math.floor(this.cur_index/3)),this.cur_index%3==1&&1!=this.cur_index?n=e.getPosition().y+200:Math.floor((this.cur_index-1)/3)%2==0?(console.log("向左"),i=e.getPosition().x-200):Math.floor((this.cur_index-1)/3)%2==1&&(console.log("向右"),i=e.getPosition().x+200),f(e).to(1,{position:new d(i,n,0)},{easing:"cubicInOut"}).call((function(){t.cur_index=t.cur_index-1,t.isMoveing=!1})).start()}},s.finishMove=function(){console.log("yjf___________finishMove"),this.isMoveing=!1;this.eventConfig.json,this.jsonCache[this.cur_index-1];var t=this.eventSnList[this.cur_index-1],e=m.getDataBySn(this.eventConfig,t);console.log("yjf_______jsonData[jsonIndex].type:"+e.type),1==e.type?(this.cache_forward_move_count=e.forwardNum,this.moveForward()):2==e.type?(this.cache_back_move_count=e.backwardNum,this.moveBack()):3==e.type?this.userDataInfo.addStep(e.stepNum):4==e.type?this.isDoubbleScore=!0:5==e.type?this.doubleShaiziNum=e.doubleDice:6==e.type||7==e.type?this.showSharedDialog():(8==e.type||9==e.type)&&this.showVideoDialog(),this.showTips(e.tips),this.onUpdateScoreUi()},s.showTips=function(t){var e=this.node.getChildByName("tips");e&&(e.active=!0,e.getComponent(cc.Label).string=t,f(e).to(1,{position:new d(e.getPosition().x,e.getPosition().y+100,0)},{easing:"cubicOut"}).call((function(){})).start(),this.scheduleOnce((function(){e.active=!1,e.setPosition(e.getPosition().x,e.getPosition().y-100,e.getPosition().z)}),2))},s.finishGame=function(){this.initMapInfo(),this.initScrollView(),this.cur_index=1,this.resetScrollOffset(),this.onUpdatePlayerUi(),this.userDataInfo.addScore(100),this.onUpdateScoreUi()},s.onShowCoinEffect=function(){this.particleNode.getComponent(v).play()},s.initMapInfo=function(){this.eventGroupList=[],this.eventSnList=[],this.eventGroupList.push(11),this.eventSnList.push(1101);for(var t=1;t<this.totalCount-1;t++){for(var e=0,i=this.groupConfig.json,n=Object.keys(i),o=0,s=0;s<n.length;s++)e+=i[s].weigth;for(var a=Math.random()*e,r=0,c=0;c<n.length;c++)if(a<=(r+=i[c].weigth)){o=i[c].group;break}this.eventGroupList.push(o);var h=m.getDataByKey(this.eventConfig,"group",o);if(h){for(var l=0,u=0,f=Math.random(),d=0;d<h.length;d++){var v=h[d],p=v.weight;if(t>2){if(this.eventGroupList[t]==this.eventGroupList[t-1]&&v.sn==this.eventSnList[t-1]){p-=1*p}else if(this.eventGroupList[t]==this.eventGroupList[t-2]&&v.sn==this.eventSnList[t-2]){p=p-.1*p-.2*p}}else if(1==t&&this.eventGroupList[t]==this.eventGroupList[t-1]&&v.sn==this.eventSnList[t-1]){p-=1*p}l+=p}for(var g=f*l,_=0;_<h.length;_++){var y=h[_];p=y.weight;if(t>2){if(this.eventGroupList[t]==this.eventGroupList[t-1]&&y.sn==this.eventSnList[t-1]){p-=1*p}else if(this.eventGroupList[t]==this.eventGroupList[t-2]&&y.sn==this.eventSnList[t-2]){p=p-.1*p-.2*p}}else if(2==t&&this.eventGroupList[t]==this.eventGroupList[t-1]&&y.sn==this.eventSnList[t-1]){p-=1*p}if(g<=(u+=p)){this.eventSnList.push(y.sn);break}}}}this.eventGroupList.push(10),this.eventSnList.push(1001)},s.initScrollView=function(){this.scrollView.content.removeAllChildren(),this.eventSlots.length=0;for(var t=0;t<this.totalCount;t++){var e=this.addEventSlot(t);this.eventSlots.push(e)}this.playerNode.parent=this.eventSlots[99]},s.addEventSlot=function(t){var e=this.eventSnList[t],i=(this.eventConfig.json,p(this.slotPrefab));this.scrollView.content.addChild(i);var n=m.getDataBySn(this.eventConfig,e);return i.getComponent("EventSlot").init(n),this.jsonCache.push(t),i},s.resetScrollOffset=function(){console.log("yjf_______this.scrollView:"+this.scrollView.getScrollOffset());var t=200*(Math.ceil(this.cur_index/3)-1);this.scrollView.scrollToOffset(new g(0,t),1)},s.onClickSignIn=function(){this.finishGame()},s.showSharedDialog=function(){this.node.getChildByName("shared").active=!0},s.onClickShareClose=function(){this.node.getChildByName("shared").active=!1},s.onClickShareEnsure=function(){this.showTips("分享成功")},s.showVideoDialog=function(t){var e=this.node.getChildByName("video");e.getChildByName("content").getComponent(cc.Label).string=t,e.active=!0},s.onClickVideoClose=function(){this.node.getChildByName("video").active=!1},s.onClickVideoEnsure=function(){this.showTips("视频")},e}(_)).prototype,"cur_index",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),j=e(E.prototype,"particleNode",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(E.prototype,"mapNode",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=e(E.prototype,"playerNode",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(E.prototype,"itemPrefab",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(E.prototype,"userDataInfo",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(E.prototype,"effectNode",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=e(E.prototype,"eventConfig",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=e(E.prototype,"groupConfig",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),K=e(E.prototype,"randomEventConfig",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=e(E.prototype,"slotPrefab",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),J=e(E.prototype,"scrollView",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=e(E.prototype,"totalCount",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),B=E))||B));s._RF.pop()}}}));

System.register("chunks:///_virtual/MapUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UserData.ts","./MainUI.ts"],(function(e){var t,i,n,o,r,a,l,c,u,s,p,_,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.Prefab,c=e.ScrollView,u=e.JsonAsset,s=e.Node,p=e.Component},function(e){_=e.UserData},function(e){f=e.MainUI}],execute:function(){var h,m,v,d,y,b,g,I,M,U,x,C,w,D;r._RF.push({},"a1573qZKMBK/5T6tRhvkhXC","MapUI",void 0);var N=a.ccclass,z=a.property;e("MapUI",(h=N("MapUI"),m=z({type:l}),v=z({type:c}),d=z(u),y=z(s),b=z(Number),h((M=t((I=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,n(t,"slotPrefab",M,o(t)),n(t,"scrollView",U,o(t)),n(t,"totalCount",x,o(t)),n(t,"eventConfig",C,o(t)),n(t,"mainNode",w,o(t)),t.eventSlots=[],t.cache_move_count=0,t.isMoveing=!1,n(t,"cur_index",D,o(t)),t.userDataInfo=null,t.mainUI=null,t}i(t,e);var r=t.prototype;return r.start=function(){this.userDataInfo=this.mainNode.getComponent(_),this.mainUI=this.mainNode.getComponent(f),this.init()},r.update=function(e){},r.playerMove=function(e){var t=this;if(e&&(this.cache_move_count=e),0!=this.cache_move_count){this.cache_move_count=this.cache_move_count-1;var i=this.node.getChildByName("scrollView"),n=null;if(i){var o="map_0"+this.cur_index;console.log(o),n=this.eventSlots[this.cur_index-1]}if(n){var r=i.getChildByName("player");r&&console.log("yjf_____player");var a=r.getComponent(cc.Animation);a&&console.log("yjf_____anim");this.cur_index;a.play("player_move_0"+this.cur_index),a.once(cc.Animation.EventType.FINISHED,(function(){console.log("yjf_______anim finish :"+t.cur_index),t.playerMove()}),this),this.cur_index==totalCount?this.cur_index=1:this.cur_index=this.cur_index+1}}else this.finishMove()},r.finishMove=function(){this.isMoveing=!1,this.userDataInfo.addScore(10),this.mainUI.onUpdateScoreUi()},t}(p)).prototype,"slotPrefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(I.prototype,"scrollView",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(I.prototype,"totalCount",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),C=t(I.prototype,"eventConfig",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(I.prototype,"mainNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(I.prototype,"cur_index",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),g=I))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/poolManager.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,e,n,i,r;return{setters:[function(t){o=t.createClass},function(t){e=t.cclegacy,n=t._decorator,i=t.instantiate,r=t.NodePool}],execute:function(){var a,c;e._RF.push({},"907776q4iZNubarZf3Ut3A8","poolManager",void 0);var s=n.ccclass;n.property,t("poolManager",s("poolManager")(((c=function(){function t(){this.dictPool={},this.dictPrefab={}}var e=t.prototype;return e.getNode=function(t,o){var e,n=t.data.name;if(this.dictPrefab[n]=t,this.dictPool.hasOwnProperty(n)){var a=this.dictPool[n];e=a.size()>0?a.get():i(t)}else{var c=new r;this.dictPool[n]=c,e=i(t)}return e.parent=o,e},e.putNode=function(t){var o=t.name,e=null;this.dictPool.hasOwnProperty(o)?e=this.dictPool[o]:(e=new r,this.dictPool[o]=e),e.put(t)},e.clearPool=function(t){this.dictPool.hasOwnProperty(t)&&this.dictPool[t].clear()},o(t,null,[{key:"instance",get:function(){return this._instance||(this._instance=new t),this._instance}}]),t}())._instance=void 0,a=c))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/resourceUtil.ts",["cc"],(function(e){var t,a,r,n,o,i,s,c,u,f,l;return{setters:[function(e){t=e.cclegacy,a=e._decorator,r=e.resources,n=e.error,o=e.Prefab,i=e.instantiate,s=e.find,c=e.SpriteFrame,u=e.isValid,f=e.assetManager,l=e.Texture2D}],execute:function(){var d;t._RF.push({},"c3107+OA2hHXoroY5PJvm/3","resourceUtil",void 0);var g=a.ccclass;e("resourceUtil",g("resourceUtil")(d=function(){function e(){}return e.loadRes=function(e,t,a){t?r.load(e,t,(function(e,t){if(e)return n(e.message||e),void(a&&a(e,t));a&&a(e,t)})):r.load(e,(function(e,t){if(e)return n(e.message||e),void(a&&a(e,t));a&&a(e,t)}))},e.getMap=function(e,t){var a="map";a+=e>=100?e:e>=10?"0"+e:"00"+e,this.loadRes("gamePackage/map/config/"+a,null,(function(e,a){if(e)t(e,a);else{var r=a,n="";if(r._file){window.LZString&&(n=window.LZString.decompressFromEncodedURIComponent(r._file));var o=JSON.parse(n);t(null,o)}else if(r.text){window.LZString&&(n=window.LZString.decompressFromEncodedURIComponent(r.text));var i=JSON.parse(n);t(null,i)}else if(r.json)t(null,r.json);else{var s=new Error("failed");t(s,null)}}}))},e.getMapObjs=function(e,t,a,n){for(var i=[],s=0;s<t.length;s++)i.push("gamePackage/map/"+e+"/"+t[s]);r.load(i,o,a,n)},e.getUIPrefabRes=function(e,t){this.loadRes("prefab/ui/"+e,o,t)},e.createUI=function(e,t,a){this.getUIPrefabRes(e,(function(e,r){if(!e){var n=i(r);n.setPosition(0,0,0),a||(a=s("Canvas")),a.addChild(n),t&&t(null,n)}}))},e.getCarsBatch=function(e,t,a){for(var n=[],i=0;i<e.length;i++)n.push("prefab/car/car"+e[i]);for(var s=0;s<n.length;s++){var c=n[s];t?r.load(c,o,t,a):r.load(c,o,a)}},e.getUICar=function(e,t){this.loadRes("prefab/ui/car/uiCar"+e,o,t)},e.getCar=function(e,t){this.loadRes("prefab/car/car"+e,o,t)},e.setCarIcon=function(e,t,a,r){var n="gamePackage/texture/car/car"+e;a&&(n+="Black"),this.setSpriteFrame(n,t,r)},e.getJsonData=function(e,t){r.load("datas/"+e,(function(e,a){if(e)n(e.message||e);else{var r=a;if(r.json)t(e,r.json);else{var o=new Error("failed!!!");t(o,null)}}}))},e.getData=function(e,t){r.load("datas/"+e,(function(e,a){if(e)n(e.message||e);else{var o=a.text;o?t(e,o):r.load(a.nativeUrl,(function(e,a){t(e,o=a)}))}}))},e.setSpriteFrame=function(e,t,a){this.loadRes(e+"/spriteFrame",c,(function(r,n){if(r)return console.error("set sprite frame failed! err:",e,r),void a(r,n);t&&u(t)&&(t.spriteFrame=n,a(null,n))}))},e.setRemoteImage=function(e,t,a){if(e&&e.startsWith("http")){f.loadAny([{url:e,type:"png"}],null,(function(t,r){if(t)return console.error("set avatar failed! err:",e,t),void a(t,r);var n=new l;n.image=r;var o=new c;o.texture=n,a&&a(null,o)}))}},e.setGameIcon=function(e,t,a){e.startsWith("http")?this.setRemoteImage(e,t,a):this.setSpriteFrame("gamePackage/textures/icons/games/"+e,t,a)},e.getCustomer=function(e,t){this.loadRes("gamePackage/map/customer/customer"+e,o,t)},e.setCustomerIcon=function(e,t,a){var r="gamePackage/texture/head/head"+e;this.setSpriteFrame(r,t,a)},e.getEffect=function(e,t){this.loadRes("prefab/effect/"+e,o,t)},e}())||d);t._RF.pop()}}}));

System.register("chunks:///_virtual/rootScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,e,n,r;return{setters:[function(o){t=o.inheritsLoose},function(o){e=o.cclegacy,n=o._decorator,r=o.Component}],execute:function(){var _;e._RF.push({},"18523wKGihMrIfhmJk1RONz","rootScene",void 0);var c=n.ccclass;n.property,o("NewComponent",c("NewComponent")(_=function(o){function e(){return o.apply(this,arguments)||this}t(e,o);var n=e.prototype;return n.start=function(){console.log("yjf__________1111111111111111111")},n.update=function(o){console.log("yjf__________22222222222222222222")},e}(r))||_);e._RF.pop()}}}));

System.register("chunks:///_virtual/tips.ts",["./rollupPluginModLoBabelHelpers.js","cc","./poolManager.ts"],(function(t){var e,n,i,o,r,s,a,c,l,p,u,h,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,s=t._decorator,a=t.Label,c=t.Vec3,l=t.UITransform,p=t.isValid,u=t.tween,h=t.Component},function(t){d=t.poolManager}],execute:function(){var f,g,v,b,y;r._RF.push({},"2685dlHaLtIvqlBee9ZTtfv","tips",void 0);var w=s.ccclass,P=s.property;t("tips",(f=w("tips"),g=P(a),f((y=e((b=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,i(e,"lbTips",y,o(e)),e.targetPos=void 0,e}n(e,t);var r=e.prototype;return r.start=function(){},r.show=function(t,e){var n=this;this.targetPos=new c(0,200,0),this.node.setPosition(this.targetPos),this.lbTips.string=t;var i=this.lbTips.node.getComponent(l).contentSize;p(i)?(this.node.getComponent(l).setContentSize(i.width+100<240?240:i.width+100,i.height+30),this.scheduleOnce((function(){u(n.targetPos).by(.8,new c(0,150,0)).call((function(){e&&e(),d.instance.putNode(n.node)})).start()}),.8)):d.instance.putNode(this.node)},e}(h)).prototype,"lbTips",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=b))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/uiManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./resourceUtil.ts","./poolManager.ts","./tips.ts"],(function(i){var t,o,a,n,e,s,r,p;return{setters:[function(i){t=i.createClass},function(i){o=i.cclegacy,a=i._decorator,n=i.isValid,e=i.find},function(i){s=i.resourceUtil},function(i){r=i.poolManager},function(i){p=i.tips}],execute:function(){var h,c;o._RF.push({},"95faa+3895NJ4wz357JtFCr","uiManager",void 0);var u=a.ccclass;a.property,i("uiManager",u("uiManager")(((c=function(){function i(){this.dictSharedPanel={},this.dictLoading={},this.arrPopupDialog=[],this.showTipsTime=0}var o=i.prototype;return o.showDialog=function(i,t,o){var a=this;if(!this.dictLoading[i]){var r=i.lastIndexOf("/"),p=i.slice(r+1);if(t||(t=[]),this.dictSharedPanel.hasOwnProperty(i)){var h=this.dictSharedPanel[i];if(n(h)){h.parent=e("Canvas"),h.active=!0;var c=h.getComponent(p);return c.show&&c.show.apply(c,t),void(o&&o(c))}}this.dictLoading[i]=!0,s.createUI(i,(function(n,e){var s=!1;if(a.dictLoading[i]||(s=!0),a.dictLoading[i]=!1,n)console.error(n);else{a.dictSharedPanel[i]=e;var r=e.getComponent(p);r.show&&r.show.apply(r,t),o&&o(r),s&&a.hideDialog(i)}}))}},o.hideDialog=function(i,t){if(this.dictSharedPanel.hasOwnProperty(i)){var o=this.dictSharedPanel[i];o&&n(o)?(o.parent=null,t&&"function"==typeof t&&t()):t&&"function"==typeof t&&t()}this.dictLoading[i]=!1},o.pushToPopupSeq=function(i,t,o){var a={panelPath:i,scriptName:t,param:o,isShow:!1};this.arrPopupDialog.push(a),this.checkPopupSeq()},o.insertToPopupSeq=function(i,t,o){var a={panelPath:t,param:o,isShow:!1};this.arrPopupDialog.splice(i,0,a)},o.shiftFromPopupSeq=function(i){var t=this;this.hideDialog(i,(function(){t.arrPopupDialog[0]&&t.arrPopupDialog[0].panelPath===i&&(t.arrPopupDialog.shift(),t.checkPopupSeq())}))},o.checkPopupSeq=function(){if(this.arrPopupDialog.length>0){var i=this.arrPopupDialog[0];i.isShow||(this.showDialog(i.panelPath,i.param),this.arrPopupDialog[0].isShow=!0)}},o.showTips=function(i,t){var o=Date.now();if(o-this.showTipsTime<800){var a=800-(o-this.showTipsTime),n=this;setTimeout(function(i,t){n._showTipsAni(i,t)}.bind(this,i,t),a),this.showTipsTime=o+a}else this._showTipsAni(i,t),this.showTipsTime=o},o._showTipsAni=function(i,t){s.getUIPrefabRes("common/tips",(function(o,a){o||r.instance.getNode(a,e("Canvas")).getComponent(p).show(i,t)}))},t(i,null,[{key:"instance",get:function(){return this._instance||(this._instance=new i),this._instance}}]),i}())._instance=void 0,h=c))||h);o._RF.pop()}}}));

System.register("chunks:///_virtual/UserData.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,c;return{setters:[function(t){e=t.inheritsLoose},function(t){r=t.cclegacy,n=t._decorator,c=t.Component}],execute:function(){var o;r._RF.push({},"bcee7pmHcZN+Kto0biYg+uL","UserData",void 0);var i=n.ccclass;n.property,t("UserData",i("UserData")(o=function(t){function r(){for(var e,r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))||this).mScore=0,e.mStep=3,e}e(r,t);var n=r.prototype;return n.start=function(){},n.init=function(){this.mScore=0,this.mStep=0},n.update=function(t){},n.addScore=function(t){this.mScore=this.mScore+t},n.clearScore=function(t){this.mScore=0},n.addStep=function(t){this.mStep=this.mStep+t},n.getScore=function(){return this.mScore},n.getStep=function(){return this.mStep},r}(c))||o);r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});