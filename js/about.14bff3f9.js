(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2e5a":function(t,e,n){},"4ef5":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("AppChangeSymbol"),n("AppLogList")],1)},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticClass:"title"},[t._v("Журнал")]),n("ul",{staticClass:"log-list"},t._l(t.readLogger,(function(e){return n("li",{staticClass:"log-list__item"},[t._v(t._s(e))])})),0)])},i=[],l={name:"AppLogList",computed:{readLogger:function(){return this.$store.getters.getLogger}}},c=l,r=(n("f639"),n("2877")),u=Object(r["a"])(c,a,i,!1,null,"7d3b3cf5",null),p=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper"},[n("span",{staticClass:"title"},[t._v("Выберите валюту: ")]),n("ul",{staticClass:"dropdown"},[n("li",[t._v(t._s(t.curentSymbol)+" "),n("ul",{staticClass:"dropdown__items"},t._l(t.symbols,(function(e){return n("li",{staticClass:"dropdown__element",on:{click:function(n){return t.changeSymbol(e)}}},[t._v(t._s(e))])})),0)])])])},m=[],f={name:"AppChangeSymbol",data:function(){return{symbols:["BTCUSDT","BNBBTC","ETHBTC"]}},methods:{changeSymbol:function(t){this.$store.commit("changeSymbol",t),this.$store.commit("logger",t)}},computed:{curentSymbol:function(){return this.$store.getters.getCurentSymbol}}},g=f,_=(n("ad3a"),Object(r["a"])(g,d,m,!1,null,"a183c198",null)),b=_.exports,C={components:{AppLogList:p,AppChangeSymbol:b}},h=C,v=(n("5141"),Object(r["a"])(h,s,o,!1,null,"b6119020",null));e["default"]=v.exports},5141:function(t,e,n){"use strict";n("a004")},a004:function(t,e,n){},a6dd:function(t,e,n){},ad3a:function(t,e,n){"use strict";n("a6dd")},f639:function(t,e,n){"use strict";n("2e5a")}}]);
//# sourceMappingURL=about.14bff3f9.js.map