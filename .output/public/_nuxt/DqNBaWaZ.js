import{s as c,C as k,P as $}from"./D41Yr-I2.js";import{f as v,m as w,n as h,c as g,o as f,p as D,a as l,v as M,t as V,q as x,s as z,F as I,x as S,g as N,w as y,b as o,d as m,h as t}from"./Bl0IfQr2.js";import{F as P,_ as W,a as A}from"./TXEQiVLJ.js";import{_ as b}from"./D3dzOCwc.js";import{I as U}from"./CZE_szUu.js";import{c as B,s as C}from"./BFduiVpA.js";const F={class:"flex my-4 ml-2 items-center gap-1"},T=["required"],E=v({__name:"CheckboxInput",props:w({displayName:{},required:{type:Boolean}},{modelValue:{type:Boolean},modelModifiers:{}}),emits:["update:modelValue"],setup(p){const r=p,i=h(p,"modelValue");return(d,u)=>(f(),g("label",F,[D(l("input",{class:"border-b-1 border-gray-400 w-4 h-4 min-w-4",required:r.required,"onUpdate:modelValue":u[0]||(u[0]=n=>i.value=n),type:"checkbox"},null,8,T),[[M,i.value]]),l("span",{class:x(["ml-2 text-gray-500 grow-0",{"form-label-required":r.required}])},V(r.displayName),3)]))}}),L={class:"flex flex-col my-4"},Z=["required"],j={disabled:"",selected:""},H=v({__name:"SelectInput",props:w({displayName:{},placeholder:{},required:{type:Boolean},options:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(p){const r=p,i=h(p,"modelValue");return i.value=r.placeholder,(d,u)=>(f(),g("label",L,[l("span",{class:x(["text-xs ml-2 text-gray-500",{"form-label-required":r.required}])},V(r.displayName),3),D(l("select",{class:x(["border-b-1 border-gray-400 p-2",{"text-current/50":i.value==d.placeholder}]),"onUpdate:modelValue":u[0]||(u[0]=n=>i.value=n),required:r.required},[l("option",j,V(d.placeholder),1),(f(!0),g(I,null,S(d.options,n=>(f(),g("option",null,V(n),1))),256))],10,Z),[[z,i.value]])]))}}),J={class:"flex flex-col lg:flex-row gap-10"},O={class:"lg:mt-8 flex-1"},_=v({__name:"mitmachen",setup(p){const{futureSlams:r}=B();c("Mitmachen - Saferspace Slam","Du möchtest bei uns auftreten? Dann findest du hier weitere Informationen und ein Formular zum Anmelden.");function i(s){return{name:s.name,email:s.email,subject:`${s.name}`,message:`
Pronomen: ${s.pronouns||"keine"}
Instagram: ${s.instagram}
Über mich: ${s.aboutMe}
Slam-Datum: ${s.slamDate}
Zustimmung Ankündigung: ${s.introduction?"Ja":"Nein"}`}}function d(){return{name:"",pronouns:"",email:"",instagram:"",aboutMe:"",slamDate:"",introduction:!1}}const u=new P("Mitmachen",{data:d(),generatePayload:i,emptyData:d}),n=u.payload.value.data,q=r.map(s=>s.date.toLocaleDateString("de"));return console.log({slams:C,futureSlams:r}),(s,e)=>(f(),N(k,null,{default:y(()=>[o($,null,{default:y(()=>e[7]||(e[7]=[m("Mitmachen")])),_:1}),l("div",J,[l("div",O,[l("p",null,[e[8]||(e[8]=m(" Du möchtest bei uns auftreten? ")),e[9]||(e[9]=l("br",null,null,-1)),e[10]||(e[10]=l("br",null,null,-1)),e[11]||(e[11]=m(" Wir wollen allen queeren Menschen eine Bühne geben, egal ob sie das erste mal vor Publikum sprechen oder schon viel Erfahrung mitbringen. Die einzige Voraussetzung ist, dass du drei selbst geschriebene Texte mitbringst und bereit bist, diese vor Publikum zu sprechen - mit oder ohne Blatt, ganz wie du willst. Ansonsten sind allerdings auch keine Requisiten erlaubt. ")),e[12]||(e[12]=l("br",null,null,-1)),e[13]||(e[13]=l("br",null,null,-1)),e[14]||(e[14]=m(" Pro Termin treten bei uns sechs Poet:innen auf, deswegen trage dich bitte frühzeitig für deinen Wunschtermin ein. Wenn wir da schon voll sind, werden wir dich mit Alternativen kontaktieren. ")),e[15]||(e[15]=l("br",null,null,-1)),e[16]||(e[16]=l("br",null,null,-1)),e[17]||(e[17]=m(" Am Tag des Slams bitten wir dich bereits um 18:30 Uhr vor Ort zu sein, plane also ausreichend Zeit ein. ")),e[18]||(e[18]=l("br",null,null,-1)),e[19]||(e[19]=l("br",null,null,-1)),e[20]||(e[20]=m(" Wir würden dich im Vorhinein gerne auf unserem Instagram ")),o(U),e[21]||(e[21]=m(' und hier auf der Website mit deinem "Über dich"-Text ankündigen. Falls du das willst (du musst nicht, um bei uns aufzutreten!), stimme dem bitte im Formular zu. Wir verlinken auch gerne deinen Instagram-Account, deswegen kannst du den hier auch optional angeben. ')),e[22]||(e[22]=l("br",null,null,-1)),e[23]||(e[23]=l("br",null,null,-1)),e[24]||(e[24]=m(" Wir freuen uns auf dich! "))])]),o(W,{form:t(u),class:"flex-1"},{default:y(()=>[o(b,{required:"",modelValue:t(n).name,"onUpdate:modelValue":e[0]||(e[0]=a=>t(n).name=a),"display-name":"Name",placeholder:"Dein Name",type:"text"},null,8,["modelValue"]),o(b,{modelValue:t(n).pronouns,"onUpdate:modelValue":e[1]||(e[1]=a=>t(n).pronouns=a),"display-name":"Pronomen, falls du welche benutzt",placeholder:"Deine Pronomen",type:"text"},null,8,["modelValue"]),o(b,{required:"",modelValue:t(n).email,"onUpdate:modelValue":e[2]||(e[2]=a=>t(n).email=a),"display-name":"Email-Adresse",placeholder:"Deine Email-Adresse",type:"text"},null,8,["modelValue"]),o(b,{modelValue:t(n).instagram,"onUpdate:modelValue":e[3]||(e[3]=a=>t(n).instagram=a),"display-name":"Instagram",placeholder:"Dein Instagram Account Name",type:"text"},null,8,["modelValue"]),o(H,{required:"",modelValue:t(n).slamDate,"onUpdate:modelValue":e[4]||(e[4]=a=>t(n).slamDate=a),"display-name":"Slam-Datum",placeholder:"Wann möchtest du auftreten?",options:t(q)},null,8,["modelValue","options"]),o(A,{required:"",modelValue:t(n).aboutMe,"onUpdate:modelValue":e[5]||(e[5]=a=>t(n).aboutMe=a),"display-name":"Über dich",placeholder:"Erzähl uns gerne ein bisschen was über dich! Was für Texte schreibst du? Wäre das dein erster Slam oder dein hundertster Auftritt? Was motiviert dich zum Schreiben?"},null,8,["modelValue"]),o(E,{modelValue:t(n).introduction,"onUpdate:modelValue":e[6]||(e[6]=a=>t(n).introduction=a),"display-name":'Ich möchte auf Instagram (@saferspace_slam) und auf saferspace-slam.de mit meinem "Über mich"-Text angekündigt werden.'},null,8,["modelValue"])]),_:1},8,["form"])])]),_:1}))}});export{_ as default};
