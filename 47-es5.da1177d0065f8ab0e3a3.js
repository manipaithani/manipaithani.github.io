function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{G09Y:function(t,e,n){"use strict";n.r(e),n.d(e,"ForgotpassPageModule",(function(){return y}));var c=n("ofXK"),o=n("3Pt+"),i=n("tyNb"),r=n("TEn/"),a=n("pwB6"),s=n("DVUX"),u=n("fXoL"),l=n("Wp6s"),h=n("sYmb");function b(t,e){1&t&&(u.hc(0,"ion-button",6),u.Xc(1),u.uc(2,"translate"),u.gc()),2&t&&(u.Ob(1),u.Zc(" ",u.vc(2,1,"Signup")," "))}var g,p,f=[{path:"",component:(g=function(){function t(e,n,c,o,i,r,a,s,u){_classCallCheck(this,t),this.ygen=e,this.alertme=n,this.yovalservice=c,this.yobuilderservice=o,this.ynotification=i,this.toasterService=r,this.yauth=a,this.ystorageservice=s,this.router=u,this.whatcontrolsmap=new Map,this.mybuttons=new Map,this.loadingindicator=!1,this.startObject()}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"startObject",value:function(){var t=new Map;t.set("userid",this.yobuilderservice.createType("userid","Enter Your Email",!0,!0,!0,"email",1,"","Your email address")),this.inwhatformgroup=this.yobuilderservice.createFormGroup(t),this.whatcontrolsmap=this.yobuilderservice.createMap(t,this.inwhatformgroup);var e=new a.A("Reset","unlock","lock_open","primary",!1);this.mybuttons.set("Action",e)}},{key:"send",value:function(t){console.log("capturing events",t),this.reset(t.data.value)}},{key:"cancel",value:function(t){console.log("canceling events",t),this.startObject()}},{key:"registerToken",value:function(t){this.ynotification.registertoken()}},{key:"isTenantSelection",value:function(){return this.ystorageservice.isTenantSelection()}},{key:"reset",value:function(t){this.yauth.resetPassword(t.userid)}}]),t}(),g.\u0275fac=function(t){return new(t||g)(u.bc(a.T),u.bc(a.a),u.bc(a.fb),u.bc(a.S),u.bc(a.U),u.bc(s.d),u.bc(a.M),u.bc(a.db),u.bc(i.j))},g.\u0275cmp=u.Vb({type:g,selectors:[["app-forgotpass"]],decls:20,vars:12,consts:[[3,"color"],["slot","start"],[1,"box"],[3,"captchaOn","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"],["color","secondary","routerLink","/login"],["color","secondary","routerLink","/register",4,"ngIf"],["color","secondary","routerLink","/register"]],template:function(t,e){1&t&&(u.hc(0,"ion-header"),u.hc(1,"ion-toolbar",0),u.hc(2,"ion-buttons",1),u.cc(3,"ion-menu-button"),u.gc(),u.hc(4,"ion-title"),u.Xc(5),u.uc(6,"translate"),u.gc(),u.gc(),u.gc(),u.hc(7,"ion-content"),u.hc(8,"ion-grid"),u.hc(9,"ion-row"),u.hc(10,"ion-col"),u.hc(11,"mat-card"),u.hc(12,"mat-card-content",2),u.hc(13,"yogagainv2-dyanamic-page",3),u.pc("actionEvent",(function(t){return e.send(t)}))("cancelEvent",(function(t){return e.cancel(t)})),u.gc(),u.gc(),u.gc(),u.gc(),u.gc(),u.hc(14,"ion-row"),u.hc(15,"ion-col"),u.hc(16,"ion-button",4),u.Xc(17),u.uc(18,"translate"),u.gc(),u.Vc(19,b,3,3,"ion-button",5),u.gc(),u.gc(),u.gc(),u.gc()),2&t&&(u.Ob(1),u.Cc("color",e.ygen.isTenantSelection()?"primary":"secondary"),u.Ob(4),u.Yc(u.vc(6,8,"Forgot Password")),u.Ob(8),u.Cc("captchaOn",!0)("whatform",e.whatcontrolsmap)("whatformgroup",e.inwhatformgroup)("whichbuttons",e.mybuttons),u.Ob(4),u.Zc(" ",u.vc(18,10,"Login")," "),u.Ob(2),u.Cc("ngIf",!e.ygen.isTenantSelection()))},directives:[r.y,r.hb,r.j,r.N,r.fb,r.s,r.x,r.R,r.r,l.a,l.d,a.q,r.i,r.sb,i.l,c.m],pipes:[h.c],styles:[""]}),g)}],y=((p=function t(){_classCallCheck(this,t)}).\u0275mod=u.Zb({type:p}),p.\u0275inj=u.Yb({factory:function(t){return new(t||p)},imports:[[c.c,o.j,r.ib,o.v,a.H,a.b,a.o,i.n.forChild(f)]]}),p)}}]);