(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(4),r=n.n(i),s=(n(16),n(2)),d=n(5),c=n(6),u=n(8),l=n(7),h=n(9),m=n(1);var b=function(e){return o.a.createElement("div",{className:"todoList"},o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("input",{type:"text",value:e.userInput,placeholder:"something to do",name:"todos",onChange:e.handleChange}),o.a.createElement("button",{type:"submit"},"Enter")))};var p=function(e){return o.a.createElement("li",null,e.task,o.a.createElement("span",null," "),o.a.createElement("button",{onClick:function(){return e.deleteTodo(e.index)}},"Remove"))};var v=function(e){return o.a.createElement("div",null,e.todos.map(function(t){return o.a.createElement(p,{key:t.id,index:t.id,task:t.task,deleteTodo:e.deleteTodo})}))},f=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={userInput:"",todos:[]},n.handleChange=n.handleChange.bind(Object(m.a)(Object(m.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(m.a)(Object(m.a)(n))),n.createTodo=n.createTodo.bind(Object(m.a)(Object(m.a)(n))),n.deleteTodo=n.deleteTodo.bind(Object(m.a)(Object(m.a)(n))),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({userInput:t})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.createTodo(),this.setState({userInput:""}),e.target.reset()}},{key:"createTodo",value:function(){var e=Object(s.a)(this.state.todos),t={},n=Date.now();t.id="task-".concat(n),t.task=this.state.userInput,e.push(t),this.setState({todos:e})}},{key:"deleteTodo",value:function(e){var t=Object(s.a)(this.state.todos),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),this.setState({todos:t})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,{handleChange:this.handleChange,handleSubmit:this.handleSubmit,userInput:this.state.userInput}),o.a.createElement(v,{todos:this.state.todos,deleteTodo:this.deleteTodo}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.d4eaee49.chunk.js.map