import{_ as e}from"./u-image.eadc51b3.js";import{d as t,r as s,a,o as l,c as r,w as d,b as i,h as c,l as m,t as f,k as n,n as u,i as x}from"./index.8992bf9a.js";import{_ as p}from"./icon_visit.45de9dde.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";var o=_(t({__name:"news-card",props:{item:{default:{}},newsId:{default:""}},setup:t=>(_,o)=>{const w=s(a("u-image"),e),g=n,h=u,b=x;return l(),r(b,{url:`/pages/news_detail/news_detail?id=${t.newsId}`},{default:d((()=>[i(g,{class:"news-card flex bg-white px-[20rpx] py-[32rpx]"},{default:d((()=>[t.item.image?(l(),r(g,{key:0,class:"mr-[20rpx]"},{default:d((()=>[i(w,{src:t.item.image,width:"240",height:"180"},null,8,["src"])])),_:1})):c("v-if",!0),i(g,{class:"news-card-content flex flex-col justify-between flex-1"},{default:d((()=>[i(g,{class:"news-card-content-title text-lg font-medium"},{default:d((()=>[m(f(t.item.title),1)])),_:1}),i(g,{class:"news-card-content-intro text-gray-400 text-sm mt-[16rpx]"},{default:d((()=>[m(f(t.item.desc),1)])),_:1}),i(g,{class:"text-muted text-xs w-full flex justify-between mt-[12rpx]"},{default:d((()=>[i(g,null,{default:d((()=>[m(f(t.item.create_time),1)])),_:1}),i(g,{class:"flex items-center"},{default:d((()=>[i(h,{src:p,class:"w-[30rpx] h-[30rpx]"}),i(g,{class:"ml-[10rpx]"},{default:d((()=>[m(f(t.item.click),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["url"])}}),[["__scopeId","data-v-4508fd44"]]);export{o as _};
