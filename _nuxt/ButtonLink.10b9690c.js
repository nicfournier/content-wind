import{d,Y as m,S as o,P as f,b as a,J as s,w as g,f as x,g as S,n as b,H as h,M as y,E as k,l as z}from"./entry.ee26e2f6.js";import H from"./ContentSlot.12648f5c.js";const C=d({__name:"ButtonLink",props:{blank:{type:Boolean,required:!1,default:!1},color:m("primary"),href:{type:String,required:!0,default:""},icon:{type:String,default:""},size:{required:!1,type:[String,Object],default:"medium"},transparent:{required:!1,type:[Boolean,Object],default:!1}},setup(e){const n=e,i=o(()=>((t=n)=>`{color.${t.color}.600}`)()),l=o(()=>((t=n)=>`{color.${t.color}.500}`)()),r={size:{small:{padding:"{space.2} {space.4}",fontSize:"{text.sm.fontSize}",lineHeight:"{text.sm.lineHeight}"},medium:{padding:"{space.rem.625} {space.5}",fontSize:"{text.base.fontSize}",lineHeight:"{text.base.lineHeight}"},large:{padding:"{space.3} {space.6}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"},giant:{padding:"{space.4} {space.8}",fontSize:"{text.lg.fontSize}",lineHeight:"{text.lg.lineHeight}"}},transparent:{true:{backgroundColor:"transparent"}}},{$pinceau:c}=f(n,r,{_YM9_buttonPrimary:i,_A23_buttonSecondary:l});return(t,$)=>{const u=y,_=H,p=k;return a(),s(p,{class:b(["button-link",[h(c)]]),to:e.href,target:e.blank?"_blank":void 0},{default:g(()=>[e.icon?(a(),s(u,{key:0,name:e.icon},null,8,["name"])):x("",!0),S(_,{use:t.$slots.default,unwrap:"p ul li"},null,8,["use"])]),_:1},8,["to","target","class"])}}});const v=z(C,[["__scopeId","data-v-614b3880"]]);export{v as default};
