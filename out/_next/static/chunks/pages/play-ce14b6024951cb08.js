(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{7270:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/play",function(){return n(7364)}])},7364:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var l=n(5893),a=n(7294),s=n(770),c=n.n(s),r=function(){let[e,t]=(0,a.useState)("0"),[n,s]=(0,a.useState)(""),[r,u]=(0,a.useState)(""),[i,o]=(0,a.useState)(""),[m,b]=(0,a.useState)(!1),_=e=>{},N=e=>{},d=(e,t,n)=>{let l;switch(n){case"+":l=e+t;break;case"-":l=e-t;break;case"*":l=e*t;break;case"/":l=e/t}let a=0;if("+"===n||"-"===n){if(!Number.isInteger(e)){var s=String(e).split(".")[1].length;a<s&&(a=s)}if(!Number.isInteger(t)){var s=String(t).split(".")[1].length;a<s&&(a=s)}}else a=14;if(Number.isInteger(l=Number(null==l?void 0:l.toFixed(a))))return Math.ceil(l);let c=[...(l+"").split("")],r=0;for(let u=c.length-1;u>c.length-a;u--)if("0"===c[u])++r;else break;return r>0?Number(null==l?void 0:l.toFixed(a-r)):l},h=l=>{let a=l.target;if(!(a instanceof HTMLButtonElement))return;let _=a.className.includes(c().number),N=a.className.includes(c().calc),h=a.className.includes(c().ac),x=a.className.includes(c().point);if(_)m||"0"===e?(t(a.textContent),b(!1)):t(e=>e+a.textContent);else if(N){let f=a.textContent;m?"="===f?t(e=>{r||u(e);let t=d(+e,+r,i)+"";return s(t),t}):o(f):("="===f||b(!0),n?"="!==f?o(e=>(t(t=>{let l=d(+n,+t,e)+"";return u(t),s(l),l}),f)):t(e=>{let t=d(+n,+e,i)+"";return s(t),t}):(s(e),"="!==f&&o(f)))}else h?(t("0"),s(""),u(""),o(""),b(!1)):x&&t(e=>e+".")};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:c().container,onClick:h,children:[(0,l.jsx)("input",{className:c().input,type:"text",value:e,onChange:_,onKeyUp:N}),(0,l.jsx)("button",{className:c().ac,children:"ac"}),(0,l.jsx)("button",{className:c().calc,children:"/"}),(0,l.jsx)("button",{className:c().number,children:"7"}),(0,l.jsx)("button",{className:c().number,children:"8"}),(0,l.jsx)("button",{className:c().number,children:"9"}),(0,l.jsx)("button",{className:c().calc,children:"*"}),(0,l.jsx)("button",{className:c().number,children:"4"}),(0,l.jsx)("button",{className:c().number,children:"5"}),(0,l.jsx)("button",{className:c().number,children:"6"}),(0,l.jsx)("button",{className:c().calc,children:"-"}),(0,l.jsx)("button",{className:c().number,children:"1"}),(0,l.jsx)("button",{className:c().number,children:"2"}),(0,l.jsx)("button",{className:c().number,children:"3"}),(0,l.jsx)("button",{className:c().calc,children:"+"}),(0,l.jsx)("button",{className:c().zero+" "+c().number,children:"0"}),(0,l.jsx)("button",{className:c().point,children:"."}),(0,l.jsx)("button",{className:c().calc,children:"="})]})})},u=function(){return(0,l.jsx)(r,{})}},770:function(e){e.exports={container:"Calculator_container__0Xmv7",input:"Calculator_input__TBzc7",ac:"Calculator_ac__7p0LM",calc:"Calculator_calc__qM1_m",number:"Calculator_number__qAS_7",point:"Calculator_point__lZ9M9",zero:"Calculator_zero__je5vC"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7270)}),_N_E=e.O()}]);