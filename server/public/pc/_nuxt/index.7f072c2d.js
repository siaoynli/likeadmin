import{I as oe,J as Q,K as le,a as N,M as se,N as K,O as ae,Q as I,R as te,o as E,f as U,h as O,S as k,T as C,u as e,t as ne,i as M,j as h,c as j,D as re,G as ie,p as q,B as W,U as X,V as ue,W as de,X as _,Y as ce,Z as fe,$ as Z,r as D,a0 as me,a1 as pe,a2 as ye,a3 as ge,a4 as G,a5 as ve,a6 as Ce,a7 as be,a8 as J,a9 as he,aa as ke,ab as Y,ac as De,ad as Ee,ae as Ie,af as Be,ag as Se,ah as Te,F as $e,ai as Ae,aj as we,ak as Fe,al as Re,am as Oe}from"./entry.4cc9b4b9.js";const Me=(...o)=>t=>{o.forEach(r=>{oe(r)?r(t):r.value=t})},H=Symbol("dialogInjectionKey"),x=Q({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:le},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Ne={close:()=>!0},Pe=["aria-label"],Le=["id"],ze=N({name:"ElDialogContent"}),Ve=N({...ze,props:x,emits:Ne,setup(o){const t=o,{t:r}=se(),{Close:i}=ue,{dialogRef:d,headerRef:m,bodyId:B,ns:a,style:n}=K(H),{focusTrapRef:p}=K(ae),c=Me(p,d),y=I(()=>t.draggable);return te(d,m,y),(s,u)=>(E(),U("div",{ref:e(c),class:C([e(a).b(),e(a).is("fullscreen",s.fullscreen),e(a).is("draggable",e(y)),e(a).is("align-center",s.alignCenter),{[e(a).m("center")]:s.center},s.customClass]),style:W(e(n)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:m,class:C(e(a).e("header"))},[k(s.$slots,"header",{},()=>[O("span",{role:"heading",class:C(e(a).e("title"))},ne(s.title),3)]),s.showClose?(E(),U("button",{key:0,"aria-label":e(r)("el.dialog.close"),class:C(e(a).e("headerbtn")),type:"button",onClick:u[0]||(u[0]=$=>s.$emit("close"))},[M(e(ie),{class:C(e(a).e("close"))},{default:h(()=>[(E(),j(re(s.closeIcon||e(i))))]),_:1},8,["class"])],10,Pe)):q("v-if",!0)],2),O("div",{id:e(B),class:C(e(a).e("body"))},[k(s.$slots,"default")],10,Le),s.$slots.footer?(E(),U("footer",{key:0,class:C(e(a).e("footer"))},[k(s.$slots,"footer")],2)):q("v-if",!0)],6))}});var Ue=X(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const je=Q({...x,appendToBody:{type:Boolean,default:!1},beforeClose:{type:de(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),qe={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[_]:o=>ce(o),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},Ke=(o,t)=>{const i=be().emit,{nextZIndex:d}=fe();let m="";const B=Z(),a=Z(),n=D(!1),p=D(!1),c=D(!1),y=D(o.zIndex||d());let s,u;const $=me("namespace",pe),P=I(()=>{const f={},R=`--${$.value}-dialog`;return o.fullscreen||(o.top&&(f[`${R}-margin-top`]=o.top),o.width&&(f[`${R}-width`]=ye(o.width))),f}),L=I(()=>o.alignCenter?{display:"flex"}:{});function z(){i("opened")}function A(){i("closed"),i(_,!1),o.destroyOnClose&&(c.value=!1)}function V(){i("close")}function w(){u==null||u(),s==null||s(),o.openDelay&&o.openDelay>0?{stop:s}=J(()=>F(),o.openDelay):F()}function S(){s==null||s(),u==null||u(),o.closeDelay&&o.closeDelay>0?{stop:u}=J(()=>l(),o.closeDelay):l()}function T(){function f(R){R||(p.value=!0,n.value=!1)}o.beforeClose?o.beforeClose(f):S()}function g(){o.closeOnClickModal&&T()}function F(){!he||(n.value=!0)}function l(){n.value=!1}function v(){i("openAutoFocus")}function b(){i("closeAutoFocus")}o.lockScroll&&ge(n);function ee(){o.closeOnPressEscape&&T()}return G(()=>o.modelValue,f=>{f?(p.value=!1,w(),c.value=!0,y.value=o.zIndex?y.value++:d(),ve(()=>{i("open"),t.value&&(t.value.scrollTop=0)})):n.value&&S()}),G(()=>o.fullscreen,f=>{!t.value||(f?(m=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=m)}),Ce(()=>{o.modelValue&&(n.value=!0,c.value=!0,w())}),{afterEnter:z,afterLeave:A,beforeLeave:V,handleClose:T,onModalClick:g,close:S,doClose:l,onOpenAutoFocus:v,onCloseAutoFocus:b,onCloseRequested:ee,titleId:B,bodyId:a,closed:p,style:P,overlayDialogStyle:L,rendered:c,visible:n,zIndex:y}},Ze=["aria-label","aria-labelledby","aria-describedby"],Ge=N({name:"ElDialog",inheritAttrs:!1}),Je=N({...Ge,props:je,emits:qe,setup(o,{expose:t}){const r=o,i=ke();Y({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},I(()=>!!i.title)),Y({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},I(()=>!!r.customClass));const d=De("dialog"),m=D(),B=D(),a=D(),{visible:n,titleId:p,bodyId:c,style:y,overlayDialogStyle:s,rendered:u,zIndex:$,afterEnter:P,afterLeave:L,beforeLeave:z,handleClose:A,onModalClick:V,onOpenAutoFocus:w,onCloseAutoFocus:S,onCloseRequested:T}=Ke(r,m);Ee(H,{dialogRef:m,headerRef:B,bodyId:c,ns:d,rendered:u,style:y});const g=Ie(V),F=I(()=>r.draggable&&!r.fullscreen);return t({visible:n,dialogContentRef:a}),(l,v)=>(E(),j(Re,{to:"body",disabled:!l.appendToBody},[M(Fe,{name:"dialog-fade",onAfterEnter:e(P),onAfterLeave:e(L),onBeforeLeave:e(z),persisted:""},{default:h(()=>[Be(M(e(Se),{"custom-mask-event":"",mask:l.modal,"overlay-class":l.modalClass,"z-index":e($)},{default:h(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":l.title||void 0,"aria-labelledby":l.title?void 0:e(p),"aria-describedby":e(c),class:C(`${e(d).namespace.value}-overlay-dialog`),style:W(e(s)),onClick:v[0]||(v[0]=(...b)=>e(g).onClick&&e(g).onClick(...b)),onMousedown:v[1]||(v[1]=(...b)=>e(g).onMousedown&&e(g).onMousedown(...b)),onMouseup:v[2]||(v[2]=(...b)=>e(g).onMouseup&&e(g).onMouseup(...b))},[M(e(Te),{loop:"",trapped:e(n),"focus-start-el":"container",onFocusAfterTrapped:e(w),onFocusAfterReleased:e(S),onReleaseRequested:e(T)},{default:h(()=>[e(u)?(E(),j(Ue,$e({key:0,ref_key:"dialogContentRef",ref:a},l.$attrs,{"custom-class":l.customClass,center:l.center,"align-center":l.alignCenter,"close-icon":l.closeIcon,draggable:e(F),fullscreen:l.fullscreen,"show-close":l.showClose,title:l.title,onClose:e(A)}),Ae({header:h(()=>[l.$slots.title?k(l.$slots,"title",{key:1}):k(l.$slots,"header",{key:0,close:e(A),titleId:e(p),titleClass:e(d).e("title")})]),default:h(()=>[k(l.$slots,"default")]),_:2},[l.$slots.footer?{name:"footer",fn:h(()=>[k(l.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onReleaseRequested"])],46,Ze)]),_:3},8,["mask","overlay-class","z-index"]),[[we,e(n)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var Ye=X(Je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const We=Oe(Ye);export{We as E,Me as c};
