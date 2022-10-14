import{Z as L,C as P,D as M,Q,R as W,t as X,F as Z}from"./element-plus.81dd3128.js";import{_ as z}from"./picker.42814743.js";import{P as G}from"./index.5e5e0158.js";import{u as H}from"./useDictOptions.d3a48a39.js";import{r as p}from"./index.fd9b2e6e.js";import{r as J}from"./role.d904a3f6.js";import{e as K}from"./post.a0310f20.js";import{d as Y}from"./department.e970ef7b.js";import{d as $,s as A,r as ee,e as ue,a1 as y,o as n,c as V,W as a,O as o,a as i,u as m,X as j,a9 as k,M as c,T as x}from"./@vue.af680e04.js";function be(r){return p.get({url:"/auth.admin/lists",params:r})}function le(r){return p.post({url:"/auth.admin/add",params:r})}function ae(r){return p.post({url:"/auth.admin/edit",params:r})}function Be(r){return p.post({url:"/auth.admin/delete",params:r})}function oe(r){return p.get({url:"/auth.admin/detail",params:r})}const te={class:"edit-popup"},re=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100px\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),de=i("div",{class:"form-tips"},"\u5141\u8BB8\u591A\u4EBA\u540C\u65F6\u5728\u7EBF\u767B\u5F55",-1),Ee=$({__name:"edit",emits:["success","close"],setup(r,{expose:U,emit:v}){const w=A(),_=A(),f=ee("add"),h=ue(()=>f.value=="edit"?"\u7F16\u8F91\u7BA1\u7406\u5458":"\u65B0\u589E\u7BA1\u7406\u5458"),e=y({id:"",account:"",name:"",dept_id:"",jobs_id:"",role_id:"",avatar:"",password:"",password_confirm:"",disable:0,multipoint_login:1,root:0}),g=(s,u,t)=>{e.password&&(u||t(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801")),u!==e.password&&t(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!"))),t()},F=y({account:[{required:!0,message:"\u8BF7\u8F93\u5165\u8D26\u53F7",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}],role_id:[{required:!0,message:"\u8BF7\u9009\u62E9\u89D2\u8272",trigger:["blur"]}],password:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801",trigger:["blur"]}],password_confirm:[{required:!0,message:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",trigger:["blur"]},{validator:g,trigger:"blur"}]}),{optionsData:b}=H({role:{api:J},jobs:{api:K},dept:{api:Y}}),R=async()=>{var s,u;await((s=w.value)==null?void 0:s.validate()),f.value=="edit"?await ae(e):await le(e),(u=_.value)==null||u.close(),v("success")},q=(s="add")=>{var u;f.value=s,(u=_.value)==null||u.open()},N=async s=>{const u=await oe({id:s.id});for(const t in e)u[t]!=null&&u[t]!=null&&(e[t]=u[t]),Number(e.dept_id)==0&&(e.dept_id=""),Number(e.jobs_id)==0&&(e.jobs_id="");F.password=[],F.password_confirm=[{validator:g,trigger:"blur"}]},S=()=>{v("close")};return U({open:q,setFormData:N}),(s,u)=>{const t=P,d=M,O=z,T=L,B=Q,C=W,D=X,I=Z;return n(),V("div",te,[a(G,{ref_key:"popupRef",ref:_,title:m(h),async:!0,width:"550px",onConfirm:R,onClose:S},{default:o(()=>[a(I,{ref_key:"formRef",ref:w,model:e,"label-width":"84px",rules:F},{default:o(()=>[a(d,{label:"\u8D26\u53F7",prop:"account"},{default:o(()=>[a(t,{modelValue:e.account,"onUpdate:modelValue":u[0]||(u[0]=l=>e.account=l),disabled:e.root==1,placeholder:"\u8BF7\u8F93\u5165\u8D26\u53F7",clearable:""},null,8,["modelValue","disabled"])]),_:1}),a(d,{label:"\u5934\u50CF"},{default:o(()=>[i("div",null,[i("div",null,[a(O,{modelValue:e.avatar,"onUpdate:modelValue":u[1]||(u[1]=l=>e.avatar=l),limit:1},null,8,["modelValue"])]),re])]),_:1}),a(d,{label:"\u540D\u79F0",prop:"name"},{default:o(()=>[a(t,{modelValue:e.name,"onUpdate:modelValue":u[2]||(u[2]=l=>e.name=l),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),a(d,{label:"\u5F52\u5C5E\u90E8\u95E8",prop:"dept_id"},{default:o(()=>[a(T,{class:"flex-1",modelValue:e.dept_id,"onUpdate:modelValue":u[3]||(u[3]=l=>e.dept_id=l),data:m(b).dept,clearable:"","node-key":"id",props:{value:"id",label:"name",disabled(l){return l.status!==1}},"check-strictly":"","default-expand-all":!0,placeholder:"\u8BF7\u9009\u62E9\u4E0A\u7EA7\u90E8\u95E8"},null,8,["modelValue","data","props"])]),_:1}),a(d,{label:"\u5C97\u4F4D",prop:"jobs_id"},{default:o(()=>[a(C,{class:"flex-1",modelValue:e.jobs_id,"onUpdate:modelValue":u[4]||(u[4]=l=>e.jobs_id=l),clearable:"",placeholder:"\u8BF7\u9009\u62E9\u5C97\u4F4D"},{default:o(()=>[(n(!0),V(j,null,k(m(b).jobs,(l,E)=>(n(),c(B,{key:E,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(d,{label:"\u89D2\u8272",prop:"role_id"},{default:o(()=>[a(C,{modelValue:e.role_id,"onUpdate:modelValue":u[5]||(u[5]=l=>e.role_id=l),disabled:e.root==1,class:"flex-1",placeholder:"\u8BF7\u9009\u62E9\u89D2\u8272",clearable:""},{default:o(()=>[e.root==1?(n(),c(B,{key:0,label:"\u7CFB\u7EDF\u7BA1\u7406\u5458",value:0})):x("",!0),(n(!0),V(j,null,k(m(b).role,(l,E)=>(n(),c(B,{key:E,label:l.name,value:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),a(d,{label:"\u5BC6\u7801",prop:"password"},{default:o(()=>[a(t,{modelValue:e.password,"onUpdate:modelValue":u[6]||(u[6]=l=>e.password=l),"show-password":"",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),a(d,{label:"\u786E\u8BA4\u5BC6\u7801",prop:"password_confirm"},{default:o(()=>[a(t,{modelValue:e.password_confirm,"onUpdate:modelValue":u[7]||(u[7]=l=>e.password_confirm=l),"show-password":"",clearable:"",placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801"},null,8,["modelValue"])]),_:1}),e.root!=1?(n(),c(d,{key:0,label:"\u7BA1\u7406\u5458\u72B6\u6001"},{default:o(()=>[a(D,{modelValue:e.disable,"onUpdate:modelValue":u[8]||(u[8]=l=>e.disable=l),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1})):x("",!0),a(d,{label:"\u591A\u5904\u767B\u5F55"},{default:o(()=>[i("div",null,[a(D,{modelValue:e.multipoint_login,"onUpdate:modelValue":u[9]||(u[9]=l=>e.multipoint_login=l),"active-value":1,"inactive-value":0},null,8,["modelValue"]),de])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])])}}});export{Ee as _,ae as a,Be as b,be as c};
