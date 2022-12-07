"use strict";(self.webpackChunkblood_donation_system=self.webpackChunkblood_donation_system||[]).push([[973],{9781:function(e,t){t.Z=["A+","A-","B+","B-","AB+","AB-","0+","0-"]},3973:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var o=n(4942),a=n(1413),i=n(885),r=n(3366),c=n(7462),s=n(2791),d=n(1184),l=n(5682),u=n(8519),p=n(2466),m=n(6934),v=n(1402),f=n(184),b=["component","direction","spacing","divider","children"];function h(e,t){var n=s.Children.toArray(e).filter(Boolean);return n.reduce((function(e,o,a){return e.push(o),a<n.length-1&&e.push(s.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var Z=(0,m.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,a=(0,c.Z)({display:"flex",flexDirection:"column"},(0,d.k9)({theme:n},(0,d.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,l.hB)(n),r=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),s=(0,d.P$)({values:t.direction,base:r}),u=(0,d.P$)({values:t.spacing,base:r});"object"===typeof s&&Object.keys(s).forEach((function(e,t,n){if(!s[e]){var o=t>0?s[n[t-1]]:"column";s[e]=o}}));a=(0,p.Z)(a,(0,d.k9)({theme:n},u,(function(e,n){return{"& > :not(style) + :not(style)":(0,o.Z)({margin:0},"margin".concat((a=n?s[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,l.NA)(i,e))};var a})))}return a=(0,d.dt)(n.breakpoints,a)})),g=s.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiStack"}),o=(0,u.Z)(n),a=o.component,i=void 0===a?"div":a,s=o.direction,d=void 0===s?"column":s,l=o.spacing,p=void 0===l?0:l,m=o.divider,g=o.children,y=(0,r.Z)(o,b),x={direction:d,spacing:p};return(0,f.jsx)(Z,(0,c.Z)({as:i,ownerState:x,ref:t},y,{children:m?h(g,m):g}))})),y=g,x=n(890),_=n(7391),k=n(6151),j=n(9658),C=n(8870),S=n(8096),B=n(4925),w=n(8583),O=n(3786),I=n(5403),M=n(6871),D=n(5351),T=n(4569),z=n.n(T),P="http://localhost:8000/donations",F=n(5881),q=n(9781),R=n(9276),W=(0,m.ZP)(R.Z)({display:"flex",flexDirection:"column",alignItems:"center",padding:"0",maxWidth:"350px",TextField:{flex:1},Button:{height:"40px",bottom:"-15px"}}),G=(0,m.ZP)(R.Z)((function(e){var t=e.theme;return{display:"flex",flexDirection:"column",alignItems:"center",padding:"0",width:"350px",marginTop:t.spacing(-1),form:{marginTop:t.spacing(1)},Button:{marginTop:t.spacing(1),marginBottom:t.spacing(2)},"& .MuiAlert-root":{marginTop:t.spacing(3)},"& .MuiSelect-select":{maxWidth:350}}}));var A=function(){var e=(0,M.s0)(),t=(0,s.useContext)(F.S).user,n=(0,s.useState)(!0),r=(0,i.Z)(n,2),c=r[0],d=r[1],l=(0,s.useState)(!1),u=(0,i.Z)(l,2),p=u[0],m=u[1],v=(0,s.useState)([{bank_id:"",manager:"",address:"",capacity:0,size:0}]),b=(0,i.Z)(v,2),h=b[0],Z=b[1],g=(0,s.useState)({severity:"success",content:""}),T=(0,i.Z)(g,2),R=T[0],A=T[1],N=(0,s.useState)({donor_id:""}),V=(0,i.Z)(N,2),L=V[0],E=V[1],H=(0,s.useState)({name:"",blood_type:"0-",bank_id:""}),$=(0,i.Z)(H,2),J=$[0],K=$[1];(0,s.useEffect)((function(){(0,D.G5)().then((function(e){Z(e.data.filter((function(e){return e.size<e.capacity})))})).catch((function(e){return console.error(e)}))}),[]);var Q=function(e,t){var n=e.target,i=n.name,r=n.value;1===t?(m(!1),E((0,a.Z)((0,a.Z)({},L),{},(0,o.Z)({},i,r)))):2===t&&K((0,a.Z)((0,a.Z)({},J),{},(0,o.Z)({},i,r)))};return(0,f.jsxs)(y,{alignItems:"center",children:[(0,f.jsxs)(W,{children:[(0,f.jsx)(x.Z,{component:"h1",variant:"h5",gutterBottom:!0,children:"Donate Blood"}),(0,f.jsxs)(y,{component:"form",onSubmit:function(e){var t;e.preventDefault(),m(!0),(t=L.donor_id||"",z().get(P+"/check/?donor_id=".concat(t))).then((function(e){e.data.donor?(d(!0),K((0,a.Z)((0,a.Z)({},J),{},{name:e.data.donor.name,blood_type:e.data.donor.blood_type}))):(A({severity:"info",content:"Donor is not registered. Please enter donor information."}),K({name:"",blood_type:"0-",bank_id:""}),d(!1))}))},mt:1,direction:"row",width:350,children:[(0,f.jsx)(_.Z,{size:"small",margin:"normal",required:!0,fullWidth:!0,name:"donor_id",label:"Search SSN",type:"text",id:"donor_id",autoComplete:"donor_id",value:L.donor_id,onChange:function(e){return Q(e,1)}}),(0,f.jsx)(k.Z,{"aria-label":"search-ssn",type:"submit",children:(0,f.jsx)(I.Z,{})})]})]}),(0,f.jsxs)(G,{children:[R.content&&(0,f.jsx)(j.Z,{severity:R.severity,onClose:function(){return A({severity:"success",content:""})},children:R.content}),(0,f.jsxs)(C.Z,{component:"form",onSubmit:function(n){var o;n.preventDefault(),p?(o=(0,a.Z)((0,a.Z)({},J),{},{donor_id:L.donor_id,recep_id:t.user_id}),z().post(P,o)).then((function(){alert("Donation successful!"),e("/")})).catch((function(e){return console.error(e.message)})):A({severity:"warning",content:"Please search user's SSN first and then click the search button!"})},children:[(0,f.jsx)(_.Z,{size:"small",margin:"normal",required:!0,fullWidth:!0,name:"donor_id",placeholder:"SSN of donor",type:"text",id:"donor_id",autoComplete:"donor_id",value:L.donor_id,disabled:!0}),(0,f.jsx)(_.Z,{size:"small",margin:"normal",required:!0,fullWidth:!0,name:"name",label:"Full name",type:"text",id:"full-name",autoComplete:"name",value:J.name,disabled:c,onChange:function(e){return Q(e,2)}}),(0,f.jsxs)(S.Z,{fullWidth:!0,margin:"normal",children:[(0,f.jsx)(B.Z,{id:"select_blood_type",children:"Blood Type"}),(0,f.jsx)(w.Z,{size:"small",labelId:"select_blood_type",id:"blood_type",name:"blood_type",onChange:function(e){return Q(e,2)},required:!0,label:"Blood Type",value:J.blood_type,disabled:c,children:q.Z.map((function(e){return(0,f.jsx)(O.Z,{value:e,children:e},e)}))})]}),(0,f.jsxs)(S.Z,{fullWidth:!0,margin:"normal",children:[(0,f.jsx)(B.Z,{id:"select_bank",children:"Bank"}),(0,f.jsx)(w.Z,{size:"small",labelId:"select_bank",id:"bank_id",name:"bank_id",onChange:function(e){return Q(e,2)},required:!0,label:"Bank",value:J.bank_id,children:h.map((function(e){return(0,f.jsx)(O.Z,{value:e.bank_id,children:e.address},e.bank_id)}))})]}),(0,f.jsx)(k.Z,{type:"submit",fullWidth:!0,variant:"contained",children:"Donate Blood"})]})]})]})}},5403:function(e,t,n){var o=n(4836);t.Z=void 0;var a=o(n(5649)),i=n(184),r=(0,a.default)((0,i.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search");t.Z=r},3786:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(4942),a=n(3366),i=n(7462),r=n(2791),c=n(8182),s=n(4419),d=n(2065),l=n(6934),u=n(1402),p=n(6199),m=n(533),v=n(162),f=n(2071),b=n(133),h=n(6014),Z=n(9849),g=n(1217);function y(e){return(0,g.Z)("MuiMenuItem",e)}var x=(0,n(5878).Z)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),_=n(184),k=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex"],j=(0,l.ZP)(m.Z,{shouldForwardProp:function(e){return(0,l.FO)(e)||"classes"===e},name:"MuiMenuItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,a=e.ownerState;return(0,i.Z)({},n.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:"1px solid ".concat((n.vars||n).palette.divider),backgroundClip:"padding-box"},(t={"&:hover":{textDecoration:"none",backgroundColor:(n.vars||n).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},(0,o.Z)(t,"&.".concat(x.selected),(0,o.Z)({backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(x.focusVisible),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.focusOpacity,"))"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,o.Z)(t,"&.".concat(x.selected,":hover"),{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / calc(").concat(n.vars.palette.action.selectedOpacity," + ").concat(n.vars.palette.action.hoverOpacity,"))"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:n.vars?"rgba(".concat(n.vars.palette.primary.mainChannel," / ").concat(n.vars.palette.action.selectedOpacity,")"):(0,d.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),(0,o.Z)(t,"&.".concat(x.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,o.Z)(t,"&.".concat(x.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,o.Z)(t,"& + .".concat(b.Z.root),{marginTop:n.spacing(1),marginBottom:n.spacing(1)}),(0,o.Z)(t,"& + .".concat(b.Z.inset),{marginLeft:52}),(0,o.Z)(t,"& .".concat(Z.Z.root),{marginTop:0,marginBottom:0}),(0,o.Z)(t,"& .".concat(Z.Z.inset),{paddingLeft:36}),(0,o.Z)(t,"& .".concat(h.Z.root),{minWidth:36}),t),!a.dense&&(0,o.Z)({},n.breakpoints.up("sm"),{minHeight:"auto"}),a.dense&&(0,i.Z)({minHeight:32,paddingTop:4,paddingBottom:4},n.typography.body2,(0,o.Z)({},"& .".concat(h.Z.root," svg"),{fontSize:"1.25rem"})))})),C=r.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiMenuItem"}),o=n.autoFocus,d=void 0!==o&&o,l=n.component,m=void 0===l?"li":l,b=n.dense,h=void 0!==b&&b,Z=n.divider,g=void 0!==Z&&Z,x=n.disableGutters,C=void 0!==x&&x,S=n.focusVisibleClassName,B=n.role,w=void 0===B?"menuitem":B,O=n.tabIndex,I=(0,a.Z)(n,k),M=r.useContext(p.Z),D={dense:h||M.dense||!1,disableGutters:C},T=r.useRef(null);(0,v.Z)((function(){d&&T.current&&T.current.focus()}),[d]);var z,P=(0,i.Z)({},n,{dense:D.dense,divider:g,disableGutters:C}),F=function(e){var t=e.disabled,n=e.dense,o=e.divider,a=e.disableGutters,r=e.selected,c=e.classes,d={root:["root",n&&"dense",t&&"disabled",!a&&"gutters",o&&"divider",r&&"selected"]},l=(0,s.Z)(d,y,c);return(0,i.Z)({},c,l)}(n),q=(0,f.Z)(T,t);return n.disabled||(z=void 0!==O?O:-1),(0,_.jsx)(p.Z.Provider,{value:D,children:(0,_.jsx)(j,(0,i.Z)({ref:q,role:w,tabIndex:z,component:m,focusVisibleClassName:(0,c.Z)(F.focusVisible,S)},I,{ownerState:P,classes:F}))})}))}}]);
//# sourceMappingURL=973.d42885d8.chunk.js.map