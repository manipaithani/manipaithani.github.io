(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{BmJS:function(t,e,a){"use strict";a.r(e),a.d(e,"AddeventPageModule",(function(){return b}));var n=a("ofXK"),c=a("3Pt+"),o=a("tyNb"),i=a("TEn/"),r=a("pwB6"),s=a("wd/R"),d=a("fXoL"),l=a("Wp6s"),h=a("bTqV"),u=a("NFeN");const m=function(t){return{color:t}};function g(t,e){if(1&t){const t=d.ic();d.hc(0,"button",5),d.pc("click",(function(){return d.Nc(t),d.tc().changeReadOnly()})),d.hc(1,"mat-icon",6),d.Xc(2,"edit"),d.gc(),d.gc()}if(2&t){const t=d.tc();d.Ob(1),d.Cc("ngClass",d.Gc(1,m,t.isreadonly?"#D09B2C":"black"))}}function p(t,e){if(1&t){const t=d.ic();d.hc(0,"yogagainv2-dyanamic-page",7),d.pc("actionEvent",(function(e){return d.Nc(t),d.tc().send(e)}))("cancelEvent",(function(e){return d.Nc(t),d.tc().cancel(e)})),d.gc()}if(2&t){const t=d.tc();d.Cc("isreadonly",t.isreadonly)("captchaOn",!1)("captchaName","registercaptcha")("whatform",t.whatcontrolsmap)("whatformgroup",t.inwhatformgroup)("whichbuttons",t.mybuttons)}}const y=[{path:"",component:(()=>{class t{constructor(t,e,a,n,c,o,i){this.route=t,this.ysharedata=e,this.ydata=a,this.ygen=n,this.router=c,this.ydataservice=o,this.yobuilderservice=i,this.title="Add Event",this.mybuttons=new Map,this.isreadonly=!1,this.loaded=!1,this.crudlist=new r.p("/board/events/",a.getDatabase(),!0,this.ygen.getUid())}ngOnInit(){console.log("dddd ");let t=this.route.snapshot.queryParams.key;t?(this.cruddata=new r.p("/board/events/"+t,this.ydata.getDatabase(),!1,this.ygen.getUid()),this.cruddata.getData().subscribe(e=>{this.currentEvent=e,Object.assign(this.currentEvent,{$key:t}),this.isreadonly=!0,this.title="Edit Event",this.startObject()})):(this.title="Add Event",this.startObject())}getDomainObject(t=!1){let e=[],a=0;return s(new Date).format("YYYY-MM-DD"),e[a]=new r.W(a,"image","https://res.cloudinary.com/ideasyogi/image/upload/v1589964651/default_qkhcdj.jpg",r.V.image),e[a].placeholder="Event Picture",e[a].required=!1,e[a].showme=!0,e[a].readonly=t,a++,e[a]=new r.W(a,"imageuploaded",!1,r.V.slidetoggle),e[a].placeholder="imageuploaded",e[a].required=!1,e[a].showme=!0,e[a].readonly=t,a++,e[a]=new r.W(a,"title","",r.V.text),e[a].placeholder="Event Title",e[a].required=!0,e[a].readonly=t,a++,e[a]=new r.W(a,"description","",r.V.textarea),e[a].placeholder="Description of Event",e[a].required=!0,e[a].readonly=t,a++,e[a]=new r.W(a,"startdate",!1,r.V.date),e[a].placeholder="Date of Event",e[a].required=!0,e[a].readonly=t,a++,e[a]=new r.W(a,"startdatetime",!1,r.V.time),e[a].placeholder="Time of Event",e[a].required=!0,e[a].readonly=t,a++,e[a]=new r.W(a,"contactname","",r.V.text),e[a].placeholder="Organizer name",e[a].required=!0,e[a].readonly=t,a++,e[a]=new r.W(a,"contactnumber","",r.V.phone),e[a].placeholder="Organizer mobile",e[a].required=!0,e[a].readonly=t,a++,e[a]=new r.W(a,"createdBy","",r.V.text),e[a].placeholder="createdBy",e[a].required=!1,e[a].showme=!1,e[a].readonly=t,a++,e[a]=new r.W(a,"updatedBy","",r.V.text),e[a].placeholder="updatedBy",e[a].required=!1,e[a].showme=!1,e[a].readonly=t,a++,e[a]=new r.W(a,"active",!1,r.V.slidetoggle),e[a].placeholder="Active",e[a].required=!1,e[a].showme=!0,e[a].readonly=t,a++,e[a]=new r.W(a,"$key","",r.V.text),e[a].placeholder="key",e[a].required=!1,e[a].showme=!1,e[a].readonly=t,e.forEach(e=>{e.readonly=t,t&&(e.required=!1),this.currentEvent&&(e.value="date"===e.whattype?new Date(this.currentEvent[e.name]):this.currentEvent[e.name])}),e}startObject(){this.clear=!1,this.whatcontrolsmap=new Map,this.inwhatformgroup=null;let t=new Map;this.getDomainObject(this.isreadonly).forEach(e=>{t.set(e.name,e)}),this.inwhatformgroup=this.yobuilderservice.createFormGroup(t),this.whatcontrolsmap=this.yobuilderservice.createMap(t,this.inwhatformgroup);let e=new r.A("Cancel","cancel","cancel_presentation","secondary",!1),a=new r.A("Save Data","events","lock_open","primary",!1);this.mybuttons.set("Action2",a),this.mybuttons.set("Action1",e),setTimeout(()=>{this.clear=!0},50)}cancel(t){console.log(t),this.ygen.goBack()}changeReadOnly(){this.isreadonly=!this.isreadonly,this.startObject()}send(t){let e=+t.data.value.startdate;console.log("timestamp",s(e).format("dddd, MMMM Do YYYY, h:mm:ss a"));let a=+t.data.value.startdatetime.split(":")[0],n=+t.data.value.startdatetime.split(":")[1],c=new Date(e);console.log("moment datewitouttime",c),c.setHours(a),c.setMinutes(n);let o=new Date(+c);console.log("moment data",o),console.log("event",t),Object.assign(t.data.value,{startdate:+o}),console.log("event",t),console.log("eventx",o),console.log(" m timestamp",s(o).format("dddd, MMMM Do YYYY, h:mm:ss a")),this.currentEvent&&this.currentEvent.$key?this.cruddata.updateData(t.data.value):this.crudlist.addtolist(t.data.value),this.router.navigate([t.whatnext])}}return t.\u0275fac=function(e){return new(e||t)(d.bc(o.a),d.bc(r.R),d.bc(r.Q),d.bc(r.T),d.bc(o.j),d.bc(r.R),d.bc(r.S))},t.\u0275cmp=d.Vb({type:t,selectors:[["app-addevent"]],decls:14,vars:3,consts:[["slot","start"],["padding",""],["class","editable","mat-mini-fab","",3,"click",4,"ngIf"],[1,"box"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent",4,"ngIf"],["mat-mini-fab","",1,"editable",3,"click"],[3,"ngClass"],[3,"isreadonly","captchaOn","captchaName","whatform","whatformgroup","whichbuttons","actionEvent","cancelEvent"]],template:function(t,e){1&t&&(d.hc(0,"ion-header"),d.hc(1,"ion-toolbar"),d.hc(2,"ion-buttons",0),d.cc(3,"ion-back-button"),d.gc(),d.hc(4,"ion-title"),d.Xc(5),d.gc(),d.gc(),d.gc(),d.hc(6,"ion-content",1),d.hc(7,"ion-grid"),d.hc(8,"ion-row"),d.hc(9,"ion-col"),d.Vc(10,g,3,3,"button",2),d.hc(11,"mat-card"),d.hc(12,"mat-card-content",3),d.Vc(13,p,1,6,"yogagainv2-dyanamic-page",4),d.gc(),d.gc(),d.gc(),d.gc(),d.gc(),d.gc()),2&t&&(d.Ob(5),d.Yc(e.title),d.Ob(5),d.Cc("ngIf","Edit Event"==e.title),d.Ob(3),d.Cc("ngIf",e.clear))},directives:[i.y,i.hb,i.j,i.f,i.g,i.fb,i.s,i.x,i.R,i.r,n.m,l.a,l.d,h.a,u.a,n.k,r.q],styles:[".editable[_ngcontent-%COMP%]{position:absolute;left:93%;z-index:1}primary[_ngcontent-%COMP%]{color:red}accent[_ngcontent-%COMP%]{color:#000}"]}),t})()}];let b=(()=>{class t{}return t.\u0275mod=d.Zb({type:t}),t.\u0275inj=d.Yb({factory:function(e){return new(e||t)},imports:[[n.c,c.j,i.ib,r.H,r.o,r.b,o.n.forChild(y)]]}),t})()}}]);