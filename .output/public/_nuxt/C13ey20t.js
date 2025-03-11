import{s as v,P as S,C as z}from"./Dr41pzMq.js";import{_ as x}from"./DVolaLjS.js";import{F,_ as M,a as h}from"./BmYVZLBh.js";import{_ as g}from"./BG2E03oP.js";import{I as q}from"./CzGxaYn5.js";import{f as k,m as B,g as W,c as N,o as f,a as t,t as b,n as P,h as y,i as U,j as D,w as V,b as r,d as a,k as n,l as T,F as A}from"./dfVAeu3s.js";import{c as C,s as j}from"./D_0eWb_c.js";const L={class:"flex flex-col my-4"},H=["required","accept","multiple"],$=k({__name:"FileInput",props:B({displayName:{},fileTypes:{},multiple:{type:Boolean},required:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const o=c,m=W(c,"modelValue");async function w(p){const d=p.target.files??[],u=[];for(const l of d)u.push(l);m.value=u,console.log({files:u})}return(p,d)=>(f(),N("label",L,[t("span",{class:P(["text-xs ml-2 text-gray-500",{"form-label-required":o.required}])},b(o.displayName),3),t("input",{class:"cursor-pointer p-2",required:o.required,onChange:d[0]||(d[0]=u=>w(u)),accept:o.fileTypes.join(","),multiple:o.multiple,type:"file"},null,40,H)]))}}),E={class:"flex flex-col lg:flex-row gap-10"},J={class:"lg:mt-8 flex-1"},K={class:"font-bold!"},_=k({__name:"[slamDate]",setup(c){const{futureSlams:o}=C(),m=new Date(y().params.slamDate).toLocaleDateString("de"),w=new Date(new Date(y().params.slamDate).getTime()-5*24*60*60*1e3).toLocaleDateString("de");v(`Bestätigung ${m} - Saferspace Slam`,`Bestätige hier bitte deinen Auftritt am ${m} bei uns`);function p(){return{name:"",stageName:"",pronouns:"",contentWarnings:"",instagram:"",aboutMe:"",introduction:!1,introductionText:"",pictures:[],dontIncludeTexts:!1,texts:[]}}function d(s){return{name:s.name,email:"",subject:m,message:`
Name: ${s.name}<br>
Stage Name: ${s.stageName}<br>
Pronomen: ${s.pronouns??"Keine"}<br>
Inhaltliche Warnungen: ${s.contentWarnings}<br>
Zustimmung Ankündigung: ${s.introduction?"Ja":"Nein"}<br>
Texte für Hörgeschädigte: ${s.dontIncludeTexts?"Nein":"Ja"}<br>
${s.introduction?`Instagram: ${s.instagram??"Keins"}<br>
Über mich: ${s.aboutMe}`:""}
                `,files:[...s.pictures.length?[{name:`${s.name} Foto/Video - ${s.pictures[0].name}`,file:s.pictures[0]}]:[],...s.texts.map((e,i)=>({name:`${s.name} Text ${i+1} - ${e.name}`,file:e}))]}}const u=new F("Bestätigung",{data:p(),generatePayload:d,emptyData:p}),l=u.payload.value.data,I=U(()=>o.value.map(s=>s.date.toLocaleDateString("de")));return console.log({slams:j,futureSlams:o,slamDates:I}),(s,e)=>(f(),D(z,null,{default:V(()=>[r(S,null,{default:V(()=>[a("Bestätigung "+b(n(m)),1)]),_:1}),t("div",E,[t("div",J,[t("p",null,[a(" Wir freuen uns sehr, dass du am "+b(n(m))+" bei uns auftrittst! ",1),e[10]||(e[10]=t("br",null,null,-1)),e[11]||(e[11]=t("br",null,null,-1)),e[12]||(e[12]=a(" Wir haben auf jeden Fall schon einen Platz für dich reserviert, aber um dich tatsächlich fest einzuplanen, brauchen wir jetzt im Vorhinein noch ein paar Informationen von dir, ")),t("strong",K,"deswegen fülle dieses Formular bitte spätestens bis zum "+b(n(w))+" aus",1),e[13]||(e[13]=a(". ")),e[14]||(e[14]=t("br",null,null,-1)),e[15]||(e[15]=t("br",null,null,-1)),e[16]||(e[16]=a(" Stage Name und Pronomen fragen wir dich, damit wir wissen wie wir dich am Tag des Slams ankündigen sollen. ")),e[17]||(e[17]=t("br",null,null,-1)),e[18]||(e[18]=t("br",null,null,-1)),e[19]||(e[19]=a(" Anders als viele andere Slams bitten wir dich, dir schon im Vorhinein fest zu überlegen, welche Texte du bei uns sprechen willst. Das hat zwei Gründe: ")),e[20]||(e[20]=t("br",null,null,-1)),e[21]||(e[21]=t("br",null,null,-1)),e[22]||(e[22]=t("ul",{class:"list-disc ml-6"},[t("li",null,[a(" Einerseits wollen wir auch Menschen ermöglichen, an unserem Slam teilzuhaben, die ein gesprochenes Bühnenprogramm nicht ohne weiteres verstehen können. Deswegen drucken wir die Texte aller Poet:innen vorher aus und stellen sie Menschen, die sie brauchen, für die Dauer des Slams zur Verfügung. Darüber hinaus teilen wir deine Texte natürlich mit niemandem! "),t("br"),t("br")]),t("li",null," Andererseits wollen wir schon im Vorhinein ankündigen über welche potenziell retraumatisierenden Themen am Abend gesprochen wird. So ermöglichen wir Menschen für sich zu entscheiden, ob sie gar nicht erst kommen wollen, wenn sie sich mit diesen Themen nicht wohl fühlen. ")],-1)),e[23]||(e[23]=t("br",null,null,-1)),e[24]||(e[24]=a(" Wir würden dich im Vorhinein gerne auf unserem Instagram ")),r(q),e[25]||(e[25]=a(" und hier auf der Website mit einem Foto oder Video und einem kurzen Text ankündigen. Falls du das willst (du musst nicht, um bei uns aufzutreten!), trage das bitte im Formular so ein. Wir verlinken auch gerne deinen Instagram-Account, deswegen kannst du den auch optional angeben. ")),e[26]||(e[26]=t("br",null,null,-1)),e[27]||(e[27]=t("br",null,null,-1)),e[28]||(e[28]=t("strong",{class:"font-bold!"},"Wir freuen uns auf dich!",-1))])]),r(M,{form:n(u),class:"flex-1"},{default:V(()=>[r(g,{required:"",modelValue:n(l).name,"onUpdate:modelValue":e[0]||(e[0]=i=>n(l).name=i),"display-name":"Name",placeholder:"Dein Name",type:"text"},null,8,["modelValue"]),r(g,{modelValue:n(l).stageName,"onUpdate:modelValue":e[1]||(e[1]=i=>n(l).stageName=i),"display-name":"Stage Name (falls vorhanden)",placeholder:"Der Name, mit dem du vorgestellt werden willst",type:"text"},null,8,["modelValue"]),r(g,{modelValue:n(l).pronouns,"onUpdate:modelValue":e[2]||(e[2]=i=>n(l).pronouns=i),"display-name":"Pronomen (falls du welche benutzt)",placeholder:"Deine Pronomen",type:"text"},null,8,["modelValue"]),r(h,{required:"",modelValue:n(l).contentWarnings,"onUpdate:modelValue":e[3]||(e[3]=i=>n(l).contentWarnings=i),"display-name":"Inhaltliche Warnungen",placeholder:"Nenne hier bitte Themen in deinen Texten, die für manche Menschen schwierig sind, sodass wir im Vorfeld darüber informieren können. Beispiele wären etwa Suizid, Self-Harm oder sexuelle Übergriffe."},null,8,["modelValue"]),r(x,{modelValue:n(l).dontIncludeTexts,"onUpdate:modelValue":e[4]||(e[4]=i=>n(l).dontIncludeTexts=i),"display-name":"Ich möchte meine Texte *nicht* für hörgeschädigte Menschen bereitstellen."},null,8,["modelValue"]),n(l).dontIncludeTexts?T("",!0):(f(),D($,{key:0,required:"",multiple:"","file-types":["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/pdf","text/plain",".md",".pages","application/vnd.oasis.opendocument.text"],modelValue:n(l).texts,"onUpdate:modelValue":e[5]||(e[5]=i=>n(l).texts=i),"display-name":"Texte für hörgeschädigte Menschen (mehrere auswählbar)"},null,8,["modelValue"])),r(x,{modelValue:n(l).introduction,"onUpdate:modelValue":e[6]||(e[6]=i=>n(l).introduction=i),"display-name":"Ich möchte auf Instagram (@saferspace_slam) und auf saferspace-slam.de angekündigt werden."},null,8,["modelValue"]),n(l).introduction?(f(),N(A,{key:1},[r(g,{modelValue:n(l).instagram,"onUpdate:modelValue":e[7]||(e[7]=i=>n(l).instagram=i),"display-name":"Instagram (optional)",placeholder:"Dein Instagram Account Name",type:"text"},null,8,["modelValue"]),r(h,{required:"",modelValue:n(l).aboutMe,"onUpdate:modelValue":e[8]||(e[8]=i=>n(l).aboutMe=i),"display-name":"Über dich",placeholder:"Der Text, mit dem wir dich ankündigen. Du kannst hier gerne den Über-dich Text aus deiner Anmeldung wiederverwenden."},null,8,["modelValue"]),r($,{required:"","file-types":["image/jpeg","image/png","image/webp","video/mp4","video/mpeg"],modelValue:n(l).pictures,"onUpdate:modelValue":e[9]||(e[9]=i=>n(l).pictures=i),"display-name":"Foto / Video für die Ankündigung"},null,8,["modelValue"])],64)):T("",!0)]),_:1},8,["form"])])]),_:1}))}});export{_ as default};
