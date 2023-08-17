"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[313],{313:function(A,n,t){t.r(n),t.d(n,{default:function(){return B}});var e,r,i,o,a,c,l,s,j=t(439),d=t(791),x=t(689),u=t(850),g=t(168),p=t(444),f=t(87),m=p.ZP.button(e||(e=(0,g.Z)(["\n  border: none;\n  background-color: transparent;\n  margin: 20px 0 0 35px;\n  padding: 0;\n  font-weight: 700;\n  cursor: pointer;\n"]))),v=p.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  padding: 30px;\n  background-color: #3f51b542;\n  margin: 20px 30px 30px;\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n"]))),y=p.ZP.img(i||(i=(0,g.Z)(["\n  width: 300px;\n"]))),E=p.ZP.div(o||(o=(0,g.Z)(["\n  padding-left: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),Z=p.ZP.h2(a||(a=(0,g.Z)(["\n  margin-left: 0;\n"]))),w=p.ZP.h3(c||(c=(0,g.Z)(["\n  margin-left: 35px;\n  margin-bottom: 0;\n  color: #323a37;\n"]))),h=p.ZP.ul(l||(l=(0,g.Z)(["\n  text-decoration: none;\n  margin-left: 0;\n  margin-top: 0;\n  color: #323a37;\n"]))),M=(0,p.ZP)(f.OL)(s||(s=(0,g.Z)(["\n  text-decoration: none;\n  color: black;\n  text-decoration: none;\n  font-weight: 600;\n  &.active {\n    color: #323a37;\n    font-weight: 700;\n    transform: scale(1.1);\n"]))),I=t(184),B=function(){var A,n,t,e,r=(0,d.useState)(null),i=(0,j.Z)(r,2),o=i[0],a=i[1],c=(0,x.UO)().movieId,l=(0,x.TH)(),s=(0,x.s0)(),g=null!==(A=null===(n=l.state)||void 0===n?void 0:n.from)&&void 0!==A?A:"/movies",p=null!==o&&void 0!==o?o:{},f=p.poster,B=p.title,k=p.releaseYear,b=p.userScore,Q=p.overview,S=p.genres;(0,d.useEffect)((function(){(0,u.Y5)(c).then(a)}),[c]);return(0,I.jsxs)("div",{children:[(0,I.jsx)(m,{type:"button",onClick:function(){s(g)},children:"Back to movies"}),o&&(0,I.jsxs)("div",{children:[(0,I.jsxs)(v,{children:[(0,I.jsx)(y,{src:f,alt:B}),(0,I.jsxs)(E,{children:[(0,I.jsxs)(Z,{children:[B," (",k,")"]}),(0,I.jsxs)("p",{children:["User Score: ",b,"%"]}),(0,I.jsx)("h3",{children:"Overview"}),(0,I.jsx)("p",{children:Q}),(0,I.jsx)("h3",{children:"Genres"}),(0,I.jsx)("p",{children:S.map((function(A){return A.name})).join(" ")})]})]}),(0,I.jsx)(w,{children:"Additional information"}),(0,I.jsxs)(h,{children:[(0,I.jsx)("li",{children:(0,I.jsx)(M,{to:"cast",state:{from:null===l||void 0===l||null===(t=l.state)||void 0===t?void 0:t.from},children:"Cast"})}),(0,I.jsx)("li",{children:(0,I.jsx)(M,{to:"reviews",state:{from:null===l||void 0===l||null===(e=l.state)||void 0===e?void 0:e.from},children:"Reviews"})})]}),(0,I.jsx)(x.j3,{})]})]})}},850:function(A,n,t){t.d(n,{Hq:function(){return l},xc:function(){return j},Y5:function(){return s},Hx:function(){return d},Tg:function(){return c}});var e=t(861),r=t(757),i=t.n(r),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"d49e0110fba862765bd35e51be725d3a"};var a="https://image.tmdb.org/t/p/w500",c=function(){var A=(0,e.Z)(i().mark((function A(){return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",o.Z.get("/trending/all/week?").then((function(A){return A.data.results.map((function(A){var n=A.id,t=A.title,e=A.poster_path;return{id:n,title:t,poster:a+e}}))})));case 1:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),l=function(){var A=(0,e.Z)(i().mark((function A(n){return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",o.Z.get("/search/movie?query=".concat(n)).then((function(A){return A.data.results.map((function(A){var n=A.id,t=A.title,e=A.poster_path;return{id:n,title:t,poster:a+e}}))})));case 1:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),s=function(A){return o.Z.get("/movie/".concat(A,"?")).then((function(A){var n=A.data,t=n.id,e=n.poster_path,r=n.title,i=n.release_date,o=n.vote_average,c=n.overview,l=n.genres;return{id:t,poster:a+e,title:r,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*o),overview:c,genres:l}}))},j=function(A){return o.Z.get("/movie/".concat(A,"/credits?")).then((function(A){return A.data.cast.map((function(A){var n=A.id,t=A.name,e=A.character,r=A.profile_path;return{id:n,name:t,character:e,photo:r?a+r:"data:image/jpeg;base64,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"}}))}))},d=function(A){return o.Z.get("/movie/".concat(A,"/reviews?")).then((function(A){return A.data.results.map((function(A){return{id:A.id,author:A.author,content:A.content}}))}))}}}]);
//# sourceMappingURL=313.1f4be3cd.chunk.js.map