import{_ as H,d as K,dF as W,u as z,r as f,l as q,aq as x,E as J,c as h,a as e,w as l,L as Q,o as C,V as X,bR as Y,f as Z,e as s,g as r,bO as ee,bN as ue}from"./index.fe71d24f.js";import{E as le,a as ae}from"./el-form-item.ab4abc98.js";import{E as te,a as oe}from"./el-tab-pane.4f017737.js";import{E as de}from"./el-input.560a1fde.js";import"./el-tag.fa1ebf99.js";import{E as ne,a as me}from"./el-select.92720d7b.js";import"./el-tree.2b7bbe9f.js";import{E as se}from"./el-checkbox.afd06c1e.js";import{E as re}from"./el-tree-select.ac407ef5.js";/* empty css                       */import{E as pe,a as _e}from"./el-radio.3e812177.js";import{E as ie,a as Fe}from"./el-table-column.345d31f3.js";import{E as ce}from"./el-card.fc4013e2.js";import{E as be}from"./el-page-header.4cdc4984.js";import{a as fe,b as Ee}from"./dev_tools.c37e942d.js";import{F as Ve}from"./index.166f7b49.js";import{P as Be}from"./index.ad6b6cc0.js";import{a as ve}from"./dict.95254600.js";import{a as Ce}from"./auth.de443945.js";import"./isEqual.b744079a.js";import"./event.776e7e11.js";import"./index.8975b69d.js";import"./index.83926de1.js";import"./scroll.4a599799.js";import"./validator.9ed9a534.js";import"./_baseFlatten.f0029f0f.js";import"./el-overlay.f04a9aa9.js";const E=c=>(ee("data-v-3c2cd6b0"),c=c(),ue(),c),ye={class:"code-edit"},Ae=r("\u5355\u8868\uFF08curd\uFF09"),De=r("\u538B\u7F29\u5305\u4E0B\u8F7D"),ge=r("\u751F\u6210\u5230\u6A21\u5757"),Ue=E(()=>s("div",{class:"form-tips"},"\u751F\u6210\u6587\u4EF6\u6240\u5728\u6A21\u5757",-1)),ke=E(()=>s("div",{class:"form-tips"},[r(" \u751F\u6210\u6587\u4EF6\u6240\u5728\u76EE\u5F55\u540D,\u4E0D\u586B\u5219\u5728\u6A21\u5757\u5BF9\u5E94\u6587\u4EF6\u5939\u5185\u751F\u6210\u3002 "),s("br"),r("\u4F8B\uFF1A\u586B\u5199test\uFF0C\u5219\u63A7\u5236\u5668xxxControlle\u6587\u4EF6\u751F\u6210\u5728app/\u6A21\u5757\u540D/controller/test\u6587\u4EF6\u5939\u4E0B\u3002 "),s("br"),r("\u4E0D\u586B\u65F6\uFF0CxxxController\u751F\u6210\u5728app/\u6A21\u5757\u540D/controller\u6587\u4EF6\u5939\u4E0B\u3002 ")],-1)),qe=E(()=>s("div",{class:"form-tips"},[r(" \u751F\u6210\u6587\u4EF6\u63CF\u8FF0\u3002 "),s("br"),r("\u4F8B\uFF1A\u586B\u5199\u7528\u6237\uFF0C\u751F\u6210\u63A7\u5236\u5668\u540D/\u903B\u8F91/\u6A21\u578B\u7B49\uFF0C\u6587\u4EF6\u5185\u63CF\u8FF0\u4E3A\u7528\u6237\u63A7\u5236\u5668/\u7528\u6237\u903B\u8F91/\u7528\u6237\u6A21\u578B ")],-1)),xe=r("\u81EA\u52A8\u6784\u5EFA"),he=r("\u624B\u52A8\u6DFB\u52A0"),we=E(()=>s("div",{class:"form-tips"},"\u81EA\u52A8\u6784\u5EFA\uFF1A\u81EA\u52A8\u6267\u884C\u751F\u6210\u83DC\u5355sql\u3002\u624B\u52A8\u6DFB\u52A0\uFF1A\u81EA\u884C\u6DFB\u52A0\u83DC\u5355\u3002",-1)),Re=r("\u4FDD\u5B58"),Te=K({__name:"edit",setup(c){const w=W(),R=z(),y=f("base"),t=q({id:"",table_name:"",table_comment:"",author:"",remark:"",template_type:0,generate_type:0,module_name:"",class_dir:"",class_comment:"",table_column:[],menu:{pid:0,name:"",type:0}});f(!1);const A=x(),D=x(),g=f([]),U=f([]),T=q({table_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0",trigger:"blur"}],table_comment:[{required:!0,message:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0",trigger:"blur"}],module_name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D",trigger:"blur"}],generate_type:[{required:!0,trigger:"change"}],template_type:[{required:!0,trigger:"change"}],["menu.pid"]:[{required:!0,message:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355",trigger:"blur"}],["menu.name"]:[{required:!0,message:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0",trigger:"blur"}]}),I=async()=>{const p=await fe({id:w.query.id});Object.keys(t).forEach(a=>{t[a]=p[a]}),Q(()=>t.generate_type,a=>{var b;a==1&&((b=A.value)==null||b.open())})},L=async()=>{const p=await ve({page_type:0});g.value=p.lists},S=async()=>{const p=await Ce({page_type:0}),a={id:0,name:"\u9876\u7EA7",children:[]};a.children=p.lists,U.value.push(a)},N=async()=>{var p;await((p=D.value)==null?void 0:p.validate()),await Ee(t),R.back()};return I(),L(),S(),(p,a)=>{const b=be,k=ce,_=de,n=le,V=te,m=ie,i=se,d=ne,B=me,P=Fe,F=pe,v=_e,O=re,$=oe,G=ae,M=J;return C(),h("div",ye,[e(k,{shadow:"never"},{default:l(()=>[e(b,{content:"\u7F16\u8F91",onBack:a[0]||(a[0]=u=>p.$router.back())})]),_:1}),e(k,{class:"m-t-16",shadow:"never"},{default:l(()=>[e(G,{ref_key:"formRef",ref:D,class:"ls-form",model:t,"label-width":"80px",rules:T},{default:l(()=>[e($,{modelValue:y.value,"onUpdate:modelValue":a[13]||(a[13]=u=>y.value=u)},{default:l(()=>[e(V,{label:"\u57FA\u7840\u4FE1\u606F",name:"base"},{default:l(()=>[e(n,{label:"\u8868\u540D\u79F0",prop:"table_name"},{default:l(()=>[e(_,{modelValue:t.table_name,"onUpdate:modelValue":a[1]||(a[1]=u=>t.table_name=u),placeholder:"\u8BF7\u8F93\u5165\u8868\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u8868\u63CF\u8FF0",prop:"table_comment"},{default:l(()=>[e(_,{modelValue:t.table_comment,"onUpdate:modelValue":a[2]||(a[2]=u=>t.table_comment=u),placeholder:"\u8BF7\u8F93\u5165\u8868\u63CF\u8FF0"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u4F5C\u8005"},{default:l(()=>[e(_,{modelValue:t.author,"onUpdate:modelValue":a[3]||(a[3]=u=>t.author=u)},null,8,["modelValue"])]),_:1}),e(n,{label:"\u5907\u6CE8"},{default:l(()=>[e(_,{modelValue:t.remark,"onUpdate:modelValue":a[4]||(a[4]=u=>t.remark=u),class:"el-input",type:"textarea",rows:4},null,8,["modelValue"])]),_:1})]),_:1}),e(V,{label:"\u5B57\u6BB5\u7BA1\u7406",name:"field"},{default:l(()=>[e(P,{data:t.table_column,style:{width:"100%"}},{default:l(()=>[e(m,{label:"\u5B57\u6BB5\u5217\u540D",prop:"column_name"}),e(m,{label:"\u5B57\u6BB5\u63CF\u8FF0",prop:"column_comment"},{default:l(({row:u})=>[e(_,{modelValue:u.column_comment,"onUpdate:modelValue":o=>u.column_comment=o},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u7269\u7406\u7C7B\u578B",prop:"column_type"}),e(m,{label:"\u5FC5\u586B",width:"80"},{default:l(({row:u})=>[e(i,{modelValue:u.is_required,"onUpdate:modelValue":o=>u.is_required=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u63D2\u5165",width:"80"},{default:l(({row:u})=>[e(i,{modelValue:u.is_insert,"onUpdate:modelValue":o=>u.is_insert=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u7F16\u8F91",width:"80"},{default:l(({row:u})=>[e(i,{modelValue:u.is_update,"onUpdate:modelValue":o=>u.is_update=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u5217\u8868",width:"80"},{default:l(({row:u})=>[e(i,{modelValue:u.is_lists,"onUpdate:modelValue":o=>u.is_lists=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u67E5\u8BE2",width:"80"},{default:l(({row:u})=>[e(i,{modelValue:u.is_query,"onUpdate:modelValue":o=>u.is_query=o,"true-label":1,"false-label":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u67E5\u8BE2\u65B9\u5F0F"},{default:l(({row:u})=>[e(B,{modelValue:u.query_type,"onUpdate:modelValue":o=>u.query_type=o},{default:l(()=>[e(d,{label:"=",value:"="}),e(d,{label:"!=",value:"!="}),e(d,{label:">",value:">"}),e(d,{label:">=",value:">="}),e(d,{label:"<",value:"<"}),e(d,{label:"<=",value:"<="}),e(d,{label:"LIKE",value:"like"}),e(d,{label:"BETWEEN",value:"between"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u663E\u793A\u7C7B\u578B"},{default:l(({row:u})=>[e(B,{modelValue:u.view_type,"onUpdate:modelValue":o=>u.view_type=o},{default:l(()=>[e(d,{label:"\u6587\u672C\u6846",value:"input"}),e(d,{label:"\u6587\u672C\u57DF",value:"textarea"}),e(d,{label:"\u4E0B\u62C9\u6846",value:"select"}),e(d,{label:"\u5355\u9009\u6846",value:"radio"}),e(d,{label:"\u590D\u9009\u6846",value:"checkbox"}),e(d,{label:"\u65E5\u671F\u63A7\u4EF6",value:"datetime"}),e(d,{label:"\u56FE\u7247\u9009\u62E9\u63A7\u4EF6",value:"imageSelect"}),e(d,{label:"\u5BCC\u6587\u672C\u63A7\u4EF6",value:"editor"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u5B57\u5178\u7C7B\u578B"},{default:l(({row:u})=>[e(B,{modelValue:u.dict_type,"onUpdate:modelValue":o=>u.dict_type=o,placeholder:"\u5B57\u5178\u7C7B\u578B"},{default:l(()=>[(C(!0),h(X,null,Y(g.value,(o,j)=>(C(),Z(d,{key:j,label:o.name,value:o.type},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1})]),_:1},8,["data"])]),_:1}),e(V,{label:"\u751F\u6210\u914D\u7F6E",name:"config"},{default:l(()=>[e(n,{label:"\u6A21\u677F\u7C7B\u578B",prop:"template_type"},{default:l(()=>[e(v,{modelValue:t.template_type,"onUpdate:modelValue":a[5]||(a[5]=u=>t.template_type=u)},{default:l(()=>[e(F,{label:0},{default:l(()=>[Ae]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u751F\u6210\u65B9\u5F0F",prop:"generate_type"},{default:l(()=>[e(v,{modelValue:t.generate_type,"onUpdate:modelValue":a[6]||(a[6]=u=>t.generate_type=u)},{default:l(()=>[e(F,{label:0},{default:l(()=>[De]),_:1}),e(F,{label:1},{default:l(()=>[ge]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"\u6A21\u5757\u540D",prop:"module_name"},{default:l(()=>[s("div",null,[e(_,{class:"ls-input",modelValue:t.module_name,"onUpdate:modelValue":a[7]||(a[7]=u=>t.module_name=u),placeholder:"\u8BF7\u8F93\u5165\u6A21\u5757\u540D"},null,8,["modelValue"]),Ue])]),_:1}),e(n,{label:"\u7C7B\u76EE\u5F55"},{default:l(()=>[s("div",null,[e(_,{class:"ls-input",modelValue:t.class_dir,"onUpdate:modelValue":a[8]||(a[8]=u=>t.class_dir=u)},null,8,["modelValue"]),ke])]),_:1}),e(n,{label:"\u7C7B\u63CF\u8FF0"},{default:l(()=>[s("div",null,[e(_,{class:"ls-input",modelValue:t.class_comment,"onUpdate:modelValue":a[9]||(a[9]=u=>t.class_comment=u)},null,8,["modelValue"]),qe])]),_:1}),e(n,{label:"\u7236\u7EA7\u83DC\u5355",prop:"menu.pid"},{default:l(()=>[e(O,{modelValue:t.menu.pid,"onUpdate:modelValue":a[10]||(a[10]=u=>t.menu.pid=u),data:U.value,clearable:"","node-key":"id",props:{label:"name"},placeholder:"\u8BF7\u9009\u62E9\u7236\u7EA7\u83DC\u5355","check-strictly":""},null,8,["modelValue","data"])]),_:1}),e(n,{label:"\u83DC\u5355\u540D\u79F0",prop:"menu.name"},{default:l(()=>[e(_,{class:"ls-input",modelValue:t.menu.name,"onUpdate:modelValue":a[11]||(a[11]=u=>t.menu.name=u),placeholder:"\u8BF7\u8F93\u5165\u83DC\u5355\u540D\u79F0"},null,8,["modelValue"])]),_:1}),e(n,{label:"\u83DC\u5355\u6784\u5EFA",prop:"menu.type",required:""},{default:l(()=>[s("div",null,[e(v,{modelValue:t.menu.type,"onUpdate:modelValue":a[12]||(a[12]=u=>t.menu.type=u)},{default:l(()=>[e(F,{label:1},{default:l(()=>[xe]),_:1}),e(F,{label:0},{default:l(()=>[he]),_:1})]),_:1},8,["modelValue"]),we])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model","rules"])]),_:1}),e(Ve,null,{default:l(()=>[e(M,{type:"primary",onClick:N},{default:l(()=>[Re]),_:1})]),_:1}),e(Be,{ref_key:"popupRef",ref:A,class:"inline",content:"\u751F\u6210\u5230\u6A21\u5757\u65B9\u5F0F\u5982\u9047\u540C\u540D\u6587\u4EF6\u4F1A\u8986\u76D6\u65E7\u6587\u4EF6\uFF0C\u786E\u5B9A\u8981\u9009\u62E9\u6B64\u65B9\u5F0F\u5417\uFF1F",onCancel:a[14]||(a[14]=u=>t.generate_type=0)},null,512)])}}});var mu=H(Te,[["__scopeId","data-v-3c2cd6b0"]]);export{mu as default};
