(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],u=0,p=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);h&&h(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},s={app:0},r=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"40f5691b","chunk-27de323f":"b4df36ba","chunk-2d20791d":"d85fef3b","chunk-3525cca0":"22864607","chunk-42654662":"dbac087d"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-27de323f":1,"chunk-3525cca0":1,"chunk-42654662":1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-27de323f":"af71fc1d","chunk-2d20791d":"31d6cfe0","chunk-3525cca0":"87a0d380","chunk-42654662":"bc47526b"}[t]+".css",s=c.p+n,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var l=r[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===s))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){l=p[o],u=l.getAttribute("data-href");if(u===n||u===s)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var n=e&&e.target&&e.target.src||s,r=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete i[t],h.parentNode.removeChild(h),a(r)},h.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){i[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(h);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",p.name="ChunkLoadError",p.type=n,p.request=i,a[1](p)}s[t]=void 0}};var h=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var h=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1395:function(t,e,a){},3524:function(t,e,a){},4805:function(t,e,a){"use strict";a("8ce0")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.$route.metahideHead?t._e():a("TopNav"),t.playMusice?a("Play",{attrs:{musicList:t.musicList,playMusice:t.playMusice},on:{play:t.changeMusic}}):t._e(),a("transition",{attrs:{"enter-active-class":"animate_animated animate__backInDown","leave-active-class":"animate_animated animate__backOutDown"}},[a("router-view",{on:{play:t.playMusic}})],1)],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"topNav"},[a("li",[a("router-link",{attrs:{to:"/recommend"}},[a("van-icon",{attrs:{name:"music-o",color:"#31C27C"}}),t._v("推荐音乐 ")],1)],1),a("li",[a("router-link",{attrs:{to:"/hot"}},[a("van-icon",{attrs:{name:"fire-o",color:"#ee0a24"}}),t._v("热歌榜 ")],1)],1),a("li",[a("router-link",{attrs:{to:"/search"}},[a("van-icon",{attrs:{name:"search",color:"#31C27C"}}),t._v("搜索 ")],1)],1)])},o=[],c=a("b3a5");a("f8e9");n["a"].use(c["a"]);var l={},u=l,p=(a("6510"),a("2877")),h=Object(p["a"])(u,r,o,!1,null,"9a2303a0",null),d=h.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playPage",class:["playPage",{paused:t.paused}]},[t.playMusice?a("audio",{ref:"player",attrs:{autoplay:"",controls:"",src:"https://music.163.com/song/media/outer/url?id="+t.playMusice.id+".mp3"},on:{timeupdate:t.timeupdate,play:t.play,pause:t.pause,ended:t.playEnd}}):t._e(),t.playMusice?a("div",{directives:[{name:"show",rawName:"v-show",value:t.miniBarShow,expression:"miniBarShow"}],staticClass:"miniBar"},[a("img",{staticClass:"picUrl",attrs:{src:t.playMusice.picUrl,alt:""}}),a("div",{staticClass:"songNameBox",on:{click:function(e){t.isFull=!0,t.miniBarShow=!1}}},[a("p",{staticClass:"songName"},[t._v(t._s(t.playMusice.name)+"-"+t._s(t.playMusice.artists[0].name))])]),a("div",{staticClass:"control_button"},[a("div",{staticStyle:{"padding-top":"15px"}},[a("div",{staticClass:"lastSong",on:{click:t.prevMusic}})]),a("div",{staticClass:"play_pause"},[a("canvas",{ref:"miniPlay",attrs:{width:"50",height:"50"}}),a("div",{staticClass:"vantIcon",on:{click:t.togglePlay}},[t.vantPause?a("van-icon",{attrs:{name:"pause-circle-o",color:"rgba(255,255,255,0.5)",size:"40"}}):a("van-icon",{attrs:{name:"play-circle-o",color:"rgba(255,255,255,0.5)",size:"40"}})],1)]),a("div",{staticStyle:{"padding-top":"15px"}},[a("div",{staticClass:"nextSong",on:{click:t.nextMusic}})])])]):t._e(),a("transition",{attrs:{"enter-active-class":"animate__animated animate__slideInUp","leave-active-class":"animate__animated animate__slideOutDown"}},[t.isFull?a("v-touch",{staticClass:"fullScreen",on:{swipedown:t.swiperdown,tap:function(e){t.swiperdown,t.showList=!1},touchmove:function(t){t.preventDefault()}}},[a("div",{staticClass:"fullScreen_toBar"},[a("div",{staticClass:"back",on:{click:function(e){t.isFull=!1,t.miniBarShow=!0}}}),a("p",{staticClass:"songName"},[t._v(t._s(t.playMusice.name))])]),a("v-touch",{staticClass:"image",on:{swipeleft:t.swiperleft}},[a("img",{attrs:{src:t.playMusice.picUrl},on:{click:t.togglePlay}})]),a("div",{staticClass:"control"},[a("div",{staticClass:"ranges_time"},[a("div",{staticClass:"current"},[t._v(t._s(t.cmin)+" : "+t._s(t.csec))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.timeRange,expression:"timeRange"}],attrs:{type:"range",max:"100"},domProps:{value:t.timeRange},on:{change:function(e){return e.stopPropagation(),t.changeTime(e)},__r:function(e){t.timeRange=e.target.value}}}),a("div",{staticClass:"duration"},[t._v(t._s(t.endMin)+" : "+t._s(t.endSec))])]),a("br"),a("div",{staticClass:"control_box"},[a("van-row",{staticClass:"boxTop",attrs:{type:"flex",justify:"space-between"}},[a("van-col",{attrs:{span:"4"}},[a("div",{staticClass:"circle vantIcon",on:{click:function(e){t.playMode="circle"}}})]),a("van-col",{attrs:{span:"4"}},[a("div",{staticClass:"list vantIcon",on:{click:function(e){t.playMode="list"}}})]),a("van-col",{attrs:{span:"4"}},[a("div",{staticClass:"random vantIcon",on:{click:function(e){t.playMode="rand"}}})]),a("van-col",{attrs:{span:"4"}},[a("div",{staticClass:"showsList vantIcon",on:{click:function(e){e.stopPropagation(),t.showList=!0}}})])],1),a("van-row",{staticClass:"boxButtom",attrs:{type:"flex",justify:"space-between"}},[a("van-col",{attrs:{span:"6"}},[a("div",{staticClass:"lastSong vantIcon",on:{click:t.prevMusic}})]),a("van-col",{attrs:{span:"6"}},[a("div",{staticClass:"vantIcon",on:{click:t.togglePlay}},[t.vantPause?a("van-icon",{attrs:{name:"pause-circle-o",color:"rgba(255,255,255,1)",size:"40"}}):a("van-icon",{attrs:{name:"play-circle-o",color:"rgba(255,255,255,1)",size:"40"}})],1)]),a("van-col",{attrs:{span:"6"}},[a("div",{staticClass:"nextSong vantIcon",on:{click:t.nextMusic}})])],1)],1)])],1):t._e()],1),a("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInRight","leave-active-class":"animate__animated animate__fadeOutRight"}},[a("v-touch",{directives:[{name:"show",rawName:"v-show",value:t.lyricShow,expression:"lyricShow"}],staticClass:"lyric",on:{swiperight:t.swiperright,touchmove:function(t){t.preventDefault()}}},[a("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInRight","leave-active-class":"animate__animated animate__fadeOutRight"}},[a("div",{staticClass:"lrc_box"},t._l(t.lyric,(function(e,n){return a("div",{key:n,staticClass:"lrc"},[t._v(t._s(e.lyric))])})),0)])],1)],1),a("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeInRight","leave-active-class":"animate__animated animate__fadeOutRight"}},[a("v-touch",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"showList",on:{swiperight:t.swiperright,touchmove:function(t){t.preventDefault()}}},t._l(t.musicList,(function(e){return a("p",{key:e.id,staticClass:"musicLists",style:{color:e.id==t.playMusice.id?"#42b983":""},on:{dblclick:function(a){return t.$emit("play",e)}}},[t._v(" "+t._s(e.name)+" - "+t._s(e.artists[0].name)+" ")])})),0)],1)],1)},m=[],f=(a("1276"),a("ac1f"),a("4d63"),a("25f0"),a("4de4"),a("79cb")),g=a("87a1");n["a"].use(f["a"]),n["a"].use(g["a"]);var _={name:"Play",props:{playMusice:{type:Object,default:function(){return null}},musicList:Array},data:function(){return{paused:!1,vantPause:!0,isFull:!1,lyric:[],timeRange:0,duration:0,playMode:"ciecle",showList:!1,miniBarShow:!0,lyricShow:!1,current:0,cmin:0,csec:0,endMin:0,endSec:0}},created:function(){this.getLyric(this.playMusice.id)},watch:{playMusice:function(t){this.getLyric(t.id)},isFull:function(t){t?document.body.classList.add("dialog"):document.body.classList.remove("dialog")}},methods:{getLyric:function(t){var e=this;this.$http.get("http://music.kele8.cn/lyric",{params:{id:t}}).then((function(t){var a=t.data.lrc.lyric,n=a.split("\n");n.pop();for(var i=/\[(\d+):(\d+\.\d+)\](.*)/,s=[],r=0;r<n.length;r++){var o=new RegExp(i);if(o.test(n[r])){var c={time:60*parseInt(RegExp.$1)+parseFloat(RegExp.$2),lyric:RegExp.$3};s.push(c)}}e.lyric=s})).catch((function(t){console.log(t)}))},pause:function(){this.paused=!0},play:function(){this.paused=!1},togglePlay:function(){var t=this.$refs.player;this.paused?(t.play(),this.vantPause=!0):(t.pause(),this.vantPause=!1)},changeTime:function(t){var e=t.target.value,a=this.$refs.player,n=e/100*this.duration;a.currentTime=n;var i=parseInt(a.currentTime);console.log(i)},timeupdate:function(t){var e=t.target,a=e.currentTime,n=e.duration,i=e.paused;this.current=a,this.duration=n;var s=this.current;this.cmin=parseInt(s/60),this.csec=parseInt(s%60);var r=this.duration;this.endMin=parseInt(r/60),this.endSec=parseInt(r%60),console.log(this.endSec),this.drawCircle(a,n),this.vantPause=a!=n&&1!=i,this.timeRange=a/n*100},drawCircle:function(t,e){var a=this.$refs.miniPlay,n=a.getContext("2d");n.clearRect(0,0,50,50),n.beginPath(),n.strokeStyle="rgba(0,0,0,0.5)",n.lineWidth=4,n.arc(25,25,20,0,2*Math.PI),n.stroke(),n.closePath();var i=t/e*2*Math.PI;n.beginPath(),n.strokeStyle="rgba(255,255,255,1)",n.lineWidth=4,n.arc(25,25,20,-.5*Math.PI,i-.5*Math.PI),n.stroke(),n.closePath()},prevMusic:function(){var t=this,e=this.playMusice.id,a=null;this.musicList.filter((function(n,i){if(n.id==e){var s=--i;s<0&&(s=t.musicList.length-1),a=t.musicList[s]}})),this.$emit("play",a)},nextMusic:function(){var t=this,e=this.playMusice.id,a=null;this.musicList.filter((function(n,i){if(n.id==e){var s=++i;s>t.musicList.length-1&&(s=0),a=t.musicList[s]}})),this.$emit("play",a)},playEnd:function(){if("circle"==this.playMode)this.$refs.player.play();else if("rand"==this.playMode){var t=Math.floor(Math.random()*this.musicList.length),e=this.musicList[t];this.$emit("play",e)}else this.nextMusic()},swiperdown:function(){this.isFull=!1,this.showList=!1,this.miniBarShow=!0},swiperright:function(){this.showList=!1,this.lyricShow=!1},swiperleft:function(){this.lyricShow=!0}}},y=_,b=(a("a310"),Object(p["a"])(y,v,m,!1,null,"40a53caf",null)),w=b.exports,k={data:function(){return{musicID:null,playMusice:null,musicList:[]}},components:{TopNav:d,Play:w},methods:{changeMusic:function(t){this.playMusice=t},playMusic:function(t){console.log(t),t.picUrl||(t.al&&t.al.picUrl?t.picUrl=t.al.picUrl:t.picUrl="http://p1.music.126.net/0QYCXHgm_WUT6Qc5haI7EQ==/109951165813544165.jpg"),t.song&&t.song.artists&&(t.artists=t.song.artists),this.playMusice=t,this.musicList.push(t);for(var e=!1,a=0;a<this.musicList.length;a++)if(this.musicList[a].id==t.id){e=!0;break}e||(this.musicList.push(t),console.log(this.musicList))}}},C=k,M=(a("034f"),Object(p["a"])(C,i,s,!1,null,null,null)),P=M.exports,x=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},j=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],E={name:"HelloWorld",props:{msg:String}},$=E,O=(a("4805"),Object(p["a"])($,S,I,!1,null,"b9167eee",null)),R=O.exports,T={name:"Home",components:{HelloWorld:R}},N=T,B=Object(p["a"])(N,L,j,!1,null,null,null),U=B.exports;n["a"].use(x["a"]);var D=[{path:"/",name:"Home",component:U,redirect:"/recommend"},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/recommend",name:"Recommend",component:function(){return a.e("chunk-3525cca0").then(a.bind(null,"4802"))}},{path:"/songitem/:id",name:"SongItem",component:function(){return a.e("chunk-2d20791d").then(a.bind(null,"a0a9"))}},{path:"/hot",name:"Hot",component:function(){return a.e("chunk-27de323f").then(a.bind(null,"0b70"))}},{path:"/search",name:"Search",component:function(){return a.e("chunk-42654662").then(a.bind(null,"2d3b"))}}],F=new x["a"]({mode:"hash",base:"",routes:D}),A=F,H=a("bc3a"),W=a.n(H),z={baseURL:"https://music.kele8.cn/",timeout:6e4},q=W.a.create(z);q.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),q.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=q,window.axios=q,Object.defineProperties(t.prototype,{axios:{get:function(){return q}},$axios:{get:function(){return q}},$http:{get:function(){return q}}})},n["a"].use(Plugin);Plugin,a("1395"),a("3524");var Q=a("65d8"),J=a.n(Q);n["a"].use(J.a,{name:"v-touch"}),n["a"].config.productionTip=!1,new n["a"]({router:A,render:function(t){return t(P)}}).$mount("#app")},6510:function(t,e,a){"use strict";a("fbf4")},"85ec":function(t,e,a){},"88e8":function(t,e,a){},"8ce0":function(t,e,a){},a310:function(t,e,a){"use strict";a("88e8")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},fbf4:function(t,e,a){}});
//# sourceMappingURL=app.2363483a.js.map