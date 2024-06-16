import{d as A,z as q,ax as Y,c as f,ah as k,av as J,w as v,f as C,h as y,k as j,t as I,E as t,aj as O,an as H,l as Q,al as M,am as S,bo as ee,ab as D,ao as L,ap as w,D as N,r as te,H as ne,ad as ae,ae as oe,bp as se,af as P,e as _,F as z,ag as E,bq as G,ai as $,n as h,T as le,at as re,au as ie,as as R,x as ce,g as U,aI as V,br as ue,aG as W,aH as de,a3 as Z,bs as pe,bt as fe,bu as ge,bv as me,bw as be,bx as ve,aT as ye,aR as he}from"./BtwGtfLF.js";import{u as ke,_ as _e}from"./BQscOZEj.js";import{N as we,Q as xe,V as $e}from"./BbWDEvPN.js";import{m as X}from"./CE46u1-S.js";import"./BIURV-Yl.js";const Oe={base:"inline-flex items-center",rounded:"rounded-md",font:"font-medium",size:{xs:"text-xs px-1.5 py-0.5",sm:"text-xs px-2 py-1",md:"text-sm px-2 py-1",lg:"text-sm px-2.5 py-1.5"},color:{white:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white dark:bg-gray-900"},gray:{solid:"ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800"},black:{solid:"text-white dark:text-gray-900 bg-gray-900 dark:bg-white"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{size:"sm",variant:"solid",color:"primary"}},Ce={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft"}},Ae={class:"hidden lg:flex items-center gap-0.5 ml-auto -my-1 flex-shrink-0"},Be=A({__name:"ContentSearchButton",props:{label:{type:String,default:"Search..."}},setup(e){const c=q(),{toggleContentSearch:d}=Y(),{metaSymbol:n}=ke();return(b,a)=>{var u,r,g,o;const p=_e,l=H;return f(),k(l,O({icon:t(c).ui.icons.search,label:e.label,truncate:""},e.label?(r=(u=b.$ui)==null?void 0:u.button)==null?void 0:r.input:(o=(g=b.$ui)==null?void 0:g.button)==null?void 0:o.secondary,{"aria-label":"Search",class:[!!e.label&&"flex-1"],onClick:t(d)}),J({_:2},[e.label?{name:"trailing",fn:v(()=>[C("div",Ae,[y(p,null,{default:v(()=>[j(I(t(n)),1)]),_:1}),y(p,null,{default:v(()=>[j(" K ")]),_:1})])]),key:"0"}:void 0]),1040,["icon","label","class","onClick"])}}}),K=M(S.ui.strategy,S.ui.accordion,Ce),Ue=M(S.ui.strategy,S.ui.button,ee),Se=A({components:{HDisclosure:we,HDisclosureButton:xe,HDisclosurePanel:$e,UIcon:D,UButton:H},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>K.default.openIcon},unmount:{type:Boolean,default:!1},closeIcon:{type:String,default:()=>K.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["open"],setup(e,{emit:c}){const{ui:d,attrs:n}=L("accordion",w(e,"ui"),K,w(e,"class")),b=N(()=>Ue),a=te([]),p=N(()=>a.value.map(({open:s})=>s));ne(p,(s,m)=>{for(const i in s){const x=m[i],T=s[i];!x&&T&&c("open",i)}},{immediate:!0});function l(s,m){!e.items[s].closeOthers&&e.multiple||a.value.forEach(i=>{i.open&&i.close(m.target)})}function u(s,m){const i=s;i.style.height="0",i.offsetHeight,i.style.height=i.scrollHeight+"px",i.addEventListener("transitionend",m,{once:!0})}function r(s){const m=s;m.style.height=m.scrollHeight+"px",m.offsetHeight}function g(s){const m=s;m.style.height="auto"}function o(s,m){const i=s;i.style.height="0",i.addEventListener("transitionend",m,{once:!0})}return ae(()=>oe("$tSbG2i6Z4D")),{ui:d,uiButton:b,attrs:n,buttonRefs:a,closeOthers:l,omit:se,onEnter:u,onBeforeLeave:r,onAfterEnter:g,onLeave:o}}}),Ie={key:1};function Ne(e,c,d,n,b,a){const p=D,l=H,u=P("HDisclosureButton"),r=P("HDisclosurePanel"),g=P("HDisclosure");return f(),_("div",{class:h(e.ui.wrapper)},[(f(!0),_(z,null,E(e.items,(o,s)=>(f(),k(g,{key:s,as:"div",class:h(e.ui.container),"default-open":e.defaultOpen||o.defaultOpen},{default:v(({open:m,close:i})=>[y(u,{ref_for:!0,ref:()=>e.buttonRefs[s]={open:m,close:i},as:"template",disabled:o.disabled,onClick:x=>e.closeOthers(s,x),onKeydown:[G(x=>e.closeOthers(s,x),["enter"]),G(x=>e.closeOthers(s,x),["space"])]},{default:v(()=>[$(e.$slots,"default",{item:o,index:s,open:m,close:i},()=>[y(l,O({ref_for:!0},{...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(o,["slot","disabled","content","defaultOpen"])}),{trailing:v(()=>[y(p,{name:m&&e.closeIcon?e.closeIcon:e.openIcon,class:h([m&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[o.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),y(le,O({ref_for:!0},e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:v(()=>[e.unmount?(f(),k(r,{key:0,class:h([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),unmount:""},{default:v(()=>[$(e.$slots,o.slot||"item",{item:o,index:s,open:m,close:i},()=>[j(I(o.content),1)])]),_:2},1032,["class"])):re((f(),_("div",Ie,[y(r,{class:h([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:v(()=>[$(e.$slots,o.slot||"item",{item:o,index:s,open:m,close:i},()=>[j(I(o.content),1)])]),_:2},1032,["class"])],512)),[[ie,m]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const Le=Q(Se,[["render",Ne]]),je=A({inheritAttrs:!1,__name:"NavigationAccordion",props:{level:{type:Number,default:0},links:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},defaultOpen:{type:[Boolean,Number],default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c=q(),d=N(()=>{const u=R("space-y-3",n.level>0&&"border-l border-gray-200 dark:border-gray-800 -ml-px hover:border-gray-300 dark:hover:border-gray-700"),r=R("border-l border-gray-200 dark:border-gray-800",n.level>0?"ml-6":"ml-2.5");return{wrapper:u,container:"space-y-3",item:{padding:"",color:"text-inherit dark:text-inherit"},button:{base:"flex items-center gap-1.5 group w-full focus-visible:outline-primary",active:"text-primary border-current",inactive:"border-transparent",level:"border-l -ml-px pl-3.5",icon:{base:"w-5 h-5 flex-shrink-0"},trailingIcon:{name:c.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"},label:"text-sm/6 font-semibold truncate"},tree:r,links:{}}}),n=e,b=ce(),{ui:a,attrs:p}=L("navigation.accordion",w(n,"ui"),d,w(n,"class"),!0),l=N(()=>{var u;return(u=n.links)==null?void 0:u.map(r=>{const g=!n.defaultOpen||typeof n.defaultOpen=="number"&&n.level<n.defaultOpen||r.to&&b.path.startsWith(r.to.toString());return{label:r.label,icon:r.icon,slot:r.label.toLowerCase(),disabled:r.disabled,defaultOpen:g,children:r.children}})});return(u,r)=>{const g=D,o=V,s=F,m=Le;return f(),k(m,O({key:t(b).path,items:t(l),multiple:e.multiple,ui:t(a)},t(p)),J({default:v(({item:i,open:x})=>[y(o,{class:h([t(a).button.base,e.level>0&&t(a).button.level]),"active-class":t(a).button.active,"inactive-class":t(a).button.inactive},{default:v(()=>[i.icon?(f(),k(g,{key:0,name:i.icon,class:h(t(a).button.icon.base)},null,8,["name","class"])):U("",!0),C("span",{class:h(t(a).button.label)},I(i.label),3),i.disabled?U("",!0):(f(),k(g,{key:1,name:t(a).button.trailingIcon.name,class:h([t(a).button.trailingIcon.base,x?t(a).button.trailingIcon.active:t(a).button.trailingIcon.inactive])},null,8,["name","class"]))]),_:2},1032,["class","active-class","inactive-class"])]),_:2},[E(e.links,({label:i},x)=>({name:i.toLowerCase(),fn:v(({item:T})=>[y(s,{links:T.children,level:e.level+1,"default-open":e.defaultOpen,multiple:e.multiple,class:h(t(a).tree),ui:{links:t(a).links}},null,8,["links","level","default-open","multiple","class","ui"])])}))]),1040,["items","multiple","ui"])}}}),B=M(S.ui.strategy,S.ui.badge,Oe),ze=A({inheritAttrs:!1,props:{size:{type:String,default:()=>B.default.size,validator(e){return Object.keys(B.size).includes(e)}},color:{type:String,default:()=>B.default.color,validator(e){return[...S.ui.colors,...Object.keys(B.color)].includes(e)}},variant:{type:String,default:()=>B.default.variant,validator(e){return[...Object.keys(B.variant),...Object.values(B.color).flatMap(c=>Object.keys(c))].includes(e)}},label:{type:[String,Number],default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:c,attrs:d}=L("badge",w(e,"ui"),B),{size:n,rounded:b}=ue({ui:c,props:e}),a=N(()=>{var l,u;const p=((u=(l=c.value.color)==null?void 0:l[e.color])==null?void 0:u[e.variant])||c.value.variant[e.variant];return W(R(c.value.base,c.value.font,b.value,c.value.size[n.value],p==null?void 0:p.replaceAll("{color}",e.color)),e.class)});return{attrs:d,badgeClass:a}}});function He(e,c,d,n,b,a){return f(),_("span",O({class:e.badgeClass},e.attrs),[$(e.$slots,"default",{},()=>[j(I(e.label),1)])],16)}const De=Q(ze,[["render",He]]),Ee=A({inheritAttrs:!1,__name:"NavigationLinks",props:{level:{type:Number,default:0},links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c={wrapper:"space-y-3",wrapperLevel:"space-y-1.5",base:"flex items-center gap-1.5 group",active:"text-primary font-medium border-current",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 border-transparent hover:border-gray-500 dark:hover:border-gray-400",level:"border-l -ml-px pl-4",icon:{base:"w-5 h-5 flex-shrink-0"},badge:{base:"rounded-full"},label:"text-sm/6 truncate"},d=e,{ui:n,attrs:b}=L("navigation.links",w(d,"ui"),c,w(d,"class"),!0);return(a,p)=>{var g;const l=D,u=De,r=V;return(g=e.links)!=null&&g.length?(f(),_("div",O({key:0,class:e.level>0?t(n).wrapperLevel:t(n).wrapper},t(b)),[(f(!0),_(z,null,E(e.links,(o,s)=>(f(),k(r,O({key:s,ref_for:!0},t(de)(o),{class:[t(n).base,e.level>0&&t(n).level],"active-class":t(n).active,"inactive-class":t(n).inactive,onClick:o.click}),{default:v(()=>[o.icon?(f(),k(l,{key:0,name:o.icon,class:h(t(W)(t(n).icon.base,o.iconClass))},null,8,["name","class"])):U("",!0),C("span",{class:h(t(n).label)},I(o.label),3),$(a.$slots,"badge",{link:o},()=>[o.badge?(f(),k(u,O({key:0,ref_for:!0},typeof o.badge=="string"?{size:"xs",variant:"subtle",label:o.badge}:{size:"xs",variant:"subtle",...o.badge},{class:t(n).badge.base}),null,16,["class"])):U("",!0)])]),_:2},1040,["class","active-class","inactive-class","onClick"]))),128))],16)):U("",!0)}}}),F=A({inheritAttrs:!1,__name:"NavigationTree",props:{level:{type:Number,default:0},links:{type:Array,default:()=>[]},multiple:{type:Boolean,default:!0},defaultOpen:{type:[Boolean,Number],default:void 0},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c={wrapper:"space-y-3",accordion:{},links:{}},d=e,{ui:n,attrs:b}=L("navigation.tree",w(d,"ui"),c,w(d,"class"),!0),a=N(()=>{var u;const p=[];let l={type:void 0,children:[]};for(const r of d.links){const g=(u=r.children)!=null&&u.length?"accordion":"link";l.type||(l.type=g),l.type===g?l.children.push(r):(p.push(l),l={type:g,children:[r]})}return l.children.length&&p.push(l),p});return(p,l)=>{var g;const u=je,r=Ee;return(g=t(a))!=null&&g.length?(f(),_("nav",O({key:0,class:t(n).wrapper},t(b)),[(f(!0),_(z,null,E(t(a),(o,s)=>(f(),_(z,{key:s},[o.type==="accordion"?(f(),k(u,{key:0,links:o.children,level:e.level,multiple:e.multiple,"default-open":e.defaultOpen,ui:{...t(n).accordion,links:t(n).links}},null,8,["links","level","multiple","default-open","ui"])):(f(),k(r,{key:1,links:o.children,level:e.level,ui:t(n).links},null,8,["links","level","ui"]))],64))),128))],16)):U("",!0)}}}),Te=C("img",{src:ge,class:"size-10"},null,-1),Pe=C("span",{class:"truncate font-semibold text-gray-900 dark:text-white"},"FiveNet",-1),Ke=A({__name:"DocsHeader",setup(e){const c=Z("navigation",[]),d=pe();return(n,b)=>{const a=V,p=Be,l=H,u=me,r=F,g=be;return f(),k(g,null,{logo:v(()=>[y(a,{class:"inline-flex w-full items-center gap-2",to:"/"},{default:v(()=>[Te,Pe]),_:1})]),center:v(()=>[y(p,{class:"hidden lg:flex"})]),right:v(()=>[y(p,{label:null,class:"lg:hidden"}),y(l,{label:n.$t("common.language"),icon:"i-mdi-translate",color:"gray",onClick:b[0]||(b[0]=o=>t(d).open(fe,{}))},null,8,["label"]),y(u)]),panel:v(()=>[y(r,{links:("mapContentNavigation"in n?n.mapContentNavigation:t(X))(t(c))},null,8,["links"])]),_:1})}}}),Re={class:"relative"},Me=A({inheritAttrs:!1,__name:"Aside",props:{links:{type:Array,default:()=>[]},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const c={wrapper:"hidden overflow-y-auto lg:block lg:max-h-[calc(100vh-var(--header-height))] lg:sticky lg:top-[--header-height] py-8 lg:px-4 lg:-mx-4",top:{wrapper:"sticky -top-8 -mt-8 pointer-events-none z-[1]",header:"h-8 bg-background -mx-4 px-4",body:"bg-background relative pointer-events-auto flex -mx-4 px-4",footer:"h-8 bg-gradient-to-b from-background -mx-4 px-4"}},d=e,{ui:n,attrs:b}=L("aside",w(d,"ui"),c,w(d,"class"),!0);return(a,p)=>{const l=ve;return f(),_("aside",O({class:t(n).wrapper},t(b)),[C("div",Re,[a.$slots.top?(f(),_("div",{key:0,class:h(t(n).top.wrapper)},[C("div",{class:h(t(n).top.header)},null,2),C("div",{class:h(t(n).top.body)},[$(a.$slots,"top")],2),C("div",{class:h(t(n).top.footer)},null,2)],2)):U("",!0),$(a.$slots,"links",{},()=>[y(l,{links:e.links},null,8,["links"])]),$(a.$slots,"default"),$(a.$slots,"bottom")])],16)}}}),Qe=A({__name:"docs",setup(e){const c=Z("navigation");return(d,n)=>{const b=Ke,a=F,p=Me,l=he,u=ye;return f(),_("div",null,[y(b),y(u,null,{default:v(()=>[y(l,null,{left:v(()=>[y(p,null,{default:v(()=>[y(a,{links:("mapContentNavigation"in d?d.mapContentNavigation:t(X))(t(c))},null,8,["links"])]),_:1})]),default:v(()=>[$(d.$slots,"default")]),_:3})]),_:3})])}}});export{Qe as default};
