import{_ as O}from"./index.ce2343c9.js";import{s as W,B as $,w as I,x as X,y as q,C as G,D as H,I as J}from"./element-plus.20e8dc41.js";import{d as S,e as K,o as p,c as f,W as e,u as C,k as A,O as o,U as b,a1 as Q,ah as Y,a as l,X as Z,a9 as ee,a0 as te,V as oe,R as le,M as w,T as ae,P as se,t as ne,b9 as ue,b8 as re}from"./@vue.af680e04.js";import{_ as de}from"./index.fe637785.js";import{_ as ie}from"./picker.81a2c4d4.js";import{_ as me}from"./picker.dbb9598d.js";import{f as U,b as ce,d as pe}from"./index.2472fd00.js";import{b as _e,c as fe}from"./decoration.6b2b803e.js";import{D as be}from"./vuedraggable.3cd96cdb.js";import"./@vueuse.8c34eaea.js";import"./@element-plus.034bf3af.js";import"./lodash-es.70b90cb6.js";import"./dayjs.fb6e5f02.js";import"./axios.cb90d22e.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.c0abb57a.js";import"./index.28799130.js";import"./index.vue_vue_type_script_setup_true_lang.eeda9cd1.js";import"./index.vue_vue_type_script_setup_true_lang.915b8e1f.js";import"./usePaging.01638e85.js";import"./vue3-video-play.e9a50e78.js";import"./lodash.badb96a8.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.68de8c98.js";import"./vue-clipboard3.f6b8ce17.js";import"./clipboard.82aa429a.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./vue.6fb9f84e.js";import"./sortablejs.c2342ac1.js";const xe={class:"color-picker flex flex-1"},Fe=b("\u91CD\u7F6E"),Ve=S({__name:"index",props:{modelValue:{type:String},defaultColor:{type:String}},emits:["update:modelValue"],setup(i,{emit:h}){const x=i,t=K({get(){return x.modelValue},set(_){h("update:modelValue",_)}}),F=["#409EFF","#28C76F","#EA5455","#FF9F43","#01CFE8","#4A5DFF"],V=()=>{t.value=x.defaultColor};return(_,d)=>{const g=W,a=$,n=I;return p(),f("div",xe,[e(g,{modelValue:C(t),"onUpdate:modelValue":d[0]||(d[0]=m=>A(t)?t.value=m:null),predefine:F},null,8,["modelValue"]),e(a,{modelValue:C(t),"onUpdate:modelValue":d[1]||(d[1]=m=>A(t)?t.value=m:null),class:"mx-[10px] flex-1",type:"text",readonly:""},null,8,["modelValue"]),e(n,{type:"text",onClick:V},{default:o(()=>[Fe]),_:1})])}}}),y=i=>(ue("data-v-779fc018"),i=i(),re(),i),ge={class:"decoration-tabbar min-w-[800px]"},Ce={class:"flex h-full items-start"},ye={class:"pages-preview mx-[30px]"},he={class:"tabbar flex"},ve=["src"],Ee={class:"leading-3 text-[12px] mt-[4px]"},De={class:"flex-1"},Be=y(()=>l("div",{class:"title flex items-center before:w-[3px] before:h-[14px] before:block before:bg-primary before:mr-2"},[b(" \u5E95\u90E8\u5BFC\u822A\u8BBE\u7F6E "),l("span",{class:"form-tips ml-[10px] !mt-0"}," \u81F3\u5C11\u6DFB\u52A02\u4E2A\u5BFC\u822A\uFF0C\u6700\u591A\u6DFB\u52A05\u4E2A\u5BFC\u822A ")],-1)),ke={class:"mb-[18px]"},Ae={class:"bg-fill-light w-full p-4 mt-4"},we={class:"upload-btn w-[60px] h-[60px]"},Ue=y(()=>l("span",{class:"text-xs leading-5"}," \u672A\u9009\u4E2D ",-1)),$e={class:"upload-btn w-[60px] h-[60px]"},Ie=y(()=>l("span",{class:"text-xs leading-5"}," \u9009\u4E2D ",-1)),Se=b(" \u6DFB\u52A0\u5BFC\u822A "),ze=b("\u4FDD\u5B58"),Te=S({__name:"tabbar",setup(i){const t=Q({style:{defaultColor:"",selectedColor:""},list:[{name:"",selected:"",unselected:"",link:{}},{name:"",selected:"",unselected:"",link:{}}]}),F=()=>{var a;((a=t.list)==null?void 0:a.length)<5?t.list.push({name:"",selected:"",unselected:"",link:{}}):U.msgError(`\u6700\u591A\u6DFB\u52A0${5}\u4E2A`)},V=a=>{var n;if(((n=t.list)==null?void 0:n.length)<=2)return U.msgError(`\u6700\u5C11\u4FDD\u7559${2}\u4E2A`);t.list.splice(a,1)},_=a=>a.relatedContext.index!=0,d=async()=>{const a=await _e();t.list=a.list,t.style=a.style},g=async()=>{await fe(ne(t)),d()};return d(),(a,n)=>{const m=ce,v=me,c=G,z=$,T=ie,P=de,E=I,D=X,B=Ve,N=q,R=H,M=J,j=O,L=Y("perms");return p(),f("div",ge,[e(M,{shadow:"never",class:"!border-none flex-1","body-style":{height:"100%"}},{default:o(()=>[l("div",Ce,[l("div",ye,[l("div",he,[(p(!0),f(Z,null,ee(t.list,(u,s)=>(p(),f("div",{class:"tabbar-item flex flex-col justify-center items-center flex-1",key:s,style:te({color:t.style.defaultColor})},[l("img",{class:"w-[22px] h-[22px]",src:u.unselected,alt:""},null,8,ve),l("div",Ee,oe(u.name),1)],4))),128))])]),l("div",De,[Be,e(R,{class:"mt-4","label-width":"70px"},{default:o(()=>[e(N,{"model-value":"content"},{default:o(()=>[e(D,{label:"\u5BFC\u822A\u56FE\u7247",name:"content"},{default:o(()=>{var u;return[l("div",ke,[e(C(be),{class:"draggable",modelValue:t.list,"onUpdate:modelValue":n[0]||(n[0]=s=>t.list=s),animation:"300",draggable:".draggable",move:_},{item:o(({element:s,index:k})=>[e(P,{onClose:r=>V(k),class:le(["max-w-[400px]",{draggable:k!=0}])},{default:o(()=>[l("div",Ae,[e(c,{label:"\u5BFC\u822A\u56FE\u6807"},{default:o(()=>[e(v,{modelValue:s.unselected,"onUpdate:modelValue":r=>s.unselected=r,"upload-class":"bg-body",size:"60px"},{upload:o(()=>[l("div",we,[e(m,{name:"el-icon-Plus",size:16}),Ue])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(v,{modelValue:s.selected,"onUpdate:modelValue":r=>s.selected=r,"upload-class":"bg-body",size:"60px"},{upload:o(()=>[l("div",$e,[e(m,{name:"el-icon-Plus",size:16}),Ie])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{label:"\u5BFC\u822A\u540D\u79F0"},{default:o(()=>[e(z,{modelValue:s.name,"onUpdate:modelValue":r=>s.name=r,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(c,{label:"\u94FE\u63A5\u5730\u5740"},{default:o(()=>[e(T,{modelValue:s.link,"onUpdate:modelValue":r=>s.link=r},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)])]),_:2},1032,["onClose","class"])]),_:1},8,["modelValue"])]),((u=t.list)==null?void 0:u.length)<5?(p(),w(c,{key:0,"label-width":"0"},{default:o(()=>[e(E,{type:"primary",onClick:F},{default:o(()=>[Se]),_:1})]),_:1})):ae("",!0)]}),_:1}),e(D,{label:"\u6837\u5F0F\u8BBE\u7F6E",name:"styles"},{default:o(()=>[e(c,{label:"\u9ED8\u8BA4\u989C\u8272"},{default:o(()=>[e(B,{class:"max-w-[400px]",modelValue:t.style.defaultColor,"onUpdate:modelValue":n[1]||(n[1]=u=>t.style.defaultColor=u),"default-color":"#999999"},null,8,["modelValue"])]),_:1}),e(c,{label:"\u9009\u4E2D\u989C\u8272"},{default:o(()=>[e(B,{class:"max-w-[400px]",modelValue:t.style.selectedColor,"onUpdate:modelValue":n[2]||(n[2]=u=>t.style.selectedColor=u),"default-color":"#4173ff"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})])])]),_:1}),se((p(),w(j,{class:"mt-4",fixed:!1},{default:o(()=>[e(E,{type:"primary",onClick:g},{default:o(()=>[ze]),_:1})]),_:1})),[[L,["decorate:tabbar:save"]]])])}}});const Bt=pe(Te,[["__scopeId","data-v-779fc018"]]);export{Bt as default};
