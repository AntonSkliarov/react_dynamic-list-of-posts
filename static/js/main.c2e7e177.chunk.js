(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),s=n.n(c),o=n(2),u=(n(15),n(16),n(1)),l=n.n(u),i=n(3),m=(n(18),n(19),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),p="https://mate-api.herokuapp.com";function f(e){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts/"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,0!==Number(t)){e.next=8;break}return e.abrupt("return",a.data);case 8:return r=a.data.filter((function(e){return e.userId===Number(t)})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/posts/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){var t=e.seletedUser,n=e.setPostId,c=e.selectedPostId,s=Object(a.useState)([]),u=Object(o.a)(s,2),p=u[0],d=u[1],b=Object(a.useState)(!0),h=Object(o.a)(b,2),E=h[0],v=h[1];Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,d(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),v(!1)}),[t]);return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),E?r.a.createElement(m,null):r.a.createElement("ul",{className:"PostsList__list"},p.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(e.userId,"]: ")),e.body),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return t=e.id,void n((function(e){return e===t?"":t}));var t}},c===e.id?"Close":"Open"))}))))}function v(e){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/comments"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,r=a.data.filter((function(e){return e.postId===t})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/comments/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.data);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("".concat(p,"/comments/"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=n(6),y=n(9),P=(n(20),n(24));function w(e){var t=e.setOpenComments,n=e.openPostId,c=Object(a.useState)(""),s=Object(o.a)(c,2),u=s[0],l=s[1],i=Object(a.useState)(""),m=Object(o.a)(i,2),p=m[0],f=m[1],d=Object(a.useState)(""),b=Object(o.a)(d,2),h=b[0],E=b[1];return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),t((function(e){var t={name:u,email:p,body:h,postId:n};return l(""),f(""),E(""),function(e){j.apply(this,arguments)}(t),[].concat(Object(y.a)(e),[Object(O.a)(Object(O.a)({},t),{},{id:Object(P.a)()})])}))}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:u,onChange:function(e){return l(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:p,onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:h,onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}w.defaultProps={openPostId:0};n(21);function x(e){var t=e.selectedPostId,n=Object(a.useState)({}),c=Object(o.a)(n,2),s=c[0],u=c[1],m=Object(a.useState)([]),p=Object(o.a)(m,2),f=p[0],d=p[1],h=Object(a.useState)(!0),E=Object(o.a)(h,2),_=E[0],j=E[1];Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:n=e.sent,u(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(a.useEffect)((function(){function e(){return(e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(s.id);case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s.id]);var O=function(e){var t=f.filter((function(t){return t.id!==e}));d(t),function(e){N.apply(this,arguments)}(e)};return r.a.createElement("div",{className:"PostDetails App__PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.body)),r.a.createElement("section",{className:"PostDetails__comments"},0===f.length?r.a.createElement("p",{className:"PostDetails__noCommentsMessage"},"No comments"):r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"button PostDetails__showCommentsButton",onClick:function(){j((function(e){return!e}))}},_?"Show ".concat(f.length," comment(s)"):"Hide ".concat(f.length," comment(s)")),!_&&r.a.createElement("ul",{className:"PostDetails__list"},f.map((function(e){return r.a.createElement("li",{className:"PostDetails__list-item",key:e.id},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return O(e.id)}},"X"),r.a.createElement("p",null,e.body))}))))),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(w,{setOpenComments:d,openPostId:s.id}))))}var C=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),u=Object(o.a)(s,2),l=u[0],i=u[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",onChange:function(e){return c(e.target.value)}},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(E,{seletedUser:Number(n),setPostId:i,selectedPostId:Number(l)})),r.a.createElement("div",{className:"App__content"},l&&r.a.createElement(x,{selectedPostId:Number(l)}))))};s.a.render(r.a.createElement(C,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.c2e7e177.chunk.js.map