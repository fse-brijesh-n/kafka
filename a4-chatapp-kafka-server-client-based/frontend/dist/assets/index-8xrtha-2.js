(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=globalThis,Ut=Ge.ShadowRoot&&(Ge.ShadyCSS===void 0||Ge.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol(),en=new WeakMap;let jn=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ut&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=en.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&en.set(t,e))}return e}toString(){return this.cssText}};const Yi=n=>new jn(typeof n=="string"?n:n+"",void 0,Pt),Ht=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[s+1],n[0]);return new jn(t,n,Pt)},er=(n,e)=>{if(Ut)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),r=Ge.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)}},tn=Ut?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Yi(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:tr,defineProperty:nr,getOwnPropertyDescriptor:ir,getOwnPropertyNames:rr,getOwnPropertySymbols:sr,getPrototypeOf:or}=Object,z=globalThis,nn=z.trustedTypes,ar=nn?nn.emptyScript:"",ct=z.reactiveElementPolyfillSupport,Se=(n,e)=>n,Ke={toAttribute(n,e){switch(e){case Boolean:n=n?ar:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Lt=(n,e)=>!tr(n,e),rn={attribute:!0,type:String,converter:Ke,reflect:!1,useDefault:!1,hasChanged:Lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),z.litPropertyMetadata??(z.litPropertyMetadata=new WeakMap);let ue=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=rn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(e,i,t);r!==void 0&&nr(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){const{get:r,set:s}=ir(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:r,set(o){const h=r==null?void 0:r.call(this);s==null||s.call(this,o),this.requestUpdate(e,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??rn}static _$Ei(){if(this.hasOwnProperty(Se("elementProperties")))return;const e=or(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Se("properties"))){const t=this.properties,i=[...rr(t),...sr(t)];for(const r of i)this.createProperty(r,t[r])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,r]of t)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const r=this._$Eu(t,i);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(tn(r))}else e!==void 0&&t.push(tn(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return er(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var s;const i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)==null?void 0:s.toAttribute)!==void 0?i.converter:Ke).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(e,t){var s,o;const i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){const h=i.getPropertyOptions(r),u=typeof h.converter=="function"?{fromAttribute:h.converter}:((s=h.converter)==null?void 0:s.fromAttribute)!==void 0?h.converter:Ke;this._$Em=r;const m=u.fromAttribute(t,h.type);this[r]=m??((o=this._$Ej)==null?void 0:o.get(r))??m,this._$Em=null}}requestUpdate(e,t,i,r=!1,s){var o;if(e!==void 0){const h=this.constructor;if(r===!1&&(s=this[e]),i??(i=h.getPropertyOptions(e)),!((i.hasChanged??Lt)(s,t)||i.useDefault&&i.reflect&&s===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(h._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:r,wrapped:s},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,o??t??this[e]),s!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r){const{wrapped:h}=o,u=this[s];h!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,o,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(r=>{var s;return(s=r.hostUpdate)==null?void 0:s.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};ue.elementStyles=[],ue.shadowRootOptions={mode:"open"},ue[Se("elementProperties")]=new Map,ue[Se("finalized")]=new Map,ct==null||ct({ReactiveElement:ue}),(z.reactiveElementVersions??(z.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $e=globalThis,sn=n=>n,Qe=$e.trustedTypes,on=Qe?Qe.createPolicy("lit-html",{createHTML:n=>n}):void 0,Dn="$lit$",q=`lit$${Math.random().toFixed(9).slice(2)}$`,Wn="?"+q,cr=`<${Wn}>`,ie=document,Ce=()=>ie.createComment(""),ke=n=>n===null||typeof n!="object"&&typeof n!="function",jt=Array.isArray,hr=n=>jt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ht=`[ 	
\f\r]`,ye=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,an=/-->/g,cn=/>/g,Q=RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hn=/'/g,ln=/"/g,Bn=/^(?:script|style|textarea|title)$/i,lr=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),ee=lr(1),de=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),un=new WeakMap,Y=ie.createTreeWalker(ie,129);function Mn(n,e){if(!jt(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return on!==void 0?on.createHTML(e):e}const ur=(n,e)=>{const t=n.length-1,i=[];let r,s=e===2?"<svg>":e===3?"<math>":"",o=ye;for(let h=0;h<t;h++){const u=n[h];let m,y,d=-1,b=0;for(;b<u.length&&(o.lastIndex=b,y=o.exec(u),y!==null);)b=o.lastIndex,o===ye?y[1]==="!--"?o=an:y[1]!==void 0?o=cn:y[2]!==void 0?(Bn.test(y[2])&&(r=RegExp("</"+y[2],"g")),o=Q):y[3]!==void 0&&(o=Q):o===Q?y[0]===">"?(o=r??ye,d=-1):y[1]===void 0?d=-2:(d=o.lastIndex-y[2].length,m=y[1],o=y[3]===void 0?Q:y[3]==='"'?ln:hn):o===ln||o===hn?o=Q:o===an||o===cn?o=ye:(o=Q,r=void 0);const S=o===Q&&n[h+1].startsWith("/>")?" ":"";s+=o===ye?u+cr:d>=0?(i.push(m),u.slice(0,d)+Dn+u.slice(d)+q+S):u+q+(d===-2?h:S)}return[Mn(n,s+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class Ae{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,o=0;const h=e.length-1,u=this.parts,[m,y]=ur(e,t);if(this.el=Ae.createElement(m,i),Y.currentNode=this.el.content,t===2||t===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Y.nextNode())!==null&&u.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(Dn)){const b=y[o++],S=r.getAttribute(d).split(q),E=/([.?@])?(.*)/.exec(b);u.push({type:1,index:s,name:E[2],strings:S,ctor:E[1]==="."?pr:E[1]==="?"?fr:E[1]==="@"?mr:et}),r.removeAttribute(d)}else d.startsWith(q)&&(u.push({type:6,index:s}),r.removeAttribute(d));if(Bn.test(r.tagName)){const d=r.textContent.split(q),b=d.length-1;if(b>0){r.textContent=Qe?Qe.emptyScript:"";for(let S=0;S<b;S++)r.append(d[S],Ce()),Y.nextNode(),u.push({type:2,index:++s});r.append(d[b],Ce())}}}else if(r.nodeType===8)if(r.data===Wn)u.push({type:2,index:s});else{let d=-1;for(;(d=r.data.indexOf(q,d+1))!==-1;)u.push({type:7,index:s}),d+=q.length-1}s++}}static createElement(e,t){const i=ie.createElement("template");return i.innerHTML=e,i}}function pe(n,e,t=n,i){var o,h;if(e===de)return e;let r=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const s=ke(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==s&&((h=r==null?void 0:r._$AO)==null||h.call(r,!1),s===void 0?r=void 0:(r=new s(n),r._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=r:t._$Cl=r),r!==void 0&&(e=pe(n,r._$AS(n,e.values),r,i)),e}class dr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,r=((e==null?void 0:e.creationScope)??ie).importNode(t,!0);Y.currentNode=r;let s=Y.nextNode(),o=0,h=0,u=i[0];for(;u!==void 0;){if(o===u.index){let m;u.type===2?m=new Re(s,s.nextSibling,this,e):u.type===1?m=new u.ctor(s,u.name,u.strings,this,e):u.type===6&&(m=new gr(s,this,e)),this._$AV.push(m),u=i[++h]}o!==(u==null?void 0:u.index)&&(s=Y.nextNode(),o++)}return Y.currentNode=ie,r}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Re{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=pe(this,e,t),ke(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==de&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):hr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&ke(this._$AH)?this._$AA.nextSibling.data=e:this.T(ie.createTextNode(e)),this._$AH=e}$(e){var s;const{values:t,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Ae.createElement(Mn(i.h,i.h[0]),this.options)),i);if(((s=this._$AH)==null?void 0:s._$AD)===r)this._$AH.p(t);else{const o=new dr(r,this),h=o.u(this.options);o.p(t),this.T(h),this._$AH=o}}_$AC(e){let t=un.get(e.strings);return t===void 0&&un.set(e.strings,t=new Ae(e)),t}k(e){jt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new Re(this.O(Ce()),this.O(Ce()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const r=sn(e).nextSibling;sn(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,r,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}_$AI(e,t=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=pe(this,e,t,0),o=!ke(e)||e!==this._$AH&&e!==de,o&&(this._$AH=e);else{const h=e;let u,m;for(e=s[0],u=0;u<s.length-1;u++)m=pe(this,h[i+u],t,u),m===de&&(m=this._$AH[u]),o||(o=!ke(m)||m!==this._$AH[u]),m===x?e=x:e!==x&&(e+=(m??"")+s[u+1]),this._$AH[u]=m}o&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class pr extends et{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}}class fr extends et{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}}class mr extends et{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){if((e=pe(this,e,t,0)??x)===de)return;const i=this._$AH,r=e===x&&i!==x||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==x&&(i===x||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class gr{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){pe(this,e)}}const lt=$e.litHtmlPolyfillSupport;lt==null||lt(Ae,Re),($e.litHtmlVersions??($e.litHtmlVersions=[])).push("3.3.3");const br=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let r=i._$litPart$;if(r===void 0){const s=(t==null?void 0:t.renderBefore)??null;i._$litPart$=r=new Re(e.insertBefore(Ce(),s),s,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=globalThis;class ne extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=br(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return de}}var Ln;ne._$litElement$=!0,ne.finalized=!0,(Ln=te.litElementHydrateSupport)==null||Ln.call(te,{LitElement:ne});const ut=te.litElementPolyfillSupport;ut==null||ut({LitElement:ne});(te.litElementVersions??(te.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr={attribute:!0,type:String,converter:Ke,reflect:!1,hasChanged:Lt},yr=(n=vr,e,t)=>{const{kind:i,metadata:r}=t;let s=globalThis.litPropertyMetadata.get(r);if(s===void 0&&globalThis.litPropertyMetadata.set(r,s=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),s.set(t.name,n),i==="accessor"){const{name:o}=t;return{set(h){const u=e.get.call(this);e.set.call(this,h),this.requestUpdate(o,u,n,!0,h)},init(h){return h!==void 0&&this.C(o,void 0,n,h),h}}}if(i==="setter"){const{name:o}=t;return function(h){const u=this[o];e.call(this,h),this.requestUpdate(o,u,n,!0,h)}}throw Error("Unsupported decorator location: "+i)};function Fn(n){return(e,t)=>typeof t=="object"?yr(n,e,t):((i,r,s)=>{const o=r.hasOwnProperty(s);return r.constructor.createProperty(s,i),o?Object.getOwnPropertyDescriptor(r,s):void 0})(n,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(n){return Fn({...n,state:!0,attribute:!1})}var _r=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,fe=(n,e,t,i)=>{for(var r=i>1?void 0:i?wr(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&_r(e,t,r),r};let X=class extends ne{constructor(){super(...arguments),this.username="",this.password="",this.error="",this.status="",this.loading=!1,this.handleUsernameInput=n=>{this.username=n.target.value},this.handlePasswordInput=n=>{this.password=n.target.value}}async handleLogin(n){n.preventDefault(),await this.submitCredentials("/api/auth/login",!1)}async handleSignup(){await this.submitCredentials("/api/auth/signup",!0)}async submitCredentials(n,e){if(this.error="",this.status="",!this.username.trim()||!this.password.trim()){this.error="Enter both username and password.";return}this.loading=!0;try{const t=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.username.trim(),password:this.password})});if(!t.ok){const r=await t.text();throw new Error(r||(e?"Signup failed":"Login failed"))}if(e){this.status="Signup complete. You can log in now.";return}const i=await t.json();this.dispatchEvent(new CustomEvent("login",{detail:{token:i.token},bubbles:!0,composed:!0}))}catch(t){this.error=t instanceof Error?t.message:"Request failed"}finally{this.loading=!1}}render(){return ee`
      <div class="grid">
        <section class="card">
          <h2>Access the chat</h2>
          <p>
            Create a user account, log in, and the app will open a JWT-secured WebSocket connection to the backend.
          </p>

          <form @submit=${this.handleLogin}>
            <label>
              Username
              <input
                id="username"
                name="username"
                .value=${this.username}
                autocomplete="username"
                @input=${this.handleUsernameInput}
              />
            </label>

            <label>
              Password
              <input
                id="password"
                name="password"
                type="password"
                .value=${this.password}
                autocomplete="current-password"
                @input=${this.handlePasswordInput}
              />
            </label>

            <div class="actions">
              <button class="primary" type="submit" ?disabled=${this.loading}>${this.loading?"Working...":"Log In"}</button>
              <button class="secondary" type="button" @click=${this.handleSignup} ?disabled=${this.loading}>Sign Up</button>
            </div>

            <div class="message ${this.error?"error":""}">${this.error||this.status}</div>
          </form>
        </section>

        <aside class="card">
          <h2>Flow</h2>
          <div class="feature-list">
            <div class="feature">REST login returns a JWT.</div>
            <div class="feature">STOMP CONNECT sends the token in the Authorization header.</div>
            <div class="feature">Messages go to Kafka before broadcast to the room topic.</div>
          </div>
        </aside>
      </div>
    `}};X.styles=Ht`
    :host {
      display: block;
      padding: 28px;
    }

    .grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 24px;
    }

    .card {
      border-radius: 22px;
      border: 1px solid rgba(148, 163, 184, 0.14);
      background: linear-gradient(180deg, rgba(15, 23, 42, 0.88), rgba(9, 15, 29, 0.96));
      padding: 28px;
    }

    h2 {
      margin: 0 0 10px;
      font-size: 1.6rem;
    }

    p {
      margin: 0;
      color: #9bb0cf;
      line-height: 1.6;
    }

    form {
      display: grid;
      gap: 14px;
      margin-top: 20px;
    }

    label {
      display: grid;
      gap: 8px;
      font-size: 0.94rem;
      color: #dbe7fb;
    }

    input {
      border: 1px solid rgba(148, 163, 184, 0.16);
      border-radius: 14px;
      background: rgba(2, 6, 23, 0.7);
      color: #eef4ff;
      padding: 14px 16px;
      font-size: 1rem;
      outline: none;
    }

    input:focus {
      border-color: rgba(96, 165, 250, 0.8);
      box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 4px;
    }

    button {
      border: 0;
      border-radius: 999px;
      padding: 12px 18px;
      font-weight: 700;
      cursor: pointer;
    }

    button.primary {
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      color: white;
    }

    button.secondary {
      background: rgba(148, 163, 184, 0.12);
      color: #e5eefc;
      border: 1px solid rgba(148, 163, 184, 0.16);
    }

    .message {
      min-height: 1.4em;
      margin-top: 12px;
      color: #93c5fd;
    }

    .message.error {
      color: #fca5a5;
    }

    .feature-list {
      display: grid;
      gap: 12px;
      margin-top: 20px;
    }

    .feature {
      padding: 14px 16px;
      border-radius: 16px;
      background: rgba(15, 23, 42, 0.65);
      border: 1px solid rgba(148, 163, 184, 0.14);
      color: #c6d5ee;
    }

    @media (max-width: 900px) {
      .grid {
        grid-template-columns: 1fr;
      }
    }
  `;fe([U()],X.prototype,"username",2);fe([U()],X.prototype,"password",2);fe([U()],X.prototype,"error",2);fe([U()],X.prototype,"status",2);fe([U()],X.prototype,"loading",2);X=fe([Dt("login-page")],X);var p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sr(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var St={exports:{}};(function(n,e){(function(t,i){i(e)})(p,function(t){function i(v,a){v.terminate=function(){const c=()=>{};this.onerror=c,this.onmessage=c,this.onopen=c;const l=new Date,f=Math.random().toString().substring(2,8),g=this.onclose;this.onclose=k=>{const $=new Date().getTime()-l.getTime();a(`Discarded socket (#${f})  closed after ${$}ms, with code/reason: ${k.code}/${k.reason}`)},this.close(),g==null||g.call(v,{code:4001,reason:`Quick discarding socket (#${f}) without waiting for the shutdown sequence.`,wasClean:!1})}}const r={LF:`
`,NULL:"\0"};class s{get body(){return!this._body&&this.isBinaryBody&&(this._body=new TextDecoder().decode(this._binaryBody)),this._body||""}get binaryBody(){return!this._binaryBody&&!this.isBinaryBody&&(this._binaryBody=new TextEncoder().encode(this._body)),this._binaryBody}constructor(a){const{command:c,headers:l,body:f,binaryBody:g,escapeHeaderValues:k,skipContentLengthHeader:$}=a;this.command=c,this.headers=Object.assign({},l||{}),g?(this._binaryBody=g,this.isBinaryBody=!0):(this._body=f||"",this.isBinaryBody=!1),this.escapeHeaderValues=k||!1,this.skipContentLengthHeader=$||!1}static fromRawFrame(a,c){const l={},f=g=>g.replace(/^\s+|\s+$/g,"");for(const g of a.headers.reverse()){g.indexOf(":");const k=f(g[0]);let $=f(g[1]);c&&a.command!=="CONNECT"&&a.command!=="CONNECTED"&&($=s.hdrValueUnEscape($)),l[k]=$}return new s({command:a.command,headers:l,binaryBody:a.binaryBody,escapeHeaderValues:c})}toString(){return this.serializeCmdAndHeaders()}serialize(){const a=this.serializeCmdAndHeaders();return this.isBinaryBody?s.toUnit8Array(a,this._binaryBody).buffer:a+this._body+r.NULL}serializeCmdAndHeaders(){const a=[this.command];this.skipContentLengthHeader&&delete this.headers["content-length"];for(const c of Object.keys(this.headers||{})){const l=this.headers[c];this.escapeHeaderValues&&this.command!=="CONNECT"&&this.command!=="CONNECTED"?a.push(`${c}:${s.hdrValueEscape(`${l}`)}`):a.push(`${c}:${l}`)}return(this.isBinaryBody||!this.isBodyEmpty()&&!this.skipContentLengthHeader)&&a.push(`content-length:${this.bodyLength()}`),a.join(r.LF)+r.LF+r.LF}isBodyEmpty(){return this.bodyLength()===0}bodyLength(){const a=this.binaryBody;return a?a.length:0}static sizeOfUTF8(a){return a?new TextEncoder().encode(a).length:0}static toUnit8Array(a,c){const l=new TextEncoder().encode(a),f=new Uint8Array([0]),g=new Uint8Array(l.length+c.length+f.length);return g.set(l),g.set(c,l.length),g.set(f,l.length+c.length),g}static marshall(a){return new s(a).serialize()}static hdrValueEscape(a){return a.replace(/\\/g,"\\\\").replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/:/g,"\\c")}static hdrValueUnEscape(a){return a.replace(/\\r/g,"\r").replace(/\\n/g,`
`).replace(/\\c/g,":").replace(/\\\\/g,"\\")}}const o=0,h=10,u=13,m=58;class y{constructor(a,c){this.onFrame=a,this.onIncomingPing=c,this._encoder=new TextEncoder,this._decoder=new TextDecoder,this._token=[],this._initState()}parseChunk(a,c=!1){let l;if(typeof a=="string"?l=this._encoder.encode(a):l=new Uint8Array(a),c&&l[l.length-1]!==0){const f=new Uint8Array(l.length+1);f.set(l,0),f[l.length]=0,l=f}for(let f=0;f<l.length;f++){const g=l[f];this._onByte(g)}}_collectFrame(a){if(a!==o&&a!==u){if(a===h){this.onIncomingPing();return}this._onByte=this._collectCommand,this._reinjectByte(a)}}_collectCommand(a){if(a!==u){if(a===h){this._results.command=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaders;return}this._consumeByte(a)}}_collectHeaders(a){if(a!==u){if(a===h){this._setupCollectBody();return}this._onByte=this._collectHeaderKey,this._reinjectByte(a)}}_reinjectByte(a){this._onByte(a)}_collectHeaderKey(a){if(a===m){this._headerKey=this._consumeTokenAsUTF8(),this._onByte=this._collectHeaderValue;return}this._consumeByte(a)}_collectHeaderValue(a){if(a!==u){if(a===h){this._results.headers.push([this._headerKey,this._consumeTokenAsUTF8()]),this._headerKey=void 0,this._onByte=this._collectHeaders;return}this._consumeByte(a)}}_setupCollectBody(){const a=this._results.headers.filter(c=>c[0]==="content-length")[0];a?(this._bodyBytesRemaining=parseInt(a[1],10),this._onByte=this._collectBodyFixedSize):this._onByte=this._collectBodyNullTerminated}_collectBodyNullTerminated(a){if(a===o){this._retrievedBody();return}this._consumeByte(a)}_collectBodyFixedSize(a){if(this._bodyBytesRemaining--===0){this._retrievedBody();return}this._consumeByte(a)}_retrievedBody(){this._results.binaryBody=this._consumeTokenAsRaw();try{this.onFrame(this._results)}catch(a){console.log("Ignoring an exception thrown by a frame handler. Original exception: ",a)}this._initState()}_consumeByte(a){this._token.push(a)}_consumeTokenAsUTF8(){return this._decoder.decode(this._consumeTokenAsRaw())}_consumeTokenAsRaw(){const a=new Uint8Array(this._token);return this._token=[],a}_initState(){this._results={command:void 0,headers:[],binaryBody:void 0},this._token=[],this._headerKey=void 0,this._onByte=this._collectFrame}}t.StompSocketState=void 0,function(v){v[v.CONNECTING=0]="CONNECTING",v[v.OPEN=1]="OPEN",v[v.CLOSING=2]="CLOSING",v[v.CLOSED=3]="CLOSED"}(t.StompSocketState||(t.StompSocketState={})),t.ActivationState=void 0,function(v){v[v.ACTIVE=0]="ACTIVE",v[v.DEACTIVATING=1]="DEACTIVATING",v[v.INACTIVE=2]="INACTIVE"}(t.ActivationState||(t.ActivationState={})),t.ReconnectionTimeMode=void 0,function(v){v[v.LINEAR=0]="LINEAR",v[v.EXPONENTIAL=1]="EXPONENTIAL"}(t.ReconnectionTimeMode||(t.ReconnectionTimeMode={})),t.TickerStrategy=void 0,function(v){v.Interval="interval",v.Worker="worker"}(t.TickerStrategy||(t.TickerStrategy={}));class d{constructor(a,c=t.TickerStrategy.Interval,l){this._interval=a,this._strategy=c,this._debug=l,this._workerScript=`
    var startTime = Date.now();
    setInterval(function() {
        self.postMessage(Date.now() - startTime);
    }, ${this._interval});
  `}start(a){this.stop(),this.shouldUseWorker()?this.runWorker(a):this.runInterval(a)}stop(){this.disposeWorker(),this.disposeInterval()}shouldUseWorker(){return typeof Worker<"u"&&this._strategy===t.TickerStrategy.Worker}runWorker(a){this._debug("Using runWorker for outgoing pings"),this._worker||(this._worker=new Worker(URL.createObjectURL(new Blob([this._workerScript],{type:"text/javascript"}))),this._worker.onmessage=c=>a(c.data))}runInterval(a){if(this._debug("Using runInterval for outgoing pings"),!this._timer){const c=Date.now();this._timer=setInterval(()=>{a(Date.now()-c)},this._interval)}}disposeWorker(){this._worker&&(this._worker.terminate(),delete this._worker,this._debug("Outgoing ping disposeWorker"))}disposeInterval(){this._timer&&(clearInterval(this._timer),delete this._timer,this._debug("Outgoing ping disposeInterval"))}}class b{constructor(a){this.versions=a}supportedVersions(){return this.versions.join(",")}protocolVersions(){return this.versions.map(a=>`v${a.replace(".","")}.stomp`)}}b.V1_0="1.0",b.V1_1="1.1",b.V1_2="1.2",b.default=new b([b.V1_2,b.V1_1,b.V1_0]);class S{get connectedVersion(){return this._connectedVersion}get connected(){return this._connected}constructor(a,c,l){this._client=a,this._webSocket=c,this._connected=!1,this._serverFrameHandlers={CONNECTED:f=>{this.debug(`connected to server ${f.headers.server}`),this._connected=!0,this._connectedVersion=f.headers.version,this._connectedVersion===b.V1_2&&(this._escapeHeaderValues=!0),this._setupHeartbeat(f.headers),this.onConnect(f)},MESSAGE:f=>{const g=f.headers.subscription,k=this._subscriptions[g]||this.onUnhandledMessage,$=f,R=this,P=this._connectedVersion===b.V1_2?$.headers.ack:$.headers["message-id"];$.ack=(le={})=>R.ack(P,g,le),$.nack=(le={})=>R.nack(P,g,le),k($)},RECEIPT:f=>{const g=this._receiptWatchers[f.headers["receipt-id"]];g?(g(f),delete this._receiptWatchers[f.headers["receipt-id"]]):this.onUnhandledReceipt(f)},ERROR:f=>{this.onStompError(f)}},this._counter=0,this._subscriptions={},this._receiptWatchers={},this._partialData="",this._escapeHeaderValues=!1,this._lastServerActivityTS=Date.now(),this.debug=l.debug,this.stompVersions=l.stompVersions,this.connectHeaders=l.connectHeaders,this.disconnectHeaders=l.disconnectHeaders,this.heartbeatIncoming=l.heartbeatIncoming,this.heartbeatToleranceMultiplier=l.heartbeatGracePeriods,this.heartbeatOutgoing=l.heartbeatOutgoing,this.splitLargeFrames=l.splitLargeFrames,this.maxWebSocketChunkSize=l.maxWebSocketChunkSize,this.forceBinaryWSFrames=l.forceBinaryWSFrames,this.logRawCommunication=l.logRawCommunication,this.appendMissingNULLonIncoming=l.appendMissingNULLonIncoming,this.discardWebsocketOnCommFailure=l.discardWebsocketOnCommFailure,this.onConnect=l.onConnect,this.onDisconnect=l.onDisconnect,this.onStompError=l.onStompError,this.onWebSocketClose=l.onWebSocketClose,this.onWebSocketError=l.onWebSocketError,this.onUnhandledMessage=l.onUnhandledMessage,this.onUnhandledReceipt=l.onUnhandledReceipt,this.onUnhandledFrame=l.onUnhandledFrame,this.onHeartbeatReceived=l.onHeartbeatReceived,this.onHeartbeatLost=l.onHeartbeatLost}start(){const a=new y(l=>{const f=s.fromRawFrame(l,this._escapeHeaderValues);this.logRawCommunication||this.debug(`<<< ${f}`),(this._serverFrameHandlers[f.command]||this.onUnhandledFrame)(f)},()=>{this.debug("<<< PONG"),this.onHeartbeatReceived()});this._webSocket.onmessage=l=>{if(this.debug("Received data"),this._lastServerActivityTS=Date.now(),this.logRawCommunication){const f=l.data instanceof ArrayBuffer?new TextDecoder().decode(l.data):l.data;this.debug(`<<< ${f}`)}a.parseChunk(l.data,this.appendMissingNULLonIncoming)},this._webSocket.onclose=l=>{this.debug(`Connection closed to ${this._webSocket.url}`),this._cleanUp(),this.onWebSocketClose(l)},this._webSocket.onerror=l=>{this.onWebSocketError(l)};const c=()=>{const l=Object.assign({},this.connectHeaders);this.debug("Web Socket Opened..."),l["accept-version"]=this.stompVersions.supportedVersions(),l["heart-beat"]=[this.heartbeatOutgoing,this.heartbeatIncoming].join(","),this._transmit({command:"CONNECT",headers:l})};this._webSocket.readyState===t.StompSocketState.OPEN?c():this._webSocket.onopen=c}_setupHeartbeat(a){if(a.version!==b.V1_1&&a.version!==b.V1_2||!a["heart-beat"])return;const[c,l]=a["heart-beat"].split(",").map(f=>parseInt(f,10));if(this.heartbeatOutgoing!==0&&l!==0){const f=Math.max(this.heartbeatOutgoing,l);this.debug(`send PING every ${f}ms`),this._pinger=new d(f,this._client.heartbeatStrategy,this.debug),this._pinger.start(()=>{this._webSocket.readyState===t.StompSocketState.OPEN&&(this._webSocket.send(r.LF),this.debug(">>> PING"))})}if(this.heartbeatIncoming!==0&&c!==0){const f=Math.max(this.heartbeatIncoming,c);this.debug(`check PONG every ${f}ms`),this._ponger=setInterval(()=>{const g=Date.now()-this._lastServerActivityTS;g>f*this.heartbeatToleranceMultiplier&&(this.debug(`did not receive server activity for the last ${g}ms`),this.onHeartbeatLost(),this._closeOrDiscardWebsocket())},f)}}_closeOrDiscardWebsocket(){this.discardWebsocketOnCommFailure?(this.debug("Discarding websocket, the underlying socket may linger for a while"),this.discardWebsocket()):(this.debug("Issuing close on the websocket"),this._closeWebsocket())}forceDisconnect(){this._webSocket&&(this._webSocket.readyState===t.StompSocketState.CONNECTING||this._webSocket.readyState===t.StompSocketState.OPEN)&&this._closeOrDiscardWebsocket()}_closeWebsocket(){this._webSocket.onmessage=()=>{},this._webSocket.close()}discardWebsocket(){typeof this._webSocket.terminate!="function"&&i(this._webSocket,a=>this.debug(a)),this._webSocket.terminate()}_transmit(a){const{command:c,headers:l,body:f,binaryBody:g,skipContentLengthHeader:k}=a,$=new s({command:c,headers:l,body:f,binaryBody:g,escapeHeaderValues:this._escapeHeaderValues,skipContentLengthHeader:k});let R=$.serialize();if(this.logRawCommunication?this.debug(`>>> ${R}`):this.debug(`>>> ${$}`),this.forceBinaryWSFrames&&typeof R=="string"&&(R=new TextEncoder().encode(R)),typeof R!="string"||!this.splitLargeFrames)this._webSocket.send(R);else{let P=R;for(;P.length>0;){const le=P.substring(0,this.maxWebSocketChunkSize);P=P.substring(this.maxWebSocketChunkSize),this._webSocket.send(le),this.debug(`chunk sent = ${le.length}, remaining = ${P.length}`)}}}dispose(){if(this.connected)try{const a=Object.assign({},this.disconnectHeaders);a.receipt||(a.receipt=`close-${this._counter++}`),this.watchForReceipt(a.receipt,c=>{this._closeWebsocket(),this._cleanUp(),this.onDisconnect(c)}),this._transmit({command:"DISCONNECT",headers:a})}catch(a){this.debug(`Ignoring error during disconnect ${a}`)}else(this._webSocket.readyState===t.StompSocketState.CONNECTING||this._webSocket.readyState===t.StompSocketState.OPEN)&&this._closeWebsocket()}_cleanUp(){this._connected=!1,this._pinger&&(this._pinger.stop(),this._pinger=void 0),this._ponger&&(clearInterval(this._ponger),this._ponger=void 0)}publish(a){const{destination:c,headers:l,body:f,binaryBody:g,skipContentLengthHeader:k}=a,$=Object.assign({destination:c},l);this._transmit({command:"SEND",headers:$,body:f,binaryBody:g,skipContentLengthHeader:k})}watchForReceipt(a,c){this._receiptWatchers[a]=c}subscribe(a,c,l={}){l=Object.assign({},l),l.id||(l.id=`sub-${this._counter++}`),l.destination=a,this._subscriptions[l.id]=c,this._transmit({command:"SUBSCRIBE",headers:l});const f=this;return{id:l.id,unsubscribe(g){return f.unsubscribe(l.id,g)}}}unsubscribe(a,c={}){c=Object.assign({},c),delete this._subscriptions[a],c.id=a,this._transmit({command:"UNSUBSCRIBE",headers:c})}begin(a){const c=a||`tx-${this._counter++}`;this._transmit({command:"BEGIN",headers:{transaction:c}});const l=this;return{id:c,commit(){l.commit(c)},abort(){l.abort(c)}}}commit(a){this._transmit({command:"COMMIT",headers:{transaction:a}})}abort(a){this._transmit({command:"ABORT",headers:{transaction:a}})}ack(a,c,l={}){l=Object.assign({},l),this._connectedVersion===b.V1_2?l.id=a:l["message-id"]=a,l.subscription=c,this._transmit({command:"ACK",headers:l})}nack(a,c,l={}){return l=Object.assign({},l),this._connectedVersion===b.V1_2?l.id=a:l["message-id"]=a,l.subscription=c,this._transmit({command:"NACK",headers:l})}}class E{get webSocket(){var a;return(a=this._stompHandler)==null?void 0:a._webSocket}get disconnectHeaders(){return this._disconnectHeaders}set disconnectHeaders(a){this._disconnectHeaders=a,this._stompHandler&&(this._stompHandler.disconnectHeaders=this._disconnectHeaders)}get connected(){return!!this._stompHandler&&this._stompHandler.connected}get connectedVersion(){return this._stompHandler?this._stompHandler.connectedVersion:void 0}get active(){return this.state===t.ActivationState.ACTIVE}_changeState(a){this.state=a,this.onChangeState(a)}constructor(a={}){this.stompVersions=b.default,this.connectionTimeout=0,this.reconnectDelay=5e3,this._nextReconnectDelay=0,this.maxReconnectDelay=15*60*1e3,this.reconnectTimeMode=t.ReconnectionTimeMode.LINEAR,this.heartbeatIncoming=1e4,this.heartbeatToleranceMultiplier=2,this.heartbeatOutgoing=1e4,this.heartbeatStrategy=t.TickerStrategy.Interval,this.splitLargeFrames=!1,this.maxWebSocketChunkSize=8*1024,this.forceBinaryWSFrames=!1,this.appendMissingNULLonIncoming=!1,this.discardWebsocketOnCommFailure=!1,this.state=t.ActivationState.INACTIVE;const c=()=>{};this.debug=c,this.beforeConnect=c,this.onConnect=c,this.onDisconnect=c,this.onUnhandledMessage=c,this.onUnhandledReceipt=c,this.onUnhandledFrame=c,this.onHeartbeatReceived=c,this.onHeartbeatLost=c,this.onStompError=c,this.onWebSocketClose=c,this.onWebSocketError=c,this.logRawCommunication=!1,this.onChangeState=c,this.connectHeaders={},this._disconnectHeaders={},this.configure(a)}configure(a){Object.assign(this,a),this.maxReconnectDelay>0&&this.maxReconnectDelay<this.reconnectDelay&&(this.debug(`Warning: maxReconnectDelay (${this.maxReconnectDelay}ms) is less than reconnectDelay (${this.reconnectDelay}ms). Using reconnectDelay as the maxReconnectDelay delay.`),this.maxReconnectDelay=this.reconnectDelay)}activate(){const a=()=>{if(this.active){this.debug("Already ACTIVE, ignoring request to activate");return}this._changeState(t.ActivationState.ACTIVE),this._nextReconnectDelay=this.reconnectDelay,this._connect()};this.state===t.ActivationState.DEACTIVATING?(this.debug("Waiting for deactivation to finish before activating"),this.deactivate().then(()=>{a()})):a()}async _connect(){if(await this.beforeConnect(this),this._stompHandler){this.debug("There is already a stompHandler, skipping the call to connect");return}if(!this.active){this.debug("Client has been marked inactive, will not attempt to connect");return}this.connectionTimeout>0&&(this._connectionWatcher&&clearTimeout(this._connectionWatcher),this._connectionWatcher=setTimeout(()=>{this.connected||(this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`),this.forceDisconnect())},this.connectionTimeout)),this.debug("Opening Web Socket...");const a=this._createWebSocket();this._stompHandler=new S(this,a,{debug:this.debug,stompVersions:this.stompVersions,connectHeaders:this.connectHeaders,disconnectHeaders:this._disconnectHeaders,heartbeatIncoming:this.heartbeatIncoming,heartbeatGracePeriods:this.heartbeatToleranceMultiplier,heartbeatOutgoing:this.heartbeatOutgoing,heartbeatStrategy:this.heartbeatStrategy,splitLargeFrames:this.splitLargeFrames,maxWebSocketChunkSize:this.maxWebSocketChunkSize,forceBinaryWSFrames:this.forceBinaryWSFrames,logRawCommunication:this.logRawCommunication,appendMissingNULLonIncoming:this.appendMissingNULLonIncoming,discardWebsocketOnCommFailure:this.discardWebsocketOnCommFailure,onConnect:c=>{if(this._connectionWatcher&&(clearTimeout(this._connectionWatcher),this._connectionWatcher=void 0),this._nextReconnectDelay=this.reconnectDelay,!this.active){this.debug("STOMP got connected while deactivate was issued, will disconnect now"),this._disposeStompHandler();return}this.onConnect(c)},onDisconnect:c=>{this.onDisconnect(c)},onStompError:c=>{this.onStompError(c)},onWebSocketClose:c=>{this._stompHandler=void 0,this.state===t.ActivationState.DEACTIVATING&&this._changeState(t.ActivationState.INACTIVE),this.onWebSocketClose(c),this.active&&this._schedule_reconnect()},onWebSocketError:c=>{this.onWebSocketError(c)},onUnhandledMessage:c=>{this.onUnhandledMessage(c)},onUnhandledReceipt:c=>{this.onUnhandledReceipt(c)},onUnhandledFrame:c=>{this.onUnhandledFrame(c)},onHeartbeatReceived:()=>{this.onHeartbeatReceived()},onHeartbeatLost:()=>{this.onHeartbeatLost()}}),this._stompHandler.start()}_createWebSocket(){let a;if(this.webSocketFactory)a=this.webSocketFactory();else if(this.brokerURL)a=new WebSocket(this.brokerURL,this.stompVersions.protocolVersions());else throw new Error("Either brokerURL or webSocketFactory must be provided");return a.binaryType="arraybuffer",a}_schedule_reconnect(){this._nextReconnectDelay>0&&(this.debug(`STOMP: scheduling reconnection in ${this._nextReconnectDelay}ms`),this._reconnector=setTimeout(()=>{this.reconnectTimeMode===t.ReconnectionTimeMode.EXPONENTIAL&&(this._nextReconnectDelay=this._nextReconnectDelay*2,this.maxReconnectDelay!==0&&(this._nextReconnectDelay=Math.min(this._nextReconnectDelay,this.maxReconnectDelay))),this._connect()},this._nextReconnectDelay))}async deactivate(a={}){var g;const c=a.force||!1,l=this.active;let f;if(this.state===t.ActivationState.INACTIVE)return this.debug("Already INACTIVE, nothing more to do"),Promise.resolve();if(this._changeState(t.ActivationState.DEACTIVATING),this._nextReconnectDelay=0,this._reconnector&&(clearTimeout(this._reconnector),this._reconnector=void 0),this._stompHandler&&this.webSocket.readyState!==t.StompSocketState.CLOSED){const k=this._stompHandler.onWebSocketClose;f=new Promise(($,R)=>{this._stompHandler.onWebSocketClose=P=>{k(P),$()}})}else return this._changeState(t.ActivationState.INACTIVE),Promise.resolve();return c?(g=this._stompHandler)==null||g.discardWebsocket():l&&this._disposeStompHandler(),f}forceDisconnect(){this._stompHandler&&this._stompHandler.forceDisconnect()}_disposeStompHandler(){this._stompHandler&&this._stompHandler.dispose()}publish(a){this._checkConnection(),this._stompHandler.publish(a)}_checkConnection(){if(!this.connected)throw new TypeError("There is no underlying STOMP connection")}watchForReceipt(a,c){this._checkConnection(),this._stompHandler.watchForReceipt(a,c)}subscribe(a,c,l={}){return this._checkConnection(),this._stompHandler.subscribe(a,c,l)}unsubscribe(a,c={}){this._checkConnection(),this._stompHandler.unsubscribe(a,c)}begin(a){return this._checkConnection(),this._stompHandler.begin(a)}commit(a){this._checkConnection(),this._stompHandler.commit(a)}abort(a){this._checkConnection(),this._stompHandler.abort(a)}ack(a,c,l={}){this._checkConnection(),this._stompHandler.ack(a,c,l)}nack(a,c,l={}){this._checkConnection(),this._stompHandler.nack(a,c,l)}}class I{}class he{}class Ve{constructor(a){this.client=a}get outgoing(){return this.client.heartbeatOutgoing}set outgoing(a){this.client.heartbeatOutgoing=a}get incoming(){return this.client.heartbeatIncoming}set incoming(a){this.client.heartbeatIncoming=a}}class K extends E{constructor(a){super(),this.maxWebSocketFrameSize=16*1024,this._heartbeatInfo=new Ve(this),this.reconnect_delay=0,this.webSocketFactory=a,this.debug=(...c)=>{console.log(...c)}}_parseConnect(...a){let c,l,f,g={};if(a.length<2)throw new Error("Connect requires at least 2 arguments");if(typeof a[1]=="function")[g,l,f,c]=a;else switch(a.length){case 6:[g.login,g.passcode,l,f,c,g.host]=a;break;default:[g.login,g.passcode,l,f,c]=a}return[g,l,f,c]}connect(...a){const c=this._parseConnect(...a);c[0]&&(this.connectHeaders=c[0]),c[1]&&(this.onConnect=c[1]),c[2]&&(this.onStompError=c[2]),c[3]&&(this.onWebSocketClose=c[3]),super.activate()}disconnect(a,c={}){a&&(this.onDisconnect=a),this.disconnectHeaders=c,super.deactivate()}send(a,c={},l=""){c=Object.assign({},c);const f=c["content-length"]===!1;f&&delete c["content-length"],this.publish({destination:a,headers:c,body:l,skipContentLengthHeader:f})}set reconnect_delay(a){this.reconnectDelay=a}get ws(){return this.webSocket}get version(){return this.connectedVersion}get onreceive(){return this.onUnhandledMessage}set onreceive(a){this.onUnhandledMessage=a}get onreceipt(){return this.onUnhandledReceipt}set onreceipt(a){this.onUnhandledReceipt=a}get heartbeat(){return this._heartbeatInfo}set heartbeat(a){this.heartbeatIncoming=a.incoming,this.heartbeatOutgoing=a.outgoing}}class V{static client(a,c){c==null&&(c=b.default.protocolVersions());const l=()=>{const f=V.WebSocketClass||WebSocket;return new f(a,c)};return new K(l)}static over(a){let c;return typeof a=="function"?c=a:(console.warn("Stomp.over did not receive a factory, auto reconnect will not work. Please see https://stomp-js.github.io/api-docs/latest/classes/Stomp.html#over"),c=()=>a),new K(c)}}V.WebSocketClass=null,t.Client=E,t.CompatClient=K,t.FrameImpl=s,t.Parser=y,t.Stomp=V,t.StompConfig=I,t.StompHeaders=he,t.Versions=b})})(St,St.exports);var $r=St.exports,Vn={exports:{}},$t={};p.crypto&&p.crypto.getRandomValues?$t.randomBytes=function(n){var e=new Uint8Array(n);return p.crypto.getRandomValues(e),e}:$t.randomBytes=function(n){for(var e=new Array(n),t=0;t<n;t++)e[t]=Math.floor(Math.random()*256);return e};var Er=$t,dn="abcdefghijklmnopqrstuvwxyz012345",me={string:function(n){for(var e=dn.length,t=Er.randomBytes(n),i=[],r=0;r<n;r++)i.push(dn.substr(t[r]%e,1));return i.join("")},number:function(n){return Math.floor(Math.random()*n)},numberString:function(n){var e=(""+(n-1)).length,t=new Array(e+1).join("0");return(t+this.number(n)).slice(-e)}};(function(n){var e=me,t={},i=!1,r=p.chrome&&p.chrome.app&&p.chrome.app.runtime;n.exports={attachEvent:function(o,h){typeof p.addEventListener<"u"?p.addEventListener(o,h,!1):p.document&&p.attachEvent&&(p.document.attachEvent("on"+o,h),p.attachEvent("on"+o,h))},detachEvent:function(o,h){typeof p.addEventListener<"u"?p.removeEventListener(o,h,!1):p.document&&p.detachEvent&&(p.document.detachEvent("on"+o,h),p.detachEvent("on"+o,h))},unloadAdd:function(o){if(r)return null;var h=e.string(8);return t[h]=o,i&&setTimeout(this.triggerUnloadCallbacks,0),h},unloadDel:function(o){o in t&&delete t[o]},triggerUnloadCallbacks:function(){for(var o in t)t[o](),delete t[o]}};var s=function(){i||(i=!0,n.exports.triggerUnloadCallbacks())};r||n.exports.attachEvent("unload",s)})(Vn);var G=Vn.exports,xr=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return e!==80;case"https":case"wss":return e!==443;case"ftp":return e!==21;case"gopher":return e!==70;case"file":return!1}return e!==0},Wt={},Cr=Object.prototype.hasOwnProperty,kr;function pn(n){try{return decodeURIComponent(n.replace(/\+/g," "))}catch{return null}}function fn(n){try{return encodeURIComponent(n)}catch{return null}}function Ar(n){for(var e=/([^=?#&]+)=?([^&]*)/g,t={},i;i=e.exec(n);){var r=pn(i[1]),s=pn(i[2]);r===null||s===null||r in t||(t[r]=s)}return t}function Tr(n,e){e=e||"";var t=[],i,r;typeof e!="string"&&(e="?");for(r in n)if(Cr.call(n,r)){if(i=n[r],!i&&(i===null||i===kr||isNaN(i))&&(i=""),r=fn(r),i=fn(i),r===null||i===null)continue;t.push(r+"="+i)}return t.length?e+t.join("&"):""}Wt.stringify=Tr;Wt.parse=Ar;var qn=xr,tt=Wt,Or=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,zn=/[\n\r\t]/g,Ir=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,Xn=/:\d+$/,Rr=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,Nr=/^[a-zA-Z]:/;function Bt(n){return(n||"").toString().replace(Or,"")}var Et=[["#","hash"],["?","query"],function(e,t){return H(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],mn={hash:1,query:1};function Jn(n){var e;typeof window<"u"?e=window:typeof p<"u"?e=p:typeof self<"u"?e=self:e={};var t=e.location||{};n=n||t;var i={},r=typeof n,s;if(n.protocol==="blob:")i=new j(unescape(n.pathname),{});else if(r==="string"){i=new j(n,{});for(s in mn)delete i[s]}else if(r==="object"){for(s in n)s in mn||(i[s]=n[s]);i.slashes===void 0&&(i.slashes=Ir.test(n.href))}return i}function H(n){return n==="file:"||n==="ftp:"||n==="http:"||n==="https:"||n==="ws:"||n==="wss:"}function Gn(n,e){n=Bt(n),n=n.replace(zn,""),e=e||{};var t=Rr.exec(n),i=t[1]?t[1].toLowerCase():"",r=!!t[2],s=!!t[3],o=0,h;return r?s?(h=t[2]+t[3]+t[4],o=t[2].length+t[3].length):(h=t[2]+t[4],o=t[2].length):s?(h=t[3]+t[4],o=t[3].length):h=t[4],i==="file:"?o>=2&&(h=h.slice(2)):H(i)?h=t[4]:i?r&&(h=h.slice(2)):o>=2&&H(e.protocol)&&(h=t[4]),{protocol:i,slashes:r||H(i),slashesCount:o,rest:h}}function Ur(n,e){if(n==="")return e;for(var t=(e||"/").split("/").slice(0,-1).concat(n.split("/")),i=t.length,r=t[i-1],s=!1,o=0;i--;)t[i]==="."?t.splice(i,1):t[i]===".."?(t.splice(i,1),o++):o&&(i===0&&(s=!0),t.splice(i,1),o--);return s&&t.unshift(""),(r==="."||r==="..")&&t.push(""),t.join("/")}function j(n,e,t){if(n=Bt(n),n=n.replace(zn,""),!(this instanceof j))return new j(n,e,t);var i,r,s,o,h,u,m=Et.slice(),y=typeof e,d=this,b=0;for(y!=="object"&&y!=="string"&&(t=e,e=null),t&&typeof t!="function"&&(t=tt.parse),e=Jn(e),r=Gn(n||"",e),i=!r.protocol&&!r.slashes,d.slashes=r.slashes||i&&e.slashes,d.protocol=r.protocol||e.protocol||"",n=r.rest,(r.protocol==="file:"&&(r.slashesCount!==2||Nr.test(n))||!r.slashes&&(r.protocol||r.slashesCount<2||!H(d.protocol)))&&(m[3]=[/(.*)/,"pathname"]);b<m.length;b++){if(o=m[b],typeof o=="function"){n=o(n,d);continue}s=o[0],u=o[1],s!==s?d[u]=n:typeof s=="string"?(h=s==="@"?n.lastIndexOf(s):n.indexOf(s),~h&&(typeof o[2]=="number"?(d[u]=n.slice(0,h),n=n.slice(h+o[2])):(d[u]=n.slice(h),n=n.slice(0,h)))):(h=s.exec(n))&&(d[u]=h[1],n=n.slice(0,h.index)),d[u]=d[u]||i&&o[3]&&e[u]||"",o[4]&&(d[u]=d[u].toLowerCase())}t&&(d.query=t(d.query)),i&&e.slashes&&d.pathname.charAt(0)!=="/"&&(d.pathname!==""||e.pathname!=="")&&(d.pathname=Ur(d.pathname,e.pathname)),d.pathname.charAt(0)!=="/"&&H(d.protocol)&&(d.pathname="/"+d.pathname),qn(d.port,d.protocol)||(d.host=d.hostname,d.port=""),d.username=d.password="",d.auth&&(h=d.auth.indexOf(":"),~h?(d.username=d.auth.slice(0,h),d.username=encodeURIComponent(decodeURIComponent(d.username)),d.password=d.auth.slice(h+1),d.password=encodeURIComponent(decodeURIComponent(d.password))):d.username=encodeURIComponent(decodeURIComponent(d.auth)),d.auth=d.password?d.username+":"+d.password:d.username),d.origin=d.protocol!=="file:"&&H(d.protocol)&&d.host?d.protocol+"//"+d.host:"null",d.href=d.toString()}function Pr(n,e,t){var i=this;switch(n){case"query":typeof e=="string"&&e.length&&(e=(t||tt.parse)(e)),i[n]=e;break;case"port":i[n]=e,qn(e,i.protocol)?e&&(i.host=i.hostname+":"+e):(i.host=i.hostname,i[n]="");break;case"hostname":i[n]=e,i.port&&(e+=":"+i.port),i.host=e;break;case"host":i[n]=e,Xn.test(e)?(e=e.split(":"),i.port=e.pop(),i.hostname=e.join(":")):(i.hostname=e,i.port="");break;case"protocol":i.protocol=e.toLowerCase(),i.slashes=!t;break;case"pathname":case"hash":if(e){var r=n==="pathname"?"/":"#";i[n]=e.charAt(0)!==r?r+e:e}else i[n]=e;break;case"username":case"password":i[n]=encodeURIComponent(e);break;case"auth":var s=e.indexOf(":");~s?(i.username=e.slice(0,s),i.username=encodeURIComponent(decodeURIComponent(i.username)),i.password=e.slice(s+1),i.password=encodeURIComponent(decodeURIComponent(i.password))):i.username=encodeURIComponent(decodeURIComponent(e))}for(var o=0;o<Et.length;o++){var h=Et[o];h[4]&&(i[h[1]]=i[h[1]].toLowerCase())}return i.auth=i.password?i.username+":"+i.password:i.username,i.origin=i.protocol!=="file:"&&H(i.protocol)&&i.host?i.protocol+"//"+i.host:"null",i.href=i.toString(),i}function Hr(n){(!n||typeof n!="function")&&(n=tt.stringify);var e,t=this,i=t.host,r=t.protocol;r&&r.charAt(r.length-1)!==":"&&(r+=":");var s=r+(t.protocol&&t.slashes||H(t.protocol)?"//":"");return t.username?(s+=t.username,t.password&&(s+=":"+t.password),s+="@"):t.password?(s+=":"+t.password,s+="@"):t.protocol!=="file:"&&H(t.protocol)&&!i&&t.pathname!=="/"&&(s+="@"),(i[i.length-1]===":"||Xn.test(t.hostname)&&!t.port)&&(i+=":"),s+=i+t.pathname,e=typeof t.query=="object"?n(t.query):t.query,e&&(s+=e.charAt(0)!=="?"?"?"+e:e),t.hash&&(s+=t.hash),s}j.prototype={set:Pr,toString:Hr};j.extractProtocol=Gn;j.location=Jn;j.trimLeft=Bt;j.qs=tt;var Kn=j,Lr=Kn,O={getOrigin:function(n){if(!n)return null;var e=new Lr(n);if(e.protocol==="file:")return null;var t=e.port;return t||(t=e.protocol==="https:"?"443":"80"),e.protocol+"//"+e.hostname+":"+t},isOriginEqual:function(n,e){var t=this.getOrigin(n)===this.getOrigin(e);return t},isSchemeEqual:function(n,e){return n.split(":")[0]===e.split(":")[0]},addPath:function(n,e){var t=n.split("?");return t[0]+e+(t[1]?"?"+t[1]:"")},addQuery:function(n,e){return n+(n.indexOf("?")===-1?"?"+e:"&"+e)},isLoopbackAddr:function(n){return/^127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(n)||/^\[::1\]$/.test(n)}},xt={exports:{}};typeof Object.create=="function"?xt.exports=function(e,t){t&&(e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:xt.exports=function(e,t){if(t){e.super_=t;var i=function(){};i.prototype=t.prototype,e.prototype=new i,e.prototype.constructor=e}};var w=xt.exports,C={};function nt(){this._listeners={}}nt.prototype.addEventListener=function(n,e){n in this._listeners||(this._listeners[n]=[]);var t=this._listeners[n];t.indexOf(e)===-1&&(t=t.concat([e])),this._listeners[n]=t};nt.prototype.removeEventListener=function(n,e){var t=this._listeners[n];if(t){var i=t.indexOf(e);if(i!==-1){t.length>1?this._listeners[n]=t.slice(0,i).concat(t.slice(i+1)):delete this._listeners[n];return}}};nt.prototype.dispatchEvent=function(){var n=arguments[0],e=n.type,t=arguments.length===1?[n]:Array.apply(null,arguments);if(this["on"+e]&&this["on"+e].apply(this,t),e in this._listeners)for(var i=this._listeners[e],r=0;r<i.length;r++)i[r].apply(this,t)};var Qn=nt,jr=w,it=Qn;function J(){it.call(this)}jr(J,it);J.prototype.removeAllListeners=function(n){n?delete this._listeners[n]:this._listeners={}};J.prototype.once=function(n,e){var t=this,i=!1;function r(){t.removeListener(n,r),i||(i=!0,e.apply(this,arguments))}this.on(n,r)};J.prototype.emit=function(){var n=arguments[0],e=this._listeners[n];if(e){for(var t=arguments.length,i=new Array(t-1),r=1;r<t;r++)i[r-1]=arguments[r];for(var s=0;s<e.length;s++)e[s].apply(this,i)}};J.prototype.on=J.prototype.addListener=it.prototype.addEventListener;J.prototype.removeListener=it.prototype.removeEventListener;C.EventEmitter=J;var Ct={exports:{}},gn=p.WebSocket||p.MozWebSocket;gn?Ct.exports=function(e){return new gn(e)}:Ct.exports=void 0;var Dr=Ct.exports,Zn=G,Wr=O,Br=w,Yn=C.EventEmitter,ei=Dr,bn=function(){};function F(n,e,t){if(!F.enabled())throw new Error("Transport created when disabled");Yn.call(this);var i=this,r=Wr.addPath(n,"/websocket");r.slice(0,5)==="https"?r="wss"+r.slice(5):r="ws"+r.slice(4),this.url=r,this.ws=new ei(this.url,[],t),this.ws.onmessage=function(s){bn("message event",s.data),i.emit("message",s.data)},this.unloadRef=Zn.unloadAdd(function(){i.ws.close()}),this.ws.onclose=function(s){bn("close event",s.code,s.reason),i.emit("close",s.code,s.reason),i._cleanup()},this.ws.onerror=function(s){i.emit("close",1006,"WebSocket connection broken"),i._cleanup()}}Br(F,Yn);F.prototype.send=function(n){var e="["+n+"]";this.ws.send(e)};F.prototype.close=function(){var n=this.ws;this._cleanup(),n&&n.close()};F.prototype._cleanup=function(){var n=this.ws;n&&(n.onmessage=n.onclose=n.onerror=null),Zn.unloadDel(this.unloadRef),this.unloadRef=this.ws=null,this.removeAllListeners()};F.enabled=function(){return!!ei};F.transportName="websocket";F.roundTrips=2;var Mr=F,Fr=w,ti=C.EventEmitter,Vr=function(){};function re(n,e){ti.call(this),this.sendBuffer=[],this.sender=e,this.url=n}Fr(re,ti);re.prototype.send=function(n){this.sendBuffer.push(n),this.sendStop||this.sendSchedule()};re.prototype.sendScheduleWait=function(){var n=this,e;this.sendStop=function(){n.sendStop=null,clearTimeout(e)},e=setTimeout(function(){n.sendStop=null,n.sendSchedule()},25)};re.prototype.sendSchedule=function(){Vr("sendSchedule",this.sendBuffer.length);var n=this;if(this.sendBuffer.length>0){var e="["+this.sendBuffer.join(",")+"]";this.sendStop=this.sender(this.url,e,function(t){n.sendStop=null,t?(n.emit("close",t.code||1006,"Sending error: "+t),n.close()):n.sendScheduleWait()}),this.sendBuffer=[]}};re.prototype._cleanup=function(){this.removeAllListeners()};re.prototype.close=function(){this._cleanup(),this.sendStop&&(this.sendStop(),this.sendStop=null)};var qr=re,zr=w,ni=C.EventEmitter,Xr=function(){};function rt(n,e,t){ni.call(this),this.Receiver=n,this.receiveUrl=e,this.AjaxObject=t,this._scheduleReceiver()}zr(rt,ni);rt.prototype._scheduleReceiver=function(){var n=this,e=this.poll=new this.Receiver(this.receiveUrl,this.AjaxObject);e.on("message",function(t){n.emit("message",t)}),e.once("close",function(t,i){Xr("close",t,i,n.pollIsClosing),n.poll=e=null,n.pollIsClosing||(i==="network"?n._scheduleReceiver():(n.emit("close",t||1006,i),n.removeAllListeners()))})};rt.prototype.abort=function(){this.removeAllListeners(),this.pollIsClosing=!0,this.poll&&this.poll.abort()};var Jr=rt,Gr=w,Kr=O,Mt=qr,Qr=Jr;function Ft(n,e,t,i,r){var s=Kr.addPath(n,e),o=this;Mt.call(this,n,t),this.poll=new Qr(i,s,r),this.poll.on("message",function(h){o.emit("message",h)}),this.poll.once("close",function(h,u){o.poll=null,o.emit("close",h,u),o.close()})}Gr(Ft,Mt);Ft.prototype.close=function(){Mt.prototype.close.call(this),this.removeAllListeners(),this.poll&&(this.poll.abort(),this.poll=null)};var ii=Ft,Zr=w,Yr=O,ri=ii;function es(n){return function(e,t,i){var r={};typeof t=="string"&&(r.headers={"Content-type":"text/plain"});var s=Yr.addPath(e,"/xhr_send"),o=new n("POST",s,t,r);return o.once("finish",function(h){if(o=null,h!==200&&h!==204)return i(new Error("http status "+h));i()}),function(){o.close(),o=null;var h=new Error("Aborted");h.code=1e3,i(h)}}}function si(n,e,t,i){ri.call(this,n,e,es(i),t,i)}Zr(si,ri);var ge=si,ts=w,oi=C.EventEmitter;function Ne(n,e){oi.call(this);var t=this;this.bufferPosition=0,this.xo=new e("POST",n,null),this.xo.on("chunk",this._chunkHandler.bind(this)),this.xo.once("finish",function(i,r){t._chunkHandler(i,r),t.xo=null;var s=i===200?"network":"permanent";t.emit("close",null,s),t._cleanup()})}ts(Ne,oi);Ne.prototype._chunkHandler=function(n,e){if(!(n!==200||!e))for(var t=-1;;this.bufferPosition+=t+1){var i=e.slice(this.bufferPosition);if(t=i.indexOf(`
`),t===-1)break;var r=i.slice(0,t);r&&this.emit("message",r)}};Ne.prototype._cleanup=function(){this.removeAllListeners()};Ne.prototype.abort=function(){this.xo&&(this.xo.close(),this.emit("close",null,"user"),this.xo=null),this._cleanup()};var st=Ne,ai=C.EventEmitter,ns=w,ci=G,is=O,Te=p.XMLHttpRequest,dt=function(){};function D(n,e,t,i){var r=this;ai.call(this),setTimeout(function(){r._start(n,e,t,i)},0)}ns(D,ai);D.prototype._start=function(n,e,t,i){var r=this;try{this.xhr=new Te}catch{}if(!this.xhr){this.emit("finish",0,"no xhr support"),this._cleanup();return}e=is.addQuery(e,"t="+ +new Date),this.unloadRef=ci.unloadAdd(function(){r._cleanup(!0)});try{this.xhr.open(n,e,!0),this.timeout&&"timeout"in this.xhr&&(this.xhr.timeout=this.timeout,this.xhr.ontimeout=function(){dt("xhr timeout"),r.emit("finish",0,""),r._cleanup(!1)})}catch{this.emit("finish",0,""),this._cleanup(!1);return}if((!i||!i.noCredentials)&&D.supportsCORS&&(this.xhr.withCredentials=!0),i&&i.headers)for(var s in i.headers)this.xhr.setRequestHeader(s,i.headers[s]);this.xhr.onreadystatechange=function(){if(r.xhr){var o=r.xhr,h,u;switch(dt("readyState",o.readyState),o.readyState){case 3:try{u=o.status,h=o.responseText}catch{}u===1223&&(u=204),u===200&&h&&h.length>0&&r.emit("chunk",u,h);break;case 4:u=o.status,u===1223&&(u=204),(u===12005||u===12029)&&(u=0),dt("finish",u,o.responseText),r.emit("finish",u,o.responseText),r._cleanup(!1);break}}};try{r.xhr.send(t)}catch{r.emit("finish",0,""),r._cleanup(!1)}};D.prototype._cleanup=function(n){if(this.xhr){if(this.removeAllListeners(),ci.unloadDel(this.unloadRef),this.xhr.onreadystatechange=function(){},this.xhr.ontimeout&&(this.xhr.ontimeout=null),n)try{this.xhr.abort()}catch{}this.unloadRef=this.xhr=null}};D.prototype.close=function(){this._cleanup(!0)};D.enabled=!!Te;var vn=["Active"].concat("Object").join("X");!D.enabled&&vn in p&&(Te=function(){try{return new p[vn]("Microsoft.XMLHTTP")}catch{return null}},D.enabled=!!new Te);var hi=!1;try{hi="withCredentials"in new Te}catch{}D.supportsCORS=hi;var li=D,rs=w,Ze=li;function Vt(n,e,t,i){Ze.call(this,n,e,t,i)}rs(Vt,Ze);Vt.enabled=Ze.enabled&&Ze.supportsCORS;var ot=Vt,ss=w,qt=li;function zt(n,e,t){qt.call(this,n,e,t,{noCredentials:!0})}ss(zt,qt);zt.enabled=qt.enabled;var Ue=zt,Pe={isOpera:function(){return p.navigator&&/opera/i.test(p.navigator.userAgent)},isKonqueror:function(){return p.navigator&&/konqueror/i.test(p.navigator.userAgent)},hasDomain:function(){if(!p.document)return!0;try{return!!p.document.domain}catch{return!1}}},os=w,ui=ge,as=st,kt=ot,cs=Ue,hs=Pe;function be(n){if(!cs.enabled&&!kt.enabled)throw new Error("Transport created when disabled");ui.call(this,n,"/xhr_streaming",as,kt)}os(be,ui);be.enabled=function(n){return n.nullOrigin||hs.isOpera()?!1:kt.enabled};be.transportName="xhr-streaming";be.roundTrips=2;be.needBody=!!p.document;var ls=be,di=C.EventEmitter,us=w,pi=G,ds=Pe,ps=O,fs=function(){};function se(n,e,t){var i=this;di.call(this),setTimeout(function(){i._start(n,e,t)},0)}us(se,di);se.prototype._start=function(n,e,t){var i=this,r=new p.XDomainRequest;e=ps.addQuery(e,"t="+ +new Date),r.onerror=function(){i._error()},r.ontimeout=function(){i._error()},r.onprogress=function(){fs("progress",r.responseText),i.emit("chunk",200,r.responseText)},r.onload=function(){i.emit("finish",200,r.responseText),i._cleanup(!1)},this.xdr=r,this.unloadRef=pi.unloadAdd(function(){i._cleanup(!0)});try{this.xdr.open(n,e),this.timeout&&(this.xdr.timeout=this.timeout),this.xdr.send(t)}catch{this._error()}};se.prototype._error=function(){this.emit("finish",0,""),this._cleanup(!1)};se.prototype._cleanup=function(n){if(this.xdr){if(this.removeAllListeners(),pi.unloadDel(this.unloadRef),this.xdr.ontimeout=this.xdr.onerror=this.xdr.onprogress=this.xdr.onload=null,n)try{this.xdr.abort()}catch{}this.unloadRef=this.xdr=null}};se.prototype.close=function(){this._cleanup(!0)};se.enabled=!!(p.XDomainRequest&&ds.hasDomain());var Xt=se,ms=w,fi=ge,gs=st,At=Xt;function He(n){if(!At.enabled)throw new Error("Transport created when disabled");fi.call(this,n,"/xhr_streaming",gs,At)}ms(He,fi);He.enabled=function(n){return n.cookie_needed||n.nullOrigin?!1:At.enabled&&n.sameScheme};He.transportName="xdr-streaming";He.roundTrips=2;var mi=He,gi=p.EventSource,bs=w,bi=C.EventEmitter,vs=gi,yn=function(){};function Le(n){bi.call(this);var e=this,t=this.es=new vs(n);t.onmessage=function(i){yn("message",i.data),e.emit("message",decodeURI(i.data))},t.onerror=function(i){yn("error",t.readyState);var r=t.readyState!==2?"network":"permanent";e._cleanup(),e._close(r)}}bs(Le,bi);Le.prototype.abort=function(){this._cleanup(),this._close("user")};Le.prototype._cleanup=function(){var n=this.es;n&&(n.onmessage=n.onerror=null,n.close(),this.es=null)};Le.prototype._close=function(n){var e=this;setTimeout(function(){e.emit("close",null,n),e.removeAllListeners()},200)};var ys=Le,_s=w,vi=ge,ws=ys,Ss=ot,$s=gi;function ve(n){if(!ve.enabled())throw new Error("Transport created when disabled");vi.call(this,n,"/eventsource",ws,Ss)}_s(ve,vi);ve.enabled=function(){return!!$s};ve.transportName="eventsource";ve.roundTrips=2;var _n=ve,pt,wn;function yi(){return wn||(wn=1,pt="1.6.1"),pt}var _i={exports:{}};(function(n){var e=G,t=Pe;n.exports={WPrefix:"_jp",currentWindowId:null,polluteGlobalNamespace:function(){n.exports.WPrefix in p||(p[n.exports.WPrefix]={})},postMessage:function(i,r){p.parent!==p&&p.parent.postMessage(JSON.stringify({windowId:n.exports.currentWindowId,type:i,data:r||""}),"*")},createIframe:function(i,r){var s=p.document.createElement("iframe"),o,h,u=function(){clearTimeout(o);try{s.onload=null}catch{}s.onerror=null},m=function(){s&&(u(),setTimeout(function(){s&&s.parentNode.removeChild(s),s=null},0),e.unloadDel(h))},y=function(b){s&&(m(),r(b))},d=function(b,S){setTimeout(function(){try{s&&s.contentWindow&&s.contentWindow.postMessage(b,S)}catch{}},0)};return s.src=i,s.style.display="none",s.style.position="absolute",s.onerror=function(){y("onerror")},s.onload=function(){clearTimeout(o),o=setTimeout(function(){y("onload timeout")},2e3)},p.document.body.appendChild(s),o=setTimeout(function(){y("timeout")},15e3),h=e.unloadAdd(m),{post:d,cleanup:m,loaded:u}},createHtmlfile:function(i,r){var s=["Active"].concat("Object").join("X"),o=new p[s]("htmlfile"),h,u,m,y=function(){clearTimeout(h),m.onerror=null},d=function(){o&&(y(),e.unloadDel(u),m.parentNode.removeChild(m),m=o=null,CollectGarbage())},b=function(I){o&&(d(),r(I))},S=function(I,he){try{setTimeout(function(){m&&m.contentWindow&&m.contentWindow.postMessage(I,he)},0)}catch{}};o.open(),o.write('<html><script>document.domain="'+p.document.domain+'";<\/script></html>'),o.close(),o.parentWindow[n.exports.WPrefix]=p[n.exports.WPrefix];var E=o.createElement("div");return o.body.appendChild(E),m=o.createElement("iframe"),E.appendChild(m),m.src=i,m.onerror=function(){b("onerror")},h=setTimeout(function(){b("timeout")},15e3),u=e.unloadAdd(d),{post:S,cleanup:d,loaded:y}}},n.exports.iframeEnabled=!1,p.document&&(n.exports.iframeEnabled=(typeof p.postMessage=="function"||typeof p.postMessage=="object")&&!t.isKonqueror())})(_i);var je=_i.exports,Es=w,wi=C.EventEmitter,xs=yi(),Tt=O,Si=je,$i=G,Cs=me,_e=function(){};function W(n,e,t){if(!W.enabled())throw new Error("Transport created when disabled");wi.call(this);var i=this;this.origin=Tt.getOrigin(t),this.baseUrl=t,this.transUrl=e,this.transport=n,this.windowId=Cs.string(8);var r=Tt.addPath(t,"/iframe.html")+"#"+this.windowId;this.iframeObj=Si.createIframe(r,function(s){i.emit("close",1006,"Unable to load an iframe ("+s+")"),i.close()}),this.onmessageCallback=this._message.bind(this),$i.attachEvent("message",this.onmessageCallback)}Es(W,wi);W.prototype.close=function(){if(this.removeAllListeners(),this.iframeObj){$i.detachEvent("message",this.onmessageCallback);try{this.postMessage("c")}catch{}this.iframeObj.cleanup(),this.iframeObj=null,this.onmessageCallback=this.iframeObj=null}};W.prototype._message=function(n){if(_e("message",n.data),!Tt.isOriginEqual(n.origin,this.origin)){_e("not same origin",n.origin,this.origin);return}var e;try{e=JSON.parse(n.data)}catch{_e("bad json",n.data);return}if(e.windowId!==this.windowId){_e("mismatched window id",e.windowId,this.windowId);return}switch(e.type){case"s":this.iframeObj.loaded(),this.postMessage("s",JSON.stringify([xs,this.transport,this.transUrl,this.baseUrl]));break;case"t":this.emit("message",e.data);break;case"c":var t;try{t=JSON.parse(e.data)}catch{_e("bad json",e.data);return}this.emit("close",t[0],t[1]),this.close();break}};W.prototype.postMessage=function(n,e){this.iframeObj.post(JSON.stringify({windowId:this.windowId,type:n,data:e||""}),this.origin)};W.prototype.send=function(n){this.postMessage("m",n)};W.enabled=function(){return Si.iframeEnabled};W.transportName="iframe";W.roundTrips=2;var Ei=W,Jt={isObject:function(n){var e=typeof n;return e==="function"||e==="object"&&!!n},extend:function(n){if(!this.isObject(n))return n;for(var e,t,i=1,r=arguments.length;i<r;i++){e=arguments[i];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}return n}},ks=w,qe=Ei,As=Jt,ft=function(n){function e(t,i){qe.call(this,n.transportName,t,i)}return ks(e,qe),e.enabled=function(t,i){if(!p.document)return!1;var r=As.extend({},i);return r.sameOrigin=!0,n.enabled(r)&&qe.enabled()},e.transportName="iframe-"+n.transportName,e.needBody=!0,e.roundTrips=qe.roundTrips+n.roundTrips-1,e.facadeTransport=n,e},Ts=w,Z=je,Os=O,xi=C.EventEmitter,Is=me,Rs=function(){};function N(n){xi.call(this);var e=this;Z.polluteGlobalNamespace(),this.id="a"+Is.string(6),n=Os.addQuery(n,"c="+decodeURIComponent(Z.WPrefix+"."+this.id)),Rs("using htmlfile",N.htmlfileEnabled);var t=N.htmlfileEnabled?Z.createHtmlfile:Z.createIframe;p[Z.WPrefix][this.id]={start:function(){e.iframeObj.loaded()},message:function(i){e.emit("message",i)},stop:function(){e._cleanup(),e._close("network")}},this.iframeObj=t(n,function(){e._cleanup(),e._close("permanent")})}Ts(N,xi);N.prototype.abort=function(){this._cleanup(),this._close("user")};N.prototype._cleanup=function(){this.iframeObj&&(this.iframeObj.cleanup(),this.iframeObj=null),delete p[Z.WPrefix][this.id]};N.prototype._close=function(n){this.emit("close",null,n),this.removeAllListeners()};N.htmlfileEnabled=!1;var Sn=["Active"].concat("Object").join("X");if(Sn in p)try{N.htmlfileEnabled=!!new p[Sn]("htmlfile")}catch{}N.enabled=N.htmlfileEnabled||Z.iframeEnabled;var Ns=N,Us=w,Ot=Ns,Ps=Ue,Ci=ge;function De(n){if(!Ot.enabled)throw new Error("Transport created when disabled");Ci.call(this,n,"/htmlfile",Ot,Ps)}Us(De,Ci);De.enabled=function(n){return Ot.enabled&&n.sameOrigin};De.transportName="htmlfile";De.roundTrips=2;var $n=De,Hs=w,ki=ge,Ls=st,It=ot,Ai=Ue;function We(n){if(!Ai.enabled&&!It.enabled)throw new Error("Transport created when disabled");ki.call(this,n,"/xhr",Ls,It)}Hs(We,ki);We.enabled=function(n){return n.nullOrigin?!1:Ai.enabled&&n.sameOrigin?!0:It.enabled};We.transportName="xhr-polling";We.roundTrips=2;var En=We,js=w,Ti=ge,Ds=mi,Ws=st,xn=Xt;function Be(n){if(!xn.enabled)throw new Error("Transport created when disabled");Ti.call(this,n,"/xhr",Ws,xn)}js(Be,Ti);Be.enabled=Ds.enabled;Be.transportName="xdr-polling";Be.roundTrips=2;var Bs=Be,Ee=je,Oi=me,Ms=Pe,Fs=O,Vs=w,Ii=C.EventEmitter,qs=function(){};function T(n){var e=this;Ii.call(this),Ee.polluteGlobalNamespace(),this.id="a"+Oi.string(6);var t=Fs.addQuery(n,"c="+encodeURIComponent(Ee.WPrefix+"."+this.id));p[Ee.WPrefix][this.id]=this._callback.bind(this),this._createScript(t),this.timeoutId=setTimeout(function(){e._abort(new Error("JSONP script loaded abnormally (timeout)"))},T.timeout)}Vs(T,Ii);T.prototype.abort=function(){if(p[Ee.WPrefix][this.id]){var n=new Error("JSONP user aborted read");n.code=1e3,this._abort(n)}};T.timeout=35e3;T.scriptErrorTimeout=1e3;T.prototype._callback=function(n){this._cleanup(),!this.aborting&&(n&&this.emit("message",n),this.emit("close",null,"network"),this.removeAllListeners())};T.prototype._abort=function(n){this._cleanup(),this.aborting=!0,this.emit("close",n.code,n.message),this.removeAllListeners()};T.prototype._cleanup=function(){if(clearTimeout(this.timeoutId),this.script2&&(this.script2.parentNode.removeChild(this.script2),this.script2=null),this.script){var n=this.script;n.parentNode.removeChild(n),n.onreadystatechange=n.onerror=n.onload=n.onclick=null,this.script=null}delete p[Ee.WPrefix][this.id]};T.prototype._scriptError=function(){var n=this;this.errorTimer||(this.errorTimer=setTimeout(function(){n.loadedOkay||n._abort(new Error("JSONP script loaded abnormally (onerror)"))},T.scriptErrorTimeout))};T.prototype._createScript=function(n){var e=this,t=this.script=p.document.createElement("script"),i;if(t.id="a"+Oi.string(8),t.src=n,t.type="text/javascript",t.charset="UTF-8",t.onerror=this._scriptError.bind(this),t.onload=function(){e._abort(new Error("JSONP script loaded abnormally (onload)"))},t.onreadystatechange=function(){if(qs("onreadystatechange",t.readyState),/loaded|closed/.test(t.readyState)){if(t&&t.htmlFor&&t.onclick){e.loadedOkay=!0;try{t.onclick()}catch{}}t&&e._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))}},typeof t.async>"u"&&p.document.attachEvent)if(Ms.isOpera())i=this.script2=p.document.createElement("script"),i.text="try{var a = document.getElementById('"+t.id+"'); if(a)a.onerror();}catch(x){};",t.async=i.async=!1;else{try{t.htmlFor=t.id,t.event="onclick"}catch{}t.async=!0}typeof t.async<"u"&&(t.async=!0);var r=p.document.getElementsByTagName("head")[0];r.insertBefore(t,r.firstChild),i&&r.insertBefore(i,r.firstChild)};var zs=T,Xs=me,Cn=O,Js=function(){},A,xe;function Gs(n){try{return p.document.createElement('<iframe name="'+n+'">')}catch{var e=p.document.createElement("iframe");return e.name=n,e}}function Ks(){A=p.document.createElement("form"),A.style.display="none",A.style.position="absolute",A.method="POST",A.enctype="application/x-www-form-urlencoded",A.acceptCharset="UTF-8",xe=p.document.createElement("textarea"),xe.name="d",A.appendChild(xe),p.document.body.appendChild(A)}var Qs=function(n,e,t){A||Ks();var i="a"+Xs.string(8);A.target=i,A.action=Cn.addQuery(Cn.addPath(n,"/jsonp_send"),"i="+i);var r=Gs(i);r.id=i,r.style.display="none",A.appendChild(r);try{xe.value=e}catch{}A.submit();var s=function(o){r.onerror&&(r.onreadystatechange=r.onerror=r.onload=null,setTimeout(function(){r.parentNode.removeChild(r),r=null},500),xe.value="",t(o))};return r.onerror=function(){s()},r.onload=function(){s()},r.onreadystatechange=function(o){Js("onreadystatechange",i,r.readyState),r.readyState==="complete"&&s()},function(){s(new Error("Aborted"))}},Zs=w,Ri=ii,Ys=zs,eo=Qs;function oe(n){if(!oe.enabled())throw new Error("Transport created when disabled");Ri.call(this,n,"/jsonp",eo,Ys)}Zs(oe,Ri);oe.enabled=function(){return!!p.document};oe.transportName="jsonp-polling";oe.roundTrips=1;oe.needBody=!0;var to=oe,no=[Mr,ls,mi,_n,ft(_n),$n,ft($n),En,Bs,ft(En),to],Oe=Array.prototype,Gt=Object.prototype,io=Function.prototype,Ie=String.prototype,mt=Oe.slice,Kt=Gt.toString,Ni=function(n){return Gt.toString.call(n)==="[object Function]"},ro=function(e){return Kt.call(e)==="[object Array]"},Ui=function(e){return Kt.call(e)==="[object String]"},so=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch{return!1}}(),Rt;so?Rt=function(n,e,t,i){!i&&e in n||Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:!0,value:t})}:Rt=function(n,e,t,i){!i&&e in n||(n[e]=t)};var Me=function(n,e,t){for(var i in e)Gt.hasOwnProperty.call(e,i)&&Rt(n,i,e[i],t)},Pi=function(n){if(n==null)throw new TypeError("can't convert "+n+" to object");return Object(n)};function oo(n){var e=+n;return e!==e?e=0:e!==0&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}function ao(n){return n>>>0}function gt(){}Me(io,{bind:function(e){var t=this;if(!Ni(t))throw new TypeError("Function.prototype.bind called on incompatible "+t);for(var i=mt.call(arguments,1),r=function(){if(this instanceof u){var m=t.apply(this,i.concat(mt.call(arguments)));return Object(m)===m?m:this}else return t.apply(e,i.concat(mt.call(arguments)))},s=Math.max(0,t.length-i.length),o=[],h=0;h<s;h++)o.push("$"+h);var u=Function("binder","return function ("+o.join(",")+"){ return binder.apply(this, arguments); }")(r);return t.prototype&&(gt.prototype=t.prototype,u.prototype=new gt,gt.prototype=null),u}});Me(Array,{isArray:ro});var kn=Object("a"),Hi=kn[0]!=="a"||!(0 in kn),co=function(e){var t=!0,i=!0;return e&&(e.call("foo",function(r,s,o){typeof o!="object"&&(t=!1)}),e.call([1],function(){i=typeof this=="string"},"x")),!!e&&t&&i};Me(Oe,{forEach:function(e){var t=Pi(this),i=Hi&&Ui(this)?this.split(""):t,r=arguments[1],s=-1,o=i.length>>>0;if(!Ni(e))throw new TypeError;for(;++s<o;)s in i&&e.call(r,i[s],s,t)}},!co(Oe.forEach));var ho=Array.prototype.indexOf&&[0,1].indexOf(1,2)!==-1;Me(Oe,{indexOf:function(e){var t=Hi&&Ui(this)?this.split(""):Pi(this),i=t.length>>>0;if(!i)return-1;var r=0;for(arguments.length>1&&(r=oo(arguments[1])),r=r>=0?r:Math.max(0,i+r);r<i;r++)if(r in t&&t[r]===e)return r;return-1}},ho);var An=Ie.split;"ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1?function(){var n=/()??/.exec("")[1]===void 0;Ie.split=function(e,t){var i=this;if(e===void 0&&t===0)return[];if(Kt.call(e)!=="[object RegExp]")return An.call(this,e,t);var r=[],s=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),o=0,h,u,m,y;for(e=new RegExp(e.source,s+"g"),i+="",n||(h=new RegExp("^"+e.source+"$(?!\\s)",s)),t=t===void 0?-1>>>0:ao(t);(u=e.exec(i))&&(m=u.index+u[0].length,!(m>o&&(r.push(i.slice(o,u.index)),!n&&u.length>1&&u[0].replace(h,function(){for(var d=1;d<arguments.length-2;d++)arguments[d]===void 0&&(u[d]=void 0)}),u.length>1&&u.index<i.length&&Oe.push.apply(r,u.slice(1)),y=u[0].length,o=m,r.length>=t)));)e.lastIndex===u.index&&e.lastIndex++;return o===i.length?(y||!e.test(""))&&r.push(""):r.push(i.slice(o)),r.length>t?r.slice(0,t):r}}():"0".split(void 0,0).length&&(Ie.split=function(e,t){return e===void 0&&t===0?[]:An.call(this,e,t)});var lo=Ie.substr,uo="".substr&&"0b".substr(-1)!=="b";Me(Ie,{substr:function(e,t){return lo.call(this,e<0&&(e=this.length+e)<0?0:e,t)}},uo);var ze=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,bt,po=function(n){var e,t={},i=[];for(e=0;e<65536;e++)i.push(String.fromCharCode(e));return n.lastIndex=0,i.join("").replace(n,function(r){return t[r]="\\u"+("0000"+r.charCodeAt(0).toString(16)).slice(-4),""}),n.lastIndex=0,t},fo={quote:function(n){var e=JSON.stringify(n);return ze.lastIndex=0,ze.test(e)?(bt||(bt=po(ze)),e.replace(ze,function(t){return bt[t]})):e}},vt=function(){},mo=function(n){return{filterToEnabled:function(e,t){var i={main:[],facade:[]};return e?typeof e=="string"&&(e=[e]):e=[],n.forEach(function(r){if(r&&!(r.transportName==="websocket"&&t.websocket===!1)){if(e.length&&e.indexOf(r.transportName)===-1){vt("not in whitelist",r.transportName);return}r.enabled(t)?(vt("enabled",r.transportName),i.main.push(r),r.facadeTransport&&i.facade.push(r.facadeTransport)):vt("disabled",r.transportName)}}),i}}},Nt={};["log","debug","warn"].forEach(function(n){var e;try{e=p.console&&p.console[n]&&p.console[n].apply}catch{}Nt[n]=e?function(){return p.console[n].apply(p.console,arguments)}:n==="log"?function(){}:Nt.log});var go=Nt;function ae(n){this.type=n}ae.prototype.initEvent=function(n,e,t){return this.type=n,this.bubbles=e,this.cancelable=t,this.timeStamp=+new Date,this};ae.prototype.stopPropagation=function(){};ae.prototype.preventDefault=function(){};ae.CAPTURING_PHASE=1;ae.AT_TARGET=2;ae.BUBBLING_PHASE=3;var Qt=ae,Li=p.location||{protocol:"http:",href:"http://localhost/",hash:""},bo=w,ji=Qt;function Di(){ji.call(this),this.initEvent("close",!1,!1),this.wasClean=!1,this.code=0,this.reason=""}bo(Di,ji);var vo=Di,yo=w,Wi=Qt;function Bi(n){Wi.call(this),this.initEvent("message",!1,!1),this.data=n}yo(Bi,Wi);var _o=Bi,Mi=C.EventEmitter,wo=w;function Fe(){var n=this;Mi.call(this),this.to=setTimeout(function(){n.emit("finish",200,"{}")},Fe.timeout)}wo(Fe,Mi);Fe.prototype.close=function(){clearTimeout(this.to)};Fe.timeout=2e3;var So=Fe,Fi=C.EventEmitter,$o=w,Eo=Jt;function Zt(n,e){Fi.call(this);var t=this,i=+new Date;this.xo=new e("GET",n),this.xo.once("finish",function(r,s){var o,h;if(r===200){if(h=+new Date-i,s)try{o=JSON.parse(s)}catch{}Eo.isObject(o)||(o={})}t.emit("finish",o,h),t.removeAllListeners()})}$o(Zt,Fi);Zt.prototype.close=function(){this.removeAllListeners(),this.xo.close()};var Vi=Zt,yt,Tn;function qi(){if(Tn)return yt;Tn=1;var n=w,e=C.EventEmitter,t=Ue,i=Vi;function r(s){var o=this;e.call(this),this.ir=new i(s,t),this.ir.once("finish",function(h,u){o.ir=null,o.emit("message",JSON.stringify([h,u]))})}return n(r,e),r.transportName="iframe-info-receiver",r.prototype.close=function(){this.ir&&(this.ir.close(),this.ir=null),this.removeAllListeners()},yt=r,yt}var zi=C.EventEmitter,xo=w,Co=G,Xi=Ei,ko=qi();function at(n,e){var t=this;zi.call(this);var i=function(){var r=t.ifr=new Xi(ko.transportName,e,n);r.once("message",function(s){if(s){var o;try{o=JSON.parse(s)}catch{t.emit("finish"),t.close();return}var h=o[0],u=o[1];t.emit("finish",h,u)}t.close()}),r.once("close",function(){t.emit("finish"),t.close()})};p.document.body?i():Co.attachEvent("load",i)}xo(at,zi);at.enabled=function(){return Xi.enabled()};at.prototype.close=function(){this.ifr&&this.ifr.close(),this.removeAllListeners(),this.ifr=null};var Ao=at,Ji=C.EventEmitter,To=w,Oo=O,On=Xt,In=ot,Io=Ue,Ro=So,Rn=Ao,Xe=Vi;function B(n,e){var t=this;Ji.call(this),setTimeout(function(){t.doXhr(n,e)},0)}To(B,Ji);B._getReceiver=function(n,e,t){return t.sameOrigin?new Xe(e,Io):In.enabled?new Xe(e,In):On.enabled&&t.sameScheme?new Xe(e,On):Rn.enabled()?new Rn(n,e):new Xe(e,Ro)};B.prototype.doXhr=function(n,e){var t=this,i=Oo.addPath(n,"/info");this.xo=B._getReceiver(n,i,e),this.timeoutRef=setTimeout(function(){t._cleanup(!1),t.emit("finish")},B.timeout),this.xo.once("finish",function(r,s){t._cleanup(!0),t.emit("finish",r,s)})};B.prototype._cleanup=function(n){clearTimeout(this.timeoutRef),this.timeoutRef=null,!n&&this.xo&&this.xo.close(),this.xo=null};B.prototype.close=function(){this.removeAllListeners(),this._cleanup(!1)};B.timeout=8e3;var No=B,_t,Nn;function Uo(){if(Nn)return _t;Nn=1;var n=je;function e(t){this._transport=t,t.on("message",this._transportMessage.bind(this)),t.on("close",this._transportClose.bind(this))}return e.prototype._transportClose=function(t,i){n.postMessage("c",JSON.stringify([t,i]))},e.prototype._transportMessage=function(t){n.postMessage("t",t)},e.prototype._send=function(t){this._transport.send(t)},e.prototype._close=function(){this._transport.close(),this._transport.removeAllListeners()},_t=e,_t}var wt,Un;function Po(){if(Un)return wt;Un=1;var n=O,e=G,t=Uo(),i=qi(),r=je,s=Li,o=function(){};return wt=function(h,u){var m={};u.forEach(function(d){d.facadeTransport&&(m[d.facadeTransport.transportName]=d.facadeTransport)}),m[i.transportName]=i;var y;h.bootstrap_iframe=function(){var d;r.currentWindowId=s.hash.slice(1);var b=function(S){if(S.source===parent&&(typeof y>"u"&&(y=S.origin),S.origin===y)){var E;try{E=JSON.parse(S.data)}catch{o("bad json",S.data);return}if(E.windowId===r.currentWindowId)switch(E.type){case"s":var I;try{I=JSON.parse(E.data)}catch{o("bad json",E.data);break}var he=I[0],Ve=I[1],K=I[2],V=I[3];if(he!==h.version)throw new Error('Incompatible SockJS! Main site uses: "'+he+'", the iframe: "'+h.version+'".');if(!n.isOriginEqual(K,s.href)||!n.isOriginEqual(V,s.href))throw new Error("Can't connect to different domain from within an iframe. ("+s.href+", "+K+", "+V+")");d=new t(new m[Ve](K,V));break;case"m":d._send(E.data);break;case"c":d&&d._close(),d=null;break}}};e.attachEvent("message",b),r.postMessage("s")}},wt}var Ho=Kn,Lo=w,Pn=me,jo=fo,we=O,Do=G,Wo=mo,Bo=Jt,Mo=Pe,Fo=go,Yt=Qt,Gi=Qn,Je=Li,Vo=vo,Hn=_o,qo=No,L=function(){},Ki;function _(n,e,t){if(!(this instanceof _))return new _(n,e,t);if(arguments.length<1)throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");Gi.call(this),this.readyState=_.CONNECTING,this.extensions="",this.protocol="",t=t||{},t.protocols_whitelist&&Fo.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."),this._transportsWhitelist=t.transports,this._transportOptions=t.transportOptions||{},this._timeout=t.timeout||0;var i=t.sessionId||8;if(typeof i=="function")this._generateSessionId=i;else if(typeof i=="number")this._generateSessionId=function(){return Pn.string(i)};else throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");this._server=t.server||Pn.numberString(1e3);var r=new Ho(n);if(!r.host||!r.protocol)throw new SyntaxError("The URL '"+n+"' is invalid");if(r.hash)throw new SyntaxError("The URL must not contain a fragment");if(r.protocol!=="http:"&&r.protocol!=="https:")throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '"+r.protocol+"' is not allowed.");var s=r.protocol==="https:";if(Je.protocol==="https:"&&!s&&!we.isLoopbackAddr(r.hostname))throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");e?Array.isArray(e)||(e=[e]):e=[];var o=e.sort();o.forEach(function(u,m){if(!u)throw new SyntaxError("The protocols entry '"+u+"' is invalid.");if(m<o.length-1&&u===o[m+1])throw new SyntaxError("The protocols entry '"+u+"' is duplicated.")});var h=we.getOrigin(Je.href);this._origin=h?h.toLowerCase():null,r.set("pathname",r.pathname.replace(/\/+$/,"")),this.url=r.href,L("using url",this.url),this._urlInfo={nullOrigin:!Mo.hasDomain(),sameOrigin:we.isOriginEqual(this.url,Je.href),sameScheme:we.isSchemeEqual(this.url,Je.href)},this._ir=new qo(this.url,this._urlInfo),this._ir.once("finish",this._receiveInfo.bind(this))}Lo(_,Gi);function Qi(n){return n===1e3||n>=3e3&&n<=4999}_.prototype.close=function(n,e){if(n&&!Qi(n))throw new Error("InvalidAccessError: Invalid code");if(e&&e.length>123)throw new SyntaxError("reason argument has an invalid length");if(!(this.readyState===_.CLOSING||this.readyState===_.CLOSED)){var t=!0;this._close(n||1e3,e||"Normal closure",t)}};_.prototype.send=function(n){if(typeof n!="string"&&(n=""+n),this.readyState===_.CONNECTING)throw new Error("InvalidStateError: The connection has not been established yet");this.readyState===_.OPEN&&this._transport.send(jo.quote(n))};_.version=yi();_.CONNECTING=0;_.OPEN=1;_.CLOSING=2;_.CLOSED=3;_.prototype._receiveInfo=function(n,e){if(this._ir=null,!n){this._close(1002,"Cannot connect to server");return}this._rto=this.countRTO(e),this._transUrl=n.base_url?n.base_url:this.url,n=Bo.extend(n,this._urlInfo);var t=Ki.filterToEnabled(this._transportsWhitelist,n);this._transports=t.main,L(this._transports.length+" enabled transports"),this._connect()};_.prototype._connect=function(){for(var n=this._transports.shift();n;n=this._transports.shift()){if(L("attempt",n.transportName),n.needBody&&(!p.document.body||typeof p.document.readyState<"u"&&p.document.readyState!=="complete"&&p.document.readyState!=="interactive")){this._transports.unshift(n),Do.attachEvent("load",this._connect.bind(this));return}var e=Math.max(this._timeout,this._rto*n.roundTrips||5e3);this._transportTimeoutId=setTimeout(this._transportTimeout.bind(this),e);var t=we.addPath(this._transUrl,"/"+this._server+"/"+this._generateSessionId()),i=this._transportOptions[n.transportName],r=new n(t,this._transUrl,i);r.on("message",this._transportMessage.bind(this)),r.once("close",this._transportClose.bind(this)),r.transportName=n.transportName,this._transport=r;return}this._close(2e3,"All transports failed",!1)};_.prototype._transportTimeout=function(){this.readyState===_.CONNECTING&&(this._transport&&this._transport.close(),this._transportClose(2007,"Transport timed out"))};_.prototype._transportMessage=function(n){var e=this,t=n.slice(0,1),i=n.slice(1),r;switch(t){case"o":this._open();return;case"h":this.dispatchEvent(new Yt("heartbeat")),L("heartbeat",this.transport);return}if(i)try{r=JSON.parse(i)}catch{}if(!(typeof r>"u"))switch(t){case"a":Array.isArray(r)&&r.forEach(function(s){L("message",e.transport),e.dispatchEvent(new Hn(s))});break;case"m":L("message",this.transport),this.dispatchEvent(new Hn(r));break;case"c":Array.isArray(r)&&r.length===2&&this._close(r[0],r[1],!0);break}};_.prototype._transportClose=function(n,e){if(L("_transportClose",this.transport),this._transport&&(this._transport.removeAllListeners(),this._transport=null,this.transport=null),!Qi(n)&&n!==2e3&&this.readyState===_.CONNECTING){this._connect();return}this._close(n,e)};_.prototype._open=function(){L("_open",this._transport&&this._transport.transportName,this.readyState),this.readyState===_.CONNECTING?(this._transportTimeoutId&&(clearTimeout(this._transportTimeoutId),this._transportTimeoutId=null),this.readyState=_.OPEN,this.transport=this._transport.transportName,this.dispatchEvent(new Yt("open")),L("connected",this.transport)):this._close(1006,"Server lost session")};_.prototype._close=function(n,e,t){L("_close",this.transport,n,e,t,this.readyState);var i=!1;if(this._ir&&(i=!0,this._ir.close(),this._ir=null),this._transport&&(this._transport.close(),this._transport=null,this.transport=null),this.readyState===_.CLOSED)throw new Error("InvalidStateError: SockJS has already been closed");this.readyState=_.CLOSING,setTimeout((function(){this.readyState=_.CLOSED,i&&this.dispatchEvent(new Yt("error"));var r=new Vo;r.wasClean=t||!1,r.code=n||1e3,r.reason=e,this.dispatchEvent(r),this.onmessage=this.onclose=this.onerror=null}).bind(this),0)};_.prototype.countRTO=function(n){return n>100?4*n:300+n};var zo=function(n){return Ki=Wo(n),Po()(_,n),_},Xo=no,Jo=zo(Xo);"_sockjs_onload"in p&&setTimeout(p._sockjs_onload,1);const Go=Sr(Jo);var Ko=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,ce=(n,e,t,i)=>{for(var r=i>1?void 0:i?Qo(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ko(e,t,r),r};let M=class extends ne{constructor(){super(...arguments),this.token="",this.messages=[],this.roomId="lobby",this.roomDraft="lobby",this.draftMessage="",this.connectionState="disconnected",this.stompClient=null,this.roomSubscription=null,this.handleRoomInput=n=>{this.roomDraft=n.target.value},this.joinRoom=n=>{n.preventDefault();const e=this.roomDraft.trim()||"lobby";this.roomId=e,this.messages=[],this.subscribeToRoom()},this.handleMessageInput=n=>{this.draftMessage=n.target.value},this.sendMessage=n=>{var t;n.preventDefault();const e=this.draftMessage.trim();!e||!((t=this.stompClient)!=null&&t.connected)||(this.stompClient.publish({destination:"/app/chat.send",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({roomId:this.roomId,content:e})}),this.draftMessage="")},this.logout=()=>{this.dispatchEvent(new CustomEvent("logout",{bubbles:!0,composed:!0}))}}connectedCallback(){super.connectedCallback(),this.token&&this.connectWebSocket()}updated(n){var e;n.has("token")&&(this.token?this.connectWebSocket():this.disconnectWebSocket()),n.has("roomId")&&((e=this.stompClient)!=null&&e.connected)&&this.subscribeToRoom()}disconnectedCallback(){super.disconnectedCallback(),this.disconnectWebSocket()}connectWebSocket(){this.disconnectWebSocket(),this.connectionState="connecting",this.stompClient=new $r.Client({webSocketFactory:()=>new Go("/ws"),reconnectDelay:5e3,connectHeaders:{Authorization:`Bearer ${this.token}`},debug:n=>{console.log(n)},onConnect:()=>{this.connectionState="connected",this.subscribeToRoom()},onWebSocketClose:()=>{this.connectionState="disconnected"},onStompError:n=>{this.connectionState="error",console.error("Broker error: "+n.headers.message)}}),this.stompClient.activate()}disconnectWebSocket(){var n;(n=this.roomSubscription)==null||n.unsubscribe(),this.roomSubscription=null,this.stompClient&&(this.stompClient.deactivate(),this.stompClient=null),this.connectionState="disconnected"}subscribeToRoom(){var n,e;(n=this.stompClient)!=null&&n.connected&&((e=this.roomSubscription)==null||e.unsubscribe(),this.roomSubscription=this.stompClient.subscribe(`/topic/chat.${this.roomId}`,t=>{const i=JSON.parse(t.body);this.messages=[...this.messages,i],this.scrollMessagesToBottom()}))}scrollMessagesToBottom(){const n=this.renderRoot.querySelector(".messages");n&&(n.scrollTop=n.scrollHeight)}statusLabel(){switch(this.connectionState){case"connected":return"Connected";case"connecting":return"Connecting";case"error":return"Connection error";default:return"Disconnected"}}statusClass(){return this.connectionState==="connected"?"connected":this.connectionState==="error"?"error":""}render(){return ee`
      <div class="layout">
        <aside class="sidebar">
          <div class="box">
            <h2>Session</h2>
            <p class="hint">Signed in with JWT-secured WebSocket access.</p>
            <div style="height: 14px"></div>
            <div class="status">
              <span class="status-dot ${this.statusClass()}"></span>
              ${this.statusLabel()}
            </div>
            <div style="height: 18px"></div>
            <button class="secondary" @click=${this.logout}>Logout</button>
          </div>

          <div style="height: 18px"></div>

          <div class="box">
            <h3>Join room</h3>
            <p class="hint">Messages flow to Kafka and back to this room topic.</p>
            <form @submit=${this.joinRoom} style="margin-top: 14px">
              <label>
                Room ID
                <input .value=${this.roomDraft} @input=${this.handleRoomInput} placeholder="lobby" />
              </label>
              <button class="primary" type="submit">Join</button>
            </form>
          </div>
        </aside>

        <main class="panel">
          <div class="topline">
            <div>
              <h2>Room: ${this.roomId}</h2>
              <p class="hint">Send a message with STOMP. The backend publishes it to Kafka and broadcasts it here.</p>
            </div>
            <div class="status">
              <span class="status-dot ${this.statusClass()}"></span>
              ${this.statusLabel()}
            </div>
          </div>

          <section class="box messages">
            ${this.messages.length===0?ee`<div class="hint">No messages yet. Start the conversation.</div>`:this.messages.map(n=>ee`
                    <article class="message">
                      <div class="meta">
                        <span>${n.sender||"unknown"}</span>
                        <span>${n.timestamp||""}</span>
                      </div>
                      <div class="content">${n.content}</div>
                    </article>
                  `)}
          </section>

          <form class="box" @submit=${this.sendMessage}>
            <label>
              Message
              <textarea
                .value=${this.draftMessage}
                @input=${this.handleMessageInput}
                placeholder="Write a message and press Send"
              ></textarea>
            </label>
            <div class="actions">
              <button class="primary" type="submit">Send</button>
            </div>
          </form>
        </main>
      </div>
    `}};M.styles=Ht`
    :host {
      display: block;
      color: #e5eefc;
    }

    .layout {
      display: grid;
      grid-template-columns: 280px 1fr;
      min-height: 70vh;
    }

    .sidebar {
      padding: 24px;
      border-right: 1px solid rgba(148, 163, 184, 0.14);
      background: rgba(8, 14, 25, 0.86);
    }

    .panel {
      padding: 24px;
      display: grid;
      gap: 18px;
    }

    h2, h3 {
      margin: 0;
    }

    .status {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(148, 163, 184, 0.12);
      color: #d7e3f7;
      font-size: 0.92rem;
    }

    .status-dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: #f59e0b;
    }

    .status-dot.connected {
      background: #22c55e;
    }

    .status-dot.error {
      background: #ef4444;
    }

    .box {
      border: 1px solid rgba(148, 163, 184, 0.16);
      border-radius: 18px;
      background: rgba(2, 6, 23, 0.65);
      padding: 18px;
    }

    .messages {
      min-height: 380px;
      max-height: 460px;
      overflow-y: auto;
      display: grid;
      gap: 12px;
      align-content: start;
    }

    .message {
      padding: 14px 16px;
      border-radius: 18px;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(148, 163, 184, 0.12);
    }

    .meta {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      color: #94a3b8;
      font-size: 0.84rem;
      margin-bottom: 8px;
    }

    .content {
      font-size: 1rem;
      line-height: 1.5;
      color: #eef4ff;
      white-space: pre-wrap;
      word-break: break-word;
    }

    form {
      display: grid;
      gap: 12px;
    }

    label {
      display: grid;
      gap: 8px;
      color: #dbe7fb;
    }

    input {
      border: 1px solid rgba(148, 163, 184, 0.16);
      border-radius: 14px;
      background: rgba(2, 6, 23, 0.7);
      color: #eef4ff;
      padding: 14px 16px;
      font-size: 1rem;
      outline: none;
    }

    textarea {
      resize: vertical;
      min-height: 96px;
      border: 1px solid rgba(148, 163, 184, 0.16);
      border-radius: 16px;
      background: rgba(2, 6, 23, 0.7);
      color: #eef4ff;
      padding: 14px 16px;
      font-size: 1rem;
      outline: none;
      font-family: inherit;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    button {
      border: 0;
      border-radius: 999px;
      padding: 12px 18px;
      font-weight: 700;
      cursor: pointer;
    }

    button.primary {
      background: linear-gradient(135deg, #06b6d4, #3b82f6);
      color: white;
    }

    button.secondary {
      background: rgba(148, 163, 184, 0.12);
      color: #e5eefc;
      border: 1px solid rgba(148, 163, 184, 0.16);
    }

    .topline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;
    }

    .hint {
      color: #9bb0cf;
      margin: 0;
    }

    @media (max-width: 900px) {
      .layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        border-right: 0;
        border-bottom: 1px solid rgba(148, 163, 184, 0.14);
      }
    }
  `;ce([Fn({type:String})],M.prototype,"token",2);ce([U()],M.prototype,"messages",2);ce([U()],M.prototype,"roomId",2);ce([U()],M.prototype,"roomDraft",2);ce([U()],M.prototype,"draftMessage",2);ce([U()],M.prototype,"connectionState",2);M=ce([Dt("chat-page")],M);var Zo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,Zi=(n,e,t,i)=>{for(var r=i>1?void 0:i?Yo(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Zo(e,t,r),r};let Ye=class extends ne{constructor(){super(...arguments),this.token=localStorage.getItem("token")||"",this.handleLogin=n=>{const e=n;this.token=e.detail.token,localStorage.setItem("token",this.token)},this.handleLogout=()=>{this.token="",localStorage.removeItem("token")}}render(){return ee`
      <div class="shell">
        <div class="hero">
          <div>
            <h1 class="title">Kafka Chat</h1>
            <p class="subtitle">
              Spring Boot, WebSocket, JWT, Kafka, and Lit working together in a single real-time chat flow.
            </p>
          </div>
          <div class="badge">Room-based realtime messaging</div>
        </div>

        <div class="panel">
          ${this.token?ee`<chat-page .token=${this.token} @logout=${this.handleLogout}></chat-page>`:ee`<login-page @login=${this.handleLogin}></login-page>`}
        </div>
      </div>
    `}};Ye.styles=Ht`
    :host {
      display: block;
      min-height: 100vh;
      color: #e5eefc;
    }

    .shell {
      width: min(1120px, calc(100vw - 32px));
      margin: 0 auto;
      padding: 32px 0 40px;
    }

    .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 24px;
    }

    .title {
      margin: 0;
      font-size: clamp(2rem, 4vw, 3.5rem);
      line-height: 1;
      letter-spacing: -0.04em;
    }

    .subtitle {
      margin: 10px 0 0;
      color: #9bb0cf;
      max-width: 60ch;
    }

    .badge {
      padding: 10px 14px;
      border: 1px solid rgba(148, 163, 184, 0.2);
      border-radius: 999px;
      background: rgba(15, 23, 42, 0.65);
      color: #d7e3f7;
      font-size: 0.92rem;
      backdrop-filter: blur(12px);
    }

    .panel {
      border: 1px solid rgba(148, 163, 184, 0.16);
      border-radius: 24px;
      background: rgba(7, 13, 24, 0.78);
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(16px);
      overflow: hidden;
    }
  `;Zi([U()],Ye.prototype,"token",2);Ye=Zi([Dt("chat-app")],Ye);document.body.style.margin="0";
