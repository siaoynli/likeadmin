import{_ as y}from"./index.ce2343c9.js";import{I as B,w as E}from"./element-plus.20e8dc41.js";import V from"./menu.eaae64f8.js";import b from"./preview.c9d3a5e5.js";import{_ as h}from"./attr-setting.vue_vue_type_script_setup_true_lang.b5a3e29b.js";import{w as C}from"./index.cabfcce1.js";import{s as N,a as P}from"./decoration.6b2b803e.js";import{m as I,d as k}from"./index.2472fd00.js";import{d as S,a1 as A,r as c,e as _,w as F,ah as M,o as f,c as O,W as r,O as n,a as U,u as g,P as W,M as J,U as T}from"./@vue.af680e04.js";import"./@vueuse.8c34eaea.js";import"./@element-plus.034bf3af.js";import"./lodash-es.70b90cb6.js";import"./dayjs.fb6e5f02.js";import"./axios.cb90d22e.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.badb96a8.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.68de8c98.js";import"./vue-clipboard3.f6b8ce17.js";import"./clipboard.82aa429a.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./attr.vue_vue_type_script_setup_true_lang.240c63f6.js";import"./index.fe637785.js";import"./picker.81a2c4d4.js";import"./index.c0abb57a.js";import"./picker.dbb9598d.js";import"./index.28799130.js";import"./index.vue_vue_type_script_setup_true_lang.eeda9cd1.js";import"./index.vue_vue_type_script_setup_true_lang.915b8e1f.js";import"./usePaging.01638e85.js";import"./vue3-video-play.e9a50e78.js";import"./vuedraggable.3cd96cdb.js";import"./vue.6fb9f84e.js";import"./sortablejs.c2342ac1.js";import"./content.vue_vue_type_script_setup_true_lang.8e309383.js";import"./decoration-img.bacdc435.js";import"./attr.vue_vue_type_script_setup_true_lang.2ee870f2.js";import"./content.9e88b51d.js";import"./attr.vue_vue_type_script_setup_true_lang.e484336f.js";import"./add-nav.vue_vue_type_script_setup_true_lang.db127a30.js";import"./content.fca4b82c.js";import"./attr.vue_vue_type_script_setup_true_lang.02e10072.js";import"./content.vue_vue_type_script_setup_true_lang.ac7a53be.js";import"./attr.vue_vue_type_script_setup_true_lang.33076aba.js";import"./content.b7674900.js";import"./attr.vue_vue_type_script_setup_true_lang.f51fc154.js";import"./content.97d71c2c.js";import"./attr.vue_vue_type_script_setup_true_lang.bf3d4d14.js";import"./content.vue_vue_type_script_setup_true_lang.955b8ff1.js";import"./attr.vue_vue_type_script_setup_true_lang.a23a87f3.js";import"./content.d05f288c.js";const $={class:"decoration-pages min-w-[1100px]"},j={class:"flex h-full items-start"},q=T("\u4FDD\u5B58"),z=S({__name:"index",setup(G){const m=t=>t.map(e=>{var p;return{id:I(),...((p=C[e])==null?void 0:p.options())||{}}}),a=A({[1]:{id:1,type:1,name:"\u5546\u57CE\u9996\u9875",pageData:m(["search","banner","nav","news"])},[2]:{id:2,type:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageData:m(["user-info","my-service","user-banner"])},[3]:{id:3,type:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageData:m(["customer-service"])}}),o=c("1"),i=c(-1),l=_(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData)!=null?e:[]}),v=_(()=>{var t,e;return(e=(t=a[o.value])==null?void 0:t.pageData[i.value])!=null?e:""}),u=async()=>{const t=await P({id:o.value});a[String(t.id)].pageData=JSON.parse(t.data)},D=async()=>{await N({...a[o.value],data:JSON.stringify(a[o.value].pageData)}),u()};return F(o,()=>{i.value=l.value.findIndex(t=>!t.disabled),u()},{immediate:!0}),(t,e)=>{const d=B,p=E,x=y,w=M("perms");return f(),O("div",$,[r(d,{shadow:"never",class:"!border-none flex-1 flex","body-style":{flex:1}},{default:n(()=>[U("div",j,[r(V,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=s=>o.value=s),menus:a},null,8,["modelValue","menus"]),r(b,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=s=>i.value=s),pageData:g(l)},null,8,["modelValue","pageData"]),r(h,{class:"flex-1",widget:g(v)},null,8,["widget"])])]),_:1}),W((f(),J(x,{class:"mt-4",fixed:!1},{default:n(()=>[r(p,{type:"primary",onClick:D},{default:n(()=>[q]),_:1})]),_:1})),[[w,["decorate:pages:save"]]])])}}});const re=k(z,[["__scopeId","data-v-783f2e4d"]]);export{re as default};
