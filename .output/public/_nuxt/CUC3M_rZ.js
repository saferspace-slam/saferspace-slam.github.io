import{f as l,m as n,g as i,c as d,o as u,j as c,a as s,C as m,t as p,n as b}from"./CjYfC3st.js";const y={class:"flex my-4 ml-2 items-center gap-1 cursor-pointer"},g=["required"],x=l({__name:"CheckboxInput",props:n({displayName:{},required:{type:Boolean}},{modelValue:{type:Boolean,required:!0},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const e=o,r=i(o,"modelValue");return(f,a)=>(u(),d("label",y,[c(s("input",{class:"border-b-1 border-gray-400 accent-menu-background w-4 h-4 min-w-4 cursor-pointer",required:e.required,"onUpdate:modelValue":a[0]||(a[0]=t=>r.value=t),type:"checkbox"},null,8,g),[[m,r.value]]),s("span",{class:b(["ml-2 text-gray-500 grow-0",{"form-label-required":e.required}])},p(e.displayName),3)]))}});export{x as _};
