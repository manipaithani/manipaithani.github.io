function _slicedToArray(t,c){return _arrayWithHoles(t)||_iterableToArrayLimit(t,c)||_unsupportedIterableToArray(t,c)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,c){if(t){if("string"==typeof t)return _arrayLikeToArray(t,c);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(t,c):void 0}}function _arrayLikeToArray(t,c){(null==c||c>t.length)&&(c=t.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=t[i];return e}function _iterableToArrayLimit(t,c){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var i=[],e=!0,n=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(e=(r=a.next()).done)&&(i.push(r.value),!c||i.length!==c);e=!0);}catch(s){n=!0,o=s}finally{try{e||null==a.return||a.return()}finally{if(n)throw o}}return i}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _classCallCheck(t,c){if(!(t instanceof c))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function _createClass(t,c,i){return c&&_defineProperties(t.prototype,c),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{kl4L:function(t,c,i){"use strict";i.r(c),i.d(c,"OutPageModule",(function(){return Y}));var e=i("ofXK"),n=i("3Pt+"),o=i("tyNb"),r=i("TEn/"),a=i("mrSG"),s=i("lJxs"),u=i("fXoL"),l=i("pwB6"),h=i("sYmb"),g=["mySearchbar"],f=["ocontent"];function m(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-item"),u.hc(1,"ion-avatar",8),u.pc("click",(function(){u.Nc(i);var t=c.$implicit;return u.tc(2).showPhoto(t.image,t.name)})),u.cc(2,"img",9),u.gc(),u.hc(3,"h2"),u.Xc(4),u.gc(),u.hc(5,"p"),u.Xc(6),u.uc(7,"translate"),u.gc(),u.hc(8,"p"),u.Xc(9),u.gc(),u.hc(10,"button",10),u.pc("click",(function(){u.Nc(i);var t=c.$implicit;return u.tc(2).gotoExternal("tel:"+t.mobile)})),u.cc(11,"ion-icon",11),u.Xc(12),u.uc(13,"translate"),u.gc(),u.gc()}if(2&t){var e=c.$implicit,n=u.tc(2);u.Ob(2),u.Cc("src",n.ygen.getConditionalPhoto(e.image),u.Pc),u.Ob(2),u.Zc("",e.name," "),u.Ob(2),u.Yc(u.vc(7,5,e.category)),u.Ob(3),u.Yc(e.vehicalnum),u.Ob(3),u.Zc(" ",u.vc(13,7,"Call")," ")}}var p=function(){return{check:!0,property:"needParking"}};function d(t,c){if(1&t&&(u.hc(0,"ion-row"),u.hc(1,"ion-col",7),u.hc(2,"ion-list"),u.hc(3,"ion-item"),u.hc(4,"h2"),u.Xc(5),u.uc(6,"translate"),u.gc(),u.gc(),u.Vc(7,m,14,9,"ion-item",6),u.uc(8,"inpipe"),u.uc(9,"async"),u.gc(),u.gc(),u.gc()),2&t){var i=u.tc();u.Ob(5),u.Yc(u.vc(6,2,"Occupied Visitor Parking")),u.Ob(2),u.Cc("ngForOf",u.wc(8,4,u.vc(9,7,i.workers),u.Fc(9,p)))}}function v(t,c){if(1&t&&(u.hc(0,"p"),u.Xc(1),u.uc(2,"translate"),u.gc()),2&t){var i=u.tc().$implicit;u.Ob(1),u.ad("",u.vc(2,2,"Vehical Number")," :",i.vehicalnum,"")}}function b(t,c){1&t&&(u.hc(0,"p"),u.Xc(1,"\xa0\xa0"),u.hc(2,"b",17),u.Xc(3),u.uc(4,"translate"),u.gc(),u.gc()),2&t&&(u.Ob(3),u.Yc(u.vc(4,1,"Out")))}function y(t,c){1&t&&(u.hc(0,"p"),u.Xc(1,"\xa0\xa0"),u.hc(2,"b",18),u.Xc(3),u.uc(4,"translate"),u.gc(),u.gc()),2&t&&(u.Ob(3),u.Yc(u.vc(4,1,"In")))}function k(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-button",19),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc(2).in(t)})),u.cc(1,"ion-icon",20),u.Xc(2),u.uc(3,"translate"),u.gc()}2&t&&(u.Ob(2),u.Zc(" ",u.vc(3,1,"Entering In")," "))}function O(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-button",21),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc(2).out(t)})),u.cc(1,"ion-icon",22),u.Xc(2),u.uc(3,"translate"),u.gc()}2&t&&(u.Ob(2),u.Zc(" ",u.vc(3,1,"Exiting Out")," "))}function w(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-item-options",23),u.hc(1,"ion-item-option",24),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc(2).history(t)})),u.cc(2,"ion-icon",25),u.gc(),u.gc()}}function C(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-item-options",26),u.hc(1,"ion-item-option",27),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc(2).gotoExternal("tel:"+t.mobile)})),u.cc(2,"ion-icon",28),u.gc(),u.hc(3,"ion-item-option",21),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc(2).delete(t)})),u.cc(4,"ion-icon",29),u.gc(),u.hc(5,"ion-item-option",30),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc(2).editMe(t)})),u.cc(6,"ion-icon",31),u.gc(),u.gc()}}function I(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-item-sliding"),u.hc(1,"ion-item"),u.hc(2,"ion-avatar",12),u.pc("click",(function(){u.Nc(i);var t=c.$implicit;return u.tc(2).showPhoto(t.image,t.name)})),u.cc(3,"img",9),u.gc(),u.hc(4,"ion-label"),u.hc(5,"h2"),u.Xc(6),u.gc(),u.hc(7,"p"),u.Xc(8),u.uc(9,"translate"),u.gc(),u.Vc(10,v,3,4,"p",5),u.hc(11,"p"),u.Xc(12),u.gc(),u.Vc(13,b,5,3,"p",5),u.Vc(14,y,5,3,"p",5),u.Vc(15,k,4,3,"ion-button",13),u.Vc(16,O,4,3,"ion-button",14),u.gc(),u.gc(),u.Vc(17,w,3,0,"ion-item-options",15),u.Vc(18,C,7,0,"ion-item-options",16),u.gc()}if(2&t){var e=c.$implicit,n=u.tc(2);u.Ob(3),u.Cc("src",n.ygen.getConditionalPhoto(e.image),u.Pc),u.Ob(3),u.Yc(e.name),u.Ob(2),u.Yc(u.vc(9,11,e.category)),u.Ob(2),u.Cc("ngIf",e.needParking),u.Ob(2),u.Yc(n.ygen.formatTimestampToDate(e.statusdate)),u.Ob(1),u.Cc("ngIf","false"==e.in),u.Ob(1),u.Cc("ngIf","true"==e.in),u.Ob(1),u.Cc("ngIf",n.canido&&"false"==e.in),u.Ob(1),u.Cc("ngIf",n.canido&&"true"==e.in),u.Ob(1),u.Cc("ngIf",n.canido),u.Ob(1),u.Cc("ngIf",n.canido)}}function P(t,c){if(1&t&&(u.hc(0,"ion-list"),u.hc(1,"ion-item"),u.hc(2,"h1"),u.Xc(3),u.uc(4,"translate"),u.hc(5,"b"),u.Xc(6),u.gc(),u.gc(),u.gc(),u.Vc(7,I,19,13,"ion-item-sliding",6),u.hc(8,"ion-row"),u.hc(9,"h1"),u.Xc(10),u.uc(11,"translate"),u.gc(),u.gc(),u.gc()),2&t){var i=u.tc();u.Ob(3),u.Zc("",u.vc(4,4,"Searched list")," \xa0"),u.Ob(3),u.Yc(i.tempItems.length),u.Ob(1),u.Cc("ngForOf",i.tempItems),u.Ob(3),u.Zc(" \xa0",u.vc(11,6,"Out List"),"")}}function V(t,c){if(1&t&&(u.hc(0,"p"),u.Xc(1),u.uc(2,"translate"),u.gc()),2&t){var i=u.tc().$implicit;u.Ob(1),u.ad("",u.vc(2,2,"Vehical Number")," :",i.vehicalnum,"")}}function X(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-button",19),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc().in(t)})),u.cc(1,"ion-icon",20),u.Xc(2),u.uc(3,"translate"),u.gc()}2&t&&(u.Ob(2),u.Zc(" ",u.vc(3,1,"Entering In")," "))}function $(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-item-options",23),u.hc(1,"ion-item-option",24),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc().history(t)})),u.cc(2,"ion-icon",25),u.gc(),u.gc()}}function S(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-item-options",26),u.hc(1,"ion-item-option",27),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc().gotoExternal("tel:"+t.mobile)})),u.cc(2,"ion-icon",28),u.gc(),u.hc(3,"ion-item-option",21),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc().delete(t)})),u.cc(4,"ion-icon",29),u.gc(),u.hc(5,"ion-item-option",30),u.pc("click",(function(){u.Nc(i);var t=u.tc().$implicit;return u.tc().editMe(t)})),u.cc(6,"ion-icon",31),u.gc(),u.gc()}}function _(t,c){if(1&t){var i=u.ic();u.hc(0,"ion-item-sliding"),u.hc(1,"ion-item"),u.hc(2,"ion-avatar",12),u.pc("click",(function(){u.Nc(i);var t=c.$implicit;return u.tc().showPhoto(t.image,t.name)})),u.cc(3,"img",9),u.gc(),u.hc(4,"ion-label"),u.hc(5,"h2"),u.Xc(6),u.gc(),u.hc(7,"p"),u.Xc(8),u.uc(9,"translate"),u.gc(),u.Vc(10,V,3,4,"p",5),u.hc(11,"p"),u.Xc(12),u.gc(),u.hc(13,"p"),u.Xc(14,"\xa0\xa0"),u.hc(15,"b",17),u.Xc(16),u.uc(17,"translate"),u.gc(),u.gc(),u.Vc(18,X,4,3,"ion-button",13),u.gc(),u.gc(),u.Vc(19,$,3,0,"ion-item-options",15),u.Vc(20,S,7,0,"ion-item-options",16),u.gc()}if(2&t){var e=c.$implicit,n=u.tc();u.Ob(3),u.Cc("src",n.ygen.getConditionalPhoto(e.image),u.Pc),u.Ob(3),u.Yc(e.name),u.Ob(2),u.Yc(u.vc(9,9,e.category)),u.Ob(2),u.Cc("ngIf",e.needParking),u.Ob(2),u.Yc(n.ygen.formatTimestampToDate(e.statusdate)),u.Ob(4),u.Yc(u.vc(17,11,"Out")),u.Ob(2),u.Cc("ngIf",n.canido),u.Ob(1),u.Cc("ngIf",n.canido),u.Ob(1),u.Cc("ngIf",n.canido)}}var A,T,N=function(){return{check:"false",property:"in"}},D=[{path:"",component:(A=function(){function t(c,i,e,n,o,r,a,u){var l=this;_classCallCheck(this,t),this.modalCtrl=c,this.loadingCtrl=i,this.navCtrl=e,this.ydataservice=n,this.authService=o,this.boardService=r,this.ygen=a,this.route=u,this.showdetails=!1,this.viewHistory=!1,this.currentHistory=[],this.showOccupied=!1,this.current={name:""},this.isApp=!0,this.searchQuery="",this.tempItems=new Array,this.items=new Array,this.showButton=!0,this.occupiedVisitoParking=0,this.totalVisitoParking=0,this.showVisitorCounter=!1,this.workers=r.getWorkers(),this.workers.forEach((function(t){l.items=t})),this.workers.pipe(Object(s.a)((function(t){return l.occupiedVisitoParking=0,t.filter((function(t){return t.needParking}))}))).forEach((function(t){t.forEach((function(t){l.occupiedVisitoParking=l.occupiedVisitoParking+1}))})),o.authorizeForAction("gate")&&(this.canido=!0),r.getItems().subscribe((function(t){l.showVisitorCounter=t.istvp,l.totalVisitoParking=t.tvp}))}return _createClass(t,[{key:"ngOnInit",value:function(){console.log("ionViewDidLoad InpagePage mmmm")}},{key:"getShowAvailable",value:function(t){return 0==t?"dadared":t<=5?"dadayellow":"dada"}},{key:"openModal",value:function(t,c){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:this.ydataservice.setData("current",t),this.ydataservice.setData("currentHistory",c),this.ydataservice.setData("comingfrom","inpage"),this.route.navigateByUrl("/history");case 1:case"end":return i.stop()}}),i,this)})))}},{key:"ionViewDidLoad",value:function(){console.log("ionViewDidLoad InpagePage")}},{key:"isamember",value:function(){return!0}},{key:"out",value:function(t){var c=+new Date;this.removeFromSearch(t),this.boardService.updateOutHistory(this.boardService.getWorkersCrud(),t,{indate:t.statusdate,outdate:c});var i={in:"false",statusdate:c,needParking:!1};this.boardService.getWorkersCrud().update(t.$key,i)}},{key:"getOccupied",value:function(t){return t.needParking?"occu":""}},{key:"history",value:function(t){this.current=t,this.currentHistory=[];for(var c=0,i=Object.entries(t.history);c<i.length;c++){var e=_slicedToArray(i[c],2),n=(e[0],e[1]);this.currentHistory.push(n)}this.openModal(this.current,this.currentHistory)}},{key:"historyDone",value:function(){this.current={name:""},this.currentHistory=[],this.viewHistory=!1}},{key:"in",value:function(t){return Object(a.a)(this,void 0,void 0,regeneratorRuntime.mark((function c(){return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:this.searchbar.value="",this.ydataservice.setData("update",this.boardService.getWorkersCrud()),this.ydataservice.setData("comingin",t),this.ydataservice.setData("comingfrom","outpage"),this.route.navigateByUrl("/enterdetail");case 1:case"end":return c.stop()}}),c,this)})))}},{key:"removeFromSearch",value:function(t){this.tempItems.findIndex((function(c){return c.$key==t.$key}))>-1&&(this.tempItems=this.tempItems.filter((function(c){return c.$key!=t.$key})))}},{key:"delete",value:function(t){this.boardService.updateOutHistory(this.boardService.getWorkersCrud(),t,{indate:t.statusdate,outdate:""}),this.boardService.getWorkersCrud().remove(t.$key),this.removeFromSearch(t)}},{key:"editMe",value:function(t){this.ydataservice.setData("editme",t),this.route.navigateByUrl("/presentdir")}},{key:"gotoExternal",value:function(t){window.location.href=t}},{key:"showPhoto",value:function(t,c){this.ygen.openimage(t,c)}},{key:"getItems",value:function(t){console.log(" search ready ",this.items),this.ocontent.scrollToTop(100);var c=t.target.value;this.searchQuery=c,c&&""!=c.trim()&&(this.tempItems=this.items.filter((function(t){return t.name.toLowerCase().indexOf(c.toLowerCase())>-1})))}},{key:"what",value:function(){return this.showdetails}},{key:"ngForCallback",value:function(){this.showdetails=!0}}]),t}(),A.\u0275fac=function(t){return new(t||A)(u.bc(r.mb),u.bc(r.kb),u.bc(r.nb),u.bc(l.R),u.bc(l.M),u.bc(l.i),u.bc(l.T),u.bc(o.j))},A.\u0275cmp=u.Vb({type:A,selectors:[["app-out"]],viewQuery:function(t,c){var i;1&t&&(u.ed(g,!0),u.ed(f,!0)),2&t&&(u.Jc(i=u.qc())&&(c.searchbar=i.first),u.Jc(i=u.qc())&&(c.ocontent=i.first))},decls:12,vars:13,consts:[[3,"color"],["debounce","100",3,"placeholder","ionChange"],["mySearchbar",""],["padding",""],["ocontent",""],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"dadao"],["item-start","",3,"click"],[3,"src"],["ion-button","","color","secondary",3,"click"],["name","call"],["slot","start",3,"click"],["color","success",3,"click",4,"ngIf"],["color","danger",3,"click",4,"ngIf"],["side","start",4,"ngIf"],["side","end",4,"ngIf"],[2,"color","red"],[2,"color","green"],["color","success",3,"click"],["slot","icon-only","name","log-in"],["color","danger",3,"click"],["slot","icon-only","name","log-out"],["side","start"],[3,"click"],["slot","icon-only","name","book"],["side","end"],["color","secondary",3,"click"],["slot","icon-only","name","call"],["slot","icon-only","name","trash"],["color","warning",3,"click"],["slot","icon-only","name","create"]],template:function(t,c){1&t&&(u.hc(0,"ion-header"),u.hc(1,"ion-toolbar",0),u.hc(2,"ion-searchbar",1,2),u.pc("ionChange",(function(t){return c.getItems(t)})),u.uc(4,"translate"),u.gc(),u.gc(),u.gc(),u.hc(5,"ion-content",3,4),u.Vc(7,d,10,10,"ion-row",5),u.Vc(8,P,12,8,"ion-list",5),u.Vc(9,_,21,13,"ion-item-sliding",6),u.uc(10,"inpipe"),u.uc(11,"async"),u.gc()),2&t&&(u.Ob(1),u.Cc("color","warning"),u.Ob(1),u.Dc("placeholder",u.vc(4,5,"Search")),u.Ob(5),u.Cc("ngIf",0),u.Ob(1),u.Cc("ngIf",(null==c.searchQuery?null:c.searchQuery.length)>=1),u.Ob(1),u.Cc("ngForOf",u.wc(10,7,u.vc(11,10,c.workers),u.Fc(12,N))))},directives:[r.y,r.hb,r.S,r.ub,r.s,e.m,e.l,r.R,r.r,r.K,r.D,r.e,r.z,r.I,r.J,r.i,r.H,r.G],pipes:[h.c,l.t,e.b],styles:[".can-go-back[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{display:none}"]}),A)}],Y=((T=function t(){_classCallCheck(this,t)}).\u0275mod=u.Zb({type:T}),T.\u0275inj=u.Yb({factory:function(t){return new(t||T)},imports:[[e.c,n.j,r.ib,l.H,l.o,l.b,o.n.forChild(D)]]}),T)}}]);