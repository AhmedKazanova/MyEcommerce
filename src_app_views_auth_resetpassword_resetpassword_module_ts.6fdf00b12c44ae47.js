"use strict";(self.webpackChunkEcommerce=self.webpackChunkEcommerce||[]).push([["src_app_views_auth_resetpassword_resetpassword_module_ts"],{1988:(g,w,t)=>{t.r(w),t.d(w,{ResetpasswordModule:()=>r});var p=t(6895),u=t(9197),e=t(4650),m=t(4755),h=t(5760),c=t(4006);class d{constructor(o,s,a,l){this.cookieService=o,this._Router=s,this._ApiserviceService=a,this._ActivatedRoute=l,this.SubscriptionArr=[],this.userId="",this.token="",this.getTokenFromCookies="",this.newPassword="",this.confirmPassword=""}ngOnInit(){this.getTokenFromCookies=this.cookieService.get("TokenForgetPass");let o=this._ActivatedRoute.queryParams.subscribe({next:s=>{if(""==s.ID||""==s.Token||null==s.ID||null==s.Token||null==s.ID||null==s.Token)this._Router.navigate(["/"]);else{if(this.getTokenFromCookies!=s.Token)return void alert("Wrong Token");this.userId=s.ID,this.token=s.Token}}});this.SubscriptionArr.push(o)}resetPass(){if(""!=this.newPassword.trim()&&null!=this.newPassword&&null!=this.newPassword)if(this.newPassword.trim().length<8)alert("Password 8 Digit");else if(""!=this.confirmPassword.trim()&&null!=this.confirmPassword&&null!=this.confirmPassword)if(this.confirmPassword==this.newPassword){let s=this._ApiserviceService.post("authentication/resetpassword",{id:this.userId,token:this.token,password:this.newPassword}).subscribe({next:a=>{"Password Reset Succeeded"==a.message&&this._Router.navigate(["/auth/login"])}});this.SubscriptionArr.push(s)}else alert("Password Not Matched");else alert("Enter New Confirm Password");else alert("Enter New Password")}ngOnDestroy(){for(let o=0;o<this.SubscriptionArr.length;o++)this.SubscriptionArr[o].unsubscribe()}}d.\u0275fac=function(o){return new(o||d)(e.Y36(m.N_),e.Y36(u.F0),e.Y36(h.O),e.Y36(u.gz))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-resetpassword"]],decls:12,vars:2,consts:[[1,"col-12","col-sm-6","mx-auto"],["for","newPassword"],["type","text","name","newPassword","id","newPassword",1,"form-control","fs-3",3,"ngModel","ngModelChange"],["for","confirmPassword"],["type","text","name","confirmPassword","id","confirmPassword",1,"form-control","fs-3",3,"ngModel","ngModelChange"],[1,"btn","btn-primary","fs-3",3,"click"]],template:function(o,s){1&o&&(e.TgZ(0,"div",0)(1,"div")(2,"label",1),e._uU(3,"New Password"),e.qZA(),e.TgZ(4,"input",2),e.NdJ("ngModelChange",function(l){return s.newPassword=l}),e.qZA()(),e.TgZ(5,"div")(6,"label",3),e._uU(7,"Confirm Password"),e.qZA(),e.TgZ(8,"input",4),e.NdJ("ngModelChange",function(l){return s.confirmPassword=l}),e.qZA()(),e.TgZ(9,"div")(10,"button",5),e.NdJ("click",function(){return s.resetPass()}),e._uU(11,"Save"),e.qZA()()()),2&o&&(e.xp6(4),e.Q6J("ngModel",s.newPassword),e.xp6(4),e.Q6J("ngModel",s.confirmPassword))},dependencies:[c.Fj,c.JJ,c.On]});const f=[{path:"",component:d,title:"Reset Password"}];class n{}n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(f),u.Bz]});class r{}r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[p.ez,n,c.u5]})}}]);