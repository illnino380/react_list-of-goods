(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r,s=n(3),a=n.n(s),o=n(4),c=n(5),i=n(8),u=n(6),l=n(7),d=n(1),b=n.n(d),j=(n(13),n(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"].map((function(t,e){return{goodName:t,id:e}}));function N(t,e,n){var s=Object(l.a)(t);return e!==r.NONE&&s.sort((function(t,n){var s=t.goodName,a=n.goodName;switch(e){case r.ALPABET:return s.localeCompare(a);case r.LENGTH:return s.length-a.length;default:return 0}})),n?s.reverse():s}!function(t){t[t.NONE=0]="NONE",t[t.ALPABET=1]="ALPABET",t[t.LENGTH=2]="LENGTH"}(r||(r={}));var h=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={isStarted:!1,isReversed:!1,sortType:r.NONE},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStarted,s=e.isReversed,a=e.sortType;return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("div",{className:"buttons",children:n?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{type:"button",className:"button",onClick:function(){return t.setState({sortType:r.ALPABET})},children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:"button",onClick:function(){return t.setState({sortType:r.LENGTH})},children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:"button",onClick:function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},children:"Reverse"}),Object(j.jsx)("button",{type:"button",className:" button is-danger is-light ",onClick:function(){return t.setState({isReversed:!1,sortType:r.NONE})},children:"Reset"})]}):Object(j.jsx)("button",{type:"button",className:" button is-primary is-large is-light ",onClick:function(){return t.setState({isStarted:!0})},children:"Start"})}),n&&Object(j.jsx)("ul",{className:"Goods",children:N(p,a,s).map((function(t){return Object(j.jsx)("li",{className:"Goods__item",children:t.goodName},t.id)}))})]})})}}]),n}(b.a.Component);a.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d476c63e.chunk.js.map