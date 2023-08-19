"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[302],{1454:function(A,n,t){t.d(n,{Z:function(){return c}});var r,e=t(8402),i=t(168),a=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  position: relative;\n  top: 10vh;\n"]))),o=t(184),c=function(){return(0,o.jsx)(a,{children:(0,o.jsx)(e.s5,{strokeColor:"#3f51b590",strokeWidth:"5",animationDuration:"0.75",width:"150",visible:!0})})}},6368:function(A,n,t){t.d(n,{O:function(){return a}});var r=t(7689),e=t(1077),i=t(184),a=function(A){var n=A.movies,t=(0,r.TH)();return(0,i.jsx)(e.eW,{children:n.map((function(A){var n=A.id,r=A.title,a=A.poster;return(0,i.jsx)(e.H2,{children:(0,i.jsxs)(e.up,{to:"/movies/".concat(n),state:{from:t},children:[(0,i.jsx)(e.Ei,{src:a,alt:r}),(0,i.jsx)(e.rS,{children:(0,i.jsx)("h3",{children:r})})]})},n)}))})}},9544:function(A,n,t){t.r(n);var r=t(5861),e=t(9439),i=t(7757),a=t.n(i),o=t(2791),c=t(7353),u=t(1454),s=t(6368),p=t(1077),x=t(184);n.default=function(){var A=(0,o.useState)([]),n=(0,e.Z)(A,2),t=n[0],i=n[1],g=(0,o.useState)(!1),j=(0,e.Z)(g,2),l=j[0],d=j[1],f=(0,o.useState)(null),m=(0,e.Z)(f,2),y=m[0],w=m[1];return(0,o.useEffect)((function(){d(!0);var A=function(){var A=(0,r.Z)(a().mark((function A(){var n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,c.Tg)();case 3:n=A.sent,i(n),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),w(A.t0.message);case 10:return A.prev=10,d(!1),A.finish(10);case 13:case"end":return A.stop()}}),A,null,[[0,7,10,13]])})));return function(){return A.apply(this,arguments)}}();A()}),[]),(0,x.jsxs)(p.l3,{children:[(0,x.jsx)(p.eA,{children:"Tranding this week"}),l&&(0,x.jsx)(u.Z,{}),y&&(0,x.jsx)("p",{children:"Oops, something went wrong..."}),t.length>0&&(0,x.jsx)(s.O,{movies:t})]})}},1077:function(A,n,t){t.d(n,{Ei:function(){return m},H2:function(){return d},eA:function(){return j},eW:function(){return l},l3:function(){return g},rS:function(){return y},up:function(){return f}});var r,e,i,a,o,c,u,s=t(168),p=t(6444),x=t(1087),g=p.ZP.div(r||(r=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n  }\n"]))),j=p.ZP.h1(e||(e=(0,s.Z)(["\n  font-weight: 700;\n  color: #323a37;\n  \n  margin: 30px, 0;\n  text-decoration: none;\n  }\n"]))),l=p.ZP.ul(i||(i=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n"]))),d=p.ZP.li(a||(a=(0,s.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;\n  }\n"]))),f=(0,p.ZP)(x.rU)(o||(o=(0,s.Z)(["\n  text-decoration: none;\n"]))),m=p.ZP.img(c||(c=(0,s.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),y=p.ZP.div(u||(u=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: #323a37;\n"])))},7353:function(A,n,t){t.d(n,{Hq:function(){return s},xc:function(){return x},Y5:function(){return p},Hx:function(){return g},Tg:function(){return u}});var r=t(5861),e=t(7757),i=t.n(e),a=t(1243),o=t.p+"static/media/defaultMovie.e1ce751ef1b590f719f9.jpg";a.Z.defaults.baseURL="https://api.themoviedb.org/3",a.Z.defaults.params={api_key:"d49e0110fba862765bd35e51be725d3a"};var c="https://image.tmdb.org/t/p/w500",u=function(){var A=(0,r.Z)(i().mark((function A(){return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",a.Z.get("/trending/all/week?").then((function(A){return A.data.results.map((function(A){var n=A.id,t=A.title,r=A.poster_path;return{id:n,title:t,poster:c+r}}))})));case 1:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),s=function(){var A=(0,r.Z)(i().mark((function A(n){return i().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.abrupt("return",a.Z.get("/search/movie?query=".concat(n)).then((function(A){return A.data.results.map((function(A){var n=A.id,t=A.title,r=A.poster_path;return{id:n,title:t,poster:r?c+r:o}}))})));case 1:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),p=function(A){return a.Z.get("/movie/".concat(A,"?")).then((function(A){var n=A.data,t=n.id,r=n.poster_path,e=n.title,i=n.release_date,a=n.vote_average,o=n.overview,u=n.genres;return{id:t,poster:c+r,title:e,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*a),overview:o,genres:u}}))},x=function(A){return a.Z.get("/movie/".concat(A,"/credits?")).then((function(A){return A.data.cast.map((function(A){var n=A.id,t=A.name,r=A.character,e=A.profile_path;return{id:n,name:t,character:r,photo:e?c+e:"data:image/jpeg;base64,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"}}))}))},g=function(A){return a.Z.get("/movie/".concat(A,"/reviews?")).then((function(A){return A.data.results.map((function(A){return{id:A.id,author:A.author,content:A.content}}))}))}}}]);
//# sourceMappingURL=302.74961000.chunk.js.map