import{_ as C}from"./index.cb4406e9.js";import{d as v,r as A,f as D,h as E,i as B,j as p,k as V,m as t,w as u,l as a,R as h,Q as k,q as j,b9 as x}from"./index.7262943b.js";import{E as y}from"./el-card.04802320.js";import{E as q,a as U}from"./el-form-item.adebf638.js";import{_ as N}from"./picker.6729b316.js";import{a as R,b as W}from"./website.e9c94948.js";import"./isEqual.7bc4708d.js";import"./index.1b8c47a3.js";import"./index.76da2cec.js";import"./index.5186c1e4.js";import"./index.25d529e3.js";import"./el-loading.1d2859d4.js";import"./index.08477d63.js";/* empty css               */import"./el-select.6e6c92e8.js";import"./index.7d022602.js";import"./el-table-column.7c36d93d.js";import"./el-checkbox.196ebd48.js";import"./el-tree.6919aafa.js";import"./paging.1203f6ab.js";import"./feedback.c1b199e7.js";const I={class:"website-information"},O={class:"w-80"},G=a("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),L=a("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),Q=a("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),S=j("\u4FDD\u5B58"),pe=v({__name:"information",setup(T){const r=A(),e=D({name:"",web_favicon:"",web_logo:"",login_image:""}),_={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:["blur"]}]},m=async()=>{const n=await R();for(const o in e)e[o]=n[o]},d=async()=>{var n;await((n=r.value)==null?void 0:n.validate()),await W(e),m()};return m(),(n,o)=>{const F=E,i=q,s=N,c=U,f=y,g=B,b=C,w=x("perms");return p(),V("div",I,[t(f,{shadow:"never",class:"!border-none"},{default:u(()=>[t(c,{ref_key:"formRef",ref:r,rules:_,class:"ls-form",model:e,"label-width":"120px"},{default:u(()=>[t(i,{label:"\u7F51\u7AD9\u540D\u79F0",prop:"name"},{default:u(()=>[a("div",O,[t(F,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=l=>e.name=l),placeholder:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),t(i,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"web_favicon",required:""},{default:u(()=>[a("div",null,[t(s,{modelValue:e.web_favicon,"onUpdate:modelValue":o[1]||(o[1]=l=>e.web_favicon=l),limit:1},null,8,["modelValue"]),G])]),_:1}),t(i,{label:"\u7F51\u7AD9LOGO",prop:"web_logo",required:""},{default:u(()=>[a("div",null,[t(s,{modelValue:e.web_logo,"onUpdate:modelValue":o[2]||(o[2]=l=>e.web_logo=l),limit:1},null,8,["modelValue"]),L])]),_:1}),t(i,{label:"\u767B\u5F55\u9875\u5E7F\u544A\u56FE",prop:"login_image",required:""},{default:u(()=>[a("div",null,[t(s,{modelValue:e.login_image,"onUpdate:modelValue":o[3]||(o[3]=l=>e.login_image=l),limit:1},null,8,["modelValue"]),Q])]),_:1})]),_:1},8,["model"])]),_:1}),h((p(),k(b,null,{default:u(()=>[t(g,{type:"primary",onClick:d},{default:u(()=>[S]),_:1})]),_:1})),[[w,["setting.web.web_setting/setWebsite"]]])])}}});export{pe as default};