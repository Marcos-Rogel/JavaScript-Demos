(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0ZzE":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o("DHAg");var l=o("wov0");o("ZYjt").platformBrowser().bootstrapModuleFactory(l.AppModuleNgFactory)},"7Gd8":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function n(){}return n.prototype.ngOnInit=function(){console.log("Spy initialized on element ["+this.mySpy+"].")},n}();e.SpyDirective=l},DHAg:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o("kzjQ"),o("0TWp")},K0Kg:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.styles=["[_nghost-%COMP%] {\n  display: block ;\n  font-size: 18px ;\n}\na[_ngcontent-%COMP%] {\n  color: red ;\n  cursor: pointer ;\n  text-decoration: underline ;\n  user-select: none ;\n  -moz-user-select: none ;\n  -webkit-user-select: none ;\n}"]},Mn8e:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function n(){this.friends=this.generateFriends(),this.isShowingFriends=!0}return n.prototype.cycleFriends=function(){console.warn("Cycling friends collection."),this.friends=this.generateFriends()},n.prototype.toggleFriends=function(){console.warn("Toggling friends collection."),this.isShowingFriends=!this.isShowingFriends},n.prototype.generateFriends=function(){return[{id:1,name:"Liz"},{id:2,name:"Joanna"},{id:3,name:"Kim"}]},n}();e.AppComponent=l},SmDo:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=function(){return function(){}}();e.AppModule=l},kcRK:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=o("K0Kg"),t=o("CcnG"),r=o("7Gd8"),u=o("Ip0R"),i=o("q27v"),p=o("Mn8e"),c=[l.styles],a=t.ɵcrt({encapsulation:0,styles:c,data:{}});function d(n){return t.ɵvid(0,[(n()(),t.ɵeld(0,0,null,null,2,"li",[],null,null,null,null,null)),t.ɵdid(1,81920,null,0,r.SpyDirective,[],{mySpy:[0,"mySpy"]},null),(n()(),t.ɵted(2,null,[" "," "]))],function(n,e){n(e,1,0,e.context.$implicit.name)},function(n,e){n(e,2,0,e.context.$implicit.name)})}function s(n){return t.ɵvid(0,[(n()(),t.ɵeld(0,0,null,null,3,"ul",[],null,null,null,null,null)),(n()(),t.ɵand(16777216,null,null,2,null,d)),t.ɵdid(2,278528,null,0,u.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),t.ɵppd(3,1)],function(n,e){var o=e.component.friends,l=t.ɵunv(e,2,1,n(e,3,0,t.ɵnov(e.parent,0),"id"));n(e,2,0,o,l)},null)}function m(n){return t.ɵvid(0,[t.ɵpid(0,i.TrackByPropertyPipe,[]),(n()(),t.ɵeld(1,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.ɵted(-1,null,[" Friends "])),(n()(),t.ɵeld(3,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),t.ɵeld(4,0,null,null,1,"a",[],null,[[null,"click"]],function(n,e,o){var l=!0,t=n.component;"click"===e&&(l=!1!==t.cycleFriends()&&l);return l},null,null)),(n()(),t.ɵted(-1,null,["Cycle friends"])),(n()(),t.ɵted(-1,null,[" — "])),(n()(),t.ɵeld(7,0,null,null,1,"a",[],null,[[null,"click"]],function(n,e,o){var l=!0,t=n.component;"click"===e&&(l=!1!==t.toggleFriends()&&l);return l},null,null)),(n()(),t.ɵted(-1,null,["Toggle friends"])),(n()(),t.ɵand(16777216,null,null,1,null,s)),t.ɵdid(10,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,10,0,e.component.isShowingFriends)},null)}function f(n){return t.ɵvid(0,[(n()(),t.ɵeld(0,0,null,null,1,"my-app",[],null,null,null,m,a)),t.ɵdid(1,49152,null,0,p.AppComponent,[],null,null)],null,null)}e.RenderType_AppComponent=a,e.View_AppComponent_0=m,e.View_AppComponent_Host_0=f;var _=t.ɵccf("my-app",p.AppComponent,f,{},{},[]);e.AppComponentNgFactory=_},q27v:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=Object.create(null),t=function(){function n(){}return n.prototype.transform=function(n){return console.warn("Getting track-by for ["+n+"]."),l[n]||(l[n]=function(e,o){return o[n]}),l[n]},n}();e.TrackByPropertyPipe=t},wov0:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=o("CcnG"),t=o("SmDo"),r=o("Mn8e"),u=o("kcRK"),i=o("Ip0R"),p=o("ZYjt"),c=l.ɵcmf(t.AppModule,[r.AppComponent],function(n){return l.ɵmod([l.ɵmpd(512,l.ComponentFactoryResolver,l.ɵCodegenComponentFactoryResolver,[[8,[u.AppComponentNgFactory]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l.ɵmpd(5120,l.LOCALE_ID,l.ɵangular_packages_core_core_s,[[3,l.LOCALE_ID]]),l.ɵmpd(4608,i.NgLocalization,i.NgLocaleLocalization,[l.LOCALE_ID,[2,i.ɵangular_packages_common_common_a]]),l.ɵmpd(4608,l.Compiler,l.Compiler,[]),l.ɵmpd(5120,l.APP_ID,l.ɵangular_packages_core_core_h,[]),l.ɵmpd(5120,l.IterableDiffers,l.ɵangular_packages_core_core_q,[]),l.ɵmpd(5120,l.KeyValueDiffers,l.ɵangular_packages_core_core_r,[]),l.ɵmpd(4608,p.DomSanitizer,p.ɵDomSanitizerImpl,[i.DOCUMENT]),l.ɵmpd(6144,l.Sanitizer,null,[p.DomSanitizer]),l.ɵmpd(4608,p.HAMMER_GESTURE_CONFIG,p.HammerGestureConfig,[]),l.ɵmpd(5120,p.EVENT_MANAGER_PLUGINS,function(n,e,o,l,t,r,u,i){return[new p.ɵDomEventsPlugin(n,e,o),new p.ɵKeyEventsPlugin(l),new p.ɵHammerGesturesPlugin(t,r,u,i)]},[i.DOCUMENT,l.NgZone,l.PLATFORM_ID,i.DOCUMENT,i.DOCUMENT,p.HAMMER_GESTURE_CONFIG,l.ɵConsole,[2,p.HAMMER_LOADER]]),l.ɵmpd(4608,p.EventManager,p.EventManager,[p.EVENT_MANAGER_PLUGINS,l.NgZone]),l.ɵmpd(135680,p.ɵDomSharedStylesHost,p.ɵDomSharedStylesHost,[i.DOCUMENT]),l.ɵmpd(4608,p.ɵDomRendererFactory2,p.ɵDomRendererFactory2,[p.EventManager,p.ɵDomSharedStylesHost]),l.ɵmpd(6144,l.RendererFactory2,null,[p.ɵDomRendererFactory2]),l.ɵmpd(6144,p.ɵSharedStylesHost,null,[p.ɵDomSharedStylesHost]),l.ɵmpd(4608,l.Testability,l.Testability,[l.NgZone]),l.ɵmpd(1073742336,i.CommonModule,i.CommonModule,[]),l.ɵmpd(1024,l.ErrorHandler,p.ɵangular_packages_platform_browser_platform_browser_a,[]),l.ɵmpd(1024,l.APP_INITIALIZER,function(n){return[p.ɵangular_packages_platform_browser_platform_browser_j(n)]},[[2,l.NgProbeToken]]),l.ɵmpd(512,l.ApplicationInitStatus,l.ApplicationInitStatus,[[2,l.APP_INITIALIZER]]),l.ɵmpd(131584,l.ApplicationRef,l.ApplicationRef,[l.NgZone,l.ɵConsole,l.Injector,l.ErrorHandler,l.ComponentFactoryResolver,l.ApplicationInitStatus]),l.ɵmpd(1073742336,l.ApplicationModule,l.ApplicationModule,[l.ApplicationRef]),l.ɵmpd(1073742336,p.BrowserModule,p.BrowserModule,[[3,p.BrowserModule]]),l.ɵmpd(1073742336,t.AppModule,t.AppModule,[]),l.ɵmpd(256,l.ɵAPP_ROOT,!0,[])])});e.AppModuleNgFactory=c},zn8P:function(n,e){function o(n){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return[]},o.resolve=o,n.exports=o,o.id="zn8P"}},[["0ZzE",1,2]]]);
//# sourceMappingURL=main.96224a9bf65808904f0d.js.map