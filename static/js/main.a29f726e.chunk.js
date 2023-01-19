(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{13:function(n,e,t){n.exports={button:"Button_button__26i-W"}},18:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var c,i,r,o,a=t(0),l=t.n(a),s=t(9),u=t.n(s),d=(t(18),t(2)),b=t(3),j=t(4),h=j.a.div(c||(c=Object(b.a)(["\n  border: 2px solid white;\n  background-color: #ccc;\n  width: 730px;\n  height: 260px;\n  margin-top: 153px;\n  margin-left: 290px;\n  border-radius: 19px;\n  & .login {\n    width: 90%;\n    max-width: 40rem;\n    margin: 2rem auto;\n    padding: 2rem;\n    margin-top: -27px;\n  }\n  & .control {\n    margin: 1rem 0;\n    display: flex;\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  & .control label,\n  & .control input {\n    display: block;\n  }\n  & .control label {\n    font-weight: bold;\n    flex: 1;\n    color: #464646;\n    margin-bottom: 0.5rem;\n  }\n  & .control input {\n    flex: 3;\n    font: inherit;\n    padding: 0.35rem 0.35rem;\n    border-radius: 6px;\n    border: 1px solid #ccc;\n  }\n  & .control input:focus {\n    outline: none;\n    border-color: #4f005f;\n    background: #f6dbfc;\n  }\n\n  & .control.invalid input {\n    border-color: red;\n    background: #fbdada;\n  }\n\n  & .actions {\n    text-align: center;\n  }\n"]))),m=j.a.header(i||(i=Object(b.a)(["\n  & .main-header {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 5rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background: #741188;\n    padding: 0 2rem;\n  }\n  & .main-header h1 {\n    color: white;\n  }\n"]))),f=j.a.main(r||(r=Object(b.a)(["\n  & ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n  }\n  & li {\n    margin: 0;\n    margin-left: 2rem;\n    margin-bottom: 100px;\n  }\n\n  & button {\n    font: inherit;\n    background: #dd0db0;\n    border: 1px solid #dd0db0;\n    padding: 0.5rem 1.5rem;\n    color: white;\n    cursor: pointer;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);\n    border-radius: 20px;\n  }\n"]))),g=j.a.div(o||(o=Object(b.a)(["\n  margin-left: 500px;\n  margin-top: 200px;\n"]))),O=t(1),x=function(){var n=Object(a.useState)(0),e=Object(d.a)(n,2),t=e[0],c=e[1],i=Object(a.useRef)();return Object(a.useEffect)((function(){return i.current=setInterval((function(){c((function(n){return n+1}))}),1e3),function(){return clearInterval(i.current)}}),[]),Object(a.useEffect)((function(){t>=60&&clearInterval(i.current)}),[t]),Object(O.jsx)(g,{children:Object(O.jsxs)("h1",{children:["Timer:",t]})})},p=function(n){var e=n.state,t=Object(a.useState)([]),c=Object(d.a)(t,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/posts").then((function(n){return n.json()})).then((function(n){r(n)})).catch((function(n){return console.error(n)}))}),[]),Object(O.jsx)(O.Fragment,{children:e?Object(O.jsx)("h1",{children:Object(O.jsx)(x,{})}):Object(O.jsx)("ol",{children:i.map((function(n){return Object(O.jsx)("li",{children:n.title},n.id)}))})})},v=function(n){return Object(O.jsx)("div",{className:"card".concat(" ",n.className),children:n.children})},w=t(13),S=t.n(w),y=function(n){return Object(O.jsx)("button",{type:n.type||"button",className:"".concat(S.a.button," ").concat(n.className),onClick:n.onClick,disabled:n.disabled,children:n.children})},k=function(n){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(),o=Object(d.a)(r,2),l=o[0],s=o[1],u=Object(a.useState)(""),b=Object(d.a)(u,2),j=b[0],m=b[1],f=Object(a.useState)(),g=Object(d.a)(f,2),x=g[0],p=g[1],w=Object(a.useState)(!1),S=Object(d.a)(w,2),k=S[0],L=S[1];Object(a.useEffect)((function(){var n=setTimeout((function(){console.log("hello world"),L(c.includes("@")&&j.trim().length>6)}),1500);return function(){console.log("clean up"),clearTimeout(n)}}),[c,j]);return Object(O.jsx)(h,{children:Object(O.jsx)(v,{className:"login",children:Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.onLogin(c,j)},children:[Object(O.jsxs)("div",{className:"control".concat(" ",!1===l?"invalid":""),children:[Object(O.jsx)("label",{htmlFor:"email",className:"title",children:"E-Mail"}),Object(O.jsx)("input",{type:"email",id:"email",value:c,onChange:function(n){i(n.target.value)},onBlur:function(){s(c.includes("@"))}})]}),Object(O.jsxs)("div",{className:"control".concat(" ",!1===x?"invalid":""),children:[Object(O.jsx)("label",{htmlFor:"password",children:"Password"}),Object(O.jsx)("input",{type:"password",id:"password",value:j,onChange:function(n){m(n.target.value)},onBlur:function(){p(j.trim().length>6)}})]}),Object(O.jsx)("div",{className:"actions",children:Object(O.jsx)(y,{type:"submit",className:"btn",disabled:!k,children:"Login"})})]})})})},L=function(n){return Object(O.jsx)(f,{className:"nav",children:Object(O.jsxs)("ul",{children:[n.isLoggedIn&&Object(O.jsx)("li",{children:Object(O.jsx)("button",{children:"User"})}),n.isLoggedIn&&Object(O.jsx)("li",{children:Object(O.jsx)("button",{onClick:function(){return n.setState(!n.state)},children:"Timer"})}),n.isLoggedIn&&Object(O.jsx)("li",{children:Object(O.jsx)("button",{onClick:n.onLogout,children:"Logout"})})]})})},N=function(n){return Object(O.jsx)(m,{children:Object(O.jsxs)("header",{className:["main-header"],children:[Object(O.jsx)("h1",{children:"A Typical Page"}),Object(O.jsx)(L,{state:n.state,setState:n.setState,isLoggedIn:n.isAuthenticated,onLogout:n.onLogout})]})})};var I=function(){var n=Object(a.useState)(!1),e=Object(d.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)(!1),r=Object(d.a)(i,2),o=r[0],s=r[1];return Object(a.useEffect)((function(){"1"===localStorage.getItem("islogin")&&t(!0)}),[t]),Object(O.jsxs)(l.a.Fragment,{children:[Object(O.jsx)(N,{isAuthenticated:t,onLogout:function(){c(!1),localStorage.removeItem("islogin")},state:o,setState:s}),Object(O.jsxs)("main",{children:[!t&&Object(O.jsx)(k,{onLogin:function(n,e){c((function(n){return!n}))}}),t?Object(O.jsx)(p,{state:o}):null]})]})};u.a.render(Object(O.jsx)(I,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.a29f726e.chunk.js.map