import{S as y,i as p,s as _,r as w,u as L,v as E,w as S,d as u,x as o,a as g,y as x,z as A,A as P,b as h,t as k,j as V,k as j,m as q,p as z,D as C,E as D,F}from"./index-b203b68f.js";function O(r){let e,s,t;const i=r[3].default,a=w(i,r,r[2],null);return{c(){e=L("a"),a&&a.c(),this.h()},l(n){e=E(n,"A",{class:!0,href:!0,target:!0,rel:!0});var l=S(e);a&&a.l(l),l.forEach(u),this.h()},h(){o(e,"class","dark:text-blue-300 text-blue-500 hover:underline inline-flex items-center"),o(e,"href",r[0]),o(e,"target",r[1]),o(e,"rel",s=r[1]==="_blank"?"noopener noreferrer":void 0)},m(n,l){g(n,e,l),a&&a.m(e,null),t=!0},p(n,[l]){a&&a.p&&(!t||l&4)&&x(a,i,n,n[2],t?P(i,n[2],l,null):A(n[2]),null),(!t||l&1)&&o(e,"href",n[0]),(!t||l&2)&&o(e,"target",n[1]),(!t||l&2&&s!==(s=n[1]==="_blank"?"noopener noreferrer":void 0))&&o(e,"rel",s)},i(n){t||(h(a,n),t=!0)},o(n){k(a,n),t=!1},d(n){n&&u(e),a&&a.d(n)}}}function T(r,e,s){let{$$slots:t={},$$scope:i}=e,{href:a=void 0}=e,{target:n=void 0}=e;return r.$$set=l=>{"href"in l&&s(0,a=l.href),"target"in l&&s(1,n=l.target),"$$scope"in l&&s(2,i=l.$$scope)},[a,n,i,t]}class b extends y{constructor(e){super(),p(this,e,T,O,_,{href:0,target:1})}}b.__docgen={version:3,name:"Link.svelte",data:[{visibility:"public",description:null,keywords:[],name:"href",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"target",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};function B(r){let e;return{c(){e=C(r[0])},l(s){e=D(s,r[0])},m(s,t){g(s,e,t)},p(s,t){t&1&&F(e,s[0])},d(s){s&&u(e)}}}function G(r){let e,s;return e=new b({props:{href:r[1],target:r[2],$$slots:{default:[B]},$$scope:{ctx:r}}}),{c(){V(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,i){q(e,t,i),s=!0},p(t,[i]){const a={};i&2&&(a.href=t[1]),i&4&&(a.target=t[2]),i&9&&(a.$$scope={dirty:i,ctx:t}),e.$set(a)},i(t){s||(h(e.$$.fragment,t),s=!0)},o(t){k(e.$$.fragment,t),s=!1},d(t){z(e,t)}}}function H(r,e,s){let{slot:t}=e,{href:i=void 0}=e,{target:a=void 0}=e;return r.$$set=n=>{"slot"in n&&s(0,t=n.slot),"href"in n&&s(1,i=n.href),"target"in n&&s(2,a=n.target)},[t,i,a]}class v extends y{constructor(e){super(),p(this,e,H,G,_,{slot:0,href:1,target:2})}}v.__docgen={version:3,name:"LinkView.svelte",data:[{visibility:"public",description:null,keywords:[],name:"slot",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"href",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"target",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const J={title:"Link",component:v,tags:["autodocs"],argTypes:{slot:{control:{type:"text"}},href:{control:{type:"text"}},target:{control:{type:"text"}}}},f={args:{slot:"リンク"}};var c,d,m;f.parameters={...f.parameters,docs:{...(c=f.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    slot: 'リンク'
  }
}`,...(m=(d=f.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const K=["Primary"];export{f as Primary,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Link.stories-921759e0.js.map
