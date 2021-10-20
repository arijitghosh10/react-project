(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),l=(a(14),a(5)),s=a(2),i=a(1),r=(a(15),a(0));var u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})};a(17);var j=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),a=e.date.toLocaleString("en-US",{day:"2-digit"}),n=e.date.getFullYear();return Object(r.jsxs)(u,{className:"whole-date",children:[Object(r.jsx)("div",{className:"month",children:t}),Object(r.jsx)("div",{className:"year",children:n}),Object(r.jsx)("div",{className:"day",children:a})]})};a(18);var d=function(e){return Object(r.jsxs)(u,{className:"outer-div",children:[Object(r.jsx)(j,{date:e.date}),Object(r.jsxs)("div",{className:"description-div",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"price",children:["$",e.amount]})]})]})},o=(a(19),a(9)),b=(a(20),a(21),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=function(e){var t=e.dataPoints.map((function(e){return e.value})),a=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(b,{value:e.value,maxValue:a,label:e.label},e.label)}))})},x=function(e){var t,a=[{label:"jan",value:0},{label:"feb",value:0},{label:"mar",value:0},{label:"apr",value:0},{label:"may",value:0},{label:"jun",value:0},{label:"jul",value:0},{label:"aug",value:0},{label:"sep",value:0},{label:"oct",value:0},{label:"nov",value:0},{label:"dec",value:0}],n=Object(o.a)(e.expenses);try{for(n.s();!(t=n.n()).done;){var c=t.value;a[c.date.getMonth()].value+=c.amount}}catch(l){n.e(l)}finally{n.f()}return Object(r.jsx)(v,{dataPoints:a})},O=(a(22),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})});var h=function(e){var t=Object(i.useState)("2020"),a=Object(s.a)(t,2),n=a[0],c=a[1],l=e.expenses.filter((function(e){return e.date.getFullYear().toString()===n})),j=Object(r.jsx)("p",{children:"No Expenses found"});return l.length>0&&(j=l.map((function(e){return Object(r.jsx)(d,{title:e.title,amount:e.amount,date:e.date},e.id)}))),Object(r.jsx)("div",{children:Object(r.jsxs)(u,{className:"allExpenses",children:[Object(r.jsx)(O,{selected:n,onChangeFilter:function(e){c(e)}}),Object(r.jsx)(x,{expenses:l}),j]})})},m=a(7),p=(a(23),a(24),function(e){var t=Object(i.useState)(""),a=Object(s.a)(t,2),n=a[0],c=a[1],l=Object(i.useState)(""),u=Object(s.a)(l,2),j=u[0],d=u[1],o=Object(i.useState)(""),b=Object(s.a)(o,2),v=b[0],x=b[1],O=Object(i.useState)("true"),h=Object(s.a)(O,2),m=h[0],p=h[1],f=Object(i.useState)("true"),g=Object(s.a)(f,2),N=g[0],y=g[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault();var a={title:n,amount:j,date:new Date(v)};0!==n.trim().length?0!==j.trim().length?(e.onSaveExpenseData(a),c(""),d(""),x("")):y(!1):p(!1)},children:Object(r.jsxs)("div",{className:"new-expense-outer",children:[Object(r.jsxs)("div",{className:"new-expense-inner",children:[Object(r.jsx)("label",{style:{color:m?"black":"red"},children:"Title"}),Object(r.jsx)("input",{value:n,onChange:function(e){e.target.value.trim().length&&p(!0),c(e.target.value)},type:"text"})]}),Object(r.jsxs)("div",{className:"new-expense-inner",children:[Object(r.jsx)("label",{style:{color:N?"black":"red"},children:"Amount"}),Object(r.jsx)("input",{value:j,onChange:function(e){e.target.value.trim().length&&y(!0),d(e.target.value)},type:"number",min:"0.01",step:"0.01"})]}),Object(r.jsxs)("div",{className:"new-expense-inner",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{value:v,onChange:function(e){x(e.target.value)},type:"date"})]}),Object(r.jsx)("div",{className:"new-expense-action",children:Object(r.jsx)("button",{type:"submit",children:"Add Expense"})})]})})}),f=function(e){return Object(r.jsx)("div",{className:"new-expense",children:Object(r.jsx)(p,{onSaveExpenseData:function(t){var a=Object(m.a)(Object(m.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(a)}})})},g=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var N=function(){var e=Object(i.useState)(g),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(f,{onAddExpense:function(e){n((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)("div",{className:"expense",children:Object(r.jsx)(h,{expenses:a})})]})};c.a.render(Object(r.jsx)(N,{}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.1eb450b7.chunk.js.map