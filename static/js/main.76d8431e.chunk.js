(this["webpackJsonpwould-u-rather"]=this["webpackJsonpwould-u-rather"]||[]).push([[0],{39:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n(21),r=n.n(a),s=n(12),c=(n(39),n(6)),i=n(7),u=n(9),l=n(8),d=n(4),j=n(5),h=n(10),b=n(34),p=n(2);var O={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://ui.dev/would-you-rather/sarah.jpg",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://tylermcginnis.com/would-you-rather/tyler.jpg",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://tylermcginnis.com/would-you-rather/dan.jpg",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},m={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};function v(e){return new Promise((function(t,n){var o=e.author,a=function(e){var t=e.optionOneText,n=e.optionTwoText,o=e.author;return{id:Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),timestamp:Date.now(),author:o,optionOne:{votes:[],text:t},optionTwo:{votes:[],text:n}}}(e);setTimeout((function(){m=Object(p.a)(Object(p.a)({},m),{},Object(h.a)({},a.id,a)),O=Object(p.a)(Object(p.a)({},O),{},Object(h.a)({},o,Object(p.a)(Object(p.a)({},O[o]),{},{questions:O[o].questions.concat([a.id])}))),t(a)}),1e3)}))}var x="ADD_QUESTION",f="RECEIVE_QUESTION",g="ADD_QUESTION_ANSWER";var w="RECEIVE_USER",y="ADD_USER_QUESTION",q="ADD_USER_ANSWER";var N=n(18),T=n.n(N);function U(){return function(e){return e(Object(N.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(p.a)({},m))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(p.a)({},O))}),1e3)}))]).then((function(e){var t=Object(b.a)(e,2),n=t[0];return{user:t[1],question:n}})).then((function(t){var n=t.user,o=t.question;e({type:f,questions:o}),e({type:w,users:n}),e(Object(N.hideLoading)())}))}}function k(e,t){return function(n,o){var a=o().authedUser;return v({optionOneText:e,optionTwoText:t,author:a}).then((function(e){console.log("question from reducer: ",e),n(function(e){return{type:x,question:e}}(e)),n(function(e,t){return{type:y,qid:e,authedUser:t}}(e.id,a))}))}}function S(e,t){return function(n,o){var a=o().authedUser;return console.log("shared debug",e,t),function(e){var t=e.authedUser,n=e.qid,o=e.answer;return new Promise((function(e,a){setTimeout((function(){O=Object(p.a)(Object(p.a)({},O),{},Object(h.a)({},t,Object(p.a)(Object(p.a)({},O[t]),{},{answers:Object(p.a)(Object(p.a)({},O[t].answers),{},Object(h.a)({},n,o))}))),m=Object(p.a)(Object(p.a)({},m),{},Object(h.a)({},n,Object(p.a)(Object(p.a)({},m[n]),{},Object(h.a)({},o,Object(p.a)(Object(p.a)({},m[n][o]),{},{votes:m[n][o].votes.concat([t])}))))),e()}),500)}))}({authedUser:a,qid:e,answer:t}).then((function(){n(function(e,t,n){return{type:g,authedUSer:e,qid:t,answer:n}}(a,e,t)),n(function(e,t,n){return{type:q,authedUser:e,qid:t,answer:n}}(a,e,t))}))}}var A="SET_AUTHED_USER",C="UNSET_AUTHED_USER";function E(e){return{type:A,id:e}}function F(){return{type:C}}var z=n(1),R=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={selectedUser:""},e.handleChangeSelection=function(t){t.preventDefault(),e.setState({selectedUser:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.selectedUser?e.props.dispatch(E(e.state.selectedUser)):alert("Please logi with a valid user!")},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.users;return Object(z.jsxs)("div",{children:[Object(z.jsx)("h3",{className:"login-header",children:"Who Are You?"}),Object(z.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(z.jsxs)("select",{defaultValue:"",onChange:this.handleChangeSelection,className:"login-selector",children:[Object(z.jsx)("option",{value:"",disabled:!0,children:" Select a User "}),Object.keys(e).map((function(e){return Object(z.jsxs)("option",{value:e,children:[" ",e," "]},e)}))]}),Object(z.jsx)("button",{className:"login-btn btn",children:" Submit "})]})]})}}]),n}(o.Component);var D=Object(j.connect)((function(e){return{users:e.user}}))(R),L=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleLogout=function(){e.props.dispatch(F())},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(z.jsx)(o.Fragment,{children:Object(z.jsx)(s.b,{to:"/",onClick:this.handleLogout,className:"link",children:"Logout"})})}}]),n}(o.Component),_=Object(d.f)(Object(j.connect)()(L)),I=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authedUser,n=e.users;return console.log("avatar is: ",n[t].avatarURL),Object(z.jsxs)("div",{className:"nav-bar",children:[Object(z.jsx)(s.c,{to:"/",exact:!0,className:"title",children:"Would You Rather"}),Object(z.jsxs)("div",{className:"right-portion",children:[Object(z.jsx)(s.c,{to:"/leaderboard",exact:!0,className:"link",activeClassName:"link-active",children:"Leaderboard"}),Object(z.jsx)(s.c,{to:"/add",exact:!0,className:"link",activeClassName:"link-active",children:"Add a Question"}),Object(z.jsx)("div",{className:"img-container navbar-img",children:Object(z.jsx)("img",{src:n[t].avatarURL,alt:"".concat(n[t].name,"'s Image"),className:"img"})}),n[t].name,Object(z.jsx)(_,{})]}),Object(z.jsx)("hr",{className:"horizontal-line"})]})}}]),n}(o.Component);var Q=Object(j.connect)((function(e){return{authedUser:e.authedUser,users:e.user}}))(I),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(t){var n=t.target.getAttribute("option-one-text"),o=t.target.getAttribute("option-two-text"),a=t.target.getAttribute("answer"),r=t.target.getAttribute("qid");e.props.history.push({pathname:"/questions/".concat(r),state:{optionOneText:n,optionTwoText:o,answer:a,qid:r}})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.qid,n=e.questions,o=e.ans,a=n[t].optionOne.text,r=n[t].optionTwo.text;return Object(z.jsxs)("div",{className:"question-container",children:[Object(z.jsx)("h4",{className:"cursor-pointer",onClick:this.handleClick,qid:t,answer:o,"option-one-text":a,"option-two-text":r,children:" Would You rather: "}),Object(z.jsxs)("ul",{children:[Object(z.jsxs)("li",{className:o===a?"active-answer":"",children:[" ",a," "]}),Object(z.jsxs)("li",{className:o===r?"active-answer":"",children:[" ",r," "]})]})]})}}]),n}(o.Component),W=Object(d.f)(P),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={toggle:"unanswered"},e.handleToggle=function(t){e.setState({toggle:"unanswered"===e.state.toggle?"answered":"unanswered"},(function(){t.target.disabled=!0})),document.querySelector(".".concat(e.state.toggle)).disabled=!1},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){document.querySelector(".unanswered").disabled=!0}},{key:"render",value:function(){var e=this.props,t=e.questions,n=e.authedUser,a=Object.keys(t).filter((function(e){return t[e].optionOne.votes.includes(n)||t[e].optionTwo.votes.includes(n)})),r=Object.keys(t).filter((function(e){return!a.includes(e)}));return a.sort((function(e,n){return t[e].timestamp>t[n].timestamp?-1:1})),r.sort((function(e,n){return t[e].timestamp>t[n].timestamp?-1:1})),Object(z.jsxs)(o.Fragment,{children:[Object(z.jsx)(Q,{}),Object(z.jsxs)("div",{className:"toggle-btns",children:[Object(z.jsx)("button",{className:"toggle-btn answered",onClick:this.handleToggle,children:" Answered Questions: "}),Object(z.jsx)("button",{className:"toggle-btn unanswered",onClick:this.handleToggle,children:" Unanswered Questions: "})]}),"answered"===this.state.toggle?a.map((function(e){return Object(z.jsx)(W,{qid:e,questions:t,ans:t[e].optionOne.votes.includes(n)?t[e].optionOne.text:t[e].optionTwo.text},e)})):r.map((function(e){return Object(z.jsx)(W,{qid:e,questions:t,ans:"no"},e)}))]})}}]),n}(o.Component);var H=Object(j.connect)((function(e){return{questions:e.question,authedUser:e.authedUser}}))(M),Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleHome=function(){e.props.history.push("/")},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(z.jsxs)("div",{children:[Object(z.jsx)("h1",{children:"404, Not Found!"}),Object(z.jsx)("a",{onClick:this.handleHome,className:"btn",children:" Go Home "})]})}}]),n}(o.Component),J=Object(d.f)(Y),B=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleAnswer=function(t){var n=t.target.textContent.trim(),o=e.props,a=o.dispatch,r=o.authedUser,s=e.props.location.state,c=s.optionOneText,i=s.optionTwoText,u=s.qid,l=e.props.questions,d="";n===c?d="optionOne":n===i&&(d="optionTwo"),console.log("answer is: ",l[u][d].text),l[u][d].votes.push(r),a(S(u,d)),e.props.history.replace({pathname:"/questions/".concat(u),state:{optionOneText:c,optionTwoText:i,answer:l[u][d].text,qid:u}})},e}return Object(i.a)(n,[{key:"render",value:function(){var e,t,n,a,r,s;if(!this.props.location.state)return Object(z.jsx)(J,{});var c=this.props.location.state,i=c.optionOneText,u=c.optionTwoText,l=c.answer,d=c.qid,j=this.props,h=j.questions,b=j.users,p=null===(e=h[d])||void 0===e||null===(t=e.optionOne)||void 0===t||null===(n=t.votes)||void 0===n?void 0:n.length,O=null===(a=h[d])||void 0===a||null===(r=a.optionTwo)||void 0===r||null===(s=r.votes)||void 0===s?void 0:s.length,m=p/(p+O)*100,v=O/(p+O)*100;return Object(z.jsxs)(o.Fragment,{children:[Object(z.jsx)(Q,{}),Object(z.jsxs)("div",{className:"question-container",children:[Object(z.jsxs)("h4",{className:"answer-question-header",children:[" Would You rather:",Object(z.jsxs)("span",{className:"question-asker",children:[" Asked by:",Object(z.jsx)("div",{className:"img-container move-right",children:Object(z.jsx)("img",{src:b[h[d].author].avatarURL,alt:"".concat(b[h[d].author].name,"'s Image"),className:"img"})})]})]}),l===i&&Object(z.jsxs)(o.Fragment,{children:[Object(z.jsxs)("button",{disabled:!0,className:"answer-option cursor-pointer active-chosen-answer",children:[" ",i," "]}),Object(z.jsxs)("button",{disabled:!0,className:"answer-option cursor-pointer ",children:[" ",u," "]}),Object(z.jsxs)("div",{children:[" First Option ",Object(z.jsxs)("span",{className:"different-color-text",children:[" (",m.toFixed(1),"%) "]})," / Second Option ",Object(z.jsxs)("span",{className:"different-color-text",children:[" (",v.toFixed(1),"%)"]})," "]}),Object(z.jsxs)("div",{children:[" First Option: ",Object(z.jsxs)("span",{className:"different-color-text",children:[" ",p," votes"]})," / Second Option: ",Object(z.jsxs)("span",{className:"different-color-text",children:[" ",O," votes"]})," "]})]}),l===u&&Object(z.jsxs)(o.Fragment,{children:[Object(z.jsxs)("button",{disabled:!0,className:"answer-option cursor-pointer ",children:[" ",i," "]}),Object(z.jsxs)("button",{disabled:!0,className:"answer-option cursor-pointer active-chosen-answer",children:[" ",u," "]}),Object(z.jsxs)("div",{children:[" First Option ",Object(z.jsxs)("span",{className:"different-color-text",children:[" (",m.toFixed(1),"%) "]})," / Second Option ",Object(z.jsxs)("span",{className:"different-color-text",children:[" (",v.toFixed(1),"%)"]})," "]}),Object(z.jsxs)("div",{children:[" First Option: ",Object(z.jsxs)("span",{className:"different-color-text",children:[" ",p," votes"]})," / Second Option: ",Object(z.jsxs)("span",{className:"different-color-text",children:[" ",O," votes"]})," "]})]}),l!==i&&l!==u&&Object(z.jsxs)(o.Fragment,{children:[Object(z.jsxs)("button",{className:"answer-option cursor-pointer answer-option-hover",onClick:this.handleAnswer,children:[" ",i," "]}),Object(z.jsxs)("button",{className:"answer-option cursor-pointer answer-option-hover",onClick:this.handleAnswer,children:[" ",u," "]})]})]})]})}}]),n}(o.Component);var V=Object(d.f)(Object(j.connect)((function(e){return{questions:e.question,authedUser:e.authedUser,users:e.user}}))(B)),G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={optionOne:"",optionTwo:""},e.handleOptionOne=function(t){e.setState({optionOne:t.target.value})},e.handleOptionTwo=function(t){e.setState({optionTwo:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var n=e.props.dispatch,o=e.state;n(k(o.optionOne,o.optionTwo)),e.props.history.push("/")},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(z.jsxs)(o.Fragment,{children:[Object(z.jsx)(Q,{}),Object(z.jsx)("div",{className:"add-question-card",children:Object(z.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(z.jsx)("h3",{className:"add-question-header",children:" Would You Rather: "}),Object(z.jsx)("label",{htmlFor:"o1",className:"add-question-label",children:"Option One"}),Object(z.jsx)("input",{className:"add-question-input",onChange:this.handleOptionOne,type:"text",name:"optionOne",id:"o1"}),Object(z.jsx)("label",{className:"add-question-label",htmlFor:"o2",children:"Option Two"}),Object(z.jsx)("input",{className:"add-question-input",onChange:this.handleOptionTwo,type:"text",name:"optionTwo",id:"o2"}),Object(z.jsx)("button",{className:"btn add-question-btn",children:" Submit "})]})})]})}}]),n}(o.Component),$=Object(d.f)(Object(j.connect)()(G)),K=n(27),X=n.n(K),Z=n(32),ee=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={userScore:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(Z.a)(X.a.mark((function e(){var t,n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.users,n=[],Object.keys(t).map((function(e){return n.push([t[e].questions.length+Object.keys(t[e].answers).length,e])})),n.sort().reverse(),e.next=6,this.setState({userScore:n});case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.userScore,t=this.props.users;return console.log(e),Object(z.jsxs)(o.Fragment,{children:[Object(z.jsx)(Q,{}),e.map((function(e,n){return Object(z.jsxs)("div",{className:"leaderboard-card",children:[Object(z.jsxs)("div",{className:"leaderboard-card-number",children:[" ",n+1," "]}),Object(z.jsxs)("div",{children:[" Name: ",t[e[1]].name," "]}),Object(z.jsxs)("div",{children:[" Question Asked: ",t[e[1]].questions.length]}),Object(z.jsxs)("div",{children:[" Question Answered: ",Object.keys(t[e[1]].answers).length]}),Object(z.jsx)("div",{className:"leaderboard-img-container",children:Object(z.jsx)("img",{src:t[e[1]].avatarURL,alt:"".concat(t[e[1]].name,"'s Image"),className:"img"})})]},e[1])}))]})}}]),n}(o.Component);var te=Object(j.connect)((function(e){return{users:e.user,authedUser:e.authedUser}}))(ee),ne=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(U())}},{key:"render",value:function(){var e=this.props.authedUser;return Object(z.jsxs)(o.Fragment,{children:[Object(z.jsx)(T.a,{}),Object(z.jsxs)(d.c,{children:[null===e?Object(z.jsx)(d.a,{component:D}):Object(z.jsxs)(o.Fragment,{children:[Object(z.jsx)(d.a,{exact:!0,path:"/",component:H}),Object(z.jsx)(d.a,{exact:!0,path:"/questions/:id",component:V}),Object(z.jsx)(d.a,{exact:!0,path:"/add",component:$}),Object(z.jsx)(d.a,{exact:!0,path:"/leaderboard",component:te})]}),Object(z.jsx)(d.a,{component:J})]})]})}}]),n}(o.Component);var oe=Object(j.connect)((function(e){return{authedUser:e.authedUser}}))(ne),ae=n(33),re=n(16),se=Object(re.a)(ae.a,(function(e){return function(t){return function(n){console.group(n.type),console.log("The action is: ",n);var o=t(n);return console.log("The new state is: ",e.getState()),console.groupEnd(),o}}}));var ce=Object(re.c)({authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type===A?t.id:t.type===C?null:e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===q){var n=t.authedUser,o=t.qid,a=t.answer;return Object(p.a)(Object(p.a)({},e),{},Object(h.a)({},n,Object(p.a)(Object(p.a)({},e[n]),{},{answers:Object(p.a)(Object(p.a)({},e[n].answers),{},Object(h.a)({},o,a))})))}if(t.type===y){var r=t.qid,s=t.authedUser;return Object(p.a)(Object(p.a)({},e),{},Object(h.a)({},s,Object(p.a)(Object(p.a)({},e[s]),{},{questions:e[s].questions.concat([r])})))}return t.type===w?Object(p.a)(Object(p.a)({},e),t.users):e},question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(t.type===x)return Object(p.a)(Object(p.a)({},e),{},Object(h.a)({},t.question.id,t.question));if(t.type===g){var n=t.authedUser,o=t.qid,a=t.answer;return Object(p.a)(Object(p.a)({},e),{},Object(h.a)({},o,Object(p.a)(Object(p.a)({},e[o]),{},Object(h.a)({},a,Object(p.a)(Object(p.a)({},e[o][a]),{},{votes:e[o][a].votes.concat(n)})))))}return t.type===f?Object(p.a)(Object(p.a)({},e),t.questions):e},loadingBar:N.loadingBarReducer}),ie=Object(re.d)(ce,se);r.a.render(Object(z.jsx)(j.Provider,{store:ie,children:Object(z.jsx)(s.a,{children:Object(z.jsx)(oe,{})})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.76d8431e.chunk.js.map