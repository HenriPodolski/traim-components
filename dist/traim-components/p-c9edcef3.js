const e="traim-components";let t,n,l,o=!1,s=!1,c=!1,r=0,i=!1;const a="undefined"!=typeof window?window:{},f=a.CSS,u=a.document||{head:{}},d={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},p=(()=>(u.head.attachShadow+"").indexOf("[native")>-1)(),m=e=>Promise.resolve(e),$=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),b=(e,t,n)=>{n&&n.map(([n,l,o])=>{const s=h(e,n),c=y(t,o),r=w(n);d.ael(s,l,c,r),(t.o=t.o||[]).push(()=>d.rel(s,l,c,r))})},y=(e,t)=>n=>{256&e.t?e.s[t](n):(e.i=e.i||[]).push([t,n])},h=(e,t)=>8&t?a:e,w=e=>0!=(2&e),g=new WeakMap,_=e=>"sc-"+e.u,j={},k=e=>"object"==(e=typeof e)||"function"===e,v="undefined"!=typeof Deno,M=!(v||"undefined"==typeof global||"function"!=typeof require||!global.process||"string"!=typeof __filename||global.origin&&"string"==typeof global.origin),S=(v&&Deno,M?process:v&&Deno,M?process:v&&Deno,(e,t,...n)=>{let l=null,o=null,s=!1,c=!1,r=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!k(l))&&(l+=""),s&&c?r[r.length-1].p+=l:r.push(s?C(null,l):l),c=s)};if(i(n),t){t.name&&(o=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}const a=C(e,null);return a.m=t,r.length>0&&(a.$=r),a.h=o,a}),C=(e,t)=>({t:0,g:e,p:t,_:null,$:null,m:null,h:null}),O={},R=(e,t,n,l,o,s)=>{if(n!==l){let r=de(e,t),i=t.toLowerCase();if("class"===t){const t=e.classList,o=P(n),s=P(l);t.remove(...o.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!o.includes(e)))}else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const i=k(l);if((r||i&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let o=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(c){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&s||o)&&!i&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):de(a,i)?i.slice(2):i[2]+t.slice(3),n&&d.rel(e,t,n,!1),l&&d.ael(e,t,l,!1)}},D=/\s/,P=e=>e?e.split(D):[],T=(e,t,n,l)=>{const o=11===t._.nodeType&&t._.host?t._.host:t._,s=e&&e.m||j,c=t.m||j;for(l in s)l in c||R(o,l,s[l],void 0,n,t.t);for(l in c)R(o,l,s[l],c[l],n,t.t)},L=(e,s,r,i)=>{let a,f,d,p=s.$[r],m=0;if(o||(c=!0,"slot"===p.g&&(t&&i.classList.add(t+"-s"),p.t|=p.$?2:1)),null!==p.p)a=p._=u.createTextNode(p.p);else if(1&p.t)a=p._=u.createTextNode("");else if(a=p._=u.createElement(2&p.t?"slot-fb":p.g),T(null,p,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),p.$)for(m=0;m<p.$.length;++m)f=L(e,p,m,a),f&&a.appendChild(f);return a["s-hn"]=l,3&p.t&&(a["s-sr"]=!0,a["s-cr"]=n,a["s-sn"]=p.h||"",d=e&&e.$&&e.$[r],d&&d.g===p.g&&e._&&x(e._,!1)),a},x=(e,t)=>{d.t|=1;const n=e.childNodes;for(let o=n.length-1;o>=0;o--){const e=n[o];e["s-hn"]!==l&&e["s-ol"]&&(q(e).insertBefore(e,W(e)),e["s-ol"].remove(),e["s-ol"]=void 0,c=!0),t&&x(e,t)}d.t&=-2},E=(e,t,n,o,s,c)=>{let r,i=e["s-cr"]&&e["s-cr"].parentNode||e;for(i.shadowRoot&&i.tagName===l&&(i=i.shadowRoot);s<=c;++s)o[s]&&(r=L(null,n,s,e),r&&(o[s]._=r,i.insertBefore(r,W(t))))},N=(e,t,n,l,o)=>{for(;t<=n;++t)(l=e[t])&&(o=l._,B(l),s=!0,o["s-ol"]?o["s-ol"].remove():x(o,!0),o.remove())},U=(e,t)=>e.g===t.g&&("slot"!==e.g||e.h===t.h),W=e=>e&&e["s-ol"]||e,q=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,A=(e,t)=>{const n=t._=e._,l=e.$,o=t.$,s=t.p;let c;null===s?("slot"===t.g||T(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s=0,c=0,r=t.length-1,i=t[0],a=t[r],f=l.length-1,u=l[0],d=l[f];for(;s<=r&&c<=f;)null==i?i=t[++s]:null==a?a=t[--r]:null==u?u=l[++c]:null==d?d=l[--f]:U(i,u)?(A(i,u),i=t[++s],u=l[++c]):U(a,d)?(A(a,d),a=t[--r],d=l[--f]):U(i,d)?("slot"!==i.g&&"slot"!==d.g||x(i._.parentNode,!1),A(i,d),e.insertBefore(i._,a._.nextSibling),i=t[++s],d=l[--f]):U(a,u)?("slot"!==i.g&&"slot"!==d.g||x(a._.parentNode,!1),A(a,u),e.insertBefore(a._,i._),a=t[--r],u=l[++c]):(o=L(t&&t[c],n,c,e),u=l[++c],o&&q(i._).insertBefore(o,W(i._)));s>r?E(e,null==l[f+1]?null:l[f+1]._,n,l,c,f):c>f&&N(t,s,r)})(n,l,t,o):null!==o?(null!==e.p&&(n.textContent=""),E(n,null,t,o,0,o.length-1)):null!==l&&N(l,0,l.length-1)):(c=n["s-cr"])?c.parentNode.textContent=s:e.p!==s&&(n.data=s)},F=e=>{let t,n,l,o,s,c,r=e.childNodes;for(n=0,l=r.length;n<l;n++)if(t=r[n],1===t.nodeType){if(t["s-sr"])for(s=t["s-sn"],t.hidden=!1,o=0;o<l;o++)if(r[o]["s-hn"]!==t["s-hn"])if(c=r[o].nodeType,""!==s){if(1===c&&s===r[o].getAttribute("slot")){t.hidden=!0;break}}else if(1===c||3===c&&""!==r[o].textContent.trim()){t.hidden=!0;break}F(t)}},H=[],V=e=>{let t,n,l,o,c,r,i=0,a=e.childNodes,f=a.length;for(;i<f;i++){if(t=a[i],t["s-sr"]&&(n=t["s-cr"]))for(l=n.parentNode.childNodes,o=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(z(n,o)?(c=H.find(e=>e.j===n),s=!0,n["s-sn"]=n["s-sn"]||o,c?c.k=t:H.push({k:t,j:n}),n["s-sr"]&&H.map(e=>{z(e.j,n["s-sn"])&&(c=H.find(e=>e.j===n),c&&!e.k&&(e.k=c.k))})):H.some(e=>e.j===n)||H.push({j:n}));1===t.nodeType&&V(t)}},z=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,B=e=>{e.m&&e.m.ref&&e.m.ref(null),e.$&&e.$.map(B)},G=e=>ae(e).v,I=(e,t,n)=>{const l=G(e);return{emit:e=>J(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},J=(e,t,n)=>{const l=new CustomEvent(t,n);return e.dispatchEvent(l),l},K=(e,t)=>{t&&!e.M&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.M=t))},Q=(e,t)=>{if(e.t|=16,!(4&e.t))return K(e,e.S),ve(()=>X(e,t));e.t|=512},X=(e,t)=>{const n=e.s;let l;return t&&(e.t|=256,e.i&&(e.i.map(([e,t])=>ne(n,e,t)),e.i=null),l=ne(n,"componentWillLoad")),le(l,()=>Y(e,n,t))},Y=(e,r,i)=>{const a=e.v,f=a["s-rc"];i&&(e=>{const t=e.C,n=e.v,l=t.t,o=((e,t)=>{let n=_(t),l=be.get(n);if(e=11===e.nodeType?e:u,l)if("string"==typeof l){let t,o=g.get(e=e.head||e);o||g.set(e,o=new Set),o.has(n)||(t=u.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(p&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);((e,r)=>{const i=e.v,a=e.C,f=e.O||C(null,null),m=(e=>e&&e.g===O)(r)?r:S(null,null,r);if(l=i.tagName,a.R&&(m.m=m.m||{},a.R.map(([e,t])=>m.m[t]=i[e])),m.g=null,m.t|=4,e.O=m,m._=f._=i.shadowRoot||i,t=i["s-sc"],n=i["s-cr"],o=p&&0!=(1&a.t),s=!1,A(f,m),d.t|=1,c){let e,t,n,l,o,s;V(m._);let c=0;for(;c<H.length;c++)e=H[c],t=e.j,t["s-ol"]||(n=u.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(c=0;c<H.length;c++)if(e=H[c],t=e.j,e.k){for(l=e.k.parentNode,o=e.k.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}s&&F(m._),d.t&=-2,H.length=0})(e,Z(e,r)),f&&(f.map(e=>e()),a["s-rc"]=void 0);{const t=a["s-p"],n=()=>ee(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},Z=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(n){pe(n)}return t},ee=e=>{const t=e.v,n=e.s,l=e.S;64&e.t||(e.t|=64,oe(t),ne(n,"componentDidLoad"),e.D(t),l||te()),e.P(t),e.M&&(e.M(),e.M=void 0),512&e.t&&ke(()=>Q(e,!1)),e.t&=-517},te=()=>{oe(u.documentElement),d.t|=2,ke(()=>J(a,"appload",{detail:{namespace:"traim-components"}}))},ne=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(l){pe(l)}},le=(e,t)=>e&&e.then?e.then(t):t(),oe=e=>e.classList.add("hydrated"),se=(e,t,n)=>{if(t.T){e.watchers&&(t.L=e.watchers);const l=Object.entries(t.T),o=e.prototype;if(l.map(([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>ae(this).N.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ae(e),s=o.N.get(t),c=o.t,r=o.s;if(n=((e,t)=>null==e||k(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.T[t][0]),!(8&c&&void 0!==s||n===s)&&(o.N.set(t,n),r)){if(l.L&&128&c){const e=l.L[t];e&&e.map(e=>{try{r[e](n,s,t)}catch(l){pe(l)}})}2==(18&c)&&Q(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=ae(this);return n.U.then(()=>n.s[e](...t))}})}),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){d.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.R.push([e,o]),o})}}return e},ce=e=>{ne(e,"connectedCallback")},re=(e,t={})=>{const n=[],l=t.exclude||[],o=a.customElements,s=u.head,c=s.querySelector("meta[charset]"),r=u.createElement("style"),i=[];let f,m=!0;Object.assign(d,t),d.l=new URL(t.resourcesUrl||"./",u.baseURI).href,t.syncQueue&&(d.t|=4),e.map(e=>e[1].map(t=>{const s={t:t[0],u:t[1],T:t[2],W:t[3]};s.T=t[2],s.W=t[3],s.R=[],s.L={},!p&&1&s.t&&(s.t|=8);const c=s.u,r=class extends HTMLElement{constructor(e){super(e),ue(e=this,s),1&s.t&&(p?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){f&&(clearTimeout(f),f=null),m?i.push(this):d.jmp(()=>(e=>{if(0==(1&d.t)){const t=ae(e),n=t.C,l=()=>{};if(1&t.t)b(e,t,n.W),ce(t.s);else{t.t|=1,12&n.t&&(e=>{const t=e["s-cr"]=u.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){K(t,t.S=n);break}}n.T&&Object.entries(n.T).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),ke(()=>(async(e,t,n,l,o)=>{if(0==(32&t.t)){{if(t.t|=32,(o=$e(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.L=o.watchers,se(o,n,2),o.isProxied=!0);const e=()=>{};t.t|=8;try{new o(t)}catch(r){pe(r)}t.t&=-9,t.t|=128,e(),ce(t.s)}if(o.style){let e=o.style;const t=_(n);if(!be.has(t)){const l=()=>{};8&n.t&&(e=await __sc_import_traim_components("./p-6324d3fa.js").then(n=>n.scopeCss(e,t,!1))),((e,t,n)=>{let l=be.get(e);$&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,be.set(e,l)})(t,e,!!(1&n.t)),l()}}}const s=t.S,c=()=>Q(t,!0);s&&s["s-rc"]?s["s-rc"].push(c):c()})(0,t,n))}l()}})(this))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const e=ae(this),t=e.s;e.o&&(e.o.map(e=>e()),e.o=void 0),ne(t,"disconnectedCallback")}})())}forceUpdate(){(()=>{{const e=ae(this);e.v.isConnected&&2==(18&e.t)&&Q(e,!1)}})()}componentOnReady(){return ae(this).q}};s.A=e[0],l.includes(c)||o.get(c)||(n.push(c),o.define(c,se(r,s,1)))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,c?c.nextSibling:s.firstChild),m=!1,i.length?i.map(e=>e.connectedCallback()):d.jmp(()=>f=setTimeout(te,30))},ie=new WeakMap,ae=e=>ie.get(e),fe=(e,t)=>ie.set(t.s=e,t),ue=(e,t)=>{const n={t:0,v:e,C:t,N:new Map};return n.U=new Promise(e=>n.P=e),n.q=new Promise(e=>n.D=e),e["s-p"]=[],e["s-rc"]=[],b(e,n,t.W),ie.set(e,n)},de=(e,t)=>t in e,pe=e=>console.error(e),me=new Map,$e=e=>{const t=e.u.replace(/-/g,"_"),n=e.A,l=me.get(n);return l?l[t]:__sc_import_traim_components(`./${n}.entry.js`).then(e=>(me.set(n,e),e[t]),pe)},be=new Map,ye=[],he=[],we=[],ge=(e,t)=>n=>{e.push(n),i||(i=!0,t&&4&d.t?ke(je):d.raf(je))},_e=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(o){pe(o)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},je=()=>{r++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){pe(t)}e.length=0})(ye);{const e=2==(6&d.t)?performance.now()+14*Math.ceil(.1*r):1/0;_e(he,e),_e(we,e),he.length>0&&(we.push(...he),he.length=0),(i=ye.length+he.length+we.length>0)?d.raf(je):r=0}},ke=e=>m().then(e),ve=ge(he,!0);export{f as C,O as H,e as N,m as a,re as b,I as c,u as d,G as g,S as h,d as p,fe as r,a as w}