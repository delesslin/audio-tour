(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{136:function(e,t,n){e.exports=n.p+"static/media/acorn.8d54a7d4.png"},179:function(e,t,n){"use strict";var a=n(11),r=n.n(a),o=n(0),i=n.n(o),l=n(9),u=n(20),c=n(265),s=n(266),d=n(6),f=n(112),p="#051940",m="#41b2a2",g="#fbc10b",b="#0bbcee",y="#f25a38",v="#111",h="#fefefe",w="title",E=function(e,t){var n=Object(f.a)(e);return"rgba("+n.red+", "+n.green+", "+n.blue+", "+t+")"},O=n(259),x=function(e){var t=e.color,n=void 0===t?v:t,a=e.size,r=void 0===a?50:a;return i.a.createElement(O.a,{style:{position:"absolute"},name:"camera",size:r,color:n})},j=n(30),S=n(4),P=n(260),k=n(261);var V=function(e){var t=e.isPlaying,n=e.stopSound,a=e.playSound;return i.a.createElement(S.a,{style:{position:"absolute",alignSelf:"center",top:320}},i.a.createElement(j.a,{style:{backgroundColor:t?g:b,padding:30,borderRadius:75,borderWidth:3,alignSelf:"center",alignItems:"center",justifyContent:"center"},onPress:t?n:a},t?i.a.createElement(P.a,{style:{position:"absolute"},name:"md-pause-sharp",size:30,color:"black"}):i.a.createElement(k.a,{style:{position:"absolute"},name:"controller-play",size:30,color:"black"})))},C=n(28),R=n(2),D=n(21);var z=function(e){var t=e.src,a=void 0===t?n(209):t,r=e.size,l=void 0===r?100:r,u=e.children,c=Object(o.useRef)(new R.a.Value(0)).current;return Object(o.useEffect)((function(){R.a.timing(c,{toValue:1,easing:D.a.ease,useNativeDriver:!1,duration:150}).start()}),[]),i.a.createElement(R.a.View,{style:{borderRadius:125,overflow:"hidden",backgroundColor:p,alignSelf:"center",padding:125,borderWidth:3,borderColor:v,alignItems:"center",justifyContent:"center",opacity:c}},i.a.createElement(C.a,{style:{height:l,width:l,position:"absolute"},source:a}),u)};var N=function(e){var t=e.children,n=e.expanded,a=e.fontSize,r=void 0===a?30:a,o=i.a.useRef(new R.a.Value(0)).current,c=i.a.useRef(new R.a.Value(0)).current,s=i.a.useRef(new R.a.Value(120)).current,d="android"==l.a.OS?r-3:r;return i.a.useEffect((function(){n?(c.setValue(0),s.setValue(120),R.a.parallel([R.a.timing(c,{useNativeDriver:!1,toValue:1,duration:250,easing:D.a.exp}),R.a.timing(s,{useNativeDriver:!1,toValue:0,duration:250,easing:D.a.linear})]).start()):(c.setValue(0),s.setValue(-50),R.a.parallel([R.a.timing(c,{useNativeDriver:!1,toValue:1,duration:250,easing:D.a.exp}),R.a.timing(s,{useNativeDriver:!1,toValue:0,duration:250,easing:D.a.linear})]).start())}),[n]),i.a.useEffect((function(){R.a.spring(o,{toValue:n?1:0,useNativeDriver:!1}).start()}),[]),i.a.createElement(R.a.View,{style:{backgroundColor:n?E(m,.9):E(h,1),alignSelf:n?"flex-start":"center",padding:2,paddingHorizontal:40,borderRadius:30,margin:10,borderWidth:n?3:0,opacity:c,left:s}},i.a.createElement(u.a,{style:{fontSize:n?d-5:d,fontFamily:"title",color:v}},t.toUpperCase()))},A=function(e){var t=e.children;return i.a.createElement(R.a.View,{style:{flex:1,justifyContent:"center",backgroundColor:m}},t)},I=function(e){var t=e.children,n=Object(o.useRef)(new R.a.Value(0)).current;return Object(o.useEffect)((function(){R.a.timing(n,{toValue:1,easing:D.a.ease,useNativeDriver:!1,duration:150}).start()}),[]),i.a.createElement(R.a.View,{style:[{flex:1,borderWidth:5,borderRadius:20,backgroundColor:h,minHeight:200,margin:30,marginBottom:50,overflow:"hidden",maxWidth:375,opacity:n},"web"==l.a.OS?{alignSelf:"center",width:400}:null]},t)};var F=function(e){var t=e.onPress,n=e.size,a=void 0===n?40:n,r=e.color,l=void 0===r?y:r,u=e.children,c=i.a.useRef(new R.a.Value(0)).current,s=i.a.useRef(new R.a.Value(0)).current,d=i.a.useRef(new R.a.Value(0)).current;return Object(o.useEffect)((function(){R.a.timing(d,{toValue:1,easing:D.a.ease,useNativeDriver:!1,duration:150}).start()}),[]),i.a.createElement(R.a.View,{style:[{alignItems:"flex-start",justifyContent:"flex-start",alignSelf:"center",borderWidth:5,borderColor:v,bottom:10,position:"absolute",borderRadius:2*a,overflow:"hidden",opacity:d,backgroundColor:s.interpolate({inputRange:[0,1],outputRange:[E(l,1),E(g,1)]}),transform:[{scale:c.interpolate({inputRange:[-1,1],outputRange:[.9,1.1]})}]}]},i.a.createElement(j.a,{title:"Home",onPressOut:function(){R.a.sequence([R.a.spring(c,{toValue:1,useNativeDriver:!1,speed:20})]).start((function(){c.setValue(0),t(),R.a.timing(s,{toValue:0,useNativeDriver:!1,duration:100,easing:D.a.bounce}).start()}))},onPressIn:function(){R.a.parallel([R.a.spring(c,{toValue:-1,useNativeDriver:!1}),R.a.timing(s,{toValue:1,useNativeDriver:!1,duration:100,easing:D.a.bounce})]).start()},style:{padding:a,alignItems:"center",justifyContent:"center",alignSelf:"center"}},u))},T=function(e){var t=e.size,n=void 0===t?40:t,a=e.color,r=void 0===a?"black":a;return i.a.createElement(O.a,{style:{position:"absolute"},name:"download-cloud",size:n,color:r})},W=n(180);var B=function(e){var t=e.children,n=e.narrator,a="android"==l.a.OS?16:20;return i.a.createElement(W.a,{style:{margin:40,marginTop:"android"==l.a.OS?30:50,marginBottom:60}},i.a.createElement(u.a,{textBreakStrategy:"simple",style:{fontFamily:"text",fontSize:a,textAlign:"justify"}},t),n?i.a.createElement(u.a,{style:{fontStyle:"italic",fontSize:a,fontFamily:"text",marginTop:20}},"Narrator: ",n):null)};var H=function(e){var t=e.size,n=void 0===t?40:t,a=e.color,r=void 0===a?v:a;return i.a.createElement(P.a,{style:{position:"absolute"},name:"arrow-back",size:n,color:r})},L=n(3),M=n.n(L),q=n(1),U=n.n(q),J=n(269),G=n(167);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){M()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=function(e){return U.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,U.a.awrap(fetch(e,{mode:"no-cors",credentials:"same-origin"}).then((function(e){return e.text()})).then((function(e){return Object(G.convertXML)(e)})).then((function(e){return e.ListBucketResult.children})).then((function(e){return e.filter((function(e){return!!Object.keys(e).includes("Contents")}))})).then((function(e){return e.map((function(e){return e.Contents.children.reduce((function(e,t){var n=Object.keys(t)[0],a=t[n].content;return Z(Z({},e),{},M()({},n,a))}),{})}))})).then((function(e){return e.map((function(e){return{path:e.Key,lastModified:e.LastModified}}))})).then((function(e){var t={};return e.forEach((function(e){return e.path.split("/").reduce((function(e,t,n){return e[t]?e[t]=e[t]:"audio"==t||"image"==t||"qr"==t||"data.json"==t||"transcript.txt"==t?e[t]={lastModified:n.lastModified,file:"",url:""}:-1==t.indexOf(".")&&(e[t]={}),e[t]}),t)})),{arr:e,trails:t.trails}})).then((function(e){var t=e.arr,n=e.trails;return t.forEach((function(e){var t=e.path.split("/");t[t.length-1].indexOf(".")>0&&(n[t[1]][t[2]][t[3]].file=t[t.length-1],n[t[1]][t[2]][t[3]].lastModified=e.lastModified)})),n})).then((function(t){return Object.keys(t).forEach((function(n){Object.keys(t[n]).forEach((function(a){Object.keys(t[n][a]).forEach((function(r){if("data.json"==r||"transcript.txt"==r){var o=r.split(".")[0];return t[n][a][o]=Z(Z({},t[n][a][r]),{},{url:e+"/trails/"+n+"/"+a+"/"+r}),void delete t[n][a][r]}var i=t[n][a][r].file;t[n][a][r].url=e+"/trails/"+n+"/"+a+"/"+r+"/"+i}))}))})),t})));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),null,null,null,Promise)};n(251);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){M()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){var t=e.split(".");return"."+t[t.length-1]},_=Object(o.createContext)(),ee=function(e){var t=e.children,n=e.s3URL,a=void 0===n?"https://catawba-audio-tour.s3.us-east-2.amazonaws.com":n,u=Object(o.useState)(null),c=r()(u,2),s=c[0],d=c[1],f=Object(o.useState)(!0),p=r()(f,2),m=p[0],g=p[1];Object(o.useEffect)((function(){Q(a).then((function(e){var t,n,a,r,o,i,u,c;return U.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if("web"!=l.a.OS){s.next=4;break}return d(e),g(!1),s.abrupt("return");case 4:return s.next=6,U.a.awrap(J.e(J.a));case 6:if(t=s.sent,n={},!t.includes("db.json")){s.next=14;break}return s.t0=JSON,s.next=12,U.a.awrap(J.d(J.a+"db.json"));case 12:s.t1=s.sent,n=s.t0.parse.call(s.t0,s.t1);case 14:a=Object.keys(n).length>0,r=Object.keys(e),o=function(r){var o,i,l,u,c,s,d;return U.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(o=J.a+r,t.includes(r)){f.next=4;break}return f.next=4,U.a.awrap(J.c(o));case 4:return i=Object.keys(e[r]),f.next=7,U.a.awrap(J.e(o));case 7:l=f.sent,u=function(t){var i,u,c,s,d,f,p,m,g,b,y;return U.a.async((function(v){for(;;)switch(v.prev=v.next){case 0:if(i=o+"/"+t,!0,l.includes(t)){v.next=6;break}return v.next=5,U.a.awrap(J.c(i));case 5:!1;case 6:return v.next=8,U.a.awrap(J.e(i));case 8:if(u=v.sent,s=(c=function(o){return!a||!u.includes(o)||new Date(e[r][t][o].lastModified)>new Date(n[r][t][o].lastModified)})("image"),e[r][t].image.uri=i+"/image"+$(e[r][t].image.file),!s){v.next=18;break}return v.next=15,U.a.awrap(J.b(e[r][t].image.url,e[r][t].image.uri));case 15:d=v.sent,f=d.uri,e[r][t].image.uri=f;case 18:if(p=c("audio"),e[r][t].audio.uri=i+"/audio"+$(e[r][t].audio.file),!p){v.next=26;break}return v.next=23,U.a.awrap(J.b(e[r][t].audio.url,e[r][t].audio.uri));case 23:m=v.sent,g=m.uri,e[r][t].audio.uri=g;case 26:if(!c("data")){v.next=32;break}return v.next=30,U.a.awrap(fetch(e[r][t].data.url,{mode:"no-cors",credentials:"same-origin"}).then((function(e){return e.json()})).then((function(n){var a,o,i,l;return U.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return a=n.narrator,o=void 0===a?"no narrator":a,i=n.title,l=void 0===i?"no title":i,u.next=3,U.a.awrap(fetch(e[r][t].transcript.url,{mode:"no-cors",credentials:"same-origin"}).then((function(e){return e.text()})).then((function(n){e[r][t]=Y(Y({},e[r][t]),{},{narrator:o,title:l,text:n})})));case 3:return u.abrupt("return",u.sent);case 4:case"end":return u.stop()}}),null,null,null,Promise)})));case 30:v.next=33;break;case 32:e[r][t]=Y(Y({},null==(b=n)||null==(y=b[r])?void 0:y[t]),e[r][t]);case 33:case"end":return v.stop()}}),null,null,null,Promise)},c=0,s=i;case 10:if(!(c<s.length)){f.next=17;break}return d=s[c],f.next=14,U.a.awrap(u(d));case 14:c++,f.next=10;break;case 17:case"end":return f.stop()}}),null,null,null,Promise)},i=0,u=r;case 18:if(!(i<u.length)){s.next=25;break}return c=u[i],s.next=22,U.a.awrap(o(c));case 22:i++,s.next=18;break;case 25:return s.next=27,U.a.awrap(J.f(J.a+"db.json",JSON.stringify(e)));case 27:d(e),g(!1);case 29:case"end":return s.stop()}}),null,null,null,Promise)}))}),[]);return i.a.createElement(_.Provider,{value:{data:s,fetchStop:function(e){var t,n,a;return U.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.trail,n=e.slug,(a=s[t][n]||{})!=={}){r.next=6;break}return r.abrupt("return",null);case 6:if(!a.hasOwnProperty("narrator")||!a.hasOwnProperty("title")){r.next=10;break}return r.abrupt("return",a);case 10:if("web"!=l.a.OS){r.next=14;break}return r.next=13,U.a.awrap(fetch(a.data.url,{mode:"no-cors",credentials:"same-origin"}).then((function(e){return e.json()})).then((function(e){var r,o;return U.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return r=e.title,o=e.narrator,i.next=3,U.a.awrap(fetch(a.transcript.url,{mode:"no-cors",credentials:"same-origin"}).then((function(e){return e.text()})).then((function(e){return a.text=e,a.title=r,a.narrator=o,d((function(e){return e[t][n]=a,e})),a})));case 3:return i.abrupt("return",i.sent);case 4:case"end":return i.stop()}}),null,null,null,Promise)})));case 13:return r.abrupt("return",r.sent);case 14:case"end":return r.stop()}}),null,null,null,Promise)},dataLoading:m}},t)},te=n(181),ne=function(){var e=i.a.useState(!0),t=r()(e,2),n=t[0],a=t[1],o=i.a.useState(!1),l=r()(o,2),u=l[0],c=l[1],s=i.a.useState(),d=r()(s,2),f=d[0],p=d[1];function m(){return U.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f){e.next=4;break}return e.next=3,U.a.awrap(f.stopAsync());case 3:c(!1);case 4:case"end":return e.stop()}}),null,null,null,Promise)}return{stopSound:m,playSound:function(){return U.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.awrap(f.playAsync());case 2:c(!0),f.setOnPlaybackStatusUpdate((function(e){return U.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!0!==e.didJustFinish){t.next=3;break}return t.next=3,U.a.awrap(m());case 3:case"end":return t.stop()}}),null,null,null,Promise)}));case 4:case"end":return e.stop()}}),null,null,null,Promise)},loadSound:function(e){var t,n;return U.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,U.a.awrap(te.a.Sound.createAsync(e));case 2:t=r.sent,n=t.sound,p(n),a(!1);case 6:case"end":return r.stop()}}),null,null,null,Promise)},unloadSound:function(){return U.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.a.awrap(f.unloadAsync());case 2:case"end":return e.stop()}}),null,null,null,Promise)},isPlaying:u,isLoading:n}},ae=n(40),re=n(182),oe=function(){var e=Object(ae.k)().navigate;return{to:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e(t,n)},href:function(e){return re.a(e)}}};var ie=function(e){var t=e.size,n=void 0===t?30:t,a=e.color,r=void 0===a?g:a,l=Object(o.useRef)(new R.a.Value(0)).current,u=oe().to;return i.a.createElement(j.a,{onPress:function(){var e;e=function(){u("About"),R.a.delay(500).start((function(){l.setValue(0)}))},R.a.spring(l,{toValue:1,useNativeDriver:!1,bounciness:15}).start(e)},style:{position:"absolute",top:10,right:10}},i.a.createElement(R.a.View,{style:{borderRadius:n,overflow:"hidden",padding:3,opacity:l.interpolate({inputRange:[0,1],outputRange:[.8,1]}),backgroundColor:l.interpolate({inputRange:[0,1],outputRange:[E(r,0),E(r,1)]})}},i.a.createElement(O.a,{name:"info",size:n,color:v})))},le=(d.a.create({container:{flex:1,alignItems:"stretch",justifyContent:"center",backgroundColor:g,padding:30},card:{flex:1,backgroundColor:h,padding:20,borderRadius:20,borderWidth:5,borderColor:v,alignItems:"stretch",justifyContent:"space-evenly"},title:{flex:1,fontFamily:w,fontSize:50,textAlign:"center",paddingBottom:10},text:{fontSize:"android"==l.a.OS?15:19,textAlign:"justify",fontFamily:"text"},textView:{flex:"android"==l.a.OS?1.5:2}}),function(){var e=ne(),t=e.isPlaying,a=e.stopSound,r=e.playSound,u=e.isLoading,c=e.loadSound,s=(e.unloadSound,oe().to);Object(o.useEffect)((function(){c(n(241))}),[]);return i.a.createElement(A,null,i.a.createElement(I,null,i.a.createElement(N,{fontSize:50},"TANAKE"),i.a.createElement(ie,null),i.a.createElement(z,{size:200}),u?null:i.a.createElement(V,{isPlaying:t,stopSound:a,playSound:r}),i.a.createElement(B,null,"Tanake and welcome to the Catawba Audio Tour. Tour codes can be unlocked on our mobile app by clicking the camera button below. Otherwise use your favorite QR code reader.")),"web"==l.a.OS?i.a.createElement(F,{onPress:function(){return s("Download")}},i.a.createElement(T,null)):i.a.createElement(F,{onPress:function(){a().then((function(){return s("Camera")}))}},i.a.createElement(x,null)))});var ue=function(e){var t=e.transcript,n=e.narrator,a=e.expanded,r=e.onPress,o=t.replace(/\r\n\r\n/g,"\r\n"),c=i.a.useRef(new R.a.Value(75)).current;return i.a.useEffect((function(){c.setValue(0),R.a.spring(c,{useNativeDriver:!1,bounciness:15,toValue:75}).start()}),[a]),a?i.a.createElement(R.a.View,{style:{alignSelf:"center",alignItems:"center",justifyContent:"center",position:"absolute",bottom:c,opacity:c.interpolate({inputRange:[0,75],outputRange:[0,1]})}},i.a.createElement(j.a,{style:{backgroundColor:E(h,.9),padding:5,borderRadius:40,borderWidth:3,flexDirection:"row"},onPress:r},i.a.createElement(u.a,{style:{fontStyle:"italic",fontSize:"android"==l.a.OS?14:18,margin:10}},o.slice(0,25),"..."),i.a.createElement(S.a,{style:{borderRadius:100,padding:20,alignSelf:"center",borderWidth:1,alignItems:"center",justifyContent:"center",backgroundColor:E(g,.9)}},i.a.createElement(O.a,{style:{position:"absolute"},name:"maximize-2",size:20,color:"black"})))):i.a.createElement(R.a.ScrollView,{style:{flex:1,paddingHorizontal:20,opacity:c.interpolate({inputRange:[0,75],outputRange:[0,1]}),marginTop:"android"==l.a.OS?40:50,marginBottom:60}},i.a.createElement(u.a,{style:{fontSize:"android"==l.a.OS?15:20,fontFamily:"text",textAlign:"justify"}},o),i.a.createElement(u.a,{style:{paddingTop:20,fontStyle:"italic",fontFamily:"text"}},"Narrator: ",n))},ce=n(270),se=function(e){var t=e.handlePlay,n=e.handleStop,a=e.isPlaying,o=e.expanded,l=i.a.useRef(new R.a.Value(0)).current,u=i.a.useState(""),c=r()(u,2),s=c[0],d=c[1];return i.a.useEffect((function(){var e=b;o?(d(E(e,.9)),R.a.spring(l,{toValue:1.5,useNativeDriver:!1,friction:4}).start()):(R.a.spring(l,{toValue:1,useNativeDriver:!1,friction:4}).start(),d(e))}),[o,a]),i.a.createElement(R.a.View,{style:{alignItems:"center",marginBottom:20,position:"absolute",alignSelf:"center",top:290,transform:[{scale:l}]}},i.a.createElement(j.a,{style:{borderRadius:100,padding:30,borderWidth:2,overflow:"hidden",alignItems:"center",justifyContent:"center",backgroundColor:s},onPress:a?n:t},i.a.createElement(ce.a,{style:{position:"absolute"},name:a?"stop":"play",size:25,color:p})))},de=function(e){return e*(Math.PI/180)};function fe(e){var t=e.onPress,n=e.size,a=void 0===n?25:n,r=e.imgSize,l=void 0===r?125:r,u=e.expanded,c=void 0!==u&&u,s=i.a.useRef(new R.a.Value(0)).current,d=2*a+l;Object(o.useEffect)((function(){R.a.spring(s,{toValue:c?1:0,useNativeDriver:!1,friction:4}).start()}),[c]);var f,p=d-(f=45,(l+a)*Math.sin(de(f))),m=function(e,t){return t*Math.cos(de(e))}(45,l-2*a);return i.a.createElement(R.a.View,{style:{alignItems:"center",position:"absolute",alignSelf:c?"flex-end":"center",top:s.interpolate({inputRange:[0,1],outputRange:[p,10]}),right:s.interpolate({inputRange:[0,1],outputRange:[m,10]})}},i.a.createElement(j.a,{style:{padding:a,borderWidth:2,backgroundColor:c?E(g,.9):g,borderRadius:2*a,alignItems:"center",justifyContent:"center"},onPress:t},i.a.createElement(O.a,{style:{position:"absolute"},name:c?"minimize-2":"maximize-2",size:24,color:"black"})))}function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){M()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=function(e){e.size;return i.a.createElement(S.a,{style:{backgroundColor:m,flex:1,justifyContent:"center",alignItems:"center"}})};var be=d.a.create({image:{borderRadius:125,overflow:"hidden",backgroundColor:m,alignSelf:"center",width:250,height:250,borderWidth:3,borderColor:v,alignItems:"center",justifyContent:"center"},fullscreenImage:me({},d.a.absoluteFillObject)}),ye=function(e){var t=e.image,n=e.expanded,a=void 0!==n&&n,l=Object(o.useState)(!0),u=r()(l,2),c=u[0],s=u[1],f=Object(o.useRef)(new R.a.Value(0)).current;return i.a.createElement(S.a,{style:a?be.fullscreenImage:be.image},i.a.createElement(R.a.View,{style:me(me({},d.a.absoluteFillObject),{},{opacity:f})},i.a.createElement(C.a,{source:{uri:t},onError:console.error,onLoad:function(){R.a.spring(f,{toValue:1,useNativeDriver:!1}).start(),s(!1)},style:[d.a.absoluteFill,{position:"absolute",alignItems:"center"}]})),c?i.a.createElement(ge,null):null)},ve=function(e){var t=e.size,a=void 0===t?65:t,r=Object(o.useRef)(new R.a.Value(20)).current,l=Object(o.useRef)(new R.a.Value(-a)).current,u=Object(o.useRef)(new R.a.Value(0)).current;return Object(o.useEffect)((function(){R.a.parallel([R.a.timing(r,{toValue:360,useNativeDriver:!1,easing:D.a.bounce,duration:2500}),R.a.timing(l,{toValue:25,useNativeDriver:!1,easing:D.a.bounce,duration:2500}),R.a.spring(u,{toValue:1,useNativeDriver:!1,easing:D.a.in,duration:2500})]).start()}),[]),i.a.createElement(R.a.View,{style:{position:"absolute",bottom:25,left:l,opacity:u,transform:[{rotateZ:r.interpolate({inputRange:[0,360],outputRange:["0deg","360deg"]})}]}},i.a.createElement(C.a,{style:{width:a,height:a},source:n(136)}))};function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){M()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee=function(e){var t=e.navigate,a=Object(o.useRef)(new R.a.Value(0)).current;return i.a.createElement(A,null,i.a.createElement(I,null,i.a.createElement(S.a,{style:we(we({},d.a.absoluteFillObject),{},{alignItems:"center"})},i.a.createElement(u.a,{style:{fontFamily:"title",textAlign:"center",fontSize:50,marginTop:25}},"Uh-oh!"),i.a.createElement(u.a,{style:{fontFamily:"text",paddingHorizontal:40,paddingVertical:10,fontSize:20,textAlign:"justify"}},"We couldn't find that stop. Check your wifi or cellular connection and try again."),i.a.createElement(R.a.View,{style:{width:425,flex:1,opacity:a}},i.a.createElement(C.a,{style:{width:"android"==l.a.OS?375:425,flex:1,left:"android"==l.a.OS?50:0},source:n(244),onLoad:function(){R.a.timing(a,{toValue:1,useNativeDriver:!1,easing:D.a.ease,duration:300}).start()}}))),i.a.createElement(ve,null)),i.a.createElement(F,{onPress:function(){return t("Home")}},i.a.createElement(H,null)))},Oe=function(e){var t=e.size,a=void 0===t?100:t,r=Object(o.useRef)(new R.a.Value(1)).current,l=Object(o.useRef)(new R.a.Value(0)).current;return Object(o.useEffect)((function(){var e=D.a.bounce;R.a.loop(R.a.parallel([R.a.sequence([R.a.timing(r,{toValue:1.5,easing:e,duration:2e3,useNativeDriver:!1}),R.a.timing(r,{toValue:1,easing:e,duration:2e3,useNativeDriver:!1})]),R.a.sequence([R.a.timing(l,{toValue:360,easing:e,duration:2e3,useNativeDriver:!1}),R.a.timing(l,{toValue:0,easing:e,duration:2e3,useNativeDriver:!1})])])).start()}),[]),i.a.createElement(A,null,i.a.createElement(S.a,{style:{alignItems:"center",flex:1,justifyContent:"center"}},i.a.createElement(R.a.View,{style:{height:a,width:a,backgroundColor:g,borderRadius:a,borderWidth:3,alignItems:"center",justifyContent:"center",transform:[{scale:r},{rotateZ:l.interpolate({inputRange:[0,360],outputRange:["0deg","360deg"]})}]}},i.a.createElement(C.a,{source:n(136),style:{width:a/2,height:a/2}}))))},xe=function(e){var t=e.route.params,n=t.slug,a=void 0===n?"NO SLUG":n,u=t.trail,c=void 0===u?"NO TRAIL":u,s=Object(o.useState)(!0),d=r()(s,2),f=d[0],p=d[1],m=function(e){var t=e.trail,n=e.slug,a=Object(o.useContext)(_),i=a.fetchStop,l=a.dataLoading,u=Object(o.useState)({}),c=r()(u,2),s=c[0],d=c[1],f=Object(o.useState)(!0),p=r()(f,2),m=p[0],g=p[1],b=Object(o.useState)(!1),y=r()(b,2),v=y[0],h=y[1];return Object(o.useEffect)((function(){l||i({trail:t,slug:n}).then((function(e){null!=e?d(e):h(!0)})).catch((function(e){console.error(e),h(!0)})).finally((function(){return g(!1)}))}),[t,n,l]),{stop:s,loading:m,error:v}}({trail:c,slug:a}),g=m.stop,b=m.loading,y=m.error,v=ne(),h=v.loadSound,w=(v.isLoading,v.isPlaying),E=v.unloadSound,O=v.playSound,x=v.stopSound,j=oe().to,S=function(){return p(!f)};Object(o.useEffect)((function(){if(!b&&!y)return h({uri:"web"==l.a.OS?g.audio.url:g.audio.uri}),function(){return E}}),[b,y]);return b?i.a.createElement(Oe,null):y?i.a.createElement(Ee,{navigate:j}):i.a.createElement(A,null,i.a.createElement(I,null,f?null:i.a.createElement(N,null,g.title),i.a.createElement(ye,{expanded:f,image:"web"==l.a.OS?g.image.url:g.image.uri}),f?i.a.createElement(N,{expanded:f},g.title):null,i.a.createElement(se,{handlePlay:O,handleStop:x,isPlaying:w,expanded:f}),i.a.createElement(fe,{expanded:f,onPress:S}),i.a.createElement(ue,{onPress:S,expanded:f,transcript:g.text,narrator:g.narrator})),i.a.createElement(F,{onPress:function(){x().then((function(){return j("Home")}))}},i.a.createElement(H,null)))},je=n(104);function Se(e){var t=e.goTo,n=i.a.useRef(new R.a.Value(2)).current,a=i.a.useRef(new R.a.Value(0)).current;return i.a.useEffect((function(){R.a.loop(R.a.sequence([R.a.spring(n,{toValue:1.7,useNativeDriver:!0,bounciness:15}),R.a.timing(n,{toValue:2,useNativeDriver:!0,easing:D.a.bounce,duration:500})])).start()}),[]),i.a.createElement(R.a.View,{style:[d.a.absoluteFill,{alignItems:"center",justifyContent:"center",backgroundColor:a.interpolate({inputRange:[0,1],outputRange:[E(b,1),E(g,1)]})}]},i.a.createElement(j.a,{onPress:t,style:[Pe.pressable,d.a.absoluteFill],onPressIn:function(){R.a.timing(a,{useNativeDriver:!1,toValue:1,duration:100,easing:D.a.ease}).start()}},i.a.createElement(R.a.View,{style:{transform:[{scale:n}]}},i.a.createElement(P.a,{name:"qr-code",size:80,color:v}))))}var Pe=d.a.create({container:{alignItems:"center",justifyContent:"center"},pressable:{alignItems:"center",justifyContent:"center"}}),ke=function(){return i.a.createElement(S.a,{style:[d.a.absoluteFill,{alignItems:"stretch",overflow:"hidden",borderRadius:15}]},i.a.createElement(C.a,{source:n(245),style:{flex:1,width:425,left:-35}}))},Ve=function(e){return d.a.create({container:{flex:1,justifyContent:"center",backgroundColor:m},card:{overflow:"hidden",flex:1,borderWidth:5,borderRadius:20,backgroundColor:h,minHeight:200,margin:20,marginBottom:50},title:{fontFamily:"title",padding:10,paddingBottom:0,textAlign:"center",fontSize:40,marginTop:20,backgroundColor:h},cameraContainer:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:50},cameraView:{backgroundColor:v,flex:1,borderRadius:e,overflow:"hidden",borderWidth:5,borderColor:b,backgroundColor:b,padding:150,position:"absolute"}})},Ce=function(){var e=Object(o.useState)({}),t=r()(e,2),n=t[0],a=t[1],l=Object(o.useState)(null),c=r()(l,2),s=c[0],f=c[1],p=oe().to;return Object(o.useEffect)((function(){!function(){var e,t;U.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,U.a.awrap(je.a.requestPermissionsAsync());case 2:e=n.sent,t=e.status,f("granted"===t);case 5:case"end":return n.stop()}}),null,null,null,Promise)}()}),[]),null===s?i.a.createElement(u.a,null,"Requesting for camera permission"):!1===s?i.a.createElement(u.a,null,"No access to camera"):i.a.createElement(S.a,{style:Ve().container},i.a.createElement(S.a,{style:{overflow:"hidden",flex:1,borderWidth:5,borderRadius:20,minHeight:200,margin:20,marginBottom:50,paddingVertical:25}},i.a.createElement(ke,null),i.a.createElement(u.a,{style:{fontFamily:"title",padding:10,paddingBottom:0,textAlign:"center",fontSize:40}},"Point at a Tour Code"),i.a.createElement(S.a,{style:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:50}},i.a.createElement(S.a,{style:{backgroundColor:v,flex:1,borderRadius:400,overflow:"hidden",borderWidth:5,borderColor:n.trail?v:b,backgroundColor:b,padding:"android"==Platform.OS?125:150,position:"absolute"}},n.trail?i.a.createElement(Se,{goTo:function(){return p("Stop",n)}}):i.a.createElement(je.a,{onBarCodeScanned:function(e){e.type;var t=e.data,n="tour.catawbaculture.org";if(t.includes(n))try{var o=t.split(n)[1].split("/stop/")[1].split("/"),i=r()(o,2),l=i[0],u=i[1];a({trail:l,slug:u})}catch(c){return void(c&&console.error(c))}},barCodeTypes:[je.a.Constants.BarCodeType.qr],style:[d.a.absoluteFillObject,{backgroundColor:v,position:"absolute",height:443}]})))),i.a.createElement(F,{onPress:function(){return p("Home")}},i.a.createElement(H,null)))},Re=n(263);function De(e){var t=e.size,n=void 0===t?60:t,a=e.children,r=e.color,o=void 0===r?"#3DDC84":r,l=e.onPress,u=void 0===l?function(){return console.log("No link for app button")}:l;return i.a.createElement(j.a,{style:{alignSelf:"center",backgroundColor:o,alignItems:"center",justifyContent:"center",padding:n,borderRadius:2*n,borderWidth:3},onPress:u},a)}var ze=function(){var e=oe(),t=e.to,n=e.href;return i.a.createElement(A,null,i.a.createElement(I,null,i.a.createElement(u.a,{style:{fontSize:36,fontFamily:"title",textAlign:"center",padding:20}},"DOWNLOAD THE APP"),i.a.createElement(S.a,{style:{paddingHorizontal:30}},i.a.createElement(u.a,{style:{fontSize:18,textAlign:"center",fontFamily:"text",marginTop:25}},"For the best tour experience, particularly along our trails, please download our app from the Google Play Store or Apple Store. Both are absolutely free to use and we do not track personal data.")),i.a.createElement(S.a,{style:{flex:1,justifyContent:"space-evenly",marginTop:25,marginBottom:50}},i.a.createElement(De,{size:60,onPress:function(){return n("http://google.com")}},i.a.createElement(Re.a,{name:"android",style:{position:"absolute"},size:60,color:"black"})),i.a.createElement(De,{color:b,onPress:function(){return n("http://twitter.com")}},i.a.createElement(ce.a,{name:"app-store-ios",size:60,color:"black",style:{position:"absolute"}})))),i.a.createElement(F,{onPress:function(){return t("Home")}},i.a.createElement(H,null)))},Ne=n(49),Ae=function(e){var t=e.children,n=e.href,a=e.color,r=void 0===a?b:a,l=Object(o.useRef)(new R.a.Value(0)).current,c=oe().href;return Object(o.useEffect)((function(){var e=10*Math.random()+10;R.a.spring(l,{useNativeDriver:!1,toValue:.3,bounciness:e}).start()}),[]),i.a.createElement(u.a,{onPress:function(){R.a.parallel([R.a.spring(l,{useNativeDriver:!1,toValue:1,bounciness:15})]).start((function(){c(n).then((function(){R.a.delay(500).start((function(){l.setValue(.5)}))}))}))},style:{flexDirection:"column",flexWrap:"wrap",borderRadius:25,overflow:"hidden",padding:5}},i.a.createElement(R.a.Text,{style:{flex:.5,backgroundColor:l.interpolate({inputRange:[0,1],outputRange:[E(r,0),E(r,1)]})}},t))},Ie=function(e){var t=e.children;return i.a.createElement(u.a,{style:{fontSize:15,fontFamily:"text",flexDirection:"row",flexWrap:"wrap",marginVertical:15,textAlign:"justify",lineHeight:"android"==l.a.OS?20:30}},t)},Fe=function(){var e=oe().to;return i.a.createElement(A,null,i.a.createElement(I,null,i.a.createElement(u.a,{style:{fontSize:50,fontFamily:"title",textAlign:"center",margin:20}},"ABOUT"),i.a.createElement(Ne.a,{style:{paddingHorizontal:25,marginBottom:50}},i.a.createElement(Ie,null,"The Catawba Audio Tour was developed by the"," ",i.a.createElement(Ae,{color:b,href:"https://catawbaculture.org"},"Cultural Division")," ","of the Catawba Indian Nation to provide educational and informative experiences for Catawba citizens, community members, and the general public."),i.a.createElement(Ie,null,"All code is",i.a.createElement(Ae,{href:"https://github.com/delesslin/audio-tour",color:g}," ","open source and downloadable.")),i.a.createElement(Ie,null,"App development was supported by:"," ",i.a.createElement(Ae,{color:y,href:"https://www.imls.gov/"}," ","The Institute for Museum and Library Services,"),i.a.createElement(Ae,{href:"https://www.humanityinaction.org/landeckerdemocracyfellowship/",color:m}," ","Alfred Landecker Democracy Fellowship,"),i.a.createElement(Ae,{href:"https://www.southcarolinaarts.com/",color:b}," ","South Carolina Arts Commission,"),"and",i.a.createElement(Ae,{href:"https://www.eyebeam.org/",color:y}," ","Eyebeam Fractal Fellowship.")))),i.a.createElement(F,{onPress:"web"==l.a.OS?function(){return e("Download")}:function(){return e("Home")}},"web"==l.a.OS?i.a.createElement(T,null):i.a.createElement(H,null)))},Te=n(268),We=n(183),Be=n(264),He=function(e){var t=e.navigation;return i.a.createElement(le,{navigation:t})},Le=Object(s.a)(),Me={prefixes:["tour.catawbaculture.org","catawba-tour.herokuapp.com","catawba-tour-delesslin.vercel.app"],config:{screens:{Home:"",Stop:"stop/:trail/:slug",Camera:"camera",Download:"download",About:"about",NotFound:"*"}}};t.a=function(){var e=Object(o.useState)(!0),t=r()(e,2),a=t[0],s=t[1];return Object(o.useEffect)((function(){Te.b({title:n(248),text:n(249)}).then((function(e){return s(!1)}))}),[]),a?i.a.createElement(u.a,null,"Loading..."):i.a.createElement(ee,null,i.a.createElement(We.b,null,i.a.createElement(Be.a,{style:{flex:1}},i.a.createElement(c.a,{linking:Me},i.a.createElement(Le.Navigator,{initialRouteName:"Home",screenOptions:{headerShown:!1}},i.a.createElement(Le.Screen,{name:"Home",component:le}),i.a.createElement(Le.Screen,{name:"Stop",component:xe}),"web"==l.a.OS?null:i.a.createElement(Le.Screen,{name:"Camera",component:Ce}),"web"==l.a.OS?i.a.createElement(Le.Screen,{name:"Download",component:ze}):null,i.a.createElement(Le.Screen,{name:"About",component:Fe}),i.a.createElement(Le.Screen,{name:"NotFound",component:He}))))))}},191:function(e,t,n){e.exports=n(250)},209:function(e,t,n){e.exports=n.p+"static/media/Logo.a31ceb8c.png"},239:function(e,t){},241:function(e,t,n){e.exports=n.p+"static/media/Welcome.da01f261.mp3"},244:function(e,t,n){e.exports=n.p+"static/media/background.bdf0b8bf.png"},245:function(e,t,n){e.exports=n.p+"static/media/background.1f7c5980.png"},248:function(e,t,n){e.exports=n.p+"./fonts/Anton-Regular.ttf"},249:function(e,t,n){e.exports=n.p+"./fonts/Nunito-Regular.ttf"}},[[191,1,2]]]);
//# sourceMappingURL=app.899f32d4.chunk.js.map