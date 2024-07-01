import{d as g,r as p,a0 as I,N as O,P as d,R as h,S as K,D,U as S,Z as m,o as C,b as $,L as M,bi as L,a2 as N,a1 as k,a3 as w,a6 as v}from"./qsEettWo.js";var U=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(U||{});let E=Symbol("DisclosureContext");function P(l){let o=w(E,null);if(o===null){let r=new Error(`<${l} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,P),r}return o}let B=Symbol("DisclosurePanelContext");function H(){return w(B,null)}let A=g({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(l,{slots:o,attrs:r}){let n=p(l.defaultOpen?0:1),e=p(null),i=p(null),s={buttonId:p(`headlessui-disclosure-button-${I()}`),panelId:p(`headlessui-disclosure-panel-${I()}`),disclosureState:n,panel:e,button:i,toggleDisclosure(){n.value=O(n.value,{0:1,1:0})},closeDisclosure(){n.value!==1&&(n.value=1)},close(t){s.closeDisclosure();let u=t?t instanceof HTMLElement?t:t.value instanceof HTMLElement?d(t):d(s.button):d(s.button);u==null||u.focus()}};return h(E,s),K(D(()=>O(n.value,{0:S.Open,1:S.Closed}))),()=>{let{defaultOpen:t,...u}=l,c={open:n.value===0,close:s.close};return m({theirProps:u,ourProps:{},slot:c,slots:o,attrs:r,name:"Disclosure"})}}}),Q=g({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(l,{attrs:o,slots:r,expose:n}){let e=P("DisclosureButton"),i=H(),s=D(()=>i===null?!1:i.value===e.panelId.value);C(()=>{s.value||l.id!==null&&(e.buttonId.value=l.id)}),$(()=>{s.value||(e.buttonId.value=null)});let t=p(null);n({el:t,$el:t}),s.value||M(()=>{e.button.value=t.value});let u=L(D(()=>({as:l.as,type:o.type})),t);function c(){var a;l.disabled||(s.value?(e.toggleDisclosure(),(a=d(e.button))==null||a.focus()):e.toggleDisclosure())}function f(a){var b;if(!l.disabled)if(s.value)switch(a.key){case v.Space:case v.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure(),(b=d(e.button))==null||b.focus();break}else switch(a.key){case v.Space:case v.Enter:a.preventDefault(),a.stopPropagation(),e.toggleDisclosure();break}}function y(a){switch(a.key){case v.Space:a.preventDefault();break}}return()=>{var a;let b={open:e.disclosureState.value===0},{id:x,...T}=l,j=s.value?{ref:t,type:u.value,onClick:c,onKeydown:f}:{id:(a=e.buttonId.value)!=null?a:x,ref:t,type:u.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||d(e.panel)?e.panelId.value:void 0,disabled:l.disabled?!0:void 0,onClick:c,onKeydown:f,onKeyup:y};return m({ourProps:j,theirProps:T,slot:b,attrs:o,slots:r,name:"DisclosureButton"})}}}),V=g({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(l,{attrs:o,slots:r,expose:n}){let e=P("DisclosurePanel");C(()=>{l.id!==null&&(e.panelId.value=l.id)}),$(()=>{e.panelId.value=null}),n({el:e.panel,$el:e.panel}),h(B,e.panelId);let i=N(),s=D(()=>i!==null?(i.value&S.Open)===S.Open:e.disclosureState.value===0);return()=>{var t;let u={open:e.disclosureState.value===0,close:e.close},{id:c,...f}=l,y={id:(t=e.panelId.value)!=null?t:c,ref:e.panel};return m({ourProps:y,theirProps:f,slot:u,attrs:o,slots:r,features:k.RenderStrategy|k.Static,visible:s.value,name:"DisclosurePanel"})}}});export{A as N,Q,V};