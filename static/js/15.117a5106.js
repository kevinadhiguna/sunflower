(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./examples/sunflower-antd-form-table/request.js":function(e,r,n){"use strict";n.r(r);var t=n("./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/esm/toConsumableArray.js"),o=n("./node_modules/_@babel_runtime@7.7.7@@babel/runtime/helpers/esm/defineProperty.js"),s=n("./node_modules/_mockjs@1.1.0@mockjs/dist/mock.js"),a=n.n(s).a.mock(Object(o.a)({},"list|".concat(200),[{username:"@name",email:"@email",id:"@guid","gender|1":["male","female"]}]));function i(e,r,n){return n?e.filter((function(e){return e[r].toLocaleLowerCase().indexOf(n.toLocaleLowerCase())>-1})):e}r.default=function(e){var r=e.username,n=e.email,o=e.filters,s=e.sorter,u=e.pageSize,c=e.current;console.log("-------\x3e request: username: %s, pageSize: %s, current: %s, filters: %s, sorter: %s",r,u,c,JSON.stringify(o),JSON.stringify(s));var l=u*(c-1),m=l+u,d=a.list;if(d=i(d,"username",r),d=i(d,"email",n),o&&Object.keys(o).forEach((function(e){return!o[e]||(0===o[e].length||void(d=d.filter((function(r){return o[e].includes(r[e])}))))})),s&&s.column){var f=s.column.dataIndex;d="descend"===s.order?Object(t.a)(d).sort((function(e,r){return r[f].charCodeAt(0)-e[f].charCodeAt(0)})):Object(t.a)(d).sort((function(e,r){return e[f].charCodeAt(0)-r[f].charCodeAt(0)}))}var b=d.slice(l,m);return new Promise((function(e){return setTimeout((function(){e({list:b,total:d.length})}),300)}))}}}]);