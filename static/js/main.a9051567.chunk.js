(this["webpackJsonpblog-website"]=this["webpackJsonpblog-website"]||[]).push([[0],{42:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){"use strict";s.r(t);var c=s(6),a=s(43),n=s.n(a),r=s(0),i=s(1),o=s(9),l=(s(52),s(17)),u=s(13),j=s(27),b=s(16),d=s(20),p=s(44),m=s(19),O=Object(p.a)({apiKey:"AIzaSyApQL6vxY1dJ1frpEG6x8wgBan5U5zylZE",authDomain:"blog-website-f854e.firebaseapp.com",databaseURL:"https://blog-website-f854e-default-rtdb.europe-west1.firebasedatabase.app",projectId:"blog-website-f854e",storageBucket:"blog-website-f854e.appspot.com",messagingSenderId:"1006994120199",appId:"1:1006994120199:web:22f0b21f42dad8a6b754a2"}),h=Object(m.c)(O),x=new m.a,f=Object(d.c)(),v=Object(b.f)(),g=s(29),N=function(e){document.querySelectorAll(".post")[e].querySelector(".more-options").classList.toggle("active-more-options")},w="",y=function(e){var t=document.querySelectorAll(".post")[e].querySelector(".blog-content");document.querySelectorAll(".post")[e].querySelector(".more-options").classList.remove("active-more-options"),document.querySelectorAll(".post")[e].querySelector(".save-edit-post-btn").classList.toggle("active-save-edit-post-btn"),t.contentEditable=!0,t.focus(),w=t.innerText},k=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t,s){var c,a,n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=document.querySelectorAll(".post")[s].querySelector(".save-edit-post-btn"),(a=document.querySelectorAll(".post")[s].querySelector(".blog-content")).contentEditable=!1,c.classList.remove("active-save-edit-post-btn"),a.innerText!==w){e.next=6;break}return e.abrupt("return");case 6:return n=Object(b.d)(v,"posts",t),e.next=9,Object(b.j)(n,{blog:a.innerText});case 9:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),S=function(e){var t,s=e.toDate(),c=s.getFullYear(),a=s.getDate(),n=s.getHours(),r=s.getMinutes();switch(1===r.toString().length&&(r="0".concat(r)),s.getMonth()){case 0:t="Jan";break;case 1:t="Feb";break;case 2:t="Mar";break;case 3:t="Apr";break;case 4:t="May";break;case 5:t="June";break;case 6:t="July";break;case 7:t="Aug";break;case 8:t="Sep";break;case 9:t="Oct";break;case 10:t="Nov";break;case 11:t="Dec";break;default:t=""}return{year:c,month:t,day:a,hours:n,minutes:r}},P=s.p+"static/media/trash-solid.2f043c97.svg",C=s.p+"static/media/edit.0c9ab544.svg",E=s.p+"static/media/plus-icon.9b65cc4b.svg",A=s.p+"static/media/user-solid.688763ca.svg",I=(s(53),s(4));function U(e){var t=e.isAuth,s=Object(c.useState)([]),a=Object(o.a)(s,2),n=a[0],u=a[1];Object(c.useEffect)((function(){var e=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,s,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.b)(v,"posts"),s=Object(b.h)(t,Object(b.g)("createdAt")),e.next=4,Object(b.e)(s);case 4:c=e.sent,u(c.docs.map((function(e){return Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id})}))),document.getElementsByClassName("loader-wrapper")[0].style.display="none";case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t,s,c){var a,n,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=4;break}return a=Object(d.d)(f,s),e.next=4,Object(d.a)(a);case 4:if(!c){e.next=8;break}return n=Object(d.d)(f,c),e.next=8,Object(d.a)(n);case 8:return i=Object(b.d)(v,"posts",t),e.next=11,Object(b.c)(i).then((function(){return window.location.reload()}));case 11:case"end":return e.stop()}}),e)})));return function(t,s,c){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"home-page-container",children:[Object(I.jsx)("div",{className:"loader-wrapper",children:Object(I.jsxs)("div",{className:"lds-ellipsis",children:[Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{})]})}),Object(I.jsx)("h1",{children:"Home Page"}),n&&n.map((function(e,s){var c=S(e.createdAt);return Object(I.jsxs)("div",{className:"post",children:[Object(I.jsxs)("div",{className:"author-details-wrapper",children:[Object(I.jsxs)("div",{className:"author-name-profile-pic-wrapper",children:[e.authorDetails.authorProfilePicture&&Object(I.jsx)("img",{className:"post-pfp",src:e.authorDetails.authorProfilePicture,alt:"text"}),!e.authorDetails.authorProfilePicture&&Object(I.jsx)("img",{className:"post-pfp",src:A,alt:"text"}),Object(I.jsxs)("p",{children:["@",e.authorDetails.authorName]})]}),t&&e.authorDetails.id===h.currentUser.uid&&Object(I.jsxs)("div",{className:"more-options-btn-wrapper",children:[Object(I.jsx)("button",{className:"more-options-btn",onClick:function(){return N(s)},children:Object(I.jsx)("p",{children:"\xb7\xb7\xb7"})}),Object(I.jsx)("div",{className:"more-options",children:Object(I.jsxs)("ul",{className:"more-options-ul",children:[Object(I.jsx)("li",{children:Object(I.jsxs)("button",{className:"more-options-btns delete-btn",onClick:function(){return p(e.id,e.pictureName,e.videoName)},children:[Object(I.jsx)("img",{className:"trash-icon",src:P,alt:"Trash Icon"}),"Delete"]})}),Object(I.jsx)("li",{children:Object(I.jsxs)("button",{className:"more-options-btns edit-btn",onClick:function(){return y(s)},children:[Object(I.jsx)("img",{className:"edit-icon",src:C,alt:"Trash Icon"}),"Edit"]})})]})})]})]}),Object(I.jsx)("div",{className:"title-wrapper",children:Object(I.jsx)("h2",{children:e.title})}),Object(I.jsxs)("div",{className:"blog-wrapper",children:[Object(I.jsx)("p",{contentEditable:"false",className:"blog-content",children:e.blog}),e.picture&&Object(I.jsx)("img",{src:e.picture,className:"home-post-picture"}),e.video&&Object(I.jsx)("video",{controls:!0,className:"home-post-video",children:Object(I.jsx)("source",{src:e.video})}),Object(I.jsx)("button",{className:"save-edit-post-btn",onClick:function(){return k(e.id,s)},children:"Save"})]}),Object(I.jsxs)("p",{className:"post-date",children:[c.day," ",c.month," ",c.year," ",c.hours,":",c.minutes]})]},Object(g.a)())})),t&&Object(I.jsx)(l.b,{className:"create-post-mobile",to:"/createPost",children:Object(I.jsx)("img",{src:E,alt:"plus icon"})})]})}s(42);function D(e){var t=e.isAuth,s=e.setIsAuth,a=Object(u.l)();Object(c.useEffect)((function(){t&&a("/")}));var n=Object(c.useState)(""),j=Object(o.a)(n,2),b=j[0],d=j[1],p=Object(c.useState)(""),O=Object(o.a)(p,2),f=O[0],v=O[1],g=Object(c.useState)(""),N=Object(o.a)(g,2),w=N[0],y=N[1],k=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.e)(h,b,f).then((function(e){localStorage.setItem("name",e.user.displayName),localStorage.setItem("email",e.user.email),localStorage.setItem("isAuth",!0),a("/"),s(!0)}));case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),"Firebase: Error (auth/wrong-password)."===e.t0.message?y("Incorrect Password"):"Firebase: Error (auth/user-not-found)."===e.t0.message?y("Email not found"):"Firebase: Error (auth/invalid-email)."===e.t0.message&&y("Invalid Email");case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(h,x).then((function(e){localStorage.setItem("email",e.user.email),localStorage.setItem("isAuth",!0),s(!0),a("/")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("div",{className:"signInPage-div",children:Object(I.jsxs)("div",{className:"sign-in-div",children:[Object(I.jsx)("h2",{children:"Welcome Back!"}),Object(I.jsx)("p",{children:"Enter the information you entered while registering."}),Object(I.jsx)("br",{}),Object(I.jsxs)("div",{className:"sign-in-inputs",children:[Object(I.jsxs)("div",{className:"input-fields",children:[Object(I.jsx)("input",{type:"text",placeholder:"Email",value:b,onChange:function(e){return d(e.target.value)}}),Object(I.jsx)("input",{type:"password",placeholder:"Password",value:f,onChange:function(e){return v(e.target.value)}})]}),w&&Object(I.jsx)("p",{style:{color:"red"},children:w}),Object(I.jsx)("button",{className:"sign-in-btn",onClick:k,children:"Sign In"})]}),Object(I.jsxs)("p",{className:"dont-have-acc",children:["Don't have an account? ",Object(I.jsx)(l.b,{to:"/signUp",children:"Sign Up"})]}),Object(I.jsx)("div",{className:"border-div"}),Object(I.jsxs)("div",{className:"google-btn",onClick:S,children:[Object(I.jsx)("div",{className:"google-icon-wrapper",children:Object(I.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:""})}),Object(I.jsx)("p",{className:"btn-text",children:Object(I.jsx)("b",{children:"Sign in with Google"})})]})]})})}function L(e){var t=e.isAuth,s=e.setIsAuth,a=Object(u.l)();Object(c.useEffect)((function(){t&&a("/")}),[]);var n=Object(c.useState)(""),l=Object(o.a)(n,2),j=l[0],b=l[1],d=Object(c.useState)(""),p=Object(o.a)(d,2),O=p[0],f=p[1],v=Object(c.useState)(""),g=Object(o.a)(v,2),N=g[0],w=g[1],y=Object(c.useState)(""),k=Object(o.a)(y,2),S=k[0],P=k[1],C=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==j&&""!==O&&""!==N){e.next=4;break}alert("Please fill out the requested fields"),e.next=16;break;case 4:return e.prev=4,e.next=7,Object(m.b)(h,O,N).then((function(e){console.log("res",e.user,"email",e.user.email),e.user.displayName=j,localStorage.setItem("name",e.user.displayName),localStorage.setItem("email",e.user.email),localStorage.setItem("isAuth",!0)}));case 7:return e.next=9,Object(m.i)(h.currentUser,{displayName:j});case 9:s(!0),a("/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),"Firebase: Error (auth/invalid-email)."===e.t0.message?P("Invalid Email!"):"Firebase: Error (auth/email-already-in-use)."===e.t0.message?P("Email already in use!"):"Firebase: Error (auth/missing-email)."===e.t0.message?P("Please enter an email"):"Firebase: Error (auth/internal-error)."===e.t0.message&&P("Please type in a password");case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(h,x).then((function(e){localStorage.setItem("email",e.user.email),localStorage.setItem("isAuth",!0),s(!0),a("/")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"signInPage-div",children:[Object(I.jsx)("div",{className:"gradient-div"}),Object(I.jsxs)("div",{className:"sign-in-div",children:[Object(I.jsx)("h2",{children:"Welcome!"}),Object(I.jsx)("p",{children:"Enter the information requested below to sign up."}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsxs)("div",{className:"sign-in-inputs",children:[Object(I.jsxs)("div",{className:"input-fields sign-up-fields",children:[Object(I.jsx)("input",{type:"text",placeholder:"Name",value:j,onChange:function(e){return b(e.target.value)},maxLength:"25"}),Object(I.jsx)("input",{type:"text",placeholder:"Email",value:O,onChange:function(e){return f(e.target.value)}}),Object(I.jsx)("input",{type:"password",placeholder:"Password",value:N,onChange:function(e){return w(e.target.value)}})]}),S&&Object(I.jsx)("p",{children:S}),Object(I.jsx)("button",{className:"sign-in-btn",onClick:C,children:"Sign Up"})]}),Object(I.jsxs)("p",{className:"dont-have-acc",children:["Already have an account? ",Object(I.jsx)("a",{href:"/signIn",children:"Sign in"})]}),Object(I.jsx)("div",{className:"border-div"}),Object(I.jsxs)("div",{className:"google-btn",onClick:E,children:[Object(I.jsx)("div",{className:"google-icon-wrapper",children:Object(I.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:""})}),Object(I.jsx)("p",{className:"btn-text",children:Object(I.jsx)("b",{children:"Sign in with Google"})})]})]})]})}var q=s.p+"static/media/image-icon.6d5fc28d.svg",B=s.p+"static/media/video.c0a8092e.svg";s(55);function R(e){var t=e.isAuth;Object(c.useEffect)((function(){t||R("/signIn")}),[]);var s=Object(c.useState)(""),a=Object(o.a)(s,2),n=a[0],j=a[1],p=Object(c.useState)(""),m=Object(o.a)(p,2),O=m[0],x=m[1],N=Object(c.useState)(""),w=Object(o.a)(N,2),y=w[0],k=w[1],S=Object(c.useState)(""),P=Object(o.a)(S,2),C=P[0],E=P[1],A=Object(c.useState)(""),U=Object(o.a)(A,2),D=U[0],L=U[1],R=Object(u.l)(),F=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,s,c,a,i,o,l,u,j;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===n||""===O){e.next=28;break}if(t=document.querySelector(".create-blog-btn"),s=document.querySelector(".return-to-home-btn"),t.disabled=!0,s.style.display="none",c=Object(b.b)(v,"posts"),a="",i="",o="",l="",!C){e.next=17;break}return o="PostPictures/".concat(Object(g.a)()),u=Object(d.d)(f,o),e.next=15,Object(d.e)(u,C);case 15:return e.next=17,Object(d.b)(u).then((function(e){return a=e}));case 17:if(!D){e.next=24;break}return l="PostVideos/".concat(Object(g.a)()),j=Object(d.d)(f,l),e.next=22,Object(d.e)(j,D);case 22:return e.next=24,Object(d.b)(j).then((function(e){return i=e}));case 24:return e.next=26,Object(b.a)(c,{title:n,blog:O,picture:a,pictureName:o,video:i,videoName:l,createdAt:Object(b.i)(),lastUpdatedAt:Object(b.i)(),authorDetails:{authorName:h.currentUser.displayName,authorEmail:h.currentUser.email,authorProfilePicture:h.currentUser.photoURL,id:h.currentUser.uid}}).then((function(){return R("/")}));case 26:e.next=29;break;case 28:k("Please enter a title and a blog");case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(I.jsx)("div",{className:"createPost-container",children:Object(I.jsxs)("div",{className:"post-wrapper",children:[Object(I.jsx)("h2",{children:"What's on your mind?"}),Object(I.jsx)("div",{className:"post-title-wrapper",children:Object(I.jsx)("input",{type:"text",placeholder:"Title",value:n,onChange:function(e){return j(e.target.value)}})}),Object(I.jsxs)("div",{className:"post-text-wrapper",children:[Object(I.jsx)("textarea",{placeholder:"Blog",value:O,max:"500",onChange:function(e){return x(e.target.value)}}),Object(I.jsxs)("div",{children:[Object(I.jsxs)("abbr",{title:"Add image",style:{marginRight:"30px",textDecoration:"none"},children:[Object(I.jsx)("img",{className:"image-icon",src:q,onClick:function(){document.querySelector(".post-image-input").click()}})," ",Object(I.jsx)("input",{type:"file",accept:"image/png, image/jpeg",className:"post-image-input",onChange:function(e){return function(e){E(e.target.files[0]);var t=document.querySelector(".preview-post-img");t.style.display="inline";var s=new FileReader;s.onload=function(e){return t.src=e.target.result},s.readAsDataURL(e.target.files[0])}(e)}})]}),Object(I.jsx)("img",{src:"",style:{display:"none"},className:"preview-post-img"}),Object(I.jsxs)("abbr",{title:"Add video",style:{marginRight:"30px",textDecoration:"none"},children:[Object(I.jsx)("img",{className:"image-icon video-icon",src:B,onClick:function(){document.querySelector(".post-video-input").click()}})," ",Object(I.jsx)("input",{type:"file",accept:"video/mp4",className:"post-image-input post-video-input",onChange:function(e){return function(e){var t=e.target.files[0];L(t);var s=document.querySelector(".preview-post-video");s.style.display="inline";var c=URL.createObjectURL(t);s.src=c}(e)}})]}),Object(I.jsx)("video",{className:"preview-post-video",style:{display:"none"},onClick:function(){var e=document.querySelector(".preview-post-video");e.paused?e.play():e.pause()},children:Object(I.jsx)("source",{src:""})})]})]}),y&&Object(I.jsx)("label",{children:y}),Object(I.jsxs)("div",{className:"create-blog-wrapper",children:[Object(I.jsx)(l.b,{to:"/",className:"return-to-home-btn",children:"Return to Home Page"}),Object(I.jsx)("button",{className:"create-blog-btn",onClick:F,children:"Create Blog"})]})]})})}s(56);var F=s.p+"static/media/posts-icon.8f92d091.svg";function M(e){var t=e.isAuth,s=e.setIsAuth,a=Object(u.l)();Object(c.useEffect)((function(){t||a("/signIn")}),[]);var n=Object(c.useState)(localStorage.getItem("name")),j=Object(o.a)(n,2),p=j[0],O=j[1],x=Object(c.useState)(localStorage.getItem("email")),g=Object(o.a)(x,2),N=g[0],w=g[1],y=Object(c.useState)("******"),k=Object(o.a)(y,2),S=k[0],P=(k[1],Object(c.useState)("")),C=Object(o.a)(P,2),E=C[0],A=C[1];function U(e){e.parentNode.childNodes[0].disabled=!1,e.parentNode.childNodes[2].style.display="block"}function D(e){var t=document.getElementsByClassName("uploadBtndisabled")[0];t.disabled=!1,t.className="uploadBtn",t.addEventListener("click",(function(){!function(e){L.apply(this,arguments)}(e)}))}function L(){return(L=Object(i.a)(Object(r.a)().mark((function e(t){var s,c,a;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=document.getElementsByClassName("uploadBtndisabled")[0]).disabled=!0,s.innerText="Uploading...",c=Object(d.d)(f,"Profile Pictures/".concat("ProfilePictureOf"+h.currentUser.uid)),e.next=6,Object(d.e)(c,t);case 6:return e.next=8,Object(d.b)(c);case 8:return a=e.sent,e.next=11,Object(m.i)(h.currentUser,{photoURL:a});case 11:return e.next=13,R();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return B.apply(this,arguments)}function B(){return(B=Object(i.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementsByClassName("loader-wrapper")[0].style.display="flex",t.parentNode.childNodes[0].disabled=!0,t.style.display="none",e.next=6,Object(m.i)(h.currentUser,{displayName:p});case 6:return e.next=8,Object(m.h)(h.currentUser,N).then((function(){localStorage.setItem("name",p),localStorage.setItem("email",N)}));case 8:return e.next=10,R();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(Object(r.a)().mark((function e(){var t,s,c,a,n,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.b)(v,"posts"),s=Object(b.h)(t,Object(b.k)("authorDetails.id","==",h.currentUser.uid)),e.next=4,Object(b.e)(s);case 4:c=e.sent,a=0;case 6:if(!(a<c.docs.length)){e.next=14;break}return n=Object(b.d)(v,"posts",c.docs[a].id),i=h.currentUser.photoURL,e.next=11,Object(b.j)(n,{authorDetails:{authorEmail:N,authorName:p,authorProfilePicture:i,id:h.currentUser.uid}});case 11:a++,e.next=6;break;case 14:window.location.reload();case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(i.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!1),localStorage.clear(),t=h.currentUser.email,e.next=5,Object(m.d)(h,t);case 5:return e.next=7,Object(m.g)(h);case 7:alert("A password reset email has been sent to you."),a("/signIn");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return h.onAuthStateChanged((function(){return A(h.currentUser.photoURL)})),Object(I.jsxs)("div",{className:"user-profile-page",children:[Object(I.jsx)("div",{className:"loader-wrapper",children:Object(I.jsxs)("div",{className:"lds-ellipsis",children:[Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{}),Object(I.jsx)("div",{})]})}),Object(I.jsxs)("div",{className:"user-profile-sidebar",children:[Object(I.jsx)("h1",{className:"my-profile-h2",children:"My Profile"}),Object(I.jsx)("div",{className:"my-posts-wrapper",children:Object(I.jsxs)(l.b,{to:"/userPosts",children:[Object(I.jsx)("img",{className:"posts-icon",src:F,alt:"posts-icon"}),Object(I.jsx)("label",{children:"My Posts"})]})})]}),Object(I.jsxs)("div",{className:"user-profile-data",children:[Object(I.jsx)("h1",{children:"Personal Information"}),Object(I.jsxs)("div",{className:"user-info",children:[Object(I.jsxs)("div",{className:"full-name-wrapper",children:[Object(I.jsx)("input",{type:"text",value:p,onChange:function(e){return O(e.target.value)},disabled:!0}),Object(I.jsx)("button",{className:"edit-info-btn",onClick:function(e){return U(e.target)},children:"Edit Name"}),Object(I.jsx)("button",{className:"save-info-btn",onClick:function(e){return q(e.target)},children:"Save New Name"})]}),Object(I.jsxs)("div",{className:"email-wrapper",children:[Object(I.jsx)("input",{type:"text",value:N,onChange:function(e){return w(e.target.value)},disabled:!0}),Object(I.jsx)("button",{className:"edit-info-btn",onClick:function(e){return U(e.target)},children:"Change Email"}),Object(I.jsx)("button",{className:"save-info-btn",onClick:function(e){return q(e.target)},children:"Save New Email"})]}),Object(I.jsxs)("div",{className:"password-wrapper",children:[Object(I.jsx)("input",{type:"password",value:S,disabled:!0}),Object(I.jsx)("button",{className:"edit-info-btn",onClick:function(e){return function(){return T.apply(this,arguments)}()},children:"Reset Password"}),Object(I.jsx)("button",{className:"save-info-btn",onClick:function(e){return q(e.target)},children:"Save New Password"})]})]}),Object(I.jsxs)("div",{className:"profile-picture-wrapper",children:[Object(I.jsx)("img",{className:"profile-picture",src:E,alt:"Current Profile File"}),Object(I.jsxs)("div",{className:"profile-picture-inputs",children:[Object(I.jsx)("p",{children:"Profile Picture"}),Object(I.jsx)("input",{className:"profile-picture-input",type:"file",onChange:function(e){return D(e.target.files[0])}})," ",Object(I.jsx)("button",{className:"uploadBtndisabled",disabled:!0,children:"Upload Image"})]})]})]})]})}s(57);function T(){return Object(c.useEffect)((function(){document.getElementsByClassName("navbar")[0].style.display="none"}),[]),Object(I.jsxs)("div",{className:"page-not-found",children:[Object(I.jsx)("h1",{children:"Blog Website"}),Object(I.jsx)("br",{}),Object(I.jsx)("h2",{children:"Error 404 Page not found"}),Object(I.jsx)("br",{}),Object(I.jsxs)("h3",{children:["Return to the ",Object(I.jsx)("a",{href:"/",children:"Home Page"})]})]})}var G=s.p+"static/media/caret-down.6a9f66c1.svg";s(58);function H(e){var t=e.isAuth,s=Object(c.useState)([]),a=Object(o.a)(s,2),n=a[0],u=a[1];Object(c.useEffect)((function(){h.onAuthStateChanged((function(){null!==h.currentUser&&function(){var e=Object(i.a)(Object(r.a)().mark((function e(){var t,s,c;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(b.b)(v,"posts"),s=Object(b.h)(t,Object(b.k)("authorDetails.id","==",h.currentUser.uid),Object(b.g)("createdAt")),e.next=4,Object(b.e)(s);case 4:c=e.sent,u(c.docs.map((function(e){return Object(j.a)(Object(j.a)({},e.data()),{},{id:e.id})})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}))}),[]);var d=function(){var e=Object(i.a)(Object(r.a)().mark((function e(t){var s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=Object(b.d)(v,"posts",t),e.next=3,Object(b.c)(s);case 3:window.location.reload();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{className:"user-posts-container",children:[Object(I.jsx)("h1",{children:"My Posts"}),n.map((function(e,t){var s=S(e.createdAt);return Object(I.jsxs)("div",{className:"post userPost",children:[Object(I.jsxs)("div",{className:"author-details-wrapper userPost-author-details-wrapper",children:[Object(I.jsxs)("div",{className:"author-name-profile-pic-wrapper userPost-profile-pic-wrapper",children:[e.authorDetails.authorProfilePicture&&Object(I.jsx)("img",{className:"post-pfp userPost-pfp",src:e.authorDetails.authorProfilePicture,alt:"text"}),!e.authorDetails.authorProfilePicture&&Object(I.jsx)("img",{className:"post-pfp userPost-pfp",src:A,alt:"text"}),Object(I.jsxs)("p",{children:["@",e.authorDetails.authorName]})]}),Object(I.jsxs)("div",{className:"more-options-btn-wrapper userPost-more-options",children:[Object(I.jsx)("button",{className:"more-options-btn userPost-more-options-btn",onClick:function(){return N(t)},children:Object(I.jsx)("p",{children:"\xb7\xb7\xb7"})}),Object(I.jsx)("div",{className:"more-options",children:Object(I.jsxs)("ul",{className:"more-options-ul",children:[Object(I.jsx)("li",{children:Object(I.jsxs)("button",{className:"more-options-btns userPost-delete-btn userPost-more-options-btns",onClick:function(){return d(e.id)},children:[Object(I.jsx)("img",{className:"trash-icon",src:P,alt:"Trash Icon"}),"Delete"]})}),Object(I.jsx)("li",{children:Object(I.jsxs)("button",{className:"more-options-btns edit-btn userPost-edit-btn userPost-more-options-btns",onClick:function(){return y(t)},children:[Object(I.jsx)("img",{className:"edit-icon",src:C,alt:"Trash Icon"}),"Edit"]})})]})})]})]}),Object(I.jsx)("div",{className:"title-wrapper",children:Object(I.jsx)("h2",{children:e.title})}),Object(I.jsxs)("div",{className:"blog-wrapper",children:[Object(I.jsx)("p",{contentEditable:"false",className:"blog-content",children:e.blog}),e.picture&&Object(I.jsx)("img",{src:e.picture,className:"home-post-picture"}),e.video&&Object(I.jsx)("video",{controls:!0,className:"userPost-video",children:Object(I.jsx)("source",{src:e.video})}),Object(I.jsx)("button",{className:"save-edit-post-btn",onClick:function(){return k(e.id,t)},children:"Save"})]}),Object(I.jsxs)("p",{className:"post-date userPost-date",children:[s.day," ",s.month," ",s.year," ",s.hours,":",s.minutes]})]},Object(g.a)())})),t&&Object(I.jsx)(l.b,{className:"create-post-mobile",to:"/createPost",children:Object(I.jsx)("img",{src:E,alt:"text"})})]})}var J=function(){var e=Object(c.useState)(localStorage.getItem("isAuth")),t=Object(o.a)(e,2),s=t[0],a=t[1],n=function(){var e=Object(i.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.g)(h).then((function(){localStorage.clear(),a(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function j(){document.getElementsByClassName("sidebar")[0].classList.toggle("active"),document.querySelector("html").classList.toggle("disableScroll")}return document.addEventListener("DOMContentLoaded",(function(){if(s){var e=document.getElementsByClassName("navbar-sign-in-out")[0];window.screen.width>1024&&(e.style.width="21%"),1024===window.screen.width&&(e.style.width="27%")}})),Object(I.jsxs)(l.a,{children:[Object(I.jsxs)("nav",{className:"navbar",children:[Object(I.jsxs)("div",{className:"navbar-btns",children:[Object(I.jsx)(l.b,{to:"/",children:"Home"}),s&&Object(I.jsx)(l.b,{to:"/createPost",isAuth:s,children:"Create Post"})]}),Object(I.jsxs)("div",{className:s?"navbar-sign-in-out username-wrapper":"navbar-sign-in-out",children:[!s&&Object(I.jsx)(l.b,{to:"/signUp",children:"Sign Up"}),!s&&Object(I.jsx)(l.b,{to:"/signIn",children:"Sign in"}),s&&Object(I.jsxs)("div",{className:"username-profilebtn-wrapper",children:[Object(I.jsxs)("button",{className:"view-profile-btn",onClick:function(){document.getElementsByClassName("view-profile-div")[0].classList.toggle("profile-div-active")},children:[localStorage.getItem("name"),Object(I.jsx)("img",{className:"caret",src:G,alt:"text"})]}),Object(I.jsx)("div",{className:"view-profile-div",children:Object(I.jsx)(l.b,{to:"/userProfile",onClick:function(){document.getElementsByClassName("view-profile-div")[0].classList.toggle("profile-div-active")},children:"View Profile"})})]}),s&&Object(I.jsx)(l.b,{to:"/",onClick:n,children:"Sign Out"})]}),Object(I.jsx)("button",{className:"sidebar-btn",onClick:j,children:Object(I.jsx)("div",{className:"hamburger-menu",children:Object(I.jsxs)("ul",{children:[Object(I.jsx)("li",{}),Object(I.jsx)("li",{}),Object(I.jsx)("li",{})]})})})]}),Object(I.jsxs)("div",{className:"sidebar",children:[Object(I.jsxs)("div",{className:"sidebar-btns",children:[Object(I.jsx)(l.b,{onClick:j,to:"/",children:"Home"}),s&&Object(I.jsx)(l.b,{onClick:j,to:"/createPost",children:"Create post"}),s&&Object(I.jsx)(l.b,{onClick:j,to:"/userProfile",children:"View Profile"}),s&&Object(I.jsx)(l.b,{onClick:j,to:"/userPosts",children:"My Posts"})]}),Object(I.jsxs)("div",{className:"sidebar-sign-in-out",children:[!s&&Object(I.jsx)(l.b,{to:"/signUp",onClick:j,children:"Sign Up"}),!s&&Object(I.jsx)(l.b,{to:"/signIn",onClick:j,children:"Sign in"}),s&&Object(I.jsx)(l.b,{to:"/",onClick:n,children:"Sign Out"}),s&&Object(I.jsx)("p",{children:localStorage.getItem("email")})]})]}),Object(I.jsxs)(u.c,{children:[Object(I.jsx)(u.a,{path:"/",element:Object(I.jsx)(U,{isAuth:s})}),Object(I.jsx)(u.a,{path:"/signIn",element:Object(I.jsx)(D,{isAuth:s,setIsAuth:a})}),Object(I.jsx)(u.a,{path:"/signUp",element:Object(I.jsx)(L,{isAuth:s,setIsAuth:a})}),Object(I.jsx)(u.a,{path:"/createPost",element:Object(I.jsx)(R,{isAuth:s})}),Object(I.jsx)(u.a,{path:"/userProfile",element:Object(I.jsx)(M,{isAuth:s,setIsAuth:a})}),Object(I.jsx)(u.a,{path:"/userPosts",element:Object(I.jsx)(H,{isAuth:s})}),Object(I.jsx)(u.a,{path:"/*",element:Object(I.jsx)(T,{})})]})]})};n.a.createRoot(document.getElementById("root")).render(Object(I.jsx)(J,{}))}},[[59,1,2]]]);
//# sourceMappingURL=main.a9051567.chunk.js.map