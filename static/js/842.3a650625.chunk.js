"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{713:function(t,n,r){r.d(n,{Df:function(){return i},r3:function(){return f},tx:function(){return d},z1:function(){return o},zv:function(){return l}});var e=r(861),a=r(757),u=r.n(a),c=r(243).Z.create({baseURL:"https://api.themoviedb.org/3/",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjA1ODRjY2MyNGUzOGUwODY2MjhiZDYxMGQyYjUwOSIsInN1YiI6IjY0NzUwZTMyMWJmMjY2MDQzZDJmYTNkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8iMn_9jzMLQ6tsrySBCRE-qg_BgMVvp1Gubh2TkRYtk"}});function i(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("trending/all/day");case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("search/movie?query=".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(n,"/credits"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(n,"/reviews"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},842:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(861),a=r(757),u=r.n(a),c=r(713),i=r(791),s=r(87),o=r(184);function p(t){var n=t.movies,r=t.setMovies;return(0,i.useEffect)((function(){function t(){return(t=(0,e.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.Df)(n);case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n,r]),(0,o.jsx)("div",{children:(0,o.jsx)("ul",{children:n.results.map((function(t,n){return(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"/movies/".concat(t.id),state:{prevUrl:"/home"},children:t.original_title?t.original_title:t.original_name})},n)}))})})}}}]);
//# sourceMappingURL=842.3a650625.chunk.js.map