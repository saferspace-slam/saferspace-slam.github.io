import{f as t,m as d,g as i,c as p,o as n,a as o,j as u,t as m,n as c,D as y}from"./CjYfC3st.js";const f={class:"flex flex-col my-4"},x=["required","type","placeholder"],h=t({__name:"TextInput",props:d({displayName:{},placeholder:{},type:{},required:{type:Boolean}},{modelValue:{required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const e=a,l=i(a,"modelValue");return(q,r)=>(n(),p("label",f,[o("span",{class:c(["text-xs ml-2 text-gray-500",{"form-label-required":e.required}])},m(e.displayName),3),u(o("input",{class:"border-b-1 border-gray-400 p-2",required:e.required,"onUpdate:modelValue":r[0]||(r[0]=s=>l.value=s),type:e.type,placeholder:e.placeholder},null,8,x),[[y,l.value]])]))}});export{h as _};
