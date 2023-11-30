(function(){"use strict";var t={5542:function(t,n,s){var e=s(6369),o=function(){var t=this,n=t._self._c;return n("div",{staticClass:"app"},[n("TheHeader"),n("MainScreen"),n("ThePopup")],1)},r=[],i=function(){var t=this,n=t._self._c;return n("header",{staticClass:"header"},[n("div",{staticClass:"row"},[n("div",{staticClass:"header__grid"},[n("TheLogo"),n("button",{staticClass:"btn btn-auth",on:{click:function(n){return n.preventDefault(),t.openModal.apply(null,arguments)}}},[t._v("Вход")])],1)])])},a=[],l=function(){var t=this,n=t._self._c;return t.isMainPage?n("div",{staticClass:"logo"},[n("img",{attrs:{src:s(9574),alt:"logo"}})]):n("a",{attrs:{href:"/"}},[n("img",{attrs:{src:s(9574),alt:"logo"}})])},c=[],u={name:"TheLogo",computed:{isMainPage:function(){return"/"===window.location.pathname}}},p=u,f=s(1001),m=(0,f.Z)(p,l,c,!1,null,null,null),d=m.exports,_={name:"TheHeader",components:{TheLogo:d},data(){return{showModal:!1}},methods:{openModal:function(){const t=document.querySelector(".popup");t.classList.add("show"),document.querySelector("body").classList.add("hidden")}}},h=_,v=(0,f.Z)(h,i,a,!1,null,null,null),g=v.exports,C=function(){var t=this;t._self._c;return t._m(0)},b=[function(){var t=this,n=t._self._c;return n("section",{staticClass:"main-screen"},[n("div",{staticClass:"row"},[n("div",{staticClass:"main-screen__grid"},[n("div",{staticClass:"main-screen__content"},[n("h1",[t._v(" Мои заметки ")]),n("div",{staticClass:"main-screen__subtitle"},[t._v(" Не забывай о важном, храни его в облаке. ")])]),n("div",{staticClass:"main-screen__image"},[n("img",{attrs:{src:s(7980),alt:""}})])])])])}],y={name:"MainScreen"},w=y,S=(0,f.Z)(w,C,b,!1,null,null,null),O=S.exports,x=function(){var t=this,n=t._self._c;return n("div",{staticClass:"popup"},[n("div",{staticClass:"popup__body"},[n("button",{staticClass:"btn btn-close popup__close",on:{click:function(n){return n.preventDefault(),t.closeModal.apply(null,arguments)}}}),n("div",{staticClass:"popup__content"},[t._t("default",(function(){return[n("AuthForm")]}))],2)])])},T=[],F=function(){var t=this,n=t._self._c;return n("aside",{staticClass:"auth-form"},[n("h2",[t._v(t._s(t.isSignInForm?"Вход в ваш аккаунт":"Регистрация"))]),n("form",t._g({staticClass:"form auth-form__form",attrs:{action:"",method:"post"}},{submit:t.isSignInForm?t.login:t.signUp}),[n("label",{staticClass:"form__input"},[n("span",{staticClass:"form__label"},[t._v("Email")]),n("input",{staticClass:"input",attrs:{placeholder:t.placeholder,type:"text"}}),n("span",{staticClass:"form__error"},[t._v("Сообщение об ошибке")])]),t._m(0),t.isSignInForm?t._e():n("label",{staticClass:"form__input"},[n("span",{staticClass:"form__label"},[t._v("Пароль ещё раз")]),n("input",{staticClass:"input",attrs:{placeholder:"Введите пароль",type:"text"}}),n("span",{staticClass:"form__error"},[t._v("Сообщение об ошибке")])]),n("div",{staticClass:"form__wrapper"},[n("div",{staticClass:"auth-form__link"},[t._v(" "+t._s(t.isSignInForm?"У вас нет аккаунта?":"У вас есть аккаунт?")+" "),n("a",{staticClass:"link",attrs:{href:"javascript:void(0)"},on:{click:function(n){return n.preventDefault(),t.swapForm.apply(null,arguments)}}},[t._v(t._s(t.isSignInForm?"Зарегистрируйтесь":"Войти"))])]),n("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v(t._s(t.isSignInForm?"Войти":"Зарегистрироваться"))])]),n("div",{staticClass:"form__notice"},[t._v(" Пользователь с таким логином не найден ")])])])},I=[function(){var t=this,n=t._self._c;return n("label",{staticClass:"form__input"},[n("span",{staticClass:"form__label"},[t._v("Пароль")]),n("input",{staticClass:"input",attrs:{placeholder:"Введите пароль",type:"text"}}),n("span",{staticClass:"form__error"},[t._v("Сообщение об ошибке")])])}],j={name:"AuthForm",data(){return{mode:"signIn",error:[]}},methods:{swapForm:function(){this.mode=this.isSignInForm?"signUp":"signIn"},login:async function(t){t.preventDefault();try{const t=await fetch("https://dist.nd.ru/api/auth",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:"user12345@example.com",password:"1234444"})}),n=await t.json();200===t.status||201===t.status?localStorage.setItem("user",JSON.stringify(n)):(this.error=n,console.error(n))}catch(n){console.log("ERROR",n)}},signUp:async function(t){t.preventDefault();try{const t=await fetch("https://dist.nd.ru/api/reg",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:this.form.email,password:this.form.password,confirm_password:this.form.confirmPassword})}),n=await t.json();200===t.status||201===t.status?localStorage.setItem("user",JSON.stringify(n)):(this.error=n,console.error(n))}catch(n){console.log(n)}}},computed:{isSignInForm:function(){return"signIn"===this.mode},placeholder:function(){return this.isSignInForm?"Введите значение":"Введите Email"}}},P=j,M=(0,f.Z)(P,F,I,!1,null,null,null),k=M.exports,Z={name:"ThePopup",components:{AuthForm:k},methods:{closeModal:function(){const t=document.querySelector(".popup");t.classList.remove("show"),document.querySelector("body").classList.remove("hidden")}}},L=Z,D=(0,f.Z)(L,x,T,!1,null,null,null),q=D.exports,A={name:"App",components:{TheHeader:g,MainScreen:O,ThePopup:q}},E=A,J=(0,f.Z)(E,o,r,!1,null,null,null),N=J.exports;e.ZP.config.productionTip=!1,new e.ZP({render:t=>t(N)}).$mount("#app")},9574:function(t,n,s){t.exports=s.p+"img/logo.9c115bde.svg"},7980:function(t,n,s){t.exports=s.p+"img/main-img.8791fe58.svg"}},n={};function s(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(n,e,o,r){if(!e){var i=1/0;for(u=0;u<t.length;u++){e=t[u][0],o=t[u][1],r=t[u][2];for(var a=!0,l=0;l<e.length;l++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](e[l])}))?e.splice(l--,1):(a=!1,r<i&&(i=r));if(a){t.splice(u--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[e,o,r]}}(),function(){s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,{a:n}),n}}(),function(){s.d=function(t,n){for(var e in n)s.o(n,e)&&!s.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){s.p="/simpleapi/"}(),function(){var t={143:0};s.O.j=function(n){return 0===t[n]};var n=function(n,e){var o,r,i=e[0],a=e[1],l=e[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(l)var u=l(s)}for(n&&n(e);c<i.length;c++)r=i[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},e=self["webpackChunktest"]=self["webpackChunktest"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=s.O(void 0,[998],(function(){return s(5542)}));e=s.O(e)})();
//# sourceMappingURL=app.06dd0f75.js.map