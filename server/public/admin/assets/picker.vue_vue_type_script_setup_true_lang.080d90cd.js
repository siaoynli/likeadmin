import{X as N,C as W,w as $,E as I,a as L}from"./element-plus.6c36063e.js";import{p as z,q as R,b as T}from"./index.84fff747.js";import{d as U,r as j,s as D,a1 as O,e as P,w as X,j as q,o as i,c,W as n,O as a,u as h,M as A,X as V,a as u,a9 as k,R as G,V as H,$ as C,U as J,n as E}from"./@vue.af680e04.js";import{c as K}from"./@vueuse.8c34eaea.js";const Q={class:"icon-select"},Y={class:"flex justify-between"},Z=u("div",{class:"mb-3"},"\u8BF7\u9009\u62E9\u56FE\u6807",-1),ee=["onClick"],oe={class:"h-[280px]"},te={class:"flex flex-wrap"},se={key:0,class:"flex items-center"},le=J("\u65E0"),re=U({__name:"picker",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(r,{emit:p}){const _=j(0),b=[{name:"element\u56FE\u6807",icons:z()},{name:"\u672C\u5730\u56FE\u6807",icons:R()}],m=D(),e=O({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),w=()=>{e.inputFocus=e.popoverVisible=!0},x=()=>{e.inputFocus=!1,e.popoverVisible=e.mouseoverSelect},F=t=>{e.mouseoverSelect=e.popoverVisible=!1,p("update:modelValue",t),p("change",t)},y=()=>{p("update:modelValue",""),p("change","")},g=P(()=>{var l,d;const t=(d=(l=b[_.value])==null?void 0:l.icons)!=null?d:[];if(!e.inputValue)return t;const o=e.inputValue.toLowerCase();return t.filter(f=>{if(f.toLowerCase().indexOf(o)!==-1)return f})}),B=()=>{E(()=>{var o;const t=(o=m.value)==null?void 0:o.$el.offsetWidth;e.popoverWidth=t<300?300:t})};return K(document.body,"click",()=>{e.popoverVisible=!!(e.inputFocus||e.mouseoverSelect)}),X(()=>e.popoverVisible,async t=>{var o,l;await E(),t?(o=m.value)==null||o.focus():(l=m.value)==null||l.blur()}),q(()=>{B()}),(t,o)=>{const l=T,d=$,f=I,S=L,M=N;return i(),c("div",Q,[n(M,{trigger:"contextmenu",visible:e.popoverVisible,"onUpdate:visible":o[3]||(o[3]=s=>e.popoverVisible=s),width:e.popoverWidth},{reference:a(()=>[n(h(W),{ref_key:"inputRef",ref:m,modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=s=>e.inputValue=s),modelModifiers:{trim:!0},placeholder:"\u641C\u7D22\u56FE\u6807",autofocus:!1,disabled:r.disabled,onFocus:w,onBlur:x,clearable:""},{prepend:a(()=>[r.modelValue?(i(),c("div",se,[n(S,{class:"flex-1 w-20",content:r.modelValue,placement:"top"},{default:a(()=>[(i(),A(l,{class:"mr-1",key:r.modelValue,name:r.modelValue,size:16},null,8,["name"]))]),_:1},8,["content"])])):(i(),c(V,{key:1},[le],64))]),append:a(()=>[n(d,null,{default:a(()=>[n(l,{name:"el-icon-Close",size:18,onClick:y})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:a(()=>[u("div",{onMouseover:o[0]||(o[0]=C(s=>e.mouseoverSelect=!0,["stop"])),onMouseout:o[1]||(o[1]=C(s=>e.mouseoverSelect=!1,["stop"]))},[u("div",null,[u("div",Y,[Z,u("div",null,[(i(),c(V,null,k(b,(s,v)=>u("span",{key:v,class:G(["cursor-pointer text-sm ml-2",{"text-primary":v==_.value}]),onClick:ne=>_.value=v},H(s.name),11,ee)),64))])]),u("div",oe,[n(f,null,{default:a(()=>[u("div",te,[(i(!0),c(V,null,k(h(g),s=>(i(),c("div",{key:s,class:"m-1"},[n(d,{onClick:v=>F(s)},{default:a(()=>[n(l,{name:s,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}});export{re as _};
