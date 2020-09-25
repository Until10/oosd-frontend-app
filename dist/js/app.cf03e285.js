(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],l=0,p=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({"user~web-app":"user~web-app",user:"user","web-app":"web-app"}[e]||e)+"."+{"user~web-app":"6340c06d",user:"0bb8c181","web-app":"2651b85b"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"user~web-app":1,user:1,"web-app":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"user~web-app":"user~web-app",user:"user","web-app":"web-app"}[e]||e)+"."+{"user~web-app":"d230f07c",user:"a6259920","web-app":"47caa31d"}[e]+".css",a=u.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){c=p[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0613":function(e,t,n){"use strict";var r=n("2b0e"),o=n("2f62"),a=n("9ab4"),s=n("79f6"),i={userData:null},u={isAuth:function(e){return null!==e.userData}},c={SET_USER_DATA:function(e,t){e.userData=t},CLEAR_USER_DATA:function(e){e.userData=null},SET_TOKEN:function(e,t){e.token=t}},l={login:function(e,t){return Object(a["a"])(this,void 0,void 0,(function(){var n,r,o,i,u;return Object(a["b"])(this,(function(a){switch(a.label){case 0:return[4,s["a"].user.login(t.username,t.password)];case 1:return n=a.sent(),r=n[0],o=r.token,i=r.userData,u=n[1],null!==i&&(e.commit("SET_USER_DATA",i),e.commit("SET_TOKEN",o),e.dispatch("setLocalStorage"),s["a"].token.set(o)),[2,u]}}))}))},loadLocalStorage:function(e){var t=localStorage.getItem("token"),n=localStorage.getItem("userData");t&&n?(e.commit("SET_USER_DATA",JSON.parse(n)),e.commit("SET_TOKEN",t),s["a"].token.set(t)):localStorage.clear()},setLocalStorage:function(e){localStorage.clear();var t=e.state,n=t.token,r=t.userData;n&&r&&(localStorage.setItem("token",n),localStorage.setItem("userData",JSON.stringify(r)))},logout:function(e){return Object(a["a"])(this,void 0,void 0,(function(){return Object(a["b"])(this,(function(t){return e.commit("CLEAR_USER_DATA"),localStorage.clear(),[2]}))}))}},p={namespaced:!0,state:i,mutations:c,getters:u,actions:l},f={divisions:[]},d={SET_DIVISIONS:function(e,t){e.divisions=t},ADD_DIVISION:function(e,t){e.divisions.push(t)}},h={loadDivisions:function(e){return Object(a["a"])(this,void 0,void 0,(function(){var t,n,r;return Object(a["b"])(this,(function(o){switch(o.label){case 0:return[4,s["a"].util.getAllDivisions()];case 1:return t=o.sent(),n=t[0],r=t[1],console.log(n),200===r.code&&e.commit("SET_DIVISIONS",n),[2,r]}}))}))},addDivision:function(e,t){return Object(a["a"])(this,void 0,void 0,(function(){var n;return Object(a["b"])(this,(function(r){switch(r.label){case 0:return[4,s["a"].util.addDivision(t.name,t.address)];case 1:return n=r.sent(),200===n.code&&e.commit("ADD_DIVISION",t),[2,n]}}))}))}},m={namespaced:!0,state:f,mutations:d,actions:h};r["a"].use(o["a"]);t["a"]=new o["a"].Store({modules:{user:p,utils:m}})},"5f5c":function(e,t,n){"use strict";var r=n("68e7"),o=n.n(r);o.a},6797:function(e,t,n){e.exports=n.p+"img/gov-logo.c0aa8ae7.svg"},"68e7":function(e,t,n){},"79f6":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("9ab4"),o=n("bc3a"),a=n.n(o),s="https://oosd-backend-api.herokuapp.com/api",i=function(){function e(){var e=this;this.get=function(t,n){return void 0===n&&(n=void 0),e.conn.get(t,{params:n})},this.post=function(t,n,r){return void 0===r&&(r=void 0),e.conn.post(t,n,{params:r})},this.put=function(t,n,r){return void 0===r&&(r=void 0),e.conn.put(t,n,{params:r})},this.conn=a.a.create({baseURL:s,timeout:5e3,headers:{}})}return e.prototype.enableAuth=function(e){this.conn.defaults.headers.Authorization="Bearer "+e},e.prototype.removeAuth=function(){delete this.conn.defaults.headers.Authorization},e.instance=new e,e}(),u=i.instance;function c(e){return{code:e.status,message:e.data.message}}var l={checkUsername:function(e){return Object(r["a"])(this,void 0,Promise,(function(){var t,n;return Object(r["b"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,u.get("user/check-username/"+e)];case 1:return t=r.sent(),[2,[t.data.data,c(t)]];case 2:return n=r.sent(),[2,[n.response.data.data,c(n.response)]];case 3:return[2]}}))}))},register:function(e){return Object(r["a"])(this,void 0,Promise,(function(){var t,n;return Object(r["b"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,u.post("user/register",e)];case 1:return t=r.sent(),[2,[t.data.data,c(t)]];case 2:return n=r.sent(),[2,[n.response.data.data,c(n.response)]];case 3:return[2]}}))}))},login:function(e,t){return Object(r["a"])(this,void 0,Promise,(function(){var n,o,a,s,i;return Object(r["b"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,u.post("user/login",{username:e,password:t})];case 1:return n=r.sent(),o=n.data,a=o.token,s=o.data,[2,[{token:a,userData:s},c(n)]];case 2:return i=r.sent(),[2,[null,c(i.response)]];case 3:return[2]}}))}))},getUser:function(e){return Object(r["a"])(this,void 0,Promise,(function(){var t,n;return Object(r["b"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,u.get("user/get-user",{userId:e})];case 1:return t=r.sent(),[2,[t.data.data,c(t)]];case 2:return n=r.sent(),[2,[null,c(n.response)]];case 3:return[2]}}))}))}},p={addDivision:function(e,t){return Object(r["a"])(this,void 0,Promise,(function(){var n,o;return Object(r["b"])(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,u.post("util/add-div",{name:e,address:t})];case 1:return n=r.sent(),[2,c(n)];case 2:return o=r.sent(),[2,c(o.response)];case 3:return[2]}}))}))},getAllDivisions:function(){return Object(r["a"])(this,void 0,Promise,(function(){var e,t;return Object(r["b"])(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,u.get("util/all-divs")];case 1:return e=n.sent(),[2,[e.data.data,c(e)]];case 2:return t=n.sent(),[2,[t.response.data.data,c(t.response)]];case 3:return[2]}}))}))}},f={set:function(e){u.enableAuth(e)},remove:function(){u.removeAuth()}},d={user:l,util:p,token:f}},"85ec":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},a=[],s=(n("034f"),n("2877")),i={},u=Object(s["a"])(i,o,a,!1,null,null,null),c=u.exports,l=n("9483");Object(l["a"])("/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"","collapse-on-scroll":"",flat:"",color:"primary"}},[n("HomeButton"),n("v-spacer"),n("v-toolbar-title",{staticClass:"ma-5 title"},[e._v(" Galle Public Complaint Management ")]),n("v-spacer"),n("LoginButton")],1),n("v-main",{staticClass:"bg"},[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-spacer"),n("v-row",{staticStyle:{"justify-content":"center"}},[n("v-btn",{attrs:{color:"error"}},[e._v(" Make A Complaint ")])],1),n("v-spacer")],1)],1)],1)},d=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("img",{staticClass:"logo",attrs:{alt:"Home",src:n("6797"),height:"100%"},on:{click:function(t){return e.$router.push("/")}}})},m=[],v={name:"HomeButton"},b=v,g=(n("5f5c"),Object(s["a"])(b,h,m,!1,null,"69fbfa44",null)),w=g.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",{attrs:{to:"/login",small:"",color:"success"}},[e._v("USER LOGIN")])],1)},y=[],S={name:"LoginButton",computed:{}},j=S,_=n("6544"),A=n.n(_),E=n("8336"),D=Object(s["a"])(j,O,y,!1,null,"1b55cd46",null),k=D.exports;A()(D,{VBtn:E["a"]});var T={name:"Home",components:{HomeButton:w,LoginButton:k}},P=T,C=n("7496"),I=n("40dc"),N=n("a523"),L=n("f6c4"),B=n("0fd9"),F=n("2fa4"),V=n("2a7f"),x=Object(s["a"])(P,f,d,!1,null,null,null),U=x.exports;A()(x,{VApp:C["a"],VAppBar:I["a"],VBtn:E["a"],VContainer:N["a"],VMain:L["a"],VRow:B["a"],VSpacer:F["a"],VToolbarTitle:V["a"]}),r["a"].use(p["a"]);var R=[{path:"/",name:"Home",component:U},{path:"/register",name:"register",component:function(){return Promise.all([n.e("user~web-app"),n.e("user")]).then(n.bind(null,"73cf"))}},{path:"/login",name:"User Login",component:function(){return Promise.all([n.e("user~web-app"),n.e("user")]).then(n.bind(null,"a55b"))}},{path:"/app",name:"app",component:function(){return Promise.all([n.e("user~web-app"),n.e("web-app")]).then(n.bind(null,"f82c"))},children:[{path:"divisions",name:"Divisional Offices",component:function(){return Promise.all([n.e("user~web-app"),n.e("web-app")]).then(n.bind(null,"ee7d"))}}]}],H=new p["a"]({mode:"history",base:"/",routes:R}),M=H,$=n("0613"),J=n("f309");r["a"].use(J["a"]);var K=new J["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#FFC107",secondary:"#FF9234",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#DF5E88"}}}});r["a"].config.productionTip=!1,new r["a"]({router:M,store:$["a"],vuetify:K,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.cf03e285.js.map