(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("vant")):typeof define=="function"&&define.amd?define(["exports","vue","vant"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.button={},e.vue,e.vant))})(this,function(e,t,s){"use strict";const i=(n,c)=>{if(n.install=o=>{for(const u of[n,...Object.values(c??{})])o.component(u.name,u)},c)for(const[o,u]of Object.entries(c))n[o]=u;return n},d=t.defineComponent({name:"BFButton",components:{[s.Button.name]:s.Button},setup(){}}),p=(n,c)=>{const o=n.__vccOpts||n;for(const[u,f]of c)o[u]=f;return o},_=t.createTextVNode("这是按钮");function l(n,c,o,u,f,m){const a=t.resolveComponent("van-button");return t.openBlock(),t.createElementBlock("div",null,[t.createVNode(a,null,{default:t.withCtx(()=>[_]),_:1})])}const r=i(p(d,[["render",l]]));e.BFButton=r,e.default=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});