import{bD as xl,as as gl,bE as _l,bF as bl,an as hl,az as yl,aC as tl,bG as en,au as Sl,bH as ln,a9 as Kl,bq as nn,J as tn,aE as on,a as ce,aH as Hl,ac as re,Q as C,o as O,f as B,h as A,S as ne,T as S,u as M,c as R,j as L,i as se,bg as Cl,b3 as W,G as sl,p as D,B as ee,ak as Wl,U as ye,am as Nl,N as Ae,bI as $e,bJ as F,a4 as K,a7 as rl,e as De,aJ as ul,aN as an,a5 as $,af as he,aj as dl,t as _,r as N,a6 as cl,aP as kl,M as fl,ab as sn,s as Ol,bK as rn,aI as un,I as wl,bL as be,bM as ol,bN as Tl,X as le,bO as dn,bl as cn,bP as fn,bQ as Gl,q as pn,bR as vn,K as El,bS as mn,bT as gn,ad as Ql,bU as ae,bV as bn,H as il,b6 as Ll,bB as q,bW as hn,ai as yn,D as Il,aS as Ul}from"./entry.4cc9b4b9.js";import{E as Sn,a as Cn,u as On,b as wn}from"./index.68d692a2.js";import{d as Ml,c as Pl}from"./_getTag.8fcc170a.js";import{d as Al}from"./debounce.8e808ef0.js";var Tn="__lodash_hash_undefined__";function En(e){return this.__data__.set(e,Tn),this}function Ln(e){return this.__data__.has(e)}function Be(e){var l=-1,t=e==null?0:e.length;for(this.__data__=new xl;++l<t;)this.add(e[l])}Be.prototype.add=Be.prototype.push=En;Be.prototype.has=Ln;function In(e,l){for(var t=-1,r=e==null?0:e.length;++t<r;)if(l(e[t],t,e))return!0;return!1}function Mn(e,l){return e.has(l)}var Pn=1,An=2;function jl(e,l,t,r,u,a){var s=t&Pn,d=e.length,c=l.length;if(d!=c&&!(s&&c>d))return!1;var b=a.get(e),p=a.get(l);if(b&&p)return b==l&&p==e;var h=-1,m=!0,w=t&An?new Be:void 0;for(a.set(e,l),a.set(l,e);++h<d;){var i=e[h],v=l[h];if(r)var y=s?r(v,i,h,l,e,a):r(i,v,h,e,l,a);if(y!==void 0){if(y)continue;m=!1;break}if(w){if(!In(l,function(T,E){if(!Mn(w,E)&&(i===T||u(i,T,t,r,a)))return w.push(E)})){m=!1;break}}else if(!(i===v||u(i,v,t,r,a))){m=!1;break}}return a.delete(e),a.delete(l),m}function $n(e){var l=-1,t=Array(e.size);return e.forEach(function(r,u){t[++l]=[u,r]}),t}function Bn(e){var l=-1,t=Array(e.size);return e.forEach(function(r){t[++l]=r}),t}var Dn=1,Rn=2,zn="[object Boolean]",Vn="[object Date]",qn="[object Error]",Fn="[object Map]",Kn="[object Number]",Hn="[object RegExp]",Wn="[object Set]",Nn="[object String]",kn="[object Symbol]",Gn="[object ArrayBuffer]",Qn="[object DataView]",$l=gl?gl.prototype:void 0,al=$l?$l.valueOf:void 0;function Un(e,l,t,r,u,a,s){switch(t){case Qn:if(e.byteLength!=l.byteLength||e.byteOffset!=l.byteOffset)return!1;e=e.buffer,l=l.buffer;case Gn:return!(e.byteLength!=l.byteLength||!a(new bl(e),new bl(l)));case zn:case Vn:case Kn:return _l(+e,+l);case qn:return e.name==l.name&&e.message==l.message;case Hn:case Nn:return e==l+"";case Fn:var d=$n;case Wn:var c=r&Dn;if(d||(d=Bn),e.size!=l.size&&!c)return!1;var b=s.get(e);if(b)return b==l;r|=Rn,s.set(e,l);var p=jl(d(e),d(l),r,u,a,s);return s.delete(e),p;case kn:if(al)return al.call(e)==al.call(l)}return!1}var jn=1,Jn=Object.prototype,Xn=Jn.hasOwnProperty;function Yn(e,l,t,r,u,a){var s=t&jn,d=Ml(e),c=d.length,b=Ml(l),p=b.length;if(c!=p&&!s)return!1;for(var h=c;h--;){var m=d[h];if(!(s?m in l:Xn.call(l,m)))return!1}var w=a.get(e),i=a.get(l);if(w&&i)return w==l&&i==e;var v=!0;a.set(e,l),a.set(l,e);for(var y=s;++h<c;){m=d[h];var T=e[m],E=l[m];if(r)var Q=s?r(E,T,m,l,e,a):r(T,E,m,e,l,a);if(!(Q===void 0?T===E||u(T,E,t,r,a):Q)){v=!1;break}y||(y=m=="constructor")}if(v&&!y){var U=e.constructor,k=l.constructor;U!=k&&"constructor"in e&&"constructor"in l&&!(typeof U=="function"&&U instanceof U&&typeof k=="function"&&k instanceof k)&&(v=!1)}return a.delete(e),a.delete(l),v}var Zn=1,Bl="[object Arguments]",Dl="[object Array]",Pe="[object Object]",xn=Object.prototype,Rl=xn.hasOwnProperty;function _n(e,l,t,r,u,a){var s=hl(e),d=hl(l),c=s?Dl:Pl(e),b=d?Dl:Pl(l);c=c==Bl?Pe:c,b=b==Bl?Pe:b;var p=c==Pe,h=b==Pe,m=c==b;if(m&&yl(e)){if(!yl(l))return!1;s=!0,p=!1}if(m&&!p)return a||(a=new tl),s||en(e)?jl(e,l,t,r,u,a):Un(e,l,c,t,r,u,a);if(!(t&Zn)){var w=p&&Rl.call(e,"__wrapped__"),i=h&&Rl.call(l,"__wrapped__");if(w||i){var v=w?e.value():e,y=i?l.value():l;return a||(a=new tl),u(v,y,t,r,a)}}return m?(a||(a=new tl),Yn(e,l,t,r,u,a)):!1}function Jl(e,l,t,r,u){return e===l?!0:e==null||l==null||!Sl(e)&&!Sl(l)?e!==e&&l!==l:_n(e,l,t,r,Jl,u)}function zl(e,l){return Jl(e,l)}const et=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),lt=e=>ln[e||"default"],nt=e=>({focus:()=>{var l,t;(t=(l=e.value)==null?void 0:l.focus)==null||t.call(l)}}),x=new Map;let Vl;Kl&&(document.addEventListener("mousedown",e=>Vl=e),document.addEventListener("mouseup",e=>{for(const l of x.values())for(const{documentHandler:t}of l)t(e,Vl)}));function ql(e,l){let t=[];return Array.isArray(l.arg)?t=l.arg:nn(l.arg)&&t.push(l.arg),function(r,u){const a=l.instance.popperRef,s=r.target,d=u==null?void 0:u.target,c=!l||!l.instance,b=!s||!d,p=e.contains(s)||e.contains(d),h=e===s,m=t.length&&t.some(i=>i==null?void 0:i.contains(s))||t.length&&t.includes(d),w=a&&(a.contains(s)||a.contains(d));c||b||p||h||m||w||l.value(r,u)}}const tt={beforeMount(e,l){x.has(e)||x.set(e,[]),x.get(e).push({documentHandler:ql(e,l),bindingFn:l.value})},updated(e,l){x.has(e)||x.set(e,[]);const t=x.get(e),r=t.findIndex(a=>a.bindingFn===l.oldValue),u={documentHandler:ql(e,l),bindingFn:l.value};r>=0?t.splice(r,1,u):t.push(u)},unmounted(e){x.delete(e)}},Xl=tn({closable:Boolean,type:{type:String,values:["success","info","warning","danger",""],default:""},hit:Boolean,disableTransitions:Boolean,color:{type:String,default:""},size:{type:String,values:on,default:""},effect:{type:String,values:["dark","light","plain"],default:"light"},round:Boolean}),ot={close:e=>e instanceof MouseEvent,click:e=>e instanceof MouseEvent},it=ce({name:"ElTag"}),at=ce({...it,props:Xl,emits:ot,setup(e,{emit:l}){const t=e,r=Hl(),u=re("tag"),a=C(()=>{const{type:c,hit:b,effect:p,closable:h,round:m}=t;return[u.b(),u.is("closable",h),u.m(c),u.m(r.value),u.m(p),u.is("hit",b),u.is("round",m)]}),s=c=>{l("close",c)},d=c=>{l("click",c)};return(c,b)=>c.disableTransitions?(O(),B("span",{key:0,class:S(M(a)),style:ee({backgroundColor:c.color}),onClick:d},[A("span",{class:S(M(u).e("content"))},[ne(c.$slots,"default")],2),c.closable?(O(),R(M(sl),{key:0,class:S(M(u).e("close")),onClick:W(s,["stop"])},{default:L(()=>[se(M(Cl))]),_:1},8,["class","onClick"])):D("v-if",!0)],6)):(O(),R(Wl,{key:1,name:`${M(u).namespace.value}-zoom-in-center`,appear:""},{default:L(()=>[A("span",{class:S(M(a)),style:ee({backgroundColor:c.color}),onClick:d},[A("span",{class:S(M(u).e("content"))},[ne(c.$slots,"default")],2),c.closable?(O(),R(M(sl),{key:0,class:S(M(u).e("close")),onClick:W(s,["stop"])},{default:L(()=>[se(M(Cl))]),_:1},8,["class","onClick"])):D("v-if",!0)],6)]),_:3},8,["name"]))}});var st=ye(at,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);const rt=Nl(st),Yl="ElSelectGroup",Re="ElSelect";function ut(e,l){const t=Ae(Re),r=Ae(Yl,{disabled:!1}),u=C(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),a=C(()=>t.props.multiple?h(t.props.modelValue,e.value):m(e.value,t.props.modelValue)),s=C(()=>{if(t.props.multiple){const v=t.props.modelValue||[];return!a.value&&v.length>=t.props.multipleLimit&&t.props.multipleLimit>0}else return!1}),d=C(()=>e.label||(u.value?"":e.value)),c=C(()=>e.value||e.label||""),b=C(()=>e.disabled||l.groupDisabled||s.value),p=rl(),h=(v=[],y)=>{if(u.value){const T=t.props.valueKey;return v&&v.some(E=>$e(F(E,T))===F(y,T))}else return v&&v.includes(y)},m=(v,y)=>{if(u.value){const{valueKey:T}=t.props;return F(v,T)===F(y,T)}else return v===y},w=()=>{!e.disabled&&!r.disabled&&(t.hoverIndex=t.optionsArray.indexOf(p.proxy))};K(()=>d.value,()=>{!e.created&&!t.props.remote&&t.setSelected()}),K(()=>e.value,(v,y)=>{const{remote:T,valueKey:E}=t.props;if(Object.is(v,y)||(t.onOptionDestroy(y,p.proxy),t.onOptionCreate(p.proxy)),!e.created&&!T){if(E&&typeof v=="object"&&typeof y=="object"&&v[E]===y[E])return;t.setSelected()}}),K(()=>r.disabled,()=>{l.groupDisabled=r.disabled},{immediate:!0});const{queryChange:i}=$e(t);return K(i,v=>{const{query:y}=M(v),T=new RegExp(et(y),"i");l.visible=T.test(d.value)||e.created,l.visible||t.filteredOptionsCount--}),{select:t,currentLabel:d,currentValue:c,itemSelected:a,isDisabled:b,hoverItem:w}}const dt=ce({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=re("select"),t=De({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:r,itemSelected:u,isDisabled:a,select:s,hoverItem:d}=ut(e,t),{visible:c,hover:b}=ul(t),p=rl().proxy;s.onOptionCreate(p),an(()=>{const m=p.value,{selected:w}=s,v=(s.props.multiple?w:[w]).some(y=>y.value===p.value);$(()=>{s.cachedOptions.get(m)===p&&!v&&s.cachedOptions.delete(m)}),s.onOptionDestroy(m,p)});function h(){e.disabled!==!0&&t.groupDisabled!==!0&&s.handleOptionSelect(p,!0)}return{ns:l,currentLabel:r,itemSelected:u,isDisabled:a,select:s,hoverItem:d,visible:c,hover:b,selectOptionClick:h,states:t}}});function ct(e,l,t,r,u,a){return he((O(),B("li",{class:S([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...s)=>e.hoverItem&&e.hoverItem(...s)),onClick:l[1]||(l[1]=W((...s)=>e.selectOptionClick&&e.selectOptionClick(...s),["stop"]))},[ne(e.$slots,"default",{},()=>[A("span",null,_(e.currentLabel),1)])],34)),[[dl,e.visible]])}var pl=ye(dt,[["render",ct],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const ft=ce({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Ae(Re),l=re("select"),t=C(()=>e.props.popperClass),r=C(()=>e.props.multiple),u=C(()=>e.props.fitInputWidth),a=N("");function s(){var d;a.value=`${(d=e.selectWrapper)==null?void 0:d.offsetWidth}px`}return cl(()=>{s(),kl(e.selectWrapper,s)}),{ns:l,minWidth:a,popperClass:t,isMultiple:r,isFitInputWidth:u}}});function pt(e,l,t,r,u,a){return O(),B("div",{class:S([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:ee({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ne(e.$slots,"default")],6)}var vt=ye(ft,[["render",pt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function mt(e){const{t:l}=fl();return De({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}const gt=(e,l,t)=>{const{t:r}=fl(),u=re("select");sn({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},C(()=>e.suffixTransition===!1));const a=N(null),s=N(null),d=N(null),c=N(null),b=N(null),p=N(null),h=N(-1),m=Ol({query:""}),w=Ol(""),{form:i,formItem:v}=rn(),y=C(()=>!e.filterable||e.multiple||!l.visible),T=C(()=>e.disabled||(i==null?void 0:i.disabled)),E=C(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!T.value&&l.inputHovering&&n}),Q=C(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),U=C(()=>u.is("reverse",Q.value&&l.visible&&e.suffixTransition)),k=C(()=>e.remote?300:0),fe=C(()=>e.loading?e.loadingText||r("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||r("el.select.noMatch"):l.options.size===0?e.noDataText||r("el.select.noData"):null),P=C(()=>Array.from(l.options.values())),ze=C(()=>Array.from(l.cachedOptions.values())),Ve=C(()=>{const n=P.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ue=Hl(),qe=C(()=>["small"].includes(ue.value)?"small":"default"),Fe=C({get(){return l.visible&&fe.value!==!1},set(n){l.visible=n}});K([()=>T.value,()=>ue.value,()=>i==null?void 0:i.size],()=>{$(()=>{H()})}),K(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),K(()=>e.modelValue,(n,o)=>{e.multiple&&(H(),n&&n.length>0||s.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",j(l.query))),pe(),e.filterable&&!e.multiple&&(l.inputLength=20),!zl(n,o)&&e.validateEvent&&(v==null||v.validate("change").catch(f=>un()))},{flush:"post",deep:!0}),K(()=>l.visible,n=>{var o,f,g;n?((f=(o=d.value)==null?void 0:o.updatePopper)==null||f.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(g=s.value)==null||g.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),j(l.query),!e.multiple&&!e.remote&&(m.value.query="",be(m),be(w)))):(e.filterable&&(wl(e.filterMethod)&&e.filterMethod(),wl(e.remoteMethod)&&e.remoteMethod()),s.value&&s.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Ke(),$(()=>{s.value&&s.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),t.emit("visible-change",n)}),K(()=>l.options.entries(),()=>{var n,o,f;if(!Kl)return;(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&H();const g=((f=b.value)==null?void 0:f.querySelectorAll("input"))||[];Array.from(g).includes(document.activeElement)||pe(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&Ce()},{flush:"post"}),K(()=>l.hoverIndex,n=>{typeof n=="number"&&n>-1?h.value=P.value[n]||{}:h.value={},P.value.forEach(o=>{o.hover=h.value===o})});const H=()=>{e.collapseTags&&!e.filterable||$(()=>{var n,o;if(!a.value)return;const f=a.value.$el.querySelector("input"),g=c.value,I=lt(ue.value||(i==null?void 0:i.size));f.style.height=`${(l.selected.length===0?I:Math.max(g?g.clientHeight+(g.clientHeight>I?6:0):0,I))-2}px`,l.tagInMultiLine=Number.parseFloat(f.style.height)>=I,l.visible&&fe.value!==!1&&((o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n))})},j=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(typeof e.filterMethod=="function"||typeof e.remoteMethod=="function")){l.previousQuery=n;return}l.previousQuery=n,$(()=>{var o,f;l.visible&&((f=(o=d.value)==null?void 0:o.updatePopper)==null||f.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&$(()=>{const o=s.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,Se(),H()}),e.remote&&typeof e.remoteMethod=="function"?(l.hoverIndex=-1,e.remoteMethod(n)):typeof e.filterMethod=="function"?(e.filterMethod(n),be(w)):(l.filteredOptionsCount=l.optionsCount,m.value.query=n,be(m),be(w)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await $(),Ce())}},Se=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=s.value.value?"":l.cachedPlaceHolder)},Ce=()=>{const n=P.value.filter(g=>g.visible&&!g.disabled&&!g.states.groupDisabled),o=n.find(g=>g.created),f=n[0];l.hoverIndex=ve(P.value,o||f)},pe=()=>{var n;if(e.multiple)l.selectedLabel="";else{const f=Oe(e.modelValue);(n=f.props)!=null&&n.created?(l.createdLabel=f.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=f.currentLabel,l.selected=f,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(f=>{o.push(Oe(f))}),l.selected=o,$(()=>{H()})},Oe=n=>{let o;const f=ol(n).toLowerCase()==="object",g=ol(n).toLowerCase()==="null",I=ol(n).toLowerCase()==="undefined";for(let G=l.cachedOptions.size-1;G>=0;G--){const z=ze.value[G];if(f?F(z.value,e.valueKey)===F(n,e.valueKey):z.value===n){o={value:n,currentLabel:z.currentLabel,isDisabled:z.isDisabled};break}}if(o)return o;const Y=f?n.label:!g&&!I?n:"",Z={value:n,currentLabel:Y};return e.multiple&&(Z.hitState=!1),Z},Ke=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>P.value.findIndex(f=>F(f,n)===F(o,n)))):l.hoverIndex=-1:l.hoverIndex=P.value.findIndex(o=>ge(o)===ge(l.selected))},300)},He=()=>{var n,o;We(),(o=(n=d.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&!e.filterable&&H()},We=()=>{var n;l.inputWidth=(n=a.value)==null?void 0:n.$el.getBoundingClientRect().width},Ne=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,j(l.query))},ke=Al(()=>{Ne()},k.value),Ge=Al(n=>{j(n.target.value)},k.value),te=n=>{zl(e.modelValue,n)||t.emit(Gl,n)},Qe=n=>{if(n.target.value.length<=0&&!me()){const o=e.modelValue.slice();o.pop(),t.emit(le,o),te(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},Ue=(n,o)=>{const f=l.selected.indexOf(o);if(f>-1&&!T.value){const g=e.modelValue.slice();g.splice(f,1),t.emit(le,g),te(g),t.emit("remove-tag",o.value)}n.stopPropagation()},oe=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(typeof o!="string")for(const f of l.selected)f.isDisabled&&o.push(f.value);t.emit(le,o),te(o),l.hoverIndex=-1,l.visible=!1,t.emit("clear")},we=(n,o)=>{var f;if(e.multiple){const g=(e.modelValue||[]).slice(),I=ve(g,n.value);I>-1?g.splice(I,1):(e.multipleLimit<=0||g.length<e.multipleLimit)&&g.push(n.value),t.emit(le,g),te(g),n.created&&(l.query="",j(""),l.inputLength=20),e.filterable&&((f=s.value)==null||f.focus())}else t.emit(le,n.value),te(n.value),l.visible=!1;l.isSilentBlur=o,je(),!l.visible&&$(()=>{J(n)})},ve=(n=[],o)=>{if(!Tl(o))return n.indexOf(o);const f=e.valueKey;let g=-1;return n.some((I,Y)=>$e(F(I,f))===F(o,f)?(g=Y,!0):!1),g},je=()=>{l.softFocus=!0;const n=s.value||a.value;n&&(n==null||n.focus())},J=n=>{var o,f,g,I,Y;const Z=Array.isArray(n)?n[0]:n;let G=null;if(Z!=null&&Z.value){const z=P.value.filter(Me=>Me.value===Z.value);z.length>0&&(G=z[0].$el)}if(d.value&&G){const z=(I=(g=(f=(o=d.value)==null?void 0:o.popperRef)==null?void 0:f.contentRef)==null?void 0:g.querySelector)==null?void 0:I.call(g,`.${u.be("dropdown","wrap")}`);z&&dn(z,G)}(Y=p.value)==null||Y.handleScroll()},Je=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Xe=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Ye=n=>{n.code!==cn.backspace&&me(!1),l.inputLength=s.value.value.length*15+20,H()},me=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(!!o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},Ze=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,$(()=>j(o));else{const f=o[o.length-1]||"";l.isOnComposition=!fn(f)}},xe=()=>{$(()=>J(l.selected))},X=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),t.emit("focus",n))},Te=()=>{var n;l.visible=!1,(n=a.value)==null||n.blur()},_e=n=>{$(()=>{l.isSilentBlur?l.isSilentBlur=!1:t.emit("blur",n)}),l.softFocus=!1},Ee=n=>{oe(n)},el=()=>{l.visible=!1},ll=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},Le=n=>{var o;n&&!l.mouseEnter||T.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!d.value||!d.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((o=s.value||a.value)==null||o.focus()))},Ie=()=>{l.visible?P.value[l.hoverIndex]&&we(P.value[l.hoverIndex],void 0):Le()},ge=n=>Tl(n.value)?F(n.value,e.valueKey):n.value,nl=C(()=>P.value.filter(n=>n.visible).every(n=>n.disabled)),de=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!nl.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=P.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&de(n),$(()=>J(h.value))}};return{optionsArray:P,selectSize:ue,handleResize:He,debouncedOnInputChange:ke,debouncedQueryChange:Ge,deletePrevTag:Qe,deleteTag:Ue,deleteSelected:oe,handleOptionSelect:we,scrollToOption:J,readonly:y,resetInputHeight:H,showClose:E,iconComponent:Q,iconReverse:U,showNewOption:Ve,collapseTagSize:qe,setSelected:pe,managePlaceholder:Se,selectDisabled:T,emptyText:fe,toggleLastOptionHitState:me,resetInputState:Ye,handleComposition:Ze,onOptionCreate:Je,onOptionDestroy:Xe,handleMenuEnter:xe,handleFocus:X,blur:Te,handleBlur:_e,handleClearClick:Ee,handleClose:el,handleKeydownEscape:ll,toggleMenu:Le,selectOption:Ie,getValueKey:ge,navigateOptions:de,dropMenuVisible:Fe,queryChange:m,groupQueryChange:w,reference:a,input:s,tooltipRef:d,tags:c,selectWrapper:b,scrollbar:p,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}},Fl="ElSelect",bt=ce({name:Fl,componentName:Fl,components:{ElInput:pn,ElSelectMenu:vt,ElOption:pl,ElTag:rt,ElScrollbar:Sn,ElTooltip:Cn,ElIcon:sl},directives:{ClickOutside:tt},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:vn},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:On.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:El,default:mn},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:El,default:gn},tagType:{...Xl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:wn,default:"bottom-start"}},emits:[le,Gl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const t=re("select"),r=re("input"),{t:u}=fl(),a=mt(e),{optionsArray:s,selectSize:d,readonly:c,handleResize:b,collapseTagSize:p,debouncedOnInputChange:h,debouncedQueryChange:m,deletePrevTag:w,deleteTag:i,deleteSelected:v,handleOptionSelect:y,scrollToOption:T,setSelected:E,resetInputHeight:Q,managePlaceholder:U,showClose:k,selectDisabled:fe,iconComponent:P,iconReverse:ze,showNewOption:Ve,emptyText:ue,toggleLastOptionHitState:qe,resetInputState:Fe,handleComposition:H,onOptionCreate:j,onOptionDestroy:Se,handleMenuEnter:Ce,handleFocus:pe,blur:Oe,handleBlur:Ke,handleClearClick:He,handleClose:We,handleKeydownEscape:Ne,toggleMenu:ke,selectOption:Ge,getValueKey:te,navigateOptions:Qe,dropMenuVisible:Ue,reference:oe,input:we,tooltipRef:ve,tags:je,selectWrapper:J,scrollbar:Je,queryChange:Xe,groupQueryChange:Ye,handleMouseEnter:me,handleMouseLeave:Ze}=gt(e,a,l),{focus:xe}=nt(oe),{inputWidth:X,selected:Te,inputLength:_e,filteredOptionsCount:Ee,visible:el,softFocus:ll,selectedLabel:Le,hoverIndex:Ie,query:ge,inputHovering:nl,currentPlaceholder:de,menuVisibleOnFocus:vl,isOnComposition:ml,isSilentBlur:n,options:o,cachedOptions:f,optionsCount:g,prefixWidth:I,tagInMultiLine:Y}=ul(a),Z=C(()=>{const V=[t.b()],ie=M(d);return ie&&V.push(t.m(ie)),e.disabled&&V.push(t.m("disabled")),V}),G=C(()=>({maxWidth:`${M(X)-32}px`,width:"100%"})),z=C(()=>({maxWidth:`${M(X)>123?M(X)-123:M(X)-75}px`}));Ql(Re,De({props:e,options:o,optionsArray:s,cachedOptions:f,optionsCount:g,filteredOptionsCount:Ee,hoverIndex:Ie,handleOptionSelect:y,onOptionCreate:j,onOptionDestroy:Se,selectWrapper:J,selected:Te,setSelected:E,queryChange:Xe,groupQueryChange:Ye})),cl(()=>{a.cachedPlaceHolder=de.value=e.placeholder||u("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(de.value=""),kl(J,b),e.remote&&e.multiple&&Q(),$(()=>{const V=oe.value&&oe.value.$el;if(!!V&&(X.value=V.getBoundingClientRect().width,l.slots.prefix)){const ie=V.querySelector(`.${r.e("prefix")}`);I.value=Math.max(ie.getBoundingClientRect().width+5,30)}}),E()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(le,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(le,"");const Me=C(()=>{var V,ie;return(ie=(V=ve.value)==null?void 0:V.popperRef)==null?void 0:ie.contentRef});return{tagInMultiLine:Y,prefixWidth:I,selectSize:d,readonly:c,handleResize:b,collapseTagSize:p,debouncedOnInputChange:h,debouncedQueryChange:m,deletePrevTag:w,deleteTag:i,deleteSelected:v,handleOptionSelect:y,scrollToOption:T,inputWidth:X,selected:Te,inputLength:_e,filteredOptionsCount:Ee,visible:el,softFocus:ll,selectedLabel:Le,hoverIndex:Ie,query:ge,inputHovering:nl,currentPlaceholder:de,menuVisibleOnFocus:vl,isOnComposition:ml,isSilentBlur:n,options:o,resetInputHeight:Q,managePlaceholder:U,showClose:k,selectDisabled:fe,iconComponent:P,iconReverse:ze,showNewOption:Ve,emptyText:ue,toggleLastOptionHitState:qe,resetInputState:Fe,handleComposition:H,handleMenuEnter:Ce,handleFocus:pe,blur:Oe,handleBlur:Ke,handleClearClick:He,handleClose:We,handleKeydownEscape:Ne,toggleMenu:ke,selectOption:Ge,getValueKey:te,navigateOptions:Qe,dropMenuVisible:Ue,focus:xe,reference:oe,input:we,tooltipRef:ve,popperPaneRef:Me,tags:je,selectWrapper:J,scrollbar:Je,wrapperKls:Z,selectTagsStyle:G,nsSelect:t,tagTextStyle:z,handleMouseEnter:me,handleMouseLeave:Ze}}}),ht=["disabled","autocomplete"],yt={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function St(e,l,t,r,u,a){const s=ae("el-tag"),d=ae("el-tooltip"),c=ae("el-icon"),b=ae("el-input"),p=ae("el-option"),h=ae("el-scrollbar"),m=ae("el-select-menu"),w=bn("click-outside");return he((O(),B("div",{ref:"selectWrapper",class:S(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...i)=>e.handleMouseEnter&&e.handleMouseEnter(...i)),onMouseleave:l[23]||(l[23]=(...i)=>e.handleMouseLeave&&e.handleMouseLeave(...i)),onClick:l[24]||(l[24]=W((...i)=>e.toggleMenu&&e.toggleMenu(...i),["stop"]))},[se(d,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:L(()=>[A("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=i=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=i=>e.inputHovering=!1)},[e.multiple?(O(),B("div",{key:0,ref:"tags",class:S(e.nsSelect.e("tags")),style:ee(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(O(),B("span",{key:0,class:S([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[se(s,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=i=>e.deleteTag(i,e.selected[0]))},{default:L(()=>[A("span",{class:S(e.nsSelect.e("tags-text")),style:ee(e.tagTextStyle)},_(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(O(),R(s,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:L(()=>[e.collapseTagsTooltip?(O(),R(d,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:L(()=>[A("span",{class:S(e.nsSelect.e("tags-text"))},"+ "+_(e.selected.length-1),3)]),content:L(()=>[A("div",{class:S(e.nsSelect.e("collapse-tags"))},[(O(!0),B(il,null,Ll(e.selected.slice(1),(i,v)=>(O(),B("div",{key:v,class:S(e.nsSelect.e("collapse-tag"))},[(O(),R(s,{key:e.getValueKey(i),class:"in-tooltip",closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:y=>e.deleteTag(y,i)},{default:L(()=>[A("span",{class:S(e.nsSelect.e("tags-text")),style:ee({maxWidth:e.inputWidth-75+"px"})},_(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(O(),B("span",{key:1,class:S(e.nsSelect.e("tags-text"))},"+ "+_(e.selected.length-1),3))]),_:1},8,["size","type"])):D("v-if",!0)],2)):D("v-if",!0),D(" <div> "),e.collapseTags?D("v-if",!0):(O(),R(Wl,{key:1,onAfterLeave:e.resetInputHeight},{default:L(()=>[A("span",{class:S([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(O(!0),B(il,null,Ll(e.selected,i=>(O(),R(s,{key:e.getValueKey(i),closable:!e.selectDisabled&&!i.isDisabled,size:e.collapseTagSize,hit:i.hitState,type:e.tagType,"disable-transitions":"",onClose:v=>e.deleteTag(v,i)},{default:L(()=>[A("span",{class:S(e.nsSelect.e("tags-text")),style:ee({maxWidth:e.inputWidth-75+"px"})},_(i.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),D(" </div> "),e.filterable?he((O(),B("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=i=>e.query=i),type:"text",class:S([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:ee({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...i)=>e.handleFocus&&e.handleFocus(...i)),onBlur:l[3]||(l[3]=(...i)=>e.handleBlur&&e.handleBlur(...i)),onKeyup:l[4]||(l[4]=(...i)=>e.managePlaceholder&&e.managePlaceholder(...i)),onKeydown:[l[5]||(l[5]=(...i)=>e.resetInputState&&e.resetInputState(...i)),l[6]||(l[6]=q(W(i=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=q(W(i=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=q((...i)=>e.handleKeydownEscape&&e.handleKeydownEscape(...i),["esc"])),l[9]||(l[9]=q(W((...i)=>e.selectOption&&e.selectOption(...i),["stop","prevent"]),["enter"])),l[10]||(l[10]=q((...i)=>e.deletePrevTag&&e.deletePrevTag(...i),["delete"])),l[11]||(l[11]=q(i=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionupdate:l[13]||(l[13]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionend:l[14]||(l[14]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onInput:l[15]||(l[15]=(...i)=>e.debouncedQueryChange&&e.debouncedQueryChange(...i))},null,46,ht)),[[hn,e.query]]):D("v-if",!0)],6)):D("v-if",!0),se(b,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=i=>e.selectedLabel=i),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:S([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=q(W(i=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=q(W(i=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),q(W(e.selectOption,["stop","prevent"]),["enter"]),q(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=q(i=>e.visible=!1,["tab"]))]},yn({suffix:L(()=>[e.iconComponent&&!e.showClose?(O(),R(c,{key:0,class:S([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:L(()=>[(O(),R(Il(e.iconComponent)))]),_:1},8,["class"])):D("v-if",!0),e.showClose&&e.clearIcon?(O(),R(c,{key:1,class:S([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:L(()=>[(O(),R(Il(e.clearIcon)))]),_:1},8,["class","onClick"])):D("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:L(()=>[A("div",yt,[ne(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:L(()=>[se(m,null,{default:L(()=>[he(se(h,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:S([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:L(()=>[e.showNewOption?(O(),R(p,{key:0,value:e.query,created:!0},null,8,["value"])):D("v-if",!0),ne(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[dl,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(O(),B(il,{key:0},[e.$slots.empty?ne(e.$slots,"empty",{key:0}):(O(),B("p",{key:1,class:S(e.nsSelect.be("dropdown","empty"))},_(e.emptyText),3))],64)):D("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","effect","transition","persistent","onShow"])],34)),[[w,e.handleClose,e.popperPaneRef]])}var Ct=ye(bt,[["render",St],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const Ot=ce({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=re("select"),t=N(!0),r=rl(),u=N([]);Ql(Yl,De({...ul(e)}));const a=Ae(Re);cl(()=>{u.value=s(r.subTree)});const s=c=>{const b=[];return Array.isArray(c.children)&&c.children.forEach(p=>{var h;p.type&&p.type.name==="ElOption"&&p.component&&p.component.proxy?b.push(p.component.proxy):(h=p.children)!=null&&h.length&&b.push(...s(p))}),b},{groupQueryChange:d}=$e(a);return K(d,()=>{t.value=u.value.some(c=>c.visible===!0)},{flush:"post"}),{visible:t,ns:l}}});function wt(e,l,t,r,u,a){return he((O(),B("ul",{class:S(e.ns.be("group","wrap"))},[A("li",{class:S(e.ns.be("group","title"))},_(e.label),3),A("li",null,[A("ul",{class:S(e.ns.b("group"))},[ne(e.$slots,"default")],2)])],2)),[[dl,e.visible]])}var Zl=ye(Ot,[["render",wt],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const Mt=Nl(Ct,{Option:pl,OptionGroup:Zl}),Pt=Ul(pl);Ul(Zl);export{Pt as E,Mt as a,zl as i};
