(this["webpackJsonpmy-ts-proect"]=this["webpackJsonpmy-ts-proect"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={container:"Message_container__fWobR",messagewindow:"Message_messagewindow__3YNL-",avatar:"Message_avatar__1rNkG",message:"Message_message__3PmYm",name:"Message_name__2jFuB",time:"Message_time__3k-H9"}},,function(e,t,n){e.exports={container:"SuperEditableSpan_container__136PK",editImg:"SuperEditableSpan_editImg__3cMS7",spanStyle:"SuperEditableSpan_spanStyle__3V4TA",inputStyle:"SuperEditableSpan_inputStyle__1B5qA"}},,function(e,t,n){e.exports={custom_btn:"SuperButton_custom_btn__3QcuF",btnStyle:"SuperButton_btnStyle__1EGoU"}},function(e,t,n){e.exports={errorInput:"SuperInputText_errorInput__jx0N8",error:"SuperInputText_error__2ChaR"}},,,,function(e,t,n){e.exports={someClass:"Greeting_someClass__UThmZ",error:"Greeting_error__23zIJ",container:"Greeting_container__3BPlR",listName:"Greeting_listName__1bDJ8",counter:"Greeting_counter__777P2"}},,,,function(e,t,n){e.exports={container:"Affairs_container__2qM4w",name:"Affairs_name__3BdVc",priorety:"Affairs_priorety__2TEJ4"}},,,function(e,t,n){e.exports={blue:"HW4_blue__ON7Jh",column:"HW4_column__3O8r2",testSpanError:"HW4_testSpanError__32to5"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__95XIn",spanClassName:"SuperCheckbox_spanClassName__1s4bV"}},function(e,t,n){e.exports={preloader:"Preloader_preloader__3n-EP",spinner:"Preloader_spinner__3XSP3",spin:"Preloader_spin__G6Wm2"}},,,,,function(e,t,n){e.exports={App:"App_App__3tilN"}},function(e,t,n){e.exports={menu:"Header_menu__2dkV9",line:"Header_line__1n7_B"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),s=n.n(c),i=(n(38),n(31)),o=n.n(i),j=n(2),l=n(9),u=n(3),b=n(0);var d=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},O=n(8),x=n.n(O);var h=function(e){return Object(b.jsxs)("div",{className:x.a.container,children:[Object(b.jsx)("div",{className:x.a.avatar,children:Object(b.jsx)("img",{src:e.avatar})}),Object(b.jsxs)("div",{className:x.a.messagewindow,children:[Object(b.jsxs)("div",{className:x.a.nameandmessage,children:[Object(b.jsx)("div",{className:x.a.name,children:e.name}),Object(b.jsx)("div",{className:x.a.message,children:e.message})]}),Object(b.jsx)("div",{className:x.a.time,children:Object(b.jsx)("div",{children:e.time})})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Name",v="im learning ReactJS now?",f="21:55";var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)(h,{avatar:m,name:p,message:v,time:f})]})},C=n(21),_=n.n(C),A=n(4),k=n(5),y=n(12),S=n.n(y),w=function(e){e.red,e.className;var t=e.title,n=e.disabled,a=Object(k.a)(e,["red","className","title","disabled"]),r=n?"".concat(S.a.custom_btn," ").concat(S.a.btnStyle," ").concat(S.a.btnStyleDisabled):"".concat(S.a.custom_btn," ").concat(S.a.btnStyle);return Object(b.jsx)("button",Object(A.a)(Object(A.a)({className:r},a),{},{children:t}))};var N=function(e){return Object(b.jsxs)("div",{className:_.a.container,children:[Object(b.jsx)("div",{className:_.a.name,children:e.affair.name}),Object(b.jsx)("div",{className:_.a.priorety,children:e.affair.priority}),Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"Del",onClick:function(){e.deleteAffairCallback(e.affair._id)},red:!0,children:"delete"})})]},e.affair._id)};var D=function(e){var t=e.data.map((function(t){return Object(b.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)(w,{title:"All",onClick:function(){e.setFilter("all")}}),Object(b.jsx)(w,{title:"High",onClick:function(){e.setFilter("high")}}),Object(b.jsx)(w,{title:"Middle",onClick:function(){e.setFilter("middle")}}),Object(b.jsx)(w,{title:"Low",onClick:function(){e.setFilter("low")}})]})},Q=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var E=function(){var e=Object(a.useState)(Q),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(j.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(D,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})]})},H=n(33),J=n(17),P=n.n(J),G=n(13),U=n.n(G),R=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.setError,i=e.className,o=e.spanClassName,j=Object(k.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","setError","className","spanClassName"]),l="".concat(U.a.error," ").concat(o||""),u="".concat(i," ").concat(c?U.a.errorInput:U.a.superInput);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:U.a.wrap,children:[Object(b.jsx)("input",Object(A.a)({type:"text",onChange:function(e){s&&s(""),t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:u},j)),Object(b.jsx)("span",{className:U.a.focusBorder,children:Object(b.jsx)("i",{})})]}),Object(b.jsx)("div",{children:c&&Object(b.jsx)("span",{className:l,children:c})})]})},F=function(e){var t=e.name,n=e.setNameCallback,a=e.addNameOnPress,r=e.usersNamed,c=e.addUser,s=e.setError,i=e.error,o=e.totalUsers;return Object(b.jsxs)("div",{className:P.a.container,children:[Object(b.jsx)("div",{children:Object(b.jsx)(R,{value:t,onChangeText:n,setError:s,onEnter:a,error:i})}),Object(b.jsxs)("div",{className:P.a.buttonAndSpan,children:[Object(b.jsx)(w,{onClick:c,title:"Add"}),Object(b.jsx)("span",{className:P.a.counter,children:o})]}),Object(b.jsxs)("div",{className:P.a.listName,children:[Object(b.jsx)("h3",{children:"List Name"}),Object(b.jsx)("ul",{children:r})]})]})},T=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(j.a)(r,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],O=function(){""===s?d("error. Write your name"):(alert("Hello ".concat(s," !")),d(""),i(""),n(s))},x=t.length,h=t.map((function(e){return Object(b.jsx)("li",{children:e})}));return Object(b.jsx)(F,{name:s,setNameCallback:i,addUser:O,setError:d,error:u,totalUsers:x,addNameOnPress:O,usersNamed:h})};var V=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(T,{users:n,addUserCallback:function(e){r([e].concat(Object(H.a)(n)))}})]})},W=n(24),Z=n.n(W),B=n(25),I=n.n(B),M=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(k.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(I.a.checkbox," ").concat(a||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(A.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(!c.checked)},className:s},c)),r&&Object(b.jsx)("span",{className:I.a.spanClassName,children:r})]})};var Y=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:Z.a.column,children:[Object(b.jsx)(R,{value:n,onChangeText:r,onEnter:s,error:c}),Object(b.jsx)(R,{className:Z.a.blue}),Object(b.jsx)(w,{title:"default"}),Object(b.jsx)(w,{title:"delete",red:!0,onClick:s}),Object(b.jsx)(w,{title:"disabled",disabled:!0}),Object(b.jsx)(M,{checked:l,onChangeChecked:u,children:"some text "}),Object(b.jsx)(M,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},z=n(10),K=n.n(z),q=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(k.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],u=r||{},d=u.children,O=u.onDoubleClick,x=(u.className,Object(k.a)(u,["children","onDoubleClick","className"])),h="".concat(o?K.a.inputStyle:K.a.spanStyle);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(R,Object(A.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!0),n&&n()},className:K.a.inputStyle},c)):Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:K.a.editImg,src:"data:image/png;base64,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"}),Object(b.jsx)("span",Object(A.a)(Object(A.a)({onDoubleClick:function(e){l(!0),O&&O(e)},className:h},x),{},{children:d||c.value}))]})})};function L(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function X(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}L("test",{x:"A",y:1});X("test",{x:"",y:0});var $=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{className:K.a.container,children:Object(b.jsx)(q,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(w,{title:"save",onClick:function(){L("editable-span-value",n)}}),Object(b.jsx)(w,{title:"restore",onClick:function(){r(X("editable-span-value",""))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ee=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(g,{}),Object(b.jsx)(E,{}),Object(b.jsx)(V,{}),Object(b.jsx)(Y,{}),Object(b.jsx)($,{})]})},te=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=Object(k.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(b.jsx)("option",{children:e},t)})):[];return Object(b.jsx)("select",Object(A.a)(Object(A.a)({onChange:function(e){console.log(e.target.value),a&&a(e.target.value),n&&n(e)}},r),{},{children:c}))},ne=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=(Object(k.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e.target.value),r&&r(e)}),i=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",onChange:s,name:t,checked:a===e,value:e}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:i})},ae=["x","y","z"];var re=function(){var e=Object(a.useState)(ae[1]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(te,{options:ae,value:n,onChangeOption:r})}),Object(b.jsx)("div",{children:Object(b.jsx)(ne,{name:"radio",options:ae,value:n,onChangeOption:r})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},ce=function(e,t){switch(t.type){case"sort":switch(t.payload){case"up":return e.slice().sort((function(e,t){return e.name>t.name?1:-1}));case"down":return e.slice().sort((function(e,t){return e.name>t.name?1:-1})).reverse();default:return e}case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},se=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ie=function(){var e=Object(a.useState)(se),t=Object(j.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(b.jsxs)("div",{children:[e.name," ",e.age]},e._id)}));return Object(b.jsxs)("div",{children:[c,Object(b.jsxs)("div",{style:{display:"flex"},children:[Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"sort up",onClick:function(){return r(ce(se,{type:"sort",payload:"up"}))}})}),Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"sort down",onClick:function(){return r(ce(se,{type:"sort",payload:"down"}))}})}),Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"check 18",onClick:function(){return r(ce(se,{type:"check",payload:18}))}})})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var oe=function(){var e=Object(a.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(new Date),s=Object(j.a)(c,2),i=(s[0],s[1]),o=Object(a.useState)(!1),l=Object(j.a)(o,2),u=l[0],d=l[1],O=function(){clearTimeout(n)},x=(new Date).toTimeString().replace(/ .*/,""),h=[(new Date).getDate(),(new Date).getMonth()+1,(new Date).getFullYear()].map((function(e){return e<10?"0".concat(e):"".concat(e)})).join("/"),m={backgroundColor:"#09149F",maxWidth:"90px",color:"white",borderRadius:"8px",textAlign:"center",margin:"10px"};return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{style:m,onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:x}),u&&Object(b.jsx)("div",{style:m,children:h}),Object(b.jsx)(w,{title:"start",onClick:function(){O();var e=window.setInterval((function(){return i(new Date)}),1e3);r(e)}}),Object(b.jsx)(w,{title:"stop",onClick:O})]})};var je=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 9",Object(b.jsx)(oe,{}),Object(b.jsx)("hr",{})]})},le=n(16),ue={isLoading:!1},be=function(e){return{type:"LOADING",isLoading:e}},de=n(26),Oe=n.n(de),xe=function(){return Object(b.jsx)("div",{className:Oe.a.preloader,children:Object(b.jsx)("div",{className:Oe.a.spinner})})};var he=function(){var e=Object(le.c)((function(e){return e.loading})),t=Object(le.b)(),n=e.isLoading;return Object(b.jsxs)("div",{children:["homeworks 10",n?Object(b.jsx)("div",{children:Object(b.jsx)(xe,{})}):Object(b.jsx)("div",{children:Object(b.jsx)(w,{title:"isLoad",onClick:function(){t(be(!0)),setTimeout((function(){t(be(!1))}),3e3),console.log("loading...")},children:"set loading..."})})]})};var me=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(re,{}),Object(b.jsx)(ie,{}),Object(b.jsx)(je,{}),Object(b.jsx)(he,{})]})};var pe=function(){return Object(b.jsx)("div",{})},ve="/pre-junior",fe="/junior",ge="/juniorPlus";var Ce=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(u.a,{to:ve})}}),Object(b.jsx)(u.b,{path:ve,render:function(){return Object(b.jsx)(ee,{})}}),Object(b.jsx)(u.b,{path:fe,render:function(){return Object(b.jsx)(me,{})}}),Object(b.jsx)(u.b,{path:ge,render:function(){return Object(b.jsx)(pe,{})}}),Object(b.jsx)(u.b,{render:function(){return Object(b.jsx)(d,{})}})]})})},_e=n(32),Ae=n.n(_e);var ke=function(){var e=Object(a.useState)(!0),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{title:"Menu",onClick:function(){r(!n)}}),!n&&Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:Ae.a.menu,children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{to:ve,children:"PreJunior"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{to:fe,children:"Junior"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{to:ge,children:"JuniorPlus"})})]})})]})};var ye=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(ke,{}),Object(b.jsx)(Ce,{})]})})};var Se=function(){return Object(b.jsx)("div",{className:o.a.App,children:Object(b.jsx)(ye,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=n(29),Ne=Object(we.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(A.a)(Object(A.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),De=Object(we.b)(Ne),Qe=De;window.store=De,s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(le.a,{store:Qe,children:Object(b.jsx)(Se,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[45,1,2]]]);
//# sourceMappingURL=main.15474107.chunk.js.map