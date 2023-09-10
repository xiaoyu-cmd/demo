System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/EffectPlay.ts",["./rollupPluginModLoBabelHelpers.js","cc","./resourceUtil.ts"],(function(t){var e,n,o,r,c;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,r=t.Component},function(t){c=t.resourceUtil}],execute:function(){var i;n._RF.push({},"b00degBjppBr4DrfsyaV7LQ","EffectPlay",void 0);var s=o.ccclass;o.property,t("EffectPlay",s("EffectPlay")(i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.start=function(){},o.update=function(t){},o.play=function(){var t=this;c.getEffect("coin",(function(e,n){e&&console.error(e);var o=instantiate(n);o.parent=t.node,o.setWorldPosition(t.node.getWorldPosition()),t.scheduleOnce((function(){o.destroy()}),2)}))},n}(r))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/EventSlot.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,r,n,i,o,c,a,l,u,s;return{setters:[function(t){e=t.applyDecoratedDescriptor,r=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){o=t.cclegacy,c=t._decorator,a=t.Sprite,l=t.resources,u=t.SpriteFrame,s=t.Component}],execute:function(){var p,f,v,y,h;o._RF.push({},"5ced44nA1VJYY5loyWM+Zer","EventSlot",void 0);var d=c.ccclass,S=c.property;t("EventSlot",(p=d("EventSlot"),f=S(a),p((h=e((y=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return e=t.call.apply(t,[this].concat(o))||this,n(e,"icon",h,i(e)),e}r(e,t);var o=e.prototype;return o.start=function(){},o.update=function(t){},o.init=function(t){var e=t.icon,r=l.get("texture/"+e+"/spriteFrame",u);this.icon.spriteFrame=r},e}(s)).prototype,"icon",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=y))||v));o._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./EffectPlay.ts","./EventSlot.ts","./MainUI.ts","./MapUI.ts","./UserData.ts","./resourceUtil.ts","./rootScene.ts"],(function(){return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MainUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UserData.ts"],(function(t){var i,e,n,o,s,r,a,c,l,u,h,f,p,d,g,v,y;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){s=t.cclegacy,r=t._decorator,a=t.Node,c=t.Prefab,l=t.JsonAsset,u=t.ScrollView,h=t.tween,f=t.Vec3,p=t.ParticleSystem,d=t.instantiate,g=t.Vec2,v=t.Component},function(t){y=t.UserData}],execute:function(){var b,m,_,S,x,w,C,P,M,U,I,N,D,z,j,O,T,V,B,E,G,L,A,k;s._RF.push({},"69124BKloNPKKjGrsmpyZdk","MainUI",void 0);var F=r.ccclass,K=r.property,H=function(t,i){var e=Math.random();return t+Math.floor((i-t)*e)};t("MainUI",(b=F("MainUI"),m=K(Number),_=K(a),S=K(a),x=K(a),w=K({type:c}),C=K(y),P=K(a),M=K(l),U=K({type:c}),I=K({type:u}),b((z=i((D=function(t){function i(){for(var i,e=arguments.length,s=new Array(e),r=0;r<e;r++)s[r]=arguments[r];return i=t.call.apply(t,[this].concat(s))||this,n(i,"cur_index",z,o(i)),n(i,"particleNode",j,o(i)),n(i,"mapNode",O,o(i)),n(i,"playerNode",T,o(i)),n(i,"itemPrefab",V,o(i)),i.cache_move_count=0,i.isMoveing=!1,n(i,"userDataInfo",B,o(i)),n(i,"effectNode",E,o(i)),n(i,"eventConfig",G,o(i)),i.eventSlots=[],i.jsonCache=[],i.isDoubbleScore=!1,i.isDoubbleShaizi=!1,n(i,"slotPrefab",L,o(i)),n(i,"scrollView",A,o(i)),n(i,"totalCount",k,o(i)),i}e(i,t);var s=i.prototype;return s.onLoad=function(){this.userDataInfo.init()},s.start=function(){var t=this.eventConfig.json;console.log(t),console.log(t[1]),console.log(t[0]);var i=this.node.getChildByName("shaizi");i&&(i.active=!1);var e=this.node.getChildByName("tips");e&&(e.active=!1),this.initUiInfo()},s.update=function(t){},s.startGame=function(){var t=this;this.userDataInfo.getStep()<=0||this.isMoveing||(this.resetScrollOffset(),this.isMoveing=!0,this.scheduleOnce((function(){t.realStartGame()}),.1))},s.realStartGame=function(){var t=this;this.userDataInfo.addStep(-1),this.onUpdateStepUi();var i=this.node.getChildByName("shaizi");i&&(i.active=!0);var e=i.getComponent(cc.Animation);if(e){var n=H(1,7);console.log("anim game"),e.play("shaizi0"+n),e.once(cc.Animation.EventType.FINISHED,(function(){t.cache_move_count=n,t.playerMove()}),this)}this.scheduleOnce((function(){console.log("yjf_________!111111"),i.active=!1,i.emit("fade-out")}),2)},s.initUiInfo=function(){this.initEventInfo(),this.initScrollView(),this.onUpdateStepUi(),this.onUpdateScoreUi(),this.onUpdatePlayerUi()},s.initEventInfo=function(){},s.onUpdateScoreUi=function(){var t=this.node.getChildByName("score");t&&(t.getComponent(cc.Label).string=this.userDataInfo.getScore())},s.onUpdateStepUi=function(){var t=this.node.getChildByName("game_count");t&&(t.getComponent(cc.Label).string=this.userDataInfo.getStep())},s.onUpdatePlayerUi=function(){var t=(this.cur_index-1)%3*200,i=(this.totalCount-this.cur_index)/3*200;this.playerNode.setPosition(t,i,0)},s.onClickAddStepCount=function(){this.addStepCount(1)},s.addStepCount=function(t){this.userDataInfo.addStep(t),this.onUpdateStepUi()},s.playerMove=function(){var t=this;if(0!=this.cache_move_count){this.cache_move_count=this.cache_move_count-1;var i=null;if(this.node.getChildByName("scrollView")){var e="map_0"+this.cur_index;console.log(e),i=this.eventSlots[this.cur_index-1]}if(i){var n=this.playerNode,o=n.getPosition().x,s=n.getPosition().y;this.cur_index%3==0?s=n.getPosition().y-200:Math.floor(this.cur_index/3)%2==0?o=n.getPosition().x+200:Math.floor(this.cur_index/3)%2==1&&(o=n.getPosition().x-200),h(n).to(1,{position:new f(o,s,0)},{easing:"cubicInOut"}).call((function(){t.playerMove()})).start(),this.cur_index>=this.totalCount?this.finishGame():this.cur_index=this.cur_index+1}}else this.finishMove()},s.finishMove=function(){var t=this;this.isMoveing=!1;this.jsonCache[this.cur_index-1];var i=this.eventConfig.json,e=this.jsonCache[this.cur_index-1];if(1==i[e].type){this.isMoveing=!0;var n=this.playerNode,o=n.getPosition().x,s=n.getPosition().y;this.cur_index%3==0?s=n.getPosition().y-200:Math.floor(this.cur_index/3)%2==0?o=n.getPosition().x+200:Math.floor(this.cur_index/3)%2==1&&(o=n.getPosition().x-200),h(n).to(1,{position:new f(o,s,0)},{easing:"cubicInOut"}).call((function(){t.cur_index=t.cur_index+1,t.isMoveing=!1})).start(),this.showTips("前进一步")}else if(2==i[e].type){this.isMoveing=!0;var r=this.playerNode,a=r.getPosition().x,c=r.getPosition().y;this.cur_index%3==1&&1!=this.cur_index?c=r.getPosition().y+200:Math.floor(this.cur_index/3)%2==0?a=r.getPosition().x-200:Math.floor(this.cur_index/3)%2==1&&(a=r.getPosition().x+200),h(r).to(1,{position:new f(a,c,0)},{easing:"cubicInOut"}).call((function(){t.cur_index=t.cur_index-1,t.isMoveing=!1})).start(),this.showTips("后退一步")}else 3==i[e].type?(this.isDoubbleScore?(this.userDataInfo.addScore(20),this.isDoubbleScore=!1):this.userDataInfo.addScore(10),this.showTips("获得积分"),this.onShowCoinEffect()):4==i[e].type?(this.userDataInfo.addStep(1),this.showTips("获得投掷次数")):5==i[e].type?(this.isDoubbleScore=!0,this.showTips("双倍积分")):6==i[e].type&&(this.isDoubbleShaizi=!0,this.showTips("双倍骰子"));this.onUpdateScoreUi()},s.showTips=function(t){var i=this.node.getChildByName("tips");i&&(i.active=!0,i.getComponent(cc.Label).string=t,h(i).to(1,{position:new f(i.getPosition().x,i.getPosition().y+100,0)},{easing:"cubicOut"}).call((function(){})).start(),this.scheduleOnce((function(){i.active=!1,i.setPosition(i.getPosition().x,i.getPosition().y-100,i.getPosition().z)}),2))},s.finishGame=function(){},s.onShowCoinEffect=function(){this.particleNode.getComponent(p).play()},s.initScrollView=function(){this.eventSlots.length=0;for(var t=0;t<this.totalCount;t++){var i=this.addEventSlot(t);this.eventSlots.push(i)}this.playerNode.parent=this.eventSlots[99]},s.addEventSlot=function(t){var i=H(0,6),e=this.eventConfig.json,n=d(this.slotPrefab);return this.scrollView.content.addChild(n),n.getComponent("EventSlot").init(e[i]),this.jsonCache.push(i),n},s.resetScrollOffset=function(){var t=200*(Math.ceil(this.cur_index/3)-1);this.scrollView.scrollToOffset(new g(0,t),1)},i}(v)).prototype,"cur_index",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),j=i(D.prototype,"particleNode",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=i(D.prototype,"mapNode",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=i(D.prototype,"playerNode",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),V=i(D.prototype,"itemPrefab",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=i(D.prototype,"userDataInfo",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=i(D.prototype,"effectNode",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=i(D.prototype,"eventConfig",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=i(D.prototype,"slotPrefab",[U],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=i(D.prototype,"scrollView",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=i(D.prototype,"totalCount",[K],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),N=D))||N));s._RF.pop()}}}));

System.register("chunks:///_virtual/MapUI.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UserData.ts","./MainUI.ts"],(function(e){var t,i,n,o,r,a,l,c,u,s,p,_,f;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,l=e.Prefab,c=e.ScrollView,u=e.JsonAsset,s=e.Node,p=e.Component},function(e){_=e.UserData},function(e){f=e.MainUI}],execute:function(){var h,m,v,d,y,b,g,I,M,U,x,C,w,D;r._RF.push({},"a1573qZKMBK/5T6tRhvkhXC","MapUI",void 0);var N=a.ccclass,z=a.property;e("MapUI",(h=N("MapUI"),m=z({type:l}),v=z({type:c}),d=z(u),y=z(s),b=z(Number),h((M=t((I=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,n(t,"slotPrefab",M,o(t)),n(t,"scrollView",U,o(t)),n(t,"totalCount",x,o(t)),n(t,"eventConfig",C,o(t)),n(t,"mainNode",w,o(t)),t.eventSlots=[],t.cache_move_count=0,t.isMoveing=!1,n(t,"cur_index",D,o(t)),t.userDataInfo=null,t.mainUI=null,t}i(t,e);var r=t.prototype;return r.start=function(){this.userDataInfo=this.mainNode.getComponent(_),this.mainUI=this.mainNode.getComponent(f),this.init()},r.update=function(e){},r.playerMove=function(e){var t=this;if(e&&(this.cache_move_count=e),0!=this.cache_move_count){this.cache_move_count=this.cache_move_count-1;var i=this.node.getChildByName("scrollView"),n=null;if(i){var o="map_0"+this.cur_index;console.log(o),n=this.eventSlots[this.cur_index-1]}if(n){var r=i.getChildByName("player");r&&console.log("yjf_____player");var a=r.getComponent(cc.Animation);a&&console.log("yjf_____anim");this.cur_index;a.play("player_move_0"+this.cur_index),a.once(cc.Animation.EventType.FINISHED,(function(){console.log("yjf_______anim finish :"+t.cur_index),t.playerMove()}),this),this.cur_index==totalCount?this.cur_index=1:this.cur_index=this.cur_index+1}}else this.finishMove()},r.finishMove=function(){this.isMoveing=!1,this.userDataInfo.addScore(10),this.mainUI.onUpdateScoreUi()},t}(p)).prototype,"slotPrefab",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=t(I.prototype,"scrollView",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(I.prototype,"totalCount",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),C=t(I.prototype,"eventConfig",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(I.prototype,"mainNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(I.prototype,"cur_index",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),g=I))||g));r._RF.pop()}}}));

System.register("chunks:///_virtual/resourceUtil.ts",["cc"],(function(e){var t,a,r,n,o,i,s,c,u,f,l;return{setters:[function(e){t=e.cclegacy,a=e._decorator,r=e.resources,n=e.error,o=e.Prefab,i=e.instantiate,s=e.find,c=e.SpriteFrame,u=e.isValid,f=e.assetManager,l=e.Texture2D}],execute:function(){var d;t._RF.push({},"c3107+OA2hHXoroY5PJvm/3","resourceUtil",void 0);var g=a.ccclass;e("resourceUtil",g("resourceUtil")(d=function(){function e(){}return e.loadRes=function(e,t,a){t?r.load(e,t,(function(e,t){if(e)return n(e.message||e),void(a&&a(e,t));a&&a(e,t)})):r.load(e,(function(e,t){if(e)return n(e.message||e),void(a&&a(e,t));a&&a(e,t)}))},e.getMap=function(e,t){var a="map";a+=e>=100?e:e>=10?"0"+e:"00"+e,this.loadRes("gamePackage/map/config/"+a,null,(function(e,a){if(e)t(e,a);else{var r=a,n="";if(r._file){window.LZString&&(n=window.LZString.decompressFromEncodedURIComponent(r._file));var o=JSON.parse(n);t(null,o)}else if(r.text){window.LZString&&(n=window.LZString.decompressFromEncodedURIComponent(r.text));var i=JSON.parse(n);t(null,i)}else if(r.json)t(null,r.json);else{var s=new Error("failed");t(s,null)}}}))},e.getMapObjs=function(e,t,a,n){for(var i=[],s=0;s<t.length;s++)i.push("gamePackage/map/"+e+"/"+t[s]);r.load(i,o,a,n)},e.getUIPrefabRes=function(e,t){this.loadRes("prefab/ui/"+e,o,t)},e.createUI=function(e,t,a){this.getUIPrefabRes(e,(function(e,r){if(!e){var n=i(r);n.setPosition(0,0,0),a||(a=s("Canvas")),a.addChild(n),t&&t(null,n)}}))},e.getCarsBatch=function(e,t,a){for(var n=[],i=0;i<e.length;i++)n.push("prefab/car/car"+e[i]);for(var s=0;s<n.length;s++){var c=n[s];t?r.load(c,o,t,a):r.load(c,o,a)}},e.getUICar=function(e,t){this.loadRes("prefab/ui/car/uiCar"+e,o,t)},e.getCar=function(e,t){this.loadRes("prefab/car/car"+e,o,t)},e.setCarIcon=function(e,t,a,r){var n="gamePackage/texture/car/car"+e;a&&(n+="Black"),this.setSpriteFrame(n,t,r)},e.getJsonData=function(e,t){r.load("datas/"+e,(function(e,a){if(e)n(e.message||e);else{var r=a;if(r.json)t(e,r.json);else{var o=new Error("failed!!!");t(o,null)}}}))},e.getData=function(e,t){r.load("datas/"+e,(function(e,a){if(e)n(e.message||e);else{var o=a.text;o?t(e,o):r.load(a.nativeUrl,(function(e,a){t(e,o=a)}))}}))},e.setSpriteFrame=function(e,t,a){this.loadRes(e+"/spriteFrame",c,(function(r,n){if(r)return console.error("set sprite frame failed! err:",e,r),void a(r,n);t&&u(t)&&(t.spriteFrame=n,a(null,n))}))},e.setRemoteImage=function(e,t,a){if(e&&e.startsWith("http")){f.loadAny([{url:e,type:"png"}],null,(function(t,r){if(t)return console.error("set avatar failed! err:",e,t),void a(t,r);var n=new l;n.image=r;var o=new c;o.texture=n,a&&a(null,o)}))}},e.setGameIcon=function(e,t,a){e.startsWith("http")?this.setRemoteImage(e,t,a):this.setSpriteFrame("gamePackage/textures/icons/games/"+e,t,a)},e.getCustomer=function(e,t){this.loadRes("gamePackage/map/customer/customer"+e,o,t)},e.setCustomerIcon=function(e,t,a){var r="gamePackage/texture/head/head"+e;this.setSpriteFrame(r,t,a)},e.getEffect=function(e,t){this.loadRes("prefab/effect/"+e,o,t)},e}())||d);t._RF.pop()}}}));

System.register("chunks:///_virtual/rootScene.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var t,e,n,r;return{setters:[function(o){t=o.inheritsLoose},function(o){e=o.cclegacy,n=o._decorator,r=o.Component}],execute:function(){var _;e._RF.push({},"18523wKGihMrIfhmJk1RONz","rootScene",void 0);var c=n.ccclass;n.property,o("NewComponent",c("NewComponent")(_=function(o){function e(){return o.apply(this,arguments)||this}t(e,o);var n=e.prototype;return n.start=function(){console.log("yjf__________1111111111111111111")},n.update=function(o){console.log("yjf__________22222222222222222222")},e}(r))||_);e._RF.pop()}}}));

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