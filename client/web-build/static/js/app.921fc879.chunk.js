(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{137:function(e,t,n){e.exports=n.p+"static/media/acorn.8d54a7d4.png"},176:function(e){e.exports=JSON.parse('{"width":500,"height":500,"margin":15,"qrOptions":{"typeNumber":"0","mode":"Byte","errorCorrectionLevel":"Q"},"imageOptions":{"hideBackgroundDots":true,"imageSize":0.4,"margin":0},"dotsOptions":{"type":"extra-rounded","color":"#000000"},"backgroundOptions":{"color":"#fdfcff"},"image":"10cc19bd484118dbcd0a7886a38ceddc.png","dotsOptionsHelper":{"colorType":{"single":true,"gradient":false},"gradient":{"linear":true,"radial":false,"color1":"#6a1a4c","color2":"#6a1a4c","rotation":"0"}},"cornersSquareOptions":{"type":"dot","color":"#000000"},"cornersSquareOptionsHelper":{"colorType":{"single":true,"gradient":false},"gradient":{"linear":true,"radial":false,"color1":"#000000","color2":"#000000","rotation":"0"}},"cornersDotOptions":{"type":"dot","color":"#000000"},"cornersDotOptionsHelper":{"colorType":{"single":true,"gradient":false},"gradient":{"linear":true,"radial":false,"color1":"#000000","color2":"#000000","rotation":"0"}},"backgroundOptionsHelper":{"colorType":{"single":true,"gradient":false},"gradient":{"linear":true,"radial":false,"color1":"#ffffff","color2":"#ffffff","rotation":"0"}}}')},177:function(e){e.exports=JSON.parse('{"width":500,"height":500,"margin":15,"qrOptions":{"typeNumber":"0","mode":"Byte","errorCorrectionLevel":"Q"},"imageOptions":{"hideBackgroundDots":true,"imageSize":0.4,"margin":0},"dotsOptions":{"type":"extra-rounded","color":"#ffffff"},"backgroundOptions":{"color":"#000000"},"image":"10cc19bd484118dbcd0a7886a38ceddc.png","dotsOptionsHelper":{"colorType":{"single":true,"gradient":false},"gradient":{"linear":true,"radial":false,"color1":"#6a1a4c","color2":"#6a1a4c","rotation":"0"}},"cornersSquareOptions":{"type":"dot","color":"#ffffff"},"cornersSquareOptionsHelper":{"colorType":{"single":true,"gradient":false},"gradient":{"linear":true,"radial":false,"color1":"#000000","color2":"#000000","rotation":"0"}},"cornersDotOptions":{"type":"dot","color":"#ffffff"},"cornersDotOptionsHelper":{"colorType":{"single":true,"gradient":false},"gradient":{"linear":true,"radial":false,"color1":"#000000","color2":"#000000","rotation":"0"}},"backgroundOptionsHelper":{"colorType":{"single":true,"gradient":false},"gradient":{"linear":true,"radial":false,"color1":"#ffffff","color2":"#ffffff","rotation":"0"}}}')},182:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(0),i=n.n(o),l=n(9),c=n(21),s=n(261),u=n(262),d=n(6),f=n(112),p="#051940",g="#41b2a2",m="#fbc10b",b="#0bbcee",y="#f25a38",v="#111",O="#fefefe",h="title",w=function(e,t){var n=Object(f.a)(e);return"rgba("+n.red+", "+n.green+", "+n.blue+", "+t+")"},E=n(255),j=function(e){var t=e.color,n=void 0===t?v:t,a=e.size,r=void 0===a?50:a;return i.a.createElement(E.a,{style:{position:"absolute"},name:"camera",size:r,color:n})},S=n(28),x=n(4),P=n(256),V=n(257);var D=function(e){var t=e.isPlaying,n=e.stopSound,a=e.playSound;return i.a.createElement(x.a,{style:{position:"absolute",alignSelf:"center",top:320}},i.a.createElement(S.a,{style:{backgroundColor:t?m:b,padding:30,borderRadius:75,borderWidth:3,alignSelf:"center",alignItems:"center",justifyContent:"center"},onPress:t?n:a},t?i.a.createElement(P.a,{style:{position:"absolute"},name:"md-pause-sharp",size:30,color:"black"}):i.a.createElement(V.a,{style:{position:"absolute"},name:"controller-play",size:30,color:"black"})))},C=n(29),R=n(2),k=n(20),z=function(e){var t=e.children;return i.a.createElement(R.a.View,{style:{flex:1,justifyContent:"center",backgroundColor:w(g,1)}},t)},N=n(3),A=n.n(N);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=function(e){var t=e.style,n=e.children,a=Object(o.useRef)(new R.a.Value(0)).current;return Object(o.useEffect)((function(){R.a.timing(a,{toValue:1,easing:k.a.ease,useNativeDriver:!1,duration:150}).start()}),[]),i.a.createElement(R.a.View,{style:[T({flex:1,borderWidth:5,borderRadius:20,backgroundColor:O,minHeight:200,margin:30,marginBottom:50,overflow:"hidden",maxWidth:375,opacity:a},t),"web"==l.a.OS?{alignSelf:"center",width:400}:null]},n)};var H=function(e){var t=e.onPress,n=e.size,a=void 0===n?40:n,r=e.color,l=void 0===r?y:r,c=e.children,s=i.a.useRef(new R.a.Value(0)).current,u=i.a.useRef(new R.a.Value(0)).current,d=i.a.useRef(new R.a.Value(0)).current;return Object(o.useEffect)((function(){R.a.timing(d,{toValue:1,easing:k.a.ease,useNativeDriver:!1,duration:150}).start()}),[]),i.a.createElement(R.a.View,{style:[{alignItems:"flex-start",justifyContent:"flex-start",alignSelf:"center",borderWidth:5,borderColor:v,bottom:10,position:"absolute",borderRadius:2*a,overflow:"hidden",opacity:d,backgroundColor:u.interpolate({inputRange:[0,1],outputRange:[w(l,1),w(m,1)]}),transform:[{scale:s.interpolate({inputRange:[-1,1],outputRange:[.9,1.1]})}]}]},i.a.createElement(S.a,{title:"Home",onPressOut:function(){R.a.sequence([R.a.spring(s,{toValue:1,useNativeDriver:!1,speed:20})]).start((function(){s.setValue(0),t(),R.a.timing(u,{toValue:0,useNativeDriver:!1,duration:100,easing:k.a.bounce}).start()}))},onPressIn:function(){R.a.parallel([R.a.spring(s,{toValue:-1,useNativeDriver:!1}),R.a.timing(u,{toValue:1,useNativeDriver:!1,duration:100,easing:k.a.bounce})]).start()},style:{padding:a,alignItems:"center",justifyContent:"center",alignSelf:"center"}},c))},L=function(e){var t=e.size,n=void 0===t?40:t,a=e.color,r=void 0===a?"black":a;return i.a.createElement(E.a,{style:{position:"absolute"},name:"download-cloud",size:n,color:r})},W=n(183);var q=function(e){var t=e.children,n=e.narrator,a="android"==l.a.OS?16:20;return i.a.createElement(W.a,{style:{margin:40,marginTop:"android"==l.a.OS?30:50,marginBottom:60}},i.a.createElement(c.a,{textBreakStrategy:"simple",style:{fontFamily:"text",fontSize:a,textAlign:"justify"}},t),n?i.a.createElement(c.a,{style:{fontStyle:"italic",fontSize:a,fontFamily:"text",marginTop:20}},"Narrator: ",n):null)};var B=function(e){var t=e.size,n=void 0===t?40:t,a=e.color,r=void 0===a?v:a;return i.a.createElement(P.a,{style:{position:"absolute"},name:"arrow-back",size:n,color:r})},M=(n(16),n(1)),U=n.n(M),J=(n(247),n(265)),Q={readLocalString:J.e,dir:J.b,mkdir:J.d,readDir:J.f,download:J.c,delete:J.a},Z=function(e){var t=e.split(".");return"."+t[t.length-1]},G="web"===l.a.OS?"/api/data":"https://www.catawbatour.org/api/data",K=Object(o.createContext)(),X=function(e){var t=e.children,n=(e.s3URL,Object(o.useState)(null)),a=r()(n,2),c=a[0],s=a[1],u=Object(o.useState)(!0),d=r()(u,2),f=d[0],p=d[1];Object(o.useEffect)((function(){fetch(G).then((function(e){return e.json()})).then((function(e){var t,n;return U.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if("android"!=l.a.OS&&"ios"!=l.a.OS){a.next=14;break}return a.t1=JSON,a.next=4,U.a.awrap(Q.readLocalString(Q.dir+"/db.json"));case 4:if(a.t2=a.sent,a.t0=a.t1.parse.call(a.t1,a.t2),a.t0){a.next=8;break}a.t0=e;case 8:return t=a.t0,a.next=11,U.a.awrap(Q.readDir(Q.dir));case 11:n=a.sent,Object.keys(e).forEach((function(a){var r,o,i;return U.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(r=Q.dir+a,console.log(r),n.includes(a)){l.next=6;break}return console.log("no trail in local data"),l.next=6,U.a.awrap(Q.mkdir(r));case 6:return o=Object.keys(e[a].stops),console.log("truth stops",o),l.next=10,U.a.awrap(Q.readDir(r));case 10:i=l.sent,o.forEach((function(n){var o,l,c,s,u,d,f,p;return U.a.async((function(g){for(;;)switch(g.prev=g.next){case 0:if(console.log(n),o=r+"/"+n,console.log(o),l=e[a].stops[n],c=l.image,s=Z(c),u=o+"/image."+s,d=l.audio,f=Z(d),p=o+"/audio."+f,!function(){var e,r;return void 0==(null==(e=t[a].stops)?void 0:e[n])?(console.log("undefined stop"),!0):Date.parse(l.updatedAt)>Date.parse(null==(r=t[a].stops[n])?void 0:r.updatedAt)?(console.log("truth is newer"),!0):!i[n]&&(console.log("no stop folder in dir"),!0)}()){g.next=24;break}return g.prev=8,console.log("deleting",n),g.next=12,U.a.awrap(Q.delete(o,{idempotent:!0}));case 12:return console.log("making",n),g.next=15,U.a.awrap(Q.mkdir(o));case 15:return g.next=17,U.a.awrap(Q.download(c,u));case 17:return g.next=19,U.a.awrap(Q.download(d,p));case 19:g.next=24;break;case 21:g.prev=21,g.t0=g.catch(8),console.error(g.t0);case 24:e[a].stops[n].image=u,e[a].stops[n].audio=p;case 26:case"end":return g.stop()}}),null,null,[[8,21]],Promise)}));case 12:case"end":return l.stop()}}),null,null,null,Promise)}));case 14:s(e),p(!1);case 16:case"end":return a.stop()}}),null,null,null,Promise)}))}),[]);return i.a.createElement(K.Provider,{value:{data:c,fetchStop:function(e){var t,n;return U.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.trail,n=e.slug,c[t].stops[n]){a.next=5;break}return a.abrupt("return",null);case 5:return console.log("stop data",c[t].stops[n]),a.abrupt("return",c[t].stops[n]);case 7:case"end":return a.stop()}}),null,null,null,Promise)},dataLoading:f}},t)};function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _="web"===l.a.OS?"/api/static":"https://www.catawbatour.org/api/static",ee=Object(o.createContext)(),te=function(e){var t=e.children,n=Object(o.useState)({}),a=r()(n,2),l=a[0],c=a[1],s=Object(o.useState)(!0),u=r()(s,2),d=u[0],f=u[1];return Object(o.useEffect)((function(){console.log("Fetching: ",_),fetch(_).then((function(e){var t;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,U.a.awrap(e.json());case 3:return t=n.sent,console.log(t),n.abrupt("return",t);case 6:case"end":return n.stop()}}),null,null,null,Promise)})).then((function(e){c(e),f(!1)}))}),[]),i.a.createElement(ee.Provider,{value:$($({},l),{},{loading:d})},t)},ne=function(){return Object(o.useContext)(ee)},ae=n(119),re=function(){var e=i.a.useState(!0),t=r()(e,2),n=t[0],a=t[1],o=i.a.useState(!1),l=r()(o,2),c=l[0],s=l[1],u=i.a.useState(0),d=r()(u,2),f=d[0],p=d[1],g=i.a.useState(),m=r()(g,2),b=m[0],y=m[1];function v(){return U.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!b){e.next=5;break}return e.next=3,U.a.awrap(b.stopAsync());case 3:p(0),s(!1);case 5:case"end":return e.stop()}}),null,null,null,Promise)}return{stopSound:v,playSound:function(){return U.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.awrap(b.playAsync());case 2:s(!0),b.setOnPlaybackStatusUpdate((function(e){var t;return U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.isLoaded&&e.isPlaying&&(t=e.positionMillis/e.durationMillis,p(t)),!0!==e.didJustFinish){n.next=4;break}return n.next=4,U.a.awrap(v());case 4:case"end":return n.stop()}}),null,null,null,Promise)}));case 4:case"end":return e.stop()}}),null,null,null,Promise)},loadSound:function(e){var t,n;return U.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return ae.a.setAudioModeAsync({playsInSilentModeIOS:!0}),r.next=3,U.a.awrap(ae.a.Sound.createAsync(e));case 3:t=r.sent,n=t.sound,y(n),a(!1);case 7:case"end":return r.stop()}}),null,null,null,Promise)},unloadSound:function(){return U.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.awrap(b.unloadAsync());case 2:case"end":return e.stop()}}),null,null,null,Promise)},isPlaying:c,isLoading:n,progress:f}},oe=n(40),ie=n(184),le=function(){var e=Object(oe.k)().navigate;return{to:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(t,n)},href:function(e){return ie.a(e)}}};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(e){var t,n=(t=e,Object(o.useRef)(new R.a.Value(t)).current);return{value:n,timing:function(e){return R.a.timing(n,se({useNativeDriver:!1,easing:k.a.ease},e))},spring:function(e){return R.a.spring(n,se({useNativeDriver:!1},e))},stop:function(){return n.stopAnimation()},interpolate:function(e){return n.interpolate(e)},setValue:function(e){n.setValue(e)}}};var de=function(e){var t=e.bg,n=void 0===t?g:t,a=e.progress,l=e.isPlaying,c=void 0!==l&&l,s=e.size,u=void 0===s?60:s,d=e.borderWidth,f=void 0===d?2:d,p=e.progressColor,b=void 0===p?m:p,y=Object(o.useState)(0),O=r()(y,2),h=O[0],E=O[1];return function(e,t){var n=Object(o.useRef)();Object(o.useEffect)((function(){n.current=e}),[e]),Object(o.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){c?E(a):h>0&&E((function(e){var t=e-.08;return t<0?0:t}))}),100),i.a.createElement(x.a,{style:{transform:[{rotateZ:"45deg"}]}},i.a.createElement(R.a.View,{style:[{borderRadius:u/2,position:"absolute",width:u,height:u,borderWidth:f,backgroundColor:n,borderRightColor:b,transform:[{rotateZ:360*h+"deg"}]}]}),i.a.createElement(R.a.View,{style:[{width:u,height:u,borderRadius:u/2,borderWidth:f,borderBottomColor:w(b,h>.25?1:0),borderLeftColor:w(b,h>.5?1:0),borderTopColor:w(h>.5?b:v,h>.5&&h<.75?0:1),borderRightColor:w(h>.5?b:v,h>.5?0:1),borderRightColor:w(v,h>.75?0:1)}]}))};var fe=function(e){var t=e.src,n=e.size,a=void 0===n?100:n,r=e.children,l=e.progress,c=void 0===l?.5:l,s=e.isPlaying,u=Object(o.useRef)(new R.a.Value(0)).current;return Object(o.useEffect)((function(){R.a.timing(u,{toValue:1,easing:k.a.ease,useNativeDriver:!1,duration:150}).start()}),[]),i.a.createElement(R.a.View,{style:{borderRadius:125,overflow:"hidden",backgroundColor:p,alignSelf:"center",padding:125,alignItems:"center",justifyContent:"center",opacity:u}},i.a.createElement(C.a,{style:{height:a,width:a,position:"absolute"},source:t}),i.a.createElement(x.a,{style:{position:"absolute"}},i.a.createElement(de,{size:250,borderWidth:4,isPlaying:s,progress:c,bg:w(O,0)})),r)};var pe=function(e){var t=e.children,n=e.expanded,a=e.fontSize,r=void 0===a?30:a,o=i.a.useRef(new R.a.Value(0)).current,s=i.a.useRef(new R.a.Value(0)).current,u=i.a.useRef(new R.a.Value(120)).current,d="android"==l.a.OS?r-3:r;return i.a.useEffect((function(){n?(s.setValue(0),u.setValue(120),R.a.parallel([R.a.timing(s,{useNativeDriver:!1,toValue:1,duration:250,easing:k.a.exp}),R.a.timing(u,{useNativeDriver:!1,toValue:0,duration:250,easing:k.a.linear})]).start()):(s.setValue(0),u.setValue(-50),R.a.parallel([R.a.timing(s,{useNativeDriver:!1,toValue:1,duration:250,easing:k.a.exp}),R.a.timing(u,{useNativeDriver:!1,toValue:0,duration:250,easing:k.a.linear})]).start())}),[n]),i.a.useEffect((function(){R.a.spring(o,{toValue:n?1:0,useNativeDriver:!1}).start()}),[]),i.a.createElement(R.a.View,{style:{justifyContent:"center",backgroundColor:w(O,n?.9:1),alignSelf:n?"flex-start":"center",padding:2,paddingHorizontal:40,borderRadius:30,margin:10,borderWidth:n?3:0,opacity:s,left:u}},i.a.createElement(c.a,{style:{fontSize:n?d-5:d,fontFamily:"title",color:v}},t.toUpperCase()))};var ge=function(e){var t=e.size,n=void 0===t?30:t,a=e.color,r=void 0===a?m:a,l=Object(o.useRef)(new R.a.Value(0)).current,c=le().to;return i.a.createElement(S.a,{onPress:function(){var e;e=function(){c("About"),R.a.delay(500).start((function(){l.setValue(0)}))},R.a.spring(l,{toValue:1,useNativeDriver:!1,bounciness:15}).start(e)},style:{position:"absolute",top:10,right:10}},i.a.createElement(R.a.View,{style:{borderRadius:n,overflow:"hidden",padding:3,opacity:l.interpolate({inputRange:[0,1],outputRange:[.8,1]}),backgroundColor:l.interpolate({inputRange:[0,1],outputRange:[w(r,0),w(r,1)]})}},i.a.createElement(E.a,{name:"info",size:n,color:v})))},me=(d.a.create({container:{flex:1,alignItems:"stretch",justifyContent:"center",backgroundColor:m,padding:30},card:{flex:1,backgroundColor:O,padding:20,borderRadius:20,borderWidth:5,borderColor:v,alignItems:"stretch",justifyContent:"space-evenly"},title:{flex:1,fontFamily:h,fontSize:50,textAlign:"center",paddingBottom:10},text:{fontSize:"android"==l.a.OS?15:19,textAlign:"justify",fontFamily:"text"},textView:{flex:"android"==l.a.OS?1.5:2}}),function(){var e=re(),t=e.isPlaying,n=e.stopSound,a=e.playSound,r=e.isLoading,c=e.loadSound,s=(e.unloadSound,e.progress),u=le().to,d=ne();Object(o.useEffect)((function(){d.loading||(console.log(d.welcomeAudio),c({uri:d.welcomeAudio}))}),[d]);return i.a.createElement(z,null,i.a.createElement(F,null,i.a.createElement(pe,{fontSize:50},"TANAKE"),i.a.createElement(ge,null),i.a.createElement(fe,{src:{uri:d.welcomeImage},progress:s,isPlaying:t,size:200}),r||d.loading?null:i.a.createElement(D,{isPlaying:t,stopSound:n,playSound:a}),i.a.createElement(q,null,"Tanake and welcome to the Catawba Audio Tour. Tour codes can be unlocked on our mobile app by clicking the camera button below. Otherwise use your favorite QR code reader.")),"web"==l.a.OS?i.a.createElement(H,{onPress:function(){return u("Download")}},i.a.createElement(L,null)):i.a.createElement(H,{onPress:function(){n().then((function(){return u("Camera")}))}},i.a.createElement(j,null)))});var be=function(e){var t=e.transcript,n=e.narrator,a=e.expanded,r=e.onPress,o=i.a.useRef(new R.a.Value(75)).current;return i.a.useEffect((function(){o.setValue(0),R.a.spring(o,{useNativeDriver:!1,bounciness:15,toValue:75}).start()}),[a]),a?i.a.createElement(R.a.View,{style:{alignSelf:"center",alignItems:"center",justifyContent:"center",position:"absolute",bottom:o,opacity:o.interpolate({inputRange:[0,75],outputRange:[0,1]})}},i.a.createElement(S.a,{style:{backgroundColor:w(O,.9),padding:5,borderRadius:40,borderWidth:3,flexDirection:"row"},onPress:r},i.a.createElement(c.a,{style:{fontStyle:"italic",fontSize:"android"==l.a.OS?14:18,margin:10}},t[0].content.reduce((function(e,t){return e+t.value}),"").slice(0,25),"..."),i.a.createElement(x.a,{style:{borderRadius:100,padding:20,alignSelf:"center",borderWidth:1,alignItems:"center",justifyContent:"center",backgroundColor:w(g,.9)}},i.a.createElement(E.a,{style:{position:"absolute"},name:"maximize-2",size:20,color:"black"})))):i.a.createElement(R.a.ScrollView,{style:{flex:1,paddingHorizontal:20,opacity:o.interpolate({inputRange:[0,75],outputRange:[0,1]}),marginTop:"android"==l.a.OS?40:50,marginBottom:60}},t.map((function(e,t){return i.a.createElement(c.a,{key:t,style:{fontSize:15,textAlign:"justify",marginVertical:15,lineHeight:20}},e.content.map((function(e,t){var n=e.marks.map((function(e){return e.type}));return i.a.createElement(c.a,{key:t,style:{fontStyle:n.includes("italic")?"italic":"normal",fontWeight:n.includes("bold")?"bold":"normal",textDecorationLine:n.includes("underline")?"underline":"none"}},e.value)})))})),i.a.createElement(c.a,{style:{paddingTop:20,fontStyle:"italic",fontFamily:"text"}},"Narrator: ",n))},ye=n(266),ve=function(e){var t=e.handlePlay,n=e.handleStop,a=e.isPlaying,r=e.expanded,o=e.progress,l=ue(0);return i.a.useEffect((function(){r?l.spring({toValue:1.6,friction:4}).start():l.spring({toValue:1.2,friction:4}).start()}),[r,a]),i.a.createElement(R.a.View,{style:{alignItems:"center",position:"absolute",alignSelf:"center",top:290,transform:[{scale:l.value}]}},i.a.createElement(S.a,{style:{overflow:"hidden",alignItems:"center",justifyContent:"center"},onPress:a?n:t},i.a.createElement(de,{bg:w(a?m:b,r?.9:1),isPlaying:a,progress:r?o:0,borderWidth:r?2.5:2}),i.a.createElement(ye.a,{style:{position:"absolute"},name:a?"stop":"play",size:25,color:v})))},Oe=function(e){return e*(Math.PI/180)};function he(e){var t=e.onPress,n=e.size,a=void 0===n?25:n,r=e.imgSize,l=void 0===r?125:r,c=e.expanded,s=void 0!==c&&c,u=i.a.useRef(new R.a.Value(0)).current,d=2*a+l;Object(o.useEffect)((function(){R.a.spring(u,{toValue:s?1:0,useNativeDriver:!1,friction:4}).start()}),[s]);var f,p=d-(f=45,(l+a)*Math.sin(Oe(f))),m=function(e,t){return t*Math.cos(Oe(e))}(45,l-2*a);return i.a.createElement(R.a.View,{style:{alignItems:"center",position:"absolute",alignSelf:s?"flex-end":"center",top:u.interpolate({inputRange:[0,1],outputRange:[p,10]}),right:u.interpolate({inputRange:[0,1],outputRange:[m,10]})}},i.a.createElement(S.a,{style:{padding:a,borderWidth:2,backgroundColor:s?w(g,.9):g,borderRadius:2*a,alignItems:"center",justifyContent:"center"},onPress:t},i.a.createElement(E.a,{style:{position:"absolute"},name:s?"minimize-2":"maximize-2",size:24,color:"black"})))}function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je=function(e){e.size;return i.a.createElement(x.a,{style:{backgroundColor:g,flex:1,justifyContent:"center",alignItems:"center"}})};var Se=d.a.create({image:{borderRadius:125,overflow:"hidden",backgroundColor:g,alignSelf:"center",width:250,height:250,alignItems:"center",justifyContent:"center"},fullscreenImage:Ee({},d.a.absoluteFillObject)}),xe=function(e){var t=e.image,n=e.expanded,a=void 0!==n&&n,l=e.progress,c=e.isPlaying,s=e.onLoad,u=void 0===s?function(){return console.log("Image Loaded!")}:s,f=Object(o.useState)(!0),p=r()(f,2),g=p[0],m=p[1],b=Object(o.useRef)(new R.a.Value(0)).current;return i.a.createElement(x.a,{style:a?Se.fullscreenImage:Se.image},i.a.createElement(R.a.View,{style:Ee(Ee({},d.a.absoluteFillObject),{},{opacity:b})},i.a.createElement(C.a,{source:{uri:t},onError:console.error,onLoad:function(){u(),R.a.spring(b,{toValue:1,useNativeDriver:!1}).start(),m(!1)},style:[d.a.absoluteFill,{position:"absolute",alignItems:"center"}]})),g?i.a.createElement(je,null):null,a?null:i.a.createElement(de,{bg:w(O,0),borderWidth:4,progress:l,isPlaying:c,size:250}))},Pe=function(e){var t=e.size,a=void 0===t?65:t,r=Object(o.useRef)(new R.a.Value(20)).current,l=Object(o.useRef)(new R.a.Value(-a)).current,c=Object(o.useRef)(new R.a.Value(0)).current;return Object(o.useEffect)((function(){R.a.parallel([R.a.timing(r,{toValue:360,useNativeDriver:!1,easing:k.a.bounce,duration:2500}),R.a.timing(l,{toValue:25,useNativeDriver:!1,easing:k.a.bounce,duration:2500}),R.a.spring(c,{toValue:1,useNativeDriver:!1,easing:k.a.in,duration:2500})]).start()}),[]),i.a.createElement(R.a.View,{style:{position:"absolute",bottom:25,left:l,opacity:c,transform:[{rotateZ:r.interpolate({inputRange:[0,360],outputRange:["0deg","360deg"]})}]}},i.a.createElement(C.a,{style:{width:a,height:a},source:n(137)}))};function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce=function(e){var t=e.navigate,a=Object(o.useRef)(new R.a.Value(0)).current;return i.a.createElement(z,null,i.a.createElement(F,null,i.a.createElement(x.a,{style:De(De({},d.a.absoluteFillObject),{},{alignItems:"center"})},i.a.createElement(c.a,{style:{fontFamily:"title",textAlign:"center",fontSize:50,marginTop:25}},"Uh-oh!"),i.a.createElement(c.a,{style:{fontFamily:"text",paddingHorizontal:40,paddingVertical:10,fontSize:20,textAlign:"justify"}},"We couldn't find that stop. Check your wifi or cellular connection and try again."),i.a.createElement(R.a.View,{style:{width:425,flex:1,opacity:a}},i.a.createElement(C.a,{style:{width:"android"==l.a.OS?375:425,flex:1,left:"android"==l.a.OS?50:0},source:n(241),onLoad:function(){R.a.timing(a,{toValue:1,useNativeDriver:!1,easing:k.a.ease,duration:300}).start()}}))),i.a.createElement(Pe,null)),i.a.createElement(H,{onPress:function(){return t("Home")}},i.a.createElement(B,null)))},Re=function(e){var t=e.size,a=void 0===t?100:t,r=Object(o.useRef)(new R.a.Value(1)).current,l=Object(o.useRef)(new R.a.Value(0)).current;return Object(o.useEffect)((function(){var e=k.a.bounce;R.a.loop(R.a.parallel([R.a.sequence([R.a.timing(r,{toValue:1.5,easing:e,duration:2e3,useNativeDriver:!1}),R.a.timing(r,{toValue:1,easing:e,duration:2e3,useNativeDriver:!1})]),R.a.sequence([R.a.timing(l,{toValue:360,easing:e,duration:2e3,useNativeDriver:!1}),R.a.timing(l,{toValue:0,easing:e,duration:2e3,useNativeDriver:!1})])])).start()}),[]),i.a.createElement(z,null,i.a.createElement(x.a,{style:{alignItems:"center",flex:1,justifyContent:"center"}},i.a.createElement(R.a.View,{style:{height:a,width:a,backgroundColor:m,borderRadius:a,borderWidth:3,alignItems:"center",justifyContent:"center",transform:[{scale:r},{rotateZ:l.interpolate({inputRange:[0,360],outputRange:["0deg","360deg"]})}]}},i.a.createElement(C.a,{source:n(137),style:{width:a/2,height:a/2}}))))},ke=function(e){var t=e.route.params,n=t.slug,a=void 0===n?"NO SLUG":n,l=t.trail,c=void 0===l?"NO TRAIL":l,s=Object(o.useState)(!1),u=r()(s,2),d=u[0],f=u[1],p=function(e){var t=e.trail,n=e.slug,a=Object(o.useContext)(K),i=a.fetchStop,l=a.dataLoading,c=Object(o.useState)({}),s=r()(c,2),u=s[0],d=s[1],f=Object(o.useState)(!0),p=r()(f,2),g=p[0],m=p[1],b=Object(o.useState)(!1),y=r()(b,2),v=y[0],O=y[1];return Object(o.useEffect)((function(){l||i({trail:t,slug:n}).then((function(e){null!=e?d(e):O(!0)})).catch((function(e){console.error(e),O(!0)})).finally((function(){return m(!1)}))}),[t,n,l]),{stop:u,loading:g,error:v}}({trail:c,slug:a}),g=p.stop,m=p.loading,b=p.error,y=Object(o.useState)(!1),v=r()(y,2),O=v[0],h=v[1],w=re(),E=w.loadSound,j=(w.isLoading,w.isPlaying),S=w.unloadSound,x=w.playSound,P=w.stopSound,V=w.progress,D=le().to,C=function(){return f(!d)};Object(o.useEffect)((function(){if(!m&&!b)return E({uri:g.audio}),function(){return S}}),[m,b]);return m?i.a.createElement(Re,null):b?i.a.createElement(Ce,{navigate:D}):i.a.createElement(z,null,i.a.createElement(F,null,d?null:i.a.createElement(pe,null,g.title),i.a.createElement(xe,{expanded:d,progress:V,isPlaying:j,image:g.image,onLoad:function(){return h(!0)}}),d?i.a.createElement(pe,{expanded:d},g.title):null,i.a.createElement(ve,{handlePlay:x,handleStop:P,isPlaying:j,expanded:d,progress:V}),O?i.a.createElement(he,{expanded:d,onPress:C}):null,i.a.createElement(be,{onPress:C,expanded:d,transcript:g.transcript,narrator:g.narrator})),i.a.createElement(H,{onPress:function(){P().then((function(){return D("Home")}))}},i.a.createElement(B,null)))},ze=n(104);function Ne(e){var t=e.goTo,n=i.a.useRef(new R.a.Value(2)).current,a=i.a.useRef(new R.a.Value(0)).current;return i.a.useEffect((function(){R.a.loop(R.a.sequence([R.a.spring(n,{toValue:1.7,useNativeDriver:!0,bounciness:15}),R.a.timing(n,{toValue:2,useNativeDriver:!0,easing:k.a.bounce,duration:500})])).start()}),[]),i.a.createElement(R.a.View,{style:[d.a.absoluteFill,{alignItems:"center",justifyContent:"center",backgroundColor:a.interpolate({inputRange:[0,1],outputRange:[w(b,1),w(m,1)]})}]},i.a.createElement(S.a,{onPress:t,style:[Ae.pressable,d.a.absoluteFill],onPressIn:function(){R.a.timing(a,{useNativeDriver:!1,toValue:1,duration:100,easing:k.a.ease}).start()}},i.a.createElement(R.a.View,{style:{transform:[{scale:n}]}},i.a.createElement(P.a,{name:"qr-code",size:80,color:v}))))}var Ae=d.a.create({container:{alignItems:"center",justifyContent:"center"},pressable:{alignItems:"center",justifyContent:"center"}}),Ie=function(){var e=Object(o.useState)({}),t=r()(e,2),n=t[0],a=t[1],l=Object(o.useState)(null),s=r()(l,2),u=s[0],f=s[1],p=le().to;return Object(o.useEffect)((function(){!function(){var e,t;U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a.awrap(ze.a.requestPermissionsAsync());case 2:e=n.sent,t=e.status,f("granted"===t);case 5:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]),null===u?i.a.createElement(c.a,null,"Requesting for camera permission"):!1===u?i.a.createElement(c.a,null,"No access to camera"):i.a.createElement(z,null,i.a.createElement(F,{style:{paddingBottom:50,justifyContent:"flex-start",paddingTop:50}},i.a.createElement(x.a,{style:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"}},i.a.createElement(x.a,{style:{backgroundColor:v,flex:1,borderRadius:400,overflow:"hidden",borderWidth:5,borderColor:n.trail?v:b,backgroundColor:b,padding:"android"==Platform.OS?125:150,position:"absolute"}},n.trail?i.a.createElement(Ne,{goTo:function(){return p("Stop",n)}}):i.a.createElement(ze.a,{onBarCodeScanned:function(e){e.type;var t=e.data,n="catawbatour.org";if(t.includes(n))try{var o=t.split(n)[1].split("/stop/")[1].split("/"),i=r()(o,2),l=i[0],c=i[1];a({trail:l,slug:c})}catch(s){return void(s&&console.error(s))}},barCodeTypes:[ze.a.Constants.BarCodeType.qr],style:[d.a.absoluteFillObject,{backgroundColor:v,position:"absolute",height:443}]}))),i.a.createElement(x.a,{style:{flex:1,justifyContent:"center",alignItems:"center"}},i.a.createElement(c.a,{style:{fontFamily:"title",fontStyle:"italic",textAlign:"center",fontSize:20,borderWidth:2,borderRadius:30,paddingHorizontal:20,paddingVertical:10}},"Point at a Tour Code"))),i.a.createElement(H,{onPress:function(){return p("Home")}},i.a.createElement(B,null)))},Te=n(259);function Fe(e){var t=e.size,n=void 0===t?60:t,a=e.children,r=e.color,o=void 0===r?"#3DDC84":r,l=e.onPress,c=void 0===l?function(){return console.log("No link for app button")}:l;return i.a.createElement(S.a,{style:{alignSelf:"center",backgroundColor:o,alignItems:"center",justifyContent:"center",padding:n,borderRadius:2*n,borderWidth:3},onPress:c},a)}var He=function(){var e=ne(),t=e.androidUrl,n=void 0===t?"":t,a=e.iOsUrl,r=void 0===a?"":a,o=(e.loading,le()),l=o.to,s=o.href;return i.a.createElement(z,null,i.a.createElement(F,null,i.a.createElement(c.a,{style:{fontSize:36,fontFamily:"title",textAlign:"center",padding:20}},"DOWNLOAD THE APP"),i.a.createElement(x.a,{style:{paddingHorizontal:30}},i.a.createElement(c.a,{style:{fontSize:18,textAlign:"center",fontFamily:"text",marginTop:25}},"For the best tour experience, particularly along our trails, please download our app from the Google Play Store or Apple Store. Both are absolutely free to use and we do not track personal data.")),i.a.createElement(x.a,{style:{flex:1,justifyContent:"space-evenly",marginTop:25,marginBottom:50}},n.length>0?i.a.createElement(Fe,{size:60,onPress:function(){return s(n)}},i.a.createElement(Te.a,{name:"android",style:{position:"absolute"},size:60,color:"black"})):null,r.length>0?i.a.createElement(Fe,{color:b,onPress:function(){return s(r)}},i.a.createElement(ye.a,{name:"app-store-ios",size:60,color:"black",style:{position:"absolute"}})):null)),i.a.createElement(H,{onPress:function(){return l("Home")}},i.a.createElement(B,null)))},Le=n(49),We=function(e){var t=e.children,n=e.href,a=e.color,r=void 0===a?b:a,l=Object(o.useRef)(new R.a.Value(0)).current,s=le().href;return Object(o.useEffect)((function(){var e=10*Math.random()+10;R.a.spring(l,{useNativeDriver:!1,toValue:.3,bounciness:e}).start()}),[]),i.a.createElement(c.a,{onPress:function(){R.a.parallel([R.a.spring(l,{useNativeDriver:!1,toValue:1,bounciness:15})]).start((function(){s(n).then((function(){R.a.delay(500).start((function(){l.setValue(.5)}))}))}))},style:{flexDirection:"column",flexWrap:"wrap",borderRadius:25,overflow:"hidden",padding:5}},i.a.createElement(R.a.Text,{style:{flex:.5,backgroundColor:l.interpolate({inputRange:[0,1],outputRange:[w(r,0),w(r,1)]})}},t))},qe=function(e){var t=e.children;return i.a.createElement(c.a,{style:{fontSize:15,fontFamily:"text",flexDirection:"row",flexWrap:"wrap",marginVertical:15,textAlign:"justify",lineHeight:"android"==l.a.OS?20:30}},t)},Be=function(){var e=le().to;return i.a.createElement(z,null,i.a.createElement(F,null,i.a.createElement(c.a,{style:{fontSize:50,fontFamily:"title",textAlign:"center",margin:20}},"ABOUT"),i.a.createElement(Le.a,{style:{paddingHorizontal:25,marginBottom:50}},i.a.createElement(qe,null,"The Catawba Audio Tour was developed by the"," ",i.a.createElement(We,{color:b,href:"https://catawbaculture.org"},"Cultural Division")," ","of the Catawba Indian Nation to provide educational and informative experiences for Catawba citizens, community members, and the general public."),i.a.createElement(qe,null,"All code is",i.a.createElement(We,{href:"https://github.com/delesslin/audio-tour",color:m}," ","open source and downloadable.")),i.a.createElement(qe,null,"App development was supported by:"," ",i.a.createElement(We,{color:y,href:"https://www.imls.gov/"}," ","The Institute for Museum and Library Services,"),i.a.createElement(We,{href:"https://www.humanityinaction.org/landeckerdemocracyfellowship/",color:g}," ","Alfred Landecker Democracy Fellowship,"),i.a.createElement(We,{href:"https://www.southcarolinaarts.com/",color:b}," ","South Carolina Arts Commission,"),"and",i.a.createElement(We,{href:"https://www.eyebeam.org/",color:y}," ","Eyebeam Fractal Fellowship.")))),i.a.createElement(H,{onPress:"web"==l.a.OS?function(){return e("Download")}:function(){return e("Home")}},"web"==l.a.OS?i.a.createElement(L,null):i.a.createElement(B,null)))},Me=n(118),Ue=n.n(Me),Je=n(176),Qe=n(177);function Ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ze(Object(n),!0).forEach((function(t){A()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ke=new Ue.a(Ge({},Je)),Xe=new Ue.a(Ge({},Qe)),Ye="https://www.catawbatour.org",$e=function(e){var t=e.route,n=Object(o.useRef)(null),a=Object(o.useRef)(null),l=ne(),s=Object(o.useState)(Ye),u=r()(s,2),d=u[0],f=u[1];return Object(o.useEffect)((function(){console.log(t.params);var e=Ye;t.params&&(t.params.route&&(e+="/"+t.params.route),t.params.trail&&(e+="/"+t.params.trail),t.params.stop&&(e+="/"+t.params.stop)),f(e)}),[t]),Object(o.useEffect)((function(){console.log(t.params),l.loading||(Ke.update({data:d,image:l.qrLogo}),Ke.append(n.current),Xe.update({data:d,image:l.qrLogo}),Xe.append(a.current))}),[l]),i.a.createElement(x.a,null,i.a.createElement(c.a,{style:{textAlign:"center",fontSize:30,marginVertical:20}},d),i.a.createElement(x.a,{style:{flexDirection:"row",justifyContent:"space-around",margin:25}},i.a.createElement(x.a,{style:{width:250,height:250},ref:n}),i.a.createElement(x.a,{style:{width:250,height:250},ref:a})))},_e=n(264),et=n(185),tt=n(260),nt=function(e){var t=e.navigation;return i.a.createElement(me,{navigation:t})},at=Object(u.a)(),rt={prefixes:["tour.catawbaculture.org","catawba-tour.herokuapp.com","catawba-tour-delesslin.vercel.app","catawbatour.org"],config:{screens:{Home:"",Stop:"stop/:trail/:slug",Camera:"camera",Download:"download",About:"about",QR:"qr/:route?/:trail?/:stop?",NotFound:"*"}}};t.a=function(){var e=Object(o.useState)(!0),t=r()(e,2),a=t[0],u=t[1];return Object(o.useEffect)((function(){_e.b({title:n(245),text:n(246)}).then((function(e){return u(!1)}))}),[]),a?i.a.createElement(c.a,null,"Loading..."):i.a.createElement(X,null,i.a.createElement(te,null,i.a.createElement(et.b,null,i.a.createElement(tt.a,{style:{flex:1}},i.a.createElement(s.a,{linking:rt},i.a.createElement(at.Navigator,{initialRouteName:"Home",screenOptions:{headerShown:!1}},i.a.createElement(at.Screen,{name:"Home",component:me}),i.a.createElement(at.Screen,{name:"Stop",component:ke}),"web"==l.a.OS?null:i.a.createElement(at.Screen,{name:"Camera",component:Ie}),"web"==l.a.OS?i.a.createElement(at.Screen,{name:"Download",component:He}):null,"web"==l.a.OS?i.a.createElement(at.Screen,{name:"QR",component:$e}):null,i.a.createElement(at.Screen,{name:"About",component:Be}),i.a.createElement(at.Screen,{name:"NotFound",component:nt})))))))}},193:function(e,t,n){e.exports=n(138)},237:function(e,t){},241:function(e,t,n){e.exports=n.p+"static/media/background.bdf0b8bf.png"},242:function(e,t,n){e.exports=n.p+"static/media/background.1f7c5980.png"},245:function(e,t,n){e.exports=n.p+"./fonts/Anton-Regular.ttf"},246:function(e,t,n){e.exports=n.p+"./fonts/Nunito-Regular.ttf"}},[[193,1,2]]]);
//# sourceMappingURL=app.921fc879.chunk.js.map