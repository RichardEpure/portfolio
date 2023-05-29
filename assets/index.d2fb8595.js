(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();function zr(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",es=zr(ts);function xi(t){return!!t||t===""}function Ir(t){if(I(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=tt(r)?as(r):Ir(r);if(a)for(const i in a)e[i]=a[i]}return e}else if(tt(t)||Q(t))return t}const ns=/;(?![^(]*\))/g,rs=/:(.+)/;function as(t){const e={};return t.split(ns).forEach(n=>{if(n){const r=n.split(rs);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Pn(t){let e="";if(tt(t))e=t;else if(I(t))for(let n=0;n<t.length;n++){const r=Pn(t[n]);r&&(e+=r+" ")}else if(Q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ze=t=>tt(t)?t:t==null?"":I(t)||Q(t)&&(t.toString===Ci||!R(t.toString))?JSON.stringify(t,ki,2):String(t),ki=(t,e)=>e&&e.__v_isRef?ki(t,e.value):ge(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:_i(e)?{[`Set(${e.size})`]:[...e.values()]}:Q(e)&&!I(e)&&!Oi(e)?String(e):e,U={},he=[],Nt=()=>{},is=()=>!1,os=/^on[^a-z]/,En=t=>os.test(t),Lr=t=>t.startsWith("onUpdate:"),st=Object.assign,Rr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ss=Object.prototype.hasOwnProperty,B=(t,e)=>ss.call(t,e),I=Array.isArray,ge=t=>Nn(t)==="[object Map]",_i=t=>Nn(t)==="[object Set]",R=t=>typeof t=="function",tt=t=>typeof t=="string",Tr=t=>typeof t=="symbol",Q=t=>t!==null&&typeof t=="object",Si=t=>Q(t)&&R(t.then)&&R(t.catch),Ci=Object.prototype.toString,Nn=t=>Ci.call(t),ls=t=>Nn(t).slice(8,-1),Oi=t=>Nn(t)==="[object Object]",Fr=t=>tt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cn=zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},cs=/-(\w)/g,Mt=Mn(t=>t.replace(cs,(e,n)=>n?n.toUpperCase():"")),us=/\B([A-Z])/g,ke=Mn(t=>t.replace(us,"-$1").toLowerCase()),zn=Mn(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xn=Mn(t=>t?`on${zn(t)}`:""),gn=(t,e)=>!Object.is(t,e),Kn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fs=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ka;const ds=()=>ka||(ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let At;class ms{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&At&&(this.parent=At,this.index=(At.scopes||(At.scopes=[])).push(this)-1)}run(e){if(this.active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ps(t,e=At){e&&e.active&&e.effects.push(t)}const Dr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ai=t=>(t.w&Jt)>0,ji=t=>(t.n&Jt)>0,vs=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},hs=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];Ai(a)&&!ji(a)?a.delete(t):e[n++]=a,a.w&=~Jt,a.n&=~Jt}e.length=n}},or=new WeakMap;let Ie=0,Jt=1;const sr=30;let yt;const ae=Symbol(""),lr=Symbol("");class Br{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ps(this,r)}run(){if(!this.active)return this.fn();let e=yt,n=Xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=yt,yt=this,Xt=!0,Jt=1<<++Ie,Ie<=sr?vs(this):_a(this),this.fn()}finally{Ie<=sr&&hs(this),Jt=1<<--Ie,yt=this.parent,Xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){yt===this?this.deferStop=!0:this.active&&(_a(this),this.onStop&&this.onStop(),this.active=!1)}}function _a(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xt=!0;const Pi=[];function _e(){Pi.push(Xt),Xt=!1}function Se(){const t=Pi.pop();Xt=t===void 0?!0:t}function pt(t,e,n){if(Xt&&yt){let r=or.get(t);r||or.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=Dr()),Ei(a)}}function Ei(t,e){let n=!1;Ie<=sr?ji(t)||(t.n|=Jt,n=!Ai(t)):n=!t.has(yt),n&&(t.add(yt),yt.deps.push(t))}function Lt(t,e,n,r,a,i){const o=or.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&I(t))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),e){case"add":I(t)?Fr(n)&&s.push(o.get("length")):(s.push(o.get(ae)),ge(t)&&s.push(o.get(lr)));break;case"delete":I(t)||(s.push(o.get(ae)),ge(t)&&s.push(o.get(lr)));break;case"set":ge(t)&&s.push(o.get(ae));break}if(s.length===1)s[0]&&cr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);cr(Dr(l))}}function cr(t,e){const n=I(t)?t:[...t];for(const r of n)r.computed&&Sa(r);for(const r of n)r.computed||Sa(r)}function Sa(t,e){(t!==yt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const gs=zr("__proto__,__v_isRef,__isVue"),Ni=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Tr)),bs=Vr(),ys=Vr(!1,!0),ws=Vr(!0),Ca=xs();function xs(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)pt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){_e();const r=Y(this)[e].apply(this,n);return Se(),r}}),t}function Vr(t=!1,e=!1){return function(n,r,a){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&a===(t?e?Ts:Ri:e?Li:Ii).get(n))return n;const i=I(n);if(!t&&i&&B(Ca,r))return Reflect.get(Ca,r,a);const o=Reflect.get(n,r,a);return(Tr(r)?Ni.has(r):gs(r))||(t||pt(n,"get",r),e)?o:ot(o)?i&&Fr(r)?o:o.value:Q(o)?t?Ti(o):Ur(o):o}}const ks=Mi(),_s=Mi(!0);function Mi(t=!1){return function(e,n,r,a){let i=e[n];if(He(i)&&ot(i)&&!ot(r))return!1;if(!t&&!He(r)&&(ur(r)||(r=Y(r),i=Y(i)),!I(e)&&ot(i)&&!ot(r)))return i.value=r,!0;const o=I(e)&&Fr(n)?Number(n)<e.length:B(e,n),s=Reflect.set(e,n,r,a);return e===Y(a)&&(o?gn(r,i)&&Lt(e,"set",n,r):Lt(e,"add",n,r)),s}}function Ss(t,e){const n=B(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Lt(t,"delete",e,void 0),r}function Cs(t,e){const n=Reflect.has(t,e);return(!Tr(e)||!Ni.has(e))&&pt(t,"has",e),n}function Os(t){return pt(t,"iterate",I(t)?"length":ae),Reflect.ownKeys(t)}const zi={get:bs,set:ks,deleteProperty:Ss,has:Cs,ownKeys:Os},As={get:ws,set(t,e){return!0},deleteProperty(t,e){return!0}},js=st({},zi,{get:ys,set:_s}),Yr=t=>t,In=t=>Reflect.getPrototypeOf(t);function en(t,e,n=!1,r=!1){t=t.__v_raw;const a=Y(t),i=Y(e);n||(e!==i&&pt(a,"get",e),pt(a,"get",i));const{has:o}=In(a),s=r?Yr:n?Gr:$r;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function nn(t,e=!1){const n=this.__v_raw,r=Y(n),a=Y(t);return e||(t!==a&&pt(r,"has",t),pt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function rn(t,e=!1){return t=t.__v_raw,!e&&pt(Y(t),"iterate",ae),Reflect.get(t,"size",t)}function Oa(t){t=Y(t);const e=Y(this);return In(e).has.call(e,t)||(e.add(t),Lt(e,"add",t,t)),this}function Aa(t,e){e=Y(e);const n=Y(this),{has:r,get:a}=In(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?gn(e,o)&&Lt(n,"set",t,e):Lt(n,"add",t,e),this}function ja(t){const e=Y(this),{has:n,get:r}=In(e);let a=n.call(e,t);a||(t=Y(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Lt(e,"delete",t,void 0),i}function Pa(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&Lt(t,"clear",void 0,void 0),n}function an(t,e){return function(n,r){const a=this,i=a.__v_raw,o=Y(i),s=e?Yr:t?Gr:$r;return!t&&pt(o,"iterate",ae),i.forEach((l,f)=>n.call(r,s(l),s(f),a))}}function on(t,e,n){return function(...r){const a=this.__v_raw,i=Y(a),o=ge(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,f=a[t](...r),p=n?Yr:e?Gr:$r;return!e&&pt(i,"iterate",l?lr:ae),{next(){const{value:m,done:y}=f.next();return y?{value:m,done:y}:{value:s?[p(m[0]),p(m[1])]:p(m),done:y}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:this}}function Ps(){const t={get(a){return en(this,a)},get size(){return rn(this)},has:nn,add:Oa,set:Aa,delete:ja,clear:Pa,forEach:an(!1,!1)},e={get(a){return en(this,a,!1,!0)},get size(){return rn(this)},has:nn,add:Oa,set:Aa,delete:ja,clear:Pa,forEach:an(!1,!0)},n={get(a){return en(this,a,!0)},get size(){return rn(this,!0)},has(a){return nn.call(this,a,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:an(!0,!1)},r={get(a){return en(this,a,!0,!0)},get size(){return rn(this,!0)},has(a){return nn.call(this,a,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:an(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=on(a,!1,!1),n[a]=on(a,!0,!1),e[a]=on(a,!1,!0),r[a]=on(a,!0,!0)}),[t,n,e,r]}const[Es,Ns,Ms,zs]=Ps();function Hr(t,e){const n=e?t?zs:Ms:t?Ns:Es;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(B(n,a)&&a in r?n:r,a,i)}const Is={get:Hr(!1,!1)},Ls={get:Hr(!1,!0)},Rs={get:Hr(!0,!1)},Ii=new WeakMap,Li=new WeakMap,Ri=new WeakMap,Ts=new WeakMap;function Fs(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ds(t){return t.__v_skip||!Object.isExtensible(t)?0:Fs(ls(t))}function Ur(t){return He(t)?t:Wr(t,!1,zi,Is,Ii)}function Bs(t){return Wr(t,!1,js,Ls,Li)}function Ti(t){return Wr(t,!0,As,Rs,Ri)}function Wr(t,e,n,r,a){if(!Q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Ds(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function be(t){return He(t)?be(t.__v_raw):!!(t&&t.__v_isReactive)}function He(t){return!!(t&&t.__v_isReadonly)}function ur(t){return!!(t&&t.__v_isShallow)}function Fi(t){return be(t)||He(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Di(t){return bn(t,"__v_skip",!0),t}const $r=t=>Q(t)?Ur(t):t,Gr=t=>Q(t)?Ti(t):t;function Vs(t){Xt&&yt&&(t=Y(t),Ei(t.dep||(t.dep=Dr())))}function Ys(t,e){t=Y(t),t.dep&&cr(t.dep)}function ot(t){return!!(t&&t.__v_isRef===!0)}function Bi(t){return ot(t)?t.value:t}const Hs={get:(t,e,n)=>Bi(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return ot(a)&&!ot(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function Vi(t){return be(t)?t:new Proxy(t,Hs)}class Us{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Br(e,()=>{this._dirty||(this._dirty=!0,Ys(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=Y(this);return Vs(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ws(t,e,n=!1){let r,a;const i=R(t);return i?(r=t,a=Nt):(r=t.get,a=t.set),new Us(r,a,i||!a,n)}function Kt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Ln(i,e,n)}return a}function _t(t,e,n,r){if(R(t)){const i=Kt(t,e,n,r);return i&&Si(i)&&i.catch(o=>{Ln(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(_t(t[i],e,n,r));return a}function Ln(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Kt(l,null,10,[t,o,s]);return}}$s(t,n,a,r)}function $s(t,e,n,r=!0){console.error(t)}let yn=!1,fr=!1;const mt=[];let It=0;const Te=[];let Le=null,fe=0;const Fe=[];let $t=null,de=0;const Yi=Promise.resolve();let Xr=null,dr=null;function Gs(t){const e=Xr||Yi;return t?e.then(this?t.bind(this):t):e}function Xs(t){let e=It+1,n=mt.length;for(;e<n;){const r=e+n>>>1;Ue(mt[r])<t?e=r+1:n=r}return e}function Hi(t){(!mt.length||!mt.includes(t,yn&&t.allowRecurse?It+1:It))&&t!==dr&&(t.id==null?mt.push(t):mt.splice(Xs(t.id),0,t),Ui())}function Ui(){!yn&&!fr&&(fr=!0,Xr=Yi.then(Gi))}function Ks(t){const e=mt.indexOf(t);e>It&&mt.splice(e,1)}function Wi(t,e,n,r){I(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Ui()}function Js(t){Wi(t,Le,Te,fe)}function qs(t){Wi(t,$t,Fe,de)}function Rn(t,e=null){if(Te.length){for(dr=e,Le=[...new Set(Te)],Te.length=0,fe=0;fe<Le.length;fe++)Le[fe]();Le=null,fe=0,dr=null,Rn(t,e)}}function $i(t){if(Rn(),Fe.length){const e=[...new Set(Fe)];if(Fe.length=0,$t){$t.push(...e);return}for($t=e,$t.sort((n,r)=>Ue(n)-Ue(r)),de=0;de<$t.length;de++)$t[de]();$t=null,de=0}}const Ue=t=>t.id==null?1/0:t.id;function Gi(t){fr=!1,yn=!0,Rn(t),mt.sort((e,n)=>Ue(e)-Ue(n));try{for(It=0;It<mt.length;It++){const e=mt[It];e&&e.active!==!1&&Kt(e,null,14)}}finally{It=0,mt.length=0,$i(),yn=!1,Xr=null,(mt.length||Te.length||Fe.length)&&Gi(t)}}function Qs(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||U;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const p=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:y}=r[p]||U;y&&(a=n.map(C=>C.trim())),m&&(a=n.map(fs))}let s,l=r[s=Xn(e)]||r[s=Xn(Mt(e))];!l&&i&&(l=r[s=Xn(ke(e))]),l&&_t(l,t,6,a);const f=r[s+"Once"];if(f){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,_t(f,t,6,a)}}function Xi(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!R(t)){const l=f=>{const p=Xi(f,e,!0);p&&(s=!0,st(o,p))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(r.set(t,null),null):(I(i)?i.forEach(l=>o[l]=null):st(o,i),r.set(t,o),o)}function Tn(t,e){return!t||!En(e)?!1:(e=e.slice(2).replace(/Once$/,""),B(t,e[0].toLowerCase()+e.slice(1))||B(t,ke(e))||B(t,e))}let Pt=null,Fn=null;function wn(t){const e=Pt;return Pt=t,Fn=t&&t.type.__scopeId||null,e}function Kr(t){Fn=t}function Jr(){Fn=null}function Zs(t,e=Pt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&Da(-1);const i=wn(e),o=t(...a);return wn(i),r._d&&Da(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Jn(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:p,renderCache:m,data:y,setupState:C,ctx:L,inheritAttrs:T}=t;let N,b;const j=wn(t);try{if(n.shapeFlag&4){const D=a||r;N=jt(p.call(D,D,m,i,C,y,L)),b=l}else{const D=e;N=jt(D.length>1?D(i,{attrs:l,slots:s,emit:f}):D(i,null)),b=e.props?l:tl(l)}}catch(D){De.length=0,Ln(D,t,1),N=W(oe)}let z=N;if(b&&T!==!1){const D=Object.keys(b),{shapeFlag:K}=z;D.length&&K&7&&(o&&D.some(Lr)&&(b=el(b,o)),z=we(z,b))}return n.dirs&&(z=we(z),z.dirs=z.dirs?z.dirs.concat(n.dirs):n.dirs),n.transition&&(z.transition=n.transition),N=z,wn(j),N}const tl=t=>{let e;for(const n in t)(n==="class"||n==="style"||En(n))&&((e||(e={}))[n]=t[n]);return e},el=(t,e)=>{const n={};for(const r in t)(!Lr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function nl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ea(r,o,f):!!o;if(l&8){const p=e.dynamicProps;for(let m=0;m<p.length;m++){const y=p[m];if(o[y]!==r[y]&&!Tn(f,y))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ea(r,o,f):!0:!!o;return!1}function Ea(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Tn(n,i))return!0}return!1}function rl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const al=t=>t.__isSuspense;function il(t,e){e&&e.pendingBranch?I(t)?e.effects.push(...t):e.effects.push(t):qs(t)}function ol(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function qn(t,e,n=!1){const r=et||Pt;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&R(e)?e.call(r.proxy):e}}const Na={};function un(t,e,n){return Ki(t,e,n)}function Ki(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=U){const s=et;let l,f=!1,p=!1;if(ot(t)?(l=()=>t.value,f=ur(t)):be(t)?(l=()=>t,r=!0):I(t)?(p=!0,f=t.some(b=>be(b)||ur(b)),l=()=>t.map(b=>{if(ot(b))return b.value;if(be(b))return me(b);if(R(b))return Kt(b,s,2)})):R(t)?e?l=()=>Kt(t,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),_t(t,s,3,[y])}:l=Nt,e&&r){const b=l;l=()=>me(b())}let m,y=b=>{m=N.onStop=()=>{Kt(b,s,4)}};if($e)return y=Nt,e?n&&_t(e,s,3,[l(),p?[]:void 0,y]):l(),Nt;let C=p?[]:Na;const L=()=>{if(N.active)if(e){const b=N.run();(r||f||(p?b.some((j,z)=>gn(j,C[z])):gn(b,C)))&&(m&&m(),_t(e,s,3,[b,C===Na?void 0:C,y]),C=b)}else N.run()};L.allowRecurse=!!e;let T;a==="sync"?T=L:a==="post"?T=()=>ut(L,s&&s.suspense):T=()=>Js(L);const N=new Br(l,T);return e?n?L():C=N.run():a==="post"?ut(N.run.bind(N),s&&s.suspense):N.run(),()=>{N.stop(),s&&s.scope&&Rr(s.scope.effects,N)}}function sl(t,e,n){const r=this.proxy,a=tt(t)?t.includes(".")?Ji(r,t):()=>r[t]:t.bind(r,r);let i;R(e)?i=e:(i=e.handler,n=e);const o=et;xe(this);const s=Ki(a,i.bind(r),n);return o?xe(o):ie(),s}function Ji(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function me(t,e){if(!Q(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ot(t))me(t.value,e);else if(I(t))for(let n=0;n<t.length;n++)me(t[n],e);else if(_i(t)||ge(t))t.forEach(n=>{me(n,e)});else if(Oi(t))for(const n in t)me(t[n],e);return t}function Dt(t){return R(t)?{setup:t,name:t.name}:t}const fn=t=>!!t.type.__asyncLoader,qi=t=>t.type.__isKeepAlive;function ll(t,e){Qi(t,"a",e)}function cl(t,e){Qi(t,"da",e)}function Qi(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Dn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)qi(a.parent.vnode)&&ul(r,e,n,a),a=a.parent}}function ul(t,e,n,r){const a=Dn(e,t,r,!0);Zi(()=>{Rr(r[e],a)},n)}function Dn(t,e,n=et,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;_e(),xe(n);const s=_t(e,n,t,o);return ie(),Se(),s});return r?a.unshift(i):a.push(i),i}}const Bt=t=>(e,n=et)=>(!$e||t==="sp")&&Dn(t,e,n),fl=Bt("bm"),dl=Bt("m"),ml=Bt("bu"),pl=Bt("u"),vl=Bt("bum"),Zi=Bt("um"),hl=Bt("sp"),gl=Bt("rtg"),bl=Bt("rtc");function yl(t,e=et){Dn("ec",t,e)}function Zt(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(_e(),_t(l,n,8,[t.el,s,t,e]),Se())}}const to="components";function eo(t,e){return xl(to,t,!0,e)||t}const wl=Symbol();function xl(t,e,n=!0,r=!1){const a=Pt||et;if(a){const i=a.type;if(t===to){const s=ql(i,!1);if(s&&(s===e||s===Mt(e)||s===zn(Mt(e))))return i}const o=Ma(a[t]||i[t],e)||Ma(a.appContext[t],e);return!o&&r?i:o}}function Ma(t,e){return t&&(t[e]||t[Mt(e)]||t[zn(Mt(e))])}function dn(t,e,n,r){let a;const i=n&&n[r];if(I(t)||tt(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(Q(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=e(t[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const mr=t=>t?vo(t)?ta(t)||t.proxy:mr(t.parent):null,xn=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mr(t.parent),$root:t=>mr(t.root),$emit:t=>t.emit,$options:t=>ro(t),$forceUpdate:t=>t.f||(t.f=()=>Hi(t.update)),$nextTick:t=>t.n||(t.n=Gs.bind(t.proxy)),$watch:t=>sl.bind(t)}),kl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let f;if(e[0]!=="$"){const C=o[e];if(C!==void 0)switch(C){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(r!==U&&B(r,e))return o[e]=1,r[e];if(a!==U&&B(a,e))return o[e]=2,a[e];if((f=t.propsOptions[0])&&B(f,e))return o[e]=3,i[e];if(n!==U&&B(n,e))return o[e]=4,n[e];pr&&(o[e]=0)}}const p=xn[e];let m,y;if(p)return e==="$attrs"&&pt(t,"get",e),p(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==U&&B(n,e))return o[e]=4,n[e];if(y=l.config.globalProperties,B(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return a!==U&&B(a,e)?(a[e]=n,!0):r!==U&&B(r,e)?(r[e]=n,!0):B(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==U&&B(t,o)||e!==U&&B(e,o)||(s=i[0])&&B(s,o)||B(r,o)||B(xn,o)||B(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:B(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let pr=!0;function _l(t){const e=ro(t),n=t.proxy,r=t.ctx;pr=!1,e.beforeCreate&&za(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:p,beforeMount:m,mounted:y,beforeUpdate:C,updated:L,activated:T,deactivated:N,beforeDestroy:b,beforeUnmount:j,destroyed:z,unmounted:D,render:K,renderTracked:rt,renderTriggered:gt,errorCaptured:St,serverPrefetch:lt,expose:Ae,inheritAttrs:ce,components:je,directives:Je,filters:ha}=e;if(f&&Sl(f,r,null,t.appContext.config.unwrapInjectedRef),o)for(const q in o){const $=o[q];R($)&&(r[q]=$.bind(n))}if(a){const q=a.call(n,n);Q(q)&&(t.data=Ur(q))}if(pr=!0,i)for(const q in i){const $=i[q],Yt=R($)?$.bind(n,n):R($.get)?$.get.bind(n,n):Nt,Pe=!R($)&&R($.set)?$.set.bind(n):Nt,qe=ht({get:Yt,set:Pe});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Qe=>qe.value=Qe})}if(s)for(const q in s)no(s[q],r,n,q);if(l){const q=R(l)?l.call(n):l;Reflect.ownKeys(q).forEach($=>{ol($,q[$])})}p&&za(p,t,"c");function at(q,$){I($)?$.forEach(Yt=>q(Yt.bind(n))):$&&q($.bind(n))}if(at(fl,m),at(dl,y),at(ml,C),at(pl,L),at(ll,T),at(cl,N),at(yl,St),at(bl,rt),at(gl,gt),at(vl,j),at(Zi,D),at(hl,lt),I(Ae))if(Ae.length){const q=t.exposed||(t.exposed={});Ae.forEach($=>{Object.defineProperty(q,$,{get:()=>n[$],set:Yt=>n[$]=Yt})})}else t.exposed||(t.exposed={});K&&t.render===Nt&&(t.render=K),ce!=null&&(t.inheritAttrs=ce),je&&(t.components=je),Je&&(t.directives=Je)}function Sl(t,e,n=Nt,r=!1){I(t)&&(t=vr(t));for(const a in t){const i=t[a];let o;Q(i)?"default"in i?o=qn(i.from||a,i.default,!0):o=qn(i.from||a):o=qn(i),ot(o)&&r?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[a]=o}}function za(t,e,n){_t(I(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function no(t,e,n,r){const a=r.includes(".")?Ji(n,r):()=>n[r];if(tt(t)){const i=e[t];R(i)&&un(a,i)}else if(R(t))un(a,t.bind(n));else if(Q(t))if(I(t))t.forEach(i=>no(i,e,n,r));else{const i=R(t.handler)?t.handler.bind(n):e[t.handler];R(i)&&un(a,i,t)}}function ro(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(f=>kn(l,f,o,!0)),kn(l,e,o)),i.set(e,l),l}function kn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&kn(t,i,n,!0),a&&a.forEach(o=>kn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Cl[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Cl={data:Ia,props:ee,emits:ee,methods:ee,computed:ee,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:ee,directives:ee,watch:Al,provide:Ia,inject:Ol};function Ia(t,e){return e?t?function(){return st(R(t)?t.call(this,this):t,R(e)?e.call(this,this):e)}:e:t}function Ol(t,e){return ee(vr(t),vr(e))}function vr(t){if(I(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function it(t,e){return t?[...new Set([].concat(t,e))]:e}function ee(t,e){return t?st(st(Object.create(null),t),e):e}function Al(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=it(t[r],e[r]);return n}function jl(t,e,n,r=!1){const a={},i={};bn(i,Bn,1),t.propsDefaults=Object.create(null),ao(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Bs(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Pl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=Y(a),[l]=t.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const p=t.vnode.dynamicProps;for(let m=0;m<p.length;m++){let y=p[m];if(Tn(t.emitsOptions,y))continue;const C=e[y];if(l)if(B(i,y))C!==i[y]&&(i[y]=C,f=!0);else{const L=Mt(y);a[L]=hr(l,s,L,C,t,!1)}else C!==i[y]&&(i[y]=C,f=!0)}}}else{ao(t,e,a,i)&&(f=!0);let p;for(const m in s)(!e||!B(e,m)&&((p=ke(m))===m||!B(e,p)))&&(l?n&&(n[m]!==void 0||n[p]!==void 0)&&(a[m]=hr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!B(e,m)&&!0)&&(delete i[m],f=!0)}f&&Lt(t,"set","$attrs")}function ao(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(cn(l))continue;const f=e[l];let p;a&&B(a,p=Mt(l))?!i||!i.includes(p)?n[p]=f:(s||(s={}))[p]=f:Tn(t.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=Y(n),f=s||U;for(let p=0;p<i.length;p++){const m=i[p];n[m]=hr(a,l,m,f[m],t,!B(f,m))}}return o}function hr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=B(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(xe(a),r=f[n]=l.call(null,e),ie())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===ke(n))&&(r=!0))}return r}function io(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!R(t)){const p=m=>{l=!0;const[y,C]=io(m,e,!0);st(o,y),C&&s.push(...C)};!n&&e.mixins.length&&e.mixins.forEach(p),t.extends&&p(t.extends),t.mixins&&t.mixins.forEach(p)}if(!i&&!l)return r.set(t,he),he;if(I(i))for(let p=0;p<i.length;p++){const m=Mt(i[p]);La(m)&&(o[m]=U)}else if(i)for(const p in i){const m=Mt(p);if(La(m)){const y=i[p],C=o[m]=I(y)||R(y)?{type:y}:y;if(C){const L=Fa(Boolean,C.type),T=Fa(String,C.type);C[0]=L>-1,C[1]=T<0||L<T,(L>-1||B(C,"default"))&&s.push(m)}}}const f=[o,s];return r.set(t,f),f}function La(t){return t[0]!=="$"}function Ra(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ta(t,e){return Ra(t)===Ra(e)}function Fa(t,e){return I(e)?e.findIndex(n=>Ta(n,t)):R(e)&&Ta(e,t)?0:-1}const oo=t=>t[0]==="_"||t==="$stable",qr=t=>I(t)?t.map(jt):[jt(t)],El=(t,e,n)=>{if(e._n)return e;const r=Zs((...a)=>qr(e(...a)),n);return r._c=!1,r},so=(t,e,n)=>{const r=t._ctx;for(const a in t){if(oo(a))continue;const i=t[a];if(R(i))e[a]=El(a,i,r);else if(i!=null){const o=qr(i);e[a]=()=>o}}},lo=(t,e)=>{const n=qr(e);t.slots.default=()=>n},Nl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),bn(e,"_",n)):so(e,t.slots={})}else t.slots={},e&&lo(t,e);bn(t.slots,Bn,1)},Ml=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=U;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(st(a,e),!n&&s===1&&delete a._):(i=!e.$stable,so(e,a)),o=e}else e&&(lo(t,e),o={default:1});if(i)for(const s in a)!oo(s)&&!(s in o)&&delete a[s]};function co(){return{app:null,config:{isNativeTag:is,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Il(t,e){return function(n,r=null){R(n)||(n=Object.assign({},n)),r!=null&&!Q(r)&&(r=null);const a=co(),i=new Set;let o=!1;const s=a.app={_uid:zl++,_component:n,_props:r,_container:null,_context:a,_instance:null,version:Zl,get config(){return a.config},set config(l){},use(l,...f){return i.has(l)||(l&&R(l.install)?(i.add(l),l.install(s,...f)):R(l)&&(i.add(l),l(s,...f))),s},mixin(l){return a.mixins.includes(l)||a.mixins.push(l),s},component(l,f){return f?(a.components[l]=f,s):a.components[l]},directive(l,f){return f?(a.directives[l]=f,s):a.directives[l]},mount(l,f,p){if(!o){const m=W(n,r);return m.appContext=a,f&&e?e(m,l):t(m,l,p),o=!0,s._container=l,l.__vue_app__=s,ta(m.component)||m.component.proxy}},unmount(){o&&(t(null,s._container),delete s._container.__vue_app__)},provide(l,f){return a.provides[l]=f,s}};return s}}function gr(t,e,n,r,a=!1){if(I(t)){t.forEach((y,C)=>gr(y,e&&(I(e)?e[C]:e),n,r,a));return}if(fn(r)&&!a)return;const i=r.shapeFlag&4?ta(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,f=e&&e.r,p=s.refs===U?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(tt(f)?(p[f]=null,B(m,f)&&(m[f]=null)):ot(f)&&(f.value=null)),R(l))Kt(l,s,12,[o,p]);else{const y=tt(l),C=ot(l);if(y||C){const L=()=>{if(t.f){const T=y?p[l]:l.value;a?I(T)&&Rr(T,i):I(T)?T.includes(i)||T.push(i):y?(p[l]=[i],B(m,l)&&(m[l]=p[l])):(l.value=[i],t.k&&(p[t.k]=l.value))}else y?(p[l]=o,B(m,l)&&(m[l]=o)):C&&(l.value=o,t.k&&(p[t.k]=o))};o?(L.id=-1,ut(L,n)):L()}}}const ut=il;function Ll(t){return Rl(t)}function Rl(t,e){const n=ds();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:p,parentNode:m,nextSibling:y,setScopeId:C=Nt,cloneNode:L,insertStaticContent:T}=t,N=(c,u,d,h=null,v=null,x=null,_=!1,w=null,k=!!u.dynamicChildren)=>{if(c===u)return;c&&!Me(c,u)&&(h=tn(c),Ht(c,v,x,!0),c=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:g,ref:O,shapeFlag:A}=u;switch(g){case Qr:b(c,u,d,h);break;case oe:j(c,u,d,h);break;case Qn:c==null&&z(u,d,h,_);break;case ft:Je(c,u,d,h,v,x,_,w,k);break;default:A&1?rt(c,u,d,h,v,x,_,w,k):A&6?ha(c,u,d,h,v,x,_,w,k):(A&64||A&128)&&g.process(c,u,d,h,v,x,_,w,k,Ee)}O!=null&&v&&gr(O,c&&c.ref,x,u||c,!u)},b=(c,u,d,h)=>{if(c==null)r(u.el=s(u.children),d,h);else{const v=u.el=c.el;u.children!==c.children&&f(v,u.children)}},j=(c,u,d,h)=>{c==null?r(u.el=l(u.children||""),d,h):u.el=c.el},z=(c,u,d,h)=>{[c.el,c.anchor]=T(c.children,u,d,h,c.el,c.anchor)},D=({el:c,anchor:u},d,h)=>{let v;for(;c&&c!==u;)v=y(c),r(c,d,h),c=v;r(u,d,h)},K=({el:c,anchor:u})=>{let d;for(;c&&c!==u;)d=y(c),a(c),c=d;a(u)},rt=(c,u,d,h,v,x,_,w,k)=>{_=_||u.type==="svg",c==null?gt(u,d,h,v,x,_,w,k):Ae(c,u,v,x,_,w,k)},gt=(c,u,d,h,v,x,_,w)=>{let k,g;const{type:O,props:A,shapeFlag:P,transition:M,patchFlag:V,dirs:J}=c;if(c.el&&L!==void 0&&V===-1)k=c.el=L(c.el);else{if(k=c.el=o(c.type,x,A&&A.is,A),P&8?p(k,c.children):P&16&&lt(c.children,k,null,h,v,x&&O!=="foreignObject",_,w),J&&Zt(c,null,h,"created"),A){for(const G in A)G!=="value"&&!cn(G)&&i(k,G,null,A[G],x,c.children,h,v,zt);"value"in A&&i(k,"value",null,A.value),(g=A.onVnodeBeforeMount)&&Ot(g,h,c)}St(k,c,c.scopeId,_,h)}J&&Zt(c,null,h,"beforeMount");const H=(!v||v&&!v.pendingBranch)&&M&&!M.persisted;H&&M.beforeEnter(k),r(k,u,d),((g=A&&A.onVnodeMounted)||H||J)&&ut(()=>{g&&Ot(g,h,c),H&&M.enter(k),J&&Zt(c,null,h,"mounted")},v)},St=(c,u,d,h,v)=>{if(d&&C(c,d),h)for(let x=0;x<h.length;x++)C(c,h[x]);if(v){let x=v.subTree;if(u===x){const _=v.vnode;St(c,_,_.scopeId,_.slotScopeIds,v.parent)}}},lt=(c,u,d,h,v,x,_,w,k=0)=>{for(let g=k;g<c.length;g++){const O=c[g]=w?Gt(c[g]):jt(c[g]);N(null,O,u,d,h,v,x,_,w)}},Ae=(c,u,d,h,v,x,_)=>{const w=u.el=c.el;let{patchFlag:k,dynamicChildren:g,dirs:O}=u;k|=c.patchFlag&16;const A=c.props||U,P=u.props||U;let M;d&&te(d,!1),(M=P.onVnodeBeforeUpdate)&&Ot(M,d,u,c),O&&Zt(u,c,d,"beforeUpdate"),d&&te(d,!0);const V=v&&u.type!=="foreignObject";if(g?ce(c.dynamicChildren,g,w,d,h,V,x):_||Pe(c,u,w,null,d,h,V,x,!1),k>0){if(k&16)je(w,u,A,P,d,h,v);else if(k&2&&A.class!==P.class&&i(w,"class",null,P.class,v),k&4&&i(w,"style",A.style,P.style,v),k&8){const J=u.dynamicProps;for(let H=0;H<J.length;H++){const G=J[H],bt=A[G],ue=P[G];(ue!==bt||G==="value")&&i(w,G,bt,ue,v,c.children,d,h,zt)}}k&1&&c.children!==u.children&&p(w,u.children)}else!_&&g==null&&je(w,u,A,P,d,h,v);((M=P.onVnodeUpdated)||O)&&ut(()=>{M&&Ot(M,d,u,c),O&&Zt(u,c,d,"updated")},h)},ce=(c,u,d,h,v,x,_)=>{for(let w=0;w<u.length;w++){const k=c[w],g=u[w],O=k.el&&(k.type===ft||!Me(k,g)||k.shapeFlag&70)?m(k.el):d;N(k,g,O,null,h,v,x,_,!0)}},je=(c,u,d,h,v,x,_)=>{if(d!==h){for(const w in h){if(cn(w))continue;const k=h[w],g=d[w];k!==g&&w!=="value"&&i(c,w,g,k,_,u.children,v,x,zt)}if(d!==U)for(const w in d)!cn(w)&&!(w in h)&&i(c,w,d[w],null,_,u.children,v,x,zt);"value"in h&&i(c,"value",d.value,h.value)}},Je=(c,u,d,h,v,x,_,w,k)=>{const g=u.el=c?c.el:s(""),O=u.anchor=c?c.anchor:s("");let{patchFlag:A,dynamicChildren:P,slotScopeIds:M}=u;M&&(w=w?w.concat(M):M),c==null?(r(g,d,h),r(O,d,h),lt(u.children,d,O,v,x,_,w,k)):A>0&&A&64&&P&&c.dynamicChildren?(ce(c.dynamicChildren,P,d,v,x,_,w),(u.key!=null||v&&u===v.subTree)&&uo(c,u,!0)):Pe(c,u,d,O,v,x,_,w,k)},ha=(c,u,d,h,v,x,_,w,k)=>{u.slotScopeIds=w,c==null?u.shapeFlag&512?v.ctx.activate(u,d,h,_,k):at(u,d,h,v,x,_,k):q(c,u,k)},at=(c,u,d,h,v,x,_)=>{const w=c.component=$l(c,h,v);if(qi(c)&&(w.ctx.renderer=Ee),Gl(w),w.asyncDep){if(v&&v.registerDep(w,$),!c.el){const k=w.subTree=W(oe);j(null,k,u,d)}return}$(w,c,u,d,v,x,_)},q=(c,u,d)=>{const h=u.component=c.component;if(nl(c,u,d))if(h.asyncDep&&!h.asyncResolved){Yt(h,u,d);return}else h.next=u,Ks(h.update),h.update();else u.el=c.el,h.vnode=u},$=(c,u,d,h,v,x,_)=>{const w=()=>{if(c.isMounted){let{next:O,bu:A,u:P,parent:M,vnode:V}=c,J=O,H;te(c,!1),O?(O.el=V.el,Yt(c,O,_)):O=V,A&&Kn(A),(H=O.props&&O.props.onVnodeBeforeUpdate)&&Ot(H,M,O,V),te(c,!0);const G=Jn(c),bt=c.subTree;c.subTree=G,N(bt,G,m(bt.el),tn(bt),c,v,x),O.el=G.el,J===null&&rl(c,G.el),P&&ut(P,v),(H=O.props&&O.props.onVnodeUpdated)&&ut(()=>Ot(H,M,O,V),v)}else{let O;const{el:A,props:P}=u,{bm:M,m:V,parent:J}=c,H=fn(u);if(te(c,!1),M&&Kn(M),!H&&(O=P&&P.onVnodeBeforeMount)&&Ot(O,J,u),te(c,!0),A&&Gn){const G=()=>{c.subTree=Jn(c),Gn(A,c.subTree,c,v,null)};H?u.type.__asyncLoader().then(()=>!c.isUnmounted&&G()):G()}else{const G=c.subTree=Jn(c);N(null,G,d,h,c,v,x),u.el=G.el}if(V&&ut(V,v),!H&&(O=P&&P.onVnodeMounted)){const G=u;ut(()=>Ot(O,J,G),v)}(u.shapeFlag&256||J&&fn(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&ut(c.a,v),c.isMounted=!0,u=d=h=null}},k=c.effect=new Br(w,()=>Hi(g),c.scope),g=c.update=()=>k.run();g.id=c.uid,te(c,!0),g()},Yt=(c,u,d)=>{u.component=c;const h=c.vnode.props;c.vnode=u,c.next=null,Pl(c,u.props,h,d),Ml(c,u.children,d),_e(),Rn(void 0,c.update),Se()},Pe=(c,u,d,h,v,x,_,w,k=!1)=>{const g=c&&c.children,O=c?c.shapeFlag:0,A=u.children,{patchFlag:P,shapeFlag:M}=u;if(P>0){if(P&128){Qe(g,A,d,h,v,x,_,w,k);return}else if(P&256){qe(g,A,d,h,v,x,_,w,k);return}}M&8?(O&16&&zt(g,v,x),A!==g&&p(d,A)):O&16?M&16?Qe(g,A,d,h,v,x,_,w,k):zt(g,v,x,!0):(O&8&&p(d,""),M&16&&lt(A,d,h,v,x,_,w,k))},qe=(c,u,d,h,v,x,_,w,k)=>{c=c||he,u=u||he;const g=c.length,O=u.length,A=Math.min(g,O);let P;for(P=0;P<A;P++){const M=u[P]=k?Gt(u[P]):jt(u[P]);N(c[P],M,d,null,v,x,_,w,k)}g>O?zt(c,v,x,!0,!1,A):lt(u,d,h,v,x,_,w,k,A)},Qe=(c,u,d,h,v,x,_,w,k)=>{let g=0;const O=u.length;let A=c.length-1,P=O-1;for(;g<=A&&g<=P;){const M=c[g],V=u[g]=k?Gt(u[g]):jt(u[g]);if(Me(M,V))N(M,V,d,null,v,x,_,w,k);else break;g++}for(;g<=A&&g<=P;){const M=c[A],V=u[P]=k?Gt(u[P]):jt(u[P]);if(Me(M,V))N(M,V,d,null,v,x,_,w,k);else break;A--,P--}if(g>A){if(g<=P){const M=P+1,V=M<O?u[M].el:h;for(;g<=P;)N(null,u[g]=k?Gt(u[g]):jt(u[g]),d,V,v,x,_,w,k),g++}}else if(g>P)for(;g<=A;)Ht(c[g],v,x,!0),g++;else{const M=g,V=g,J=new Map;for(g=V;g<=P;g++){const dt=u[g]=k?Gt(u[g]):jt(u[g]);dt.key!=null&&J.set(dt.key,g)}let H,G=0;const bt=P-V+1;let ue=!1,ya=0;const Ne=new Array(bt);for(g=0;g<bt;g++)Ne[g]=0;for(g=M;g<=A;g++){const dt=c[g];if(G>=bt){Ht(dt,v,x,!0);continue}let Ct;if(dt.key!=null)Ct=J.get(dt.key);else for(H=V;H<=P;H++)if(Ne[H-V]===0&&Me(dt,u[H])){Ct=H;break}Ct===void 0?Ht(dt,v,x,!0):(Ne[Ct-V]=g+1,Ct>=ya?ya=Ct:ue=!0,N(dt,u[Ct],d,null,v,x,_,w,k),G++)}const wa=ue?Tl(Ne):he;for(H=wa.length-1,g=bt-1;g>=0;g--){const dt=V+g,Ct=u[dt],xa=dt+1<O?u[dt+1].el:h;Ne[g]===0?N(null,Ct,d,xa,v,x,_,w,k):ue&&(H<0||g!==wa[H]?Ze(Ct,d,xa,2):H--)}}},Ze=(c,u,d,h,v=null)=>{const{el:x,type:_,transition:w,children:k,shapeFlag:g}=c;if(g&6){Ze(c.component.subTree,u,d,h);return}if(g&128){c.suspense.move(u,d,h);return}if(g&64){_.move(c,u,d,Ee);return}if(_===ft){r(x,u,d);for(let O=0;O<k.length;O++)Ze(k[O],u,d,h);r(c.anchor,u,d);return}if(_===Qn){D(c,u,d);return}if(h!==2&&g&1&&w)if(h===0)w.beforeEnter(x),r(x,u,d),ut(()=>w.enter(x),v);else{const{leave:O,delayLeave:A,afterLeave:P}=w,M=()=>r(x,u,d),V=()=>{O(x,()=>{M(),P&&P()})};A?A(x,M,V):V()}else r(x,u,d)},Ht=(c,u,d,h=!1,v=!1)=>{const{type:x,props:_,ref:w,children:k,dynamicChildren:g,shapeFlag:O,patchFlag:A,dirs:P}=c;if(w!=null&&gr(w,null,d,c,!0),O&256){u.ctx.deactivate(c);return}const M=O&1&&P,V=!fn(c);let J;if(V&&(J=_&&_.onVnodeBeforeUnmount)&&Ot(J,u,c),O&6)Zo(c.component,d,h);else{if(O&128){c.suspense.unmount(d,h);return}M&&Zt(c,null,u,"beforeUnmount"),O&64?c.type.remove(c,u,d,v,Ee,h):g&&(x!==ft||A>0&&A&64)?zt(g,u,d,!1,!0):(x===ft&&A&384||!v&&O&16)&&zt(k,u,d),h&&ga(c)}(V&&(J=_&&_.onVnodeUnmounted)||M)&&ut(()=>{J&&Ot(J,u,c),M&&Zt(c,null,u,"unmounted")},d)},ga=c=>{const{type:u,el:d,anchor:h,transition:v}=c;if(u===ft){Qo(d,h);return}if(u===Qn){K(c);return}const x=()=>{a(d),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(c.shapeFlag&1&&v&&!v.persisted){const{leave:_,delayLeave:w}=v,k=()=>_(d,x);w?w(c.el,x,k):k()}else x()},Qo=(c,u)=>{let d;for(;c!==u;)d=y(c),a(c),c=d;a(u)},Zo=(c,u,d)=>{const{bum:h,scope:v,update:x,subTree:_,um:w}=c;h&&Kn(h),v.stop(),x&&(x.active=!1,Ht(_,c,u,d)),w&&ut(w,u),ut(()=>{c.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},zt=(c,u,d,h=!1,v=!1,x=0)=>{for(let _=x;_<c.length;_++)Ht(c[_],u,d,h,v)},tn=c=>c.shapeFlag&6?tn(c.component.subTree):c.shapeFlag&128?c.suspense.next():y(c.anchor||c.el),ba=(c,u,d)=>{c==null?u._vnode&&Ht(u._vnode,null,null,!0):N(u._vnode||null,c,u,null,null,null,d),$i(),u._vnode=c},Ee={p:N,um:Ht,m:Ze,r:ga,mt:at,mc:lt,pc:Pe,pbc:ce,n:tn,o:t};let $n,Gn;return e&&([$n,Gn]=e(Ee)),{render:ba,hydrate:$n,createApp:Il(ba,$n)}}function te({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function uo(t,e,n=!1){const r=t.children,a=e.children;if(I(r)&&I(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Gt(a[i]),s.el=o.el),n||uo(o,s))}}function Tl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const f=t[r];if(f!==0){if(a=n[n.length-1],t[a]<f){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<f?i=s+1:o=s;f<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Fl=t=>t.__isTeleport,ft=Symbol(void 0),Qr=Symbol(void 0),oe=Symbol(void 0),Qn=Symbol(void 0),De=[];let xt=null;function Z(t=!1){De.push(xt=t?null:[])}function Dl(){De.pop(),xt=De[De.length-1]||null}let We=1;function Da(t){We+=t}function fo(t){return t.dynamicChildren=We>0?xt||he:null,Dl(),We>0&&xt&&xt.push(t),t}function nt(t,e,n,r,a,i){return fo(F(t,e,n,r,a,i,!0))}function mo(t,e,n,r,a){return fo(W(t,e,n,r,a,!0))}function br(t){return t?t.__v_isVNode===!0:!1}function Me(t,e){return t.type===e.type&&t.key===e.key}const Bn="__vInternal",po=({key:t})=>t!=null?t:null,mn=({ref:t,ref_key:e,ref_for:n})=>t!=null?tt(t)||ot(t)||R(t)?{i:Pt,r:t,k:e,f:!!n}:t:null;function F(t,e=null,n=null,r=0,a=null,i=t===ft?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&po(e),ref:e&&mn(e),scopeId:Fn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Zr(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=tt(n)?8:16),We>0&&!o&&xt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&xt.push(l),l}const W=Bl;function Bl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===wl)&&(t=oe),br(t)){const s=we(t,e,!0);return n&&Zr(s,n),We>0&&!i&&xt&&(s.shapeFlag&6?xt[xt.indexOf(t)]=s:xt.push(s)),s.patchFlag|=-2,s}if(Ql(t)&&(t=t.__vccOpts),e){e=Vl(e);let{class:s,style:l}=e;s&&!tt(s)&&(e.class=Pn(s)),Q(l)&&(Fi(l)&&!I(l)&&(l=st({},l)),e.style=Ir(l))}const o=tt(t)?1:al(t)?128:Fl(t)?64:Q(t)?4:R(t)?2:0;return F(t,e,n,r,a,o,i,!0)}function Vl(t){return t?Fi(t)||Bn in t?st({},t):t:null}function we(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?Hl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&po(s),ref:e&&e.ref?n&&a?I(a)?a.concat(mn(e)):[a,mn(e)]:mn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&we(t.ssContent),ssFallback:t.ssFallback&&we(t.ssFallback),el:t.el,anchor:t.anchor}}function Yl(t=" ",e=0){return W(Qr,null,t,e)}function sn(t="",e=!1){return e?(Z(),mo(oe,null,t)):W(oe,null,t)}function jt(t){return t==null||typeof t=="boolean"?W(oe):I(t)?W(ft,null,t.slice()):typeof t=="object"?Gt(t):W(Qr,null,String(t))}function Gt(t){return t.el===null||t.memo?t:we(t)}function Zr(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(I(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),Zr(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Bn in e)?e._ctx=Pt:a===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else R(e)?(e={default:e,_ctx:Pt},n=32):(e=String(e),r&64?(n=16,e=[Yl(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Pn([e.class,r.class]));else if(a==="style")e.style=Ir([e.style,r.style]);else if(En(a)){const i=e[a],o=r[a];o&&i!==o&&!(I(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function Ot(t,e,n,r=null){_t(t,e,7,[n,r])}const Ul=co();let Wl=0;function $l(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Ul,i={uid:Wl++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:io(r,a),emitsOptions:Xi(r,a),emit:null,emitted:null,propsDefaults:U,inheritAttrs:r.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Qs.bind(null,i),t.ce&&t.ce(i),i}let et=null;const xe=t=>{et=t,t.scope.on()},ie=()=>{et&&et.scope.off(),et=null};function vo(t){return t.vnode.shapeFlag&4}let $e=!1;function Gl(t,e=!1){$e=e;const{props:n,children:r}=t.vnode,a=vo(t);jl(t,n,a,e),Nl(t,r);const i=a?Xl(t,e):void 0;return $e=!1,i}function Xl(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Di(new Proxy(t.ctx,kl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?Jl(t):null;xe(t),_e();const i=Kt(r,t,0,[t.props,a]);if(Se(),ie(),Si(i)){if(i.then(ie,ie),e)return i.then(o=>{Ba(t,o,e)}).catch(o=>{Ln(o,t,0)});t.asyncDep=i}else Ba(t,i,e)}else ho(t,e)}function Ba(t,e,n){R(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Q(e)&&(t.setupState=Vi(e)),ho(t,n)}let Va;function ho(t,e,n){const r=t.type;if(!t.render){if(!e&&Va&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,f=st(st({isCustomElement:i,delimiters:s},o),l);r.render=Va(a,f)}}t.render=r.render||Nt}xe(t),_e(),_l(t),Se(),ie()}function Kl(t){return new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}})}function Jl(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=Kl(t))},slots:t.slots,emit:t.emit,expose:e}}function ta(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Vi(Di(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xn)return xn[n](t)}}))}function ql(t,e=!0){return R(t)?t.displayName||t.name:t.name||e&&t.__name}function Ql(t){return R(t)&&"__vccOpts"in t}const ht=(t,e)=>Ws(t,e,$e);function go(t,e,n){const r=arguments.length;return r===2?Q(e)&&!I(e)?br(e)?W(t,null,[e]):W(t,e):W(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&br(n)&&(n=[n]),W(t,e,n))}const Zl="3.2.37",tc="http://www.w3.org/2000/svg",ne=typeof document<"u"?document:null,Ya=ne&&ne.createElement("template"),ec={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?ne.createElementNS(tc,t):ne.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>ne.createTextNode(t),createComment:t=>ne.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ne.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ya.innerHTML=r?`<svg>${t}</svg>`:t;const s=Ya.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function nc(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function rc(t,e,n){const r=t.style,a=tt(n);if(n&&!a){for(const i in n)yr(r,i,n[i]);if(e&&!tt(e))for(const i in e)n[i]==null&&yr(r,i,"")}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ha=/\s*!important$/;function yr(t,e,n){if(I(n))n.forEach(r=>yr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=ac(t,e);Ha.test(n)?t.setProperty(ke(r),n.replace(Ha,""),"important"):t[r]=n}}const Ua=["Webkit","Moz","ms"],Zn={};function ac(t,e){const n=Zn[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return Zn[e]=r;r=zn(r);for(let a=0;a<Ua.length;a++){const i=Ua[a]+r;if(i in t)return Zn[e]=i}return e}const Wa="http://www.w3.org/1999/xlink";function ic(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Wa,e.slice(6,e.length)):t.setAttributeNS(Wa,e,n);else{const i=es(e);n==null||i&&!xi(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function oc(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let s=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=xi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}const[bo,sc]=(()=>{let t=Date.now,e=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let wr=0;const lc=Promise.resolve(),cc=()=>{wr=0},uc=()=>wr||(lc.then(cc),wr=bo());function fc(t,e,n,r){t.addEventListener(e,n,r)}function dc(t,e,n,r){t.removeEventListener(e,n,r)}function mc(t,e,n,r,a=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=pc(e);if(r){const f=i[e]=vc(r,a);fc(t,s,f,l)}else o&&(dc(t,s,o,l),i[e]=void 0)}}const $a=/(?:Once|Passive|Capture)$/;function pc(t){let e;if($a.test(t)){e={};let n;for(;n=t.match($a);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[ke(t.slice(2)),e]}function vc(t,e){const n=r=>{const a=r.timeStamp||bo();(sc||a>=n.attached-1)&&_t(hc(r,n.value),e,5,[r])};return n.value=t,n.attached=uc(),n}function hc(t,e){if(I(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const Ga=/^on[a-z]/,gc=(t,e,n,r,a=!1,i,o,s,l)=>{e==="class"?nc(t,r,a):e==="style"?rc(t,n,r):En(e)?Lr(e)||mc(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bc(t,e,r,a))?oc(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ic(t,e,r,a))};function bc(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Ga.test(e)&&R(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Ga.test(e)&&tt(n)?!1:e in t}const yc=st({patchProp:gc},ec);let Xa;function wc(){return Xa||(Xa=Ll(yc))}const xc=(...t)=>{const e=wc().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=kc(r);if(!a)return;const i=e._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function kc(t){return tt(t)?document.querySelector(t):t}const _c=""+new URL(""+new URL("face.fc39607e.fc39607e.jpeg",import.meta.url).href,self.location).href,Sc={class:"icon is-large"},Cc=["href"],tr=Dt({__name:"SocialLink",props:{icon:null,url:null,size:{default:"xl"}},setup(t){const e=t;return(n,r)=>{const a=eo("font-awesome-icon");return Z(),nt("span",Sc,[F("a",{href:e.url,target:"_blank"},[W(a,{icon:`fa-brands fa-${e.icon}`,size:e.size},null,8,["icon","size"])],8,Cc)])}}}),ea=t=>(Kr("data-v-9d2f97f0"),t=t(),Jr(),t),Oc={class:"hero is-large"},Ac={class:"hero-body"},jc={class:"container has-text-centered"},Pc=ea(()=>F("figure",{class:"image mb-4 is-128x128"},[F("img",{class:"is-rounded",src:_c,alt:"picture of Richard"})],-1)),Ec=ea(()=>F("h1",{class:"title is-2"},"RICHARD EPURE",-1)),Nc=ea(()=>F("h2",{class:"subtitle"},"Web Developer & Computer Science Graduate",-1)),Mc={class:"is-flex is-justify-content-center is-align-items-center"},zc=Dt({__name:"Hero",setup(t){return(e,n)=>(Z(),nt("div",Oc,[F("div",Ac,[F("div",jc,[Pc,Ec,Nc,F("div",Mc,[W(tr,{icon:"github",url:"https://github.com/RichardEpure"}),W(tr,{icon:"linkedin",url:"https://www.linkedin.com/in/richard-epure-803733190/"}),W(tr,{icon:"stack-overflow",url:"https://stackoverflow.com/users/18175770/richard-epure"})])])])]))}}),Ce=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},Ic=Ce(zc,[["__scopeId","data-v-9d2f97f0"]]),Lc={class:"tag is-size-6"},Rc=Dt({__name:"Skills",props:{skills:null,layout:null},setup(t){const e=t;return(n,r)=>(Z(),nt("div",{class:Pn(["tags",e.layout])},[(Z(!0),nt(ft,null,dn(e.skills,a=>(Z(),nt("p",Lc,ze(a),1))),256))],2))}}),yo=Ce(Rc,[["__scopeId","data-v-795e7b17"]]),Tc={class:"card block"},Fc={class:"card-content"},Dc={class:"media"},Bc={class:"media-left"},Vc={class:"icon is-large mb-1"},Yc={class:"media-content"},Hc={class:"title is-4"},Uc={key:0,class:"subtitle is-6"},Wc={key:0,class:"content"},$c={class:"content"},Gc={key:0,class:"card-footer"},Xc=["href"],Kc=Dt({__name:"ResumeCard",props:{resume_card:null},setup(t){const e=t,n=e.resume_card.type;let r="";switch(n){case"education":r="fa-graduation-cap";break;case"experience":r="fa-industry";break;case"project":r="fa-file-code";break}return(a,i)=>{const o=eo("font-awesome-icon");return Z(),nt("div",Tc,[F("div",Fc,[F("div",Dc,[F("div",Bc,[F("span",Vc,[W(o,{icon:`fa-solid ${Bi(r)}`,size:"2xl"},null,8,["icon"])])]),F("div",Yc,[F("p",Hc,ze(e.resume_card.title),1),e.resume_card.subtitle?(Z(),nt("p",Uc,ze(e.resume_card.subtitle),1)):sn("",!0)])]),e.resume_card.content?(Z(),nt("div",Wc,ze(e.resume_card.content),1)):sn("",!0),F("div",$c,[F("i",null,ze(e.resume_card.date),1)]),e.resume_card.skills?(Z(),mo(yo,{key:1,skills:e.resume_card.skills,layout:"inside-card"},null,8,["skills"])):sn("",!0)]),e.resume_card.url?(Z(),nt("footer",Gc,[F("a",{class:"card-footer-item",href:e.resume_card.url,target:"_blank"}," View More ",8,Xc)])):sn("",!0)])}}}),er=Ce(Kc,[["__scopeId","data-v-d4f687d3"]]),Xe=t=>(Kr("data-v-3b7f95c4"),t=t(),Jr(),t),Jc={class:"section resume"},qc={class:"container"},Qc=Xe(()=>F("h2",{class:"title pb-6 pt-4"},"Resume",-1)),Zc={class:"resume-section"},tu=Xe(()=>F("h3",{class:"title is-4"},"Education",-1)),eu={class:"resume-section"},nu=Xe(()=>F("h3",{class:"title is-4"},"Experience",-1)),ru={class:"resume-section"},au=Xe(()=>F("h3",{class:"title is-4"},"Personal Projects",-1)),iu={class:"resume-section"},ou=Xe(()=>F("h3",{class:"title is-4"},"Skills",-1)),su=Dt({__name:"Resume",setup(t){const e=[{type:"education",title:"Queen Mary University of London",subtitle:"BSc of Computer Science with Industrial Experience",content:`Graduated with 1st class honours and won the Draper's Company undergraduate prizes for
      outstanding achievements in the academic years 2020/2021 & 2021/2022.`,skills:["Web Programming","Algorithms & Data Structures","Distributed Systems","Software Engineering","Database Systems","Computer Graphics","Neural Networks","Graphical User Interfaces","Interaction Design"],date:"September 2018\u2014July 2022"},{type:"education",title:"East Barnet School",subtitle:"A levels & GCSEs",date:"September 2016\u2014June 2018"}],n=[{type:"experience",title:"Soapbox",subtitle:"Web Developer",content:`Joined a team of full stack web developers and contributed to over a dozen projects such as 'HDRUK',
      'Ada Lovelace Institute', and 'Institute of Development Studies'. There I took a variety of responsibilites
      such as working on new projects, performing maintenenace on older projects, deploying builds,
      communicating with clients, and bug fixing.`,skills:["HTML/CSS","JavaScript","jQuery","SCSS","BEM","ITCSS","PHP","WordPress","Docker"],date:"August 2020\u2014June 2021"},{type:"experience",title:"Freelance",subtitle:"Web Developer & Consultant",content:`Designed, created and hosted several websites as a freelance web developer for
      GSA Construction, GRS Construction, and IBJoinery.`,skills:["HTML/CSS","SCSS","JavaScript","AWS"],date:"February 2019\u2014September 2019"}],r=[{type:"project",title:"Crust",subtitle:"Communications App",content:`Crust is a work in progress Tauri based application for voice communication, chat messaging and
      screen sharing. It uses a peer-to-peer model to give users more control over their network.`,skills:["Rust","Tauri","TypeScript","Vue","Vite","SCSS"],date:"July 2022\u2014Present",url:"https://github.com/CallumWatkins/crust"}],a=["Java","Rust","Python","PHP","JavaScript","TypeScript","HTML/CSS","C++","GLSL","Tauri","Django","Vue","React","SCSS","WebGL","jQuery","PyTorch","PyGame","JavaFX","SQL","WordPress","AWS","Docker","Git","Godot"];return(i,o)=>(Z(),nt("section",Jc,[F("div",qc,[Qc,F("div",Zc,[tu,(Z(),nt(ft,null,dn(e,s=>W(er,{resume_card:s},null,8,["resume_card"])),64))]),F("div",eu,[nu,(Z(),nt(ft,null,dn(n,s=>W(er,{resume_card:s},null,8,["resume_card"])),64))]),F("div",ru,[au,(Z(),nt(ft,null,dn(r,s=>W(er,{resume_card:s},null,8,["resume_card"])),64))]),F("div",iu,[ou,W(yo,{skills:a})])])]))}}),lu=Ce(su,[["__scopeId","data-v-3b7f95c4"]]),cu={},uu={class:"footer"},fu=F("div",{class:"content has-text-centered"},[F("p",null,"Richard Epure 2022")],-1),du=[fu];function mu(t,e){return Z(),nt("footer",uu,du)}const pu=Ce(cu,[["render",mu]]),vu={},hu=t=>(Kr("data-v-3fecf479"),t=t(),Jr(),t),gu={class:"section is-medium"},bu=hu(()=>F("div",{class:"container"},[F("div",{class:"inner"},[F("h2",{class:"title has-text-centered"},"About Me"),F("p",{class:"content"}," Hello! I am a developer that has been programming ever since I chose Computer Science as a GCSE module. During my time as a student I have learnt a lot about web development and managed to gain experience in the industry. I also enjoy game development and computer graphics as a hobby and I commonly learn new languages by creating simple games with them. ")])],-1)),yu=[bu];function wu(t,e){return Z(),nt("section",gu,yu)}const xu=Ce(vu,[["render",wu],["__scopeId","data-v-3fecf479"]]),ku=Dt({__name:"App",setup(t){return(e,n)=>(Z(),nt(ft,null,[W(Ic),W(xu),W(lu),W(pu)],64))}});/*!
* Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2022 Fonticons, Inc.
*/function Ka(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ka(Object(n),!0).forEach(function(r){Cu(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ka(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _n(t){return _n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_n(t)}function _u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ja(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Su(t,e,n){return e&&Ja(t.prototype,e),n&&Ja(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Cu(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function na(t,e){return Au(t)||Pu(t,e)||wo(t,e)||Nu()}function Vn(t){return Ou(t)||ju(t)||wo(t)||Eu()}function Ou(t){if(Array.isArray(t))return xr(t)}function Au(t){if(Array.isArray(t))return t}function ju(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Pu(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function wo(t,e){if(t){if(typeof t=="string")return xr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xr(t,e)}}function xr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Eu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Nu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var qa=function(){},ra={},xo={},ko=null,_o={mark:qa,measure:qa};try{typeof window<"u"&&(ra=window),typeof document<"u"&&(xo=document),typeof MutationObserver<"u"&&(ko=MutationObserver),typeof performance<"u"&&(_o=performance)}catch{}var Mu=ra.navigator||{},Qa=Mu.userAgent,Za=Qa===void 0?"":Qa,qt=ra,X=xo,ti=ko,ln=_o;qt.document;var Vt=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",So=~Za.indexOf("MSIE")||~Za.indexOf("Trident/"),Rt="___FONT_AWESOME___",kr=16,Co="fa",Oo="svg-inline--fa",se="data-fa-i2svg",_r="data-fa-pseudo-element",zu="data-fa-pseudo-element-pending",aa="data-prefix",ia="data-icon",ei="fontawesome-i2svg",Iu="async",Lu=["HTML","HEAD","STYLE","SCRIPT"],Ao=function(){try{return!0}catch{return!1}}(),oa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Sn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},jo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Ru={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Tu=/fa[srltdbk]?[\-\ ]/,Po="fa-layers-text",Fu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Du={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Eo=[1,2,3,4,5,6,7,8,9,10],Bu=Eo.concat([11,12,13,14,15,16,17,18,19,20]),Vu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],re={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yu=[].concat(Vn(Object.keys(Sn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",re.GROUP,re.SWAP_OPACITY,re.PRIMARY,re.SECONDARY]).concat(Eo.map(function(t){return"".concat(t,"x")})).concat(Bu.map(function(t){return"w-".concat(t)})),No=qt.FontAwesomeConfig||{};function Hu(t){var e=X.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Uu(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(X&&typeof X.querySelector=="function"){var Wu=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Wu.forEach(function(t){var e=na(t,2),n=e[0],r=e[1],a=Uu(Hu(n));a!=null&&(No[r]=a)})}var $u={familyPrefix:Co,styleDefault:"solid",replacementClass:Oo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Be=S(S({},$u),No);Be.autoReplaceSvg||(Be.observeMutations=!1);var E={};Object.keys(Be).forEach(function(t){Object.defineProperty(E,t,{enumerable:!0,set:function(e){Be[t]=e,pn.forEach(function(n){return n(E)})},get:function(){return Be[t]}})});qt.FontAwesomeConfig=E;var pn=[];function Gu(t){return pn.push(t),function(){pn.splice(pn.indexOf(t),1)}}var Wt=kr,Et={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xu(t){if(!(!t||!Vt)){var e=X.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(e,r),t}}var Ku="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ge(){for(var t=12,e="";t-- >0;)e+=Ku[Math.random()*62|0];return e}function Oe(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sa(t){return t.classList?Oe(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Mo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ju(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Mo(t[n]),'" ')},"").trim()}function Yn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function la(t){return t.size!==Et.size||t.x!==Et.x||t.y!==Et.y||t.rotate!==Et.rotate||t.flipX||t.flipY}function qu(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function Qu(t){var e=t.transform,n=t.width,r=n===void 0?kr:n,a=t.height,i=a===void 0?kr:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&So?l+="translate(".concat(e.x/Wt-r/2,"em, ").concat(e.y/Wt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Wt,"em), calc(-50% + ").concat(e.y/Wt,"em)) "):l+="translate(".concat(e.x/Wt,"em, ").concat(e.y/Wt,"em) "),l+="scale(".concat(e.size/Wt*(e.flipX?-1:1),", ").concat(e.size/Wt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Zu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function zo(){var t=Co,e=Oo,n=E.familyPrefix,r=E.replacementClass,a=Zu;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ni=!1;function nr(){E.autoAddCss&&!ni&&(Xu(zo()),ni=!0)}var tf={mixout:function(){return{dom:{css:zo,insertCss:nr}}},hooks:function(){return{beforeDOMElementCreation:function(){nr()},beforeI2svg:function(){nr()}}}},Tt=qt||{};Tt[Rt]||(Tt[Rt]={});Tt[Rt].styles||(Tt[Rt].styles={});Tt[Rt].hooks||(Tt[Rt].hooks={});Tt[Rt].shims||(Tt[Rt].shims=[]);var kt=Tt[Rt],Io=[],ef=function t(){X.removeEventListener("DOMContentLoaded",t),Cn=1,Io.map(function(e){return e()})},Cn=!1;Vt&&(Cn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Cn||X.addEventListener("DOMContentLoaded",ef));function nf(t){!Vt||(Cn?setTimeout(t,0):Io.push(t))}function Ke(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Mo(t):"<".concat(e," ").concat(Ju(r),">").concat(i.map(Ke).join(""),"</").concat(e,">")}function ri(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var rf=function(t,e){return function(n,r,a,i){return t.call(e,n,r,a,i)}},rr=function(t,e,n,r){var a=Object.keys(t),i=a.length,o=r!==void 0?rf(e,r):e,s,l,f;for(n===void 0?(s=1,f=t[a[0]]):(s=0,f=n);s<i;s++)l=a[s],f=o(f,t[l],l,t);return f};function af(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Lo(t){var e=af(t);return e.length===1?e[0].toString(16):null}function of(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ai(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Sr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ai(e);typeof kt.hooks.addPack=="function"&&!a?kt.hooks.addPack(t,ai(e)):kt.styles[t]=S(S({},kt.styles[t]||{}),i),t==="fas"&&Sr("fa",e)}var Ve=kt.styles,sf=kt.shims,lf=Object.values(jo),ca=null,Ro={},To={},Fo={},Do={},Bo={},cf=Object.keys(oa);function uf(t){return~Yu.indexOf(t)}function ff(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!uf(a)?a:null}var Vo=function(){var t=function(r){return rr(Ve,function(a,i,o){return a[o]=rr(i,r,{}),a},{})};Ro=t(function(r,a,i){if(a[3]&&(r[a[3]]=i),a[2]){var o=a[2].filter(function(s){return typeof s=="number"});o.forEach(function(s){r[s.toString(16)]=i})}return r}),To=t(function(r,a,i){if(r[i]=i,a[2]){var o=a[2].filter(function(s){return typeof s=="string"});o.forEach(function(s){r[s]=i})}return r}),Bo=t(function(r,a,i){var o=a[2];return r[i]=i,o.forEach(function(s){r[s]=i}),r});var e="far"in Ve||E.autoFetchSvg,n=rr(sf,function(r,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!e&&(o="fas"),typeof i=="string"&&(r.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:o,iconName:s}),r},{names:{},unicodes:{}});Fo=n.names,Do=n.unicodes,ca=Hn(E.styleDefault)};Gu(function(t){ca=Hn(t.styleDefault)});Vo();function ua(t,e){return(Ro[t]||{})[e]}function df(t,e){return(To[t]||{})[e]}function pe(t,e){return(Bo[t]||{})[e]}function Yo(t){return Fo[t]||{prefix:null,iconName:null}}function mf(t){var e=Do[t],n=ua("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qt(){return ca}var fa=function(){return{prefix:null,iconName:null,rest:[]}};function Hn(t){var e=oa[t],n=Sn[t]||Sn[e],r=t in kt.styles?t:null;return n||r||null}function Un(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,a=null,i=t.reduce(function(o,s){var l=ff(E.familyPrefix,s);if(Ve[s]?(s=lf.includes(s)?Ru[s]:s,a=s,o.prefix=s):cf.indexOf(s)>-1?(a=s,o.prefix=Hn(s)):l?o.iconName=l:s!==E.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var f=a==="fa"?Yo(o.iconName):{},p=pe(o.prefix,o.iconName);f.prefix&&(a=null),o.iconName=f.iconName||p||o.iconName,o.prefix=f.prefix||o.prefix,o.prefix==="far"&&!Ve.far&&Ve.fas&&!E.autoFetchSvg&&(o.prefix="fas")}return o},fa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Qt()||"fas"),i}var pf=function(){function t(){_u(this,t),this.definitions={}}return Su(t,[{key:"add",value:function(){for(var e=this,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(o){e.definitions[o]=S(S({},e.definitions[o]||{}),i[o]),Sr(o,i[o]);var s=jo[o];s&&Sr(s,i[o]),Vo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,n){var r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(function(a){var i=r[a],o=i.prefix,s=i.iconName,l=i.icon,f=l[2];e[o]||(e[o]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(e[o][p]=l)}),e[o][s]=l}),e}}]),t}(),ii=[],ve={},ye={},vf=Object.keys(ye);function hf(t,e){var n=e.mixoutsTo;return ii=t,ve={},Object.keys(ye).forEach(function(r){vf.indexOf(r)===-1&&delete ye[r]}),ii.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),_n(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ve[o]||(ve[o]=[]),ve[o].push(i[o])})}r.provides&&r.provides(ye)}),n}function Cr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ve[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function le(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=ve[t]||[];a.forEach(function(i){i.apply(null,n)})}function Ft(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ye[t]?ye[t].apply(null,e):void 0}function Or(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Qt();if(e)return e=pe(n,e)||e,ri(Ho.definitions,n,e)||ri(kt.styles,n,e)}var Ho=new pf,gf=function(){E.autoReplaceSvg=!1,E.observeMutations=!1,le("noAuto")},bf={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(le("beforeI2svg",t),Ft("pseudoElements2svg",t),Ft("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot;E.autoReplaceSvg===!1&&(E.autoReplaceSvg=!0),E.observeMutations=!0,nf(function(){wf({autoReplaceSvgRoot:e}),le("watch",t)})}},yf={icon:function(t){if(t===null)return null;if(_n(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pe(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Hn(t[0]);return{prefix:n,iconName:pe(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(E.familyPrefix,"-"))>-1||t.match(Tu))){var r=Un(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Qt(),iconName:pe(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var a=Qt();return{prefix:a,iconName:pe(a,t)||t}}}},vt={noAuto:gf,config:E,dom:bf,parse:yf,library:Ho,findIconDefinition:Or,toHtml:Ke},wf=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=t.autoReplaceSvgRoot,n=e===void 0?X:e;(Object.keys(kt.styles).length>0||E.autoFetchSvg)&&Vt&&E.autoReplaceSvg&&vt.dom.i2svg({node:n})};function Wn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return Ke(n)})}}),Object.defineProperty(t,"node",{get:function(){if(Vt){var n=X.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function xf(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(la(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=Yn(S(S({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function kf(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(E.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:S(S({},a),{},{id:o}),children:r}]}]}function da(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,f=t.maskId,p=t.titleId,m=t.extra,y=t.watchable,C=y===void 0?!1:y,L=r.found?r:n,T=L.width,N=L.height,b=a==="fak",j=[E.replacementClass,i?"".concat(E.familyPrefix,"-").concat(i):""].filter(function(lt){return m.classes.indexOf(lt)===-1}).filter(function(lt){return lt!==""||!!lt}).concat(m.classes).join(" "),z={children:[],attributes:S(S({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:j,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(T," ").concat(N)})},D=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(T/N*16*.0625,"em")}:{};C&&(z.attributes[se]=""),l&&(z.children.push({tag:"title",attributes:{id:z.attributes["aria-labelledby"]||"title-".concat(p||Ge())},children:[l]}),delete z.attributes.title);var K=S(S({},z),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:S(S({},D),m.styles)}),rt=r.found&&n.found?Ft("generateAbstractMask",K)||{children:[],attributes:{}}:Ft("generateAbstractIcon",K)||{children:[],attributes:{}},gt=rt.children,St=rt.attributes;return K.children=gt,K.attributes=St,s?kf(K):xf(K)}function oi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,f=S(S(S({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[se]="");var p=S({},o.styles);la(a)&&(p.transform=Qu({transform:a,startCentered:!0,width:n,height:r}),p["-webkit-transform"]=p.transform);var m=Yn(p);m.length>0&&(f.style=m);var y=[];return y.push({tag:"span",attributes:f,children:[e]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}function _f(t){var e=t.content,n=t.title,r=t.extra,a=S(S(S({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Yn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ar=kt.styles;function Ar(t){var e=t[0],n=t[1],r=t.slice(4),a=na(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(E.familyPrefix,"-").concat(re.GROUP)},children:[{tag:"path",attributes:{class:"".concat(E.familyPrefix,"-").concat(re.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(E.familyPrefix,"-").concat(re.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Sf={found:!1,width:512,height:512};function Cf(t,e){!Ao&&!E.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function jr(t,e){var n=e;return e==="fa"&&E.styleDefault!==null&&(e=Qt()),new Promise(function(r,a){if(Ft("missingIconAbstract"),n==="fa"){var i=Yo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ar[e]&&ar[e][t]){var o=ar[e][t];return r(Ar(o))}Cf(t,e),r(S(S({},Sf),{},{icon:E.showMissingIcons&&t?Ft("missingIconAbstract")||{}:{}}))})}var si=function(){},Pr=E.measurePerformance&&ln&&ln.mark&&ln.measure?ln:{mark:si,measure:si},Re='FA "6.1.2"',Of=function(t){return Pr.mark("".concat(Re," ").concat(t," begins")),function(){return Uo(t)}},Uo=function(t){Pr.mark("".concat(Re," ").concat(t," ends")),Pr.measure("".concat(Re," ").concat(t),"".concat(Re," ").concat(t," begins"),"".concat(Re," ").concat(t," ends"))},ma={begin:Of,end:Uo},vn=function(){};function li(t){var e=t.getAttribute?t.getAttribute(se):null;return typeof e=="string"}function Af(t){var e=t.getAttribute?t.getAttribute(aa):null,n=t.getAttribute?t.getAttribute(ia):null;return e&&n}function jf(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(E.replacementClass)}function Pf(){if(E.autoReplaceSvg===!0)return hn.replace;var t=hn[E.autoReplaceSvg];return t||hn.replace}function Ef(t){return X.createElementNS("http://www.w3.org/2000/svg",t)}function Nf(t){return X.createElement(t)}function Wo(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?Ef:Nf:n;if(typeof t=="string")return X.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Wo(o,{ceFn:r}))}),a}function Mf(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var hn={replace:function(t){var e=t[0];if(e.parentNode)if(t[1].forEach(function(r){e.parentNode.insertBefore(Wo(r),e)}),e.getAttribute(se)===null&&E.keepOriginalSource){var n=X.createComment(Mf(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){var e=t[0],n=t[1];if(~sa(e).indexOf(E.replacementClass))return hn.replace(t);var r=new RegExp("".concat(E.familyPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){var a=n[0].attributes.class.split(" ").reduce(function(o,s){return s===E.replacementClass||s.match(r)?o.toSvg.push(s):o.toNode.push(s),o},{toNode:[],toSvg:[]});n[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",a.toNode.join(" "))}var i=n.map(function(o){return Ke(o)}).join(`
`);e.setAttribute(se,""),e.innerHTML=i}};function ci(t){t()}function $o(t,e){var n=typeof e=="function"?e:vn;if(t.length===0)n();else{var r=ci;E.mutateApproach===Iu&&(r=qt.requestAnimationFrame||ci),r(function(){var a=Pf(),i=ma.begin("mutate");t.map(a),i(),n()})}}var pa=!1;function Go(){pa=!0}function Er(){pa=!1}var On=null;function ui(t){if(!!ti&&!!E.observeMutations){var e=t.treeCallback,n=e===void 0?vn:e,r=t.nodeCallback,a=r===void 0?vn:r,i=t.pseudoElementsCallback,o=i===void 0?vn:i,s=t.observeMutationsRoot,l=s===void 0?X:s;On=new ti(function(f){if(!pa){var p=Qt();Oe(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!li(m.addedNodes[0])&&(E.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&E.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&li(m.target)&&~Vu.indexOf(m.attributeName))if(m.attributeName==="class"&&Af(m.target)){var y=Un(sa(m.target)),C=y.prefix,L=y.iconName;m.target.setAttribute(aa,C||p),L&&m.target.setAttribute(ia,L)}else jf(m.target)&&a(m.target)})}}),Vt&&On.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function zf(){!On||On.disconnect()}function If(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Lf(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Un(sa(t));return a.prefix||(a.prefix=Qt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=df(a.prefix,t.innerText)||ua(a.prefix,Lo(t.innerText))),!a.iconName&&E.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Rf(t){var e=Oe(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return E.autoA11y&&(n?e["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(r||Ge()):(e["aria-hidden"]="true",e.focusable="false")),e}function Tf(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Et,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function fi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Lf(t),r=n.iconName,a=n.prefix,i=n.rest,o=Rf(t),s=Cr("parseNodeAttributes",{},t),l=e.styleParser?If(t):[];return S({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Et,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ff=kt.styles;function Xo(t){var e=E.autoReplaceSvg==="nest"?fi(t,{styleParser:!1}):fi(t);return~e.extra.classes.indexOf(Po)?Ft("generateLayersText",t,e):Ft("generateSvgReplacementMutation",t,e)}function di(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=X.documentElement.classList,r=function(p){return n.add("".concat(ei,"-").concat(p))},a=function(p){return n.remove("".concat(ei,"-").concat(p))},i=E.autoFetchSvg?Object.keys(oa):Object.keys(Ff);i.includes("fa")||i.push("fa");var o=[".".concat(Po,":not([").concat(se,"])")].concat(i.map(function(p){return".".concat(p,":not([").concat(se,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Oe(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ma.begin("onTree"),f=s.reduce(function(p,m){try{var y=Xo(m);y&&p.push(y)}catch(C){Ao||C.name==="MissingIcon"&&console.error(C)}return p},[]);return new Promise(function(p,m){Promise.all(f).then(function(y){$o(y,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),p()})}).catch(function(y){l(),m(y)})})}function Df(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xo(t).then(function(n){n&&$o([n],e)})}function Bf(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Or(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Or(a||{})),t(r,S(S({},n),{},{mask:a}))}}var Vf=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?Et:n,a=e.symbol,i=a===void 0?!1:a,o=e.mask,s=o===void 0?null:o,l=e.maskId,f=l===void 0?null:l,p=e.title,m=p===void 0?null:p,y=e.titleId,C=y===void 0?null:y,L=e.classes,T=L===void 0?[]:L,N=e.attributes,b=N===void 0?{}:N,j=e.styles,z=j===void 0?{}:j;if(t){var D=t.prefix,K=t.iconName,rt=t.icon;return Wn(S({type:"icon"},t),function(){return le("beforeDOMElementCreation",{iconDefinition:t,params:e}),E.autoA11y&&(m?b["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(C||Ge()):(b["aria-hidden"]="true",b.focusable="false")),da({icons:{main:Ar(rt),mask:s?Ar(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:K,transform:S(S({},Et),r),symbol:i,title:m,maskId:f,titleId:C,extra:{attributes:b,styles:z,classes:T}})})}},Yf={mixout:function(){return{icon:Bf(Vf)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=di,t.nodeCallback=Df,t}}},provides:function(t){t.i2svg=function(e){var n=e.node,r=n===void 0?X:n,a=e.callback,i=a===void 0?function(){}:a;return di(r,i)},t.generateSvgReplacementMutation=function(e,n){var r=n.iconName,a=n.title,i=n.titleId,o=n.prefix,s=n.transform,l=n.symbol,f=n.mask,p=n.maskId,m=n.extra;return new Promise(function(y,C){Promise.all([jr(r,o),f.iconName?jr(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var T=na(L,2),N=T[0],b=T[1];y([e,da({icons:{main:N,mask:b},prefix:o,iconName:r,transform:s,symbol:l,maskId:p,title:a,titleId:i,extra:m,watchable:!0})])}).catch(C)})},t.generateAbstractIcon=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.transform,o=e.styles,s=Yn(o);s.length>0&&(r.style=s);var l;return la(i)&&(l=Ft("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},Hf={mixout:function(){return{layer:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.classes,r=n===void 0?[]:n;return Wn({type:"layer"},function(){le("beforeDOMElementCreation",{assembler:t,params:e});var a=[];return t(function(i){Array.isArray(i)?i.map(function(o){a=a.concat(o.abstract)}):a=a.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(E.familyPrefix,"-layers")].concat(Vn(r)).join(" ")},children:a}]})}}}},Uf={mixout:function(){return{counter:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.title,r=n===void 0?null:n,a=e.classes,i=a===void 0?[]:a,o=e.attributes,s=o===void 0?{}:o,l=e.styles,f=l===void 0?{}:l;return Wn({type:"counter",content:t},function(){return le("beforeDOMElementCreation",{content:t,params:e}),_f({content:t.toString(),title:r,extra:{attributes:s,styles:f,classes:["".concat(E.familyPrefix,"-layers-counter")].concat(Vn(i))}})})}}}},Wf={mixout:function(){return{text:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.transform,r=n===void 0?Et:n,a=e.title,i=a===void 0?null:a,o=e.classes,s=o===void 0?[]:o,l=e.attributes,f=l===void 0?{}:l,p=e.styles,m=p===void 0?{}:p;return Wn({type:"text",content:t},function(){return le("beforeDOMElementCreation",{content:t,params:e}),oi({content:t,transform:S(S({},Et),r),title:i,extra:{attributes:f,styles:m,classes:["".concat(E.familyPrefix,"-layers-text")].concat(Vn(s))}})})}}},provides:function(t){t.generateLayersText=function(e,n){var r=n.title,a=n.transform,i=n.extra,o=null,s=null;if(So){var l=parseInt(getComputedStyle(e).fontSize,10),f=e.getBoundingClientRect();o=f.width/l,s=f.height/l}return E.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([e,oi({content:e.innerHTML,width:o,height:s,transform:a,title:r,extra:i,watchable:!0})])}}},$f=new RegExp('"',"ug"),mi=[1105920,1112319];function Gf(t){var e=t.replace($f,""),n=of(e,0),r=n>=mi[0]&&n<=mi[1],a=e.length===2?e[0]===e[1]:!1;return{value:Lo(a?e[0]:e),isSecondary:r||a}}function pi(t,e){var n="".concat(zu).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Oe(t.children),o=i.filter(function(rt){return rt.getAttribute(_r)===e})[0],s=qt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Fu),f=s.getPropertyValue("font-weight"),p=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&p!=="none"&&p!==""){var m=s.getPropertyValue("content"),y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Sn[l[2].toLowerCase()]:Du[f],C=Gf(m),L=C.value,T=C.isSecondary,N=l[0].startsWith("FontAwesome"),b=ua(y,L),j=b;if(N){var z=mf(L);z.iconName&&z.prefix&&(b=z.iconName,y=z.prefix)}if(b&&!T&&(!o||o.getAttribute(aa)!==y||o.getAttribute(ia)!==j)){t.setAttribute(n,j),o&&t.removeChild(o);var D=Tf(),K=D.extra;K.attributes[_r]=e,jr(b,y).then(function(rt){var gt=da(S(S({},D),{},{icons:{main:rt,mask:fa()},prefix:y,iconName:j,extra:K,watchable:!0})),St=X.createElement("svg");e==="::before"?t.insertBefore(St,t.firstChild):t.appendChild(St),St.outerHTML=gt.map(function(lt){return Ke(lt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Xf(t){return Promise.all([pi(t,"::before"),pi(t,"::after")])}function Kf(t){return t.parentNode!==document.head&&!~Lu.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(_r)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function vi(t){if(Vt)return new Promise(function(e,n){var r=Oe(t.querySelectorAll("*")).filter(Kf).map(Xf),a=ma.begin("searchPseudoElements");Go(),Promise.all(r).then(function(){a(),Er(),e()}).catch(function(){a(),Er(),n()})})}var Jf={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=vi,t}}},provides:function(t){t.pseudoElements2svg=function(e){var n=e.node,r=n===void 0?X:n;E.searchPseudoElements&&vi(r)}}},hi=!1,qf={mixout:function(){return{dom:{unwatch:function(){Go(),hi=!0}}}},hooks:function(){return{bootstrap:function(){ui(Cr("mutationObserverCallbacks",{}))},noAuto:function(){zf()},watch:function(t){var e=t.observeMutationsRoot;hi?Er():ui(Cr("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},gi=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(n,r){var a=r.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return n.flipX=!0,n;if(i&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(i){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)},Qf={mixout:function(){return{parse:{transform:function(t){return gi(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-transform");return n&&(t.transform=gi(n)),t}}},provides:function(t){t.generateAbstractTransformGrouping=function(e){var n=e.main,r=e.transform,a=e.containerWidth,i=e.iconWidth,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(s," ").concat(l," ").concat(f)},m={transform:"translate(".concat(i/2*-1," -256)")},y={outer:o,inner:p,path:m};return{tag:"g",attributes:S({},y.outer),children:[{tag:"g",attributes:S({},y.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:S(S({},n.icon.attributes),y.path)}]}]}}}},ir={x:0,y:0,width:"100%",height:"100%"};function bi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Zf(t){return t.tag==="g"?t.children:[t]}var td={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-mask"),r=n?Un(n.split(" ").map(function(a){return a.trim()})):fa();return r.prefix||(r.prefix=Qt()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides:function(t){t.generateAbstractMask=function(e){var n=e.children,r=e.attributes,a=e.main,i=e.mask,o=e.maskId,s=e.transform,l=a.width,f=a.icon,p=i.width,m=i.icon,y=qu({transform:s,containerWidth:p,iconWidth:l}),C={tag:"rect",attributes:S(S({},ir),{},{fill:"white"})},L=f.children?{children:f.children.map(bi)}:{},T={tag:"g",attributes:S({},y.inner),children:[bi(S({tag:f.tag,attributes:S(S({},f.attributes),y.path)},L))]},N={tag:"g",attributes:S({},y.outer),children:[T]},b="mask-".concat(o||Ge()),j="clip-".concat(o||Ge()),z={tag:"mask",attributes:S(S({},ir),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,N]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:j},children:Zf(m)},z]};return n.push(D,{tag:"rect",attributes:S({fill:"currentColor","clip-path":"url(#".concat(j,")"),mask:"url(#".concat(b,")")},ir)}),{children:n,attributes:r}}}},ed={provides:function(t){var e=!1;qt.matchMedia&&(e=qt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:S(S({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=S(S({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:S(S({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||o.children.push({tag:"animate",attributes:S(S({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:S(S({},i),{},{values:"1;0;1;1;0;1;"})}),n.push(o),n.push({tag:"path",attributes:S(S({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:S(S({},i),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:S(S({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:S(S({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},nd={hooks:function(){return{parseNodeAttributes:function(t,e){var n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},rd=[tf,Yf,Hf,Uf,Wf,Jf,qf,Qf,td,ed,nd];hf(rd,{mixoutsTo:vt});vt.noAuto;var Ko=vt.config,ad=vt.library;vt.dom;var An=vt.parse;vt.findIconDefinition;vt.toHtml;var id=vt.icon;vt.layer;var od=vt.text;vt.counter;function yi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function wt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?yi(Object(n),!0).forEach(function(r){ct(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):yi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function jn(t){return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jn(t)}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sd(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ld(t,e){if(t==null)return{};var n=sd(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Nr(t){return cd(t)||ud(t)||fd(t)||dd()}function cd(t){if(Array.isArray(t))return Mr(t)}function ud(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fd(t,e){if(t){if(typeof t=="string")return Mr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(t,e)}}function Mr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Jo={exports:{}};(function(t){(function(e){var n=function(b,j,z){if(!f(j)||m(j)||y(j)||C(j)||l(j))return j;var D,K=0,rt=0;if(p(j))for(D=[],rt=j.length;K<rt;K++)D.push(n(b,j[K],z));else{D={};for(var gt in j)Object.prototype.hasOwnProperty.call(j,gt)&&(D[b(gt,z)]=n(b,j[gt],z))}return D},r=function(b,j){j=j||{};var z=j.separator||"_",D=j.split||/(?=[A-Z])/;return b.split(D).join(z)},a=function(b){return L(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(j,z){return z?z.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var j=a(b);return j.substr(0,1).toUpperCase()+j.substr(1)},o=function(b,j){return r(b,j).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},p=function(b){return s.call(b)=="[object Array]"},m=function(b){return s.call(b)=="[object Date]"},y=function(b){return s.call(b)=="[object RegExp]"},C=function(b){return s.call(b)=="[object Boolean]"},L=function(b){return b=b-0,b===b},T=function(b,j){var z=j&&"process"in j?j.process:j;return typeof z!="function"?b:function(D,K){return z(D,b,K)}},N={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,j){return n(T(a,j),b)},decamelizeKeys:function(b,j){return n(T(o,j),b,j)},pascalizeKeys:function(b,j){return n(T(i,j),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(md)})(Jo);var pd=Jo.exports,vd=["class","style"];function hd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=pd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function gd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function va(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return va(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,f){var p=t.attributes[f];switch(f){case"class":l.class=gd(p);break;case"style":l.style=hd(p);break;default:l.attrs[f]=p}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ld(n,vd);return go(t.tag,wt(wt(wt({},e),{},{class:a.class,style:wt(wt({},a.style),o)},a.attrs),s),r)}var qo=!1;try{qo=!0}catch{}function bd(){if(!qo&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ye(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ct({},t,e):{}}function yd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ct(e,"fa-".concat(t.size),t.size!==null),ct(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ct(e,"fa-pull-".concat(t.pull),t.pull!==null),ct(e,"fa-swap-opacity",t.swapOpacity),ct(e,"fa-bounce",t.bounce),ct(e,"fa-shake",t.shake),ct(e,"fa-beat",t.beat),ct(e,"fa-fade",t.fade),ct(e,"fa-beat-fade",t.beatFade),ct(e,"fa-flash",t.flash),ct(e,"fa-spin-pulse",t.spinPulse),ct(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function wi(t){if(t&&jn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(An.icon)return An.icon(t);if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var wd=Dt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,e){var n=e.attrs,r=ht(function(){return wi(t.icon)}),a=ht(function(){return Ye("classes",yd(t))}),i=ht(function(){return Ye("transform",typeof t.transform=="string"?An.transform(t.transform):t.transform)}),o=ht(function(){return Ye("mask",wi(t.mask))}),s=ht(function(){return id(r.value,wt(wt(wt(wt({},a.value),i.value),o.value),{},{symbol:t.symbol,title:t.title}))});un(s,function(f){if(!f)return bd("Could not find one or more icon(s)",r.value,o.value)},{immediate:!0});var l=ht(function(){return s.value?va(s.value.abstract[0],{},n):null});return function(){return l.value}}});Dt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,e){var n=e.slots,r=Ko.familyPrefix,a=ht(function(){return["".concat(r,"-layers")].concat(Nr(t.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return go("div",{class:a.value},n.default?n.default():[])}}});Dt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,e){var n=e.attrs,r=Ko.familyPrefix,a=ht(function(){return Ye("classes",[].concat(Nr(t.counter?["".concat(r,"-layers-counter")]:[]),Nr(t.position?["".concat(r,"-layers-").concat(t.position)]:[])))}),i=ht(function(){return Ye("transform",typeof t.transform=="string"?An.transform(t.transform):t.transform)}),o=ht(function(){var l=od(t.value.toString(),wt(wt({},i.value),a.value)),f=l.abstract;return t.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),s=ht(function(){return va(o.value,{},n)});return function(){return s.value}}});/*!
* Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2022 Fonticons, Inc.
*/var xd={prefix:"fas",iconName:"file-code",icon:[384,512,[],"f1c9","M224 128L224 0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V160h-127.1C238.3 160 224 145.7 224 128zM154.1 353.8c7.812 7.812 7.812 20.5 0 28.31C150.2 386.1 145.1 388 140 388s-10.23-1.938-14.14-5.844l-48-48c-7.812-7.812-7.812-20.5 0-28.31l48-48c7.812-7.812 20.47-7.812 28.28 0s7.812 20.5 0 28.31L120.3 320L154.1 353.8zM306.1 305.8c7.812 7.812 7.812 20.5 0 28.31l-48 48C254.2 386.1 249.1 388 244 388s-10.23-1.938-14.14-5.844c-7.812-7.812-7.812-20.5 0-28.31L263.7 320l-33.86-33.84c-7.812-7.812-7.812-20.5 0-28.31s20.47-7.812 28.28 0L306.1 305.8zM256 0v128h128L256 0z"]},kd={prefix:"fas",iconName:"graduation-cap",icon:[640,512,[127891,"mortar-board"],"f19d","M623.1 136.9l-282.7-101.2c-13.73-4.91-28.7-4.91-42.43 0L16.05 136.9C6.438 140.4 0 149.6 0 160s6.438 19.65 16.05 23.09L76.07 204.6c-11.89 15.8-20.26 34.16-24.55 53.95C40.05 263.4 32 274.8 32 288c0 9.953 4.814 18.49 11.94 24.36l-24.83 149C17.48 471.1 25 480 34.89 480H93.11c9.887 0 17.41-8.879 15.78-18.63l-24.83-149C91.19 306.5 96 297.1 96 288c0-10.29-5.174-19.03-12.72-24.89c4.252-17.76 12.88-33.82 24.94-47.03l190.6 68.23c13.73 4.91 28.7 4.91 42.43 0l282.7-101.2C633.6 179.6 640 170.4 640 160S633.6 140.4 623.1 136.9zM351.1 314.4C341.7 318.1 330.9 320 320 320c-10.92 0-21.69-1.867-32-5.555L142.8 262.5L128 405.3C128 446.6 213.1 480 320 480c105.1 0 192-33.4 192-74.67l-14.78-142.9L351.1 314.4z"]},_d={prefix:"fas",iconName:"industry",icon:[576,512,[],"f275","M128 32C145.7 32 160 46.33 160 64V215.4L316.6 131C332.6 122.4 352 134 352 152.2V215.4L508.6 131C524.6 122.4 544 134 544 152.2V432C544 458.5 522.5 480 496 480H80C53.49 480 32 458.5 32 432V64C32 46.33 46.33 32 64 32H128z"]};/*!
* Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* Copyright 2022 Fonticons, Inc.
*/var Sd={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Cd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Od={prefix:"fab",iconName:"stack-overflow",icon:[384,512,[],"f16c","M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"]};ad.add(Sd,Cd,Od,kd,_d,xd);xc(ku).component("FontAwesomeIcon",wd).mount("#app");
