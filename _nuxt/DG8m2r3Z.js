import{d,y as m,D as f,ao as b,ad as g,c as x,ah as y,w as o,h as n,E as e,n as s,f as v,t as i,ae as _,ab as h}from"./DmV87Bb2.js";import"./DsonD8Aa.js";import{r as C}from"./C7L_toVc.js";import{Q as S,V as k,N as w}from"./XeQ5WxlK.js";const D=d({__name:"Collapsible",props:{name:{type:String,default:"properties"},openText:{type:String,default:"Show"},closeText:{type:String,default:"Hide"}},setup(a){const c=m(),l=f(()=>({button:{base:"flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{name:c.ui.icons.chevron,base:"w-4 h-4 transform transition-transform duration-200",active:"",inactive:"-rotate-90"}},panel:"mt-4 ml-2 py-2.5 pl-4 border-l border-gray-200 dark:border-gray-800 [&>div]:!mt-0"})),{ui:t}=b("content.collapsible",void 0,l,void 0,!0);return g(()=>_("$x19Co3FEug")),(u,T)=>{const p=h;return x(),y(e(w),{as:"div"},{default:o(({open:r})=>[n(e(S),{class:s(e(t).button.base)},{default:o(()=>[n(p,{name:e(t).button.icon.name,class:s([e(t).button.icon.base,r?e(t).button.icon.active:e(t).button.icon.inactive])},null,8,["name","class"]),v("span",null,i(r?a.closeText:a.openText)+" "+i(a.name),1)]),_:2},1032,["class"]),n(e(k),{class:s(e(t).panel)},{default:o(()=>[C(u.$slots,"default",{unwrap:"p"})]),_:3},8,["class"])]),_:3})}}});export{D as default};
