(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e.n(o),a=e(1),i=e.n(a),c=(e(13),e(3)),l=e(4),u=e(6),s=e(5),m=e(7),p=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(u.a)(this,Object(s.a)(n).call(this,t))).state={bid:"",ask:"",instrument:"",popularity:""},e}return Object(m.a)(n,t),Object(l.a)(n,[{key:"componentDidMount",value:function(){fetch("https://robintrack.net/api/stocks/FB/popularity_history").then(function(t){return t.json()}).then(function(t){return console.log(t)})}},{key:"render",value:function(){var t=this.state,n=t.bid,e=t.ask,o=t.instrument,a=t.popularity;return r.a.createElement("div",null,r.a.createElement("div",null,"Bid: ",n,r.a.createElement("br",null),"Ask: ",e,r.a.createElement("br",null),"Instrument: ",o,r.a.createElement("br",null),"Popularity: ",a))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,n,e){t.exports=e(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.7982b96f.chunk.js.map