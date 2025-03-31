var D=Object.defineProperty;var H=(r,e,o)=>e in r?D(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var v=(r,e,o)=>H(r,typeof e!="symbol"?e+"":e,o);import{f as V,G as j,H as A,c as w,o as x,a as n,I as M,j as N,i as F,J as P,d as O,K as I,y as R}from"./BLFgS0Id.js";const J="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='24px'%20viewBox='0%20-960%20960%20960'%20width='24px'%20fill='%23000000'%3e%3cpath%20d='M480-80q-82%200-155-31.5t-127.5-86Q143-252%20111.5-325T80-480q0-83%2031.5-155.5t86-127Q252-817%20325-848.5T480-880q17%200%2028.5%2011.5T520-840q0%2017-11.5%2028.5T480-800q-133%200-226.5%2093.5T160-480q0%20133%2093.5%20226.5T480-160q133%200%20226.5-93.5T800-480q0-17%2011.5-28.5T840-520q17%200%2028.5%2011.5T880-480q0%2082-31.5%20155t-86%20127.5q-54.5%2054.5-127%2086T480-80Z'/%3e%3c/svg%3e",K={class:"flex flex-col gap-3"},Z={key:0,class:"text-green-700 flex justify-center"},L={key:1,class:"text-red-700 flex justify-center"},Q={key:2,class:"text-red-700 flex justify-center"},Y={key:3,class:"text-red-700 flex justify-center text-center"},X={class:"rounded-full overflow-hidden mx-2"},W={class:"absolute -translate-x-13"},ae=V({__name:"Form",props:{form:{}},setup(r){const e=j("progressBar");A(r.form.progress,()=>{r.form.progress.value?e.value.style.translate=`-${(1-r.form.progress.value)*100}%`:e.value.style.translate=""});const o=j("htmlForm");async function i(){var s;(s=o.value)!=null&&s.reportValidity()?r.form.status.value=void 0:r.form.status.value="invalid"}return(s,t)=>(x(),w("div",null,[n("form",{ref_key:"htmlForm",ref:o,onSubmit:t[0]||(t[0]=I((...f)=>s.form.send&&s.form.send(...f),["prevent"])),class:"flex flex-col gap-2 bg-white sm:px-6 px-4 sm:pt-4 pt-2 sm:pb-6 pb-4 rounded-xl shadow-lg shadow-black/20"},[M(s.$slots,"default"),n("div",K,[n("div",null,[s.form.status.value=="success"?(x(),w("div",Z,t[1]||(t[1]=[n("p",{class:"text-green-700"},"Erfolgreich abgeschickt!",-1)]))):F("",!0),s.form.status.value=="serverErrror"?(x(),w("div",L,t[2]||(t[2]=[n("p",{class:"text-red-700"},"Fehler beim Senden. Versuche es später nochmal und weise uns gerne per Mail auf diesen Fehler hin.",-1)]))):F("",!0),s.form.status.value=="clientError"?(x(),w("div",Q,t[3]||(t[3]=[n("p",{class:"text-red-700"},"Fehler beim Senden. Überprüfe deine Internetverbindung und versuche es später nochmal. ",-1)]))):F("",!0),s.form.status.value=="invalid"?(x(),w("div",Y,t[4]||(t[4]=[n("p",{class:"text-red-700"},"Nicht alle notwendigen Felder sind ausgefüllt",-1)]))):F("",!0)]),N(n("div",X,[n("div",{ref_key:"progressBar",ref:e,class:"w-full h-2 bg-green-700"},null,512)],512),[[P,s.form.progress.value]]),n("button",{type:"submit",onClick:i,class:"flex gap-2 justify-center cursor-pointer rounded-lg text-theme-foreground bg-linear-to-r from-theme-1 to-theme-2 py-3 px-4"},[N(n("span",W,t[5]||(t[5]=[n("img",{src:J,class:"invert animate-spin"},null,-1)]),512),[[P,s.form.status.value=="sending"]]),t[6]||(t[6]=O(" Senden "))])])],544)]))}});function _(){return{name:"",email:"",message:"",subject:"",files:[]}}function ee(r,e){return new Promise((o,i)=>{const s=new FileReader;s.readAsDataURL(r),s.onload=()=>{const t=s.result,f=t.indexOf(",")+1,a=t.slice(f);o({type:r.type,data:a,filename:e,size:r.size})},s.onerror=i})}class re{constructor(e,o){v(this,"formName");v(this,"payload");v(this,"status",R(void 0));v(this,"progress",R(void 0));v(this,"send",async()=>{this.status.value="sending";let e;"generatePayload"in this.payload.value?e=this.payload.value.generatePayload(this.payload.value.data):e=this.payload.value;let o=e.files.sort((a,p)=>p.file.size-a.file.size),i=[];for(;e.uploadAllFiles&&o.length||o.map(a=>a.file.size).reduce((a,p)=>a+p,0)>=1e7;)i.push(o.splice(0,1)[0]);const s=await Promise.all(o.map(a=>ee(a.file,a.name)));console.log({attachedFiles:s});const t=(a,p)=>new Promise((d,h)=>{const T=()=>{this.status.value="clientError",h("clientError")},g=()=>{this.status.value="serverErrror",h("serverError")};fetch("https://email-forms-453803557958.europe-west4.run.app",{method:"POST",body:JSON.stringify(a),headers:{"Content-type":"application/json; charset=UTF-8"}}).then(async u=>{u.status===200?(await p(u,T,g),d()):g()}).catch(()=>{T()})}),f=[];if(i.length){let a=0;const p=i.map(d=>d.file.size).reduce((d,h)=>d+h);await t({key:"gDdJR6GNwfZ2Kf4GYCyExzNRm78xGvxd",action:"upload-files",files:i.map(d=>({name:d.name}))},async(d,h,T)=>{const g=await d.json();for(let u=0;u<g.files.length;u++){const $=g.files[u].uploadUri,S=g.files[u].publicUrl,U=i[u].name,m=i[u].file,C=8*1024*1024;let c=0,b=0;const B=5;for(;c<m.size;){console.log({start:c,size:m.size});const z=Math.min(c+C,m.size),G=m.slice(c,z);try{const l=new XMLHttpRequest;l.open("PUT",$),l.setRequestHeader("Content-Range",`bytes ${c}-${z-1}/${m.size}`),l.setRequestHeader("Content-Type",m.type),l.upload.onprogress=y=>{console.log(`Uploaded ${c+y.loaded} of ${m.size}`),this.progress.value=(a+c+y.loaded)/p};const k=new Promise((y,E)=>{l.onload=()=>{if(l.status===200)console.log(`Uploaded ${U}`),c=z,b=0,y();else if(l.status===308){const q=l.getResponseHeader("Range");c=parseInt(q.split("-")[1])+1,b=0,y()}else E(`Upload failed: ${l.status} ${l.response}`)},l.onerror=q=>{E(q)}});l.send(G),await k}catch(l){if(console.error("Upload error:",l),b++,b>B){h();return}await new Promise(k=>setTimeout(k,2e3))}}f.push({publicUrl:S,name:U}),a+=m.size}})}await t({key:"gDdJR6GNwfZ2Kf4GYCyExzNRm78xGvxd",action:"submit",form:this.formName,name:e.name,email:e.email,subject:e.subject,message:e.message+"<br><br>"+f.map(a=>`<a href="${a.publicUrl}">${a.name}</a>`).join("<br>"),files:s},async()=>{this.status.value="success","generatePayload"in this.payload.value?Object.assign(this.payload.value.data,this.payload.value.emptyData()):Object.assign(this.payload.value,_())}),this.progress.value=void 0});this.formName=e,this.payload=R(o)}}export{re as F,ae as _,_ as e};
