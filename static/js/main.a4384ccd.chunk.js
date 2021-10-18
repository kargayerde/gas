(this["webpackJsonpeth-gas-dashboard"]=this["webpackJsonpeth-gas-dashboard"]||[]).push([[0],{26:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),r=a.n(s),o=(a(26),a(3)),i=a(8),l=a.n(i),u=a(11),j=a(4),b=a(5),d=function e(t){var a=t.setGasData,c=t.gasData,n=t.parseTime,s=t.setGasStats,r=t.config,i=0,l=r.autoRetry;a(Object(o.a)(Object(o.a)({},c),{},{rektFlag:"neutral"})),console.log("opening websocket");var u=new WebSocket("wss://gasgas.io/prices");u.onopen=function(e){console.log("websocket connected"),a(Object(o.a)(Object(o.a)({},c),{},{socket:u,rektFlag:!1}))},u.onmessage=function(e){i++;var t=Object.values(JSON.parse(e.data).data).map((function(e,t){return 4===t?n(e):(a=e,a/Math.pow(10,9)).toFixed(1);var a}));a({socket:u,prices:[].concat(Object(b.a)(t),[i])}),function(e){var t=e.setGasStats,a=e.prices;t((function(e){return{sums:0===e.sampleSize?a.slice(0,4):e.sums.map((function(e,t){return Number(e)+Number(a[t])})),sampleSize:e.sampleSize+1,history:Object(b.a)(e.history).concat([a.slice(0,4)])}}))}({setGasStats:s,prices:t})},u.onclose=function(t){t.wasClean?console.log("".concat(t.code,": Connection closed cleanly")):(console.log("".concat(t.code,": Connection rekt")),a(Object(o.a)(Object(o.a)({},c),{},{prices:["R","E","K","T","gasgas.io api rekt","ded"],rektFlag:!0})),l&&setTimeout((function(){e({setGasData:a,gasData:c,parseTime:n,setGasStats:s,config:r}),console.log("getting gas")}),15e3))},u.onerror=function(e){console.log({onerror:e})}},p=a(21),O=a.n(p),m=a.p+"static/media/cross.7ac58f49.svg",f=a.p+"static/media/plus.0737ce86.svg",h=a.p+"static/media/refresh.755ed584.svg",g=a.p+"static/media/asdf.b49a92e1.wav",x=(a(57),a(0)),v="set",k="ringing",N=function(e){var t=e.gasData,a=Object(c.useState)(),n=Object(j.a)(a,2),s=n[0],r=n[1],o=Object(c.useState)([]),i=Object(j.a)(o,2),l=i[0],u=i[1],d=new Audio(g),p=function(){s<=9999&&s>0&&!l.find((function(e){return e.value===s}))&&u([{value:s,status:v}].concat(Object(b.a)(l)).sort((function(e,t){return t.value-e.value})))};Object(c.useEffect)((function(){!function(e){t&&e.find((function(a,c){if(Number(a.value)>=t.prices[2]&&e[c].status!==k){var n=Object(b.a)(e);n[c].status=k,u(n),d.play()}}))}(l)}),[t]);var O=function(e){return l[e].status===k?"alert":""};return Object(x.jsxs)("div",{className:"alarm-box-container",children:[Object(x.jsxs)("div",{className:"add-alarm-container",children:[Object(x.jsx)("input",{className:"add-alarm-input",maxLength:"4",onChange:function(e){return r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&p(),function(e){!["Backspace","Delete","Home","End","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].find((function(t){return t===e.key}))&&isNaN(e.key)&&e.preventDefault()}(e)},onWheel:function(e){var t=isNaN(s)?0:s;t=Number(t)+e.deltaY/-50,r(Math.max(t,0))},value:0===s?"":s,placeholder:"alarm"}),Object(x.jsx)("button",{className:"add-alarm-button",placeholder:"alarm",onClick:p,children:Object(x.jsx)("img",{src:f})})]}),l.map((function(e,t){return Object(x.jsxs)("div",{className:"alarm-box alarm-".concat(t+1," ").concat(O(t)),children:[Object(x.jsxs)("div",{className:"alarm-box-text-box",children:[Object(x.jsx)("span",{children:"\u23f0"}),Object(x.jsx)("span",{children:e.value}),Object(x.jsx)("span",{children:"gwei"})]}),Object(x.jsxs)("div",{className:"small-button-box",children:[e.status===k&&Object(x.jsx)("button",{className:"alarm-clear-button small-button",onClick:function(){return function(e){var t=Object(b.a)(l);t[e].status=v,u(t)}(t)},children:Object(x.jsx)("img",{src:h})}),Object(x.jsx)("button",{className:"alarm-reset-button small-button",onClick:function(){return function(e){var t=Object(b.a)(l);t.splice(e,1),u(t)}(t)},children:Object(x.jsx)("img",{src:m})})]})]},t)}))]})},w=(a(59),O.a.init("")),S=function(e){return new Date(e).toUTCString().replace("GMT","UTC")};var y=function(){var e=Object(c.useState)({prices:[],socket:null,rektFlag:!1}),t=Object(j.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)({sums:[],sampleSize:0,history:[]}),r=Object(j.a)(s,2),i=r[0],b=r[1],p=Object(c.useState)(),O=Object(j.a)(p,2),m=O[0],f=O[1],h=Object(c.useState)(21e3),g=Object(j.a)(h,2),v=g[0],k=g[1],y=Object(c.useState)({autoRetry:!0,showGraph:!1}),C=Object(j.a)(y,2),D=C[0],G=C[1],T=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.stats.ethprice();case 2:t=e.sent,f(t.result.ethusd);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){d({setGasData:n,gasData:a,parseTime:S,setGasStats:b,config:D})}),[]),Object(c.useEffect)((function(){return T(),void setInterval(Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:case"end":return e.stop()}}),e)}))),15e3)}),[]);var E=function(){a.socket?(a.socket.close(),console.log("killed connection"),n(Object(o.a)(Object(o.a)({},a),{},{socket:void 0}))):(console.log("reconnecting..."),d({setGasData:n,gasData:a,parseTime:S,setGasStats:b,gasStats:i,config:D}))};return Object(x.jsx)("div",{className:"app",children:Object(x.jsxs)("div",{className:"gas-widget",children:[Object(x.jsx)("div",{className:"gas-frame-container",children:Object(x.jsxs)("div",{className:"gas-frame",children:[["rapid","fast","standard","slow"].map((function(e,t){var c=(m*a.prices[t]*v/Math.pow(10,9)).toFixed(2);return Object(x.jsxs)("div",{className:"price-box ".concat(e),children:[e,":",Object(x.jsx)("div",{className:"price",children:a.prices[t]}),!isNaN(c)&&Object(x.jsxs)("span",{className:"tx-cost",children:["($",c,")"]})]})})),Object(x.jsxs)("div",{className:"timestamp",children:[Object(x.jsx)("span",{children:"last update:"}),Object(x.jsx)("span",{children:a.prices[4]}),Object(x.jsxs)("span",{children:[" (update count: ",a.prices[5],")"]})]}),Object(x.jsxs)("div",{className:"eth-price-container",children:["ETH: ",m?"$"+m:"disable adblock"]}),Object(x.jsxs)("div",{className:"kill-button-container",children:[Object(x.jsx)("button",{className:"kill-button",onClick:function(){return E()},children:"neutral"===a.rektFlag?"Connecting...":a.socket?"KILL":a.rektFlag?"Retry":"Connect"}),!0===a.rektFlag?Object(x.jsxs)("span",{className:"autoconnect-checkbox",children:[Object(x.jsx)("input",{type:"checkbox",id:"autoconnect",checked:D.autoRetry,onChange:function(){return G((function(e){return e.autoRetry||E(),Object(o.a)(Object(o.a)({},e),{},{autoRetry:!e.autoRetry})}))}}),Object(x.jsx)("label",{children:" auto?"})]}):null]}),Object(x.jsxs)("div",{className:"tx-select",children:[Object(x.jsx)("label",{htmlFor:"gasCostInput",children:"tx type: "}),Object(x.jsxs)("select",{id:"gasCostInput",onChange:function(e){k(e.target.value)},children:[Object(x.jsx)("option",{value:21e3,children:"send ETH"}),Object(x.jsx)("option",{value:65e3,children:"send ERC20"}),Object(x.jsx)("option",{value:175e3,children:"LP"}),Object(x.jsx)("option",{value:2e5,children:"SWAP"})]})]})]})}),Object(x.jsx)(N,{gasData:a})]})})};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(y,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.a4384ccd.chunk.js.map