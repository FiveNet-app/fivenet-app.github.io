import{aO as u,d as c,v as r,D as l,bl as d,b8 as h,bm as m,c as g,ah as p,E as i,b6 as f}from"./CZWS_rkS.js";function b(t){throw u({fatal:!0,statusCode:500,statusMessage:`${t} is provided by @nuxt/image. Check your console to install it or run 'npx nuxi@latest module add @nuxt/image'`})}const x={setup:()=>b("<NuxtImg>")},w=c({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(t){const n=r().public.mdc.useNuxtImage?x:"img",e=t,o=l(()=>{var a;if((a=e.src)!=null&&a.startsWith("/")&&!e.src.startsWith("//")){const s=d(h(r().app.baseURL));if(s!=="/"&&!e.src.startsWith(s))return m(s,e.src)}return e.src});return(a,s)=>(g(),p(f(i(n)),{src:i(o),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}});export{w as default};
