(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(62),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");i?(!function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):c(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):c(t,e)})}}function c(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var s,u,m,h,b,g=a(63),d=a(180),p=a(83),f=a(97),O=a(2),j=a(4),y=["Lush","Barren","Airless","Exotic","Scorched","Frozen","Toxic","Irradiated"],v=["Tetraceris","Reococcyx","Rangifae","Theroma","Procavya","Conokinis","Ungulatis","Hexungulatis","Felidae","Felihex","Anastomus","Tyranocae","Mogara","Lok","Bos","Ictaloris","Prionace","Prionacefda","Unknown","Agnelis","Oxyacta","Cycroms","Rhopalocera"],E=["Active","Ambulatory","Aggresive","Amenable","Anxious","Bold","Calm","Cautious","Cruel","Dangerous","Defensive","Distinctive","Docile","Erratic","Fearful","Hibernator","Hostile","Hunter","Migratory","Passive","Predtor","Prey","Sedate","Shy","Skittish","Stalking","Submissive","Timid","Unconcerned","Unintelligent","Unpredictable","Viscious","Violent","Volatile"],C={spectralClassMap:{O:{0:"horus",1:"horus",2:"vishnu",3:"vishnu",4:"hera",5:"hera",6:"lir",7:"lir",8:"njord",9:"njord"},B:{0:"hathor",1:"hathor",2:"shiva",3:"shiva",4:"athena",5:"athena",6:"boann",7:"boann",8:"frigg",9:"frigg"},A:{0:"ptah",1:"ptah",2:"saraswati",3:"saraswati",4:"apollo",5:"apollo",6:"epona",7:"epona",8:"heimdall",9:"heimdall"},F:{0:"Khons",1:"Khons",2:"Krishna",3:"Krishna",4:"Hermes",5:"Hermes",6:"Cernunnos",7:"Cernunnos",8:"Baldur",9:"Baldur"},G:{0:"Ra",1:"Ra",2:"Ganesha",3:"Ganesha",4:"Aphrodite",5:"Aphrodite",6:"Lugh",7:"Lugh",8:"Mimir",9:"Mimir"},K:{0:"Bast",1:"Bast",2:"Agni",3:"Agni",4:"Hephaestus",5:"Hephaestus",6:"Teutates",7:"Teutates",8:"Tyr",9:"Tyr"},M:{0:"Sekhmet",1:"Sekhmet",2:"Durga",3:"Durga",4:"Hestia",5:"Hestia",6:"Aodh",7:"Aodh",8:"Thor",9:"Thor"},L:{0:"Thoth",1:"Thoth",2:"Nakul",3:"Nakul",4:"Ares",5:"Ares",6:"Morrigan",7:"Morrigan",8:"Sigyn",9:"Sigyn"},T:{0:"Amon",1:"Amon",2:"Parvati",3:"Parvati",4:"Poseidon",5:"Poseidon",6:"Druantia",7:"Druantia",8:"Nerthus",9:"Nerthus"},Y:{0:"Seth",1:"Seth",2:"Kali",3:"Kali",4:"Zeus",5:"Zeus",6:"Anu",7:"Anu",8:"Audhumla",9:"Audhumla"},E:{0:"Isis",1:"Isis",2:"Matangi",3:"Matangi",4:"Demeter",5:"Demeter",6:"Ce-aehd",7:"Ce-aehd",8:"Sif",9:"Sif"}},odditiesMap:{e:"ei",f:"ef",h:"ah",k:"ak",m:"im",n:"in",p:"op",q:"oq",s:"us",v:"yv",w:"uw"},biomeMap:(s={},Object(O.a)(s,"Lush","himnariki"),Object(O.a)(s,"Barren","proskadur"),Object(O.a)(s,"Airless","yfirgefinn"),Object(O.a)(s,"Exotic","framandi"),Object(O.a)(s,"Scorched","brenndu"),Object(O.a)(s,"Frozen","fryst"),Object(O.a)(s,"Toxic","eiturefni"),Object(O.a)(s,"Irradiated","geislad"),s),sentinelMap:{1:"hlutlaus",2:"slaka",3:"stadall",4:"ahugavert",5:"aedi",6:"arasargjarn"},faunaMap:{1:"fjarverandi",2:"oalgengt",3:"venjulegt",4:"tid",5:"nog",6:"fullt"},floraMap:{1:"engin",2:"venjulegt",3:"milli",4:"naegur",5:"orlatur",6:"rikur"},temperamentMap:(u={},Object(O.a)(u,"Active","ull"),Object(O.a)(u,"Ambulatory","freyja"),Object(O.a)(u,"Aggresive","mani"),Object(O.a)(u,"Amenable","saga"),Object(O.a)(u,"Anxious","mimir"),Object(O.a)(u,"Bold","meili"),Object(O.a)(u,"Calm","bil"),Object(O.a)(u,"Cautious","sol"),Object(O.a)(u,"Cruel","fulla"),Object(O.a)(u,"Dangerous","hretha"),Object(O.a)(u,"Defensive","eir"),Object(O.a)(u,"Distinctive","magni"),Object(O.a)(u,"Docile","irpa"),Object(O.a)(u,"Erratic","lofn"),Object(O.a)(u,"Fearful","narvi"),Object(O.a)(u,"Hibernator","idun"),Object(O.a)(u,"Hostile","zisa"),Object(O.a)(u,"Hunter","odin"),Object(O.a)(u,"Migratory","rig"),Object(O.a)(u,"Passive","day"),Object(O.a)(u,"Predtor","vor"),Object(O.a)(u,"Prey","var"),Object(O.a)(u,"Sedate","saxnot"),Object(O.a)(u,"Shy","hod"),Object(O.a)(u,"Skittish","freyr"),Object(O.a)(u,"Stalking","thor"),Object(O.a)(u,"Submissive","od"),Object(O.a)(u,"Timid","balder"),Object(O.a)(u,"Unconcerned","syn"),Object(O.a)(u,"Unintelligent","dellingr"),Object(O.a)(u,"Unpredictable","loki"),Object(O.a)(u,"Viscious","hel"),Object(O.a)(u,"Violent","rindr"),Object(O.a)(u,"Volatile","aegir"),u)},D={spectralClassMap:{O:{0:"Quyagen",1:"Quyagen",2:"Ob'mbu",3:"Ob'mbu",4:"Oorn",5:"Oorn",6:"Othuum",7:"Othuum",8:"Othuyeg",9:"Othuyeg"},B:{0:"Baoht Z'uqqa Mogg",1:"Baoht Z'uqqa Mogg",2:"Basatan",3:"Basatan",4:"B'gnu Thun",5:"B'gnu Thun",6:"Bokrug",7:"Bokrug",8:"Bugg Shash",9:"Bugg Shash"},A:{0:"Abholos",1:"Alala",2:"Ammutseba",3:"Amon Gorloth",4:"Aphoom Zhah",5:"Arwassa",6:"Atlach Nacha",7:"Ayi'ig",8:"Aylith",9:"Axtlan"},F:{0:"Hastalyk",1:"Hastalyk",2:"Hastur",3:"Hastur",4:"H'chtelegoth",5:"H'chtelegoth",6:"Haiogh Yai",7:"Haiogh Yai",8:"Hnarqu",9:"Hnarqu"},G:{0:"Ghadamon",1:"Ghatanothoa",2:"Ghisguth",3:"Gi Hoveg",4:"Glaaki",5:"Gleeth",6:"Gloon",7:"Gobogeg",8:"Golothess",9:"Gtuhanai"},K:{0:"Kaalut",1:"Kag'Naru",2:"Kassogtha",3:"Kaunuzoth",4:"Khal'kru",5:"Klosmiebhyx",6:"K'nar'st",7:"Krang",8:"Kthaw'keth",9:"Kurpannga"},M:{0:"Mappo",1:"Mappo",2:"M'basui",3:"M'basui",4:"M'Nagalah",5:"M'Nagalah",6:"Mnomquah",7:"Mnomquah",8:"Mordiggian",9:"Mordiggian"},L:{0:"Lexur'iga",1:"Lexur'iga",2:"Lythalia",3:"Lythalia",4:"Xalafu",5:"Xalafu",6:"Xcthol",7:"Xcthol",8:"Xinlurgash",9:"Xinlurgash"},T:{0:"Thanaroa",1:"Tharapithia",2:"Thasaidon",3:"Th'rygh",4:"Tsathoggua",5:"Tulushuggua",6:"Tulush",7:"Turua",8:"Uitzilcapac",9:"Ut'Ulls Hr'Her"},Y:{0:"Yegg Ha",1:"Y'golonac",2:"Yhagni",3:"Yhashtur",4:"Y'lla",5:"Yog Sapha",6:"Yorith",7:"Ysbaddaden",8:"Ythogtha",9:"Yug Siturath"},E:{0:"Eihort",1:"Eihort",2:"Ei'lor",3:"Ei'lor",4:"Etepsed",5:"Etepsed",6:"Egnis",7:"Egnis",8:"Dhumin",9:"Dhumin"}},odditiesMap:{e:"ei",f:"ef",h:"ah",k:"ak",m:"im",n:"in",p:"op",q:"oq",s:"us",v:"yv",w:"uw"},biomeMap:(m={},Object(O.a)(m,"Lush","ehyeeog"),Object(O.a)(m,"Barren","ahyog'nglui"),Object(O.a)(m,"Airless","soth"),Object(O.a)(m,"Exotic","r'luh"),Object(O.a)(m,"Scorched","fm'latgh"),Object(O.a)(m,"Frozen","mgfm'latghnah"),Object(O.a)(m,"Toxic","n'ghanglui"),Object(O.a)(m,"Irradiated","zhro shuggog"),m),sentinelMap:{1:"ehye",2:"fhtagn",3:"nafl ehyeeog",4:"nafl or'azath",5:"mgehye'bthnk",6:"mg'lloig"},faunaMap:{1:"di osgoi",2:"yn fras",3:"cymedrol",4:"uchel",5:"cyfoethog",6:"llawn"},floraMap:{1:"di osgoi",2:"yn fras",3:"cymedrol",4:"uchel",5:"cyfoethog",6:"llawn"},temperamentMap:(h={},Object(O.a)(h,"Active","Abhoth"),Object(O.a)(h,"Ambulatory","Aletheia"),Object(O.a)(h,"Aggresive","C'thalpa"),Object(O.a)(h,"Amenable","Azhorra-Tha"),Object(O.a)(h,"Anxious","Cxaxukluth"),Object(O.a)(h,"Bold","Daoloth"),Object(O.a)(h,"Calm","Darkness"),Object(O.a)(h,"Cautious","D\u2019endrrah"),Object(O.a)(h,"Cruel","Ghroth"),Object(O.a)(h,"Dangerous","Hydra"),Object(O.a)(h,"Defensive","Ialdagorth"),Object(O.a)(h,"Distinctive","Kaajh'Kaalbh"),Object(O.a)(h,"Docile","Lu Kthu"),Object(O.a)(h,"Erratic","Mh'ithrha"),Object(O.a)(h,"Fearful","Mlandoth"),Object(O.a)(h,"Hibernator","Ngyr Korath"),Object(O.a)(h,"Hostile","Nyarlathotep"),Object(O.a)(h,"Hunter","Aiueb Gnshal"),Object(O.a)(h,"Migratory","Nyctelios"),Object(O.a)(h,"Passive","Ny Rakath"),Object(O.a)(h,"Predtor","Shabbith Ka"),Object(O.a)(h,"Prey","Shub Niggurath"),Object(O.a)(h,"Sedate","Suc'Naath"),Object(O.a)(h,"Shy","Tru'nembra"),Object(O.a)(h,"Skittish","Tulzscha"),Object(O.a)(h,"Stalking","Ubbo Sathla"),Object(O.a)(h,"Submissive","Uvhash"),Object(O.a)(h,"Timid","Xa'ligha"),Object(O.a)(h,"Unconcerned","Azathoth"),Object(O.a)(h,"Unintelligent","Xexanoth"),Object(O.a)(h,"Unpredictable","Yhoundeh"),Object(O.a)(h,"Viscious","Yibb Tstll"),Object(O.a)(h,"Violent","Yidhra"),Object(O.a)(h,"Volatile","Yog Sothoth"),h)},M=(b={},Object(O.a)(b,"Odin",C),Object(O.a)(b,"Antediluvian",D),b),w=function(e){var t=Object(j.get)(M,e);if(!t)throw new Error("Taxonomy ".concat(e," is not defined"));return t},A={preferences:{__typename:"Preferences",taxonomyId:"Odin"},systemDetails:{__typename:"SystemDetails",regionName:"",spectralClass:"",distanceFromCenter:0},planetDetails:{__typename:"PlanetDetails",biome:"Lush",sentinels:1,fauna:1,flora:1,isMoon:!1},faunaDetails:{__typename:"FaunaDetails",genus:"Felidae",temperament:"Active"},floraDetails:{__typename:"FloraDetails",genus:null},waypointDetails:{__typename:"WaypointDetails",structure:null}},S={},x=a(14),k=a(176),T=a(177),F=a(172),I=a(178),H=a(21),B=a(22),N=a(23),P=a.n(N),K=a(179),L=a(174),_=a(183),G=a(173),U=a(181),Y=function(e){var t=e.controlId,a=e.label,n=e.options,o=e.value,i=e.onChange;return r.a.createElement(_.a,{controlId:t},r.a.createElement(F.a,{componentClass:G.a,xs:4},a),r.a.createElement(F.a,{xs:8},r.a.createElement(U.a,{componentClass:"select",value:o,onChange:i},Object(j.map)(n,function(e){return r.a.createElement("option",{key:e,value:e},e)}))))},q=Object(j.curry)(function(e,t,a){return e(Object(O.a)({},t,a.target.value))}),z=function(e){var t=e.update,a=e.taxonomyId;return r.a.createElement(L.a,null,r.a.createElement(Y,{controlId:"taxonomyId",label:"Taxonomy",options:Object.keys(M),value:a,onChange:q(t,"taxonomyId")}))};function R(){var e=Object(B.a)(["\n  {\n    preferences @client {\n      taxonomyId\n    }\n  }\n"]);return R=function(){return e},e}var W=P()(R()),V=Object(j.curry)(function(e,t){return e.writeData({data:{preferences:Object(H.a)({__typename:"Preferences"},t)}})}),X=function(){return r.a.createElement(x.Query,{query:W},function(e){var t=e.data,a=t.preferences,n=(t.systemDetails,e.client),o=e.loading,i=e.error;return o?"Loading...":i?"Error!":function(e,t){var a=t.taxonomyId;return r.a.createElement(K.a,{bsStyle:"primary"},r.a.createElement(K.a.Heading,null,"Preferences"),r.a.createElement(K.a.Body,null,r.a.createElement(z,{taxonomyId:a,update:V(e)})))}(n,a)})},Q=a(46),Z=a(47),J=a(52),$=a(48),ee=a(54),te=a(182),ae=Object(j.curry)(function(e,t,a){return e(Object(O.a)({},t,a.target.value))}),ne=function(e){function t(){return Object(Q.a)(this,t),Object(J.a)(this,Object($.a)(t).apply(this,arguments))}return Object(ee.a)(t,e),Object(Z.a)(t,[{key:"render",value:function(){var e=this.props,t=e.update,a=e.regionName,n=e.spectralClass,o=e.distanceFromCenter;return r.a.createElement(L.a,{horizontal:!0},r.a.createElement(_.a,{controlId:"regionName"},r.a.createElement(F.a,{componentClass:G.a,xs:3},"Region name"),r.a.createElement(F.a,{xs:9},r.a.createElement(U.a,{type:"text",value:a,placeholder:"ex. Toswati Instability",onChange:ae(t,"regionName")}))),r.a.createElement(_.a,{controlId:"spectralClass"},r.a.createElement(F.a,{componentClass:G.a,xs:3},"Spectral class"),r.a.createElement(F.a,{xs:9},r.a.createElement(U.a,{type:"text",value:n,placeholder:"ex. F5p",onChange:ae(t,"spectralClass")}))),r.a.createElement(_.a,{controlId:"distanceFromCenter"},r.a.createElement(F.a,{componentClass:G.a,xs:3},"Distance"),r.a.createElement(F.a,{xs:9},r.a.createElement(te.a,null,r.a.createElement(te.a.Addon,null,"ly"),r.a.createElement(U.a,{type:"text",value:o,onChange:ae(t,"distanceFromCenter")})))))}}]),t}(n.Component),re=a(27),oe=a(53),ie=a(94),le=a(95),ce=a.n(le),se=a(96),ue=a.n(se),me=a(67),he=a.n(me),be=function(e){return 0===e},ge=function(e,t){return t===e.length-1},de=function(e){return Object(j.filter)(e,function(e){return e>=2})},pe=Object(j.curry)(function(e,t){return Object(j.filter)(t,function(t){return t<e.length-2})}),fe=function(e,t,a){return Object(re.a)(e).concat(Object(re.a)(ce()(t)?[a]:[]))},Oe=Object(j.flow)(function(e){return Object(j.split)(e,"")},function(e){return Object(j.reduce)(e,fe,[])}),je=function(e,t,a){return Object(j.flow)(Oe,be(t)?de:j.identity,ge(a,t)?pe(e):j.identity)(e)},ye=Object(j.flow)(ue.a,function(e){return Object(j.filter)(e,function(e){return e.length<=2})},function(e){return Object(j.map)(e,function(e){var t=Object(j.get)(e,0,0);return[t,Object(j.get)(e,1,t)]})}),ve=function(e){return Object(j.map)(e,function(t,a){return be(a)?Object(j.map)(t,function(e){return[0,e]}):(n=e,be(r=a)||ge(n,r)?Object(j.map)(t,function(e){return[e,1/0]}):ye(t));var n,r})},Ee=function(e){var t=function e(t){var a=Object(ie.a)(t),n=a[0],r=a.slice(1),o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n?Object(j.map)(n,function(t){return e(r,Object(re.a)(o).concat([t]))}):o}(e);return Object(j.flattenDepth)(t,e.length-1)},Ce=Object(j.curry)(function(e,t,a,n){var r=Object(oe.a)(a,2),o=r[0],i=r[1],l=e[n].substring(o,i);return"".concat(t).concat(l)}),De=function(e,t){return Object(re.a)(e).concat(Object(re.a)(Object(j.split)(t,/\s/g)))},Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=null!==t?he.a.create(t):he.a.create(),n=function(e){var t=Object(j.map)(Object(j.reduce)(e,De,[]),j.toLower),a=Object(j.map)(Object(j.map)(t,je),function(e){return 0===e.length?[1]:e}),n=ve(a),r=Ee(n),o=Object(j.map)(r,function(e){return Object(j.reduce)(e,Ce(t),"")});return Object(j.uniq)(o)}(e);return n[a.range(n.length)]},we=/^([OBAFGKMLTYE]{1})([0-9]{1})([efhkmnpqsvw]{0,2})$/,Ae=function(e){if(!we.test(e))throw new Error('Cannot parse invalid spectral class "'.concat(e,'"'));var t=we.exec(e),a=Object(oe.a)(t,4);return{starClass:a[1],starTemperature:a[2],oddities:a[3]}},Se=function(e,t){var a=t.regionName,n=t.spectralClass,r=xe(a),o=ke(e,n);return r&&o},xe=function(e){return e.length>2},ke=function(e,t){var a=e.spectralClassMap,n=e.odditiesMap;if(!we.test(t))return!1;var r=Ae(t),o=r.starClass,i=r.starTemperature,l=r.oddities,c=null!==Object(j.get)(a,[o,i],null),s=Object(j.filter)(Object(j.split)(l,""),function(e){return null!==Object(j.get)(n,e,null)}).length===l.length;return c&&s},Te=function(e,t){var a=e.spectralClassMap,n=t.regionName,r=t.spectralClass,o=t.distanceFromCenter,i=Ae(r),l=i.starClass,c=i.starTemperature,s=Object(j.get)(a,[l,c]),u=Me([n,s],o);return Object(j.upperFirst)(u)};function Fe(){var e=Object(B.a)(["\n  {\n    preferences @client {\n      taxonomyId\n    }\n    systemDetails @client {\n      regionName\n      spectralClass\n      distanceFromCenter\n    }\n  }\n"]);return Fe=function(){return e},e}var Ie=P()(Fe()),He=Object(j.curry)(function(e,t){return e.writeData({data:{systemDetails:Object(H.a)({__typename:"SystemDetails"},t)}})}),Be=function(e,t,a){var n=t.taxonomyId,o=w(n),i=Se(o,a);return r.a.createElement(K.a,{bsStyle:i?"success":"warning"},r.a.createElement(K.a.Heading,null,"System"),r.a.createElement(K.a.Body,null,r.a.createElement(ne,Object.assign({},a,{update:He(e)}))),r.a.createElement(K.a.Footer,null,i?function(e,t){var a=e.odditiesMap,n=t.spectralClass,r=Ae(n).oddities,o=Te(e,t),i=Object(j.map)(Object(j.split)(r,""),function(e){return Object(j.get)(a,e)});return Object(j.join)(Object(j.map)([o].concat(Object(re.a)(i)),j.upperFirst),"-")}(o,a):"Cannot generate name using supplied information"))},Ne=function(){return r.a.createElement(x.Query,{query:Ie},function(e){var t=e.data,a=t.preferences,n=t.systemDetails,r=e.client,o=e.loading,i=e.error;return o?"Loading...":i?"Error!":Be(r,a,n)})},Pe=a(175),Ke=Object(j.curry)(function(e,t,a){return e(Object(O.a)({},t,a.target.value))}),Le=Object(j.curry)(function(e,t,a){return e(Object(O.a)({},t,a.target.checked))}),_e=function(e){function t(){return Object(Q.a)(this,t),Object(J.a)(this,Object($.a)(t).apply(this,arguments))}return Object(ee.a)(t,e),Object(Z.a)(t,[{key:"render",value:function(){var e=this.props,t=e.update,a=e.biome,n=e.sentinels,o=e.fauna,i=e.flora,l=e.isMoon,c=[1,2,3,4,5,6];return r.a.createElement(L.a,{horizontal:!0},r.a.createElement(Y,{controlId:"biome",label:"Biome",options:y,value:a,onChange:Ke(t,"biome")}),r.a.createElement(Y,{controlId:"sentinels",label:"Sentinels",options:c,value:n,onChange:Ke(t,"sentinels")}),r.a.createElement(Y,{controlId:"fauna",label:"Fauna",options:c,value:o,onChange:Ke(t,"fauna")}),r.a.createElement(Y,{controlId:"flora",label:"Flora",options:c,value:i,onChange:Ke(t,"flora")}),r.a.createElement(_.a,{controlId:"isMoon"},r.a.createElement(F.a,{componentClass:G.a,xs:4},"Moon"),r.a.createElement(F.a,{xs:8},r.a.createElement(Pe.a,{checked:l,onChange:Le(t,"isMoon")}))))}}]),t}(n.Component),Ge=function(e,t){var a=e.biomeMap,n=e.sentinelMap,r=e.faunaMap,o=e.floraMap,i=t.biome,l=t.sentinels,c=t.fauna,s=t.flora,u=null!==Object(j.get)(a,i,null),m=null!==Object(j.get)(n,l,null),h=null!==Object(j.get)(r,c,null),b=null!==Object(j.get)(o,s,null);return u&&m&&h&&b},Ue=function(e,t,a){var n=a.biome,r=e.biomeMap,o=t.distanceFromCenter,i=Te(e,t),l=Object(j.get)(r,n);return Me([i,l],o)};function Ye(){var e=Object(B.a)(["\n  {\n    preferences @client {\n      taxonomyId\n    }\n    systemDetails @client {\n      regionName\n      spectralClass\n      distanceFromCenter\n    }\n    planetDetails @client {\n      biome\n      sentinels\n      fauna\n      flora\n      isMoon\n    }\n  }\n"]);return Ye=function(){return e},e}var qe=P()(Ye()),ze=Object(j.curry)(function(e,t){return e.writeData({data:{planetDetails:Object(H.a)({__typename:"SystemDetails"},t)}})}),Re=function(e,t,a,n){var o=t.taxonomyId,i=w(o),l=Se(i,a)&&Ge(i,n);return r.a.createElement(K.a,{bsStyle:l?"success":"warning"},r.a.createElement(K.a.Heading,null,"Planet"),r.a.createElement(K.a.Body,null,r.a.createElement(_e,Object.assign({},n,{update:ze(e)}))),r.a.createElement(K.a.Footer,null,l?function(e,t,a){var n=e.sentinelMap,r=e.faunaMap,o=e.floraMap,i=t.distanceFromCenter,l=a.sentinels,c=a.fauna,s=a.flora,u=a.isMoon,m=Ue(e,t,a),h=Me([Object(j.get)(n,l),Object(j.get)(r,c),Object(j.get)(o,s)],i),b=u?["M"]:[];return Object(j.join)(Object(j.map)([m,h].concat(b),j.upperFirst),"-")}(i,a,n):"Cannot generate name using supplied information"))},We=function(){return r.a.createElement(x.Query,{query:qe},function(e){var t=e.data,a=t.preferences,n=t.systemDetails,r=t.planetDetails,o=e.client,i=e.loading,l=e.error;return i?"Loading...":l?"Error!":Re(o,a,n,r)})},Ve=Object(j.curry)(function(e,t,a){return e(Object(O.a)({},t,a.target.value))}),Xe=function(e){var t=e.update,a=e.genus,n=e.temperament;return r.a.createElement(L.a,{horizontal:!0},r.a.createElement(Y,{controlId:"genus",label:"Genus",options:v,value:a,onChange:Ve(t,"genus")}),r.a.createElement(Y,{controlId:"temperament",label:"Temperament",options:E,value:n,onChange:Ve(t,"temperament")}))};function Qe(){var e=Object(B.a)(["\n  {\n    preferences @client {\n      taxonomyId\n    }\n    systemDetails @client {\n      regionName\n      spectralClass\n      distanceFromCenter\n    }\n    planetDetails @client {\n      biome\n      sentinels\n      fauna\n      flora\n      isMoon\n    }\n    faunaDetails @client {\n      genus\n      temperament\n    }\n  }\n"]);return Qe=function(){return e},e}var Ze=P()(Qe()),Je=Object(j.curry)(function(e,t){return e.writeData({data:{faunaDetails:Object(H.a)({__typename:"FaunaDetails"},t)}})}),$e=function(e,t,a,n,o){var i=t.taxonomyId,l=w(i),c=Se(l,a)&&Ge(l,n)&&function(e,t){var a=e.temperamentMap,n=t.genus,r=t.temperament,o=Object(j.indexOf)(v,n)>=0,i=null!==Object(j.get)(a,r,null);return o&&i}(l,o);return r.a.createElement(K.a,{bsStyle:c?"success":"warning"},r.a.createElement(K.a.Heading,null,"Fauna"),r.a.createElement(K.a.Body,null,r.a.createElement(Xe,Object.assign({},o,{update:Je(e)}))),r.a.createElement(K.a.Footer,null,c?function(e,t,a,n){var r=n.genus,o=n.temperament,i=e.temperamentMap,l=Ue(e,t,a),c=Object(j.get)(i,o);return Object(j.join)(Object(j.map)([l,r,c],j.upperFirst),"-")}(l,a,n,o):"Cannot generate name using supplied information"))},et=function(){return r.a.createElement(x.Query,{query:Ze},function(e){var t=e.data,a=t.preferences,n=t.systemDetails,r=t.planetDetails,o=t.faunaDetails,i=e.client,l=e.loading,c=e.error;return l?"Loading...":c?"Error!":$e(i,a,n,r,o)})},tt=function(){return r.a.createElement("div",null,r.a.createElement(k.a,null,r.a.createElement(T.a,null,r.a.createElement(F.a,{md:12},r.a.createElement("h2",null,"No Man's Sky Taxonomy")),r.a.createElement(F.a,{md:12},r.a.createElement("h6",null,"Created by"," ",r.a.createElement("a",{href:"https://github.com/Mutisz",rel:"noopener noreferrer",target:"_blank"},"Mutisz"),", based on"," ",r.a.createElement("a",{href:"https://www.odingaming.com/2018/01/15/no-mans-sky-naming-convention/",rel:"noopener noreferrer",target:"_blank"},"Odin's Convention"))))),r.a.createElement(T.a,null,r.a.createElement(I.a,{className:"show-grid"},r.a.createElement(F.a,{md:12},r.a.createElement(X,null)),r.a.createElement(F.a,{md:6,lg:4},r.a.createElement(Ne,null)),r.a.createElement(F.a,{md:6,lg:4},r.a.createElement(We,null)),r.a.createElement(F.a,{md:6,lg:4},r.a.createElement(et,null)))))},at=new d.a,nt=window.localStorage;Object(p.persistCache)({cache:at,storage:nt}).then(function(){Object(o.render)(r.a.createElement(x.ApolloProvider,{client:new g.default({cache:at,link:Object(f.a)({defaults:A,typeDefs:"\n  type Preferences {\n    taxonomyId: String!\n  }\n\n  type SystemDetails {\n    regionName: String!\n    spectralClass: String!\n    distanceFromCenter: Int!\n  }\n\n  type PlanetDetails {\n    biome: String!\n    sentinels: Int!\n    fauna: Int!\n    flora: Int!\n    isMoon: Boolean!\n  }\n\n  type FaunaDetails {\n    genus: String\n    temperament: String\n  }\n\n  type FloraDetails {\n    genus: String\n  }\n\n  type WaypointDetails {\n    structure: String\n  }\n\n  type Query {\n    preferences: Preferences!\n    systemDetails: SystemDetails!\n    planetDetails: PlanetDetails!\n    faunaDetails: FaunaDetails!\n    floraDetails: FloraDetails!\n    waypointDetails: WaypointDetails!\n  }\n",resolvers:S})})},r.a.createElement(tt,null)),document.getElementById("root")),l()}).catch(function(e){return console.error(e)})},99:function(e,t,a){e.exports=a(167)}},[[99,2,1]]]);
//# sourceMappingURL=main.26c94bb0.chunk.js.map