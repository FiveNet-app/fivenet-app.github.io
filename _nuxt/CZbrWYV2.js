import{d as S,ao as A,ap as b,c as o,e as p,n as c,E as t,ai as x,k as L,t as $,g as m,f as y,h as C,F as T,ag as M,ah as v,aj as _,ab as z,an as le,w as U,aF as ce,l as ue,al as de,am as Z,ac as q,D as O,aG as E,as as R,z as D,aH as pe,aI as ge,r as H,H as me,aJ as fe,aK as ye,a as be,u as ve,aL as he,aM as ke,x as xe,aN as ee,aO as _e,aP as we,av as te,aQ as ae,aR as $e,s as ne,aS as Ce}from"./CZWS_rkS.js";import Se from"./i1vY6L93.js";import{a as Ae}from"./CE46u1-S.js";import"./Deqm50Hk.js";import"./BIURV-Yl.js";import"./Dnd51l0P.js";const Oe={wrapper:{base:"flex items-center align-center text-center",horizontal:"w-full flex-row",vertical:"flex-col"},container:{base:"font-medium text-gray-700 dark:text-gray-200 flex",horizontal:"mx-3 whitespace-nowrap",vertical:"my-2"},border:{base:"flex border-gray-200 dark:border-gray-800",horizontal:"w-full",vertical:"h-full",size:{horizontal:{"2xs":"border-t",xs:"border-t-[2px]",sm:"border-t-[3px]",md:"border-t-[4px]",lg:"border-t-[5px]",xl:"border-t-[6px]"},vertical:{"2xs":"border-s",xs:"border-s-[2px]",sm:"border-s-[3px]",md:"border-s-[4px]",lg:"border-s-[5px]",xl:"border-s-[6px]"}},type:{solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}},icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0",size:"2xs"},label:"text-sm",default:{size:"2xs"}},Ue={class:"flex flex-col lg:flex-row items-start gap-6"},ze={class:"flex-1"},je=S({inheritAttrs:!1,__name:"PageHeader",props:{headline:{type:String,default:void 0},title:{type:String,default:void 0},description:{type:String,default:void 0},icon:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-3 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=e,{ui:r,attrs:a}=A("page.header",b(l,"ui"),s,b(l,"class"),!0);return(n,u)=>{var g;const i=z,f=le;return o(),p("div",_({class:t(r).wrapper},t(a)),[e.headline||n.$slots.headline?(o(),p("div",{key:0,class:c(t(r).headline)},[x(n.$slots,"headline",{},()=>[L($(e.headline),1)])],2)):m("",!0),y("div",Ue,[e.icon||n.$slots.icon?(o(),p("div",{key:0,class:c(t(r).icon.wrapper)},[x(n.$slots,"icon",{},()=>[C(i,{name:e.icon,class:c(t(r).icon.base)},null,8,["name","class"])])],2)):m("",!0),y("div",ze,[y("div",{class:c(t(r).container)},[y("h1",{class:c(t(r).title)},[x(n.$slots,"title",{},()=>[L($(e.title),1)])],2),(g=e.links)!=null&&g.length||n.$slots.links?(o(),p("div",{key:0,class:c(t(r).links)},[x(n.$slots,"links",{},()=>[(o(!0),p(T,null,M(e.links,(h,d)=>(o(),v(f,_({key:d,ref_for:!0},{...h,target:h.target||"_blank",color:h.color||"white"},{onClick:h.click}),null,16,["onClick"]))),128))])],2)):m("",!0)],2),e.description||n.$slots.description?(o(),p("div",{key:0,class:c(t(r).description)},[x(n.$slots,"description",{},()=>[L($(e.description),1)])],2)):m("",!0),x(n.$slots,"default")])])],16)}}}),Ie=S({inheritAttrs:!1,__name:"ContentSurroundLink",props:{link:{type:Object,required:!0},icon:{type:String,default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=e,{ui:r,attrs:a}=A("content.surround.link",b(l,"ui"),s,b(l,"class"),!0);return(n,u)=>{const i=z,f=ce;return o(),v(f,_({to:e.link._path,class:t(r).wrapper},t(a)),{default:U(()=>[e.icon||e.link.icon?(o(),p("div",{key:0,class:c(t(r).icon.wrapper)},[C(i,{name:e.icon||e.link.icon,class:c(t(r).icon.base)},null,8,["name","class"])],2)):m("",!0),y("p",{class:c(t(r).title)},$(e.link.title),3),y("p",{class:c(t(r).description)},$(e.link.description),3)]),_:1},16,["to","class"])}}}),Le={key:1,class:"hidden sm:block"},Pe=S({inheritAttrs:!1,__name:"ContentSurround",props:{surround:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=e,{ui:r,attrs:a}=A("content.surround",b(l,"ui"),s,b(l,"class"),!0),[n,u]=l.surround||[];return(i,f)=>{const g=Ie;return o(),p("div",_({class:t(r).wrapper},t(a)),[t(n)?(o(),v(g,{key:0,link:t(n),ui:t(r).link,icon:t(r).icon.prev},null,8,["link","ui","icon"])):(o(),p("span",Le," ")),t(u)?(o(),v(g,{key:2,link:t(u),ui:t(r).link,icon:t(r).icon.next,class:"text-right"},null,8,["link","ui","icon"])):m("",!0)],16)}}}),Be=S({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=e,{ui:r,attrs:a}=A("page.body",b(l,"ui"),s,b(l,"class"),!0);return(n,u)=>(o(),p("div",_({class:[t(r).wrapper,e.prose&&t(r).prose]},t(a)),[x(n.$slots,"default")],16))}}),B=de(Z.ui.strategy,Z.ui.divider,Oe),He=S({components:{UIcon:z,UAvatar:q},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},size:{type:String,default:()=>B.default.size,validator(e){return Object.keys(B.border.size.horizontal).includes(e)||Object.keys(B.border.size.vertical).includes(e)}},orientation:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},type:{type:String,default:"solid",validator:e=>["solid","dotted","dashed"].includes(e)},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:s,attrs:l}=A("divider",b(e,"ui"),B),r=O(()=>E(R(s.value.wrapper.base,s.value.wrapper[e.orientation]),e.class)),a=O(()=>R(s.value.container.base,s.value.container[e.orientation])),n=O(()=>R(s.value.border.base,s.value.border[e.orientation],s.value.border.size[e.orientation][e.size],s.value.border.type[e.type]));return{ui:s,attrs:l,wrapperClass:r,containerClass:a,borderClass:n}}});function Te(e,s,l,r,a,n){const u=z,i=q;return o(),p("div",_({class:e.wrapperClass},e.attrs),[y("div",{class:c(e.borderClass)},null,2),e.label||e.icon||e.avatar||e.$slots.default?(o(),p(T,{key:0},[y("div",{class:c(e.containerClass)},[x(e.$slots,"default",{},()=>[e.label?(o(),p("span",{key:0,class:c(e.ui.label)},$(e.label),3)):e.icon?(o(),v(u,{key:1,name:e.icon,class:c(e.ui.icon.base)},null,8,["name","class"])):e.avatar?(o(),v(i,_({key:2},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):m("",!0)])],2),y("div",{class:c(e.borderClass)},null,2)],64)):m("",!0)],16)}const Ne=ue(He,[["render",Te]]),Re=S({inheritAttrs:!1,__name:"PageLinks",props:{title:{type:String,default:void 0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s=D(),l=O(()=>({wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"self-center",size:"2xs"},externalIcon:{name:s.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"})),r=e,{ui:a,attrs:n}=A("page.links",b(r,"ui"),l,b(r,"class"),!0);return(u,i)=>{const f=z,g=q,h=ge;return o(),p("div",_({class:t(a).wrapper},t(n)),[e.title||u.$slots.title?(o(),p("p",{key:0,class:c(t(a).title)},[x(u.$slots,"title",{},()=>[L($(e.title),1)])],2)):m("",!0),y("div",{class:c(t(a).container)},[x(u.$slots,"default",{},()=>[(o(!0),p(T,null,M(e.links,(d,k)=>(o(),v(h,_({key:k,ref_for:!0},t(pe)(d),{class:t(a).base,"active-class":t(a).active,"inactive-class":t(a).inactive,onClick:d.click}),{default:U(()=>[d.icon?(o(),v(f,{key:0,name:d.icon,class:c(t(E)(t(a).icon.base,d.iconClass))},null,8,["name","class"])):m("",!0),d.avatar?(o(),v(g,_({key:1,ref_for:!0},{size:t(a).avatar.size,...d.avatar},{class:t(E)(t(a).avatar.base,d.avatarClass)}),null,16,["class"])):m("",!0),y("span",{class:c(t(a).label)},[L($(d.label)+" ",1),d.target==="_blank"?(o(),v(f,{key:0,name:t(a).externalIcon.name,class:c(t(a).externalIcon.base)},null,8,["name","class"])):m("",!0)],2)]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))])],2)],16)}}}),Ee=()=>{const e=H(),s=H([]),l=H([]),r=n=>{n.forEach(u=>{const i=u.target.id;u.isIntersecting?s.value=[...s.value,i]:s.value=s.value.filter(f=>f!==i)})},a=n=>{n.forEach(u=>{e.value&&e.value.observe(u)})};return me(s,(n,u)=>{n.length===0?l.value=u:l.value=n}),fe(()=>e.value=new IntersectionObserver(r)),ye(()=>{var n;return(n=e.value)==null?void 0:n.disconnect()}),{visibleHeadings:s,activeHeadings:l,updateHeadings:a}},Me=["href","onClick"],se=S({inheritAttrs:!1,__name:"ContentTocLinks",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},emits:["move"],setup(e,{emit:s}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},r=e,a=s,n=be(),u=ve(),{activeHeadings:i,updateHeadings:f}=Ee(),{ui:g,attrs:h}=A("content.toc.links",b(r,"ui"),l,b(r,"class"),!0);u.hooks.hookOnce("page:finish",()=>{f([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])});const d=k=>{const j=encodeURIComponent(k);n.push(`#${j}`),a("move",k)};return(k,j)=>{var P;const N=se;return(P=e.links)!=null&&P.length?(o(),p("ul",_({key:0,class:t(g).wrapper},t(h)),[(o(!0),p(T,null,M(e.links,w=>(o(),p("li",{key:w.text,class:c([t(g).wrapper,w.depth===3&&t(g).depth])},[y("a",{href:`#${w.id}`,class:c([t(g).base,t(i).includes(w.id)?t(g).active:t(g).inactive]),onClick:he(F=>d(w.id),["prevent"])},$(w.text),11,Me),w.children?(o(),v(N,{key:0,links:w.children,ui:t(g)},null,8,["links","ui"])):m("",!0)],2))),128))],16)):m("",!0)}}}),qe=S({inheritAttrs:!1,__name:"ContentToc",props:{title:{type:String,default:"Table of Contents"},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const s=D(),l=O(()=>({wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full group",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:s.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}})),r=e,{ui:a,attrs:n}=A("content.toc",b(r,"ui"),l,b(r,"class"),!0),u=H(!1);return(i,f)=>{var d,k;const g=z,h=se;return o(),p("nav",_({class:t(a).wrapper},t(n)),[y("div",{class:c([(d=e.links)!=null&&d.length?t(a).container.base:t(a).container.empty])},[x(i.$slots,"top"),(k=e.links)!=null&&k.length?(o(),p("button",{key:0,class:c(t(a).button.base),tabindex:"-1",onClick:f[0]||(f[0]=j=>u.value=!t(u))},[y("span",{class:c(t(a).button.label)},$(e.title),3),C(g,{name:t(a).button.trailingIcon.name,class:c(["lg:!hidden",[t(a).button.trailingIcon.base,t(u)?t(a).button.trailingIcon.active:t(a).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):m("",!0),C(h,{links:e.links,ui:t(a).links,class:c([t(u)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),x(i.$slots,"bottom")],2)],16)}}}),De={key:1},We=S({__name:"[...slug]",async setup(e){let s,l;const{t:r}=ke(),a=xe(),{toc:n,seo:u}=D(),{data:i}=([s,l]=ee(()=>ae(a.path,()=>ne(a.path).findOne(),"$aROEKgqrzL")),s=await s,l(),s);if(!i.value)throw _e({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:f}=([s,l]=ee(()=>ae(`${a.path}-surround`,()=>ne().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(Ce(a.path)))),s=await s,l(),s);we({title:i.value.title,ogTitle:`${i.value.title} - FiveNet`,description:i.value.description,ogDescription:i.value.description});const g=O(()=>Ae(i.value)),h=O(()=>{var d,k;return[((d=n==null?void 0:n.bottom)==null?void 0:d.edit)&&{icon:"i-mdi-pencil-box",label:r("docs.toc.bottom.edit"),to:`${n.bottom.edit}/${(k=i==null?void 0:i.value)==null?void 0:k._file}`,target:"_blank"},{icon:"i-mdi-star",label:r("docs.toc.bottom.star"),to:"https://github.com/fivenet-app/fivenet",target:"_blank"}].filter(Boolean)});return(d,k)=>{const j=je,N=Se,P=Pe,w=Be,F=Ne,re=Re,oe=qe,ie=$e;return o(),v(ie,null,te({default:U(()=>[C(j,{title:t(i).title,description:t(i).description,links:t(i).links,headline:t(g)},null,8,["title","description","links","headline"]),C(w,{prose:""},{default:U(()=>{var I;return[t(i).body?(o(),v(N,{key:0,value:t(i)},null,8,["value"])):m("",!0),(I=t(f))!=null&&I.length?(o(),p("hr",De)):m("",!0),C(P,{surround:t(f)},null,8,["surround"])]}),_:1})]),_:2},[t(i).toc!==!1?{name:"right",fn:U(()=>{var I,V,J;return[C(oe,{title:d.$t("common.toc"),links:(V=(I=t(i).body)==null?void 0:I.toc)==null?void 0:V.links},te({_:2},[(J=t(n))!=null&&J.bottom?{name:"bottom",fn:U(()=>{var K,G,Q,W,X,Y;return[y("div",{class:c(["hidden space-y-6 lg:block",{"!mt-6":(Q=(G=(K=t(i).body)==null?void 0:K.toc)==null?void 0:G.links)==null?void 0:Q.length}])},[(Y=(X=(W=t(i).body)==null?void 0:W.toc)==null?void 0:X.links)!=null&&Y.length?(o(),v(F,{key:0,type:"dashed"})):m("",!0),C(re,{title:d.$t("common.community"),links:t(h)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{We as default};
