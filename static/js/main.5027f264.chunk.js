(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),d=n(3),r=n.n(d),i=(n(12),n(4)),o=n(5),s=n(7),l=n(6),u=n(0);function j(e){var t=e.title,n=e.children;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:t}),n]})}n(14);function b(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,d=e.positivePercentage;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Statistics"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Good:",t]}),Object(u.jsxs)("li",{children:["Neutral:",n]}),Object(u.jsxs)("li",{children:["Bad:",c]}),Object(u.jsxs)("li",{children:["Total:",a]}),Object(u.jsxs)("li",{children:["Positive feedback:",d,"%"]})]})]})}n(15);function h(e){var t=e.OnAddBad,n=e.OnAddGood,c=e.OnAddNeutral;return Object(u.jsx)("div",{children:Object(u.jsxs)("ul",{className:"listButton",children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:n,children:"Good"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:c,children:"Neutral"})}),Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:t,children:"Bad"})})]})})}function O(e){var t=e.message;return Object(u.jsx)("p",{children:t})}var f=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),d=0;d<c;d++)a[d]=arguments[d];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.addGood=function(){e.setState((function(e){return{good:e.good+1}}))},e.addBad=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.addNeutral=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.bad+t.neutral},e.countPositiveFeedbackPercentage=function(t){return e.state.good/t*100},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.bad,c=e.neutral,a=this.countTotalFeedback();return Object(u.jsxs)(j,{title:"Please leave feedback",children:[Object(u.jsx)(h,{OnAddBad:this.addBad,OnAddGood:this.addGood,OnAddNeutral:this.addNeutral}),0===a?Object(u.jsx)(O,{message:"No feedback given"}):Object(u.jsx)(b,{good:t,bad:n,neutral:c,total:a,positivePercentage:a?Math.round(this.countPositiveFeedbackPercentage(a)):0})]})}}]),n}(c.Component),x=f;r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5027f264.chunk.js.map