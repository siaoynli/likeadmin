import{B as k,C as g,v as x,t as R,D as y}from"./element-plus.20e8dc41.js";import{j as h,a as A,b as U}from"./post.d562f168.js";import{P as j}from"./index.c0abb57a.js";import{d as q,s as c,r as I,e as N,a1 as P,o as S,c as z,W as o,O as a,a as f,u as O}from"./@vue.af680e04.js";const T={class:"edit-popup"},W=f("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C \u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D",-1),M=q({__name:"edit",emits:["success","close"],setup(G,{expose:F,emit:m}){const p=c(),r=c(),n=I("add"),_=N(()=>n.value=="edit"?"\u7F16\u8F91\u5C97\u4F4D":"\u65B0\u589E\u5C97\u4F4D"),u=P({id:"",name:"",code:"",sort:0,remark:"",status:1}),D={code:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801",trigger:["blur"]}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0",trigger:["blur"]}]},C=async()=>{var l,e;await((l=p.value)==null?void 0:l.validate()),n.value=="edit"?await h(u):await A(u),(e=r.value)==null||e.close(),m("success")},b=(l="add")=>{var e;n.value=l,(e=r.value)==null||e.open()},i=l=>{for(const e in u)l[e]!=null&&l[e]!=null&&(u[e]=l[e])},v=async l=>{const e=await U({id:l.id});i(e)},V=()=>{m("close")};return F({open:b,setFormData:i,getDetail:v}),(l,e)=>{const d=k,s=g,w=x,E=R,B=y;return S(),z("div",T,[o(j,{ref_key:"popupRef",ref:r,title:O(_),async:!0,width:"550px",onConfirm:C,onClose:V},{default:a(()=>[o(B,{ref_key:"formRef",ref:p,model:u,"label-width":"84px",rules:D},{default:a(()=>[o(s,{label:"\u5C97\u4F4D\u540D\u79F0",prop:"name"},{default:a(()=>[o(d,{modelValue:u.name,"onUpdate:modelValue":e[0]||(e[0]=t=>u.name=t),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u540D\u79F0",clearable:""},null,8,["modelValue"])]),_:1}),o(s,{label:"\u5C97\u4F4D\u7F16\u7801",prop:"code"},{default:a(()=>[o(d,{modelValue:u.code,"onUpdate:modelValue":e[1]||(e[1]=t=>u.code=t),placeholder:"\u8BF7\u8F93\u5165\u5C97\u4F4D\u7F16\u7801",clearable:""},null,8,["modelValue"])]),_:1}),o(s,{label:"\u6392\u5E8F",prop:"sort"},{default:a(()=>[f("div",null,[o(w,{modelValue:u.sort,"onUpdate:modelValue":e[2]||(e[2]=t=>u.sort=t)},null,8,["modelValue"]),W])]),_:1}),o(s,{label:"\u5907\u6CE8",prop:"remark"},{default:a(()=>[o(d,{modelValue:u.remark,"onUpdate:modelValue":e[3]||(e[3]=t=>u.remark=t),placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",type:"textarea",autosize:{minRows:4,maxRows:6},maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1}),o(s,{label:"\u5C97\u4F4D\u72B6\u6001",required:"",prop:"status"},{default:a(()=>[o(E,{modelValue:u.status,"onUpdate:modelValue":e[4]||(e[4]=t=>u.status=t),"active-value":1,"inactive-value":0},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{M as _};
