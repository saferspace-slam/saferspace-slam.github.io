import{a as K,s as X,C as q,P as ee}from"./Dr41pzMq.js";import{C as P,I as te,J as oe,K as ne,L as re,r as C,M as se,i as R,N as b,k as _,O as le,f as Y,c as v,o as g,v as ae,a as s,d as N,l as A,j as ie,w as I,b as j,n as $,F as B,y as H,t as W}from"./dfVAeu3s.js";import{c as ue}from"./D_0eWb_c.js";function Z(e){return te()?(oe(e),!0):!1}const z=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ce=Object.prototype.toString,de=e=>ce.call(e)==="[object Object]",y=()=>{},V=fe();function fe(){var e,t;return z&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function D(e){return Array.isArray(e)?e:[e]}function pe(...e){if(e.length!==1)return ne(...e);const t=e[0];return typeof t=="function"?re(se(()=>({get:t,set:y}))):C(t)}function me(e,t,n){return P(e,t,{...n,immediate:!0})}const Q=z?window:void 0;function x(e){var t;const n=b(e);return(t=n==null?void 0:n.$el)!=null?t:n}function w(...e){const t=[],n=()=>{t.forEach(o=>o()),t.length=0},r=(o,l,c,p)=>(o.addEventListener(l,c,p),()=>o.removeEventListener(l,c,p)),f=R(()=>{const o=D(b(e[0])).filter(l=>l!=null);return o.every(l=>typeof l!="string")?o:void 0}),u=me(()=>{var o,l;return[(l=(o=f.value)==null?void 0:o.map(c=>x(c)))!=null?l:[Q].filter(c=>c!=null),D(b(f.value?e[1]:e[0])),D(_(f.value?e[2]:e[1])),b(f.value?e[3]:e[2])]},([o,l,c,p])=>{if(n(),!(o!=null&&o.length)||!(l!=null&&l.length)||!(c!=null&&c.length))return;const k=de(p)?{...p}:p;t.push(...o.flatMap(h=>l.flatMap(S=>c.map(T=>r(h,S,T,k)))))},{flush:"post"}),i=()=>{u(),n()};return Z(n),i}let G=!1;function F(e,t,n={}){const{window:r=Q,ignore:f=[],capture:u=!0,detectIframe:i=!1,controls:o=!1}=n;if(!r)return o?{stop:y,cancel:y,trigger:y}:y;if(V&&!G){G=!0;const a={passive:!0};Array.from(r.document.body.children).forEach(d=>w(d,"click",y,a)),w(r.document.documentElement,"click",y,a)}let l=!0;const c=a=>b(f).some(d=>{if(typeof d=="string")return Array.from(r.document.querySelectorAll(d)).some(m=>m===a.target||a.composedPath().includes(m));{const m=x(d);return m&&(a.target===m||a.composedPath().includes(m))}});function p(a){const d=b(a);return d&&d.$.subTree.shapeFlag===16}function k(a,d){const m=b(a),E=m.$.subTree&&m.$.subTree.children;return E==null||!Array.isArray(E)?!1:E.some(L=>L.el===d.target||d.composedPath().includes(L.el))}const h=a=>{const d=x(e);if(a.target!=null&&!(!(d instanceof Element)&&p(e)&&k(e,a))&&!(!d||d===a.target||a.composedPath().includes(d))){if("detail"in a&&a.detail===0&&(l=!c(a)),!l){l=!0;return}t(a)}};let S=!1;const T=[w(r,"click",a=>{S||(S=!0,setTimeout(()=>{S=!1},0),h(a))},{passive:!0,capture:u}),w(r,"pointerdown",a=>{const d=x(e);l=!c(a)&&!!(d&&!a.composedPath().includes(d))},{passive:!0}),i&&w(r,"blur",a=>{setTimeout(()=>{var d;const m=x(e);((d=r.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(m!=null&&m.contains(r.document.activeElement))&&t(a)},0)},{passive:!0})].filter(Boolean),U=()=>T.forEach(a=>a());return o?{stop:U,cancel:()=>{l=!1},trigger:a=>{l=!0,h(a),l=!1}}:U}const ge={mounted(e,t){const n=!t.modifiers.bubble;if(typeof t.value=="function")e.__onClickOutside_stop=F(e,t.value,{capture:n});else{const[r,f]=t.value;e.__onClickOutside_stop=F(e,r,Object.assign({capture:n},f))}},unmounted(e){e.__onClickOutside_stop()}};function M(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function J(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:J(n)}}function ve(e){const t=e||window.event,n=t.target;return J(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const O=new WeakMap;function be(e,t=!1){const n=C(t);let r=null,f="";P(pe(e),o=>{const l=M(b(o));if(l){const c=l;if(O.get(c)||O.set(c,c.style.overflow),c.style.overflow!=="hidden"&&(f=c.style.overflow),c.style.overflow==="hidden")return n.value=!0;if(n.value)return c.style.overflow="hidden"}},{immediate:!0});const u=()=>{const o=M(b(e));!o||n.value||(V&&(r=w(o,"touchmove",l=>{ve(l)},{passive:!1})),o.style.overflow="hidden",n.value=!0)},i=()=>{const o=M(b(e));!o||!n.value||(V&&(r==null||r()),o.style.overflow=f,O.delete(o),n.value=!1)};return Z(i),R({get(){return n.value},set(o){o?u():i()}})}function he(){let e=!1;const t=le(!1);return(n,r)=>{if(t.value=r.value,e)return;e=!0;const f=be(n,r.value);P(t,u=>f.value=u)}}he();const ke={key:0,class:"material-symbols-outlined"},ye={key:1,class:"material-symbols-outlined"},we={class:"relative"},Se={key:0,class:"absolute top-2 flex rounded flex-col shadow shadow-black/20 w-full bg-white"},xe=["href"],_e=["href"],$e=Y({__name:"AddToCalendar",props:{start:{},end:{},title:{},description:{},location:{}},setup(e){const t=e,n=C(!1);function r(i){const o=i.getUTCFullYear(),l=String(i.getUTCMonth()+1).padStart(2,"0"),c=String(i.getUTCDate()).padStart(2,"0"),p=String(i.getUTCHours()).padStart(2,"0"),k=String(i.getUTCMinutes()).padStart(2,"0"),h=String(i.getUTCSeconds()).padStart(2,"0");return`${o}${l}${c}T${p}${k}${h}Z`}function f(i){const o=i.getUTCFullYear(),l=String(i.getUTCMonth()+1).padStart(2,"0"),c=String(i.getUTCDate()).padStart(2,"0"),p=String(i.getUTCHours()).padStart(2,"0"),k=String(i.getUTCMinutes()).padStart(2,"0"),h=String(i.getUTCSeconds()).padStart(2,"0");return`${o}-${l}-${c}T${p}:${k}:${h}Z`}const u=R(()=>({google:`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${t.title}&dates=${r(t.start)}/${r(t.end)}&details=${t.description}&location=${t.location}&ctz=Europe/Berlin`,outlook:`https://outlook.live.com/owa/?path=/calendar/action/compose&rru=addevent&subject=${t.title}&startdt=${f(t.start)}&enddt=${f(t.end)}&body=${t.description}&location=${t.location}`,ics:`BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
UID:${r(new Date)}@saferspace-slam.de
DTSTAMP:${r(new Date)}
DTSTART:${r(t.start)}
DTEND:${r(t.end)}
SUMMARY:${t.title}
DESCRIPTION:${t.description}
LOCATION:${t.location}
END:VEVENT
END:VCALENDAR`}));return(i,o)=>(g(),v("div",null,[ae((g(),v("button",{class:"text-link flex items-center cursor-pointer",onClick:o[0]||(o[0]=l=>n.value=!n.value)},[o[2]||(o[2]=N("Zum Kalender hinzufügen ")),n.value?(g(),v("span",ke," keyboard_arrow_up ")):(g(),v("span",ye," keyboard_arrow_down "))])),[[_(ge),()=>n.value=!1]]),s("div",we,[n.value?(g(),v("div",Se,[s("a",{class:"hover:bg-gray-200 px-4 py-3",href:u.value.google,target:"_blank"},"Google",8,xe),s("a",{class:"border-t-1 border-black/10 cursor-pointer hover:bg-gray-200 px-4 py-3",href:u.value.outlook,target:"_blank"},"Outlook",8,_e),s("a",{class:"border-t-1 border-black/10 cursor-pointer hover:bg-gray-200 px-4 py-3",onClick:o[1]||(o[1]=l=>_(K)(`Saferspace Slam ${t.start.toLocaleDateString("de")}.ics`,u.value.ics))},"ICS-Datei")])):A("",!0)])]))}}),Ce={class:"mt-10 bg-white rounded-xl shadow-lg shadow-black/20 flex flex-col"},Te={class:"flex justify-evenly border-b-1 border-black/30"},Ee={key:0,class:"px-6"},De={class:"not-first:border-t-1 border-black/30 py-6"},Me={class:"flex flex-col lg:flex-row gap-4 justify-between"},Oe={class:"flex flex-col gap-2"},Ne={class:"flex items-center gap-2"},Ae={key:1,class:"px-6"},Ve={class:"not-first:border-t-1 border-black/30 py-6"},Pe={class:"flex flex-col lg:flex-row gap-4 lg:items-center justify-between"},Re={class:"flex flex-col gap-2"},Ue={class:"flex items-center gap-2"},Be=Y({__name:"veranstaltungen",setup(e){const{futureSlams:t,pastSlams:n}=ue();X("Veranstaltungen - Saferspace Slam","Hier findest du unsere aktuellen und vergangenen Veranstaltungen.");const r=C("future");return(f,u)=>(g(),ie(q,null,{default:I(()=>[j(ee,null,{default:I(()=>u[2]||(u[2]=[N("Veranstaltungen")])),_:1}),u[7]||(u[7]=s("div",{class:"flex flex-col gap-4 mx-6"},[s("div",{class:"flex gap-3 items-center"},[s("span",{class:"material-symbols-outlined"}," schedule "),N(" Jeden 3. Mittwoch im Monat um 20:00 Uhr ")]),s("a",{href:"https://maps.app.goo.gl/vmScMdnrRQ9NGecB9",target:"_blank"},[s("div",{class:"text-link flex gap-3 items-center"},[s("span",{class:"material-symbols-outlined"}," location_on "),s("span",{class:"underline"},"Von-Melle-Park 5, 20146 Hamburg, Raum 0029")])])],-1)),s("div",Ce,[s("div",Te,[s("div",{class:$(["hover:bg-menu-background/5 hover:text-black/70 flex justify-center rounded-tl-xl group border-r-1 border-black/30 p-2 sm:p-6 grow text-center cursor-pointer",{"not-hover:bg-menu-background/10 not-hover:text-black/50":r.value!=="future"}]),onClick:u[0]||(u[0]=i=>r.value="future")},[s("p",{class:$(["p-1 px-3 group-hover:border-b-1 group-hover:border-black/50",{"border-b-1 border-black/30":r.value==="future"}])}," Zukünftige Veranstaltungen ",2)],2),s("div",{class:$(["hover:bg-menu-background/5 hover:text-black/70 flex justify-center rounded-tr-xl group p-2 sm:p-6 grow text-center cursor-pointer",{"not-hover:bg-menu-background/10 not-hover:text-black/50":r.value!=="past"}]),onClick:u[1]||(u[1]=i=>r.value="past")},[s("p",{class:$(["p-1 px-3 group-hover:border-b-1 group-hover:border-black/50",{"border-b-1 border-black/30":r.value==="past"}])}," Vergangene Veranstaltungen ",2)],2)]),r.value=="future"?(g(),v("div",Ee,[(g(!0),v(B,null,H(_(t),i=>(g(),v("div",De,[s("div",Me,[s("div",Oe,[s("div",Ne,[u[3]||(u[3]=s("span",{class:"material-symbols-outlined"}," calendar_month ",-1)),s("p",null,W(i.date.toLocaleDateString("de"))+", 20:00 Uhr, Einlass 19:30 Uhr ",1)]),u[4]||(u[4]=s("a",{href:"https://maps.app.goo.gl/vmScMdnrRQ9NGecB9",target:"_blank"},[s("div",{class:"text-link flex items-center gap-2"},[s("span",{class:"material-symbols-outlined"}," location_on "),s("p",{class:"underline"},"Von-Melle-Park 5, 20146 Hamburg, Raum 0029")])],-1))]),j($e,{start:i.startDateTime,end:i.endDateTime,title:"Saferspace Slam",description:"saferspace-slam.de",location:"Von-Melle-Park 5, 20146 Hamburg, Raum 0029"},null,8,["start","end"])])]))),256))])):A("",!0),r.value=="past"?(g(),v("div",Ae,[(g(!0),v(B,null,H(_(n),i=>(g(),v("div",Ve,[s("div",Pe,[s("div",Re,[s("div",Ue,[u[5]||(u[5]=s("span",{class:"material-symbols-outlined"}," calendar_month ",-1)),s("p",null,W(i.date.toLocaleDateString("de"))+", 20:00 Uhr, Einlass 19:30 Uhr ",1)]),u[6]||(u[6]=s("a",{href:"https://maps.app.goo.gl/vmScMdnrRQ9NGecB9",target:"_blank"},[s("div",{class:"text-link flex items-center gap-2"},[s("span",{class:"material-symbols-outlined"}," location_on "),s("p",{class:"underline"},"Von-Melle-Park 5, 20146 Hamburg, Raum 0029")])],-1))])])]))),256))])):A("",!0)])]),_:1}))}});export{Be as default};
