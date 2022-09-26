import{v as F,_ as y}from"./index.2472fd00.js";import{w,I as B}from"./element-plus.20e8dc41.js";import{C as g}from"./vue-echarts.3e1bcc11.js";import{d as E,a1 as b,j as C,a6 as A,o as r,c as l,a as t,W as i,O as o,V as e,X as m,a9 as h,u as k,R as D,U as v}from"./@vue.af680e04.js";import"./@vueuse.8c34eaea.js";import"./lodash.badb96a8.js";import"./axios.cb90d22e.js";import"./vue-router.e1b37eed.js";import"./pinia.2a01c3c3.js";import"./vue-demi.bfae2336.js";import"./css-color-function.d7123315.js";import"./color.4925cc7c.js";import"./clone.dc5b293d.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./@element-plus.034bf3af.js";import"./nprogress.68de8c98.js";import"./vue-clipboard3.f6b8ce17.js";import"./clipboard.82aa429a.js";import"./echarts.5e2dc550.js";import"./zrender.510214c4.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.b2525ffc.js";import"./lodash-es.70b90cb6.js";import"./dayjs.fb6e5f02.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./resize-detector.4e96b72b.js";const O={class:"workbench"},z={class:"md:flex"},V=t("span",{class:"card-title"},"\u7248\u672C\u4FE1\u606F",-1),N={class:"flex leading-9"},S=t("div",{class:"w-20"},"\u5F53\u524D\u7248\u672C",-1),W={class:"flex leading-9"},j=t("div",{class:"w-20"},"\u57FA\u4E8E\u6846\u67B6",-1),G={class:"flex leading-9"},I=t("div",{class:"w-20"},"\u83B7\u53D6\u6E20\u9053",-1),L=["href"],M=v("\u5B98\u7F51"),R=["href"],T=v("Gitee"),U=t("span",{class:"card-title"},"\u4ECA\u65E5\u6570\u636E",-1),X={class:"text-tx-secondary text-xs ml-4"},q={class:"flex flex-wrap"},H={class:"w-1/2 md:w-1/4"},J=t("div",{class:"leading-10"},"\u8BBF\u95EE\u91CF(\u4EBA)",-1),K={class:"text-6xl"},P={class:"text-tx-secondary text-xs"},Q={class:"w-1/2 md:w-1/4"},Y=t("div",{class:"leading-10"},"\u9500\u552E\u989D(\u5143)",-1),Z={class:"text-6xl"},$={class:"text-tx-secondary text-xs"},tt={class:"w-1/2 md:w-1/4"},st=t("div",{class:"leading-10"},"\u8BA2\u5355\u91CF(\u7B14)",-1),et={class:"text-6xl"},ot={class:"text-tx-secondary text-xs"},it={class:"w-1/2 md:w-1/4"},at=t("div",{class:"leading-10"},"\u65B0\u589E\u7528\u6237",-1),nt={class:"text-6xl"},dt={class:"text-tx-secondary text-xs"},rt={class:"function mb-4"},lt=t("span",null,"\u5E38\u7528\u529F\u80FD",-1),ut={class:"flex flex-wrap"},ct={class:"mt-2"},_t={class:"md:flex"},pt=t("span",null,"\u8BBF\u95EE\u91CF\u8D8B\u52BF\u56FE",-1),mt=t("span",null,"\u670D\u52A1\u652F\u6301",-1),ht={class:"ml-2"},vt={class:"text-tx-regular text-xs mt-4"},Qt=E({__name:"index",setup(xt){const s=b({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[0]},yAxis:{type:"value"},legend:{data:["\u8BBF\u95EE\u91CF"]},itemStyle:{color:"red"},tooltip:{trigger:"axis"},series:[{name:"\u8BBF\u95EE\u91CF",data:[0],type:"line",smooth:!0}]}}),x=()=>{F().then(a=>{s.version=a.version,s.today=a.today,s.menu=a.menu,s.visitor=a.visitor,s.support=a.support,s.visitorOption.xAxis.data=[],s.visitorOption.series[0].data=[],a.visitor.date.reverse().forEach(u=>{s.visitorOption.xAxis.data.push(u)}),a.visitor.list[0].data.forEach(u=>{s.visitorOption.series[0].data.push(u)})}).catch(a=>{console.log("err",a)})};return C(()=>{x()}),(a,u)=>{const c=w,d=B,_=y,f=A("router-link");return r(),l("div",O,[t("div",z,[i(d,{class:"!border-none mb-4 md:mr-4",shadow:"never"},{header:o(()=>[V]),default:o(()=>[t("div",null,[t("div",N,[S,t("span",null,e(s.version.version),1)]),t("div",W,[j,t("span",null,e(s.version.based),1)]),t("div",G,[I,t("div",null,[t("a",{href:s.version.channel.website,target:"_blank"},[i(c,{type:"success",size:"small"},{default:o(()=>[M]),_:1})],8,L),t("a",{class:"ml-3",href:s.version.channel.gitee,target:"_blank"},[i(c,{type:"danger",size:"small"},{default:o(()=>[T]),_:1})],8,R)])])])]),_:1}),i(d,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:o(()=>[t("div",null,[U,t("span",X," \u66F4\u65B0\u65F6\u95F4\uFF1A"+e(s.today.time),1)])]),default:o(()=>[t("div",q,[t("div",H,[J,t("div",K,e(s.today.today_visitor),1),t("div",P," \u603B\u8BBF\u95EE\u91CF\uFF1A"+e(s.today.total_visitor),1)]),t("div",Q,[Y,t("div",Z,e(s.today.today_sales),1),t("div",$," \u603B\u9500\u552E\u989D\uFF1A"+e(s.today.total_sales),1)]),t("div",tt,[st,t("div",et,e(s.today.order_num),1),t("div",ot," \u603B\u8BA2\u5355\u91CF\uFF1A"+e(s.today.order_sum),1)]),t("div",it,[at,t("div",nt,e(s.today.today_new_user),1),t("div",dt," \u603B\u8BBF\u7528\u6237\uFF1A"+e(s.today.total_new_user),1)])])]),_:1})]),t("div",rt,[i(d,{class:"flex-1 !border-none",shadow:"never"},{header:o(()=>[lt]),default:o(()=>[t("div",ut,[(r(!0),l(m,null,h(s.menu,n=>(r(),l("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:n},[i(f,{to:n.url,class:"mb-3 flex flex-col items-center"},{default:o(()=>[i(_,{width:"40px",height:"40px",src:n==null?void 0:n.image},null,8,["src"]),t("div",ct,e(n.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",_t,[i(d,{class:"flex-1 !border-none md:mr-4 mb-4",shadow:"never"},{header:o(()=>[pt]),default:o(()=>[t("div",null,[i(k(g),{style:{height:"350px"},option:s.visitorOption,autoresize:!0},null,8,["option"])])]),_:1}),i(d,{class:"!border-none mb-4",shadow:"never"},{header:o(()=>[mt]),default:o(()=>[t("div",null,[(r(!0),l(m,null,h(s.support,(n,p)=>(r(),l("div",{key:p},[t("div",{class:D(["flex items-center pb-10 pt-10",{"border-b border-br":p==0}])},[i(_,{width:120,height:120,class:"flex-none",src:n.image},null,8,["src"]),t("div",ht,[t("div",null,e(n.title),1),t("div",vt,e(n.desc),1)])],2)]))),128))])]),_:1})])])}}});export{Qt as default};
