"use strict";(self.webpackChunkEcommerce=self.webpackChunkEcommerce||[]).push([["src_app_views_Manage_allusers_allusers_module_ts"],{7757:(S,m,r)=>{r.r(m),r.d(m,{AllusersModule:()=>a});var d=r(6895),h=r(9197),t=r(4650),A=r(5760);class i{constructor(e){this._ApiserviceService=e}resolve(e,n){return this._ApiserviceService.get("mangercontrol/allusers")}}i.\u0275fac=function(e){return new(e||i)(t.LFG(A.O))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"});var f=r(8724),_=r(5079),C=r(2340),v=r(7185),p=r(4463);function Z(s,e){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const n=t.oxw().$implicit;t.xp6(1),t.Oqu(n.phoneNumber)}}function T(s,e){1&s&&(t.TgZ(0,"span",23),t._uU(1,"\u0645\u0633\u062c\u0644 \u0628\u062c\u0648\u062c\u0644"),t.qZA())}const x=function(s){return["/admin/userdatails",s]};function k(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t.YNc(6,Z,2,1,"span",17),t.YNc(7,T,2,0,"span",18),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"div",19)(12,"button",20),t.NdJ("click",function(){const g=t.CHM(n).$implicit,b=t.oxw();return t.KtG(b.openModel(g))}),t._uU(13,"Block"),t.qZA(),t.TgZ(14,"button",21),t.NdJ("click",function(){const g=t.CHM(n).$implicit,b=t.oxw();return t.KtG(b.unblock(g))}),t._uU(15,"UnBlock"),t.qZA(),t.TgZ(16,"a",22),t._uU(17,"Show"),t.qZA()()()()}if(2&s){const n=e.$implicit,o=e.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(n.name),t.xp6(2),t.Q6J("ngIf",n.phoneNumber),t.xp6(1),t.Q6J("ngIf",!n.phoneNumber),t.xp6(2),t.Oqu(n.email),t.xp6(3),t.Q6J("disabled",1==n.block),t.xp6(2),t.Q6J("disabled",0==n.block),t.xp6(2),t.Q6J("routerLink",t.VKq(8,x,n.id))}}class u{constructor(e,n,o,c){this.toastr=e,this.document=n,this._TranslateService=o,this._ApiserviceService=c,this.userArr=[],this.userSelected=[],this.SubscriptionArr=[],this.lang=""}ngOnInit(){this.language(),this.getAllUsers(),this.startConnection()}language(){this.lang=this._TranslateService.currentLang;let e=this._TranslateService.onLangChange.subscribe({next:n=>{this.lang=n.lang}});this.SubscriptionArr.push(e)}startConnection(){this.Hub_Connection=(new f.s).withUrl(`${C.N.signalrUrl}`,{skipNegotiation:!0,transport:_.n.WebSockets}).build(),this.Hub_Connection.start().then(()=>{}).catch(e=>{console.error("Error Hub Connection",e),alert("Error Hub Start Connection")})}getAllUsers(){let e=this._ApiserviceService.get("mangercontrol/allusers").subscribe({next:n=>{this.userArr=n,this.userSelected=this.userArr}});this.SubscriptionArr.push(e)}openModel(e){this.userBlock=e}block(){if("Disconnected"!=this.Hub_Connection?.state){if("Connected"==this.Hub_Connection?.state){if(1==this.userBlock.block)return void this.toastr.success("en"==this.lang?"The User Banned":"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0645\u062d\u0638\u0648\u0631 \u0628\u0627\u0644\u0641\u0639\u0644");this.Hub_Connection?.invoke("blockUser",this.userBlock.id,!0).then(()=>{this.toastr.success("en"==this.lang?"The User Has Been Banned And Has Exited The Site":"\u062a\u0645 \u062d\u0638\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0648\u062e\u0631\u0648\u062c\u0647 \u0645\u0646 \u0627\u0644\u0645\u0648\u0642\u0639"),this.getAllUsers(),this.document.getElementById("closeModel")?.click()}).catch(e=>{console.error("Error Hub Connection",e),alert("Error Hub Start Connection")})}}else alert("\u062a\u0627\u0643\u062f \u0645\u0646 \u0627\u062a\u0635\u0627\u0644\u0643 \u0628\u0627\u0644\u0627\u0646\u062a\u0631\u0646\u062a \u062b\u0645 \u0627\u0639\u062f \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u0641\u062d\u0629")}unblock(e){if("Disconnected"!=this.Hub_Connection?.state){if("Connected"==this.Hub_Connection?.state){if(0==e.block)return void this.toastr.error("en"==this.lang?"User Is Not Banned":"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0644\u064a\u0633 \u0645\u062d\u0638\u0648\u0631\u0627 ");this.Hub_Connection?.invoke("blockUser",e.id,!1).then(()=>{this.toastr.success("en"==this.lang?"The Ban Has Been Canceled And He Can Enter The Site Again":"\u062a\u0645 \u0627\u0644\u063a\u0627\u0621 \u0627\u0644\u062d\u0638\u0631 \u0648\u064a\u0645\u0643\u0646\u0647 \u062f\u062e\u0648\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u0645\u0631\u0629 \u0627\u062e\u0631\u064a"),this.getAllUsers()}).catch(n=>{console.error("Error Hub Connection",n),alert("Error Hub Start Connection")})}}else this.toastr.error("en"==this.lang?"Make Sure You Are Connected To The Internet Then Refresh The Page":"\u062a\u0627\u0643\u062f \u0645\u0646 \u0627\u062a\u0635\u0627\u0644\u0643 \u0628\u0627\u0644\u0627\u0646\u062a\u0631\u0646\u062a \u062b\u0645 \u0627\u0639\u062f \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0635\u0641\u062d\u0629")}filterUser(e){let n=Number(e.target.value);1==n?this.userSelected=this.userArr:2==n&&(this.userSelected=this.userArr.filter(o=>1==o.block))}ngOnDestroy(){for(let e=0;e<this.SubscriptionArr.length;e++)this.SubscriptionArr[e].unsubscribe();this.Hub_Connection?.off(""),"Connecting"==this.Hub_Connection?.state&&this.Hub_Connection?.stop()}}u.\u0275fac=function(e){return new(e||u)(t.Y36(v._W),t.Y36(d.K0),t.Y36(p.sK),t.Y36(A.O))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-allusers"]],decls:39,vars:10,consts:[[1,"mt-5"],["name","","id","",1,"form-select","fs-4",3,"change"],["value","1"],["value","2"],[1,"table-responsive"],[1,"table","table-striped","table-hover","table-light","border-0","mt-5"],[4,"ngFor","ngForOf"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header","p-4"],["id","closeModel","type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"text-center","text-danger","fs-4","d-block","py-3"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"d-flex","justify-content-center"],["data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"btn","btn-danger","mx-2","fs-4",3,"disabled","click"],[1,"btn","btn-primary","mx-2","fs-4","px-2",3,"disabled","click"],[1,"btn","btn-warning","fs-3","mx-2","text-white",3,"routerLink"],[1,"text-danger"]],template:function(e,n){1&e&&(t.TgZ(0,"section")(1,"div",0)(2,"select",1),t.NdJ("change",function(c){return n.filterUser(c)}),t.TgZ(3,"option",2),t._uU(4,"\u0643\u0644 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646"),t.qZA(),t.TgZ(5,"option",3),t._uU(6,"\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0627\u0644\u0645\u062d\u0638\u0648\u0631\u064a\u0646"),t.qZA()()(),t.TgZ(7,"div",4)(8,"table",5)(9,"thead")(10,"tr")(11,"th"),t._uU(12,"#"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Name"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Phone"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Email"),t.qZA(),t.TgZ(19,"th"),t._uU(20,"option"),t.qZA()()(),t.TgZ(21,"tbody"),t.YNc(22,k,18,10,"tr",6),t.qZA()()()(),t.TgZ(23,"div",7)(24,"div",8)(25,"div",9)(26,"div",10),t._UZ(27,"button",11),t.qZA(),t.TgZ(28,"div",12)(29,"span",13),t._uU(30),t.ALo(31,"translate"),t.qZA()(),t.TgZ(32,"div",14)(33,"button",15),t.NdJ("click",function(){return n.userBlock.id=0}),t._uU(34),t.ALo(35,"translate"),t.qZA(),t.TgZ(36,"button",16),t.NdJ("click",function(){return n.block()}),t._uU(37),t.ALo(38,"translate"),t.qZA()()()()()),2&e&&(t.xp6(22),t.Q6J("ngForOf",n.userSelected),t.xp6(8),t.Oqu(t.lcZ(31,4,"AreYouSure")),t.xp6(4),t.Oqu(t.lcZ(35,6,"Cancle")),t.xp6(3),t.Oqu(t.lcZ(38,8,"Sure")))},dependencies:[d.sg,d.O5,h.rH,p.X$],styles:["button[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{font-size:1.6rem;box-shadow:none!important}th[_ngcontent-%COMP%]{font-size:2rem;text-align:center;padding:10px}td[_ngcontent-%COMP%]{font-size:1.7rem;text-align:center;padding:10px!important;vertical-align:middle}"]});const U=[{path:"",component:u,title:"All Users",resolve:[i]}];class l{}l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[h.Bz.forChild(U),h.Bz]});class a{}a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[d.ez,l,p.aw]})}}]);