import{a as m,o as s,f as i,h as l,t as f,i as a,j as r,m as w,u as o,G as y,b5 as g,E as b,S as u,ba as k,H as x,b6 as B}from"./entry.4cc9b4b9.js";import{_ as S}from"./items.vue_vue_type_script_setup_true_lang.a04cd949.js";import{e as p,a as E}from"./empty_news.a764fa46.js";const _={class:"bg-white rounded-[8px]"},v={class:"flex items-center h-[60px] border-b border-br ml-5 pr-5"},z={class:"flex-1 flex min-w-0 mr-4 h-full"},A={class:"text-2xl truncate font-medium h-full border-b-2 border-tx-primary mt-[1px] flex items-center"},N={class:"px-5 pb-5"},T={key:1},I=m({__name:"card",props:{header:{type:String,default:""},link:{type:String,default:""},data:{type:Array,default:()=>[]},source:{type:String,default:"default"},onlyTitle:{type:Boolean,default:!0},titleLine:{type:Number,default:1},border:{type:Boolean,default:!0},imageSize:{type:String,default:"default"},showAuthor:{type:Boolean,default:!0},showDesc:{type:Boolean,default:!0},showClick:{type:Boolean,default:!0},showTime:{type:Boolean,default:!0},showSort:{type:Boolean,default:!0}},setup(e){return(n,C)=>{const c=k,h=S;return s(),i("div",_,[l("div",v,[l("div",z,[l("span",A,f(e.header),1)]),a(o(b),{class:"button",link:""},{default:r(()=>[a(c,{to:e.link,class:"flex"},{default:r(()=>[w(" \u66F4\u591A "),a(o(y),null,{default:r(()=>[a(o(g))]),_:1})]),_:1},8,["to"])]),_:1})]),e.data.length?u(n.$slots,"content",{key:0,data:e.data},()=>[l("div",N,[(s(!0),i(x,null,B(e.data,(t,d)=>u(n.$slots,"item",{key:t.id,item:t,index:d},()=>[a(h,{index:d,"show-sort":e.showSort,id:t.id,title:t.title,desc:t.desc,click:t.click,author:t.author,"create-time":t.create_time,image:t.image,"only-title":e.onlyTitle,"image-size":e.imageSize,"show-author":e.showAuthor,"show-desc":e.showDesc,"show-click":e.showClick,border:e.border,"title-line":e.titleLine,"show-time":e.showTime,source:e.source},null,8,["index","show-sort","id","title","desc","click","author","create-time","image","only-title","image-size","show-author","show-desc","show-click","border","title-line","show-time","source"])])),128))])]):(s(),i("div",T,[a(o(E),{image:o(p),description:"\u6682\u65E0\u8D44\u8BAF","image-size":250},null,8,["image"])]))])}}});export{I as _};
