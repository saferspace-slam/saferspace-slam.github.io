import{_ as s,c as a,a as d,D as c,o as r,u as i}from"./dfVAeu3s.js";const l={},m={class:"flex justify-center"},p={class:"mx-5 mb-6 lg:mb-15 lg:mx-15 max-w-[1200px] grow"};function _(e,t){return r(),a("div",m,[d("div",p,[c(e.$slots,"default")])])}const x=s(l,[["render",_]]),f={},g={class:"text-4xl text-center lg:my-20 my-10"};function u(e,t){return r(),a("h2",g,[c(e.$slots,"default")])}const y=s(f,[["render",u]]);function b(e,t){const n=new Blob([t],{type:"text/csv"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveBlob(n,e);else{const o=window.document.createElement("a");o.href=window.URL.createObjectURL(n),o.download=e,document.body.appendChild(o),o.click(),document.body.removeChild(o)}}function h(e,t){i({title:e,meta:[{name:"description",content:t},{property:"og:title",content:e},{property:"og:description",content:t},{property:"og:type",content:"website"},{property:"og:image",content:"https://saferspace-slam.de/sharepic.jpg"},{name:"twitter:card",content:"summary_large_image"}]})}export{x as C,y as P,b as a,h as s};
