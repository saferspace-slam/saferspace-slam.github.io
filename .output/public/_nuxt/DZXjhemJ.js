import{T as r}from"./CFdwcIbV.js";const o=await r(()=>import("./C0-XWss4.js"),[],import.meta.url),s=o.slams.map(t=>{const e=new Date(t.date);e.setHours(20,0,0);const a=new Date(t.date);return a.setHours(23,0,0),{...t,date:new Date(t.date),startDateTime:e,endDateTime:a}}),m=s.filter(t=>t.date>=new Date).sort(),d=s.filter(t=>t.date<new Date).sort().reverse();export{m as f,d as p,s};
