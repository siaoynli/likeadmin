import{_ as g}from"./items.vue_vue_type_script_setup_true_lang.f5117361.js";import{a as y,bw as h,e as w,w as k,U as x,K as B,o as r,f as n,h as p,t as E,u as t,G as v,b8 as A,i as m,c as D}from"./entry.9e062d37.js";import{u as C}from"./asyncData.a6278516.js";import{a as b,e as q}from"./empty_news.91d16f8b.js";import{b as z}from"./news.8d7c1cb1.js";import{E as F}from"./index.81bd3eb1.js";import"./debounce.74d66ae3.js";import"./index.4362a7ca.js";import"./index.248c0ae5.js";import"./_getTag.4af2d9c5.js";const S={class:"min-h-full flex flex-col"},U={class:"text-4xl mb-5"},$={key:0,class:"bg-white px-5 rounded overflow-hidden"},j={class:"py-4 flex justify-end"},I={key:1,class:"flex-1 flex justify-center items-center"},M=y({__name:"index",async setup(L){let o,c;const s=h(),a=w({page_no:1,page_size:15,keyword:s.query.keywords,cid:s.query.cid||"",sort:s.params.source}),{data:u,refresh:l}=([o,c]=k(()=>C(()=>z(a),{initialCache:!1},"$ewxCUYuASd")),o=await o,c(),o),_=x(()=>{switch(s.params.source){case"hot":return"\u70ED\u95E8\u8D44\u8BAF";case"new":return" \u6700\u65B0\u8D44\u8BAF";default:return"\u5168\u90E8\u8D44\u8BAF"}});return B(()=>s.query.keywords,d=>{a.keyword=d,l()}),(d,i)=>{const f=g;return r(),n("div",S,[p("div",U,E(t(s).query.keywords||t(s).query.name||t(_)),1),t(u).lists.length?(r(),n("div",$,[(r(!0),n(v,null,A(t(u).lists,e=>(r(),D(f,{key:e.id,id:e.id,title:e.title,desc:e.desc,click:e.click,author:e.author,"create-time":e.create_time,image:e.image,"only-title":!1},null,8,["id","title","desc","click","author","create-time","image"]))),128)),p("div",j,[m(t(F),{"current-page":a.page_no,"onUpdate:current-page":i[0]||(i[0]=e=>a.page_no=e),total:t(u).count,"page-size":a.page_size,"hide-on-single-page":"",onCurrentChange:i[1]||(i[1]=e=>t(l)())},null,8,["current-page","total","page-size"])])])):(r(),n("div",I,[m(t(b),{image:t(q),description:"\u6682\u65E0\u8D44\u8BAF","image-size":250},null,8,["image"])]))])}}});export{M as default};
