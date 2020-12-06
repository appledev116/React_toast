(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(15),l=n.n(s),i=(n(27),n(4)),o=n(2),u=n(8),d=n(20),b=n(5),x={primarygray:{base:"text-white hover:bg-gray-600 bg-gray-500"},primaryred:{base:"text-white hover:bg-red-600 bg-red-500"},primaryorange:{base:"text-white hover:bg-oragne-600 bg-oragne-500"},primarygreen:{base:"text-white hover:bg-green-600 bg-green-500"},primaryblue:{base:"text-white hover:bg-blue-600 bg-blue-500"},secondaryblue:{base:"text-blue-500 hover:bg-gray-200 bg-gray-100"},invisible:{base:""}};function j(e){var t=e.children,n=e.variant,a=void 0===n?"primarygray":n,c=e.isloading,s=(e.loadingPlaceholder,e.icon),l=e.disabled,i=e.onClick,j=Object(d.a)(e,["children","variant","isloading","loadingPlaceholder","icon","disabled","onClick"]),f=x[a]||x.primarygray;return Object(r.jsx)("button",Object(u.a)(Object(u.a)({onClick:function(e){i&&i(e)},disabled:l||c},j),{},{className:Object(o.a)("flex-no-wrap \n        bg-transparent \n        px-1 my-auto\n        h-full  \n        font-semibold \n        border \n        rounded-md \n        outline-none focus:outline-none \n        transition \n        border-transparent \n        duration-200 ",f.base,j.className),children:Object(r.jsx)("div",{className:"p-1 text-xs md:text-sm w-full",children:s?Object(r.jsxs)("div",{className:"flex my-auto flex-nowrap gap-x-2",children:[Object(r.jsx)("div",{className:"flex mx-auto my-auto",children:Object(r.jsx)(b.a,{className:Object(o.a)("flex mx-auto justify-center"),icon:s})}),t&&Object(r.jsx)("div",{className:"flex mx-auto my-auto text-center",children:t||null})]}):t})}))}var f=n(13),m=n.n(f),h=n(16),v=n(14),O=n(6),p={Info:{base:"bg-white border-blue-500",iconstyle:"text-blue-500 ",icon:O.c,name:"Info"},Error:{base:"bg-white border-red-500 ",iconstyle:"text-red-500 ",icon:O.b,name:"Error"},Warning:{base:"bg-white border-yellow-500",iconstyle:"text-yellow-500 ",icon:O.b,name:"Warning"},Success:{base:"bg-white border-green-500",iconstyle:"text-green-500 ",icon:O.a,name:"Success"}};function y(e){var t=e.id,n=e.header,c=e.message,s=e.lifetime,l=e.onRemove,i=e.truncate,u=void 0===i?"truncate-1-lines":i,d=e.icon,x=e.type,j=x?p[x]:{base:"bg-white border-gray-600 ",iconstyle:"",icon:d,name:n};return Object(a.useEffect)((function(){s&&l&&setTimeout((function(){l(t)}),s)}),[s]),Object(r.jsx)("div",{className:Object(o.a)("flex w-full visible flex-row shadow-lg","border-l-4 rounded-md duration-100 cursor-pointer","transform transition-all hover:scale-102",j.base,x&&"max-h-40"),children:Object(r.jsxs)("div",{className:"flex flex-row p-2 flex-no-wrap w-full",children:[j.icon&&Object(r.jsx)("div",{className:Object(o.a)("flex items-center h-12 w-12","mx-auto text-xl select-none"),children:Object(r.jsx)(b.a,{className:Object(o.a)("mx-auto",j.iconstyle),icon:j.icon})}),Object(r.jsxs)("div",{className:"flex flex-col flex-no-wrap px-1 w-full",children:[Object(r.jsx)("div",{className:"flex my-auto font-bold select-none",children:j.name}),Object(r.jsx)("p",{className:Object(o.a)("-mt-0.5 my-auto break-all flex","text-gray-600 text-sm","string"===typeof c&&u),children:c})]}),Object(r.jsx)("div",{onClick:function(){return l&&l(t)},className:Object(o.a)("w-10 h-12 mr-2 items-center mx-auto","text-center leading-none text-lg"),children:Object(r.jsx)(b.a,{className:Object(o.a)("mx-auto my-auto h-full text-center text-gray-600","cursor-pointer hover:scale-105 transform "),icon:O.d})})]})})}function g(){var e=Object(a.useContext)(w);function t(t){null===e||void 0===e||e.remove(t)}return Object(r.jsx)("div",{className:Object(o.a)("absolute top-0 right-0 z-50 w-full md:max-w-sm","p-4 md:p-4 max-h-screen overflow-hidden"),children:Object(r.jsx)("div",{className:Object(o.a)("flex-1 flex-col fade w-full mr-8 justify-end"),children:null===e||void 0===e?void 0:e.data.map((function(e){return Object(r.jsx)("div",{className:Object(o.a)("flex py-1 w-full","transform transition-all duration-300"),children:Object(r.jsx)(y,{id:e.id,message:e.message,type:e.type,header:e.header,icon:e.icon,truncate:e.truncate,onRemove:t,lifetime:e.lifetime})},e.id)}))})})}var w=c.a.createContext(void 0);function N(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}function k(e){var t=e.children,n=Object(a.useState)([]),c=Object(i.a)(n,2),s=c[0],l=c[1],o=Object(a.useCallback)((function(e,t,n,r){if(e){var a={id:N(),message:e,type:t,lifetime:n||2500,truncate:r};l((function(e){return[].concat(Object(v.a)(e),[a])}))}}),[l,s]),u=Object(a.useCallback)((function(e,t,n,r){if(e){var a={id:N(),message:e,lifetime:t||2500,truncate:n,icon:r,type:void 0};l((function(e){return[].concat(Object(v.a)(e),[a])}))}}),[l,s]),d=Object(a.useCallback)((function(e,t,n){return o(e,"Error",t,n)}),[o]),b=Object(a.useCallback)((function(e,t,n){return o(e,"Warning",t,n)}),[o]),x=Object(a.useCallback)((function(e,t,n){return o(e,"Success",t,n)}),[o]),j=Object(a.useCallback)((function(e,t,n){return o(e,"Info",t,n)}),[o]),f=Object(a.useCallback)((function(){return{data:s,pushError:d,pushWarning:b,pushSuccess:x,pushInfo:j,push:o,pushCustom:u,remove:function(e){return Object(h.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l((function(t){return t.filter((function(t){return t.id!=e}))}));case 1:case"end":return t.stop()}}),t)})))()}}}),[s,l,d,b,x,j,o,u]);return Object(r.jsxs)(w.Provider,{value:f(),children:[Object(r.jsx)(g,{}),t]})}function C(e){var t=e.src,n=e.lable,c=e.icon,s=Object(a.useState)(!0),l=Object(i.a)(s,2),u=l[0],d=l[1],x=Object(a.useState)(!1),j=Object(i.a)(x,2),f=j[0],m=j[1],h=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;(null===h||void 0===h||null===(e=h.current)||void 0===e?void 0:e.complete)&&d(!1)}),[]),Object(r.jsxs)("div",{className:Object(o.a)("flex shadow-md select-none flex-no-wrap text-lg","uppercase text-gray-800 font-semibold "," mx-auto my-auto bg-gray-100","items-center justify-center w-10 h-10 rounded-full"),children:[Object(r.jsx)("div",{className:Object(o.a)("rounded-full","font-normal"),style:{display:u?"block":"none"},children:c?Object(r.jsx)(b.a,{className:"flex mx-auto justify-center",icon:c}):Object(r.jsx)("div",{children:n})}),Object(r.jsx)("div",{className:"flex w-full h-full",style:{display:u?"none":"block"},children:void 0!==t&&null!==t&&!f&&Object(r.jsx)("img",{alt:"User avatar",ref:h,className:Object(o.a)("w-full h-full rounded-full"),src:t||void 0,onLoad:function(e){return d(!1)},onError:function(e){return m(!0)}})})]})}function I(){return Object(r.jsx)("div",{className:"flex flex-col h-full",children:Object(r.jsxs)("div",{className:"flex flex-row py-2 space-x-5 items-center mx-2",children:[Object(r.jsxs)("div",{className:Object(o.a)("flex flex-col relative py-2 text-base","justify-start w-14 "),children:[Object(r.jsx)("div",{className:Object(o.a)("flex flex-col uppercase mx-auto text-white","select-none my-auto"),children:Object(r.jsx)(C,{src:"https://avatars2.githubusercontent.com/u/54806834?s=60&v=4",lable:"DK"})}),Object(r.jsx)("div",{className:Object(o.a)("flex px-2 mx-auto items-center justify-center text-center ","bottom-0 justify-center py-0.5 bg-gray-500 text-white rounded-full","break-normal text-xs leading-none mt-3 font-bold","flex -mt-2 text-xs "),children:"Dalibor"})]}),Object(r.jsxs)("div",{className:"flex flex-col text-gray-500 ",children:[Object(r.jsx)("span",{className:"font-semibold",children:"This is custom toast"}),Object(r.jsx)("p",{className:"mt-1",children:"Builded by using React hooks and context API"})]})]})})}var S=c.a.createContext(void 0);function E(e){var t=e.children,n=e.onChange,c=e.initinal,s=Object(a.useState)(!1),l=Object(i.a)(s,2),u=l[0],d=l[1],b=Object(a.useState)(c),x=Object(i.a)(b,2),j=x[0],f=x[1];Object(a.useEffect)((function(){n&&n(j)}),[j,n]);var m=Object(a.useRef)(null);!function(e,t){Object(a.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t()}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e])}(m,(function(){d(!1)}));var h=Object(a.useCallback)((function(e){f(e),d(!1)}),[]),v=Object(a.useCallback)((function(){return{onSelect:h}}),[]);return Object(r.jsx)(S.Provider,{value:v(),children:Object(r.jsxs)("div",{ref:m,onMouseDown:function(e){e.preventDefault(),d((function(e){return!e}))},className:Object(o.a)("flex flex-col w-full border-2 border-transparent","hover:border-gray-300 transition duration-150","focus:border-blue-500 rounded-md cursor-pointer"),children:[Object(r.jsx)("div",{className:"flex px-1",children:j}),Object(r.jsx)("div",{className:" h-full relative",children:1==u&&Object(r.jsx)("div",{className:Object(o.a)("flex flex-col absolute z-10","rounded-md shadow-xl bg-white","border border-gray-200 mt-1"),children:t})})]})})}var L=n(17),D=n(18),P=n(21),W=n(19),M=function(e){Object(P.a)(n,e);var t=Object(W.a)(n);function n(){return Object(L.a)(this,n),t.apply(this,arguments)}return Object(D.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",Object(u.a)({},this.props))}}]),n}(c.a.Component);function R(e){var t=e.children,n=e.value,c=Object(a.useContext)(S);return Object(r.jsx)(M,{onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),null===c||void 0===c||c.onSelect(n)},myval:n,className:"hover:bg-gray-100 py-0.5 px-2 cursor-pointer",children:t})}var T="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";function A(){var e=Object(a.useContext)(w),t=Object(a.useState)(1500),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(r.jsx)("div",{className:Object(o.a)("mx-auto relative my-auto p-5 bg-white","shadow-md rounded-md border border-gray-200 "),children:Object(r.jsxs)("div",{className:"flex flex-col my-auto h-full space-y-5",children:[Object(r.jsxs)("div",{className:"flex flex-col space-y-3",children:[Object(r.jsx)("div",{className:" font-bold text-gray-500 text-base uppercase",children:"Duration:"}),Object(r.jsx)("div",{className:Object(o.a)("flex relative flex-row space-x-1 md:space-x-5 w-full","align-middle my-auto "),children:Object(r.jsxs)(E,{initinal:c,onChange:function(e){return s(e)},children:[Object(r.jsx)(R,{value:"1000",children:"1000 ms"}),Object(r.jsx)(R,{value:"2500",children:"2500 ms"}),Object(r.jsx)(R,{value:"5000",children:"5000 ms"})]})})]}),Object(r.jsxs)("div",{className:"flex flex-col space-y-3",children:[Object(r.jsx)("div",{className:" font-bold text-gray-500 text-base uppercase",children:"Types:"}),Object(r.jsxs)("div",{className:Object(o.a)("flex relative flex-row space-x-1 md:space-x-5 w-full","justify-center align-middle my-auto "),children:[Object(r.jsx)(j,{variant:"primaryred",onClick:function(){return null===e||void 0===e?void 0:e.pushError("Oppps Error",c)},children:"Error"}),Object(r.jsx)(j,{variant:"primaryorange",onClick:function(){return null===e||void 0===e?void 0:e.pushWarning("Warning appear",c,"truncate-2-lines")},children:"Warning"}),Object(r.jsx)(j,{variant:"primarygreen",onClick:function(){return null===e||void 0===e?void 0:e.pushSuccess("Action success",c)},children:"Success"}),Object(r.jsx)(j,{variant:"primaryblue",onClick:function(){return null===e||void 0===e?void 0:e.pushInfo("Info message",c)},children:"Info"}),Object(r.jsx)(j,{variant:"primarygray",onClick:function(){return null===e||void 0===e?void 0:e.pushCustom(Object(r.jsx)(I,{}),c)},children:"Custom"})]})]}),Object(r.jsxs)("div",{className:"flex flex-col space-y-3",children:[Object(r.jsx)("div",{className:" font-bold text-gray-500 text-base uppercase",children:"Truncate:"}),Object(r.jsxs)("div",{className:Object(o.a)("flex relative flex-row space-x-1 md:space-x-5 w-full"," align-middle my-auto "),children:[Object(r.jsx)(j,{variant:"secondaryblue",onClick:function(){return null===e||void 0===e?void 0:e.pushInfo(T,c,"truncate-1-lines")},children:"1 line"}),Object(r.jsx)(j,{variant:"secondaryblue",onClick:function(){return null===e||void 0===e?void 0:e.pushInfo(T,c,"truncate-2-lines")},children:"2 lines"}),Object(r.jsx)(j,{variant:"secondaryblue",onClick:function(){return null===e||void 0===e?void 0:e.pushInfo(T,c,"truncate-3-lines")},children:"3 lines"})]})]})]})})}function z(e){var t=e.children;return Object(r.jsx)("div",{className:"flex h-screen w-screen bg-gray-100",children:t})}var B=function(e){var t=e.children;return Object(r.jsx)(k,{children:t})};var J=function(){return Object(r.jsx)(B,{children:Object(r.jsx)(z,{children:Object(r.jsx)(A,{})})})};n(34);l.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ecc1bd1d.chunk.js.map