(function(t){function e(e){for(var i,a,o=e[0],l=e[1],u=e[2],p=0,d=[];p<o.length;p++)a=o[p],n[a]&&d.push(n[a][0]),n[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,o=1;o<s.length;o++){var l=s[o];0!==n[l]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=s[0]))}return t}var i={},n={1:0},r=[];function a(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=i,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},a.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([9,0]),s()})({1:function(t,e){},"2Zml":function(t,e,s){},6:function(t,e){},"8gwq":function(t,e,s){"use strict";var i=s("AWr7"),n=s.n(i);n.a},9:function(t,e,s){t.exports=s("Vtdi")},AWr7:function(t,e,s){},FC4I:function(t,e,s){"use strict";var i=s("d7H4"),n=s.n(i);n.a},I5h5:function(t,e,s){"use strict";var i=s("2Zml"),n=s.n(i);n.a},Radg:function(t,e,s){},Vtdi:function(t,e,s){"use strict";s.r(e);s("VRzm");var i=s("Kw5r"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid",attrs:{id:"app"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-7 col-sm-7 col-md-9 col-xl-10 p-0"},[s("VideoWrapper",{attrs:{video:t.video},on:{setVideoTime:t.setVideoTime}})],1),s("div",{staticClass:"col-5 col-sm-5 col-md-3 col-xl-2 d-flex flex-column justify-content-between"},[s("Control",{attrs:{socket:t.socket,video:t.video}}),s("Chat",{attrs:{socket:t.socket}})],1)])])},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat mt-3 d-flex flex-column justify-content-between"},[s("div",{staticClass:"messages",attrs:{id:"messages"}},[s("div",{staticClass:"scroll-content"},t._l(t.messages,function(e,i){return s("div",{key:i,staticClass:"message",class:{server:e.server}},[e.server?t._e():s("span",[t._v(t._s(e.from)+": ")]),t._v(t._s(e.text)+"\n      ")])}))]),t.logged?t._e():s("form",{staticClass:"my-2",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control w-100",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),s("button",{staticClass:"btn btn-primary mt-1 w-100",attrs:{type:"submit"}},[t._v("Enter chat")])]),t.logged?s("form",{staticClass:"my-2 message-form",on:{submit:function(e){return e.preventDefault(),t.send(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control w-100",attrs:{type:"text",placeholder:"Message"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),s("button",{staticClass:"btn btn-success mt-1 w-100",attrs:{type:"submit"}},[t._v("Send")])]):t._e()])},o=[],l=(s("f3/d"),{props:["socket"],data:function(){return{logged:!1,name:"",text:"",messages:[],notificationSound:{}}},mounted:function(){var t=this;this.socket.on("message",function(e){t.messages.push(e),setTimeout(function(){var t=document.getElementById("messages");t.scrollTop=t.scrollHeight+100},250)}),setTimeout(function(){document.getElementById("messages").setAttribute("style","height:"+document.getElementById("messages").offsetHeight+"px !important")},1e3),this.socket.on("reconnect",function(){t.socket.emit("setName",t.name)})},methods:{login:function(){this.name&&(this.logged=!0,this.socket.emit("setName",this.name))},send:function(){this.text&&(this.socket.emit("message",{from:this.name,text:this.text}),this.text="")}}}),u=l,c=(s("FC4I"),s("KHd+")),p=Object(c["a"])(u,a,o,!1,null,"1cb2216b",null),d=p.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"videoWrapper"}},["default"===t.video.type?s("VideoDefault",{attrs:{time:t.video.time,url:t.video.url,paused:t.video.paused}}):t._e(),"youtube"===t.video.type?s("VideoYoutube",{attrs:{time:t.video.time,url:t.video.url,paused:t.video.paused}}):t._e(),"hls"===t.video.type?s("VideoHLS",{attrs:{time:t.video.time,url:t.video.url,paused:t.video.paused}}):t._e()],1)},f=[],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center align-items-center",attrs:{id:"yplayer-container"}},[s("div",{attrs:{id:"yplayer"}})])}],y=s("D+Oc"),g=s.n(y),b={props:["time","url","paused"],data:function(){return{player:{}}},mounted:function(){this.player=g()("yplayer"),this.player.loadVideoById(this.url.slice(-11),0,"large"),this.player.seekTo(this.time),this.paused?this.player.pauseVideo():this.player.playVideo()},destroyed:function(){this.player.destroy()},watch:{url:function(){this.player.loadVideoById(this.url.slice(-11),0)},time:function(){var t=this;this.player.getCurrentTime().then(function(e){Math.abs(t.time-e)>5&&t.player.seekTo(t.time)})},paused:function(){this.paused?this.player.pauseVideo():this.player.playVideo()}}},C=b,_=(s("I5h5"),Object(c["a"])(C,h,v,!1,null,null,null)),x=_.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center align-items-center",attrs:{id:"videojs-container"}},[s("video",{staticClass:"video-js vjs-default-skin vjs-big-play-centered",attrs:{id:"videojs"}})])}],j=s("PTN7"),V=s.n(j),T={props:["time","url","paused"],mounted:function(){this.player=V()("videojs",{controls:!0,autoplay:!1,preload:"auto",techOrder:["html5"],sources:[]}),this.player.show(),this.player.src({type:"video/mp4",src:this.url}),this.player.currentTime(this.time),this.paused?this.player.pause():this.player.play()},destroyed:function(){this.player.dispose()},watch:{url:function(){this.player.src({type:"video/mp4",src:this.url})},time:function(){Math.abs(this.time-this.player.currentTime())>3&&this.player.currentTime(this.time)},paused:function(){this.paused?this.player.pause():this.player.play()}}},F=T,E=(s("WPpC"),Object(c["a"])(F,w,k,!1,null,null,null)),O=E.exports,S=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center align-items-center",attrs:{id:"videojs-container"}},[s("video",{staticClass:"video-js vjs-default-skin vjs-big-play-centered",attrs:{id:"videojs"}})])}],P={props:["time","url","paused"],mounted:function(){this.player=V()("videojs",{controls:!0,autoplay:!1,preload:"auto",techOrder:["html5"],sources:[]}),this.player.show(),this.player.src({type:"application/x-mpegURL",src:this.url}),this.player.currentTime(this.time),this.paused?this.player.pause():this.player.play()},destroyed:function(){this.player.dispose()},watch:{url:function(){this.player.src({type:"application/x-mpegURL",src:this.url})},time:function(){Math.abs(this.time-this.player.currentTime())>3&&this.player.currentTime(this.time)},paused:function(){this.paused?this.player.pause():this.player.play()}}},$=P,I=(s("8gwq"),Object(c["a"])($,S,L,!1,null,null,null)),q=I.exports,R={props:["video"],components:{VideoYoutube:x,VideoDefault:O,VideoHLS:q}},M=R,H=(s("XFiC"),Object(c["a"])(M,m,f,!1,null,null,null)),W=H.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-3 w-100 control"},[s("form",{staticClass:"input-group",on:{submit:function(e){return e.preventDefault(),t.changeVideo(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],staticClass:"form-control",attrs:{type:"text",id:"inlineFormInput",placeholder:t.video.url?t.video.url:"Paste your url here"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),t._m(0)]),s("div",{staticClass:"btn-group mt-2 w-100"},[t.video.paused?s("button",{staticClass:"btn btn-success w-100",attrs:{type:"button",name:"button"},on:{click:t.play}},[s("i",{staticClass:"fa fa-play",attrs:{"aria-hidden":"true"}})]):s("button",{staticClass:"btn btn-danger w-100",attrs:{type:"button",name:"button"},on:{click:t.pause}},[s("i",{staticClass:"fa fa-pause",attrs:{"aria-hidden":"true"}})]),s("button",{staticClass:"btn btn-light w-100",attrs:{type:"button",name:"button"},on:{click:t.toggleFullScreen}},[s("i",{staticClass:"fa fa-arrows-alt",attrs:{"aria-hidden":"true"}})]),s("button",{staticClass:"btn btn-light w-100",attrs:{type:"button",name:"button"},on:{click:t.toggleUsersList}},[s("i",{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.users.length))])]),t.usersListVisible?s("div",{staticClass:"usersList mt-1"},[s("ul",{staticClass:"list-group"},t._l(t.users,function(e,i){return s("li",{key:i,staticClass:"list-group-item"},[t._v(t._s(e))])}))]):t._e()])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[s("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])])}],N={props:["socket","video"],data:function(){return{url:"",users:[],usersListVisible:!1}},mounted:function(){var t=this;this.socket.on("users",function(e){t.users=e.map(function(t){return t||"Кто-то"}),console.log(t.users)})},methods:{changeVideo:function(){this.url&&this.socket.emit("setUrl",this.url)},pause:function(){this.socket.emit("pause")},play:function(){this.socket.emit("play")},toggleFullScreen:function(){if(this.fullscreenToggled)document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen(),this.fullscreenToggled=!1;else{var t=document.getElementById("app");t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen(),this.fullscreenToggled=!0}},toggleUsersList:function(){this.usersListVisible=!this.usersListVisible}}},U=N,z=(s("XTTu"),Object(c["a"])(U,B,D,!1,null,null,null)),X=z.exports,Z=s("gFX4"),A=s.n(Z),G={name:"app",components:{Chat:d,VideoWrapper:W,Control:X},data:function(){return{video:{paused:!0,type:"",time:0,url:""}}},created:function(){var t=this;this.socket=A()(),this.socket.on("video",function(e){console.log(e),t.$set(t,"video",e)})},methods:{setVideoTime:function(){}}},J=G,K=(s("ZL7j"),Object(c["a"])(J,n,r,!1,null,null,null)),Y=K.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(Y)}}).$mount("#app")},WPpC:function(t,e,s){"use strict";var i=s("Radg"),n=s.n(i);n.a},XFiC:function(t,e,s){"use strict";var i=s("bp1d"),n=s.n(i);n.a},XTTu:function(t,e,s){"use strict";var i=s("hG7q"),n=s.n(i);n.a},ZL7j:function(t,e,s){"use strict";var i=s("bP1M"),n=s.n(i);n.a},bP1M:function(t,e,s){},bp1d:function(t,e,s){},d7H4:function(t,e,s){},hG7q:function(t,e,s){}});
//# sourceMappingURL=app.91490cf7.js.map