(this.webpackJsonpcoinsite=this.webpackJsonpcoinsite||[]).push([[0],{77:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),r=t(27),o=t.n(r),a=t(13),s=t(52),l=t(8),d=t(6),j=t(16),b=t(9),h=t(28),u=t(46),p=t(30),x=t.n(p),f="https://api.coinpaprika.com/v1";function O(){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(x.a.mark((function n(){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(f,"/coins"));case 2:return n.next=4,n.sent.json();case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var m=t(31),v=t.n(m),y=t(1);var k,w=function(n){var e=n.coinId,t=n.isDark,c=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(f,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),i=c.isLoading,r=c.data;return Date.now(),Object(y.jsx)("div",{children:i?"Loading chart...":Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v.a,{type:"line",series:[{name:"Price",data:null===r||void 0===r?void 0:r.map((function(n){return n.close}))}],options:{theme:{mode:t?"dark":"light"},chart:{height:300,width:500,toolbar:{show:!1},background:"transparent"},grid:{show:!1},stroke:{curve:"smooth",width:4},yaxis:{show:!0},xaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1},type:"datetime",categories:null===r||void 0===r?void 0:r.map((function(n){return n.time_close}))},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$".concat(n.toFixed(2))}}}}}),Object(y.jsx)(v.a,{type:"candlestick",series:[{data:[{x:Date.now()-518400,y:[6629.81,6650.5,6623.04,6633.33]},{x:Date.now()-432e3,y:[6629.833,6650.5,6623.04,6633.33]},{x:Date.now()-345600,y:[6629.81,6650.5,6623.04,6633.33]},{x:Date.now()-259200,y:[6629.81,6650.5,6623.04,6633.33]},{x:Date.now()-172800,y:[6629.81,6650.5,6623.04,6633.33]},{x:Date.now()-86400,y:[6629.81,6650.5,6623.04,6633.33]},{x:Date.now(),y:[6629.81,6650.5,6623.04,6633.33]}]}],options:{chart:{type:"candlestick"},xaxis:{type:"datetime"},yaxis:{show:!0}}}),Object(y.jsx)("span",{children:"Hi"})]})})},D=d.c.div(k||(k=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n"])));var C,I,L,q,S,F,Q,z,M,P,T=function(n){var e=n.coinId,t=Object(a.useQuery)(["price",e],(function(){return function(n){return fetch("".concat(f,"/tickers/").concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:5e3}),c=t.isLoading,i=t.data;return Object(y.jsx)("div",{children:c?"Loading...":Object(y.jsxs)(D,{children:[Object(y.jsxs)("span",{children:["Most : ",null===i||void 0===i?void 0:i.quotes.USD.ath_price.toFixed(2)]}),Object(y.jsxs)("span",{children:["\uc2dc\uac00\ucd1d\uc561 : ",null===i||void 0===i?void 0:i.quotes.USD.market_cap.toFixed(2)]}),Object(y.jsxs)("span",{children:["\ud604\uc7ac \uac00\uaca9 : ",null===i||void 0===i?void 0:i.quotes.USD.price.toFixed(2)]})]})})},B=d.c.h1(C||(C=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),_=d.c.span(I||(I=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),H=d.c.div(L||(L=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),U=d.c.header(q||(q=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),A=d.c.div(S||(S=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 10px;\n"]))),J=d.c.div(F||(F=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 33%;\n  span:first-child {\n    font-size: 10px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 5px;\n  }\n"]))),$=d.c.div(Q||(Q=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 15px;\n  font-weight: 700;\n"]))),R=d.c.p(z||(z=Object(l.a)(["\n  margin: 20px 0px;\n"]))),E=d.c.div(M||(M=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 25px 0px;\n  gap: 10px;\n"]))),W=d.c.span(P||(P=Object(l.a)(["\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-weight: 400;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  color: ",";\n  a {\n    padding: 7px 0px;\n    display: block;\n  }\n"])),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor}));var G,K,N,V,X,Y,Z,nn=function(n){var e=n.isDark,t=Object(b.g)().coinId,c=Object(b.f)().state,i=Object(b.h)("/:coinId/price"),r=Object(b.h)("/:coinId/chart"),o=Object(a.useQuery)(["info",t],(function(){return function(n){return fetch("".concat(f,"/coins/").concat(n)).then((function(n){return n.json()}))}(t)})),s=o.isLoading,l=o.data,d=Object(a.useQuery)(["tickers",t],(function(){return function(n){return fetch("".concat(f,"/tickers/").concat(n)).then((function(n){return n.json()}))}(t)}),{refetchInterval:5e3}),u=d.isLoading,p=d.data,x=s||u;return Object(y.jsxs)(H,{children:[Object(y.jsx)(h.a,{children:Object(y.jsx)("title",{children:null!==c&&void 0!==c&&c.name?c.name:x?"Loading...":null===l||void 0===l?void 0:l.name})}),Object(y.jsxs)(U,{children:[Object(y.jsxs)($,{children:[Object(y.jsx)(j.b,{to:"/",children:"Home"}),Object(y.jsx)(j.b,{to:"/".concat(t),children:t})]}),Object(y.jsx)(B,{children:null!==c&&void 0!==c&&c.name?c.name:x?"Loading...":null===l||void 0===l?void 0:l.name})]}),x?Object(y.jsx)(_,{children:"Loading..."}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(A,{children:[Object(y.jsxs)(J,{children:[Object(y.jsx)("span",{children:"Rank:"}),Object(y.jsx)("span",{children:null===l||void 0===l?void 0:l.rank})]}),Object(y.jsxs)(J,{children:[Object(y.jsx)("span",{children:"Symbol:"}),Object(y.jsxs)("span",{children:["$",null===l||void 0===l?void 0:l.symbol]})]}),Object(y.jsxs)(J,{children:[Object(y.jsx)("span",{children:"Price:"}),Object(y.jsxs)("span",{children:["$",null===p||void 0===p?void 0:p.quotes.USD.price.toFixed(3)]})]})]}),Object(y.jsx)(R,{children:null===l||void 0===l?void 0:l.description}),Object(y.jsxs)(A,{children:[Object(y.jsxs)(J,{children:[Object(y.jsx)("span",{children:"Total Suply:"}),Object(y.jsx)("span",{children:null===p||void 0===p?void 0:p.total_supply})]}),Object(y.jsxs)(J,{children:[Object(y.jsx)("span",{children:"Max Supply:"}),Object(y.jsx)("span",{children:null===p||void 0===p?void 0:p.max_supply})]})]}),Object(y.jsxs)(E,{children:[Object(y.jsx)(W,{isActive:null!==r,children:Object(y.jsx)(j.b,{to:"/".concat(t,"/chart"),children:"Chart"})}),Object(y.jsx)(W,{isActive:null!==i,children:Object(y.jsx)(j.b,{to:"/".concat(t,"/price"),children:"Price"})})]}),Object(y.jsxs)(b.c,{children:[Object(y.jsx)(b.a,{path:"/:coinId/price",children:Object(y.jsx)(T,{coinId:t})}),Object(y.jsx)(b.a,{path:"/:coinId/chart",children:Object(y.jsx)(w,{isDark:e,coinId:t})})]})]})]})},en=d.c.div(G||(G=Object(l.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),tn=d.c.header(K||(K=Object(l.a)(["\n  height: 15vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),cn=d.c.ul(N||(N=Object(l.a)([""]))),rn=d.c.li(V||(V=Object(l.a)(["\n  background-color: ",";\n  color: ",";\n  border-radius: 15px;\n  margin-bottom: 10px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.cardBgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),on=d.c.h1(X||(X=Object(l.a)(["\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),an=d.c.span(Y||(Y=Object(l.a)(["\n  text-align: center;\n  display: block;\n"]))),sn=d.c.img(Z||(Z=Object(l.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"])));var ln=function(n){var e=n.toggleDark,t=Object(a.useQuery)("allCoins",O),c=t.isLoading,i=t.data;return Object(y.jsxs)(en,{children:[Object(y.jsx)(h.a,{children:Object(y.jsx)("title",{children:"\ucf54\uc778"})}),Object(y.jsxs)(tn,{children:[Object(y.jsx)(on,{children:"\ucf54\uc778"}),Object(y.jsx)("button",{onClick:e,children:"Toggle Dark Mode"})]}),c?Object(y.jsx)(an,{children:"Loading..."}):Object(y.jsx)(cn,{children:null===i||void 0===i?void 0:i.slice(0,100).map((function(n){return Object(y.jsx)(rn,{children:Object(y.jsxs)(j.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(y.jsx)(sn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var dn,jn=function(n){var e=n.toggleDark,t=n.isDark;return Object(y.jsx)(j.a,{basename:"/JWcoinsite",children:Object(y.jsxs)(b.c,{children:[Object(y.jsx)(b.a,{path:"/:coinId",children:Object(y.jsx)(nn,{isDark:t})}),Object(y.jsx)(b.a,{path:"/",children:Object(y.jsx)(ln,{toggleDark:e})})]})})},bn=t(51),hn={bgColor:"#2f3640",textColor:"white",accentColor:"#9c88ff",cardBgColor:"transparent"},un={bgColor:"whitesmoke",textColor:"black",accentColor:"#9c88ff",cardBgColor:"white"},pn=Object(d.b)(dn||(dn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:",";\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var xn=function(){var n=Object(c.useState)(!1),e=Object(s.a)(n,2),t=e[0],i=e[1];return Object(y.jsx)(y.Fragment,{children:Object(y.jsxs)(d.a,{theme:t?hn:un,children:[Object(y.jsx)(pn,{}),Object(y.jsx)(jn,{isDark:t,toggleDark:function(){return i((function(n){return!n}))}}),Object(y.jsx)(bn.ReactQueryDevtools,{initialIsOpen:!0})]})})},fn=new a.QueryClient;o.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(a.QueryClientProvider,{client:fn,children:Object(y.jsx)(xn,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.d8202984.chunk.js.map