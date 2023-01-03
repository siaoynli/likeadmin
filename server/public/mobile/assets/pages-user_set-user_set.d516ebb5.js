import{r as e,a as t,o as a,c as s,w as l,q as o,b as u,l as r,t as i,h as n,e as c,f as p,x as d,p as m,F as f,y as h,k as _,d as b,u as x,aa as y,z as g,ac as v,g as w,aq as k,K as C,ar as V,ai as S,i as j}from"./index.c211e18a.js";import{_ as I}from"./u-avatar.1203d23e.js";import{_ as z}from"./u-icon.4e54e06b.js";import{_ as B}from"./u-button.d3ab2701.js";import{_ as A}from"./u-popup.fae69655.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import{a as R}from"./client.7d8d9e98.js";import"./appEnums.18338bd1.js";var T=$({name:"u-action-sheet",emits:["update:modelValue","input","click","close"],props:{value:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},maskCloseAble:{type:Boolean,default:!0},list:{type:Array,default:()=>[]},tips:{type:Object,default:()=>({text:"",color:"",fontSize:"26"})},cancelBtn:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!1},borderRadius:{type:[String,Number],default:0},zIndex:{type:[String,Number],default:0},cancelText:{type:String,default:"取消"},labelName:{type:String,default:"text"},blur:{type:[Number,String],default:0}},computed:{valueCom(){return this.modelValue},tipsStyle(){let e={};return this.tips.color&&(e.color=this.tips.color),this.tips.fontSize&&(e.fontSize=this.tips.fontSize+"rpx"),e},itemStyle(){return e=>{let t={};return this.list[e].color&&(t.color=this.list[e].color),this.list[e].fontSize&&(t.fontSize=this.list[e].fontSize+"rpx"),this.list[e].disabled&&(t.color="#c0c4cc"),t}},uZIndex(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},data:()=>({popupValue:!1}),watch:{valueCom(e,t){this.popupValue=e}},methods:{close(){this.popupClose(),this.$emit("close")},popupClose(){this.$emit("input",!1),this.$emit("update:modelValue",!1)},itemClick(e){this.list[e].disabled||(this.$emit("click",e),this.$emit("input",!1),this.$emit("update:modelValue",!1))}}},[["render",function(b,x,y,g,v,w){const k=h,C=_,V=e(t("u-popup"),A);return a(),s(V,{blur:y.blur,mode:"bottom","border-radius":y.borderRadius,popup:!1,modelValue:v.popupValue,"onUpdate:modelValue":x[2]||(x[2]=e=>v.popupValue=e),maskCloseAble:y.maskCloseAble,length:"auto",safeAreaInsetBottom:y.safeAreaInsetBottom,onClose:w.popupClose,"z-index":w.uZIndex},{default:l((()=>[y.tips.text?(a(),s(C,{key:0,class:"u-tips u-border-bottom",style:o([w.tipsStyle])},{default:l((()=>[u(k,null,{default:l((()=>[r(i(y.tips.text),1)])),_:1})])),_:1},8,["style"])):n("v-if",!0),(a(!0),c(f,null,p(y.list,((e,t)=>(a(),s(C,{key:t,onTouchmove:x[0]||(x[0]=d((()=>{}),["stop","prevent"])),onClick:e=>w.itemClick(t),style:o([w.itemStyle(t)]),class:m(["u-action-sheet-item u-line-1",[t<y.list.length-1?"u-border-bottom":""]]),"hover-stay-time":150},{default:l((()=>[u(k,null,{default:l((()=>[r(i(e[y.labelName]),1)])),_:2},1024),e.subText?(a(),s(k,{key:0,class:"u-action-sheet-item__subtext u-line-1"},{default:l((()=>[r(i(e.subText),1)])),_:2},1024)):n("v-if",!0)])),_:2},1032,["onClick","style","class"])))),128)),y.cancelBtn?(a(),s(C,{key:1,class:"u-gab"})):n("v-if",!0),y.cancelBtn?(a(),s(C,{key:2,onTouchmove:x[1]||(x[1]=d((()=>{}),["stop","prevent"])),class:"u-actionsheet-cancel u-action-sheet-item","hover-class":"u-hover-class","hover-stay-time":150,onClick:w.close},{default:l((()=>[r(i(y.cancelText),1)])),_:1},8,["onClick"])):n("v-if",!0)])),_:1},8,["blur","border-radius","modelValue","maskCloseAble","safeAreaInsetBottom","onClose","z-index"])}],["__scopeId","data-v-72a4be36"]]),E=(e=>(e.PRIVACY="privacy",e.SERVICE="service",e))(E||{});var N=$(b({__name:"user_set",setup(o){const c=x(),p=y(),d=g({avatar:"",nickname:"",account:"",has_auth:"",has_password:""}),m=g([{text:"修改密码"},{text:"忘记密码"}]),f=g(!0);f.value=R();const h=g(!1),b=e=>{switch(e){case 0:C({url:"/pages/change_password/change_password"});break;case 1:C({url:"/pages/forget_pwd/forget_pwd"})}},A=()=>{if(!d.value.has_password)return C({url:"/pages/change_password/change_password?type=set"});h.value=!0},$=()=>{V({content:"是否退出登录？",confirmColor:"#4173FF",success:({cancel:e})=>{e||(p.logout(),S({url:"/pages/login/login"}))}})};return v((()=>{(async()=>{const e=await k();d.value=e})()})),(o,p)=>{const x=e(t("u-avatar"),I),y=_,g=e(t("u-icon"),z),v=j,k=e(t("u-button"),B),C=e(t("u-action-sheet"),T);return a(),s(y,{class:"user-set"},{default:l((()=>[u(v,{url:"/pages/user_data/user_data"},{default:l((()=>[u(y,{class:"item flex bg-white mt-[20rpx]"},{default:l((()=>[u(x,{src:d.value.avatar,shape:"square",size:100},null,8,["src"]),u(y,{class:"ml-[20rpx] flex flex-1 justify-between items-center"},{default:l((()=>[u(y,null,{default:l((()=>[u(y,{class:"mb-[15rpx] text-xl font-medium"},{default:l((()=>[r(i(d.value.nickname),1)])),_:1}),u(y,{class:"text-content text-xs"},{default:l((()=>[r("账号："+i(d.value.account),1)])),_:1})])),_:1}),u(g,{name:"arrow-right",color:"#666"})])),_:1})])),_:1})])),_:1}),u(y,{class:"item bg-white mt-[20rpx] btn-border flex flex-1 justify-between",onClick:A},{default:l((()=>[u(y,{class:""},{default:l((()=>[r("登录密码")])),_:1}),u(g,{name:"arrow-right",color:"#666"})])),_:1}),f.value?(a(),s(y,{key:0,class:"item bg-white flex flex-1 justify-between"},{default:l((()=>[u(y,{class:""},{default:l((()=>[r("绑定微信")])),_:1}),u(y,{class:"flex justify-between"},{default:l((()=>[u(y,{class:"text-muted mr-[20rpx]"},{default:l((()=>[r(i(d.value.has_auth?"已绑定":"未绑定"),1)])),_:1}),n(' <u-icon name="arrow-right" color="#666"></u-icon> ')])),_:1})])),_:1})):n("v-if",!0),u(v,{url:`/pages/agreement/agreement?type=${w(E).PRIVACY}`},{default:l((()=>[u(y,{class:"item bg-white mt-[20rpx] btn-border flex flex-1 justify-between"},{default:l((()=>[u(y,{class:""},{default:l((()=>[r("隐私政策")])),_:1}),u(g,{name:"arrow-right",color:"#666"})])),_:1})])),_:1},8,["url"]),u(v,{url:`/pages/agreement/agreement?type=${w(E).SERVICE}`},{default:l((()=>[u(y,{class:"item bg-white btn-border flex flex-1 justify-between"},{default:l((()=>[u(y,{class:""},{default:l((()=>[r("服务协议")])),_:1}),u(g,{name:"arrow-right",color:"#666"})])),_:1})])),_:1},8,["url"]),u(v,{url:"/pages/as_us/as_us"},{default:l((()=>[u(y,{class:"item bg-white flex flex-1 justify-between"},{default:l((()=>[u(y,{class:""},{default:l((()=>[r("关于我们")])),_:1}),u(y,{class:"flex justify-between"},{default:l((()=>[u(y,{class:"text-muted mr-[20rpx]"},{default:l((()=>[r(i(w(c).config.version),1)])),_:1}),u(g,{name:"arrow-right",color:"#666"})])),_:1})])),_:1})])),_:1}),u(y,{class:"mt-[60rpx] mx-[26rpx]"},{default:l((()=>[u(k,{type:"primary",shape:"circle",onClick:$},{default:l((()=>[r(" 退出登录 ")])),_:1})])),_:1}),u(C,{list:m.value,modelValue:h.value,"onUpdate:modelValue":p[0]||(p[0]=e=>h.value=e),onClick:b,"safe-area-inset-bottom":!0},null,8,["list","modelValue"])])),_:1})}}}),[["__scopeId","data-v-80c19072"]]);export{N as default};