(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),d=n.n(a),c=n(13),i=n.n(c),s=(n(23),n(3)),o=n(12),l=n(17),u=n(5),x={primarygray:{base:"text-white hover:bg-gray-600 bg-gray-500"},primaryred:{base:"text-white hover:bg-red-600 bg-red-500"},primaryorange:{base:"text-white hover:bg-oragne-600 bg-oragne-500"},primarygreen:{base:"text-white hover:bg-green-600 bg-green-500"},primaryblue:{base:"text-white hover:bg-blue-600 bg-blue-500"},invisible:{base:""}};function b(e){var t=e.children,n=e.variant,a=void 0===n?"primarygray":n,d=e.isloading,c=(e.loadingPlaceholder,e.icon),i=e.disabled,b=e.onClick,m=Object(l.a)(e,["children","variant","isloading","loadingPlaceholder","icon","disabled","onClick"]),f=x[a]||x.primarygray;return Object(r.jsx)("button",Object(o.a)(Object(o.a)({onClick:function(e){b&&b(e)},disabled:i||d},m),{},{className:Object(s.a)("flex-no-wrap \n        bg-transparent \n        px-1 my-auto\n        h-full  \n        font-semibold \n        border \n        rounded-md \n        outline-none focus:outline-none \n        transition \n        border-transparent \n        duration-200 ",f.base,m.className),children:Object(r.jsx)("div",{className:"p-1 text-xs md:text-sm w-full",children:c?Object(r.jsxs)("div",{className:"flex my-auto flex-nowrap gap-x-2",children:[Object(r.jsx)("div",{className:"flex mx-auto my-auto",children:Object(r.jsx)(u.a,{className:Object(s.a)("flex mx-auto justify-center"),icon:c})}),t&&Object(r.jsx)("div",{className:"flex mx-auto my-auto text-center",children:t||null})]}):t})}))}var m=n(11),f=n.n(m),j=n(14),h=n(15),v=n(16),g=n(4),p={Info:{base:"bg-white border-blue-500",iconstyle:"text-blue-500 ",icon:g.c,name:"Info"},Error:{base:"bg-white border-red-500 ",iconstyle:"text-red-500 ",icon:g.b,name:"Error"},Warning:{base:"bg-white border-yellow-500",iconstyle:"text-yellow-500 ",icon:g.b,name:"Warning"},Success:{base:"bg-white border-green-500",iconstyle:"text-green-500 ",icon:g.a,name:"Success"},Default:{base:"bg-white border-gray-600 ",iconstyle:"text-gray-600 ",icon:g.d,name:""}};function O(e){var t=e.id,n=e.message,d=e.lifetime,c=e.onRemove,i=e.variant,o=void 0===i?"Success":i,l=e.truncate,x=void 0===l?"truncate-1-lines":l,b=p[o]||p.Info;return Object(a.useEffect)((function(){d&&c&&setTimeout((function(){c(t)}),d)}),[d]),Object(r.jsx)("div",{className:Object(s.a)("flex w-full visible flex-row shadow-lg","border-l-4 rounded-md duration-100 cursor-pointer","transform transition-all max-h-40 hover:scale-102",b.base),children:Object(r.jsxs)("div",{className:"flex flex-row py-2 flex-no-wrap w-full",children:[Object(r.jsx)("div",{className:Object(s.a)("flex items-center h-12 w-12","mx-auto text-xl select-none"),children:Object(r.jsx)(u.a,{className:Object(s.a)("mx-auto",b.iconstyle),icon:b.icon})}),Object(r.jsxs)("div",{className:"flex-auto md:flex md:w-48 flex-col flex-no-wrap px-1",children:[Object(r.jsx)("div",{className:"flex my-auto font-bold select-none ",children:b.name}),Object(r.jsx)("p",{className:Object(s.a)("text-gray-600 -mt-0.5 my-auto text-sm break-all",x),children:n})]}),Object(r.jsx)("div",{onClick:function(){return c&&c(t)},className:Object(s.a)("w-10 h-12 mr-2 items-center mx-auto","text-center leading-none text-lg"),children:Object(r.jsx)(u.a,{className:Object(s.a)("mx-auto my-auto h-full text-center text-gray-600","cursor-pointer hover:scale-105 transform "),icon:g.e})})]})})}function y(){var e=Object(a.useContext)(w);function t(t){null===e||void 0===e||e.remove(t)}return Object(r.jsx)("div",{className:"absolute top-0 right-0 z-50 w-full md:w-auto p-4 md:p-4 max-h-screen overflow-hidden",children:Object(r.jsx)("div",{className:"flex-auto  md:flex fade w-full flex-col relative mr-8 transform transition-all duration-300",children:null===e||void 0===e?void 0:e.data.map((function(e){return Object(r.jsx)("div",{className:"flex py-1 fade show w-full transform transition-all duration-300",children:Object(r.jsx)(O,{id:e.id,message:e.message,type:e.type,variant:e.type,onRemove:t,lifetime:e.lifetime})})}))})})}var w=d.a.createContext(void 0);function N(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))}function k(e){var t=e.children,n=Object(a.useState)([]),d=Object(v.a)(n,2),c=d[0],i=d[1],s=Object(a.useCallback)((function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2500,r=arguments.length>3?arguments[3]:void 0;if(e){var a={id:N(),message:e,type:t,lifetime:n,truncate:r};i((function(e){return[].concat(Object(h.a)(e),[a])}))}}),[i,c]),o=Object(a.useCallback)((function(e,t,n){return s(e,"Error",t,n)}),[s]),l=Object(a.useCallback)((function(e,t,n){return s(e,"Warning",t,n)}),[s]),u=Object(a.useCallback)((function(e,t,n){return s(e,"Success",t,n)}),[s]),x=Object(a.useCallback)((function(e,t,n){return s(e,"Info",t,n)}),[s]),b=Object(a.useCallback)((function(){return{data:c,pushError:o,pushWarning:l,pushSuccess:u,pushInfo:x,push:s,remove:function(e){return Object(j.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i((function(t){return t.filter((function(t){return t.id!=e}))}));case 1:case"end":return t.stop()}}),t)})))()}}}),[c,o,l,u,x,s]);return Object(r.jsxs)(w.Provider,{value:b(),children:[Object(r.jsx)(y,{}),t]})}function C(){var e=Object(a.useContext)(w);return Object(r.jsx)("div",{className:Object(s.a)("mx-auto relative my-auto p-5 bg-white","shadow-md rounded-md border border-gray-200 "),children:Object(r.jsx)("div",{className:"flex my-auto h-full",children:Object(r.jsxs)("div",{className:Object(s.a)("flex relative flex-row space-x-5 w-full","justify-center align-middle my-auto "),children:[Object(r.jsx)(b,{variant:"primaryred",onClick:function(){return null===e||void 0===e?void 0:e.pushError("Oppps Errordddddddddddddddddddddddddddddddddddddddddddddddddddddd sdddddddd sdddddddddddddddddd sdddddddd sdddddddddddddddddd sdddddddd sdddddddddsd dsd")},children:"Error"}),Object(r.jsx)(b,{variant:"primaryorange",onClick:function(){return null===e||void 0===e?void 0:e.pushWarning("Warning appear")},children:"Warning"}),Object(r.jsx)(b,{variant:"primarygreen",onClick:function(){return null===e||void 0===e?void 0:e.pushSuccess("Action success")},children:"Success"}),Object(r.jsx)(b,{variant:"primaryblue",onClick:function(){return null===e||void 0===e?void 0:e.pushInfo("Info message")},children:"Info"})]})})})}function S(e){var t=e.children;return Object(r.jsx)("div",{className:"flex h-screen w-screen bg-gray-100",children:t})}var E=function(e){var t=e.children;return Object(r.jsx)(k,{children:t})};var I=function(){return Object(r.jsx)(E,{children:Object(r.jsx)(S,{children:Object(r.jsx)(C,{})})})};n(30);i.a.render(Object(r.jsx)(d.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.aa997b29.chunk.js.map