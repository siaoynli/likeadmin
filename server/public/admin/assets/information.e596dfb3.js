import{M as h}from"./index.36138d34.js";import{F as C}from"./index.5985eef2.js";import{c as D,d as A}from"./setting.7c354fdf.js";import{_ as B}from"./index.73a5badc.js";import{d as V,q as E,r as j,o as q,a,b as x,c as y,f as e,w as u,e as i,m as d}from"./vendor.7e827f17.js";import"./index.c27f4ebe.js";import"./index.ff2a862c.js";const W=V({components:{MaterialSelect:h,FooterBtns:C},setup(){const t=E(null),o=j({name:"",web_favicon:"",web_logo:"",login_image:""}),F={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:["blur"]}]},m=()=>{D().then(l=>{console.log("res",l),o.name=l.name,o.web_favicon=l.web_favicon,o.web_logo=l.web_logo,o.login_image=l.login_image})},g=()=>{var l;(l=t.value)==null||l.validate(_=>{!_||(console.log("fasdfasd"),A({name:o.name,web_favicon:o.web_favicon,web_logo:o.web_logo,login_image:o.login_image}).then(n=>{console.log("res",n),m()}).catch(n=>{console.log("err",n)}))})};return q(()=>{m()}),{formData:o,rules:F,getWebsite:m,setWebsite:g,formRef:t}}}),k={class:"website-information"},U={class:"flex"},$=i("div",{class:"muted xs m-r-16"}," \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ",-1),M=d("\u67E5\u770B\u793A\u4F8B"),N={class:"flex"},z=i("div",{class:"muted xs m-r-16"}," \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ",-1),G=d("\u67E5\u770B\u793A\u4F8B"),O={class:"flex"},R=i("div",{class:"muted xs m-r-16"}," \u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ",-1),S=d("\u67E5\u770B\u793A\u4F8B"),L=d("\u4FDD\u5B58");function T(t,o,F,m,g,l){const _=a("el-input"),n=a("el-form-item"),p=a("material-select"),f=a("el-image"),r=a("el-button"),c=a("el-popover"),b=a("el-form"),v=a("el-card"),w=a("footer-btns");return x(),y("div",k,[e(v,{shadow:"never",class:"m-t-15"},{default:u(()=>[e(b,{ref:"formRef",rules:t.rules,class:"ls-form",model:t.formData,"label-width":"150px",size:"small"},{default:u(()=>[e(n,{label:"\u7F51\u7AD9\u540D\u79F0",prop:"name"},{default:u(()=>[e(_,{modelValue:t.formData.name,"onUpdate:modelValue":o[0]||(o[0]=s=>t.formData.name=s),placeholder:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",maxlength:"12","show-word-limit":""},null,8,["modelValue"])]),_:1}),e(n,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"web_favicon",required:""},{default:u(()=>[e(p,{modelValue:t.formData.web_favicon,"onUpdate:modelValue":o[1]||(o[1]=s=>t.formData.web_favicon=s),limit:1},null,8,["modelValue"]),i("div",U,[$,e(c,{placement:"right",width:"200",trigger:"hover"},{default:u(()=>[e(f,{src:"https://img2.baidu.com/it/u=3357699356,1912406716&fm=26&fmt=auto&gp=0.jpg"}),e(r,{slot:"reference",type:"text"},{default:u(()=>[M]),_:1})]),_:1})])]),_:1}),e(n,{label:"\u7F51\u7AD9LOGO",prop:"web_logo",required:""},{default:u(()=>[e(p,{modelValue:t.formData.web_logo,"onUpdate:modelValue":o[2]||(o[2]=s=>t.formData.web_logo=s),limit:1},null,8,["modelValue"]),i("div",N,[z,e(c,{placement:"right",width:"200",trigger:"hover"},{default:u(()=>[e(f,{src:"https://img2.baidu.com/it/u=3357699356,1912406716&fm=26&fmt=auto&gp=0.jpg"}),e(r,{slot:"reference",type:"text"},{default:u(()=>[G]),_:1})]),_:1})])]),_:1}),e(n,{label:"\u767B\u5F55\u9875\u5E7F\u544A\u56FE",prop:"login_image",required:""},{default:u(()=>[e(p,{modelValue:t.formData.login_image,"onUpdate:modelValue":o[3]||(o[3]=s=>t.formData.login_image=s),limit:1},null,8,["modelValue"]),i("div",O,[R,e(c,{placement:"right",width:"200",trigger:"hover"},{default:u(()=>[e(f,{src:"https://img2.baidu.com/it/u=3357699356,1912406716&fm=26&fmt=auto&gp=0.jpg"}),e(r,{slot:"reference",type:"text"},{default:u(()=>[S]),_:1})]),_:1})])]),_:1})]),_:1},8,["rules","model"])]),_:1}),e(w,null,{default:u(()=>[e(r,{type:"primary",size:"small",onClick:t.setWebsite},{default:u(()=>[L]),_:1},8,["onClick"])]),_:1})])}var Y=B(W,[["render",T]]);export{Y as default};
