(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{49:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(21),o=a.n(n),c=(a(49),a(6)),i=[],l=a(66),b=a(61),h=a(11),j=a(1),u=function(e){var t=Object(r.useState)(""),a=Object(c.a)(t,2),s=a[0],n=a[1],o=Object(r.useState)(""),u=Object(c.a)(o,2),p=u[0],d=u[1],m=Object(h.f)();return Object(j.jsxs)(l.a,{onSubmit:function(t){t.preventDefault();var a=i.find((function(e){return e.username===s&e.password===p}));console.log(i),a&&(console.log(a),localStorage.setItem("customer",s),e.onCustomerLoggedIn(),m.push({pathname:"/",state:{username:s}}))},children:[Object(j.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(j.jsx)(l.a.Label,{children:"Username:"}),Object(j.jsx)(l.a.Control,{type:"email",placeholder:"Enter email",value:s,onChange:function(e){n(e.target.value)}})]}),Object(j.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(j.jsx)(l.a.Label,{children:"Password:"}),Object(j.jsx)(l.a.Control,{type:"password",placeholder:"Password",value:p,onChange:function(e){d(e.target.value)}})]}),Object(j.jsx)(b.a,{variant:"primary",type:"submit",children:"Log In"})]})},p=a(68),d=a(62),m=[{name:"Acacia",picture:"https://habahram.blob.core.windows.net/flowers/acacia.jpg"},{name:"Alyssum",picture:"https://habahram.blob.core.windows.net/flowers/alyssum.jpg"},{name:"Amaryllis",picture:"https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"},{name:"Aster",picture:"https://habahram.blob.core.windows.net/flowers/aster.jpg"},{name:"Azalea",picture:"https://habahram.blob.core.windows.net/flowers/azalea.jpg"},{name:"Begonia",picture:"https://habahram.blob.core.windows.net/flowers/begonia.jpg"},{name:"Buttercup",picture:"https://habahram.blob.core.windows.net/flowers/buttercup.jpg"},{name:"Calluna",picture:"https://habahram.blob.core.windows.net/flowers/calluna.jpg"},{name:"Camellia",picture:"https://habahram.blob.core.windows.net/flowers/camellia.jpg"},{name:"Cardinal",picture:"https://habahram.blob.core.windows.net/flowers/cardinal.jpg"},{name:"Carnation",picture:"https://habahram.blob.core.windows.net/flowers/carnation.jpg"},{name:"Clover",picture:"https://habahram.blob.core.windows.net/flowers/clover.jpg"},{name:"Crown Imperial",picture:"https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"},{name:"Daffodil",picture:"https://habahram.blob.core.windows.net/flowers/daffodil.jpg"},{name:"Dahlia",picture:"https://habahram.blob.core.windows.net/flowers/dahlia.jpg"},{name:"Daisy",picture:"https://habahram.blob.core.windows.net/flowers/daisy.jpg"},{name:"Gladiolus",picture:"https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"},{name:"Lantana",picture:"https://habahram.blob.core.windows.net/flowers/lantana.jpg"},{name:"Lily",picture:"https://habahram.blob.core.windows.net/flowers/lily.jpg"},{name:"Lotus",picture:"https://habahram.blob.core.windows.net/flowers/lotus.jpg"},{name:"Marigold",picture:"https://habahram.blob.core.windows.net/flowers/Marigold.jpg"},{name:"Orchid",picture:"https://habahram.blob.core.windows.net/flowers/orchid.jpg"},{name:"Primrose",picture:"https://habahram.blob.core.windows.net/flowers/primrose.jpg"},{name:"Sunflower",picture:"https://habahram.blob.core.windows.net/flowers/sunflower.jpg"},{name:"Tickseed",picture:"https://habahram.blob.core.windows.net/flowers/tickseed.jpg"},{name:"Tulip",picture:"https://habahram.blob.core.windows.net/flowers/tulip.jpg"},{name:"Zinnia",picture:"https://habahram.blob.core.windows.net/flowers/zinnia.jpg"}],w=a(18),g=function(){var e=m.map((function(e){return Object(j.jsx)(w.b,{to:"/quiz",children:Object(j.jsxs)(p.a,{style:{width:"18rem"},children:[Object(j.jsx)(p.a.Img,{variant:"top",src:e.picture}),Object(j.jsx)(p.a.Body,{children:Object(j.jsx)(p.a.Title,{children:e.name})})]})})}));return Object(j.jsx)(d.a,{style:{display:"flex",flexWrap:"wrap"},children:e})},O=[{imageSource:"https://habahram.blob.core.windows.net/flowers/lotus.jpg",Options:[{ans:"Lantana",isCorrect:!1},{ans:"Daisy",isCorrect:!1},{ans:"Lotus",isCorrect:!0},{ans:"Carnation",isCorrect:!1}]},{imageSource:"https://habahram.blob.core.windows.net/flowers/buttercup.jpg",Options:[{ans:"Acacia",isCorrect:!1},{ans:"Buttercup",isCorrect:!0},{ans:"Aster",isCorrect:!1},{ans:"Lantana",isCorrect:!1}]},{imageSource:"https://habahram.blob.core.windows.net/flowers/crownimperial.jpg",Options:[{ans:"Crown Imperial",isCorrect:!0},{ans:"Clover",isCorrect:!1},{ans:"Lantana",isCorrect:!1},{ans:"Marigold",isCorrect:!1}]},{imageSource:"https://habahram.blob.core.windows.net/flowers/gladiolus.jpg",Options:[{ans:"Daffodil",isCorrect:!1},{ans:"Clover",isCorrect:!1},{ans:"Sunflower",isCorrect:!1},{ans:"Gladiolus",isCorrect:!0}]},{imageSource:"https://habahram.blob.core.windows.net/flowers/daisy.jpg",Options:[{ans:"Dahlia",isCorrect:!1},{ans:"Daisy",isCorrect:!0},{ans:"Primrose",isCorrect:!1},{ans:"Orchid",isCorrect:!1}]},{imageSource:"https://habahram.blob.core.windows.net/flowers/tickseed.jpg",Options:[{ans:"Zinnia",isCorrect:!1},{ans:"Marigold",isCorrect:!1},{ans:"Lotus",isCorrect:!1},{ans:"Tickseed",isCorrect:!0}]}],f=a(67),x=function(){var e=O.length,t=Object(r.useState)(0),a=Object(c.a)(t,2),s=a[0],n=a[1],o=Object(r.useState)(!1),i=Object(c.a)(o,2),l=i[0],b=i[1],h=Object(r.useState)(0),u=Object(c.a)(h,2),p=u[0],d=u[1];return Object(r.useEffect)((function(){!function(e){for(var t,a,r=e.length-1;r>0;r--)t=Math.floor(Math.random()*(r+1)),a=e[r],e[r]=e[t],e[t]=a;console.log("shuffled")}(O)}),[]),l?Object(j.jsxs)("div",{children:["You scored ",p," out of ",e]}):Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Your current score is : ",p," "]}),Object(j.jsxs)("p",{children:["Question ",s+1,"/",e]})]}),Object(j.jsx)(f.a,{children:Object(j.jsx)(f.a.Image,{width:171,height:180,alt:"171x180",src:O[s].imageSource})})]}),Object(j.jsx)("div",{children:O[s].Options.map((function(e){return Object(j.jsx)("button",{onClick:function(){return function(e){e&&d(p+1);var t=s+1;t<O.length?n(t):b(!0)}(e.isCorrect)},children:e.ans})}))})]})},C=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(""),o=Object(c.a)(n,2),h=o[0],u=o[1];return Object(j.jsxs)(l.a,{onSubmit:function(e){e.preventDefault(),i.push({username:a,password:h})},children:[Object(j.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[Object(j.jsx)(l.a.Label,{children:"Create a username:"}),Object(j.jsx)(l.a.Control,{type:"email",placeholder:"Enter email",value:a,onChange:function(e){s(e.target.value)}})]}),Object(j.jsxs)(l.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(j.jsx)(l.a.Label,{children:"Choose a password:"}),Object(j.jsx)(l.a.Control,{type:"password",placeholder:"Password",value:h,onChange:function(e){u(e.target.value)}})]}),Object(j.jsx)(b.a,{variant:"primary",type:"submit",children:"Register"})]})},v=a(64),S=a(65),y=function(){var e=Object(r.useState)(localStorage.getItem("customer")),t=Object(c.a)(e,2),a=t[0],s=t[1];return Object(r.useEffect)((function(){s(localStorage.getItem("customer"))})),Object(j.jsx)(v.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(v.a.Brand,{as:w.b,to:"/",children:"Practicum"}),Object(j.jsx)(v.a.Toggle,{}),Object(j.jsxs)(v.a.Collapse,{className:"justify-content-end",children:[Object(j.jsx)(S.a.Link,{as:w.b,to:"/quiz",children:"Quiz"}),a?Object(j.jsx)(S.a.Link,{as:w.b,to:"",onClick:function(){localStorage.removeItem("customer"),s(void 0)},children:"Log Off"}):Object(j.jsx)(S.a.Link,{as:w.b,to:"/login",children:"Log In"}),Object(j.jsx)(S.a.Link,{as:w.b,to:"/register",children:"Sign Up"}),a?Object(j.jsxs)(v.a.Text,{children:["Signed in as: ",a]}):""]})]})})},L=(a(57),a(63)),I=a(43);a(58);var k=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),a=t[0],s=t[1];return Object(j.jsx)(w.a,{children:Object(j.jsx)("div",{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(L.a,{children:Object(j.jsx)(I.a,{children:"This is my header."})}),Object(j.jsx)(L.a,{children:Object(j.jsx)(I.a,{children:Object(j.jsx)(y,{isAuthenticated:a})})}),Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",children:Object(j.jsx)(g,{})}),Object(j.jsx)(h.a,{exact:!0,path:"/login",children:Object(j.jsx)(u,{onCustomerLoggedIn:function(){s(!0)}})}),Object(j.jsx)(h.a,{exact:!0,path:"/register",children:Object(j.jsx)(C,{})}),Object(j.jsx)(h.a,{exact:!0,path:"/quiz",children:Object(j.jsx)(x,{})})]}),Object(j.jsx)(L.a,{children:Object(j.jsx)(I.a,{children:"Footer"})})]})})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),r(e),s(e),n(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),B()}},[[59,1,2]]]);
//# sourceMappingURL=main.1c7bb93a.chunk.js.map