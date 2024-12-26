(function(){"use strict";var o={8590:function(o,t,n){var e=n(5130),r=n(6768);function s(o,t,n,e,s,a){const c=(0,r.g2)("AppHeader"),i=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(c),(0,r.bF)(i)],64)}const a={class:"app__header"},c={class:"header container"},i={class:"header"};function u(o,t){const n=(0,r.g2)("RouterLink");return(0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("div",c,[(0,r.Lk)("h1",i,[(0,r.bF)(n,{to:"/",class:"header"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("FakeStore")]))),_:1})]),t[1]||(t[1]=(0,r.Lk)("button",{class:"app_header_button button"},null,-1))])])}var d=n(1241);const l={},g=(0,d.A)(l,[["render",u]]);var f=g,p={components:{AppHeader:f}};const _=(0,d.A)(p,[["render",s]]);var h=_,v=n(1387);const k={class:"home"};function m(o,t,n,e,s,a){const c=(0,r.g2)("GoodsGrid");return(0,r.uX)(),(0,r.CE)("div",k,[(0,r.bF)(c)])}var b=n(4232);const C={class:"goods__grid"},y={key:0,class:"loader"},E={key:1,class:"goods_grid_filters"},L=["onClick"],X={key:2,class:"loader"},j={key:3,class:"grid"},A={key:4,class:"loader"},O={key:5,class:"goods_grid_paging"},F={class:"paging__pages"};function w(o,t,n,e,s,a){const c=(0,r.g2)("GoodsCard");return(0,r.uX)(),(0,r.CE)("div",C,[s.categories?((0,r.uX)(),(0,r.CE)("div",E,[(0,r.Lk)("button",{class:"filters__button button",onClick:t[0]||(t[0]=o=>a.changeCatAll())},"All"),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.categories,((o,t)=>((0,r.uX)(),(0,r.CE)("button",{class:"filters__button button",onClick:t=>a.changeCat(o),key:t},(0,b.v_)(o),9,L)))),128))])):((0,r.uX)(),(0,r.CE)("p",y,"Загрузка...")),s.goods?((0,r.uX)(),(0,r.CE)("div",j,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(s.goods.slice(s.startSlice,s.startSlice+10),((o,t)=>((0,r.uX)(),(0,r.Wv)(c,{key:t,goodinfo:o},null,8,["goodinfo"])))),128))])):((0,r.uX)(),(0,r.CE)("p",X,"Загрузка...")),s.goods?((0,r.uX)(),(0,r.CE)("div",O,[(0,r.Lk)("button",{class:"paging__button button",onClick:t[1]||(t[1]=o=>s.startSlice-=10)},(0,b.v_)("<<")),(0,r.Lk)("div",F,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(Math.floor(s.goods.length/10),((o,t)=>((0,r.uX)(),(0,r.CE)("p",{class:"paging__page",key:t},(0,b.v_)(o),1)))),128))]),(0,r.Lk)("button",{class:"paging__button button",onClick:t[2]||(t[2]=o=>s.startSlice+=10)},(0,b.v_)(">>"))])):((0,r.uX)(),(0,r.CE)("p",A,"Загрузка..."))])}const I={class:"good__card"},G=["src"],S={class:"card__name"},x={class:"card__price"},z={class:"card__category"},K={class:"card__rating"};function $(o,t,n,e,s,a){const c=(0,r.g2)("RouterLink");return(0,r.uX)(),(0,r.CE)("div",I,[(0,r.Lk)("img",{class:"card__image",src:n.goodinfo.image,alt:"good image"},null,8,G),(0,r.Lk)("p",S,(0,b.v_)(n.goodinfo.title),1),(0,r.Lk)("p",x,"$"+(0,b.v_)(n.goodinfo.price),1),(0,r.Lk)("p",z,(0,b.v_)(n.goodinfo.category),1),(0,r.Lk)("p",K,(0,b.v_)(n.goodinfo.rating.rate),1),(0,r.bF)(c,{class:"card__more",to:"/good"+n.goodinfo.id},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Подробнее")]))),_:1},8,["to"])])}var H={props:{goodinfo:Object}};const W=(0,d.A)(H,[["render",$]]);var M=W,P={components:{GoodsCard:M},data(){return{goods:null,categories:null,startSlice:0}},methods:{changeCat(o){fetch(`https://fakestoreapi.com/products/category/${o}`).then((o=>o.json())).then((o=>{this.goods=o}))},changeCatAll(){fetch("https://fakestoreapi.com/products").then((o=>o.json())).then((o=>{this.goods=o}))}},mounted(){fetch("https://fakestoreapi.com/products/categories").then((o=>o.json())).then((o=>{this.categories=o})),fetch("https://fakestoreapi.com/products").then((o=>o.json())).then((o=>{this.goods=o}))}};const R=(0,d.A)(P,[["render",w]]);var T=R,V={name:"HomeView",components:{GoodsGrid:T}};const q=(0,d.A)(V,[["render",m]]);var B=q;const D={class:"good__page"},J={key:0},N={key:1,class:"good__desc"},Q={class:"good__description"},U={class:"description"},Y={class:"good__rating"},Z={class:"rating__rate"},oo={class:"rating__count"},to=["src"];function no(o,t,n,e,s,a){return(0,r.uX)(),(0,r.CE)("div",D,[s.goodInfo?((0,r.uX)(),(0,r.CE)("div",N,[(0,r.Lk)("div",Q,[(0,r.Lk)("p",U,"Описание: "+(0,b.v_)(s.goodInfo.description),1),(0,r.Lk)("div",Y,[(0,r.Lk)("p",Z,"Рейтинг: "+(0,b.v_)(s.goodInfo.rating.rate),1),(0,r.Lk)("p",oo,"Кол-во отзывов: "+(0,b.v_)(s.goodInfo.rating.count),1)])]),(0,r.Lk)("img",{class:"good__image",src:s.goodInfo.image,alt:"good image"},null,8,to)])):((0,r.uX)(),(0,r.CE)("p",J,"Загрузка..."))])}var eo={data(){return{goodInfo:null}},mounted(){fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`).then((o=>o.json())).then((o=>{this.goodInfo=o}))}};const ro=(0,d.A)(eo,[["render",no]]);var so=ro;const ao=[{path:"/",name:"home",component:B},{path:"/good:id",name:"good",component:so}],co=(0,v.aE)({history:(0,v.LA)("/"),routes:ao});var io=co;(0,e.Ef)(h).use(io).mount("#app")}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var s=t[e]={exports:{}};return o[e].call(s.exports,s,s.exports,n),s.exports}n.m=o,function(){var o=[];n.O=function(t,e,r,s){if(!e){var a=1/0;for(d=0;d<o.length;d++){e=o[d][0],r=o[d][1],s=o[d][2];for(var c=!0,i=0;i<e.length;i++)(!1&s||a>=s)&&Object.keys(n.O).every((function(o){return n.O[o](e[i])}))?e.splice(i--,1):(c=!1,s<a&&(a=s));if(c){o.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}s=s||0;for(var d=o.length;d>0&&o[d-1][2]>s;d--)o[d]=o[d-1];o[d]=[e,r,s]}}(),function(){n.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return n.d(t,{a:t}),t}}(),function(){n.d=function(o,t){for(var e in t)n.o(t,e)&&!n.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:t[e]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){n.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){var o={524:0};n.O.j=function(t){return 0===o[t]};var t=function(t,e){var r,s,a=e[0],c=e[1],i=e[2],u=0;if(a.some((function(t){return 0!==o[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(i)var d=i(n)}for(t&&t(e);u<a.length;u++)s=a[u],n.o(o,s)&&o[s]&&o[s][0](),o[s]=0;return n.O(d)},e=self["webpackChunkmagazz"]=self["webpackChunkmagazz"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=n.O(void 0,[504],(function(){return n(8590)}));e=n.O(e)})();
//# sourceMappingURL=app.34e873e8.js.map