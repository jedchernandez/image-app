(this["webpackJsonpimage-app"]=this["webpackJsonpimage-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(4),i=n.n(r),s=n(2),u=(n(9),n(0)),o=function(e){var t=e.children;return Object(u.jsx)("div",{className:"container",children:t})},j=function(e){var t=e.inputVal,n=e.setInputVal,c=e.handleSearch;return Object(u.jsxs)("form",{onSubmit:c,children:[Object(u.jsx)("input",{type:"text",placeholder:"Search for an image",autoFocus:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Search"})]})},l=function(e){var t=e.inputVal,n=e.setInputVal,c=e.handleSearch,a=e.images,r=e.newImages;return Object(u.jsxs)("section",{className:"hero",children:[Object(u.jsx)(j,{inputVal:t,setInputVal:n,handleSearch:c}),Object(u.jsxs)(o,{children:[Object(u.jsx)(o,{images:a}),0===a.length?Object(u.jsx)("h1",{children:"No images found."}):Object(u.jsxs)("div",{className:"btnContainer",children:[Object(u.jsx)("button",{onClick:function(){return r("previous")},children:"Previous"}),Object(u.jsx)("button",{onClick:function(){return r("next")},children:"Next"})]})]})]})},b=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),i=Object(s.a)(r,2),o=i[0],j=i[1],b=Object(c.useState)(""),h=Object(s.a)(b,2),p=h[0],d=h[1],O=Object(c.useState)(""),f=Object(s.a)(O,2),x=f[0],m=f[1];return Object(c.useEffect)((function(){window.scrollTo(0,0),fetch("https://pixabay.com/api/?key=".concat("17962448-c87701939beba1d9cf6dabbee","&q=").concat(p,"&image_type=photo&per_page=9&page=").concat(o,"&pretty=true")).then((function(e){return e.json()})).then((function(e){return a(e.hits)}))}),[p,o]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(l,{}),"images=",n,"inputVal=",x,"setInputVal=",m,"handleSearch=",function(e){e.preventDevault(),d(x),m("")},"newImages = ",function(e){"next"===e?j((function(e){return e+1})):"previous"===e&&1!==o&&j((function(e){return e-1}))}]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.7717d75e.chunk.js.map