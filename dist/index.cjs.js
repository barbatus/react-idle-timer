var bt=Object.create,ae=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var wt=Object.getOwnPropertyNames;var yt=Object.getPrototypeOf,Lt=Object.prototype.hasOwnProperty;var He=t=>ae(t,"__esModule",{value:!0});var kt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Mt=(t,e)=>{for(var r in e)ae(t,r,{get:e[r],enumerable:!0})},xt=(t,e,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of wt(e))!Lt.call(t,n)&&n!=="default"&&ae(t,n,{get:()=>e[n],enumerable:!(r=gt(e,n))||r.enumerable});return t},K=t=>xt(He(ae(t!=null?bt(yt(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var qe=kt((ue,Ge)=>{(function(t,e){typeof ue=="object"&&typeof Ge!="undefined"?e(ue):typeof define=="function"&&define.amd?define(["exports"],e):(t=typeof globalThis!="undefined"?globalThis:t||self,e(t.fastUniqueNumbers={}))})(ue,function(t){"use strict";var e=function(p){return function(v){var o=p(v);return v.add(o),o}},r=function(p){return function(v,o){return p.set(v,o),o}},n=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,l=536870912,c=l*2,E=function(p,v){return function(o){var k=v.get(o),x=k===void 0?o.size:k<c?k+1:0;if(!o.has(x))return p(o,x);if(o.size<l){for(;o.has(x);)x=Math.floor(Math.random()*c);return p(o,x)}if(o.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;o.has(x);)x=Math.floor(Math.random()*n);return p(o,x)}},M=new WeakMap,te=r(M),f=E(te,M),m=e(f);t.addUniqueNumber=m,t.generateUniqueNumber=f,Object.defineProperty(t,"__esModule",{value:!0})})});He(exports);Mt(exports,{DEFAULT_EVENTS:()=>de,IdleTimerConsumer:()=>lt,IdleTimerContext:()=>ee,IdleTimerProvider:()=>at,createMocks:()=>et,useIdleTimer:()=>j,useIdleTimerContext:()=>ut,withIdleTimer:()=>Ve,workerTimers:()=>Y});var le=K(require("react"));function Ve(t){return(0,le.forwardRef)(function(r,n){let l={...r};!l.onPrompt&&t.prototype.onPrompt&&(l.onPrompt=()=>{t.prototype.onPrompt()}),!l.onIdle&&t.prototype.onIdle&&(l.onIdle=()=>{t.prototype.onIdle()}),!l.onActive&&t.prototype.onActive&&(l.onActive=M=>{t.prototype.onActive(M)}),!l.onAction&&t.prototype.onAction&&(l.onAction=M=>{t.prototype.onAction(M)});let c=t.prototype.componentDidMount;c&&(t.prototype.componentDidMount=()=>{setTimeout(()=>{c()})});let E=j(l);return typeof n=="function"?n(E):n&&(n.current=E),le.default.createElement(t,{...r,...E})})}var i=K(require("react"));var Q=K(qe());var je=t=>t.method!==void 0&&t.method==="call";var Ye=t=>t.error===null&&typeof t.id=="number";var Je=t=>{let e=new Map([[0,()=>{}]]),r=new Map([[0,()=>{}]]),n=new Map,l=new Worker(t);return l.addEventListener("message",({data:f})=>{if(je(f)){let{params:{timerId:m,timerType:d}}=f;if(d==="interval"){let p=e.get(m);if(typeof p=="number"){let v=n.get(p);if(v===void 0||v.timerId!==m||v.timerType!==d)throw new Error("The timer is in an undefined state.")}else if(typeof p!="undefined")p();else throw new Error("The timer is in an undefined state.")}else if(d==="timeout"){let p=r.get(m);if(typeof p=="number"){let v=n.get(p);if(v===void 0||v.timerId!==m||v.timerType!==d)throw new Error("The timer is in an undefined state.")}else if(typeof p!="undefined")p(),r.delete(m);else throw new Error("The timer is in an undefined state.")}}else if(Ye(f)){let{id:m}=f,d=n.get(m);if(d===void 0)throw new Error("The timer is in an undefined state.");let{timerId:p,timerType:v}=d;n.delete(m),v==="interval"?e.delete(p):r.delete(p)}else{let{error:{message:m}}=f;throw new Error(m)}}),{clearInterval:f=>{let m=(0,Q.generateUniqueNumber)(n);n.set(m,{timerId:f,timerType:"interval"}),e.set(f,m),l.postMessage({id:m,method:"clear",params:{timerId:f,timerType:"interval"}})},clearTimeout:f=>{let m=(0,Q.generateUniqueNumber)(n);n.set(m,{timerId:f,timerType:"timeout"}),r.set(f,m),l.postMessage({id:m,method:"clear",params:{timerId:f,timerType:"timeout"}})},setInterval:(f,m)=>{let d=(0,Q.generateUniqueNumber)(e);return e.set(d,()=>{f(),typeof e.get(d)=="function"&&l.postMessage({id:null,method:"set",params:{delay:m,now:performance.now(),timerId:d,timerType:"interval"}})}),l.postMessage({id:null,method:"set",params:{delay:m,now:performance.now(),timerId:d,timerType:"interval"}}),d},setTimeout:(f,m)=>{let d=(0,Q.generateUniqueNumber)(r);return r.set(d,f),l.postMessage({id:null,method:"set",params:{delay:m,now:performance.now(),timerId:d,timerType:"timeout"}}),d}}};var Z=null,ze=(t,e)=>()=>{if(Z!==null)return Z;let r=new Blob([e],{type:"application/javascript; charset=utf-8"}),n=URL.createObjectURL(r);return Z=t(n),Z.setTimeout(()=>URL.revokeObjectURL(n),0),Z};var Xe=`(()=>{"use strict";const e=new Map,t=new Map,r=(e,t)=>{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);return{expected:r+o,remainingDelay:o}},o=(e,t,r,i)=>{const s=performance.now();s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;if("interval"===i)(t=>{const r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});else{if("timeout"!==i)throw new Error('The given type "'.concat(i,'" is not supported'));(e=>{const r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}else{if("set"!==s.method)throw new Error('The given method "'.concat(s.method,'" is not supported'));{const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;if("interval"===d)((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);else{if("timeout"!==d)throw new Error('The given type "'.concat(d,'" is not supported'));((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();`;var ce=ze(Je,Xe),$e=t=>ce().clearInterval(t),Ke=t=>ce().clearTimeout(t),Qe=(t,e)=>ce().setInterval(t,e),Ze=(t,e)=>ce().setTimeout(t,e);var g=(typeof window=="undefined"?"undefined":typeof window)=="object";var T={setTimeout:g?setTimeout.bind(window):setTimeout,clearTimeout:g?clearTimeout.bind(window):clearTimeout,setInterval:g?setInterval.bind(window):setInterval,clearInterval:g?clearInterval.bind(window):clearInterval},Y={setTimeout:Ze,clearTimeout:Ke,setInterval:Qe,clearInterval:$e};function et(){T.setTimeout=setTimeout,T.clearTimeout=clearTimeout,T.setInterval=setInterval,T.clearInterval=clearInterval,Y.setTimeout=setTimeout,Y.clearTimeout=clearTimeout,Y.setInterval=setInterval,Y.clearInterval=clearInterval}function tt(t){T.setTimeout=t.setTimeout,T.clearTimeout=t.clearTimeout,T.setInterval=t.setInterval,T.clearInterval=t.clearInterval}var J={},rt=class{constructor(e){this.closed=!1;this.mc=new MessageChannel;this.name=e,J[e]=J[e]||[],J[e].push(this),this.mc.port1.start(),this.mc.port2.start(),this.onStorage=this.onStorage.bind(this),window.addEventListener("storage",this.onStorage)}onStorage(e){if(e.storageArea!==window.localStorage||e.key.substring(0,this.name.length)!==this.name||e.newValue===null)return;let r=JSON.parse(e.newValue);this.mc.port2.postMessage(r)}postMessage(e){if(this.closed)throw new Error("InvalidStateError");let r=JSON.stringify(e),n=`${this.name}:${String(Date.now())}${String(Math.random())}`;window.localStorage.setItem(n,r),T.setTimeout(()=>{window.localStorage.removeItem(n)},500),J[this.name].forEach(l=>{l!==this&&l.mc.port2.postMessage(JSON.parse(r))})}close(){if(this.closed)return;this.closed=!0,this.mc.port1.close(),this.mc.port2.close(),window.removeEventListener("storage",this.onStorage);let e=J[this.name].indexOf(this);J[this.name].splice(e,1)}get onmessage(){return this.mc.port1.onmessage}set onmessage(e){this.mc.port1.onmessage=e}get onmessageerror(){return this.mc.port1.onmessageerror}set onmessageerror(e){this.mc.port1.onmessageerror=e}addEventListener(e,r){return this.mc.port1.addEventListener(e,r)}removeEventListener(e,r){return this.mc.port1.removeEventListener(e,r)}dispatchEvent(e){return this.mc.port1.dispatchEvent(e)}},nt=typeof window=="undefined"?void 0:typeof window.BroadcastChannel=="function"?window.BroadcastChannel:rt;function ot(t=0){return new Promise(e=>T.setTimeout(e,t))}function me(){return Math.random().toString(36).substring(2)}var u;(function(o){o[o.APPLY=0]="APPLY",o[o.TELL=1]="TELL",o[o.CLOSE=2]="CLOSE",o[o.REGISTER=3]="REGISTER",o[o.DEREGISTER=4]="DEREGISTER",o[o.IDLE=5]="IDLE",o[o.ACTIVE=6]="ACTIVE",o[o.PROMPT=7]="PROMPT",o[o.START=8]="START",o[o.RESET=9]="RESET",o[o.ACTIVATE=10]="ACTIVATE",o[o.PAUSE=11]="PAUSE",o[o.RESUME=12]="RESUME",o[o.MESSAGE=13]="MESSAGE"})(u||(u={}));var Le=class{constructor(e,r){this.token=me();this.isLeader=!1;this.isDead=!1;this.isApplying=!1;this.reApply=!1;this.intervals=[];this.listeners=[];this.channel=e,this.options=r,this.apply=this.apply.bind(this),this.awaitLeadership=this.awaitLeadership.bind(this),this.sendAction=this.sendAction.bind(this)}async apply(){if(this.isLeader||this.isDead)return!1;if(this.isApplying)return this.reApply=!0,!1;this.isApplying=!0;let e=!1,r=n=>{let{token:l,action:c}=n.data;l!==this.token&&(c===u.APPLY&&l>this.token&&(e=!0),c===u.TELL&&(e=!0))};this.channel.addEventListener("message",r);try{return this.sendAction(u.APPLY),await ot(this.options.responseTime),this.channel.removeEventListener("message",r),this.isApplying=!1,e?this.reApply?this.apply():!1:(this.assumeLead(),!0)}catch{return!1}}awaitLeadership(){if(this.isLeader)return Promise.resolve();let e=!1,r=null;return new Promise(n=>{let l=()=>{if(e)return;e=!0,T.clearInterval(r);let E=this.intervals.indexOf(r);this.intervals.splice(E,1),this.channel.removeEventListener("message",c),n()};r=T.setInterval(()=>{this.apply().then(()=>{this.isLeader&&l()})},this.options.fallbackInterval),this.intervals.push(r);let c=E=>{let{action:M}=E.data;M===u.CLOSE&&this.apply().then(()=>{this.isLeader&&l()})};this.channel.addEventListener("message",c)})}sendAction(e){this.channel.postMessage({action:e,token:this.token})}assumeLead(){this.isLeader=!0;let e=r=>{let{action:n}=r.data;n===u.APPLY&&this.sendAction(u.TELL)};return this.channel.addEventListener("message",e),this.listeners.push(e),this.sendAction(u.TELL)}waitForLeadership(){return this.deferred?this.deferred:(this.deferred=this.awaitLeadership(),this.deferred)}close(){this.isDead||(this.isDead=!0,this.isLeader=!1,this.sendAction(u.CLOSE),this.listeners.forEach(e=>this.channel.removeEventListener("message",e)),this.intervals.forEach(e=>T.clearInterval(e)))}};var L;(function(n){n[n.PROMPTED=0]="PROMPTED",n[n.ACTIVE=1]="ACTIVE",n[n.IDLE=2]="IDLE"})(L||(L={}));var ke=class{constructor(e){this.token=me();this.registry=new Map;this.allIdle=!1;let{channelName:r}=e;if(this.options=e,this.channel=new nt(r),this.registry.set(this.token,1),e.leaderElection){let n={fallbackInterval:2e3,responseTime:100};this.elector=new Le(this.channel,n),this.elector.waitForLeadership()}this.channel.addEventListener("message",n=>{let{action:l,token:c,data:E}=n.data;switch(l){case u.REGISTER:this.registry.set(c,2);break;case u.DEREGISTER:this.registry.delete(c);break;case u.IDLE:this.idle(c);break;case u.ACTIVE:this.active(c);break;case u.PROMPT:this.prompt(c);break;case u.START:this.start(c);break;case u.RESET:this.reset(c);break;case u.ACTIVATE:this.activate(c);break;case u.PAUSE:this.pause(c);break;case u.RESUME:this.resume(c);break;case u.MESSAGE:this.options.onMessage(E);break}}),this.send(u.REGISTER)}get isLeader(){if(!this.elector)throw new Error('\u274C Leader election is not enabled. To Enable it set the "leaderElection" property to true.');return this.elector.isLeader}prompt(e=this.token){this.registry.set(e,0);let r=[...this.registry.values()].every(n=>n===0);e===this.token&&this.send(u.PROMPT),r&&this.options.onPrompt()}idle(e=this.token){this.registry.set(e,2);let r=[...this.registry.values()].every(n=>n===2);e===this.token&&this.send(u.IDLE),!this.allIdle&&r&&(this.allIdle=!0,this.options.onIdle())}active(e=this.token){this.allIdle=!1,this.registry.set(e,1);let r=[...this.registry.values()].some(n=>n===1);e===this.token&&this.send(u.ACTIVE),r&&this.options.onActive()}start(e=this.token){this.allIdle=!1,this.registry.set(e,1),e===this.token?this.send(u.START):this.options.start(!0)}reset(e=this.token){this.allIdle=!1,this.registry.set(e,1),e===this.token?this.send(u.RESET):this.options.reset(!0)}activate(e=this.token){this.allIdle=!1,this.registry.set(e,1),e===this.token?this.send(u.ACTIVATE):this.options.activate(!0)}pause(e=this.token){e===this.token?this.send(u.PAUSE):this.options.pause(!0)}resume(e=this.token){e===this.token?this.send(u.RESUME):this.options.resume(!0)}message(e){try{this.channel.postMessage({action:u.MESSAGE,token:this.token,data:e})}catch{}}send(e){try{this.channel.postMessage({action:e,token:this.token})}catch{}}close(){this.options.leaderElection&&this.elector.close(),this.send(u.DEREGISTER),this.channel.close()}};var it=g?document:null,de=["mousemove","keydown","wheel","DOMMouseScroll","mousewheel","mousedown","touchstart","touchmove","MSPointerDown","MSPointerMove","visibilitychange"];var pe=K(require("react"));function D(t){let e=(0,pe.useRef)(t);return(0,pe.useEffect)(()=>{e.current=t},[t]),e}function st(t,e){let r;function n(...l){r&&clearTimeout(r),r=setTimeout(()=>{t(...l),r=null},e)}return n.cancel=function(){clearTimeout(r)},n}function fe(t,e){let r=0;return function(...n){let l=new Date().getTime();if(!(l-r<e))return r=l,t(...n)}}var I=()=>g?performance.now():Date.now();function j({timeout:t=1e3*60*20,promptTimeout:e=0,element:r=it,events:n=de,timers:l=void 0,immediateEvents:c=[],onPrompt:E=()=>{},onIdle:M=()=>{},onActive:te=()=>{},onAction:f=()=>{},onMessage:m=()=>{},debounce:d=0,throttle:p=0,eventsThrottle:v=200,startOnMount:o=!0,startManually:k=!1,stopOnIdle:x=!1,crossTab:H=!1,name:Me="idle-timer",syncTimers:X=0,leaderElection:xe=!1}={}){let V=(0,i.useRef)(I()),Pe=(0,i.useRef)(Date.now()),re=(0,i.useRef)(I()),C=(0,i.useRef)(null),N=(0,i.useRef)(null),Ae=(0,i.useRef)(null),G=(0,i.useRef)(0),h=(0,i.useRef)(!0),A=(0,i.useRef)(!1),F=(0,i.useRef)(!0),$=(0,i.useRef)(!1),b=(0,i.useRef)(!1),w=(0,i.useRef)(0),R=(0,i.useRef)(0),O=(0,i.useRef)(null),a=(0,i.useRef)(null),S=D(t),ne=D(e),ct=D(x),Se=(0,i.useRef)(c),he=(0,i.useRef)(r),ve=(0,i.useRef)([...new Set([...n,...c]).values()]),Re=D(M),Te=D(te),Oe=D(E),oe=D(m),De=D(f),U=(0,i.useMemo)(()=>{let s=y=>De.current(y);return d>0?st(s,d):p>0?fe(s,p):s},[p,d]),Ce=(0,i.useRef)();(0,i.useEffect)(()=>{H&&X&&(Ce.current=fe(()=>{a.current.active()},X))},[H,X]);let P=()=>{O.current!==null&&(T.clearTimeout(O.current),O.current=null)},W=(s,y=!0)=>{P(),O.current=T.setTimeout(ie,s||S.current),y&&(N.current=I()),Ae.current=Date.now()},Ne=s=>{w.current=0,R.current=I(),b.current=!0,W(ne.current,!1),Oe.current(s)},_e=()=>{P(),h.current=!0,C.current=I(),ct.current?B():b.current&&(R.current=0,b.current=!1),Re.current()},Ie=s=>{P(),b.current=!1,R.current=0,h.current=!1,G.current+=I()-C.current,_(),W(),Te.current(s)},ie=s=>{if(!h.current){if(U.cancel&&U.cancel(),ne.current>0&&!b.current){a.current?a.current.prompt():Ne(s);return}a.current?a.current.idle():_e();return}a.current?a.current.active():Ie(s)},Fe=s=>{if(U(s),b.current)return;if(P(),!h.current&&Se.current.includes(s.type)){ie(s);return}if(!h.current&&Date.now()-Ae.current>=S.current){ie(s);return}let y=I()-N.current;if(h.current&&!x||!h.current&&y>=S.current){ie(s);return}A.current=!1,w.current=0,R.current=0,W(),H&&X&&Ce.current()},se=(0,i.useRef)();(0,i.useEffect)(()=>{let s=$.current;s&&B(),v>0?se.current=fe(Fe,v):se.current=Fe,s&&_()},[v,p,d,De,H,X]);let _=()=>{!g||$.current||(ve.current.forEach(s=>{he.current.addEventListener(s,se.current,{capture:!0,passive:!0})}),$.current=!0)},B=(s=!1)=>{!g||($.current||s)&&(ve.current.forEach(y=>{he.current.removeEventListener(y,se.current,{capture:!0})}),$.current=!1)},q=(0,i.useCallback)(s=>{P(),_(),h.current=!1,b.current=!1,A.current=!1,w.current=0,R.current=0,a.current&&!s&&a.current.start(),W()},[O,h,S,a]),Ee=(0,i.useCallback)(s=>{P(),_(),h.current=!1,b.current=!1,A.current=!1,w.current=0,R.current=0,V.current=I(),G.current=0,re.current=I(),a.current&&!s&&a.current.reset(),k||W()},[O,h,S,k,a]),Ue=(0,i.useCallback)(s=>{P(),_(),(h.current||b.current)&&Ie(),h.current=!1,b.current=!1,A.current=!1,w.current=0,R.current=0,re.current=I(),a.current&&!s&&a.current.activate(),W()},[O,h,S,a]),be=(0,i.useCallback)((s=!1)=>A.current?!1:(w.current=We(),A.current=!0,B(),P(),a.current&&!s&&a.current.pause(),!0),[O,a]),ge=(0,i.useCallback)((s=!1)=>A.current?(A.current=!1,b.current||_(),h.current||W(w.current),R.current&&(R.current=I()),a.current&&!s&&a.current.resume(),!0):!1,[O,S,w,a]),mt=(0,i.useCallback)((s,y)=>{a.current?(y&&oe.current(s),a.current.message(s)):y&&oe.current(s)},[m]),dt=(0,i.useCallback)(()=>h.current,[h]),pt=(0,i.useCallback)(()=>b.current,[b]),ft=(0,i.useCallback)(()=>{if(!a.current)throw new Error('\u274C Cross Tab feature is not enabled. To enable it set the "crossTab" property to true.');return a.current.isLeader},[a]),ht=(0,i.useCallback)(()=>{if(!a.current)throw new Error('\u274C Cross Tab feature is not enabled. To enable it set the "crossTab" property to true.');return a.current.token},[a]),We=(0,i.useCallback)(()=>{if(A.current)return w.current;let s=w.current?w.current:ne.current+S.current,y=N.current?I()-N.current:0,Be=Math.floor(s-y);return Be<0?0:Math.abs(Be)},[S,ne,b,w,N]),vt=(0,i.useCallback)(()=>Math.round(I()-re.current),[re]),we=(0,i.useCallback)(()=>Math.round(I()-V.current),[V]),Tt=(0,i.useCallback)(()=>C.current?new Date(Pe.current-V.current+C.current):null,[C]),It=(0,i.useCallback)(()=>N.current?new Date(Pe.current-V.current+N.current):null,[N]),ye=(0,i.useCallback)(()=>h.current?Math.round(I()-C.current+G.current):Math.round(G.current),[C,G]),Et=(0,i.useCallback)(()=>{let s=Math.round(we()-ye());return s>=0?s:0},[V,C,G,we,ye]);return(0,i.useEffect)(()=>{if(d>0&&p>0)throw new Error("\u274C onAction can either be throttled or debounced, not both.");l&&tt(l);let s=()=>{a.current&&a.current.close(),U.cancel&&U.cancel(),P(),B(!0)};return g&&window.addEventListener("beforeunload",s),()=>{g&&window.removeEventListener("beforeunload",s),a.current&&a.current.close(),U.cancel&&U.cancel(),P(),B(!0)}},[]),(0,i.useEffect)(()=>{a.current&&a.current.close(),H?a.current=new ke({channelName:Me,leaderElection:xe,onPrompt:()=>{Ne()},onIdle:()=>{_e()},onActive:()=>{Ie()},onMessage:oe.current,start:q,reset:Ee,activate:Ue,pause:be,resume:ge}):a.current=null},[H,Me,xe,Oe,Re,Te,oe,q,Ee,be,ge]),(0,i.useEffect)(()=>{P(),B(!0),F.current||(A.current=!0,h.current=!0,w.current=0),!k&&(o?q():_())},[k,o,F]),(0,i.useEffect)(()=>{if(!F.current){let s=[...new Set([...n,...c]).values()];if(B(),ve.current=s,he.current=r,Se.current=c,k)return;o?q():_()}},[r,JSON.stringify(n),JSON.stringify(c),F,k,o]),(0,i.useEffect)(()=>{if(F.current)F.current=!1;else{if(S.current=t,k)return;h.current&&(Te.current(),a.current&&a.current.active()),q()}},[t,a,k,F,h]),{message:mt,start:q,reset:Ee,activate:Ue,pause:be,resume:ge,isIdle:dt,isPrompted:pt,isLeader:ft,getTabId:ht,getRemainingTime:We,getElapsedTime:vt,getTotalElapsedTime:we,getLastIdleTime:Tt,getLastActiveTime:It,getTotalIdleTime:ye,getTotalActiveTime:Et}}var z=K(require("react"));var ee=(0,z.createContext)(null);function at(t){let e=j(t);return z.default.createElement(ee.Provider,{value:e},t.children)}var lt=ee.Consumer;function ut(){return(0,z.useContext)(ee)}