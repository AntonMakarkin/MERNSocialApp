(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(17),s=a(22),o=a(70),l=a(80),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b="LIKE",f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return e.filter((function(e){return e._id!==t.payload}));case j:return t.payload;case u:return[].concat(Object(l.a)(e),[t.payload]);case d:case b:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));default:return e}},m=Object(s.c)({posts:f}),x=a(49),h=a(159),O=a(160),g=a(154),v=a(163),y=a(158),C=a(18),w=a.n(C),k=a(35),N=a(36),I=a.n(N),E="https://memories-app-demo-ver.herokuapp.com/posts",S=function(e,t){return I.a.patch("".concat(E,"/").concat(e),t)},D=function(e){return I.a.delete("".concat(E,"/").concat(e))},_=function(e){return I.a.patch("".concat(E,"/").concat(e,"/likePost"))},z=a.p+"static/media/memories.9cfa8a46.png",T=a(157),W=a(151),A=a(153),B=a(162),F=a(155),L=a(156),M=a(77),R=a.n(M),H=a(78),J=a.n(H),P=a(76),K=a.n(P),U=a(71),V=a.n(U),q=a(148),G=Object(q.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),Q=a(5),X=function(e){var t=e.post,a=e.setCurrentId,n=G(),r=Object(i.b)();return Object(Q.jsxs)(W.a,{className:n.card,children:[Object(Q.jsx)(A.a,{className:n.media,image:t.selectedFile,title:t.title}),Object(Q.jsxs)("div",{className:n.overlay,children:[Object(Q.jsx)(g.a,{variant:"h6",children:t.creator}),Object(Q.jsx)(g.a,{variant:"body2",children:V()(t.createdAt).fromNow()})]}),Object(Q.jsx)("div",{className:n.overlay2,children:Object(Q.jsx)(B.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(Q.jsx)(K.a,{fontSize:"default"})})}),Object(Q.jsx)("div",{className:n.details,children:Object(Q.jsx)(g.a,{variant:"body2",color:"textSecondary",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(Q.jsx)(g.a,{className:n.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(Q.jsx)(F.a,{children:Object(Q.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(Q.jsxs)(L.a,{className:n.cardActions,children:[Object(Q.jsxs)(B.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(k.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_(e);case 3:n=t.sent,r=n.data,a({type:b,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(Q.jsx)(R.a,{fontSize:"small"}),"\xa0 Like \xa0 ",t.likeCount]}),Object(Q.jsxs)(B.a,{size:"small",color:"primary",onClick:function(){return r((e=t._id,function(){var t=Object(k.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(Q.jsx)(J.a,{fontSize:"small"}),"Delete"]})]})]})},Y=Object(q.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Z=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=Y();return console.log(a),a.length?Object(Q.jsx)(y.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(Q.jsx)(y.a,{item:!0,xs:12,sm:6,children:Object(Q.jsx)(X,{post:e,setCurrentId:t})},e._id)}))}):Object(Q.jsx)(T.a,{})},$=a(19),ee=a(82),te=a(161),ae=a(79),ne=a.n(ae),re=Object(q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ce=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(x.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),p=re(),j=Object(i.b)();Object(n.useEffect)((function(){l&&o(l)}),[l]);var b=function(){a(null),o({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(Q.jsx)(ee.a,{className:p.paper,children:Object(Q.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:function(e){e.preventDefault(),j(t?function(e,t){return function(){var a=Object(k.a)(w.a.mark((function a(n){var r,c;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,s):function(e){return function(){var t=Object(k.a)(w.a.mark((function t(a){var n,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,I.a.post(E,c);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(s)),b()},children:[Object(Q.jsxs)(g.a,{variant:"h6",children:[t?"Editing":"Creating"," a Memory"]}),Object(Q.jsx)(te.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{creator:e.target.value}))}}),Object(Q.jsx)(te.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{title:e.target.value}))}}),Object(Q.jsx)(te.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:s.message,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{message:e.target.value}))}}),Object(Q.jsx)(te.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(Q.jsx)("div",{className:p.fileInput,children:Object(Q.jsx)(ne.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object($.a)(Object($.a)({},s),{},{selectedFile:t}))}})}),Object(Q.jsx)(B.a,{className:p.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(Q.jsx)(B.a,{variant:"contained",color:"secondary",size:"small",onClick:b,fullWidth:!0,children:"Clear"})]})})},ie=a(48),se=Object(q.a)((function(e){return Object(ie.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255,1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),oe=function(){var e=Object(n.useState)(null),t=Object(x.a)(e,2),a=t[0],r=t[1],c=se(),s=Object(i.b)();return Object(n.useEffect)((function(){s(function(){var e=Object(k.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get(E);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,s]),Object(Q.jsxs)(h.a,{maxWidth:"lg",children:[Object(Q.jsxs)(O.a,{className:c.appBar,position:"static",color:"inherit",children:[Object(Q.jsx)(g.a,{className:c.heading,variant:"h2",align:"center",children:"Memories"}),Object(Q.jsx)("img",{className:c.image,src:z,alt:"memories",height:"60"})]}),Object(Q.jsx)(v.a,{in:!0,children:Object(Q.jsx)(h.a,{children:Object(Q.jsxs)(y.a,{container:!0,className:c.mainContainer,justify:"space-between",alignItems:"stretch",spacing:3,children:[Object(Q.jsx)(y.a,{item:!0,xs:12,sm:7,children:Object(Q.jsx)(Z,{setCurrentId:r})}),Object(Q.jsx)(y.a,{item:!0,xs:12,sm:4,children:Object(Q.jsx)(ce,{currentId:a,setCurrentId:r})})]})})})]})},le=(a(118),Object(s.e)(m,Object(s.d)(Object(s.a)(o.a))));c.a.render(Object(Q.jsx)(i.a,{store:le,children:Object(Q.jsx)(oe,{})}),document.getElementById("root"))}},[[119,1,2]]]);
//# sourceMappingURL=main.01208390.chunk.js.map