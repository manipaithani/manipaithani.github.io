(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{Xww1:function(c,n,t){"use strict";t.r(n),t.d(n,"InoutPageModule",(function(){return d}));var o=t("ofXK"),e=t("3Pt+"),a=t("tyNb"),i=t("TEn/"),r=t("pwB6"),u=t("fXoL"),l=t("sYmb");function s(c,n){if(1&c){const c=u.ic();u.hc(0,"ion-buttons",14),u.hc(1,"ion-button",15),u.pc("click",(function(n){return u.Nc(c),u.tc().addtodir(n)})),u.cc(2,"ion-icon",16),u.gc(),u.gc()}}const b=[{path:"",component:(()=>{class c{constructor(c,n,t){this.authservice=c,this.routeservice=n,this.ygen=t,this.canido=!0,this.activeTab="OUT"}ngOnInit(){}currentDir(c){this.activeTab=c}addtodir(c){this.routeservice.navigateByUrl("/presentdir")}}return c.\u0275fac=function(n){return new(n||c)(u.bc(r.M),u.bc(a.j),u.bc(r.T))},c.\u0275cmp=u.Vb({type:c,selectors:[["app-inout"]],decls:30,vars:15,consts:[[3,"color"],["slot","start"],["size","small"],["slot","end","color","secondary",4,"ngIf"],["padding",""],["slot","bottom"],["act","","tab","out",3,"click"],["name","log-out"],["tab","in",3,"click"],["name","log-in"],["tab","tanker",3,"click"],["name","bus"],["tab","gatecamera",3,"click"],["name","videocam"],["slot","end","color","secondary"],[3,"click"],["slot","icon-only","name","add"]],template:function(c,n){1&c&&(u.hc(0,"ion-header"),u.hc(1,"ion-toolbar",0),u.hc(2,"ion-buttons",1),u.cc(3,"ion-menu-button"),u.gc(),u.hc(4,"ion-title",2),u.Xc(5),u.gc(),u.Vc(6,s,3,0,"ion-buttons",3),u.gc(),u.gc(),u.hc(7,"ion-content",4),u.hc(8,"ion-tabs"),u.hc(9,"ion-tab-bar",5),u.hc(10,"ion-tab-button",6),u.pc("click",(function(){return n.currentDir("Out")})),u.cc(11,"ion-icon",7),u.hc(12,"ion-label"),u.Xc(13),u.uc(14,"translate"),u.gc(),u.gc(),u.hc(15,"ion-tab-button",8),u.pc("click",(function(){return n.currentDir("In")})),u.cc(16,"ion-icon",9),u.hc(17,"ion-label"),u.Xc(18),u.uc(19,"translate"),u.gc(),u.gc(),u.hc(20,"ion-tab-button",10),u.pc("click",(function(){return n.currentDir("Tanker")})),u.cc(21,"ion-icon",11),u.hc(22,"ion-label"),u.Xc(23),u.uc(24,"translate"),u.gc(),u.gc(),u.hc(25,"ion-tab-button",12),u.pc("click",(function(){return n.currentDir("Camera")})),u.cc(26,"ion-icon",13),u.hc(27,"ion-label"),u.Xc(28),u.uc(29,"translate"),u.gc(),u.gc(),u.gc(),u.gc(),u.gc()),2&c&&(u.Ob(1),u.Cc("color","warning"),u.Ob(4),u.Zc("Gate Register (",n.activeTab,")"),u.Ob(1),u.Cc("ngIf",n.ygen.canI("","gate")&&n.canido),u.Ob(7),u.Yc(u.vc(14,7,"Out")),u.Ob(5),u.Yc(u.vc(19,9,"In")),u.Ob(5),u.Yc(u.vc(24,11,"Tanker")),u.Ob(5),u.Yc(u.vc(29,13,"Camera")))},directives:[i.y,i.hb,i.j,i.N,i.fb,o.m,i.s,i.bb,i.Z,i.ab,i.z,i.J,i.i],pipes:[l.c],styles:[".can-go-back[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{display:none}"]}),c})(),children:[{path:"out",loadChildren:"./out/out.module#OutPageModule"},{path:"in",loadChildren:"./in/in.module#InPageModule"},{path:"tanker",loadChildren:"./tanker/tanker.module#TankerPageModule"},{path:"gatecamera",loadChildren:"./gatecamera/gatecamera.module#GatecameraPageModule"},{path:"",redirectTo:"out",pathMatch:"full"}]}];let d=(()=>{class c{}return c.\u0275mod=u.Zb({type:c}),c.\u0275inj=u.Yb({factory:function(n){return new(n||c)},imports:[[o.c,e.j,i.ib,r.H,r.o,r.b,a.n.forChild(b)]]}),c})()}}]);