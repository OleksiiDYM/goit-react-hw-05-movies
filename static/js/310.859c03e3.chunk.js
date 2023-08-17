"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{310:function(A,n,t){t.r(n),t.d(n,{default:function(){return R}});var r,e,i,o,a,c,p,x,s,u=t(861),g=t(439),d=t(757),l=t.n(d),j=t(791),f=t(87),y=t(689),m=t(850),h=t(168),w=t(444),Z=w.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),b=w.ZP.form(e||(e=(0,h.Z)(["\n    margin-top: 5px;\n    max-width: 600px;\n    display: flex;\n    jastyfy-contenr: center\n    max-width: 600px;;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n}"]))),E=w.ZP.input(i||(i=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    color: #323a37;\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),M=w.ZP.button(o||(o=(0,h.Z)(["\n  display: inline-block;\n  border: 0;\n  //   background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  color: #323a37;\n  &:hover {\n    opacity: 1;\n  }\n"]))),v=w.ZP.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n"]))),k=w.ZP.li(c||(c=(0,h.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;\n  }\n"]))),I=(0,w.ZP)(f.rU)(p||(p=(0,h.Z)(["\n  text-decoration: none;\n"]))),B=w.ZP.img(x||(x=(0,h.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),Q=w.ZP.div(s||(s=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: #323a37;\n"]))),S=t(184),R=function(){var A=(0,j.useState)(""),n=(0,g.Z)(A,2),t=n[0],r=n[1],e=(0,j.useState)([]),i=(0,g.Z)(e,2),o=i[0],a=i[1],c=(0,f.lr)(""),p=(0,g.Z)(c,2),x=p[0],s=p[1],d=(0,y.TH)(),h=x.get("query");(0,j.useEffect)((function(){h&&(0,m.Hq)(h).then(a)}),[h]);var w=function(){var A=(0,u.Z)(l().mark((function A(n){var e;return l().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return n.preventDefault(),A.next=3,(0,m.Hq)(t);case 3:e=A.sent,a(e),0===e.length&&alert("Sorry, we do not find any movie"),s({query:t}),r("");case 8:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Z,{children:(0,S.jsxs)(b,{onSubmit:w,children:[(0,S.jsx)(E,{type:"text",value:t,onChange:function(A){r(A.target.value)}}),(0,S.jsx)(M,{type:"submit",children:"search"})]})}),o.length>0&&(0,S.jsx)(v,{children:o.map((function(A){var n=A.id,t=A.title,r=A.poster;return(0,S.jsx)(k,{children:(0,S.jsxs)(I,{to:"/movies/".concat(n),state:{from:d},children:[(0,S.jsx)(B,{src:r,alt:t}),(0,S.jsx)(Q,{children:(0,S.jsx)("h3",{children:t})})]})},n)}))})]})}},850:function(A,n,t){t.d(n,{Hq:function(){return p},xc:function(){return s},Y5:function(){return x},Hx:function(){return u},Tg:function(){return c}});var r=t(861),e=t(757),i=t.n(e),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"d49e0110fba862765bd35e51be725d3a"};var a="https://image.tmdb.org/t/p/w500",c=function(){var A=(0,r.Z)(i().mark((function A(){return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",o.Z.get("/trending/all/week?").then((function(A){return A.data.results.map((function(A){var n=A.id,t=A.title,r=A.poster_path;return{id:n,title:t,poster:a+r}}))})));case 1:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),p=function(){var A=(0,r.Z)(i().mark((function A(n){return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",o.Z.get("/search/movie?query=".concat(n)).then((function(A){return A.data.results.map((function(A){var n=A.id,t=A.title,r=A.poster_path;return{id:n,title:t,poster:a+r}}))})));case 1:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),x=function(A){return o.Z.get("/movie/".concat(A,"?")).then((function(A){var n=A.data,t=n.id,r=n.poster_path,e=n.title,i=n.release_date,o=n.vote_average,c=n.overview,p=n.genres;return{id:t,poster:a+r,title:e,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*o),overview:c,genres:p}}))},s=function(A){return o.Z.get("/movie/".concat(A,"/credits?")).then((function(A){return A.data.cast.map((function(A){var n=A.id,t=A.name,r=A.character,e=A.profile_path;return{id:n,name:t,character:r,photo:e?a+e:"data:image/jpeg;base64,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"}}))}))},u=function(A){return o.Z.get("/movie/".concat(A,"/reviews?")).then((function(A){return A.data.results.map((function(A){return{id:A.id,author:A.author,content:A.content}}))}))}}}]);
//# sourceMappingURL=310.859c03e3.chunk.js.map