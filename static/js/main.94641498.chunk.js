(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),l=(n(13),n(1)),i=n(2),s=n(4),u=n(3),h=(n(5),function(e){var t=e.name,n=e.mail,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow shadow-2"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(a,"?10*10")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))}),m=function(e){var t=e.robots;return r.a.createElement(r.a.Fragment,null,t.map((function(e,t){return r.a.createElement(h,{key:e.id,name:e.name,mail:e.email,id:e.id})})))},d=function(e){var t=e.onSearchchange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"tc b br3 pa3 ba b--green bg-washed-red",type:"search",placeholder:"Search robot",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"500px"}},e.children)},b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"OOOPSS SOMETHING WENT WRONG"):this.props.children}}]),n}(a.Component),E=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchchange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("nav",{className:"tc"},r.a.createElement("h1",null,"ROBOFRIENDS"),r.a.createElement(d,{onSearchchange:this.onSearchchange})),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(m,{robots:a})))):r.a.createElement("h1",null,"LOADING")}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.94641498.chunk.js.map