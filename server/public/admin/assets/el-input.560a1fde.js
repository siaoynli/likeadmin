import{r as V,F as Se,a8 as He,x as We,a9 as J,al as Ce,am as je,D as Z,d as Ke,an as Ue,O as qe,k as f,ao as Xe,C as Ye,I as Qe,ap as _e,P as Ie,aq as ee,ar as Ge,as as Je,at as Ze,au as et,af as tt,L as te,K as P,M as Ee,m as at,ae as ot,av as st,Q as nt,aw as lt,o as u,c as x,i as c,V as ae,T as y,h as t,U as j,e as N,f as w,w as B,W as K,p as O,ax as oe,a as rt,ay as it,az as ut,aA as dt,t as U,q as pt,X as ct,aB as ft,aC as ke,N as vt,$ as mt}from"./index.fe71d24f.js";import{U as se}from"./event.776e7e11.js";import{u as yt}from"./index.8975b69d.js";const ht=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o);function bt(o){const v=V();function l(){if(o.value==null)return;const{selectionStart:d,selectionEnd:m,value:r}=o.value;if(d==null||m==null)return;const g=r.slice(0,Math.max(0,d)),i=r.slice(Math.max(0,m));v.value={selectionStart:d,selectionEnd:m,value:r,beforeTxt:g,afterTxt:i}}function a(){if(o.value==null||v.value==null)return;const{value:d}=o.value,{beforeTxt:m,afterTxt:r,selectionStart:g}=v.value;if(m==null||r==null||g==null)return;let i=d.length;if(d.endsWith(r))i=d.length-r.length;else if(d.startsWith(m))i=m.length;else{const h=m[g-1],S=d.indexOf(h,g-1);S!==-1&&(i=S+1)}o.value.setSelectionRange(i,i)}return[l,a]}let b;const gt=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,xt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function wt(o){const v=window.getComputedStyle(o),l=v.getPropertyValue("box-sizing"),a=Number.parseFloat(v.getPropertyValue("padding-bottom"))+Number.parseFloat(v.getPropertyValue("padding-top")),d=Number.parseFloat(v.getPropertyValue("border-bottom-width"))+Number.parseFloat(v.getPropertyValue("border-top-width"));return{contextStyle:xt.map(r=>`${r}:${v.getPropertyValue(r)}`).join(";"),paddingSize:a,borderSize:d,boxSizing:l}}function ze(o,v=1,l){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:d,borderSize:m,boxSizing:r,contextStyle:g}=wt(o);b.setAttribute("style",`${g};${gt}`),b.value=o.value||o.placeholder||"";let i=b.scrollHeight;const h={};r==="border-box"?i=i+m:r==="content-box"&&(i=i-d),b.value="";const S=b.scrollHeight-d;if(Se(v)){let p=S*v;r==="border-box"&&(p=p+d+m),i=Math.max(p,i),h.minHeight=`${p}px`}if(Se(l)){let p=S*l;r==="border-box"&&(p=p+d+m),i=Math.min(p,i)}return h.height=`${i}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,h}const St=He({id:{type:String,default:void 0},size:We,disabled:Boolean,modelValue:{type:J([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:J([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String,default:""},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ce,default:""},prefixIcon:{type:Ce,default:""},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:J([Object,Array,String]),default:()=>je({})}}),Ct={[se]:o=>Z(o),input:o=>Z(o),change:o=>Z(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},It=["role"],Et=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder"],kt=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder"],zt={name:"ElInput",inheritAttrs:!1},$t=Ke({...zt,props:St,emits:Ct,setup(o,{expose:v,emit:l}){const a=o,d={suffix:"append",prefix:"prepend"},m=vt(),r=Ue(),g=qe(),i=f(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=r["aria-haspopup"],e["aria-owns"]=r["aria-owns"],e["aria-expanded"]=r["aria-expanded"]),e}),h=yt({excludeKeys:f(()=>Object.keys(i.value))}),{form:S,formItem:p}=Xe(),{inputId:ne}=Ye(a,{formItemContext:p}),$e=Qe(),k=_e(),s=Ie("input"),le=Ie("textarea"),D=ee(),z=ee(),T=V(!1),q=V(!1),A=V(!1),L=V(!1),re=V(),X=ee(a.inputStyle),M=f(()=>D.value||z.value),ie=f(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),F=f(()=>(p==null?void 0:p.validateState)||""),ue=f(()=>F.value&&Ge[F.value]),Pe=f(()=>L.value?Je:Ze),Ne=f(()=>[r.style,a.inputStyle]),de=f(()=>[a.inputStyle,X.value,{resize:a.resize}]),C=f(()=>et(a.modelValue)?"":String(a.modelValue)),R=f(()=>a.clearable&&!k.value&&!a.readonly&&!!C.value&&(T.value||q.value)),Y=f(()=>a.showPassword&&!k.value&&!a.readonly&&!!C.value&&(!!C.value||T.value)),$=f(()=>a.showWordLimit&&!!h.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!k.value&&!a.readonly&&!a.showPassword),Q=f(()=>Array.from(C.value).length),Ve=f(()=>!!$.value&&Q.value>Number(h.value.maxlength)),Te=f(()=>!!g.suffix||!!a.suffixIcon||R.value||a.showPassword||$.value||!!F.value&&ie.value),[Ae,Me]=bt(D);tt(z,e=>{if(!$.value||a.resize!=="both")return;const n=e[0],{width:I}=n.contentRect;re.value={right:`calc(100% - ${I+15+6}px)`}});const H=()=>{const{type:e,autosize:n}=a;if(!(!ft||e!=="textarea"))if(n){const I=ke(n)?n.minRows:void 0,E=ke(n)?n.maxRows:void 0;X.value={...ze(z.value,I,E)}}else X.value={minHeight:ze(z.value).minHeight}},W=()=>{const e=M.value;!e||e.value===C.value||(e.value=C.value)},pe=e=>{const{el:n}=m.vnode;if(!n)return;const E=Array.from(n.querySelectorAll(`.${s.e(e)}`)).find(Re=>Re.parentNode===n);if(!E)return;const we=d[e];g[we]?E.style.transform=`translateX(${e==="suffix"?"-":""}${n.querySelector(`.${s.be("group",we)}`).offsetWidth}px)`:E.removeAttribute("style")},_=()=>{pe("prefix"),pe("suffix")},G=async e=>{Ae();let{value:n}=e.target;a.formatter&&(n=a.parser?a.parser(n):n,n=a.formatter(n)),!A.value&&n!==C.value&&(l(se,n),l("input",n),await P(),W(),Me())},ce=e=>{l("change",e.target.value)},fe=e=>{l("compositionstart",e),A.value=!0},ve=e=>{var n;l("compositionupdate",e);const I=(n=e.target)==null?void 0:n.value,E=I[I.length-1]||"";A.value=!ht(E)},me=e=>{l("compositionend",e),A.value&&(A.value=!1,G(e))},Fe=()=>{L.value=!L.value,ye()},ye=async()=>{var e;await P(),(e=M.value)==null||e.focus()},Be=()=>{var e;return(e=M.value)==null?void 0:e.blur()},he=e=>{T.value=!0,l("focus",e)},be=e=>{var n;T.value=!1,l("blur",e),a.validateEvent&&((n=p==null?void 0:p.validate)==null||n.call(p,"blur").catch(I=>Ee()))},Oe=e=>{q.value=!1,l("mouseleave",e)},De=e=>{q.value=!0,l("mouseenter",e)},ge=e=>{l("keydown",e)},Le=()=>{var e;(e=M.value)==null||e.select()},xe=()=>{l(se,""),l("change",""),l("clear"),l("input","")};return te(()=>a.modelValue,()=>{var e;P(()=>H()),a.validateEvent&&((e=p==null?void 0:p.validate)==null||e.call(p,"change").catch(n=>Ee()))}),te(C,()=>W()),te(()=>a.type,async()=>{await P(),W(),H(),_()}),at(async()=>{!a.formatter&&a.parser,W(),_(),await P(),H()}),ot(async()=>{await P(),_()}),v({input:D,textarea:z,ref:M,textareaStyle:de,autosize:st(a,"autosize"),focus:ye,blur:Be,select:Le,clear:xe,resizeTextarea:H}),(e,n)=>nt((u(),x("div",oe(t(i),{class:[e.type==="textarea"?t(le).b():t(s).b(),t(s).m(t($e)),t(s).is("disabled",t(k)),t(s).is("exceed",t(Ve)),{[t(s).b("group")]:e.$slots.prepend||e.$slots.append,[t(s).bm("group","append")]:e.$slots.append,[t(s).bm("group","prepend")]:e.$slots.prepend,[t(s).m("prefix")]:e.$slots.prefix||e.prefixIcon,[t(s).m("suffix")]:e.$slots.suffix||e.suffixIcon||e.clearable||e.showPassword,[t(s).bm("suffix","password-clear")]:t(R)&&t(Y)},e.$attrs.class],style:t(Ne),role:e.containerRole,onMouseenter:De,onMouseleave:Oe}),[c(" input "),e.type!=="textarea"?(u(),x(ae,{key:0},[c(" prepend slot "),e.$slots.prepend?(u(),x("div",{key:0,class:y(t(s).be("group","prepend"))},[j(e.$slots,"prepend")],2)):c("v-if",!0),N("div",{class:y([t(s).e("wrapper"),t(s).is("focus",T.value)])},[c(" prefix slot "),e.$slots.prefix||e.prefixIcon?(u(),x("span",{key:0,class:y(t(s).e("prefix"))},[N("span",{class:y(t(s).e("prefix-inner"))},[j(e.$slots,"prefix"),e.prefixIcon?(u(),w(t(O),{key:0,class:y(t(s).e("icon"))},{default:B(()=>[(u(),w(K(e.prefixIcon)))]),_:1},8,["class"])):c("v-if",!0)],2)],2)):c("v-if",!0),N("input",oe({id:t(ne),ref_key:"input",ref:D,class:t(s).e("inner")},t(h),{type:e.showPassword?L.value?"text":"password":e.type,disabled:t(k),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:G,onFocus:he,onBlur:be,onChange:ce,onKeydown:ge}),null,16,Et),c(" suffix slot "),t(Te)?(u(),x("span",{key:1,class:y(t(s).e("suffix"))},[N("span",{class:y(t(s).e("suffix-inner"))},[!t(R)||!t(Y)||!t($)?(u(),x(ae,{key:0},[j(e.$slots,"suffix"),e.suffixIcon?(u(),w(t(O),{key:0,class:y(t(s).e("icon"))},{default:B(()=>[(u(),w(K(e.suffixIcon)))]),_:1},8,["class"])):c("v-if",!0)],64)):c("v-if",!0),t(R)?(u(),w(t(O),{key:1,class:y([t(s).e("icon"),t(s).e("clear")]),onMousedown:ut(t(dt),["prevent"]),onClick:xe},{default:B(()=>[rt(t(it))]),_:1},8,["class","onMousedown"])):c("v-if",!0),t(Y)?(u(),w(t(O),{key:2,class:y([t(s).e("icon"),t(s).e("password")]),onClick:Fe},{default:B(()=>[(u(),w(K(t(Pe))))]),_:1},8,["class"])):c("v-if",!0),t($)?(u(),x("span",{key:3,class:y(t(s).e("count"))},[N("span",{class:y(t(s).e("count-inner"))},U(t(Q))+" / "+U(t(h).maxlength),3)],2)):c("v-if",!0),t(F)&&t(ue)&&t(ie)?(u(),w(t(O),{key:4,class:y([t(s).e("icon"),t(s).e("validateIcon"),t(s).is("loading",t(F)==="validating")])},{default:B(()=>[(u(),w(K(t(ue))))]),_:1},8,["class"])):c("v-if",!0)],2)],2)):c("v-if",!0)],2),c(" append slot "),e.$slots.append?(u(),x("div",{key:1,class:y(t(s).be("group","append"))},[j(e.$slots,"append")],2)):c("v-if",!0)],64)):(u(),x(ae,{key:1},[c(" textarea "),N("textarea",oe({id:t(ne),ref_key:"textarea",ref:z,class:t(le).e("inner")},t(h),{tabindex:e.tabindex,disabled:t(k),readonly:e.readonly,autocomplete:e.autocomplete,style:t(de),"aria-label":e.label,placeholder:e.placeholder,onCompositionstart:fe,onCompositionupdate:ve,onCompositionend:me,onInput:G,onFocus:he,onBlur:be,onChange:ce,onKeydown:ge}),null,16,kt),t($)?(u(),x("span",{key:0,style:pt(re.value),class:y(t(s).e("count"))},U(t(Q))+" / "+U(t(h).maxlength),7)):c("v-if",!0)],64))],16,It)),[[lt,e.type!=="hidden"]])}});var Pt=ct($t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const At=mt(Pt);export{At as E,ht as i};
