"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[683],{2683:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(2791),r=t(9434),c=t(6907),s=t(3634),o="ContactForm_form__dhl+T",l="ContactForm_label__-cVXI",i="ContactForm_button__eSwX9",u="ContactForm_input__Bl93P",d=t(184),m=function(){var e=(0,r.I0)(),n=(0,r.v9)((function(e){return e.contacts.contacts}));return(0,d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=t.target.elements,r=a.name,c=a.number;if(n.some((function(e){return e.name===r.value&&e.number===c.value})))alert("".concat(r.value," is already in the phonebook"));else{var o={name:r.value,number:c.value};e((0,s.uK)(o)),t.target.reset()}},className:o,children:[(0,d.jsxs)("label",{className:l,children:["Name",(0,d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,className:u})]}),(0,d.jsxs)("label",{className:l,children:["Number",(0,d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,className:u})]}),(0,d.jsx)("button",{type:"submit",className:i,children:"Add contact"})]})},h=t(4808),f="Filter_Label__MldcW",_="Filter_input__N7T3z",b=function(){var e=(0,r.I0)();return(0,d.jsxs)("label",{className:f,children:["Search contacts by name",(0,d.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(n){var t=n.target.value;e((0,h.W1)(t))},className:_})]})},p=t(3433),v="ContactList_element__v3kbj",x="ContactList_button__7kL4l",j=function(){var e=(0,r.v9)((function(e){return e.contacts.contacts})),n=(0,r.v9)(h.AD),t=(0,r.I0)(),a=(0,p.Z)(e).sort((function(e,n){return e.name.localeCompare(n.name)})).filter((function(e){return e.name.toLowerCase().includes(n&&n.toLowerCase())}));return a.length<=0?(0,d.jsx)("p",{children:"No contacts in your phone book ..."}):(0,d.jsx)("ul",{children:a.map((function(e){return(0,d.jsxs)("li",{className:v,children:[(0,d.jsx)("button",{onClick:function(){return n=e.id,void t((0,s.GK)(n));var n},className:x,children:"X"}),e.name,": ",e.number]},e.id)}))})},C=t(6916),N=function(e){return e.contacts.isLoading},k=((0,C.P1)([function(e){return e.contacts.contacts},h.AD],(function(e,n){return""===n?e:e.filter((function(e){var t;return null!==(t=e.name.toLowerCase().includes(n.filter))&&void 0!==t?t:[]}))})),function(){var e=(0,r.v9)(N),n=(0,r.I0)();return(0,a.useEffect)((function(){n((0,s.yF)())}),[n]),(0,d.jsxs)("div",{children:[(0,d.jsx)(c.B6,{children:(0,d.jsx)(c.ql,{children:(0,d.jsx)("title",{children:"Phonebook"})})}),(0,d.jsx)(m,{}),(0,d.jsx)("h2",{children:"Phonebook"}),(0,d.jsx)(b,{}),e?(0,d.jsx)("p",{children:"Loading contacts..."}):(0,d.jsx)(j,{})]})})}}]);
//# sourceMappingURL=683.3e159429.chunk.js.map