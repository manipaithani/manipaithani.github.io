function _classCallCheck(n,c){if(!(n instanceof c))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,c){for(var t=0;t<c.length;t++){var e=c[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,c,t){return c&&_defineProperties(n.prototype,c),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Xww1:function(n,c,t){"use strict";t.r(c),t.d(c,"InoutPageModule",(function(){return g}));var e=t("ofXK"),o=t("3Pt+"),a=t("tyNb"),i=t("TEn/"),r=t("pwB6"),l=t("fXoL"),u=t("sYmb");function s(n,c){if(1&n){var t=l.ic();l.hc(0,"ion-buttons",14),l.hc(1,"ion-button",15),l.pc("click",(function(n){return l.Nc(t),l.tc().addtodir(n)})),l.cc(2,"ion-icon",16),l.gc(),l.gc()}}var b,d,h=[{path:"",component:(b=function(){function n(c,t,e){_classCallCheck(this,n),this.authservice=c,this.routeservice=t,this.ygen=e,this.canido=!0,this.activeTab="OUT"}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"currentDir",value:function(n){this.activeTab=n}},{key:"addtodir",value:function(n){this.routeservice.navigateByUrl("/presentdir")}}]),n}(),b.\u0275fac=function(n){return new(n||b)(l.bc(r.M),l.bc(a.j),l.bc(r.T))},b.\u0275cmp=l.Vb({type:b,selectors:[["app-inout"]],decls:30,vars:15,consts:[[3,"color"],["slot","start"],["size","small"],["slot","end","color","secondary",4,"ngIf"],["padding",""],["slot","bottom"],["act","","tab","out",3,"click"],["name","log-out"],["tab","in",3,"click"],["name","log-in"],["tab","tanker",3,"click"],["name","bus"],["tab","gatecamera",3,"click"],["name","videocam"],["slot","end","color","secondary"],[3,"click"],["slot","icon-only","name","add"]],template:function(n,c){1&n&&(l.hc(0,"ion-header"),l.hc(1,"ion-toolbar",0),l.hc(2,"ion-buttons",1),l.cc(3,"ion-menu-button"),l.gc(),l.hc(4,"ion-title",2),l.Xc(5),l.gc(),l.Vc(6,s,3,0,"ion-buttons",3),l.gc(),l.gc(),l.hc(7,"ion-content",4),l.hc(8,"ion-tabs"),l.hc(9,"ion-tab-bar",5),l.hc(10,"ion-tab-button",6),l.pc("click",(function(){return c.currentDir("Out")})),l.cc(11,"ion-icon",7),l.hc(12,"ion-label"),l.Xc(13),l.uc(14,"translate"),l.gc(),l.gc(),l.hc(15,"ion-tab-button",8),l.pc("click",(function(){return c.currentDir("In")})),l.cc(16,"ion-icon",9),l.hc(17,"ion-label"),l.Xc(18),l.uc(19,"translate"),l.gc(),l.gc(),l.hc(20,"ion-tab-button",10),l.pc("click",(function(){return c.currentDir("Tanker")})),l.cc(21,"ion-icon",11),l.hc(22,"ion-label"),l.Xc(23),l.uc(24,"translate"),l.gc(),l.gc(),l.hc(25,"ion-tab-button",12),l.pc("click",(function(){return c.currentDir("Camera")})),l.cc(26,"ion-icon",13),l.hc(27,"ion-label"),l.Xc(28),l.uc(29,"translate"),l.gc(),l.gc(),l.gc(),l.gc(),l.gc()),2&n&&(l.Ob(1),l.Cc("color","warning"),l.Ob(4),l.Zc("Gate Register (",c.activeTab,")"),l.Ob(1),l.Cc("ngIf",c.ygen.canI("","gate")&&c.canido),l.Ob(7),l.Yc(l.vc(14,7,"Out")),l.Ob(5),l.Yc(l.vc(19,9,"In")),l.Ob(5),l.Yc(l.vc(24,11,"Tanker")),l.Ob(5),l.Yc(l.vc(29,13,"Camera")))},directives:[i.y,i.hb,i.j,i.N,i.fb,e.m,i.s,i.bb,i.Z,i.ab,i.z,i.J,i.i],pipes:[u.c],styles:[".can-go-back[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{display:none}"]}),b),children:[{path:"out",loadChildren:"./out/out.module#OutPageModule"},{path:"in",loadChildren:"./in/in.module#InPageModule"},{path:"tanker",loadChildren:"./tanker/tanker.module#TankerPageModule"},{path:"gatecamera",loadChildren:"./gatecamera/gatecamera.module#GatecameraPageModule"},{path:"",redirectTo:"out",pathMatch:"full"}]}],g=((d=function n(){_classCallCheck(this,n)}).\u0275mod=l.Zb({type:d}),d.\u0275inj=l.Yb({factory:function(n){return new(n||d)},imports:[[e.c,o.j,i.ib,r.H,r.o,r.b,a.n.forChild(h)]]}),d)}}]);