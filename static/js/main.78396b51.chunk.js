(this["webpackJsonpproject-five"]=this["webpackJsonpproject-five"]||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(9),r=a.n(o),s=(a(20),a(10)),c=a(11),l=a(12),u=a(1),h=a(14),p=a(13),m=a(4),d=a.n(m);a(22);d.a.initializeApp({apiKey:"AIzaSyBS7-l3QGrrjNOjeBveNuOw43EPLCs64h0",authDomain:"projectfive-58123.firebaseapp.com",databaseURL:"https://projectfive-58123.firebaseio.com",projectId:"projectfive-58123",storageBucket:"projectfive-58123.appspot.com",messagingSenderId:"685748994816",appId:"1:685748994816:web:a5fe6a534909f0bb2069e5",measurementId:"G-BHWNHQ6PJN"});var f=d.a,v=(a(25),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",author:"",type:"",instructions:"",recipes:[]},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.database().ref("recipes").on("value",(function(t){var a=[],n=t.val();for(var i in n)a.push({id:i,name:n[i].title,author:n[i].author,type:n[i].type,instructions:n[i].instructions});e.setState({recipes:a})}))}},{key:"handleChange",value:function(e){this.setState(Object(s.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=f.database().ref("recipes"),a={name:this.state.name,author:this.state.author,type:this.state.type,instructions:this.state.instructions};t.push(a),this.setState({name:"",author:"",type:"",instructions:""})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"My Database Connection Works"),i.a.createElement("ul",null),i.a.createElement("h2",null,"My Recipe Book"),i.a.createElement("form",{action:"",className:"recipeEntry"},i.a.createElement("input",{type:"text",name:"name",placeholder:"recipeName",onChange:this.handleChange,defaultValue:this.state.name}),i.a.createElement("input",{type:"text",name:"author",placeholder:"authorName",onChange:this.handleChange,defaultValue:this.state.author}),i.a.createElement("select",{name:"type",onChange:this.handleChange,defaultValue:this.state.type},i.a.createElement("option",{value:""},"Pick One"),i.a.createElement("option",{value:"salad"},"Salad"),i.a.createElement("option",{value:"soup"},"Soup"),i.a.createElement("option",{value:"desert"},"Desert")),i.a.createElement("textarea",{name:"instructions",placeholder:"instructions",onChange:this.handleChange,defaultValue:this.state.instructions}),i.a.createElement("button",{onClick:this.handleSubmit,type:"submit"},"Add Recipe")))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.78396b51.chunk.js.map