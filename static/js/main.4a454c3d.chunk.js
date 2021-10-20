(this["webpackJsonpeth-gas-dashboard"]=this["webpackJsonpeth-gas-dashboard"]||[]).push([[0],{39:function(e,t,n){},86:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(32),r=n.n(s),o=(n(39),n(2)),i=n(9),l=n.n(i),u=n(14),b=n(5),j=n(6),d=function e(t){var n=t.setGasData,a=t.gasData,c=t.parseTime,s=t.setGasStats,r=t.config,i=0;n(Object(o.a)(Object(o.a)({},a),{},{rektFlag:"neutral"})),console.log("opening websocket");var l=new WebSocket("wss://gasgas.io/prices");l.onopen=function(e){console.log("websocket connected"),n(Object(o.a)(Object(o.a)({},a),{},{socket:l,rektFlag:!1}))},l.onmessage=function(e){i++;var t=Object.values(JSON.parse(e.data).data).map((function(e,t){return 4===t?c(e):(n=e,n/Math.pow(10,9)).toFixed(1);var n}));n({socket:l,prices:[].concat(Object(j.a)(t),[i])}),function(e){var t=e.setGasStats,n=e.prices;t((function(e){return{sums:0===e.sampleSize?n.slice(0,4):e.sums.map((function(e,t){return Number(e)+Number(n[t])})),sampleSize:e.sampleSize+1,history:Object(j.a)(e.history).concat([n.slice(0,4)])}}))}({setGasStats:s,prices:t})},l.onclose=function(t){t.wasClean?console.log("".concat(t.code,": Connection closed cleanly")):(console.log("".concat(t.code,": Connection rekt")),n(Object(o.a)(Object(o.a)({},a),{},{prices:["R","E","K","T","gasgas.io api rekt","ded"],rektFlag:!0})),console.log({config:r}),r.autoRetry&&(console.log({auto:r.autoRetry}),setTimeout((function(){e({setGasData:n,gasData:a,parseTime:c,setGasStats:s,config:r}),console.log("getting gas")}),15e3)))},l.onerror=function(e){console.log({onerror:e})}},p=n(33),f=n.n(p),h=n(34),m=n.n(h),O=n.p+"static/media/cross.7ac58f49.svg",g=n.p+"static/media/plus.0737ce86.svg",x=n.p+"static/media/refresh.755ed584.svg",v=n.p+"static/media/asdf.b49a92e1.wav",N=(n(86),n(0)),y="set",k="ringing",w=function(e){var t=e.gasData,n=Object(a.useState)(),c=Object(b.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)([]),i=Object(b.a)(o,2),l=i[0],u=i[1],d=new Audio(v),p=function(){s<=9999&&s>0&&!l.find((function(e){return e.value===s}))&&u([{value:s,status:y}].concat(Object(j.a)(l)).sort((function(e,t){return t.value-e.value})))};Object(a.useEffect)((function(){!function(e){t&&e.find((function(n,a){if(Number(n.value)>=t.prices[2]&&e[a].status!==k){var c=Object(j.a)(e);c[a].status=k,u(c),d.play()}}))}(l)}),[t]);var f=function(e){return l[e].status===k?"alert":""};return Object(N.jsxs)("div",{className:"alarm-box-container",children:[Object(N.jsxs)("div",{className:"add-alarm-container",children:[Object(N.jsx)("input",{className:"add-alarm-input",maxLength:"4",onChange:function(e){return r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&p(),function(e){!["Backspace","Delete","Home","End","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].find((function(t){return t===e.key}))&&isNaN(e.key)&&e.preventDefault()}(e)},onWheel:function(e){var t=isNaN(s)?0:s;t=Number(t)+e.deltaY/-50,r(Math.max(t,0))},value:0===s?"":s,placeholder:"alarm"}),Object(N.jsx)("button",{className:"add-alarm-button",placeholder:"alarm",onClick:p,children:Object(N.jsx)("img",{src:g})})]}),l.map((function(e,t){return Object(N.jsxs)("div",{className:"alarm-box alarm-".concat(t+1," ").concat(f(t)),children:[Object(N.jsxs)("div",{className:"alarm-box-text-box",children:[Object(N.jsx)("span",{children:"\u23f0"}),Object(N.jsx)("span",{children:e.value}),Object(N.jsx)("span",{children:"gwei"})]}),Object(N.jsxs)("div",{className:"small-button-box",children:[e.status===k&&Object(N.jsx)("button",{className:"alarm-clear-button small-button",onClick:function(){return function(e){var t=Object(j.a)(l);t[e].status=y,u(t)}(t)},children:Object(N.jsx)("img",{src:x})}),Object(N.jsx)("button",{className:"alarm-reset-button small-button",onClick:function(){return function(e){var t=Object(j.a)(l);t.splice(e,1),u(t)}(t)},children:Object(N.jsx)("img",{src:O})})]})]},t)}))]})},S=(n(88),function(e){var t,n=e.gasStats,s={RED:"rgb(247, 26, 0)",YELLOW:"rgb(255, 237, 48)",GREEN:"rgb(0, 135, 57)",PURPLE:"rebeccapurple"},r=Object(a.useRef)(),o=Object(a.useState)(!0),i=Object(b.a)(o,2),l=i[0],u=i[1],j=function(e){var t=e.event,n=e.element;n.scrollBy(t.deltaY,0);var a=n.scrollWidth-n.clientWidth;u(n.scrollLeft===a)},d=function(){return n.history.map((function(e,t){var n=10*(t+1);return Object(N.jsx)("span",{className:"bar-container",onWheel:function(e){return j({event:e,element:e.target.parentNode})},children:e.map((function(e,t){var a=Object.values(s),c={height:"".concat(e,"px"),width:"4px",position:"absolute",bottom:"0px",left:"".concat(n,"px"),background:"".concat(a[t]),zIndex:"".concat(100+t)};return Object(N.jsx)("span",{className:"graph-bar",onWheel:function(e){return j({event:e,element:e.target.parentNode.parentNode})},style:c})}))})}))};return Object(a.useEffect)((function(){r.current&&l&&r.current.scrollIntoView({behavior:"smooth",inline:"center",block:"center"})}),[d()]),Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsxs)("div",{className:"graph-info-box",children:[Object(N.jsx)("div",{children:"ETH Gas Station API"}),n.prices.map((function(e){return Object(N.jsx)("div",{children:e})}))]}),Object(N.jsx)("div",{className:"temp-alarm",children:Object(N.jsx)(w,{gasData:n})}),Object(N.jsxs)("div",{className:"graph-container",onWheel:function(e){return j({event:e,element:e.target})},children:[function(e){var t=e.positions,n=e.offset;return Object(N.jsx)("div",{className:"line-graph-container",onWheel:function(e){return j({event:e,element:e.target.parentNode})},children:t.map((function(e,a){var s=window.innerHeight,o=a*n,i=(a+1)*n,l=s-Number(e),u=s-Number(t[a+1]);return u?Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)("span",{className:"line-graph-point",onWheel:function(e){return j({event:e,element:e.target.parentNode.parentNode})},style:{left:"".concat(o+10,"px"),bottom:"".concat(e,"px")}}),Object(N.jsx)("svg",{index:a,className:"line line-".concat(a),onWheel:function(e){return j({event:e,element:e.target.parentNode.parentNode})},style:{position:"absolute",left:"10px",overflow:"visible",opacity:"1"},children:Object(N.jsx)("line",{id:"line-".concat(a),style:{strokeWidth:3,stroke:"hsl(190, 97%, 60%)"},x1:o+1.4,x2:i+1.4,y1:l,y2:u})})]}):Object(N.jsxs)(c.a.Fragment,{children:[Object(N.jsx)("span",{className:"line-graph-point",onWheel:function(e){return j({event:e,element:e.target.parentNode.parentNode})},style:{left:"".concat(o+10,"px"),bottom:"".concat(e,"px")}}),Object(N.jsx)("span",{ref:r,className:"absence",style:{left:"".concat(o+200,"px")}})]})}))})}({positions:(t={historyArray:n.history},t.historyArray.map((function(e){return e.reduce((function(e,t){return e+t}))/4}))),offset:10}),d()]})]})}),E={etherscanKey:"UTIYWQDZAPK59ZTCVYFM5VG595HURMGAEH",ethGasStationKey:"e213ca34bbb5b36cec9d417236fcbbecbab8156633994f116e800f903e0b",wallet:"0xEB7dC5D228c246E3D87F978AA0c316eE40e9e149"},C=(n(89),f.a.init("")),D=function(e){return new Date(e).toUTCString().replace("GMT","UTC")},G=function(){var e=Object(a.useRef)(),t=Object(a.useState)({prices:[],socket:null,rektFlag:!1}),n=Object(b.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)({sums:[],sampleSize:0,history:[]}),i=Object(b.a)(r,2),j=i[0],p=i[1],f=Object(a.useState)({prices:[],sums:[0,0,0,0],sampleSize:0,history:[]}),h=Object(b.a)(f,2),O=h[0],g=h[1],x=Object(a.useState)(),v=Object(b.a)(x,2),y=v[0],k=v[1],G=Object(a.useState)(21e3),R=Object(b.a)(G,2),F=R[0],A=R[1],T=Object(a.useState)({autoRetry:!1,showGraph:!0}),W=Object(b.a)(T,2),I=W[0],L=W[1],z=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.stats.ethprice();case 2:t=e.sent,k(t.result.ethusd);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://ethgasstation.info/api/ethgasAPI.json?api-key=".concat(E.ethGasStationKey));case 2:t=e.sent,n=[t.data.fastest,t.data.fast,t.data.average,t.data.safeLow].map((function(e){return e/10})),g((function(e){return Object(o.a)(Object(o.a)({},e),{},{sampleSize:e.sampleSize+1,prices:n,sums:e.sums.map((function(e,t){return e+n[t]})),history:e.history.concat([n])})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){d({setGasData:s,gasData:c,parseTime:D,setGasStats:p,config:e})}),[]),Object(a.useEffect)((function(){e.current=I}),[I]);Object(a.useEffect)((function(){return z(),H(),setInterval((function(){return H()}),5e3),void setInterval((function(){return z()}),15e3)}),[]);return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsxs)("div",{className:"gas-widget",children:[Object(N.jsx)("div",{className:"gas-frame-container",children:Object(N.jsxs)("div",{className:"gas-frame",children:[["rapid","fast","standard","slow"].map((function(e,t){var n=(y*c.prices[t]*F/Math.pow(10,9)).toFixed(2);return Object(N.jsxs)("div",{className:"price-box ".concat(e),children:[e,":",Object(N.jsx)("div",{className:"price",children:c.prices[t]}),!isNaN(n)&&Object(N.jsxs)("span",{className:"tx-cost",children:["($",n,")"]})]})})),Object(N.jsxs)("div",{className:"timestamp",children:[Object(N.jsx)("span",{children:"last update:"}),Object(N.jsx)("span",{children:c.prices[4]}),Object(N.jsxs)("span",{children:[" (update count: ",c.prices[5],")"]})]}),Object(N.jsxs)("div",{className:"eth-price-container",children:["ETH: ",y?"$"+y:"disable adblock"]}),Object(N.jsxs)("div",{className:"kill-button-container",children:[Object(N.jsx)("button",{className:"kill-button",onClick:function(){c.socket?(c.socket.close(),console.log("killed connection"),s(Object(o.a)(Object(o.a)({},c),{},{socket:void 0}))):(console.log("reconnecting..."),d({setGasData:s,gasData:c,parseTime:D,setGasStats:p,gasStats:j,config:e}))},children:"neutral"===c.rektFlag?"Connecting...":c.socket?"KILL":c.rektFlag?"Retry":"Connect"}),!0===c.rektFlag?Object(N.jsxs)("span",{className:"autoconnect-checkbox",children:[Object(N.jsx)("input",{type:"checkbox",id:"autoconnect",checked:I.autoRetry,onChange:function(){L((function(t){return console.log("CONFIG IS CHANGED TO ",{ref:e.current}),console.log({onchange:t.autoRetry}),Object(o.a)(Object(o.a)({},t),{},{autoRetry:!t.autoRetry})})),e.current=I}}),Object(N.jsx)("label",{children:" auto?"})]}):null]}),Object(N.jsxs)("div",{className:"tx-select",children:[Object(N.jsx)("label",{htmlFor:"gasCostInput",children:"tx type: "}),Object(N.jsxs)("select",{id:"gasCostInput",onChange:function(e){A(e.target.value)},children:[Object(N.jsx)("option",{value:21e3,children:"send ETH"}),Object(N.jsx)("option",{value:65e3,children:"send ERC20"}),Object(N.jsx)("option",{value:175e3,children:"LP"}),Object(N.jsx)("option",{value:2e5,children:"SWAP"})]})]})]})}),Object(N.jsx)(w,{gasData:c})]}),I.showGraph?Object(N.jsx)(S,{gasStats:O}):null]})};r.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(G,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.4a454c3d.chunk.js.map