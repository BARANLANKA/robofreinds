(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(24)},21:function(e,n,t){},22:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(9),c=t.n(r),i=(t(21),t(1)),s=t(2),l=t(4),u=t(3),h=t(5),d=function(e){var n=e.name,t=e.email,o=e.id;return a.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?size=200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t)))},f=function(e){var n=e.robots;return a.a.createElement("div",null,n.map(function(e,t){return a.a.createElement(d,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))},m=function(e){e.searchfield;var n=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n}))},g=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).state={hasError:!1},e}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oooops. That is not good"):this.props.children}}]),n}(o.Component),b=(t(22),function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).onSearchChange=function(n){e.setState({searchfield:n.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){e.setState({robots:n})})}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,o=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return n.length?a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(m,{searchChange:this.onSearchChange}),a.a.createElement(g,null,a.a.createElement(v,null,a.a.createElement(f,{robots:o})))):a.a.createElement("h1",null,"Loading")}}]),n}(o.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(23);c.a.render(a.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofreinds",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/robofreinds","/service-worker.js");p?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):w(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):w(e)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.a7a1a126.chunk.js.map