(this["webpackJsonpgoit-react-pg"]=this["webpackJsonpgoit-react-pg"]||[]).push([[0],{10:function(t,e,a){t.exports={message:"Notification_message__eciZi"}},19:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),s=a(6),o=a.n(s),i=a(7),r=a(8),l=a(9),d=a(12),u=a(11),b=a(4),j=a.n(b),g=a(0),p=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(g.jsx)("div",{className:j.a.optionsContainer,children:e.map((function(t){var e=t[0].toUpperCase()+t.slice(1);return Object(g.jsx)("button",{name:t,onClick:a,className:j.a.button,children:e},t)}))})},v=a(5),h=a.n(v),O=function(t){var e=t.title,a=t.children;return Object(g.jsxs)("section",{className:h.a.container,children:[e&&Object(g.jsx)("h2",{className:h.a.title,children:e}),a]})};O.defaultProps={title:""};var _=O,f=a(2),m=a.n(f),x=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,s=t.positivePercentage;return Object(g.jsxs)("ul",{className:m.a.statistics,children:[Object(g.jsxs)("li",{className:m.a.good,children:["Good: ",e]}),Object(g.jsxs)("li",{className:m.a.neutral,children:["Neutral: ",a]}),Object(g.jsxs)("li",{className:m.a.bad,children:["Bad: ",n]}),Object(g.jsx)("br",{}),Object(g.jsxs)("li",{className:m.a.total,children:["Total: ",c]}),Object(g.jsxs)("li",{className:m.a.positive,children:["Positive feedback: ",s,"%"]})]})};x.defaultProps={good:0,neutral:0,bad:0,total:0,positivePercentage:0};var k=x,N=a(10),F=a.n(N),P=function(t){var e=t.message;return Object(g.jsx)("p",{className:F.a.message,children:e})};P.defaultProps={message:"Nothing to review"};var S=P,y=function(t){Object(d.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.countFeedback=function(e){var a=e.currentTarget.name;t.setState((function(t){return Object(i.a)({},a,t[a]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.bad+e.good+e.neutral},t.countPositiveFeedbackPercentage=function(){var e=t.countTotalFeedback(),a=t.state.good;return 0===e||0===a?0:Math.round(100*a/e)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(_,{title:"Please leave feedback",children:Object(g.jsx)(p,{options:["good","neutral","bad"],onLeaveFeedback:this.countFeedback})}),Object(g.jsx)(_,{title:"Statistics",children:c?Object(g.jsx)(k,{good:e,neutral:a,bad:n,positivePercentage:s}):Object(g.jsx)(S,{message:"No feedback given"})})]})}}]),a}(n.Component);a(18);o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(y,{})}),document.getElementById("root"))},2:function(t,e,a){t.exports={statistics:"Statistics_statistics__2QFok",good:"Statistics_good__18zd4",neutral:"Statistics_neutral__3mDg3",bad:"Statistics_bad__1V8Qu"}},4:function(t,e,a){t.exports={optionsContainer:"FeedbackOptions_optionsContainer__you0v",button:"FeedbackOptions_button__3n-hy"}},5:function(t,e,a){t.exports={container:"Section_container__37ABw",title:"Section_title__2S6oE"}}},[[19,1,2]]]);
//# sourceMappingURL=main.07a1d174.chunk.js.map