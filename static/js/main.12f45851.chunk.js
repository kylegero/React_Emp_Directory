(this.webpackJsonpempdirectory=this.webpackJsonpempdirectory||[]).push([[0],{23:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),r=c.n(s),i=c(15),j=c.n(i),l=(c(23),c(3)),o=function(e){var t=e.emps,c=e.updateEmps,r=Object(s.useState)(""),i=Object(l.a)(r,2),j=i[0],o=i[1];return Object(s.useEffect)((function(){var e=""===j?t:t.filter((function(e){return e.name.first.toLowerCase().indexOf(j.toLowerCase())>=0}));c(e)}),[j,t]),Object(n.jsx)("input",{value:j,onChange:function(e){return o(e.target.value)}})},a=c(17),d=function(e){var t=e.emps,c=Object(s.useState)([]),r=Object(l.a)(c,2),i=r[0],j=r[1];return Object(s.useEffect)((function(){return j(t)}),[t]),Object(n.jsx)("div",{children:Object(n.jsxs)("table",{className:"table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"title"}),Object(n.jsx)("th",{scope:"col",onClick:function(){var e=Object(a.a)(t).sort((function(e,t){var c=e.name.first,n=t.name.first;return c<n?-1:c>n?1:0}));j(e)},children:"First"}),Object(n.jsx)("th",{scope:"col",children:"Last"}),Object(n.jsx)("th",{scope:"col",children:"Gender"}),Object(n.jsx)("th",{scope:"col",children:"E-mail"}),Object(n.jsx)("th",{scope:"col",children:"Phone"}),Object(n.jsx)("th",{scope:"col",children:"Cell"}),Object(n.jsx)("th",{scope:"col",children:"City"}),Object(n.jsx)("th",{scope:"col",children:"State"}),Object(n.jsx)("th",{scope:"col",children:"Country"}),Object(n.jsx)("th",{scope:"col",children:"ZIPcode"}),Object(n.jsx)("th",{scope:"col",children:"Picture"})]})}),Object(n.jsx)("tbody",{children:i.map((function(e){var t=e.location,c=t.city,s=t.state,r=t.country,i=t.postcode,j=e.picture.thumbnail,l=e.cell,o=e.phone,a=e.gender,d=e.email,b=e.name,h=b.first,O=b.last,u=b.title;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:u}),Object(n.jsx)("th",{children:h}),Object(n.jsx)("td",{children:O}),Object(n.jsx)("td",{children:a}),Object(n.jsx)("td",{children:d}),Object(n.jsx)("td",{children:o}),Object(n.jsx)("td",{children:l}),Object(n.jsx)("td",{children:c}),Object(n.jsx)("td",{children:s}),Object(n.jsx)("td",{children:r}),Object(n.jsx)("td",{children:i}),Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:j})}),Object(n.jsx)("td",{})]},d)}))})]})})},b=c(16),h=c.n(b);c(42);var O=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1],i=Object(s.useState)([]),j=Object(l.a)(i,2),a=j[0],b=j[1];return Object(s.useEffect)((function(){h.a.get("https://randomuser.me/api/?results=200&nat=us").then((function(e){var t=e.data.results;return r(t)}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Employee Directory"}),Object(n.jsxs)("p",{children:["To sort employees by first name, begin entering a first name below",Object(n.jsx)("br",{}),'If you\'d like to sort employees alphabetically by first name, give the "First" a click']}),Object(n.jsx)(o,{emps:c,updateEmps:b}),Object(n.jsx)(d,{emps:a})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,44)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};j.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),u()}},[[43,1,2]]]);
//# sourceMappingURL=main.12f45851.chunk.js.map