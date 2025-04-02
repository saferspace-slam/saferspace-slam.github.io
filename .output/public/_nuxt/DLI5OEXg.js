import{s as B,P as M,C as W}from"./B05CjGtQ.js";import{_ as q}from"./CUC3M_rZ.js";import{F as C,_ as P}from"./DOvx4zaY.js";import{_ as $}from"./DU2FgRl2.js";import{_ as h}from"./CUydzWQc.js";import{I as A}from"./CvSJXXR1.js";import{f as D,m as I,g as N,h as S,c as v,o as g,a as t,t as p,n as w,i as b,j as y,v as T,k as n,l as j,p as F,q as E,s as J,r as V,w as k,b as u,d as m,F as K}from"./CjYfC3st.js";import{_ as U}from"./DxxFW7u_.js";const H={class:"border-1 border-gray-500 px-4 my-4"},L={class:"flex flex-col gap-2 mx-1 mt-3 mb-4"},R={key:0,class:"text-red-500 mb-2 text-xs"},Z={class:"flex gap-3 cursor-pointer align-middle"},G=["name","required"],O={class:"text-black grow-0"},Q={class:"flex gap-3 cursor-pointer mr-1 align-middle"},X=["name","required"],Y={class:"text-black grow-0"},_=D({__name:"BooleanRadioButtonsInput",props:I({optionFalse:{},optionTrue:{},displayName:{},details:{},required:{type:Boolean}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const i=c,s=N(c,"modelValue");S(()=>console.log(s.value));const f=crypto.randomUUID();return(x,a)=>(g(),v("fieldset",H,[t("legend",{class:w(["text-gray-500 px-2",{"form-label-required":i.required}])},p(i.displayName),3),t("div",L,[i.details?(g(),v("p",R,p(i.details),1)):b("",!0),t("label",Z,[y(t("input",{class:"cursor-pointer accent-menu-background",value:!0,name:n(f),required:i.required,"onUpdate:modelValue":a[0]||(a[0]=d=>s.value=d),type:"radio"},null,8,G),[[T,s.value]]),t("span",O,p(i.optionTrue),1)]),t("label",Q,[y(t("input",{class:"cursor-pointer accent-menu-background",value:!1,name:n(f),required:i.required,"onUpdate:modelValue":a[1]||(a[1]=d=>s.value=d),type:"radio"},null,8,X),[[T,s.value]]),t("span",Y,p(i.optionFalse),1)])])]))}}),ee={class:"flex items-center gap-2 mx-1 justify-center"},ne={class:"text-right flex my-4 items-center gap-1 cursor-pointer mr-1"},te=["name","required"],le={class:"text-left flex my-4 items-center gap-1 cursor-pointer"},re=["name","required"],oe=D({__name:"ToggleInput",props:I({optionFalse:{},optionTrue:{},required:{type:Boolean}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const i=c,s=N(c,"modelValue");S(()=>console.log(s.value));const f=crypto.randomUUID();return(x,a)=>(g(),v("div",ee,[t("label",ne,[y(t("input",{class:"appearance-none cursor-pointer",value:!1,name:n(f),required:i.required,"onUpdate:modelValue":a[0]||(a[0]=d=>s.value=d),type:"radio"},null,8,te),[[T,s.value]]),t("span",{class:w(["text-gray-500 grow-0",{"form-label-required":i.required}])},p(i.optionFalse),3)]),t("div",{class:"cursor-pointer bg-menu-background rounded-full w-10 min-w-10 h-5",onClick:a[1]||(a[1]=d=>s.value=!s.value)},[t("div",{class:w(["h-5 w-5 bg-white rounded-full border-3 border-menu-background transition-all duration-100",{"ml-5":s.value}])},null,2)]),t("label",le,[y(t("input",{class:"appearance-none cursor-pointer",value:!0,name:n(f),required:i.required,"onUpdate:modelValue":a[2]||(a[2]=d=>s.value=d),type:"radio"},null,8,re),[[T,s.value]]),t("span",{class:w(["text-gray-500 grow-0",{"form-label-required":i.required}])},p(i.optionTrue),3)])]))}}),se={class:"flex flex-col lg:flex-row gap-10"},ie={class:"lg:mt-8 flex-1"},ae={class:"font-bold!"},xe=D({__name:"[slamDate]",setup(c){const{futureSlams:i}=j(),s=new Date(F().params.slamDate).toLocaleDateString("de"),f=new Date(new Date(F().params.slamDate).getTime()-5*24*60*60*1e3).toLocaleDateString("de");B(`Bestätigung ${s} — Saferspace Slam`,`Bestätige hier bitte deinen Auftritt am ${s} bei uns`);function x(){return{name:"",stageName:"",pronouns:"",contentWarnings:"",instagram:"",aboutMe:"",introduction:!1,introductionText:"",pictures:[],dontIncludeTexts:!1,textsUploadFiles:!0,photoConsent:void 0,textsText:"",textsFiles:[]}}function a(o){return{name:o.name,email:"",subject:s,message:`<br><br>
Name: <strong>${o.name}</strong><br>
Stage Name: <strong>${o.stageName||"Keiner"}</strong><br>
Pronomen: <strong>${o.pronouns||"Keine"}</strong><br>
Inhaltliche Warnungen: <strong>${o.contentWarnings}</strong><br>
Zustimmung Ankündigung: <strong>${o.introduction?"Ja":"Nein"}</strong><br>
Zustimmung Fotos/Videos: <strong>${o.photoConsent?"Ja":"Nein"}</strong><br>
Texte für Hörgeschädigte: <strong>${o.dontIncludeTexts?"Nein":"Ja"}${o.textsUploadFiles?"":`<br><br>${o.textsText}`}</strong><br>

${o.introduction?`Instagram: <strong>${o.instagram||"Keins"}</strong><br>
Über mich: <strong>${o.aboutMe}</strong>`:""}
                `,files:[...o.pictures.length?[{name:`${o.name} Foto/Video - ${o.pictures[0].name}`,file:o.pictures[0]}]:[],...o.textsFiles.map((e,r)=>({name:`${o.name} Text ${r+1} - ${e.name}`,file:e}))]}}const d=new C("Bestätigung",{data:x(),generatePayload:a,emptyData:x}),l=d.payload.value.data,z=E(()=>i.value.map(o=>o.date.toLocaleDateString("de")));return console.log({slams:J,futureSlams:i,slamDates:z}),(o,e)=>(g(),V(W,null,{default:k(()=>[u(M,null,{default:k(()=>[m("Bestätigung "+p(n(s)),1)]),_:1}),t("div",se,[t("div",ie,[t("p",null,[m(" Wir freuen uns sehr, dass du am "+p(n(s))+" bei uns auftrittst! ",1),e[13]||(e[13]=t("br",null,null,-1)),e[14]||(e[14]=t("br",null,null,-1)),e[15]||(e[15]=m(" Wir haben auf jeden Fall schon einen Platz für dich reserviert, aber um dich tatsächlich fest einzuplanen, brauchen wir jetzt im Vorhinein noch ein paar Informationen von dir, ")),t("strong",ae,"deswegen fülle dieses Formular bitte spätestens bis zum "+p(n(f))+" aus",1),e[16]||(e[16]=m(". ")),e[17]||(e[17]=t("br",null,null,-1)),e[18]||(e[18]=t("br",null,null,-1)),e[19]||(e[19]=m(" Stage Name und Pronomen fragen wir dich, damit wir wissen wie wir dich am Tag des Slams ankündigen sollen. ")),e[20]||(e[20]=t("br",null,null,-1)),e[21]||(e[21]=t("br",null,null,-1)),e[22]||(e[22]=m(" Anders als viele andere Slams bitten wir dich, dir schon im Vorhinein fest zu überlegen, welche Texte du bei uns sprechen willst. Das hat zwei Gründe: ")),e[23]||(e[23]=t("br",null,null,-1)),e[24]||(e[24]=t("br",null,null,-1)),e[25]||(e[25]=t("ul",{class:"list-disc ml-6"},[t("li",null,[m(" Einerseits wollen wir auch Menschen ermöglichen, an unserem Slam teilzuhaben, die ein gesprochenes Bühnenprogramm nicht ohne weiteres verstehen können. Deswegen drucken wir die Texte aller Poet:innen vorher aus und stellen sie Menschen, die sie brauchen, für die Dauer des Slams zur Verfügung. Darüber hinaus teilen wir deine Texte natürlich mit niemandem! "),t("br"),t("br")]),t("li",null," Andererseits wollen wir schon im Vorhinein ankündigen über welche potenziell retraumatisierenden Themen am Abend gesprochen wird. So ermöglichen wir Menschen für sich zu entscheiden, ob sie gar nicht erst kommen wollen, wenn sie sich mit diesen Themen nicht wohl fühlen. ")],-1)),e[26]||(e[26]=t("br",null,null,-1)),e[27]||(e[27]=m(" Wir würden dich im Vorhinein gerne auf unserem Instagram ")),u(A),e[28]||(e[28]=m(" und hier auf der Website mit einem Foto oder Video und einem kurzen Text ankündigen. Falls du das willst (du musst nicht, um bei uns aufzutreten!), trage das bitte im Formular so ein. Wir verlinken auch gerne deinen Instagram-Account, deswegen kannst du den auch optional angeben. ")),e[29]||(e[29]=t("br",null,null,-1)),e[30]||(e[30]=t("br",null,null,-1)),e[31]||(e[31]=t("strong",{class:"font-bold!"},"Wir freuen uns auf dich!",-1))])]),u(P,{form:n(d),class:"flex-1"},{default:k(()=>[u(h,{required:"",modelValue:n(l).name,"onUpdate:modelValue":e[0]||(e[0]=r=>n(l).name=r),"display-name":"Name",placeholder:"Dein Name",type:"text"},null,8,["modelValue"]),u(h,{modelValue:n(l).stageName,"onUpdate:modelValue":e[1]||(e[1]=r=>n(l).stageName=r),"display-name":"Stage Name (falls vorhanden)",placeholder:"Der Name, mit dem du vorgestellt werden willst",type:"text"},null,8,["modelValue"]),u(h,{modelValue:n(l).pronouns,"onUpdate:modelValue":e[2]||(e[2]=r=>n(l).pronouns=r),"display-name":"Pronomen (falls du welche benutzt)",placeholder:"Deine Pronomen",type:"text"},null,8,["modelValue"]),u($,{required:"",modelValue:n(l).contentWarnings,"onUpdate:modelValue":e[3]||(e[3]=r=>n(l).contentWarnings=r),"display-name":"Inhaltliche Warnungen",placeholder:"Nenne hier bitte Themen in deinen Texten, die für manche Menschen schwierig sind, sodass wir im Vorfeld darüber informieren können. Beispiele wären etwa Suizid, Self-Harm oder sexuelle Übergriffe."},null,8,["modelValue"]),u(q,{modelValue:n(l).dontIncludeTexts,"onUpdate:modelValue":e[4]||(e[4]=r=>n(l).dontIncludeTexts=r),"display-name":"Ich möchte meine Texte *nicht* für hörgeschädigte Menschen bereitstellen."},null,8,["modelValue"]),n(l).dontIncludeTexts?b("",!0):(g(),V(oe,{key:0,modelValue:n(l).textsUploadFiles,"onUpdate:modelValue":e[5]||(e[5]=r=>n(l).textsUploadFiles=r),"option-false":"Texte reinkopieren","option-true":"Texte als Dateien hochladen"},null,8,["modelValue"])),!n(l).dontIncludeTexts&&!n(l).textsUploadFiles?(g(),V($,{key:1,required:"",modelValue:n(l).textsText,"onUpdate:modelValue":e[6]||(e[6]=r=>n(l).textsText=r),"display-name":"Texte für hörgeschädigte Menschen",placeholder:"Kopiere hier bitte deine Texte rein"},null,8,["modelValue"])):b("",!0),!n(l).dontIncludeTexts&&n(l).textsUploadFiles?(g(),V(U,{key:2,required:"",multiple:"","file-types":["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/pdf","text/plain",".md",".pages","application/vnd.oasis.opendocument.text"],modelValue:n(l).textsFiles,"onUpdate:modelValue":e[7]||(e[7]=r=>n(l).textsFiles=r),"display-name":"Texte für hörgeschädigte Menschen (mehrere auswählbar)"},null,8,["modelValue"])):b("",!0),u(_,{"option-false":"Nein, ich stimme nicht zu","option-true":"Ja, ich stimme zu",modelValue:n(l).photoConsent,"onUpdate:modelValue":e[8]||(e[8]=r=>n(l).photoConsent=r),"display-name":"Dürfen wir während des Slams Fotos und Videos von dir aufnehmen?",details:"Wir veröffentlichen nichts ohne dein Einverständnis!",required:""},null,8,["modelValue"]),u(q,{modelValue:n(l).introduction,"onUpdate:modelValue":e[9]||(e[9]=r=>n(l).introduction=r),"display-name":"Ich möchte auf Instagram (@saferspace_slam) und auf saferspace-slam.de angekündigt werden."},null,8,["modelValue"]),n(l).introduction?(g(),v(K,{key:3},[u(h,{modelValue:n(l).instagram,"onUpdate:modelValue":e[10]||(e[10]=r=>n(l).instagram=r),"display-name":"Instagram (optional)",placeholder:"Dein Instagram Account Name",type:"text"},null,8,["modelValue"]),u($,{required:"",modelValue:n(l).aboutMe,"onUpdate:modelValue":e[11]||(e[11]=r=>n(l).aboutMe=r),"display-name":"Über dich",placeholder:"Der Text, mit dem wir dich ankündigen. Du kannst hier gerne den Über-dich Text aus deiner Anmeldung wiederverwenden."},null,8,["modelValue"]),u(U,{required:"","file-types":["image/jpeg","image/png","image/webp","video/mp4","video/mpeg"],modelValue:n(l).pictures,"onUpdate:modelValue":e[12]||(e[12]=r=>n(l).pictures=r),"display-name":"Foto / Video für die Ankündigung"},null,8,["modelValue"])],64)):b("",!0)]),_:1},8,["form"])])]),_:1}))}});export{xe as default};
