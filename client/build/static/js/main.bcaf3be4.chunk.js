(this["webpackJsonpproject-with-components"]=this["webpackJsonpproject-with-components"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/cine-defaut-1.704b37e1.jpg"},25:function(e,t,a){e.exports=a(38)},30:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),o=a.n(s),i=(a(30),a(6)),c=a.n(i),l=a(13),m=a(8),u=a(9),h=a(3),d=a(11),p=a(10),g=(a(32),a(12)),v=a(18),b=a.n(v),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).logout=n.logout.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"logout",value:function(){(0,this.props.addUserToState)(!1,{},{has:!1,message:""})}},{key:"render",value:function(){var e=this.props.isLoggedIn;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light",id:"nav"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(g.b,{to:"/",className:"navbar-brand"},"Home"),r.a.createElement("ul",{className:"nav navbar-nav justify-content-end"},!1===e&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{to:"/signin",className:"nav-link"},"Login")),!0===e&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"log-out-btn",onClick:this.logout},"Logout")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(g.b,{to:"/register",className:"nav-link"},"Register"))))))}}]),a}(n.Component),E=a(1),j=function(e){var t=e.name,a=e.desc,n=e.movieId,s=e.userId,o=e.token,i=e.removeMoviesFromState,m=e.movieImgUrl,u=function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="api/users/".concat(s,"/movies/").concat(n),e.prev=1,e.next=4,fetch(t,{method:"DELETE",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(o)}}).then((function(e){return e.json()})).then((function(e){return i(e._id)}));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(1),e.t0;case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"movie-container"},r.a.createElement("img",{src:m||b.a,style:{width:"150px",height:"100px"}}),r.a.createElement("h4",null,t," - ",a),r.a.createElement("button",{className:"btn btn-danger",onClick:u},"Remove"))},k=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={userMovies:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://fierce-spire-28320.herokuapp.com/api/users/".concat(this.props.userId,"/movies/");fetch(t,{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.props.token)}}).then((function(e){return e.json()})).then((function(t){return e.setState({userMovies:t})}))}},{key:"removeMoviesFromState",value:function(e){this.setState({userMovies:this.state.userMovies.filter((function(t){return t._id!==e}))})}},{key:"render",value:function(){var e=this;if(0===this.state.userMovies.length)return r.a.createElement("h3",null,"You have no movies");var t=this.state.userMovies.map((function(t){return r.a.createElement(j,{token:e.props.token,userId:e.props.userId,movieImgUrl:t.movieImgUrl,movieId:t._id,key:t._id,name:t.name,desc:t.description,removeMoviesFromState:e.removeMoviesFromState.bind(e)})}));return r.a.createElement("div",null,t)}}]),a}(n.Component),y=function(e){var t=e.username,a=e.isLoggedIn,n=e.userId,s=e.token;return!1===a?r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"Welcome,Guest!"),r.a.createElement("h4",null,"This is your personal ToWatchList"),r.a.createElement(g.b,{to:"/register"},r.a.createElement("button",{className:"btn btn-primary"},"Register"))):r.a.createElement("div",{className:"wrapper"},r.a.createElement("h2",null,"Greetings ",t),r.a.createElement("h4",null,"Here are the movies you need to watch : "),r.a.createElement(k,{userId:n,token:s}),r.a.createElement(g.b,{to:"/movies"},r.a.createElement("button",{className:"btn btn-primary"},"Add a new Movie")))},I=a(16),O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).apiCall=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props.addUserToState,r=n.props.btnText.toLowerCase(),t.preventDefault(),s="https://fierce-spire-28320.herokuapp.com/api/auth/".concat(r),e.next=6,fetch(s,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(n.state)}).then((function(e){return e.json()})).then((function(e){e.err?a(!1,{},{has:!0,message:e.err.message}):(a(!0,e,{has:!1,message:""}),localStorage.setItem("token",e.token),localStorage.setItem("password",e.password),localStorage.setItem("email",e.email),n.props.history.push("/"),console.log(e))})).then(n.setState({username:"",password:"",email:""}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={username:"",password:"",email:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(I.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props,t=e.signUp,a=e.btnText,n=e.error;return r.a.createElement("div",{className:"row justify-content-md-center text-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("form",{onSubmit:this.apiCall},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{required:!0,className:"form-control",type:"email",value:this.state.email,name:"email",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{required:!0,className:"form-control",type:"password",value:this.state.password,name:"password",onChange:this.handleChange}),t&&r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"username"),r.a.createElement("input",{required:!0,className:"form-control",type:"text",value:this.state.username,name:"username",onChange:this.handleChange})),n&&r.a.createElement("div",{className:"alert alert-danger"},n),r.a.createElement("button",{className:"btn btn-primary btn-block btn-lg",type:"submit"},a))))}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).sendMovie=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,r,s,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,r=a.userId,s=a.token,t.preventDefault(),o="api/users/".concat(r,"/movies"),e.next=5,fetch(o,{method:"POST",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(s)},body:JSON.stringify(n.state)}).then((function(e){return e.json()})).then(n.props.history.push("/"));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={name:"",description:"",movieImgUrl:""},n.sendMovie=n.sendMovie.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(I.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return!0===this.props.isLoggedIn?r.a.createElement("div",{className:"row justify-content-md-center text-center"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("form",{onSubmit:this.sendMovie},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.name,name:"name",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"description"},"description"),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.description,name:"description",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"movieImgUrl"},"movieImgUrl"),r.a.createElement("input",{className:"form-control",type:"text",value:this.state.movieImgUrl,name:"movieImgUrl",onChange:this.handleChange}),r.a.createElement("button",{className:"btn btn-primary btn-block btn-lg",type:"submit"},"Add")))):r.a.createElement("div",null,"Please Log in/Register to vie this page!")}}]),a}(n.Component),w=function(e){var t=e.isLoggedIn,a=e.addUserToState,n=e.username,s=e.userId,o=e.token,i=e.error;return r.a.createElement("div",{className:"container"},r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(y,Object.assign({userId:s,isLoggedIn:t,username:n,token:o},e))}}),r.a.createElement(E.a,{exact:!0,path:"/signin",render:function(e){return r.a.createElement(O,Object.assign({error:i,btnText:"Signin",isLoggedIn:t,addUserToState:a},e))}}),r.a.createElement(E.a,{exact:!0,path:"/register",render:function(e){return r.a.createElement(O,Object.assign({signUp:!0,error:i,btnText:"Register",isLoggedIn:t,addUserToState:a},e))}}),r.a.createElement(E.a,{exact:!0,path:"/movies",render:function(e){return r.a.createElement(S,Object.assign({isLoggedIn:t,userId:s,token:o,addUserToState:a},e))}})))},N=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).checkForUser=Object(l.a)(c.a.mark((function e(){var t,a,r,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"https://fierce-spire-28320.herokuapp.com/api/auth/signin",t=localStorage.getItem("email"),a=localStorage.getItem("password"),e.next=6,fetch("https://fierce-spire-28320.herokuapp.com/api/auth/signin",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t,a)});case 6:return r=e.sent,e.next=9,r.json();case 9:s=e.sent,n.setState({isLoggedIn:!0,user:s,error:{has:!1,message:""}}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),n.setState({isLoggedIn:!1,user:{},error:{has:!0,message:e.t0.message}}),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])}))),n.state={isLoggedIn:!1,user:{},error:{has:!1,message:""}},n.addUserToState=n.addUserToState.bind(Object(h.a)(n)),n.logOutUser=n.logOutUser.bind(Object(h.a)(n)),n.checkForUser=n.checkForUser.bind(Object(h.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){null!==localStorage.getItem("token")&&null!==localStorage.getItem("userId")&&this.checkForUser()}},{key:"addUserToState",value:function(e,t,a){this.setState({isLoggedIn:e,user:t,error:a}),console.log(this.state.error.message)}},{key:"logOutUser",value:function(){this.setState({isLoggedIn:!1,user:{},error:{has:!1,message:""}})}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,{isLoggedIn:this.state.isLoggedIn,addUserToState:this.addUserToState}),r.a.createElement(w,{addUserToState:this.addUserToState,error:this.state.error.message,username:this.state.user.username,isLoggedIn:this.state.isLoggedIn,userId:this.state.user.id,token:this.state.user.token})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.bcaf3be4.chunk.js.map