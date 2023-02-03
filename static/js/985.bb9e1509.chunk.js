"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[985],{3985:function(n,e,t){t.r(e),t.d(e,{default:function(){return J}});var r,o,a,i,s,c,d,u,l=t(2791),p=t(9434),x=function(n){return n.contacts.contacts},f=function(n){return n.filter.text},m=function(n){return n.contacts.isLoading},h=function(n){return n.contacts.error},b=t(8224),g=t(168),v=t(6444),Z=v.ZP.div(r||(r=(0,g.Z)(["\n  margin: 0 auto;\n  padding: 40px;\n  width: 500px;\n  display: flex;\n  justify-content: space-evenly;\n  border: 1px solid #ccc;\n  box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.36),\n    0px 1px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px -1px rgba(0, 0, 0, 0.02);\n"]))),j=v.ZP.h2(o||(o=(0,g.Z)(["\n  margin-top: 5px;\n  display: flex;\n  justify-content: center;\n  color: #00000099;\n  font-size: 44px;\n  text-transform: uppercase;\n"]))),y=v.ZP.form(a||(a=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n"]))),w=v.ZP.label(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),C=v.ZP.input(s||(s=(0,g.Z)(["\n  border: none;\n  height: 32px;\n  margin-top: 5px;\n  background-color: #0000002c;\n\n  &:hover {\n    border: 1px solid #000000;\n  }\n  &:focus {\n    outline: none;\n    box-shadow: 0 0 0 1px #000000;\n  }\n"]))),P=v.ZP.button(c||(c=(0,g.Z)(["\n  text-transform: uppercase;\n  color: #fff;\n  font-weight: 500;\n  background-color: #000000;\n  padding: 7px 9px;\n  border: transparent;\n  cursor: pointer;\n  border-radius: 5px;\n\n  &:hover {\n    background-color: #b40000;\n    box-shadow: 0 0 0 1px #000000;\n    border-radius: 5px;\n  }\n  &:focus {\n    background-color: #b40000;\n    box-shadow: 0 0 0 1px #000000;\n    border-radius: 5px;\n  }\n"]))),k=t(3329);function A(){var n=(0,p.I0)(),e=(0,p.v9)(x);return(0,k.jsx)(Z,{children:(0,k.jsxs)("div",{children:[(0,k.jsx)(j,{children:"Add Contacts"}),(0,k.jsxs)(y,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget,o=r.elements.name.value,a=String(r.elements.number.value),i=o.toLowerCase();(null===e||void 0===e?void 0:e.find((function(n){var e;return(null===(e=n.name)||void 0===e?void 0:e.toLowerCase())===i})))?alert("".concat(o," is already in the list of contacts")):(n((0,b.uK)({name:o,number:a})),r.reset())},children:[(0,k.jsxs)(w,{htmlFor:"1",children:[" ","Name"," ",(0,k.jsx)(C,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,id:"1"})]}),(0,k.jsxs)(w,{htmlFor:"2",children:["Phone"," ",(0,k.jsx)(C,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,id:"2"})]}),(0,k.jsx)(P,{type:"submit",children:"Add contact"})]})]})})}var _,z,F,I,L=v.ZP.button(d||(d=(0,g.Z)(["\n  text-transform: uppercase;\n  color: #fff;\n  background-color: #003030;\n  padding: 5px 7px;\n  border: transparent;\n  border-radius: 5px;\n  margin-left: 5px;\n"]))),D=v.ZP.li(u||(u=(0,g.Z)(["\n  font-weight: 500;\n  margin-bottom: 4px;\n"]))),T=function(n){var e=n.id,t=n.name,r=n.number,o=n.onDeleteContact;return(0,k.jsxs)(D,{id:e,children:[t," : ",r,(0,k.jsx)(L,{onClick:function(){return o(e)},children:"Delete"})]},e)},q=v.ZP.ul(_||(_=(0,g.Z)(["\n  margin: 0 auto;\n  width: 500px;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  padding: 0;\n"]))),N=v.ZP.h2(z||(z=(0,g.Z)(["\n  font-size: 34px;\n  color: #00000099;\n  display: flex;\n  justify-content: center;\n"]))),S=function(){var n=(0,p.I0)(),e=(0,p.v9)(x);console.log(e),(0,l.useEffect)((function(){n((0,b.yF)())}),[n]);var t=function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}(e,(0,p.v9)(f));return(0,k.jsxs)(q,{children:[(0,k.jsx)(N,{children:"CONTACTS"}),t.length>0&&t.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,k.jsx)(T,{id:t,name:r,number:o,onDeleteContact:function(){return n((0,b.GK)(t))}},t)}))]})},E=t(6895),K=v.ZP.label(F||(F=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 500;\n  margin-top: 30px;\n"]))),B=function(){var n=(0,p.I0)();return(0,k.jsxs)(K,{children:["Find contacts by name",(0,k.jsx)(C,{type:"text",onChange:function(e){return n((0,E.bI)(e.currentTarget.value))}})]})},G=v.ZP.div(I||(I=(0,g.Z)(["\n  margin-top: 20px;\n  margin-left: 40px;\n"])));function J(){var n=(0,p.I0)(),e=(0,p.v9)(m),t=(0,p.v9)(h);return(0,l.useEffect)((function(){n(b.yF)}),[n]),(0,k.jsxs)(G,{children:[e&&!t&&(0,k.jsx)("b",{children:"Request in progress..."}),(0,k.jsx)(A,{}),(0,k.jsx)(S,{}),(0,k.jsx)(B,{})]})}}}]);
//# sourceMappingURL=985.bb9e1509.chunk.js.map