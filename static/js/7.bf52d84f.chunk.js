(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[7],{226:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(2),s=a(76),o=((new Date).getHours(),(new Date).getMinutes(),(new Date).getSeconds(),(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear(),(new Date).getHours(),(new Date).getMinutes(),(new Date).getSeconds(),(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear(),(new Date).getHours(),(new Date).getMinutes(),(new Date).getSeconds(),(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear(),(new Date).getHours(),(new Date).getMinutes(),(new Date).getSeconds(),(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear(),(new Date).getHours(),(new Date).getMinutes(),(new Date).getSeconds(),(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear(),(new Date).getHours(),(new Date).getMinutes(),(new Date).getSeconds(),(new Date).getDate(),(new Date).getMonth(),(new Date).getFullYear(),function(e,t){return function(a){a({type:n.x}),Object(s.a)(e).then((function(s){return a({type:n.y,payload:{message:{date:(new Date).getHours()+":"+(new Date).getMinutes()+":"+(new Date).getSeconds()+"  "+(new Date).getDate()+"/"+((new Date).getMonth()+1)+"/"+(new Date).getFullYear(),text:e,mine:"mine"},id:t}})})).catch((function(e){a({type:n.w,err:e})}))}})},279:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(8),i=a(26),l=a(12),g=a(30),c=a(226),r=a(20),d=a(241),m=a.n(d),u=(a(99),Object(i.g)((function(e){var t=e.isLogged,a=e.match,o=e.friendsMessages,i=e.myMessages,c=e.myPhoto,d=e.sendMessage,u=e.isLoading,D=a.params.id,_=function(e,t,a){var s=Object(n.useState)(""),o=Object(g.a)(s,2),i=o[0],c=o[1],r=Object(n.useState)([]),d=Object(g.a)(r,2),m=d[0],u=d[1],D=e.filter((function(e){return e.id==a}))[0];return Object(n.useEffect)((function(){var e=t.filter((function(e){return e.id==a}))[0],n=(e?[].concat(Object(l.a)(D.messages),Object(l.a)(e.messages)):Object(l.a)(D.messages)).sort((function(e,t){return e.date.split("/").reverse()>t.date.split("/").reverse()?1:-1}));u(n)}),[e,t]),{handleInput:Object(n.useCallback)((function(e){var t=e.target.value;c(t)}),[i]),handleSendMessage:Object(n.useCallback)((function(e){c("")}),[i]),conversation:m,dialog:D,textInput:i}}(o,i,D),w=_.handleInput,f=_.handleSendMessage,h=_.conversation,p=_.dialog,M=_.textInput;return s.a.createElement("div",{className:"dialogs"},s.a.createElement("div",{className:"dialogs__header"},s.a.createElement("div",{className:"dialogs__photo"},s.a.createElement("img",{src:p.img,alt:"photo",className:"dialogs__img"})),s.a.createElement("div",{className:"dialogs__name"},p.from),s.a.createElement("p",{className:p.online?"dialogs__online":"hidden"},"online"),s.a.createElement("p",{className:p.online?"hidden":"dialogs__offline"},"offline")),u?s.a.createElement(r.a,null):s.a.createElement(m.a,{className:"dialogs__scroll"},s.a.createElement("ul",{className:"dialogs__list"},h.map((function(e){return s.a.createElement("li",{key:Math.random(),className:e.mine?"dialogs__my":"dialogs__outcome"},s.a.createElement("div",{className:e.mine?"hidden":"dialogs__photo  dialogs__photo--message"},s.a.createElement("img",{src:p.img,alt:"photo",className:"dialogs__img"})),s.a.createElement("div",{className:e.mine?"dialogs__info dialogs__info--my":"dialogs__info "},s.a.createElement("div",{className:"dialogs__date"},e.date),s.a.createElement("div",{className:"dialogs__text"},e.text)),s.a.createElement("div",{className:e.mine?"dialogs__photo dialogs__photo--message":"hidden"},s.a.createElement("img",{src:c,alt:"photo",className:"dialogs__img"})))}))),s.a.createElement("form",{className:t?"dialogs__form":"hidden"},s.a.createElement("input",{type:"text",name:"messageField",className:"dialogs__input",onChange:w,value:M}),s.a.createElement("button",{className:"btn dialogs__btn",onClick:function(e){e.preventDefault(),d(M,D),f()}},"SEND"))))}))),D=Object(o.b)((function(e){return{isLogged:e.logIn.isLogged,friendsMessages:e.messages.friendsMessages,myMessages:e.messages.myMessages,isLoading:e.messages.isLoading,myPhoto:e.profile.photo}}),{sendMessage:c.a})(u);t.default=D}}]);
//# sourceMappingURL=7.bf52d84f.chunk.js.map