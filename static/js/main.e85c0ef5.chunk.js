(this["webpackJsonpeth-gas-dashboard"]=this["webpackJsonpeth-gas-dashboard"]||[]).push([[0],{39:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(32),r=a.n(s),o=(a(39),a(5)),i=a(2),l=a(8),u=a.n(l),b=a(13),j=a(6),d=function e(t){var a=t.setGasData,n=t.gasData,c=t.parseTime,s=t.setGasStats,r=t.config,l=0;a(Object(i.a)(Object(i.a)({},n),{},{rektFlag:"neutral"})),console.log("opening websocket");var u=new WebSocket("wss://gasgas.io/prices");u.onopen=function(e){console.log("websocket connected"),a(Object(i.a)(Object(i.a)({},n),{},{socket:u,rektFlag:!1}))},u.onmessage=function(e){l++;var t=Object.values(JSON.parse(e.data).data).map((function(e,t){return 4===t?c(e):(a=e,a/Math.pow(10,9)).toFixed(1);var a}));a({socket:u,prices:[].concat(Object(o.a)(t),[l])}),function(e){var t=e.setGasStats,a=e.prices;t((function(e){return{sums:0===e.sampleSize?a.slice(0,4):e.sums.map((function(e,t){return Number(e)+Number(a[t])})),sampleSize:e.sampleSize+1,history:Object(o.a)(e.history).concat([a.slice(0,4)])}}))}({setGasStats:s,prices:t})},u.onclose=function(t){t.wasClean?console.log("".concat(t.code,": Connection closed cleanly")):(console.log("".concat(t.code,": Connection rekt")),a(Object(i.a)(Object(i.a)({},n),{},{prices:["R","E","K","T","gasgas.io api rekt","ded"],rektFlag:!0})),console.log({config:r}),r.autoRetry&&(console.log({auto:r.autoRetry}),setTimeout((function(){e({setGasData:a,gasData:n,parseTime:c,setGasStats:s,config:r}),console.log("getting gas")}),15e3)))},u.onerror=function(e){console.log({onerror:e})}},p=a(33),f=a.n(p),h=a(34),O=a.n(h),m=a.p+"static/media/cross.7ac58f49.svg",x=a.p+"static/media/plus.0737ce86.svg",g=a.p+"static/media/refresh.755ed584.svg",v=a.p+"static/media/asdf.b49a92e1.wav",k=(a(86),a(0)),N="set",y="ringing",w=function(e){var t=e.gasData,a=Object(n.useState)(),c=Object(j.a)(a,2),s=c[0],r=c[1],i=Object(n.useState)([]),l=Object(j.a)(i,2),u=l[0],b=l[1],d=new Audio(v),p=function(){s<=9999&&s>0&&!u.find((function(e){return e.value===s}))&&b([{value:s,status:N}].concat(Object(o.a)(u)).sort((function(e,t){return t.value-e.value})))};Object(n.useEffect)((function(){!function(e){t&&e.find((function(a,n){if(Number(a.value)>=t.prices[2]&&e[n].status!==y){var c=Object(o.a)(e);c[n].status=y,b(c),d.play()}}))}(u)}),[t]);var f=function(e){return u[e].status===y?"alert":""};return Object(k.jsxs)("div",{className:"alarm-box-container",children:[Object(k.jsxs)("div",{className:"add-alarm-container",children:[Object(k.jsx)("input",{className:"add-alarm-input",maxLength:"4",onChange:function(e){return r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&p(),function(e){!["Backspace","Delete","Home","End","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].find((function(t){return t===e.key}))&&isNaN(e.key)&&e.preventDefault()}(e)},onWheel:function(e){var t=isNaN(s)?0:s;t=Number(t)+e.deltaY/-50,r(Math.max(t,0))},value:0===s?"":s,placeholder:"alarm"}),Object(k.jsx)("button",{className:"add-alarm-button",placeholder:"alarm",onClick:p,children:Object(k.jsx)("img",{src:x})})]}),u.map((function(e,t){return Object(k.jsxs)("div",{className:"alarm-box alarm-".concat(t+1," ").concat(f(t)),children:[Object(k.jsxs)("div",{className:"alarm-box-text-box",children:[Object(k.jsx)("span",{children:"\u23f0"}),Object(k.jsx)("span",{children:e.value}),Object(k.jsx)("span",{children:"gwei"})]}),Object(k.jsxs)("div",{className:"small-button-box",children:[e.status===y&&Object(k.jsx)("button",{className:"alarm-clear-button small-button",onClick:function(){return function(e){var t=Object(o.a)(u);t[e].status=N,b(t)}(t)},children:Object(k.jsx)("img",{src:g})}),Object(k.jsx)("button",{className:"alarm-reset-button small-button",onClick:function(){return function(e){var t=Object(o.a)(u);t.splice(e,1),b(t)}(t)},children:Object(k.jsx)("img",{src:m})})]})]},t)}))]})},S=(a(88),function(e){var t=e.gasStats,a={RED:"rgb(247, 26, 0)",YELLOW:"rgb(255, 237, 48)",GREEN:"rgb(0, 135, 57)",PURPLE:"rebeccapurple"};return Object(k.jsxs)("div",{className:"graph-container",children:[Object(k.jsxs)("div",{className:"graph-info-box",children:[Object(k.jsx)("div",{children:"ETH Gas Station API"}),t.prices.map((function(e,t){return Object(k.jsx)("div",{children:e})}))]}),t.history.map((function(e,t){var n=10*(t+1);return Object(k.jsx)("span",{children:e.map((function(e,t){var c=Object.values(a),s={height:"".concat(1.3*e,"px"),width:"4px",position:"absolute",bottom:"5px",left:"".concat(n+5,"px"),background:"".concat(c[t]),zIndex:"".concat(100+t)};return Object(k.jsx)("span",{style:s})}))})}))]})}),E={etherscanKey:"UTIYWQDZAPK59ZTCVYFM5VG595HURMGAEH",ethGasStationKey:"e213ca34bbb5b36cec9d417236fcbbecbab8156633994f116e800f903e0b",wallet:"0xEB7dC5D228c246E3D87F978AA0c316eE40e9e149"},C=(a(89),f.a.init("")),G=function(e){return new Date(e).toUTCString().replace("GMT","UTC")},D=function(){var e=Object(n.useRef)(),t=Object(n.useState)({prices:[],socket:null,rektFlag:!1}),a=Object(j.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)({sums:[],sampleSize:0,history:[]}),l=Object(j.a)(r,2),p=l[0],f=l[1],h=Object(n.useState)({prices:[],sums:[0,0,0,0],sampleSize:0,history:[]}),m=Object(j.a)(h,2),x=m[0],g=m[1],v=Object(n.useState)(),N=Object(j.a)(v,2),y=N[0],D=N[1],R=Object(n.useState)(21e3),T=Object(j.a)(R,2),A=T[0],F=T[1],I=Object(n.useState)({autoRetry:!1,showGraph:!0}),z=Object(j.a)(I,2),L=z[0],M=z[1],H=function(){var e=Object(b.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.stats.ethprice();case 2:t=e.sent,D(t.result.ethusd);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(b.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://ethgasstation.info/api/ethgasAPI.json?api-key=".concat(E.ethGasStationKey));case 2:t=e.sent,a=[t.data.fastest,t.data.fast,t.data.average,t.data.safeLow].map((function(e){return e/10})),g((function(e){return Object(i.a)(Object(i.a)({},e),{},{sampleSize:e.sampleSize+1,prices:a,sums:e.sums.map((function(e,t){return e+a[t]})),history:e.history.concat([a])})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d({setGasData:s,gasData:c,parseTime:G,setGasStats:f,config:e})}),[]),Object(n.useEffect)((function(){e.current=L}),[L]);Object(n.useEffect)((function(){return H(),K(),setInterval((function(){return K()}),1e4),void setInterval(Object(b.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:case"end":return e.stop()}}),e)}))),15e3)}),[]);var P=Object(o.a)(Array(500).keys()).map((function(){return Math.random()*Math.random()*500+30}));return Object(k.jsxs)("div",{className:"app",children:[Object(k.jsxs)("div",{style:{zIndex:300,background:"green",width:"500px",height:"500px",position:"relative",overflow:"visible"},children:[function(e){var t=e.positions,a=e.offset;return Object(k.jsx)("div",{children:t.map((function(e,n){var c=n*a,s=(n+1)*a,r=500-Number(e),o=500-Number(t[n+1]);return o?Object(k.jsx)("svg",{index:n,className:"line line-".concat(n),style:{position:"absolute",overflow:"visible"},children:Object(k.jsx)("line",{id:"line-".concat(n),style:{fill:"red",strokeWidth:3,stroke:"#4F2632"},x1:c,x2:s,y1:r,y2:o})}):null}))})}({positions:P,offset:10}),Object(k.jsx)("div",{style:{position:"absolute",height:"10px",width:"10px",background:"red",borderRadius:"50%"}}),Object(k.jsx)("div",{style:{position:"absolute",height:"10px",width:"10px",background:"red",borderRadius:"50%"}})]}),Object(k.jsxs)("div",{className:"gas-widget",children:[Object(k.jsx)("div",{className:"gas-frame-container",children:Object(k.jsxs)("div",{className:"gas-frame",children:[["rapid","fast","standard","slow"].map((function(e,t){var a=(y*c.prices[t]*A/Math.pow(10,9)).toFixed(2);return Object(k.jsxs)("div",{className:"price-box ".concat(e),children:[e,":",Object(k.jsx)("div",{className:"price",children:c.prices[t]}),!isNaN(a)&&Object(k.jsxs)("span",{className:"tx-cost",children:["($",a,")"]})]})})),Object(k.jsxs)("div",{className:"timestamp",children:[Object(k.jsx)("span",{children:"last update:"}),Object(k.jsx)("span",{children:c.prices[4]}),Object(k.jsxs)("span",{children:[" (update count: ",c.prices[5],")"]})]}),Object(k.jsxs)("div",{className:"eth-price-container",children:["ETH: ",y?"$"+y:"disable adblock"]}),Object(k.jsxs)("div",{className:"kill-button-container",children:[Object(k.jsx)("button",{className:"kill-button",onClick:function(){c.socket?(c.socket.close(),console.log("killed connection"),s(Object(i.a)(Object(i.a)({},c),{},{socket:void 0}))):(console.log("reconnecting..."),d({setGasData:s,gasData:c,parseTime:G,setGasStats:f,gasStats:p,config:e}))},children:"neutral"===c.rektFlag?"Connecting...":c.socket?"KILL":c.rektFlag?"Retry":"Connect"}),!0===c.rektFlag?Object(k.jsxs)("span",{className:"autoconnect-checkbox",children:[Object(k.jsx)("input",{type:"checkbox",id:"autoconnect",checked:L.autoRetry,onChange:function(){M((function(t){return console.log("CONFIG IS CHANGED TO ",{ref:e.current}),console.log({onchange:t.autoRetry}),Object(i.a)(Object(i.a)({},t),{},{autoRetry:!t.autoRetry})})),e.current=L}}),Object(k.jsx)("label",{children:" auto?"})]}):null]}),Object(k.jsxs)("div",{className:"tx-select",children:[Object(k.jsx)("label",{htmlFor:"gasCostInput",children:"tx type: "}),Object(k.jsxs)("select",{id:"gasCostInput",onChange:function(e){F(e.target.value)},children:[Object(k.jsx)("option",{value:21e3,children:"send ETH"}),Object(k.jsx)("option",{value:65e3,children:"send ERC20"}),Object(k.jsx)("option",{value:175e3,children:"LP"}),Object(k.jsx)("option",{value:2e5,children:"SWAP"})]})]})]})}),Object(k.jsx)(w,{gasData:c})]}),L.showGraph?Object(k.jsx)(S,{gasStats:x}):null]})};r.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(D,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.e85c0ef5.chunk.js.map